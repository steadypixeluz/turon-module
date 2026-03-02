import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Lang } from '../../interfaces';

@Schema({ collection: 'country', timestamps: true })
export class ModelCountry {
  @Prop({ type: Object })
  name: Lang;

  @Prop()
  photo: string;
  @Prop({ default: true })
  is_active: boolean;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop()
  deleted_at: string;
}

export const ModelCountrySchema = SchemaFactory.createForClass(ModelCountry);
