import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { CabinService } from './cabin.service';
import { Cabin } from './entities/cabin.entity';
import { CreateCabinDto } from './dto/create-cabin.dto';
import { UpdateCabinDto } from './dto/update-cabin.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Cabin')
@Controller('cabin')
export class CabinController {
  constructor(private readonly cabinService: CabinService) {}

  @Post()
  @ApiCreatedResponse({ type: Cabin })
  @ApiBadRequestResponse()
  async create(@Body() createCabinDto: CreateCabinDto, @Res() res: Response) {
    try {
      const newCabin = await this.cabinService.create(
        createCabinDto,
      );
      res.status(201).json({ success: true, body: newCabin });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async findAll() {
    return this.cabinService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cabinService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCabinDto: UpdateCabinDto) {
  //   return this.cabinService.update(+id, updateCabinDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cabinService.remove(+id);
  // }
}
