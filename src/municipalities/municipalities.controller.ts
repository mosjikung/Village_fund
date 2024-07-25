import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { MunicipalitiesService } from './municipalities.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller('municipalities')
export class MunicipalitiesController {
  constructor(private readonly municipalitiesService: MunicipalitiesService) {}

  // @Post()
  // create(@Body() createMunicipalityDto: CreateMunicipalityDto) {
  //   return this.municipalitiesService.create(createMunicipalityDto);
  // }

  // @Get()
  // findAll() {
  //   return this.municipalitiesService.findAll();
  // }

  @Public()
  @Get(':subdistrictId')
  async getByDistrictId(@Param('subdistrictId') subdistrictId: string) {
    const result = await this.municipalitiesService.getByDistrictId(Number(subdistrictId));
    if (result) {
      return result;
    } else {
      throw new NotFoundException(`Municipality with subdistrictId ${subdistrictId} not found`);
    }
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMunicipalityDto: UpdateMunicipalityDto) {
  //   return this.municipalitiesService.update(+id, updateMunicipalityDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.municipalitiesService.remove(+id);
  // }
}
