import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { StationService } from './station.service';
import { Station } from './entities/station.entity';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('Station')
@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post()
  @ApiCreatedResponse({ type: Station })
  @ApiBadRequestResponse()
  async create(@Body() createStationDto: CreateStationDto) {
    return this.stationService.create(createStationDto);
  }

  @Get()
  async findAll() {
    return this.stationService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.stationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStationDto: UpdateStationDto) {
  //   return this.stationService.update(+id, updateStationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.stationService.remove(+id);
  // }
}
