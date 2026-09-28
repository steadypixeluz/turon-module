import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { SaleType } from '../../../enums';

export class PriceTierDto {
  @IsNumber()
  @Min(0)
  min_count: number;

  // Не указан => открытый диапазон "и выше" (например "от 500 — 7000 сум").
  @IsOptional()
  @IsNumber()
  @Min(0)
  max_count?: number;

  @IsNumber()
  @Min(0)
  price: number;

  // Скидка уровня — необязательная, своя для каждого price tier.
  @IsOptional()
  @IsNumber()
  @Min(0)
  sale?: number;

  @IsOptional()
  @IsEnum(SaleType)
  sale_type?: string;
}
