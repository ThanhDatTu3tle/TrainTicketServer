import { PartialType } from '@nestjs/swagger';
import { CreateCabinslotDto } from './create-cabinslot.dto';

export class UpdateCabinslotDto extends PartialType(CreateCabinslotDto) {}
