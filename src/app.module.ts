import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrainModule } from './train/train.module';
import { StationModule } from './station/station.module';
import { ScheduleModule } from './schedule/schedule.module';
import { PassengerModule } from './passenger/passenger.module';
import { SlotModule } from './slot/slot.module';
import { TripModule } from './trip/trip.module';
import { TicketModule } from './ticket/ticket.module';
import { CabinModule } from './cabin/cabin.module';
import { StationtrainModule } from './stationtrain/stationtrain.module';
import { CabinslotModule } from './cabinslot/cabinslot.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config, autoLoadEntities: true }), 
    TrainModule, StationModule, ScheduleModule, PassengerModule, SlotModule, TripModule, TicketModule, CabinModule, StationtrainModule, CabinslotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
