import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLoggerDto {
  @IsObject()
  @IsOptional()
  data: any;
  @IsString()
  @IsOptional()
  method: string;
  @IsString()
  @IsNotEmpty()
  user: string;
}
