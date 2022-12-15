import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vechuyentau as Ticket } from 'output/entities/Vechuyentau';
import { Chuyentau as Trip } from 'output/entities/Chuyentau';
import { Thongtintoa as Cabin } from 'output/entities/Thongtintoa';
import { Lichtrinh as Schedule } from 'output/entities/Lichtrinh';
import { Hanhkhach as Passenger } from 'output/entities/Hanhkhach';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, Trip, Cabin, Schedule, Passenger])],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
