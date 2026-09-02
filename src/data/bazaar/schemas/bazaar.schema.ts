import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelCountry } from '../../country/schemas/country.schema';
import { Lang } from '../../interfaces';

@Schema({ collection: 'bazaar', timestamps: true })
export class ModelBazaar {
  @Prop()
  logo: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: Object })
  description: Lang;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Country', required: true })
  country: ModelCountry;

  @Prop({ type: Object })
  address: Lang;

  @Prop({ default: false })
  is_active?: boolean;

  @Prop({ default: false })
  is_deleted: boolean;

  @Prop({ default: null })
  deleted_at: string;
}

export const ModelBazaarSchema = SchemaFactory.createForClass(ModelBazaar);
