import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  @ApiCreatedResponse({ type: Schedule })
  @ApiBadRequestResponse()
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.scheduleService.create(createScheduleDto);
  }

  @Get()
  async findAll() {
    return this.scheduleService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.scheduleService.findOne(+id);
  // }

  @Patch(':maLichTrinh')
  async update(
    @Param('maLichTrinh') maLichTrinh: string, 
    @Body() updateScheduleDto: UpdateScheduleDto,
    @Res() res: Response,
  ) {
    if (!updateScheduleDto) {
      res
        .status(400)
        .json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const updateCategory = await this.scheduleService.update(
        maLichTrinh, 
        updateScheduleDto,
      );
      res.status(200).json({ success: true, body: updateCategory });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Delete(':maLichTrinh')
  async remove(@Param('maLichTrinh') maLichTrinh: string, @Res() res: Response,) {
    if (!maLichTrinh) {
      res.status(404).json({ success: false, message: 'Gãy!!!' });
    }
    try {
      const deleteProduct = await this.scheduleService.remove(maLichTrinh);
      res.status(200).json({ success: true, body: deleteProduct });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }
}
