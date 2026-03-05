import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '../../../enums';
export class AdminCreateDto {
  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  role: Role;
  @IsString()
  @IsNotEmpty()
  login: string;
  @IsString()
  phone_number: string;
  @IsNotEmpty()
  @IsString()
  full_name: string;
}

export class CreateUserMenu {
  @IsString()
  @IsOptional()
  user?: string;

  @IsString()
  @IsOptional()
  menu?: string;
}
