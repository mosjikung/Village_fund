import { HttpException, Injectable } from '@nestjs/common';
import { CreateConfigDto } from './dto/create-config.dto';
import { UpdateConfigDto } from './dto/update-config.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Configs } from './entities/config.entity';
import { SurveiesService } from 'src/surveies/surveies.service';

@Injectable()
export class ConfigsService {
  constructor(
    @InjectRepository(Configs)
    private configRepository: Repository<Configs>,
    private surviesService:SurveiesService
  ) {}
  create(createConfigDto: CreateConfigDto) {
    return 'This action adds a new config';
  }

  async findAll(){
    
    try {
      const configs = await this.configRepository.find({
        select: ["value"],
        where: { is_deleted: false }, // Add this condition
      });
      const score = await this.surviesService.countAll()
      const total_data_score = configs.reduce((sum, { value }) => sum + +value, 0);
      const result = {
        village_fund_total: total_data_score,
        count_all: score,
      };
      return result
    } catch (error) {
      throw new HttpException({
        error_code: 4003,
        message: 'canNotFindData.',
      }, 401)
    }
    
  }

  findOne(id: number) {
    return `This action returns a #${id} config`;
  }

  update(id: number, updateConfigDto: UpdateConfigDto) {
    return `This action updates a #${id} config`;
  }

  remove(id: number) {
    return `This action removes a #${id} config`;
  }
}
