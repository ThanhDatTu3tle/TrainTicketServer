import { ApiProperty } from '@nestjs/swagger';

export class CreateStationDto {
  @ApiProperty()
  maGa: string;
  @ApiProperty()
  tenGa: string;
  @ApiProperty()
  soLuongTau: number;
}
