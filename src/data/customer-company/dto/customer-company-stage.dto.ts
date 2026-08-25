import { IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';
import { CustomerCompanyStage, CustomerCompanyStatus } from '../../../enums';

// Bank details (company_mfo/company_bank_name/company_bank_id) are NOT part of this stage —
// they belong to StatusVerifiedBankAccount and are collected later.
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

  @IsNumberString()
  @IsOptional()
  vat_percent: string;

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
