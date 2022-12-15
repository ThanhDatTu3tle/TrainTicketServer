import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { CabinslotService } from './cabinslot.service';
import { Cabinslot } from './entities/cabinslot.entity';
import { CreateCabinslotDto } from './dto/create-cabinslot.dto';
import { UpdateCabinslotDto } from './dto/update-cabinslot.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Cabinslot')
@Controller('cabinslot')
export class CabinslotController {
  constructor(private readonly cabinslotService: CabinslotService) {}

  @Post()
  @ApiCreatedResponse({ type: Cabinslot })
  @ApiBadRequestResponse()
  async create(@Body() createCabinslotDto: CreateCabinslotDto, @Res() res: Response) {
    try {
      const newCabinSlot = await this.cabinslotService.create(
        createCabinslotDto,
      );
      res.status(201).json({ success: true, body: newCabinSlot });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async findAll() {
    return this.cabinslotService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cabinslotService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCabinslotDto: UpdateCabinslotDto) {
  //   return this.cabinslotService.update(+id, updateCabinslotDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cabinslotService.remove(+id);
  // }
}
