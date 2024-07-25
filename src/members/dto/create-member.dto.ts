import { IsNotEmpty, IsString } from "class-validator";

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  created: string

  @IsString()
  modified: string
}
