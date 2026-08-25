import { IsBooleanString, IsEnum, IsNumberString, IsOptional, IsString } from 'class-validator';
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

// Stage 4: StatusVerifiedBusiness — all fields are files, resolved server-side to their stored
// filename by the controller after upload. registration_certificate/director_id_document are
// required for now; business_license/tax_certificate are optional. power_of_attorney is required
// only when is_via_representative is true (arrives as a multipart string, "true"/"false").
export class UpdateVerifiedBusinessDto {
  @IsBooleanString()
  is_via_representative: string;

  @IsString()
  @IsOptional()
  registration_certificate: string;

  @IsString()
  @IsOptional()
  business_license: string;

  @IsString()
  @IsOptional()
  tax_certificate: string;

  @IsString()
  @IsOptional()
  director_id_document: string;

  @IsString()
  @IsOptional()
  power_of_attorney: string;
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
