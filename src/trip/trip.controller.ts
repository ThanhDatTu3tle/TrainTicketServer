import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TripService } from './trip.service';
import { Trip } from './entities/trip.entity';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Trip')
@Controller('trip')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Post()
  @ApiCreatedResponse({ type: Trip })
  @ApiBadRequestResponse()
  async create(@Body() createTripDto: CreateTripDto, @Res() res: Response) {
    try {
      const newTrip = await this.tripService.create(
        createTripDto,
      );
      res.status(201).json({ success: true, body: newTrip });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async findAll() {
    return this.tripService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tripService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTripDto: UpdateTripDto) {
  //   return this.tripService.update(+id, updateTripDto);
  // }

  @Delete(':maChuyenTau')
  async remove(@Param('maChuyenTau') maChuyenTau: string, @Res() res: Response,) {
    if (!maChuyenTau) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteProduct = await this.tripService.remove(maChuyenTau);
      res.status(200).json({ success: true, body: deleteProduct });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
