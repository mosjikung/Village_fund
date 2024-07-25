import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Query, NotFoundException } from '@nestjs/common';
import { SurveiesService } from './surveies.service';
import { CreateSurveyDto } from './dto/create-survey.dto';
import { UpdateSurveyDto } from './dto/update-survey.dto';
import { Public } from 'src/decorators/public.decorator';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Surveies')
@Controller('surveies')
export class SurveiesController {
  constructor(
    private readonly surveiesService: SurveiesService,
    

  ) {}

  @Public()
  @Post()
  async create(
    @Body(
      //new ValidationPipe()
    ) createSurveyDto: CreateSurveyDto
  ) {
    
    return this.surveiesService.create(createSurveyDto);
  }

  @Get()
  findAll() {
    return this.surveiesService.findAll();
  }

  @Public()
  @Get('/get-all-survey')
  @ApiOperation({ 
    summary: 'surveies', 
    description: 
    ` <br>
      All Data of surveies <br>
      and search by {keyword} <br>
      {offset} and {limit} for pagination page <br>
    `
  })
  @ApiResponse({ status: 200, description: 'Good' })
  @ApiResponse({ status: 400, description: 'Bad' })
  @ApiQuery({
    name: 'keyword',
    required: false
  })
  @ApiQuery({
    name: 'province_id',
    required: false
  })
  @ApiQuery({
    name: 'district_id',
    required: false
  })
  @ApiQuery({
    name: 'subdistrict_id',
    required: false
  })
  @ApiQuery({
    name: 'status_village_fund',
    required: false
  })
  @ApiQuery({
    name: 'status_profit',
    required: false
  })
  @ApiQuery({
    name: 'is_sent_budget',
    required: false
  })
  @ApiQuery({
    name: 'offset',
    required: false
  })
  @ApiQuery({
    name: 'limit',
    required: false
  })
  async getAllSurvey(
    @Query('keyword') keyword: string,
    @Query('province_id') province_id: number,
    @Query('district_id') district_id: number,
    @Query('subdistrict_id') subdistrict_id: number,
    @Query('status_village_fund') status_village_fund: number,
    @Query('status_profit') status_profit: number,
    @Query('is_sent_budget') is_sent_budget: number,
    @Query('offset') offset: number,
    @Query('limit') limit: number,
  ) {
    const dataSurveys = await this.surveiesService.getAllSurvey(keyword, province_id, district_id, subdistrict_id, status_village_fund, status_profit, is_sent_budget, offset, limit)
    return {
      'data': dataSurveys,
      'count': dataSurveys.length
    }
  }

  @Public()
  @Get('/get-survey-by-id/:SurveyId')
  async getSurveyById(@Param('SurveyId') SurveyId: string) {
    const result = await this.surveiesService.getSurveyById(Number(SurveyId));
    if (result) {
      return result;
    } else {
      throw new NotFoundException(`Survey with id: ${SurveyId} not found`);
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.surveiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSurveyDto: UpdateSurveyDto) {
    return this.surveiesService.update(+id, updateSurveyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.surveiesService.remove(+id);
  }
}
