import { Module } from '@nestjs/common';
import { RunAppFromNosService } from './run_app_from_nos.service';
import { RunAppFromNosController } from './run_app_from_nos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RunAppFromNo } from './entities/run_app_from_no.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RunAppFromNo])
  ],
  controllers: [RunAppFromNosController],
  providers: [RunAppFromNosService],
  exports: [RunAppFromNosService]
})
export class RunAppFromNosModule {}
