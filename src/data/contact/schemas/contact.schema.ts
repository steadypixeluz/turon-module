import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PhoneAndEmail, Social, Address, Work } from '../../interfaces';

@Schema({ collection: 'contact', timestamps: true })
export class ModelContact {
  @Prop({ type: Array })
  phone_number: PhoneAndEmail[];
  @Prop({ type: Array })
  email: PhoneAndEmail[];
  @Prop({ type: Array })
  social: Social[];
  @Prop({ type: Array })
  address: Address[];
  @Prop({ type: Array })
  work_time: Work[];
  @Prop()
  map: string;
}

export const ModelContactSchema = SchemaFactory.createForClass(ModelContact);
