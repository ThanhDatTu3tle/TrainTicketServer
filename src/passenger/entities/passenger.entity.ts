import { ApiProperty } from '@nestjs/swagger';

export class Passenger {
  @ApiProperty()
  cccd: string;
  @ApiProperty()
  tenHanhKhach: string;
  @ApiProperty()
  soDienThoai: string;
  @ApiProperty()
  matKhau: string;
}
