import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'buy-coin', timestamps: true })
export class ModelBuyCoin {
  @Prop()
  photo?: string;
  @Prop()
  title: string;
  @Prop()
  position: number;
  @Prop()
  coin_count: number;
  @Prop()
  price: number;
  @Prop()
  sale_price: number;
  @Prop({ default: true })
  is_active?: boolean;
  @Prop({ default: false })
  sale_status?: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
}

export const ModelBuyCoinSchema = SchemaFactory.createForClass(ModelBuyCoin);
