import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsOptional()
  phone_number: string;

  @IsString()
  @IsOptional()
  first_name: string;
  @IsString()
  @IsOptional()
  last_name: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  country: string;

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
  birth_date_format: string;
  @IsOptional()
  language: string;





  // & CUSTOMER COMPANY

  @IsString()
  company_name: string;
  @IsString()
  company_inn: string;
  @IsString()
  @IsOptional()
  company_okonx: string;
  @IsString()
  @IsOptional()
  company_address: string;
  @IsString()
  @IsOptional()
  company_country: string;
  @IsString()
  @IsOptional()
  company_region: string;
  @IsString()
  @IsOptional()
  company_district: string;
  @IsString()
  company_email: string;
  @IsString()
  company_phone: string;
  @IsString()
  @IsOptional()
  post_code: string;

  @IsOptional()
  @IsOptional()
  web_site: string;

  @IsOptional()
  logo: string;
  @IsOptional()
  invoice_logo: string;

  @IsString()
  @IsOptional()
  director_pinfl: string;
  @IsString()
  @IsOptional()
  director_name: string;
  @IsString()
  @IsOptional()
  company_mfo: string;
  @IsString()
  @IsOptional()
  company_bank_name: string;
  @IsString()
  @IsOptional()
  company_bank_id: string; // р/с
}
