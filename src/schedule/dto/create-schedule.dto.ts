import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
  @ApiProperty()
  maLichTrinh: string;
  @ApiProperty()
  maGaDi: string;
  @ApiProperty()
  maGaDen: string;
  @ApiProperty()
  tenGaDi: string;
  @ApiProperty()
  tenGaDen: string;
  @ApiProperty()
  gioKhoiHanh: Date;
  @ApiProperty()
  gioKetThuc: Date;
}
