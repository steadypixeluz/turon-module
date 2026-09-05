import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelCustomerCompany } from "../../customer-company/schemas/customer-company.schema";
import { ModelCustomers } from "../../customer/schemas/customer.schema";
import { Lang } from "src/data/interfaces";

@Schema({ collection: "stores", timestamps: true })
export class ModelStore {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  slug: string;
  @Prop({ type: Object })
  description: Lang;
  @Prop()
  logo: string;
  @Prop()
  banner: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: "CustomerCompany", required: true })
  customer_company: ModelCustomerCompany;
  @Prop({ type: [mongoose.Types.ObjectId], ref: "Customer", default: [] })
  customers: ModelCustomers[];
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelStoreSchema = SchemaFactory.createForClass(ModelStore);
