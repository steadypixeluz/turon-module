import { IsArray, IsString } from 'class-validator';

export class CreateCompanyEmployeeDto {
  @IsString()
  phone_number: string;

  @IsString()
  store: string;

  @IsString()
  role: string;
}
