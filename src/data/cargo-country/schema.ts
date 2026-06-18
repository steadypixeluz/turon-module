import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, collection: 'cargo-country' })
export class ModelCargoCountry extends Document {
  @Prop({ required: true, type: Object })
  name: {};
  @Prop({ required: true })
  iso2: string;
  @Prop({ required: true })
  iso3: string;
  @Prop({ required: true })
  latitude: string;
  @Prop({ required: true })
  longitude: string;
}

export const ModelCargoCountrySchema =
  SchemaFactory.createForClass(ModelCargoCountry);
