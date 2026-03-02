import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProductType } from '../../../enums';
import { ModelCustomers } from '../../customer';
import { ModelMenu } from '../../menu';
import { ModelProduct } from '../../product';


@Schema({ collection: 'comparison', timestamps: true })
export class ModelComparison {
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  customer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'menu' })
  menu: ModelMenu;
 @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }] })
  products: ModelProduct[];
  @Prop({ type: 'string', enum: ProductType, default: ProductType.retail })
  showcase: string;
}

export const ModelComparisonSchema = SchemaFactory.createForClass(ModelComparison);
