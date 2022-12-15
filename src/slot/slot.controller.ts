import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SlotService } from './slot.service';
import { Slot } from './entities/slot.entity';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('Slot')
@Controller('slot')
export class SlotController {
  constructor(private readonly slotService: SlotService) {}

  @Post()
  @ApiCreatedResponse({ type: Slot })
  @ApiBadRequestResponse()
  async create(@Body() createSlotDto: CreateSlotDto) {
    return this.slotService.create(createSlotDto);
  }

  @Get()
  async findAll() {
    return this.slotService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.slotService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSlotDto: UpdateSlotDto) {
  //   return this.slotService.update(+id, updateSlotDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.slotService.remove(+id);
  // }
}
