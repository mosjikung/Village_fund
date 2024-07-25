import { HttpException, Injectable } from '@nestjs/common';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { Provinces } from './entities/province.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProvincesService {
  constructor(
    @InjectRepository(Provinces)
    private readonly provincesRepository: Repository<Provinces>,
  ) {}

  create(createProvinceDto: CreateProvinceDto) {
    return 'This action adds a new province';
  }

  async findAll(): Promise<Provinces[]> {
    return this.provincesRepository.find({
      where: {
        is_deleted: false,
        is_active: true,
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} province`;
  }

  update(id: number, updateProvinceDto: UpdateProvinceDto) {
    return `This action updates a #${id} province`;
  }

  remove(id: number) {
    return `This action removes a #${id} province`;
  }
}
