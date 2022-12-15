import { Module } from '@nestjs/common';
import { StationtrainService } from './stationtrain.service';
import { StationtrainController } from './stationtrain.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NhagaTau as Stationtrain } from 'output/entities/NhagaTau';
import { Nhaga as Station } from 'output/entities/Nhaga';
import { Thongtintau as Train } from 'output/entities/Thongtintau';

@Module({
  imports: [TypeOrmModule.forFeature([Stationtrain, Station, Train])],
  controllers: [StationtrainController],
  providers: [StationtrainService]
})
export class StationtrainModule {}
