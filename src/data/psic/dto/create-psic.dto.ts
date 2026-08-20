import { IsBoolean, IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import { PsicLangText } from '../schemas/psic.schema';

export class CreatePsicDto {
  @IsNotEmpty()
  @IsString()
  psic: string;

  @IsOptional()
  @IsObject()
  psicName?: PsicLangText;

  @IsOptional()
  @IsObject()
  groupName?: PsicLangText;

  @IsOptional()
  @IsObject()
  className?: PsicLangText;

  @IsOptional()
  @IsObject()
  positionName?: PsicLangText;

  @IsOptional()
  @IsObject()
  subPositionName?: PsicLangText;

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
