import { ApiProperty } from '@nestjs/swagger';

export class Stationtrain {
  @ApiProperty()
  maGa: string;
  @ApiProperty()
  maSoTau: string;
  @ApiProperty()
  trangThai: boolean;
}
