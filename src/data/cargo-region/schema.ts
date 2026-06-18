import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'cargo-region' })
export class ModelCargoRegion extends Document {
  @Prop()
  geonameId: number;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country',
    required: true,
  })
  countryId: string;

  @Prop({ type: Object })
  name: {};
  @Prop({ required: true })
  latitude: string;
  @Prop({ required: true })
  longitude: string;
}

export const ModelCargoRegionSchema =
  SchemaFactory.createForClass(ModelCargoRegion);
