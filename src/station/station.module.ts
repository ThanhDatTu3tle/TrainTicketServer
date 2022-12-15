import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationController } from './station.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nhaga as Station } from 'output/entities/Nhaga';

@Module({
  imports: [TypeOrmModule.forFeature([Station])],
  controllers: [StationController],
  providers: [StationService]
})
export class StationModule {}
