import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ModelCustomers } from '../../customer/schemas/customer.schema';
import { ModelStore } from '../../store/schemas/store.schema';

@Schema({ collection: 'company-employee', timestamps: true })
export class ModelCompanyEmployee {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true })
  customer: ModelCustomers;

  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Store', default: [] })
  store: ModelStore[];

  @Prop({ required: true })
  role: string;
}

export const ModelCompanyEmployeeSchema = SchemaFactory.createForClass(ModelCompanyEmployee);
