import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainService } from './train.service';
import { Train } from './entities/train.entity';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('Train')
@Controller('train')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  @Post()
  @ApiCreatedResponse({ type: Train })
  @ApiBadRequestResponse()
  async create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainService.create(createTrainDto);
  }

  @Get()
  findAll() {
    return this.trainService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.trainService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTrainDto: UpdateTrainDto) {
  //   return this.trainService.update(+id, updateTrainDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.trainService.remove(+id);
  // }
}
