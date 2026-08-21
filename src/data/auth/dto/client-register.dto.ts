import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ClientRegisterDto {
  @IsString()
  @IsNotEmpty()
  password: string;

  password_length: number;

  @IsString()
  @IsNotEmpty()
  first_name: string;
  @IsString()
  @IsOptional()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  phone_number: string;
  @IsString()
  @IsOptional()
  phone_number_format: string;
  @IsString()
  @IsOptional()
  referrer: string;
  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  fbToken: string;
  @IsString()
  @IsOptional()
  country: string;
  @IsString()
  @IsOptional()
  country_code: string;
  @IsString()
  @IsOptional()
  device_data: string;

  @IsOptional()
  language?: string;
}

export class ClientForgotPasswordDto {
  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  language?: string;
}
