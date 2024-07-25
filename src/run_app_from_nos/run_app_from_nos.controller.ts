import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RunAppFromNosService } from './run_app_from_nos.service';
import { CreateRunAppFromNoDto } from './dto/create-run_app_from_no.dto';
import { UpdateRunAppFromNoDto } from './dto/update-run_app_from_no.dto';

@Controller('run-app-from-nos')
export class RunAppFromNosController {
  constructor(private readonly runAppFromNosService: RunAppFromNosService) {}

  @Post()
  create(@Body() createRunAppFromNoDto: CreateRunAppFromNoDto) {
    return this.runAppFromNosService.create(createRunAppFromNoDto);
  }

  @Get()
  findAll() {
    return this.runAppFromNosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.runAppFromNosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRunAppFromNoDto: UpdateRunAppFromNoDto) {
    return this.runAppFromNosService.update(+id, updateRunAppFromNoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.runAppFromNosService.remove(+id);
  }
}
