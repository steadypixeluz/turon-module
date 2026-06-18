import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { ModelCargoCountry } from '../cargo-country';
import { ModelCargoRegion } from '../cargo-region';
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
// stafka bu shopir beriydigon narhni kutadi shopir shu opsiyalar boyicha narh bera oladi
@Schema({ _id: false })
export class Payment {
  @Prop({
    type: String,
    enum: ['negotiable', 'nonegotiable', 'request'],
    default: 'negotiable',
  })
  mode: string;

  @Prop({ type: Number, default: 0 })
  priceWithVat: number;

  @Prop({ type: Number, default: 0 })
  priceWithoutVat: number;

  @Prop({ type: Number, default: 0 })
  priceCash: number;

  @Prop({ type: Boolean, default: false })
  isRequestWithVat: number;

  @Prop({ type: Boolean, default: false })
  isRequestWithoutVat: number;

  @Prop({ type: Boolean, default: false })
  isRequestCash: number;

  /** 'UZS' | 'USD' | 'EUR' | … */
  @Prop({ type: String, default: 'UZS' })
  currency: string;

  @Prop({ type: Boolean, default: false })
  byCard: boolean;

  @Prop({ type: Boolean, default: false })
  offersVisibleOnlyToYou: boolean;

  /** payment terms in banking days */
  @Prop({ type: Number })
  paymentDays: number;
}

@Schema({ _id: false })
export class Transport {
  /** Refs → Dictionary { category: 'body_type' } */
  @Prop({ type: [Types.ObjectId], ref: 'Dictionary', default: [] })
  bodyTypes: Types.ObjectId[];

  /** Refs → Dictionary { category: 'loading_type' } */
  @Prop({ type: [Types.ObjectId], ref: 'Dictionary', default: [] })
  loadingTypes: Types.ObjectId[];

  /** Refs → Dictionary { category: 'unloading_type' } */
  @Prop({ type: [Types.ObjectId], ref: 'Dictionary', default: [] })
  unloadingTypes: Types.ObjectId[];

  @Prop({ type: Boolean, default: false })
  loadingConsiderAll: boolean;

  @Prop({ type: Boolean, default: false })
  unloadingConsiderAll: boolean;
}

@Schema({ _id: false })
export class Company {
  /**
   * Legal form: ООО | ИП | Физлицо | Самозанятый | Другое
   */
  @Prop({
    type: String,
    enum: ['legal', 'individual'],
  })
  type: string;

  @Prop({ type: String })
  company: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Country' })
  country: ModelCargoCountry;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Region' })
  region: ModelCargoRegion;
  @Prop({ type: String })
  note: string;

  @Prop({ type: String })
  contactPerson: string;

  @Prop({ type: String })
  phone: string;
}

@Schema({ timestamps: true, collection: 'cargos' })
export class ModelCargo {
  @Prop({ type: String, required: true })
  name: string;
  @Prop({ type: LoadingPoint })
  loading: LoadingPoint;

  @Prop({ type: UnloadingPoint })
  unloading: UnloadingPoint;

  @Prop({ type: CargoWeight })
  weight: CargoWeight;
  @Prop({
    type: String,
    enum: ['all', 'alone', 'partial'],
  })
  partialLoad: string;
  @Prop()
  volume: string;
  @Prop({
    type: String,
    enum: ['readyDownload', 'constantly', 'noCargo'],
  })
  cargoType: string;
  @Prop({
    type: String,
    enum: ['workingDays', 'everyDay'],
  })
  constantlyType: string;
  @Prop({ type: Date })
  readyDate: Date;

  @Prop({ type: Number, default: 3 })
  archiveAfterDays: number;

  @Prop({ type: Transport })
  transport: Transport;

  @Prop({ type: Payment })
  payment: Payment;

  @Prop({ type: Company })
  customer: Company;

  @Prop({
    type: String,
    enum: ['draft', 'active', 'archived', 'cancelled'],
    default: 'active',
  })
  status: string;

  @Prop()
  uuid: string;

  /** Reference to the user who created this cargo listing */
  @Prop({ type: Types.ObjectId, ref: 'Customer' })
  owner: Types.ObjectId;

  /** Soft-delete flag */
  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;
}

export const ModelCargoSchema = SchemaFactory.createForClass(ModelCargo);

// ─── Indexes ─────────────────────────────────────────────────────────────────
ModelCargoSchema.index({
  status: 1,
  isDeleted: 1,
  createdAt: -1,
});

ModelCargoSchema.index({
  'loading.country': 1,
  'loading.region': 1,
  'unloading.country': 1,
  'unloading.region': 1,
});

ModelCargoSchema.index({
  'weight.value': 1,
});

ModelCargoSchema.index({
  'volume.value': 1,
});

ModelCargoSchema.index({
  'transport.bodyTypes': 1,
});

ModelCargoSchema.index({
  readyDate: 1,
});

ModelCargoSchema.index({
  'loading.coordinates': '2dsphere',
});

ModelCargoSchema.index({
  'unloading.coordinates': '2dsphere',
});
