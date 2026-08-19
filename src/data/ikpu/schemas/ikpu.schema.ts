import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'ikpus', timestamps: true })
export class ModelIkpu {
  @Prop({ type: String, required: true, unique: true, trim: true })
  ikpu: string;

  @Prop({ type: String, required: true, trim: true })
  ikpuName: string;

  @Prop({ type: String, required: true, trim: true })
  groupName: string;

  @Prop({ type: String, required: true, trim: true })
  className: string;

  @Prop({ type: String, required: true, trim: true })
  positionName: string;

  @Prop({ type: String, required: true, trim: true })
  subPositionName: string;

  @Prop({ type: Boolean, default: true })
  isValidForCategory: boolean;

  @Prop({ type: Boolean, default: false })
  isVatRelief: boolean;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;

  @Prop({ type: Boolean, default: false })
  is_deleted: boolean;

  @Prop({ type: Date, default: null })
  deleted_at: Date;
}

export const ModelIkpuSchema = SchemaFactory.createForClass(ModelIkpu);

ModelIkpuSchema.index({ ikpu: 1 }, { unique: true });
ModelIkpuSchema.index({ is_deleted: 1, is_active: 1 });
ModelIkpuSchema.index({ ikpuName: 1 });
