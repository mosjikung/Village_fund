import { Injectable } from '@nestjs/common';
import { CreateRunAppFromNoDto } from './dto/create-run_app_from_no.dto';
import { UpdateRunAppFromNoDto } from './dto/update-run_app_from_no.dto';
import * as randomstring from 'randomstring';
import { RunAppFromNo } from './entities/run_app_from_no.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as dayjs from 'dayjs'

@Injectable()
export class RunAppFromNosService {
  constructor(
    @InjectRepository(RunAppFromNo)
    private readonly runAppFromNoRepository: Repository<RunAppFromNo>,
  ) {}
  async create(createRunAppFromNoDto: CreateRunAppFromNoDto) {
    const dateNow = dayjs().format('YYYY-MM-DD HH:mm:ss');

    createRunAppFromNoDto.created = dateNow;
    const dataInsert = this.runAppFromNoRepository.create(createRunAppFromNoDto)
    const responseData = await this.runAppFromNoRepository.save(dataInsert);
    return responseData;
  }

  findAll() {
    return `This action returns all runAppFromNos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} runAppFromNo`;
  }

  async update(id: number, updateRunAppFromNoDto: UpdateRunAppFromNoDto) {
    const dateNow = dayjs().format('YYYY-MM-DD HH:mm:ss');

    updateRunAppFromNoDto.modified = dateNow;
    
    let dataForUpdate = await this.runAppFromNoRepository.findOneBy({id : id});

    if(updateRunAppFromNoDto.survey_id !== undefined) {
      dataForUpdate.survey_id = updateRunAppFromNoDto.survey_id
    }

    
    const responseDataUpdate = await this.runAppFromNoRepository.save(dataForUpdate)
    return responseDataUpdate;
  }

  remove(id: number) {
    return `This action removes a #${id} runAppFromNo`;
  }

  async findByRunNo(form_no: string) {
    const runningNo = await this.runAppFromNoRepository.findOneBy({form_no: form_no})
    return runningNo
  }

  // length = length of character random
  generateCode(length: number): CreateRunAppFromNoDto {
    let runNo: any;
    runNo = { form_no: randomstring.generate(length) }
    return runNo;
  }
}
