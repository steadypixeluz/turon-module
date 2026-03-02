import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelFAQCategory } from '../../faq-category';
import { Lang } from '../../interfaces';

@Schema({ collection: 'FAQ', timestamps: true })
export class ModelFAQ {
  @Prop({ type: Object })
  question: Lang;
  @Prop({ type: Object })
  answer: Lang;
  @Prop({ default: 1 })
  position: number;
  @Prop({ default: true })
  is_active?: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FAQ-CATEGORY' })
  category: ModelFAQCategory;
  @Prop({ default: false })
  is_deleted: boolean;
}

export const ModelFAQSchema = SchemaFactory.createForClass(ModelFAQ);
