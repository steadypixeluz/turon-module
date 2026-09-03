import { IsEnum, IsOptional, IsString } from 'class-validator';
import { StoreBazaarAssignmentStatus } from '../../../enums';

export class ModerateStoreBazaarAssignmentDto {
  @IsEnum(StoreBazaarAssignmentStatus)
  status: StoreBazaarAssignmentStatus;

  @IsString()
  @IsOptional()
  rejection_reason?: string;
}
