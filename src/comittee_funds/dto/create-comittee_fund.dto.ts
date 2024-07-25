import { IsString, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateComitteeFundDto {
  @ApiProperty()
  @IsString()
  first_name:string;

  @ApiProperty()
  @IsString()
  last_name:string;

  @ApiProperty()
  @IsString()
  citizen_id: string;

  @ApiProperty()
  @IsString()
  position:string;

  @ApiProperty()
  @IsString()
  date:string;

  @ApiProperty()
  @IsNumber()
  ages:number;

  @ApiProperty()
  @IsString()
  address:string;

  
  @IsString()
  created:string

  
  @IsString()
  modified:string

  
  @IsNumber()
  created_by:number;

  
  @IsNumber()
  modified_by:number;
  
  @ApiProperty()
  @IsString()
  telephone_no:string;

  @ApiProperty()
  @IsNumber()
  survey_id: number;
}
