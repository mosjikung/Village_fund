import { Module } from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { MunicipalitiesController } from './municipalities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Municipalities } from './entities/municipality.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Municipalities])],
  controllers: [MunicipalitiesController],
  providers: [MunicipalitiesService],
})
export class MunicipalitiesModule {}
