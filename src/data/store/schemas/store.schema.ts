import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelCustomerCompany } from "../../customer-company/schemas/customer-company.schema";

@Schema({ collection: "stores", timestamps: true })
export class ModelStore {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  slug: string;
  @Prop()
  description: string;
  @Prop()
  logo: string;
  @Prop()
  banner: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: "CustomerCompany", required: true })
  customer_company: ModelCustomerCompany;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelStoreSchema = SchemaFactory.createForClass(ModelStore);
