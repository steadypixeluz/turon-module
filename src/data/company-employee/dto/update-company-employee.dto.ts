import { IsOptional, IsString } from 'class-validator';

export class UpdateCompanyEmployeeDto {
  @IsString()
  @IsOptional()
  store: string;

  @IsString()
  @IsOptional()
  role: string;
}
