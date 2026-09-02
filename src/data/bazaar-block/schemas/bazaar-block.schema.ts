import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelBazaar } from '../../bazaar/schemas/bazaar.schema';
import { Lang } from '../../interfaces';

@Schema({ collection: 'bazaar-block', timestamps: true })
export class ModelBazaarBlock {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Object })
  description: Lang;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Bazaar', required: true })
  bazaar: ModelBazaar;

  @Prop({ default: false })
  is_active?: boolean;

  @Prop({ default: false })
  is_deleted: boolean;

  @Prop({ default: null })
  deleted_at: string;
}

export const ModelBazaarBlockSchema = SchemaFactory.createForClass(ModelBazaarBlock);
