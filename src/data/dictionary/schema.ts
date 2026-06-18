import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DictionaryDocument = Dictionary & Document;

export enum DictionaryCategory {
  BODY_TYPE = 'body_type', // Кузов
  LOADING_TYPE = 'loading_type', // Загрузка
  UNLOADING_TYPE = 'unloading_type', // Выгрузка
  CARRYING_CAPACITY = 'carrying_capacity', // Грузоподъемность
}
export interface Lang {
  ru: string;
  en: string;
  uz: string;
  zh: string;
}
@Schema({ timestamps: true, collection: 'dictionaries' })
export class Dictionary {
  @Prop({
    type: String,
    enum: Object.values(DictionaryCategory),
    required: true,
  })
  category: DictionaryCategory;

  @Prop({ type: Object })
  name: Lang;

  @Prop({ type: Number, default: 0 })
  order: number;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;
}

export const DictionarySchema = SchemaFactory.createForClass(Dictionary);

DictionarySchema.index({ category: 1, isActive: 1 });
DictionarySchema.index({ category: 1, order: 1 });
// slug unique per category
// DictionarySchema.index({ category: 1, slug: 1 }, { unique: true, sparse: true });
