import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateRunAppFromNoDto {
  @IsString()
  form_no: string;

  @IsBoolean()
  is_deleted: boolean;

  @IsString()
  created: string;

  @IsNumber()
  created_by: number;

  @IsString()
  modified: string;

  @IsNumber()
  modified_by: number;

}
