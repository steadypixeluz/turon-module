import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelRegion } from '../../region';

@Schema({ collection: 'pickup-point-town', timestamps: true })
export class ModelPickupPointTown {
  @Prop({ type: Object })
  name: Lang;

  @Prop()
  code: string;

  @Prop({ type: Object })
  coords: object;

  // @Prop({ type: { type: String, enum: ["Point"], default: "Point" } })
  @Prop({
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
      // required: true,
    },
  })
  location: {
    type: string;
    coordinates: [number, number];
  };

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'country' })
  region: ModelRegion;

  @Prop({ default: true })
  is_active: boolean;

  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelPickupPointTownSchema = SchemaFactory.createForClass(ModelPickupPointTown);
