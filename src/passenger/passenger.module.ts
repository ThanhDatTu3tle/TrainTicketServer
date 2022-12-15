import { Module } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hanhkhach as Passenger } from 'output/entities/Hanhkhach';

@Module({
  imports: [TypeOrmModule.forFeature([Passenger])],
  controllers: [PassengerController],
  providers: [PassengerService]
})
export class PassengerModule {}
