import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  // @Post()
  // create(@Body() createBankDto: CreateBankDto) {
  //   return this.banksService.create(createBankDto);
  // }

  // @Get()
  // findAll() {
  //   return this.banksService.findAll();
  // }

  @Public()
  @Get('/all_data')
  @ApiOperation({ summary: 'banks', 
    description: 
      `<br>
        All Data of banks <br>
      `
  })
  @ApiResponse({ status: 200, description: 'Good' })
  @ApiResponse({ status: 400, description: 'Bad' })
  async findAll() {
    const result = await this.banksService.findAll();
    if (result) {
      return result;
    } else {
      throw new NotFoundException(`Banks data not found`);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.banksService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBankDto: UpdateBankDto) {
  //   return this.banksService.update(+id, updateBankDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.banksService.remove(+id);
  // }
}
