import { ApiProperty } from '@nestjs/swagger';

export class Cabinslot {
  @ApiProperty()
  maToaGhe: string;
  @ApiProperty()
  maSoToa: string;
  @ApiProperty()
  maSoGhe: number;
  @ApiProperty()
  trangThai: boolean;
}
