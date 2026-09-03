import { IsString } from 'class-validator';

export class CreateStoreBazaarAssignmentDto {
  @IsString()
  bazaar: string;

  @IsString()
  bazaar_block: string;

  @IsString()
  store: string;
}
