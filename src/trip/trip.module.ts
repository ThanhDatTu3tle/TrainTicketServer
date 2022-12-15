import { Module } from '@nestjs/common';
import { TripService } from './trip.service';
import { TripController } from './trip.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chuyentau as Trip } from 'output/entities/Chuyentau';
import { Thongtintau as Train } from 'output/entities/Thongtintau';
import { Lichtrinh as Schedule } from 'output/entities/Lichtrinh';

@Module({
  imports: [TypeOrmModule.forFeature([Trip, Train, Schedule])],
  controllers: [TripController],
  providers: [TripService]
})
export class TripModule {}
