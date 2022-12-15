import { PartialType } from '@nestjs/swagger';
import { CreateStationtrainDto } from './create-stationtrain.dto';

export class UpdateStationtrainDto extends PartialType(CreateStationtrainDto) {}
