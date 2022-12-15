import { ApiProperty } from '@nestjs/swagger';

export class Train {
  @ApiProperty()
  maSoTau: string;
  @ApiProperty()
  tenTau: string;
  @ApiProperty()
  soLuongToa: number;
}
