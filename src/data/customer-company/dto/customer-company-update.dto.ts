import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CustomerCompanyStatus } from '../../../enums';

export class UpdateCustomerCompanyDto {
  @IsString()
  @IsOptional()
  company_name: string;

  @IsString()
  @IsOptional()
  company_inn: string;
  @IsString()
  @IsOptional()
  company_okonx: string;
  @IsString()
  @IsOptional()
  address: string;
  @IsString()
  @IsOptional()
  country: string;
  @IsString()
  @IsOptional()
  region: string;
  @IsString()
  @IsOptional()
  company_email: string;
  @IsString()
  @IsOptional()
  company_phone: string;
  @IsString()
  @IsOptional()
  post_code: string;


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

  @IsEnum(CustomerCompanyStatus)
  @IsOptional()
  status: string;

}
