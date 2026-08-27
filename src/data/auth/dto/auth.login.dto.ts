import {
  IsNotEmpty,
  IsString,
  IsOptional
} from 'class-validator';
export class AuthLoginDto {
  @IsString()
  @IsNotEmpty()
  login: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsOptional()
  remember: string;
}
