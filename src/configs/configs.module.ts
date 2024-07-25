import { Module } from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { ConfigsController } from './configs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configs } from './entities/config.entity';
import { SurveiesModule } from '../surveies/surveies.module';

@Module({
  imports: [TypeOrmModule.forFeature([Configs]),
SurveiesModule],
  controllers: [ConfigsController],
  providers: [ConfigsService],
  exports:[ConfigsService]
})
export class ConfigsModule {}
