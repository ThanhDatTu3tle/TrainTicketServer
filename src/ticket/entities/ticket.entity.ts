import { ApiProperty } from '@nestjs/swagger';

export class Ticket {
  @ApiProperty()
  maVeChuyenTau: string;
  @ApiProperty()
  maChuyenTau: string;
  @ApiProperty()
  maLichTrinh: string;
  @ApiProperty()
  cccd: string;
  @ApiProperty()
  maSoToa: string;
  @ApiProperty()
  tongTien: number;
  @ApiProperty()
  loaiGhe: string;
  @ApiProperty()
  soLuongGhe: number;
  @ApiProperty()
  ngayDat: Date;
}
