import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { VariationType } from '../../../enums';
import { ModelCustomers } from '../../customer';
import { Lang } from '../../interfaces';

@Schema({ collection: 'variation', timestamps: true })
export class ModelVariation {
  @Prop({ type: Object })
  name: Lang;
  @Prop({ type: 'string', enum: VariationType })
  type: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  customor: ModelCustomers;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop()
  deleted_at: string;
}

export const ModelVariationSchema = SchemaFactory.createForClass(ModelVariation);
