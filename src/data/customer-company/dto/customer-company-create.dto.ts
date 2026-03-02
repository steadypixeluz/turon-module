import { IsString } from 'class-validator';

export class CreateCustomerCompanyDto {
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
  company_email: string;
  @IsString()
  company_phone: string;
  @IsString()
  post_code: string;

  @IsString()
  logo: string;
  @IsString()
  invoice_logo: string;

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

}
