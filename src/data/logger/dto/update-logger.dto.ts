import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateLoggerDto {
  @IsBoolean()
  @IsOptional()
  is_active: boolean;
}
