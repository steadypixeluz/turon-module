import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Lang } from '../../interfaces';

@Schema({ collection: 'FAQ-CATEGORY', timestamps: true })
export class ModelFAQCategory {
  @Prop({ type: Object })
  name: Lang;
  @Prop({ default: 1 })
  position: number;
  @Prop({ default: true })
  is_active?: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
}

export const ModelFAQCategorySchema =
  SchemaFactory.createForClass(ModelFAQCategory);
