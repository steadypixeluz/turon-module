import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface IkpuLangText {
  uz?: string;
  ru?: string;
}

@Schema({ collection: 'ikpus', timestamps: true })
export class ModelIkpu {
  @Prop({ type: String, required: true, unique: true, trim: true })
  ikpu: string;

  @Prop({ type: Object })
  ikpuName: IkpuLangText;

  @Prop({ type: Object })
  groupName: IkpuLangText;

  @Prop({ type: Object })
  className: IkpuLangText;

  @Prop({ type: Object })
  positionName: IkpuLangText;

  @Prop({ type: Object })
  subPositionName: IkpuLangText;

  @Prop({ type: Boolean, default: true })
  isValidForCategory: boolean;

  @Prop({ type: Boolean, default: false })
  isVatRelief: boolean;

  @Prop({ type: Boolean, default: true })
  is_active: boolean;

  @Prop({ type: Boolean, default: false })
  is_deleted: boolean;

  @Prop({ type: String, default: null })
  deleted_at: string;
}

export const ModelIkpuSchema = SchemaFactory.createForClass(ModelIkpu);

ModelIkpuSchema.index({ ikpu: 1 }, { unique: true });
ModelIkpuSchema.index({ is_deleted: 1, is_active: 1 });
