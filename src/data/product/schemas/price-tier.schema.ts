import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SaleType } from '../../../enums';

@Schema({ _id: false })
export class ModelPriceTier {
  @Prop({ type: Number, required: true })
  min_count: number;

  @Prop({ type: Number, default: null })
  max_count: number;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: Number, default: null })
  sale: number;

  @Prop({ type: 'string', enum: SaleType })
  sale_type: string;

  @Prop({ type: Number, default: null })
  sale_price: number;
}

export const ModelPriceTierSchema = SchemaFactory.createForClass(ModelPriceTier);
