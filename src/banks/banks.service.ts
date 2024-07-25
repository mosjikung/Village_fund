import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Banks } from './entities/bank.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BanksService {
  constructor(
    @InjectRepository(Banks)
    private readonly bankRepository: Repository<Banks>,
  ) {}

  // create(createBankDto: CreateBankDto) {
  //   return 'This action adds a new bank';
  // }

  // findAll() {
  //   return `This action returns all banks`;
  // }

  async findAll(): Promise<Banks[]> {
    return this.bankRepository.find({
      where: {
        is_deleted: false,
        is_active: true,
      },
      order: {
        sort: 'ASC', // หรือ 'DESC' ตามที่คุณต้องการ
      },
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} bank`;
  // }

  // update(id: number, updateBankDto: UpdateBankDto) {
  //   return `This action updates a #${id} bank`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} bank`;
  // }
}
