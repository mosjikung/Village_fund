import { HttpException, Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { Districts } from './entities/district.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DistrictsService {
  constructor(
    @InjectRepository(Districts)
    private readonly districtRepository: Repository<Districts>,
  ) {}

  create(createDistrictDto: CreateDistrictDto) {
    return 'This action adds a new district';
  }

  findAll() {
    return `This action returns all districts`;
  }

  async getByProvinceId(provinceId: number): Promise<Districts[]> {
    return this.districtRepository.find({
      where: { 
        province_id: provinceId,
        is_deleted: false,
        is_active: true,
      } 
    });
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return `This action updates a #${id} district`;
  }

  remove(id: number) {
    return `This action removes a #${id} district`;
  }
}
