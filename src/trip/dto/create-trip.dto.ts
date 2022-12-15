import { ApiProperty } from '@nestjs/swagger';

export class CreateTripDto {
  @ApiProperty()
  maChuyenTau: string;
  @ApiProperty()
  maSoTau: string;
  @ApiProperty()
  maLichTrinh: string;
  @ApiProperty()
  tenTau: string;
}
