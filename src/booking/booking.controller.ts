import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiCreatedResponse({ type: Booking })
  @ApiBadRequestResponse()
  async create(@Body() createBookingDto: CreateBookingDto, @Res() res: Response) {
    try {
      const newBooking = await this.bookingService.create(
        createBookingDto,
      );
      res.status(201).json({ success: true, body: newBooking });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async findAll() {
    return this.bookingService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.bookingService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
  //   return this.bookingService.update(+id, updateBookingDto);
  // }

  @Delete(':maPhieuDatCho')
  async remove(@Param('maPhieuDatCho') maPhieuDatCho: string, @Res() res: Response,) {
    if (!maPhieuDatCho) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteProduct = await this.bookingService.remove(maPhieuDatCho);
      res.status(200).json({ success: true, body: deleteProduct });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
