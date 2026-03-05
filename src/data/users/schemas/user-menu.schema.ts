import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelUser } from './user.schema';
import { ModelMenu } from '../../../data';

@Schema({ collection: 'user-menu', timestamps: true })
export class ModelUserMenu {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'menu' })
  menu: ModelMenu;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users' })
  user: ModelUser;
}

export const ModelUserMenuSchema = SchemaFactory.createForClass(ModelUserMenu);
