import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelCountry } from "../../country";
import { ModelMenu } from "../../menu";
import { ModelProduct } from "../../product";

@Schema({ collection: "customers", timestamps: true })
export class ModelCustomers {
  @Prop()
  password?: string;
  @Prop()
  password_length?: number;
  @Prop()
  coin?: number;
  @Prop()
  tesx_balance?: number;
  @Prop()
  phone_number: string;
  @Prop({ unique: true })
  promo_code: string;
  @Prop()
  first_name: string;
  @Prop()
  last_name: string;
  @Prop()
  profile_qr: string;
  @Prop({ default: 0 })
  wallet: number;
  @Prop()
  email: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Country" })
  country: ModelCountry;
  @Prop({ type: mongoose.Types.ObjectId, ref: "referrer" })
  referrer: ModelCustomers;
  @Prop()
  birth_date: string;
  @Prop()
  birth_date_format: Date;
  @Prop()
  gender: string;
  @Prop()
  lang: string;
  @Prop()
  photo: string;
  @Prop()
  fbToken: string;
  @Prop()
  register_by: string;
  @Prop({ default: "customer" })
  role: string;

  @Prop({ default: true })
  push_notification: boolean;

  @Prop({ default: true })
  sms_notification: boolean;

  @Prop({ default: true })
  email_notification: boolean;

  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelCustomersSchema =
  SchemaFactory.createForClass(ModelCustomers);

@Schema({ collection: "recomment-products", timestamps: true })
export class ModelRecommentProducts {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "customers" })
  customer: ModelCustomers;
  @Prop()
  showcase: string;
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
    default: [],
  })
  menu: ModelMenu[];
}

export const ModelRecommentProductsSchema = SchemaFactory.createForClass(
  ModelRecommentProducts,
);

@Schema({ collection: "photo-search-products", timestamps: true })
export class ModelPhotoSearchProducts {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "customers" })
  customer: ModelCustomers;
  @Prop()
  showcase: string;
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "products" }],
    default: [],
  })
  products: ModelProduct[];
  @Prop({
    default: [],
  })
  ai_response: [];
}

export const ModelPhotoSearchProductsSchema = SchemaFactory.createForClass(
  ModelPhotoSearchProducts,
);
