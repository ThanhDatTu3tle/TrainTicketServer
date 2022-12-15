import { Module } from '@nestjs/common';
import { TrainService } from './train.service';
import { TrainController } from './train.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thongtintau as Train } from 'output/entities/Thongtintau';

@Module({
  imports: [TypeOrmModule.forFeature([Train])],
  controllers: [TrainController],
  providers: [TrainService]
})
export class TrainModule {}
