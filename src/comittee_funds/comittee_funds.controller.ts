import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComitteeFundsService } from './comittee_funds.service';
import { CreateComitteeFundDto } from './dto/create-comittee_fund.dto';
import { UpdateComitteeFundDto } from './dto/update-comittee_fund.dto';

@Controller('comittee-funds')
export class ComitteeFundsController {
  constructor(private readonly comitteeFundsService: ComitteeFundsService) {}

  @Post()
  create(@Body() createComitteeFundDto: CreateComitteeFundDto) {
    return this.comitteeFundsService.create(createComitteeFundDto);
  }

  // @Get()
  // findAll() {
  //   return this.comitteeFundsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.comitteeFundsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateComitteeFundDto: UpdateComitteeFundDto) {
  //   return this.comitteeFundsService.update(+id, updateComitteeFundDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.comitteeFundsService.remove(+id);
  // }
}
