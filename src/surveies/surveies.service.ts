import { HttpException, Injectable } from '@nestjs/common';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Surveies } from './entities/survey.entity';
import { ILike, Like, Raw, Repository } from 'typeorm';
import { CreateRunAppFromNoDto } from 'src/run_app_from_nos/dto/create-run_app_from_no.dto';
import { RunAppFromNosService } from 'src/run_app_from_nos/run_app_from_nos.service';
import * as dayjs from 'dayjs'
import { ComitteeFundsService } from 'src/comittee_funds/comittee_funds.service';
import { MailerService } from '@nestjs-modules/mailer';
import { template_email } from 'src/template_email/email_template';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';



@Injectable()
export class SurveiesService {
  constructor(
    @InjectRepository(Surveies)
    private readonly surveiesRepository: Repository<Surveies>,
    private runAppFromNosService: RunAppFromNosService,
    private comiteeFundsService: ComitteeFundsService,
    private mailService: MailerService,
  ) {
    // Extend dayjs with plugins
    dayjs.extend(utc);
    dayjs.extend(timezone);

    // Set the default timezone
    dayjs.tz.setDefault('Asia/Bangkok');
    dayjs.locale('en');
  }
  async create(createSurveyDto: CreateSurveyDto) {
    
    // generate random run no 7 digit
    let runningNo: CreateRunAppFromNoDto = await this.runAppFromNosService.generateCode(7);

    // duplicate check
    let isDuplicateRunningNo = await this.runAppFromNosService.findByRunNo(runningNo.form_no);

    // Check if the running number is duplicate
    if (isDuplicateRunningNo) {
      // If it's duplicate, recursively call the function again
      return this.create(createSurveyDto);
    } else {
      try {
        // If it's not duplicate, insert run_no to DB
        const resRunningNo = await this.runAppFromNosService.create(runningNo);

        // set current dat time format
        const dateNow =  dayjs().utcOffset(7).format('YYYY-MM-DD HH:mm:ss');
        createSurveyDto.date_survay = dateNow;
        //createSurveyDto.legal_register_date = dayjs(createSurveyDto.legal_register_date).format('YYYY-MM-DD');
        createSurveyDto.created = dateNow;
        createSurveyDto.modified = dateNow;
  
        createSurveyDto.legal_register_date = createSurveyDto.legal_register_date !== undefined ? createSurveyDto.legal_register_date : null

        
        // map form_no
        createSurveyDto.run_app_form_no = resRunningNo.form_no;

        

        createSurveyDto.bank_id_1 = typeof createSurveyDto.bank_id_1 === 'number' ? createSurveyDto.bank_id_1 : null
        createSurveyDto.bank_id_2 = typeof createSurveyDto.bank_id_2 === 'number' ? createSurveyDto.bank_id_2 : null
        createSurveyDto.bank_id_3 = typeof createSurveyDto.bank_id_3 === 'number' ? createSurveyDto.bank_id_3 : null
        createSurveyDto.bank_id_4 = typeof createSurveyDto.bank_id_4 === 'number' ? createSurveyDto.bank_id_4 : null
        createSurveyDto.municipality_id = typeof createSurveyDto.municipality_id === 'number' ? createSurveyDto.municipality_id : null

        const array_check_is_sent_budget: number[] = [];
        if (createSurveyDto.is_year_2562 === true){
          array_check_is_sent_budget.push(2562);
        } 

       
        if (createSurveyDto.is_year_2563 === true){
          array_check_is_sent_budget.push(2563);
        }

       
        if (createSurveyDto.is_year_2564 === true){
          array_check_is_sent_budget.push(2564);
        }

        if (createSurveyDto.is_year_2565 === true){
          array_check_is_sent_budget.push(2565);
        }

        if (createSurveyDto.is_year_2566 === true){
          array_check_is_sent_budget.push(2566);
        }

        let result_is_check_budget: number;
        if (!array_check_is_sent_budget || array_check_is_sent_budget.length === 0) {
          result_is_check_budget = 1;
        }else{
          
          const sortedYears = array_check_is_sent_budget.sort((a, b) => a - b);

          for (let i = 0; i < sortedYears.length - 2; i++) {
            // เช็คว่าปี i, i+1, i+2 เรียงต่อกันหรือไม่
            if (sortedYears[i] + 1 !== sortedYears[i + 1] || sortedYears[i + 1] + 1 !== sortedYears[i + 2]) {
              // กรณีเรียงติดกัน
              result_is_check_budget = 3;
            }
          }
          
          // กรณีปีเรียงไม่ติดกัน
          if (result_is_check_budget !== 3 && result_is_check_budget !== 1 && array_check_is_sent_budget.length >= 3) {
            result_is_check_budget = 2;
          }else{
            result_is_check_budget = 3;
          }
        }

        
        createSurveyDto.is_sent_budget = result_is_check_budget
      

        // insert into surveies TB
        const dataInsert = this.surveiesRepository.create(createSurveyDto)
        const responseData = await this.surveiesRepository.save(dataInsert);

        const comitteeData = createSurveyDto.comittee_funds

        if(comitteeData !== undefined && comitteeData.length > 0) {
          await this.comiteeFundsService.createArray(comitteeData, responseData.id)
        }
        
        
        // // update survey_id from surveies id into run_app_form_nos TB 
        resRunningNo.survey_id = responseData.id;
        await this.runAppFromNosService.update(resRunningNo.id, resRunningNo)

        const subject: string = "ขอบคุณที่ลงทะเบียนยืนยันสถานะการดำเนินกิจการกองทุนหมู่บ้านกับเรา";

        await this.sendMail(responseData.email, subject, responseData.run_app_form_no, responseData.telephone_no, dayjs(responseData.created).add(543, 'year').format('MM-DD-YYYY'))

        return responseData;
      }catch (e) {
        console.log(e)
        throw new HttpException({
          error_code: 5000,
          message: 'internalServer.',
        }, 500)
      }
    }
    
    return ;
  }

