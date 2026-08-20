import { PartialType } from '@nestjs/swagger';
import { CreatePsicDto } from './create-psic.dto';

export class UpdatePsicDto extends PartialType(CreatePsicDto) { }
