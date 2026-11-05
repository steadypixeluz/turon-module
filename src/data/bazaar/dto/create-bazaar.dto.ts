import {
  ArrayUnique,
  IsArray,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
} from "class-validator";
import { Lang } from "../../interfaces";
import { ProductType } from "../../../enums";

export class CreateBazaarDto {
  @IsString()
  @IsOptional()
  logo: string;

  @IsString()
  @IsOptional()
  banner: string;
  @IsArray()
  @IsEnum(ProductType, { each: true })
  @ArrayUnique()
  showcase: ProductType[];
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  country: string;

  @IsString()
  @IsOptional()
  color: string;
  @IsString()
  @IsOptional()
  latitude: string;
  @IsString()
  @IsOptional()
  longitude: string;

  @IsOptional()
  is_active: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  delivery_date: string;
}
