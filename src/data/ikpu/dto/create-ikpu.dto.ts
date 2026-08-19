import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateIkpuDto {
  @IsNotEmpty()
  @IsString()
  ikpu: string;

  @IsNotEmpty()
  @IsString()
  ikpuName: string;

  @IsNotEmpty()
  @IsString()
  groupName: string;

  @IsNotEmpty()
  @IsString()
  className: string;

  @IsNotEmpty()
  @IsString()
  positionName: string;

  @IsNotEmpty()
  @IsString()
  subPositionName: string;

  @IsOptional()
  @IsBoolean()
  isValidForCategory?: boolean;

  @IsOptional()
  @IsBoolean()
  isVatRelief?: boolean;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
