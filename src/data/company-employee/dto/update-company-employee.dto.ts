import { IsString } from 'class-validator';

export class UpdateCompanyEmployeeDto {
  @IsString()
  role: string;
}
