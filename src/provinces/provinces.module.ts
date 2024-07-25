import { Module } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { ProvincesController } from './provinces.controller';
import { Provinces } from './entities/province.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Provinces]),
  ],
  controllers: [ProvincesController],
  providers: [ProvincesService],
})
export class ProvincesModule {}
