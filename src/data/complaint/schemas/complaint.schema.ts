import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelCustomers } from "../../customer";
import { Lang } from "../../interfaces";
import { ModelProductInfo, ModelSubProduct } from "../../product";
import { ComplaintStatus } from "../../../enums/complaint.status.enum";
import { ModelOrder } from "../../../data/order";

@Schema({ collection: "complaint", timestamps: true })
export class ModelComplaint {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "customers" })
  seller: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "customers" })
  buyer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "order" })
  order: ModelOrder;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "sub-product" })
  sub_product: ModelSubProduct;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "product_info" })
  product_info: ModelProductInfo;
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
