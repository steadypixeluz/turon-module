import { PartialType } from '@nestjs/swagger';
import { CreateBazaarDto } from './create-bazaar.dto';

export class UpdateBazaarDto extends PartialType(CreateBazaarDto) {}
