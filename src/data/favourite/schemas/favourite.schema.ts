import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProductType } from '../../../enums';
import { ModelCustomers } from '../../customer';
import { ModelProduct } from '../../product';

@Schema({ collection: 'favourite', timestamps: true })
export class ModelFaurite {
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'customer' })
  customer: ModelCustomers;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'product' })
  product: ModelProduct;
  @Prop({ type: 'string', enum: ProductType, default: ProductType.retail })
  showcase: string;
}

export const ModelFauriteSchema = SchemaFactory.createForClass(ModelFaurite);
