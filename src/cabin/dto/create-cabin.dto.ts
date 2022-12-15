import { ApiProperty } from '@nestjs/swagger';

export class CreateCabinDto {
  @ApiProperty()
  maSoToa: string;
  @ApiProperty()
  maSoTau: string;
  @ApiProperty()
  soLuongGhe: number;
  @ApiProperty()
  loaiGhe: string;
  @ApiProperty()
  giaTienGhe: number;
}
