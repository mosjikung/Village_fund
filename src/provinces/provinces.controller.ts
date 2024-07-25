import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { ProvincesService } from './provinces.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { UpdateProvinceDto } from './dto/update-province.dto';
import { Provinces } from './entities/province.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

@Controller('provinces')
export class ProvincesController {
  constructor(private readonly provincesService: ProvincesService) {}

  // @Post()
  // create(@Body() createProvinceDto: CreateProvinceDto) {
  //   return this.provincesService.create(createProvinceDto);
  // }

  @Public()
  @Get('/all_data')
  @ApiOperation({ summary: 'provinces', 
    description: 
      `<br>
        All Data of provinces <br>
      `
  })
  @ApiResponse({ status: 200, description: 'Good' })
  @ApiResponse({ status: 400, description: 'Bad' })
  async findAll() {
    const result = await this.provincesService.findAll();
    if (result) {
      return result;
    } else {
      throw new NotFoundException(`Provinces data not found`);
    }
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.provincesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProvinceDto: UpdateProvinceDto) {
  //   return this.provincesService.update(+id, updateProvinceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.provincesService.remove(+id);
  // }
}
