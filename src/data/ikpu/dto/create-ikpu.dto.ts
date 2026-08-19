import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { IkpuLangText } from '../schemas/ikpu.schema';

export class CreateIkpuDto {
  @IsNotEmpty()
  @IsString()
  ikpu: string;

  @IsOptional()
  @IsObject()
  ikpuName?: IkpuLangText;

  @IsOptional()
  @IsObject()
  groupName?: IkpuLangText;

  @IsOptional()
  @IsObject()
  className?: IkpuLangText;

  @IsOptional()
  @IsObject()
  positionName?: IkpuLangText;

  @IsOptional()
  @IsObject()
  subPositionName?: IkpuLangText;

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