  async findAll() {
    return await this.surveiesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} survey`;
  }

  update(id: number, updateSurveyDto: UpdateSurveyDto) {
    return `This action updates a #${id} survey`;
  }

  remove(id: number) {
    return `This action removes a #${id} survey`;
  }

  async sendMail(mailTo: string, subject: string, form_no: string, phone_no: string, dataTime: string) {
    try {
      
      const a = await this.mailService.sendMail({
        from: `"Village Fund" <your-email@gmail.com>`,
        to: mailTo,
        // from: 'sorasak@zicure.com',
        
        subject: subject,
        html: template_email(mailTo, form_no, phone_no, dataTime)
      });
    }catch (e) {
      console.log(e)
    }
  }

  async getAllSurvey(keyword: string, province_id: number, district_id: number, subdistrict_id: number, status_village_fund: number, status_profit: number, is_sent_budget: number, offset: number, limit: number): Promise<Surveies[]> {
    const whereOption = [];
  
    if (province_id) {
      whereOption.push({ province_id: province_id });
    }
    if (district_id) {
      whereOption.push({ district_id: district_id });
    }
    if (subdistrict_id) {
      whereOption.push({ subdistrict_id: subdistrict_id });
    }
    if (status_village_fund) {
      whereOption.push({ status_village_fund: status_village_fund });
    }
    if (status_profit) {
      whereOption.push({ status_profit: status_profit });
    }
    if (is_sent_budget) {
      whereOption.push({ is_sent_budget: is_sent_budget });
    }
  
    if (keyword) {
      whereOption.push(
        {
          or: [
            { first_name: ILike(`%${keyword}%`) },
            { last_name: ILike(`%${keyword}%`) },
            { village_fund_no: ILike(`%${keyword}%`) },
            { run_app_form_no: ILike(`%${keyword}%`) },
          ],
        },
      );
    }
  
    const all_data = await this.surveiesRepository.find({
      where: whereOption,
      skip: offset,
      take: limit,
    });
  
    return all_data
  }

  async getCountSurvey(keyword: string): Promise<number> {
    const queryBuilder = this.surveiesRepository.createQueryBuilder('surveies');
  
    queryBuilder.where({
      is_deleted: false,
    });
    
    if (keyword) {
      queryBuilder.andWhere('(LOWER(surveies.first_name) LIKE LOWER(:keyword) OR LOWER(surveies.last_name) LIKE LOWER(:keyword) OR LOWER(surveies.village_fund_no) LIKE LOWER(:keyword) OR LOWER(surveies.run_app_form_no) LIKE LOWER(:keyword))', { keyword: `%${keyword}%` });
    }
  
    const count = await queryBuilder.getCount();
    return count;
  }

  async countAll(){
    const score = this.surveiesRepository.count({ where: { is_deleted: false } });
    return score
  }
  
  async getSurveyById(SurveyId: number): Promise<Surveies[]> {
    return this.surveiesRepository.find({
      where: { 
        id: SurveyId,
        is_deleted: false,
      } 
    });
  }

  
}
