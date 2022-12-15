import { ApiProperty } from '@nestjs/swagger';

export class CreateSlotDto {
  @ApiProperty()
  maSoGhe: number;
}
