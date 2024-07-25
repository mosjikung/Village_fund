import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { SubdistrictsService } from './subdistricts.service';
import { CreateSubdistrictDto } from './dto/create-subdistrict.dto';
import { UpdateSubdistrictDto } from './dto/update-subdistrict.dto';
import { Public } from 'src/decorators/public.decorator';

@Controller('subdistricts')
export class SubdistrictsController {
  constructor(private readonly subdistrictsService: SubdistrictsService) {}

  // @Post()
  // create(@Body() createSubdistrictDto: CreateSubdistrictDto) {
  //   return this.subdistrictsService.create(createSubdistrictDto);
  // }

  // @Get()
  // findAll() {
  //   return this.subdistrictsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.subdistrictsService.findOne(+id);
  // }

  @Public()
  @Get(':byDistrictId')
  async getByDistrictId(@Param('byDistrictId') byDistrictId: string) {
    const result = await this.subdistrictsService.getByDistrictId(Number(byDistrictId));
    if (result) {
      return result;
    } else {
      throw new NotFoundException(`SubDistrict with districts ${byDistrictId} not found`);
    }
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSubdistrictDto: UpdateSubdistrictDto) {
  //   return this.subdistrictsService.update(+id, updateSubdistrictDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.subdistrictsService.remove(+id);
  // }
}
