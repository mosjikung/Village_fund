import { HttpException, Injectable } from '@nestjs/common';
import { CreateComitteeFundDto } from './dto/create-comittee_fund.dto';
import { UpdateComitteeFundDto } from './dto/update-comittee_fund.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comittee_funds } from './entities/comittee_fund.entity';
import * as dayjs from 'dayjs';

@Injectable()
export class ComitteeFundsService {
  constructor(
    @InjectRepository(Comittee_funds)
    private readonly comiteeFundRepository: Repository<Comittee_funds>,
  ) {}

  async create(ComitteefundDto: CreateComitteeFundDto): Promise<Comittee_funds> {
    const dateNow = dayjs().format('YYYY-MM-DD HH:mm:ss');
    ComitteefundDto.created = dateNow;
    ComitteefundDto.modified = dateNow;
    const comitteefunds = this.comiteeFundRepository.create(ComitteefundDto);
    return await this.comiteeFundRepository.save(comitteefunds);
  }

  async createArray(ComitteefundDto: CreateComitteeFundDto[], survey_id: number) {
    try {
      const dateNow = dayjs().format('YYYY-MM-DD HH:mm:ss');
      ComitteefundDto.forEach((v: any, i: number) => {
        v.survey_id = survey_id
        v.created = dateNow;
        v.modified = dateNow;
        const comitteefunds = this.comiteeFundRepository.create(v);
        this.comiteeFundRepository.save(comitteefunds);
      });
    }catch(e) {
      throw new HttpException({
        error_code: 4003,
        message: 'canNotFindData.',
        error: e
      }, 401)
    }
  }

  findAll() {
    return `This action returns all comitteeFunds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comitteeFund`;
  }

  update(id: number, updateComitteeFundDto: UpdateComitteeFundDto) {
    return `This action updates a #${id} comitteeFund`;
  }

  remove(id: number) {
    return `This action removes a #${id} comitteeFund`;
  }
}
