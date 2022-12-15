import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { Passenger } from './entities/passenger.entity';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('Passenger')
@Controller('passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Post()
  @ApiCreatedResponse({ type: Passenger })
  @ApiBadRequestResponse()
  async create(@Body() createPassengerDto: CreatePassengerDto) {
    return this.passengerService.create(createPassengerDto);
  }

  @Get()
  async findAll() {
    return this.passengerService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.passengerService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePassengerDto: UpdatePassengerDto) {
  //   return this.passengerService.update(+id, updatePassengerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.passengerService.remove(+id);
  // }
}
