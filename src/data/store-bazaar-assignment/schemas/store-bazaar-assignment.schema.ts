import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelBazaar } from '../../bazaar/schemas/bazaar.schema';
import { ModelBazaarBlock } from '../../bazaar-block/schemas/bazaar-block.schema';
import { ModelStore } from '../../store/schemas/store.schema';
import { ModelCustomerCompany } from '../../customer-company/schemas/customer-company.schema';
import { StoreBazaarAssignmentStatus } from '../../../enums';

@Schema({ collection: 'store-bazaar-assignment', timestamps: true })
export class ModelStoreBazaarAssignment {
  @Prop({ type: mongoose.Types.ObjectId, ref: 'Bazaar', required: true })
  bazaar: ModelBazaar;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'BazaarBlock', required: true })
  bazaar_block: ModelBazaarBlock;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Store', required: true })
  store: ModelStore;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'CustomerCompany', required: true })
  customer_company: ModelCustomerCompany;

  @Prop({
    type: String,
    enum: StoreBazaarAssignmentStatus,
    default: StoreBazaarAssignmentStatus.new,
  })
  status: string;

  @Prop({ type: Number })
  number: number;

  @Prop({ type: String, default: null })
  rejection_reason: string;

  @Prop({ default: false })
  is_deleted: boolean;

  @Prop({ default: null })
  deleted_at: string;
}

export const ModelStoreBazaarAssignmentSchema = SchemaFactory.createForClass(
  ModelStoreBazaarAssignment,
);
