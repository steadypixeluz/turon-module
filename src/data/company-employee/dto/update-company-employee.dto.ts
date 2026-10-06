import { IsBoolean, IsString } from "class-validator";

export class UpdateCompanyEmployeeDto {
  @IsString()
  role: string;

  @IsBoolean()
  is_main: boolean;
}
