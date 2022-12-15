import { Module } from '@nestjs/common';
import { SlotService } from './slot.service';
import { SlotController } from './slot.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ghe as Slot } from 'output/entities/Ghe';

@Module({
  imports: [TypeOrmModule.forFeature([Slot])],
  controllers: [SlotController],
  providers: [SlotService]
})
export class SlotModule {}
