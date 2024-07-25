import { IsString } from "class-validator";

export class CreateRoleDto {
  @IsString()
  name_th: string;

  @IsString()
  name_en: string;

  @IsString()
  description: string;  
}
