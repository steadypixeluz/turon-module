import {
  IsEnum,
  IsOptional,
  IsNumber,
  IsBoolean,
  Min,
  IsNotEmpty,
  IsObject,
} from 'class-validator';
import { DictionaryCategory, Lang } from './schema';

export class CreateDictionaryDto {
  @IsEnum(DictionaryCategory)
  category: DictionaryCategory;

  @IsNotEmpty()
  @IsObject()
  name: Lang;

  @IsOptional()
  @IsNumber()
  @Min(0)
  order?: number;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}

export const DICTIONARY_SEED = [
  // ── Кузов (Body types) ────────────────────────────────────
  {
    category: DictionaryCategory.BODY_TYPE,
    label: 'Все закр.+изотерм',
    slug: 'all_closed_isotherm',
    order: 1,
  },
  {
    category: DictionaryCategory.BODY_TYPE,
    label: 'Тентованный',
    slug: 'tent',
    order: 2,
  },
  {
    category: DictionaryCategory.BODY_TYPE,
    label: 'Все открытые',
    slug: 'all_open',
    order: 3,
  },
  {
    category: DictionaryCategory.BODY_TYPE,
    label: 'Реф.+изотерм',
    slug: 'ref_isotherm',
    order: 4,
  },
  {
    category: DictionaryCategory.BODY_TYPE,
    label: 'Рефрижератор',
    slug: 'ref',
    order: 5,
  },

  // ── Загрузка (Loading types) ──────────────────────────────
  {
    category: DictionaryCategory.LOADING_TYPE,
    label: 'Рефрижератор',
    slug: 'ref',
    order: 1,
  },
  {
    category: DictionaryCategory.LOADING_TYPE,
    label: 'Тентованный',
    slug: 'tent',
    order: 2,
  },
  {
    category: DictionaryCategory.LOADING_TYPE,
    label: 'Реф.+изотерм',
    slug: 'ref_iso',
    order: 3,
  },
  {
    category: DictionaryCategory.LOADING_TYPE,
    label: 'Все закр.+изотерм',
    slug: 'all_cl',
    order: 4,
  },
  {
    category: DictionaryCategory.LOADING_TYPE,
    label: 'Тентованный',
    slug: 'tent2',
    order: 5,
  },

  // ── Выгрузка (Unloading types) ────────────────────────────
  {
    category: DictionaryCategory.UNLOADING_TYPE,
    label: 'Реф.+изотерм',
    slug: 'ref_iso',
    order: 1,
  },
  {
    category: DictionaryCategory.UNLOADING_TYPE,
    label: 'Все закр.+изотерм',
    slug: 'all_cl',
    order: 2,
  },
  {
    category: DictionaryCategory.UNLOADING_TYPE,
    label: 'Рефрижератор',
    slug: 'ref',
    order: 3,
  },
  {
    category: DictionaryCategory.UNLOADING_TYPE,
    label: 'Тентованный',
    slug: 'tent',
    order: 4,
  },
];
