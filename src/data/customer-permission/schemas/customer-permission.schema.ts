import mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ModelCustomers } from "../../index";

@Schema({ collection: "customer-permission", timestamps: true })
export class ModelCustomerPermission {
  @Prop({ type: mongoose.Types.ObjectId, ref: "referrer" })
  customer: ModelCustomers;
  @Prop()
  platform: string;
  @Prop({ default: true })
  permission: boolean;
  @Prop({ default: true })
  entered: boolean;
}

export const ModelCustomerPermissionSchema = SchemaFactory.createForClass(
  ModelCustomerPermission,
);
