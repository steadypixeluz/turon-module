import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateCustomerDto {
  @IsString()
  @IsOptional()
  phone_number: string;

  @IsString()
  @IsOptional()
  full_name: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  country: string;
  @IsString()
  @IsOptional()
  profile_qr: string;
  @IsString()
  @IsOptional()
  lang: string;

  @IsOptional()
  photo: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsString()
  @IsOptional()
  birth_date: string;

  @IsOptional()
  password: string;
  @IsOptional()
  password_length: number;
  @IsOptional()
  birth_date_format: string;
  @IsOptional()
  language: string;
}
