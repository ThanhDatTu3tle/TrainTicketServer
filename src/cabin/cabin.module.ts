import { Module } from '@nestjs/common';
import { CabinService } from './cabin.service';
import { CabinController } from './cabin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thongtintoa as Cabin } from 'output/entities/Thongtintoa';
import { Thongtintau as Train } from 'output/entities/Thongtintau';

@Module({
  imports: [TypeOrmModule.forFeature([Cabin, Train])],
  controllers: [CabinController],
  providers: [CabinService]
})
export class CabinModule {}
