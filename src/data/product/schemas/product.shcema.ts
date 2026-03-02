import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { PRICE_TYPE, ProductType, StatusType, SaleType } from '../../../enums';
import { ModelColor } from '../../color';
import { ModelCountry } from '../../country';
import { ModelCustomerCompany } from '../../customer-company';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelTag } from '../../tag';
import { ModelVariation } from '../../variation';
import { ModelVariationSelect } from '../../variation-select';
@Schema({ collection: 'product-info', timestamps: true })
export class ModelProductInfo {
  @Prop({ unique: true })
  uid: number;
  @Prop({ type: 'string', enum: ['external', 'internal'], default: 'internal' })
  delivery_origin_type: string;
  @Prop({ type: Object })
  name: Lang;
  @Prop({ type: Object })
  content: Lang;
  @Prop({ type: Object })
  short_content: Lang;
  @Prop()
  min_unit: number;
  @Prop()
  sale_count: number;
  @Prop({ type: Object })
  variation_object: {};
  @Prop({ default: 0 })
  comment_count: number;
  @Prop({ default: 5 })
  rating: number;
  @Prop({ type: 'string', enum: PRICE_TYPE })
  price_type: string;
  @Prop({ type: 'string', enum: ProductType, default: ProductType.retail })
  showcase: string;
  @Prop({ default: null })
  position: number;
  @Prop({ default: 0 })
  views: number;
  @Prop({ type: Array, default: [] })
  images: string[];
  @Prop({ type: 'string', enum: StatusType })
  status: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Tag' })
  tags: ModelTag;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Color' })
  colors: ModelColor;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'country' })
  country: ModelCountry;
  @Prop()
  box_width: number;
  @Prop()
  box_length: number;
  @Prop()
  box_height: number;
  @Prop()
  weight: number;
  @Prop()
  menu_uid: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer_company' })
  customer_company: ModelCustomerCompany;
  @Prop({ default: false })
  is_deleted: boolean;
}

export const ModelProductInfoSchema =
  SchemaFactory.createForClass(ModelProductInfo);

@Schema({ collection: 'product', timestamps: true })
export class ModelProduct {
  @Prop({ unique: true })
  uid: number;
  @Prop()
  images: string[];
  @Prop()
  min_price: number;
  @Prop()
  price: number;
  @Prop({ default: 0 })
  sale: number;
  @Prop({ default: 5 })
  rating: number;
  @Prop({ type: 'string', enum: SaleType })
  sale_type: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Color' })
  color: ModelColor;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product_info' })
  product_info: ModelProductInfo;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Parameters' })
  parameters: ModelVariation;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'country' })
  country: ModelCountry;
  @Prop({ type: 'string', enum: StatusType })
  status: string;
  @Prop({ default: false })
  is_main?: boolean;
  // !!!
  @Prop({ default: false })
  is_deleted: boolean;
}

export const ModelProductSchema = SchemaFactory.createForClass(ModelProduct);

@Schema({ collection: 'sub-product', timestamps: true })
export class ModelSubProduct {
  @Prop({ unique: true })
  uid: number;
  @Prop({ default: 0 })
  count: number;
  @Prop({ default: 0 })
  price: number;
  @Prop({ default: 0 })
  sale: number;
   @Prop({ default: 0 })
  sale_price: number;
  @Prop({ type: 'string', enum: SaleType })
  sale_type: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  product: ModelProduct;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'option-select' })
  variations: ModelVariationSelect;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product_info' })
  product_info: ModelProductInfo;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: false })
  is_main?: boolean;
}

export const ModelSubProductSchema =
  SchemaFactory.createForClass(ModelSubProduct);
