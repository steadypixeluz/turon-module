import { PartialType } from '@nestjs/mapped-types';
import { CreateSubProductDto } from './create.dto';

export class UpdateSubProductDto extends PartialType(CreateSubProductDto) {}
