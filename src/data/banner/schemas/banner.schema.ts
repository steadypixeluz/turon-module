import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Lang } from '../../interfaces';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';
import { ProductType } from '../../../enums';

@Schema({ collection: 'banner', timestamps: true })
export class ModelBanner {
  @Prop({ unique: true })
  uid: number;
  @Prop({ type: Object })
  title: Lang;
  @Prop({ type: Object })
  photo_xl?: Object;
  @Prop({ type: Object })
  photo_md?: Object;
  @Prop({ type: Object })
  photo_sm?: Object;
  @Prop()
  photo_xl_all: string;
  @Prop()
  photo: string;
  @Prop()
  url: string;
  @Prop()
  section: string;
  @Prop({ type: 'string', enum: ['feed', 'category'] })
  type: string;
  @Prop({ type: 'string', enum: ['internal', 'external', 'disabled', 'url'] })
  banner_type: string;
  @Prop({ type: 'string', enum: ['hero', 'circle', 'square', 'product'] })
  view_type: string;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Menu' })
  menu: ModelMenu;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'banner' })
  parent: ModelBanner;
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Product' })
  products: ModelProduct;
  @Prop({ type: 'string', enum: ProductType, default: ProductType.retail })
  showcase: string;
  @Prop()
  photo_md_all: string;
  @Prop()
  photo_sm_all: string;
  @Prop()
  position: number;
  @Prop({ default: false })
  is_active?: boolean;
}

export const ModelBannerSchema = SchemaFactory.createForClass(ModelBanner);
