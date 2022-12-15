import { ApiProperty } from '@nestjs/swagger';

export class Trip {
  @ApiProperty()
  maChuyenTau: string;
  @ApiProperty()
  maSoTau: string;
  @ApiProperty()
  maLichTrinh: string;
  @ApiProperty()
  tenTau: string;
}
