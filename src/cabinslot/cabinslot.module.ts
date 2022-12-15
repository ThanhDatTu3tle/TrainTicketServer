import { Module } from '@nestjs/common';
import { CabinslotService } from './cabinslot.service';
import { CabinslotController } from './cabinslot.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToaGhe as Cabinslot } from 'output/entities/ToaGhe';
import { Thongtintoa as Cabin } from 'output/entities/Thongtintoa';
import { Ghe as Slot } from 'output/entities/Ghe';

@Module({
  imports: [TypeOrmModule.forFeature([Cabinslot, Cabin, Slot])],
  controllers: [CabinslotController],
  providers: [CabinslotService]
})
export class CabinslotModule {}
