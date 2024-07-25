import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { DistrictsService } from './districts.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';

@Controller('districts')
export class DistrictsController {
  constructor(private readonly districtsService: DistrictsService) {}

  // @Post()
  // create(@Body() createDistrictDto: CreateDistrictDto) {
  //   return this.districtsService.create(createDistrictDto);
  // }

  // @Get()
  // findAll() {
  //   return this.districtsService.findAll();
  // }

  @Public()
  @Get(':byProvinceId')
  async getByProvinceId(@Param('byProvinceId') byProvinceId: string) {
    console.log(byProvinceId)
    console.log(Number(byProvinceId))
    const result = await this.districtsService.getByProvinceId(Number(byProvinceId));
    if (result) {
      return result;
    } else {
      throw new NotFoundException(`District with provinces ${byProvinceId} not found`);
    }
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDistrictDto: UpdateDistrictDto) {
  //   return this.districtsService.update(+id, updateDistrictDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.districtsService.remove(+id);
  // }
}
