import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { ModelCargoCountry, ModelCargoRegion } from 'src/index';

@Schema({ _id: false })
export class Rate {
  @Prop({ type: Number, default: 0 })
  priceWithVat: number;

  @Prop({ type: Number, default: 0 })
  priceWithoutVat: number;

  @Prop({ type: Number, default: 0 })
  priceCash: number;
  @Prop({ type: Number, default: 0 })
  byCard: number;
  @Prop({ type: String, default: 'UZS' })
  currency: string;
}

@Schema({ _id: false })
export class PaymentTerms {
  @Prop({ type: Number, default: 0 })
  prepayment: number;
  @Prop({
    type: String,
    enum: ['not_selected', 'payment_via', 'payment_unloading'],
  })
  postpaymentPeriod: string;
  @Prop()
  bankDay: number;
}

@Schema({ _id: false })
export class GeoPoint {
  @Prop({ type: String, enum: ['Point'], default: 'Point' })
  type: string;

  @Prop({ type: [Number], default: [0, 0] })
  coordinates: [number, number]; // [longitude, latitude]
}
Schema({ _id: false });
export class LoadingPoint {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Country' })
  country: ModelCargoCountry;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Region' })
  region: ModelCargoRegion;
  @Prop({ type: GeoPoint })
  coordinates: GeoPoint;
  address: string;
  @Prop({ type: String })
  timeFrom: string;
  @Prop({ type: String })
  timeTo: string;
  @Prop({ type: Boolean, default: false })
  aroundTheClock: boolean;
}

@Schema({ _id: false })
export class UnloadingPoint {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Country' })
  country: ModelCargoCountry;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Region' })
  region: ModelCargoRegion;
  @Prop({ type: String })
  address: string;
  @Prop({ type: GeoPoint })
  coordinates: GeoPoint;
  @Prop({ type: Date })
  date: Date;

  @Prop({ type: String })
  timeFrom: string;

  @Prop({ type: String })
  timeTo: string;

  @Prop({ type: Boolean, default: false })
  isRange: boolean;

  @Prop({ type: Boolean, default: false })
  aroundTheClock: boolean;
}

@Schema({ _id: false })
export class CargoWeight {
  @Prop({ type: Number })
  value: number;

  /** 'т' | 'кг' */
  @Prop({ type: String, enum: ['т', 'кг'], default: 'т' })
  unit: string;
}

@Schema({ timestamps: true, collection: 'offer' })
export class ModelOffer {
  @Prop({ type: LoadingPoint })
  loading: LoadingPoint;
  @Prop({ default: false })
  partial: boolean;
  @Prop({ type: UnloadingPoint })
  unloading: UnloadingPoint;
  @Prop({ type: CargoWeight })
  weight: CargoWeight;
  @Prop()
  volume: string;
  @Prop({ type: Date })
  readyDate: Date;
  @Prop({ type: Rate })
  rate: Rate;
  @Prop({ type: PaymentTerms })
  paymentTerms: PaymentTerms;
  @Prop({ type: Types.ObjectId, ref: 'Customer' })
  owner: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Customer' })
  receiver: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Cargo' })
  cargo: Types.ObjectId;
  @Prop({ type: Types.ObjectId, ref: 'Vehicle' })
  vehicle: Types.ObjectId;
  @Prop({ type: String })
  description: string;
  @Prop({ type: Boolean, default: true })
  status: boolean;
  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;
}

export const ModelOfferSchema = SchemaFactory.createForClass(ModelOffer);
