import { Module } from '@nestjs/common';
import { ComitteeFundsService } from './comittee_funds.service';
import { ComitteeFundsController } from './comittee_funds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comittee_funds } from './entities/comittee_fund.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comittee_funds])],
  controllers: [ComitteeFundsController],
  providers: [ComitteeFundsService],
  exports:[ComitteeFundsService]
})
export class ComitteeFundsModule {}
