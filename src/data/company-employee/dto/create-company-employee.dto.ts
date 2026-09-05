import { IsArray, IsString } from 'class-validator';

export class CreateCompanyEmployeeDto {
  @IsString()
  phone_number_format: string;

  @IsArray()
  @IsString({ each: true })
  store: string[];

  @IsString()
  role: string;
}
