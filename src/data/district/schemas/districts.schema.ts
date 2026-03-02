import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelRegion } from '../../region';
@Schema({ collection: 'districts', timestamps: true })
export class ModelDistricts {
  @Prop({ type: Object })
  name: Lang;
  @Prop({ default: '' })
  code?: string;
  @Prop({ default: 1 })
  position?: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'regions' })
  region: ModelRegion;
    @Prop({ default: '' })
  pickup_code: string
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: true })
  is_active: boolean;
}

export const ModelDistrictsSchema =
  SchemaFactory.createForClass(ModelDistricts);
