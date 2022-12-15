import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { StationtrainService } from './stationtrain.service';
import { Stationtrain } from './entities/stationtrain.entity';
import { CreateStationtrainDto } from './dto/create-stationtrain.dto';
import { UpdateStationtrainDto } from './dto/update-stationtrain.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Stationtrain')
@Controller('stationtrain')
export class StationtrainController {
  constructor(private readonly stationtrainService: StationtrainService) {}

  @Post()
  @ApiCreatedResponse({ type: Stationtrain })
  @ApiBadRequestResponse()
  async create(@Body() createStationtrainDto: CreateStationtrainDto, @Res() res: Response) {
    try {
      const newTrip = await this.stationtrainService.create(
        createStationtrainDto,
      );
      res.status(201).json({ success: true, body: newTrip });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async findAll() {
    return this.stationtrainService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.stationtrainService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStationtrainDto: UpdateStationtrainDto) {
  //   return this.stationtrainService.update(+id, updateStationtrainDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.stationtrainService.remove(+id);
  // }
}
