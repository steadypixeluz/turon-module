import { IsArray, IsString } from 'class-validator';

export class CreateCompanyEmployeeDto {
  @IsString()
  phone_number: string;

  @IsArray()
  @IsString({ each: true })
  store: string[];

  @IsString()
  role: string;
}
