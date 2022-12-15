import { ApiProperty } from '@nestjs/swagger';

export class CreateCabinslotDto {
  @ApiProperty()
  maSoToa: string;
  @ApiProperty()
  maSoGhe: number;
  @ApiProperty()
  trangThai: boolean;
}
