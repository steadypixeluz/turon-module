import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../../../enums';

@Schema({ collection: 'users', timestamps: true })
export class ModelUser {
  @Prop({ required: true })
  password?: string;
  @Prop()
  login: string;
  @Prop()
  phone_number: string;
  @Prop()
  full_name: string;
  @Prop({ default: Role.admin })
  role: Role;
  @Prop({ default: false })
  is_deleted: boolean;
  @Prop({ default: true })
  is_active: boolean;
}

export const ModelUserSchema = SchemaFactory.createForClass(ModelUser);
