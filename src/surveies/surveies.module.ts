import { Module } from '@nestjs/common';
import { SurveiesService } from './surveies.service';
import { SurveiesController } from './surveies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Surveies } from './entities/survey.entity';
import { RunAppFromNosModule } from 'src/run_app_from_nos/run_app_from_nos.module';
import { ComitteeFundsModule } from 'src/comittee_funds/comittee_funds.module';
import { AppModule } from 'src/app.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Surveies]),
    RunAppFromNosModule,
    ComitteeFundsModule,
  ],
  controllers: [SurveiesController],
  providers: [SurveiesService],
  exports:[SurveiesService]
})
export class SurveiesModule {}
