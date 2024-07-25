import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateRolePermissionDto {
  @IsNumber()
  role_id: number;

  @IsNumber()
  function_id: number;

  @IsNumber()
  menu_id: number;
  
}
