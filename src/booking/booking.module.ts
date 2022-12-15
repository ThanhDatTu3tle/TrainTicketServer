import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phieudatcho as Booking } from 'output/entities/Phieudatcho';
import { Lichtrinh as Schedule } from 'output/entities/Lichtrinh';
import { Vechuyentau as Ticket } from 'output/entities/Vechuyentau';
import { Chuyentau as Trip } from 'output/entities/Chuyentau';
import { ToaGhe as Cabinslot } from 'output/entities/ToaGhe';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Schedule, Ticket, Trip, Cabinslot])],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
