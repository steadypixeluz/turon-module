import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelCountry } from '../../country';
import { Lang } from '../../interfaces';
@Schema({ collection: 'regions', timestamps: true })
export class ModelRegion {
  @Prop({ type: Object })
  name: Lang;
  @Prop({ default: '' })
  code?: string;
  @Prop({ default: '' })
  pickup_code?: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Country' })
  country: ModelCountry;

  @Prop({ default: 1 })
  position?: number;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: true })
  is_active: boolean;
}

export const ModelRegionSchema = SchemaFactory.createForClass(ModelRegion);
