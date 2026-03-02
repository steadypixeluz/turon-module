import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DeviceStatus } from '../../../enums';

@Schema({ collection: 'device-data', timestamps: true })
export class ModelDeviceData {
  @Prop()
  ip_address: string;
  @Prop()
  referal_code: string;
  @Prop()
  user_agent: string;
  @Prop()
  language: string;
  @Prop()
  timezone: string;
  @Prop()
  fingerprint: string;
  @Prop({
    type: String,
    enum: DeviceStatus,
    default: DeviceStatus.PENDING,
  })
  status: DeviceStatus;
  @Prop()
  width: string;
  @Prop()
  height: string;
}

export const ModelDeviceDataSchema =
  SchemaFactory.createForClass(ModelDeviceData);
