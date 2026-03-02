import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelVariation } from '../../variation/schemas/variation.schema';
@Schema({ collection: 'option-select', timestamps: true })
export class ModelVariationSelect {
  @Prop({ type: Object })
  name: Lang;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'variation' })
  variation: ModelVariation;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop()
  deleted_at: string;
}

export const ModelVariationSelectSchema =
  SchemaFactory.createForClass(ModelVariationSelect);
