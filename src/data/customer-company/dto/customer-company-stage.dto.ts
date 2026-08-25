import { IsEnum, IsOptional, IsString } from 'class-validator';
import { CustomerCompanyStage, CustomerCompanyStatus } from '../../../enums';

export class UpdateRegisteredCompanyDto {
  @IsString()
  company_name: string;
  @IsString()
  company_inn: string;
  @IsString()
  company_okonx: string;
  @IsString()
  company_address: string;
  @IsString()
  company_country: string;
  @IsString()
  company_region: string;
  @IsString()
  company_district: string;

  @IsString()
  director_pinfl: string;
  @IsString()
  director_name: string;
  @IsString()
  company_mfo: string;
  @IsString()
  company_bank_name: string;
  @IsString()
  company_bank_id: string; // р/с

  @IsString()
  @IsOptional()
  logo: string;
}

export class UpdateContactInfoDto {
  @IsString()
  company_email: string;
  @IsString()
  company_phone: string;
  @IsString()
  post_code: string;
}

export class ModerateCustomerCompanyStageDto {
  @IsEnum(CustomerCompanyStage)
  stage: CustomerCompanyStage;

  @IsEnum(CustomerCompanyStatus)
  status: CustomerCompanyStatus;

  @IsString()
  @IsOptional()
  rejection_reason?: string;
}
