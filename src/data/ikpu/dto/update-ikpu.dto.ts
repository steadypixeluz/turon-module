import { PartialType } from '@nestjs/swagger';
import { CreateIkpuDto } from './create-ikpu.dto';

export class UpdateIkpuDto extends PartialType(CreateIkpuDto) {}
