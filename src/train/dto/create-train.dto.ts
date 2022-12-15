import { ApiProperty } from '@nestjs/swagger';

export class CreateTrainDto {
  @ApiProperty()
  maSoTau: string;
  @ApiProperty()
  tenTau: string;
  @ApiProperty()
  soLuongToa: number;
}
