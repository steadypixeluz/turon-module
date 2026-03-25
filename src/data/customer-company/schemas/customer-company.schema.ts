import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { CustomerCompanyStatus } from "../../../enums";
import { ModelCountry } from "../../country";
import { ModelCustomers } from "../../customer/schemas/customer.schema";
import { ModelDistricts } from "../../district";
import { ModelRegion } from "../../region";

@Schema({ collection: "customers-company", timestamps: true })
export class ModelCustomerCompany {
  @Prop()
  company_name: string;
  @Prop({ unique: true })
  company_inn: string;
  @Prop()
  company_okonx: string;
  @Prop()
  company_address: string;
  @Prop()
  origin_latitude: string;
  @Prop()
  origin_address: string;
  @Prop()
  origin_longitude: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Country" })
  company_country: ModelCountry;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Regions" })
  company_region: ModelRegion;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Districts" })
  company_district: ModelDistricts;
  @Prop()
  company_email: string;
  @Prop()
  company_phone: string;
  @Prop()
  post_code: string;
  @Prop()
  director_pinfl: string;
  @Prop()
  director_name: string;
  @Prop()
  company_mfo: string;
  @Prop()
  company_bank_name: string;
  @Prop()
  company_bank_id: string; // р/с
  @Prop({
    type: "string",
    enum: CustomerCompanyStatus,
    default: CustomerCompanyStatus.new,
  })
  status: string;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: "Customer" })
  customers: [ModelCustomers];
  @Prop()
  web_site: string;
  @Prop()
  logo: string;
  @Prop({default:0})
  balans:number
  @Prop()
  invoice_logo: string;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelCustomerCompanySchema =
  SchemaFactory.createForClass(ModelCustomerCompany);
