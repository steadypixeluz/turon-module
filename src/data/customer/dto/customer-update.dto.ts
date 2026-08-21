import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateCustomerDto {
  @IsString()
  @IsOptional()
  last_name: string;

  @IsString()
  @IsOptional()
  first_name: string;

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
  birth_date_format: string;

  @IsOptional()
  language: string;
}
