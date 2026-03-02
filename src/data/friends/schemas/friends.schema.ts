import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { FriendInviteStatus } from '../../../enums';
import { ModelCustomers } from '../../customer';

@Schema({ collection: 'friends',timestamps: true })
export class ModelFriends {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer',
    required: true,
  })
  sender_user: ModelCustomers;
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'customer',
    required: true,
  })
  receiver_user: ModelCustomers;
  @Prop({
    type: String,
    enum: FriendInviteStatus,
    default: FriendInviteStatus.PENDING,
  })
  status: FriendInviteStatus;
}

export const FriendsSchema = SchemaFactory.createForClass(ModelFriends);
