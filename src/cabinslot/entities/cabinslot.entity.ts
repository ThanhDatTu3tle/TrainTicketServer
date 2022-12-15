import { ApiProperty } from '@nestjs/swagger';

export class Cabinslot {
  @ApiProperty()
  maSoToa: string;
  @ApiProperty()
  maSoGhe: number;
  @ApiProperty()
  trangThai: boolean;
}
