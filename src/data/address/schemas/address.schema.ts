import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator";
import { ModelCountry } from "../../country";
import { ModelCustomers } from "../../customer";
import { ModelDistricts } from "../../district";
import { ModelRegion } from "../../region";

@Schema({ timestamps: true })
export class ModelAddress {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "country" })
  country: ModelCountry;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "regions" })
  region: ModelRegion;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "districts" })
  district: ModelDistricts;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsNumber()
  long: number;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  title: string;

  @Prop()
  @IsOptional()
  @IsString()
  apartment?: string;

  @Prop()
  @IsOptional()
  @IsString()
  corridor?: string;

  @Prop()
  @IsOptional()
  @IsString()
  floor?: string;

  @Prop()
  @IsOptional()
  @IsString()
  intercom_code?: string;

  @Prop()
  @IsOptional()
  @IsString()
  description?: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "customer" })
  customer: ModelCustomers;
}

export const ModelAddressSchema = SchemaFactory.createForClass(ModelAddress);
