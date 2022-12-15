import { ApiProperty } from '@nestjs/swagger';

export class Station {
  @ApiProperty()
  maGa: string;
  @ApiProperty()
  tenGa: string;
  @ApiProperty()
  soLuongTau: number;
}
