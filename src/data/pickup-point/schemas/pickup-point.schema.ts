import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelPickupPointTown } from '../../pickup-point-town';

@Schema({ collection: 'pickup-point', timestamps: true })
export class ModelPickupPoint {
  @Prop({ type: Object })
  name: Lang;

  @Prop()
  code: string;
  @Prop()
  clientcode: string;
  @Prop()
  parentcode: string;
  @Prop()
  parentname: string;

  @Prop({ type: Object })
  address: Lang;

  @Prop()
  phone: string;
  @Prop()
  comment: string;

  @Prop({ type: Object })
  worktime: Lang;

  @Prop()
  traveldescription: string;

  @Prop({ default: false })
  acceptcash: boolean;
  @Prop({ default: false })
  acceptcard: boolean;
  @Prop({ default: false })
  acceptfitting: boolean;
  @Prop({ default: false })
  acceptindividuals: boolean;

  @Prop()
  latitude: string;
  @Prop()
  longitude: string;

  // @Prop({ type: { type: String, enum: ["Point"], default: "Point" } })
  @Prop({
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      // type: [Number],
      // required: true,
    },
  })
  location: {
    type: string;
    coordinates: [number, number];
  };

  @Prop()
  maxweight: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'pickup-point-town' })
  town: ModelPickupPointTown;

  @Prop({ default: true })
  @Prop()
  is_active: boolean;

  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelPickupPointSchema = SchemaFactory.createForClass(ModelPickupPoint);
