import { Injectable } from '@nestjs/common';
import { CreateSubdistrictDto } from './dto/create-subdistrict.dto';
import { UpdateSubdistrictDto } from './dto/update-subdistrict.dto';
import { Subdistricts } from './entities/subdistrict.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubdistrictsService {
  constructor(
    @InjectRepository(Subdistricts)
    private readonly subdDistrictRepository: Repository<Subdistricts>,
  ) {}

  create(createSubdistrictDto: CreateSubdistrictDto) {
    return 'This action adds a new subdistrict';
  }

  findAll() {
    return `This action returns all subdistricts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subdistrict`;
  }

  async getByDistrictId(provinceId: number): Promise<Subdistricts[]> {
    return this.subdDistrictRepository.find({
      where: { 
        district_id: provinceId,
        is_deleted: false,
        is_active: true,
      } 
    });
  }

  update(id: number, updateSubdistrictDto: UpdateSubdistrictDto) {
    return `This action updates a #${id} subdistrict`;
  }

  remove(id: number) {
    return `This action removes a #${id} subdistrict`;
  }
}
