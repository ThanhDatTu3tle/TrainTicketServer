import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty()
  maPhieuDatCho: string;
  @ApiProperty()
  maLichTrinh: string;
  @ApiProperty()
  maVeChuyenTau: string;
  @ApiProperty()
  maChuyenTau: string;
  @ApiProperty()
  maToaGhe: string;
  @ApiProperty()
  hoTenHanhKhach: string;
  @ApiProperty()
  giaTien: number;
}
