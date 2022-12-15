import { ApiProperty } from '@nestjs/swagger';

export class CreatePassengerDto {
  @ApiProperty()
  cccd: string;
  @ApiProperty()
  tenHanhKhach: string;
  @ApiProperty()
  soDienThoai: string;
  @ApiProperty()
  matKhau: string;
}
