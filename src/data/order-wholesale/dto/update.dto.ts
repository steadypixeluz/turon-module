import { PartialType } from '@nestjs/swagger';
import { CreateOrderWholesaleDto } from './create.dto';

export class UpdateOrderWholesaleDto extends PartialType(CreateOrderWholesaleDto) { }
