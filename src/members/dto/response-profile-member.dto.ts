import { IsInt, IsString, IsEmail, IsPhoneNumber, ValidateNested, IsArray, IsBoolean } from 'class-validator';

// Menu DTO
class MenuDTO {
    @IsInt()
    id: number;

    @IsString()
    link: string;

    @IsString()
    menu_type: string;

    @IsString()
    group: string;

    @IsInt()
    parent_id: number | null;

    @IsInt()
    level: number | null;

    @IsBoolean()
    is_label: boolean;

    @IsString()
    regex: string | null;

    @IsString()
    name_th: string;

    @IsString()
    name_en: string;
}

// Function DTO
class FunctionDTO {
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @ValidateNested()
    menu: MenuDTO;
}

// RolePermission DTO
class RolePermissionDTO {
    @IsInt()
    id: number;

    @IsInt()
    role_id: number;

    @IsArray()
    @ValidateNested({ each: true })
    function: FunctionDTO[];
}

// Role DTO
class RoleDTO {
    @IsString()
    name_th: string;

    @IsString()
    name_en: string;

    @ValidateNested()
    role_permission: RolePermissionDTO[];
}

// User DTO
export class MemberResponseDTO {
    @IsInt()
    id: number;

    @IsEmail()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    last_name: string;

    @IsPhoneNumber('TH')
    phone_number: string;

    @ValidateNested()
    role: RoleDTO;
}

