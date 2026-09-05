import { IsString } from 'class-validator';

export class CreateCompanyEmployeeDto {
  @IsString()
  phone_number_format: string;

  @IsString()
  store: string;

  @IsString()
  role: string;
}
