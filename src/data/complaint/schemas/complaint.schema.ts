import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelCustomers } from "../../customer";
import { Lang } from "../../interfaces";
import { ModelProductInfo, ModelSubProduct } from "../../product";
import { ComplaintStatus } from "../../../enums/complaint.status.enum";
import { ModelOrder } from "../../../data/order";
import { ModelStore } from "../../../data/store";
import { ModelCustomerCompany } from "../../../data/customer-company/schemas/customer-company.schema";

@Schema({ collection: "complaint", timestamps: true })
export class ModelComplaint {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "customers" })
  seller: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "customers" })
  buyer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "order" })
  order: ModelOrder;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Store" })
  store: ModelStore;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "product_info" })
  product_info: ModelProductInfo;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer_company",
    default: null,
  })
  customer_company: ModelCustomerCompany;
  @Prop({ type: Array, default: [] })
  images: string[];
  @Prop()
  seller_description: string;
  @Prop()
  buyer_description: string;
  @Prop({
    type: "string",
    enum: ComplaintStatus,
    default: ComplaintStatus.new,
  })
  status: string;
}
export const ModelComplaintSchema =
  SchemaFactory.createForClass(ModelComplaint);
