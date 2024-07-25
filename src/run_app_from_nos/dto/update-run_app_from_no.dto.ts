import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { CreateRunAppFromNoDto } from './create-run_app_from_no.dto';

export class UpdateRunAppFromNoDto {
  @IsString()
  form_no: string;

  @IsNumber()
  survey_id: number

  @IsBoolean()
  is_deleted: boolean;

  @IsString()
  modified: string;

  @IsNumber()
  modified_by: number;
}
