import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class ModelPriceTier {
  @Prop({ type: Number, required: true })
  min_count: number;

  @Prop({ type: Number, default: null })
  max_count: number;

  @Prop({ type: Number, required: true })
  price: number;
}

export const ModelPriceTierSchema = SchemaFactory.createForClass(ModelPriceTier);
