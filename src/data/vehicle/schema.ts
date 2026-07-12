import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
import { Company } from '../cargo/cargo.schema';
import { ModelCargoCountry } from '../cargo-country';
import { ModelCargoRegion } from '../cargo-region';

export type VehicleDocument = Vehicle & Document;

@Schema({ _id: false })
export class BodyDimensions {
  @Prop({ type: Number })
  length: number;

  @Prop({ type: Number })
  width: number;

  @Prop({ type: Number })
  height: number;
}

@Schema({ _id: false })
export class Route {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Country' })
  country: ModelCargoCountry;
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Region' })
  region: ModelCargoRegion;

  @Prop({ type: Number })
  radius: number;
}

@Schema({ _id: false })
export class Rate {
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
  @Prop({ type: String, default: 'UZS' })
  currency: string;

  @Prop({ type: Boolean, default: false })
  byCard: boolean;

  @Prop({ type: Boolean, default: false })
  noNegotiation: boolean;
}

@Schema({ timestamps: true, collection: 'vehicles' })
export class Vehicle {
  @Prop({ type: Types.ObjectId, ref: 'Dictionary' })
  bodyType: Types.ObjectId;

  @Prop()
  uuid: string;
  // @Prop({
  //   type: String,
  //   enum: ['noMatter', 'withAdditional', 'withoutAdditional'],
  // })
  // additionalLoading;
  @Prop({
    type: String,
    enum: ['semi_trailer', 'truck', 'coupling'],
  })
  vehicleCategory: string;

  @Prop({ type: [Types.ObjectId], ref: 'Dictionary', default: [] })
  loadingTypes: Types.ObjectId[];

  @Prop({ type: Number })
  bodyVolume: number;

  @Prop({ type: BodyDimensions })
  bodyDimensions: BodyDimensions;

  @Prop({ type: Boolean, default: false })
  gpsMonitoring: boolean;

  @Prop({
    type: String,
    enum: ['readyDownload', 'constantly'],
    default: 'readyDownload',
  })
  cargoType: string;
  @Prop({
    type: String,
    enum: ['workingDays', 'everyDay'],
  })
  constantlyType: string;
  @Prop({ type: Date })
  availableFrom: Date;

  /** Days before moving to archive (default 3) */
  @Prop({ type: Number, default: 3 })
  archiveAfterDays: number;

  @Prop({ type: Number })
  capacityValue: number; // ← грузоподъёмность (тонна, сон)

  @Prop({ type: Boolean, default: false })
  partialLoad: boolean; // ← Догруз

  @Prop({ type: Boolean, default: false })
  dangerousGoods: boolean; // ← Опасные грузы

  @Prop({ type: Route })
  loading: Route;

  @Prop({ type: Route })
  unloading: Route;

  @Prop({ type: Rate })
  rate: Rate;

  @Prop({ type: Company })
  customer: Company;

  /**
   * draft | active | archived | cancelled
   */
  @Prop({
    type: String,
    enum: ['draft', 'active', 'archived', 'cancelled'],
    default: 'active',
  })
  status: string;

  @Prop({ type: Types.ObjectId, ref: 'Customer' })
  owner: Types.ObjectId;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);

// ─── Indexes ──────────────────────────────────────────────────────────────────
VehicleSchema.index({ status: 1 });
VehicleSchema.index({ 'route.country': 1 });
VehicleSchema.index({ 'route.region': 1 });
VehicleSchema.index({ availableFrom: 1 });
VehicleSchema.index({ owner: 1 });
VehicleSchema.index({ vehicleCategory: 1 });
VehicleSchema.index({ bodyType: 1 });
VehicleSchema.index({ createdAt: -1 });
