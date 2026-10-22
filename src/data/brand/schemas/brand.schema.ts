import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelCountry } from "../../../data/country";
import { Lang } from "../../../data/interfaces/lang";
@Schema({ collection: "brand-type", timestamps: true })
export class ModelBrandType {
  @Prop({ type: Object })
  title: Lang;
  @Prop()
  position: number;
  @Prop({ default: true })
  is_active?: boolean;
  @Prop()
  color: string;
}
export const ModelBrandTypeSchema =
  SchemaFactory.createForClass(ModelBrandType);

export class ModelBrandHistory {
  @Prop({ type: Object })
  title: Lang;
  @Prop({ type: Object })
  subtitle: Lang;
  @Prop()
  position: number;
  @Prop({ default: true })
  is_active?: boolean;
}
export const ModelBrandHistorySchema =
  SchemaFactory.createForClass(ModelBrandHistory);

@Schema({ collection: "brand", timestamps: true })
export class ModelBrand {
  @Prop()
  photo?: string;
  @Prop()
  logo?: string;
  @Prop()
  title: string;
  @Prop({ type: Object })
  subtitle: Lang;
  @Prop({ type: Object })
  about: Lang;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "type", index: true })
  type: ModelBrandType;
  @Prop({ default: true })
  official_brand?: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "country" })
  country: ModelCountry;
  @Prop()
  founded: string;
  @Prop()
  website: string;
  @Prop()
  position: number;
  @Prop({ default: true })
  is_active?: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: null })
  deleted_at: string;
}

export const ModelParetnerSchema = SchemaFactory.createForClass(ModelBrand);

@Schema({ collection: "brand-image", timestamps: true })
export class ModelBrandImage {
  @Prop()
  photo?: string;
  @Prop({ type: Object })
  image_data?: Object;
  @Prop()
  position: number;
  @Prop({ type: mongoose.Types.ObjectId, ref: "brand" })
  post: ModelBrand;
  @Prop({ default: false })
  is_main?: boolean;
}

export const ModelBrandImageSchema =
  SchemaFactory.createForClass(ModelBrandImage);
