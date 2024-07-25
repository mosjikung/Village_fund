import { Module } from '@nestjs/common';
import { FunctionsService } from './functions.service';
import { FunctionsController } from './functions.controller';
import { Function } from './entities/function.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Function])
  ],
  controllers: [FunctionsController],
  providers: [FunctionsService],
})
export class FunctionsModule {}
