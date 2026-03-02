import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'client_device', timestamps: true })
export class ModelClientDevice {
  @Prop()
  device: string;
  @Prop()
  api: string;
}

export const ModelClientDeviceSchema =
  SchemaFactory.createForClass(ModelClientDevice);
