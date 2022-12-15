import { ApiProperty } from '@nestjs/swagger';

export class CreateCabinslotDto {
  @ApiProperty()
  maToaGhe: string;
  @ApiProperty()
  maSoToa: string;
  @ApiProperty()
  maSoGhe: number;
  @ApiProperty()
  trangThai: boolean;
}
