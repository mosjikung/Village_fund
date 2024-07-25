import { HttpException, Injectable } from '@nestjs/common';
import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
import { Repository } from 'typeorm';
import { Titles } from './entities/title.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TitlesService {
  constructor(
    @InjectRepository(Titles)
    private titlesRepository: Repository<Titles>,
  ) {}
  create(createTitleDto: CreateTitleDto) {
    return 'This action adds a new title';
  }

  async findAll() {
    try {
      const titles = await this.titlesRepository.find({
        where: {
          is_deleted: false,
          is_active: true,
        },
        order: {
          sort: 'ASC',
        },
      });
      return titles;
    } catch (error) {
      throw new HttpException({
        error_code: 4003,
        message: 'canNotFindData.',
      }, 401)
    }
    
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} title`;
  // }

  // update(id: number, updateTitleDto: UpdateTitleDto) {
  //   return `This action updates a #${id} title`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} title`;
  // }
}
