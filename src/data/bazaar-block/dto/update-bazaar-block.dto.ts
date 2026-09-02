import { PartialType } from '@nestjs/swagger';
import { CreateBazaarBlockDto } from './create-bazaar-block.dto';

export class UpdateBazaarBlockDto extends PartialType(CreateBazaarBlockDto) {}
