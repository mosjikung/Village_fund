import { Injectable } from '@nestjs/common';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipalities } from './entities/municipality.entity';

@Injectable()
export class MunicipalitiesService {
  constructor(
    @InjectRepository(Municipalities)
    private municipalitiesRepository: Repository<Municipalities>,
  ) {}

  create(createMunicipalityDto: CreateMunicipalityDto) {
    return 'This action adds a new municipality';
  }

  findAll() {
    return `This action returns all municipalities`;
  }
  
  async getByDistrictId(subdistrictId: number): Promise<Municipalities[]> {
    return this.municipalitiesRepository.find({ 
      where: { subdistrict_id: subdistrictId , is_deleted : false , is_active :true  }  
    });
  }

  update(id: number, updateMunicipalityDto: UpdateMunicipalityDto) {
    return `This action updates a #${id} municipality`;
  }

  remove(id: number) {
    return `This action removes a #${id} municipality`;
  }
}
