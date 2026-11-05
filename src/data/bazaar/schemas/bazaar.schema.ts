import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ModelCountry } from "../../country/schemas/country.schema";
import { Lang } from "../../interfaces";
import { ProductType } from "../../../enums";

@Schema({ collection: "bazaar", timestamps: true })
export class ModelBazaar {
  @Prop()
  logo: string;

  @Prop()
  banner: string;
  @Prop({
    type: [{ type: String, enum: Object.values(ProductType) }],
    default: [],
  })
  showcase: ProductType[];
  @Prop({ type: Object, required: true })
  name: Lang;

  @Prop({ type: Object })
  description: Lang;

  @Prop({ type: Object })
  delivery_date: Lang;

  @Prop()
  color: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
    required: true,
  })
  country: ModelCountry;

  @Prop({ type: Object })
  address: Lang;

  @Prop({ type: Number, default: null })
  latitude: number;
  @Prop({ type: Number, default: null })
  longitude: number;

  @Prop({ default: false })
  is_active?: boolean;

  @Prop({ default: false })
  is_deleted: boolean;

  @Prop({ default: null })
  deleted_at: string;
}

export const ModelBazaarSchema = SchemaFactory.createForClass(ModelBazaar);
