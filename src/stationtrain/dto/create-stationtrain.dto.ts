import { ApiProperty } from '@nestjs/swagger';

export class CreateStationtrainDto {
  @ApiProperty()
  maGa: string;
  @ApiProperty()
  maSoTau: string;
  @ApiProperty()
  trangThai: boolean;
}
