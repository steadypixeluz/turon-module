import { ApiProperty, PartialType } from '@nestjs/swagger';
export class GetMessages {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  name_message: string;

  @ApiProperty()
  theme_message: string;

  @ApiProperty()
  school: string;
  @ApiProperty()
  status: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  message: string;

  @ApiProperty()
  send_date: string;
}
