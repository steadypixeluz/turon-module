import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelCustomerCompany } from "../../customer-company/schemas/customer-company.schema";

@Schema({ collection: "warehouses", timestamps: true })
export class ModelWarehouse {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  address: string;
  @Prop()
  additional_info: string;
  @Prop({ required: true })
  contact_fullname: string;
  @Prop({ required: true })
  contact_phone_number: string;
  @Prop({ type: Number, default: null })
  latitude: number;
  @Prop({ type: Number, default: null })
  longitude: number;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ type: mongoose.Types.ObjectId, ref: "CustomerCompany", required: true })
  customer_company: ModelCustomerCompany;

  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelWarehouseSchema = SchemaFactory.createForClass(ModelWarehouse);
