import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket } from './entities/ticket.entity';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Response } from 'express';
import { ApiTags, ApiQuery, ApiCreatedResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('Ticket')
@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  @ApiCreatedResponse({ type: Ticket })
  @ApiBadRequestResponse()
  async create(@Body() createTicketDto: CreateTicketDto, @Res() res: Response) {
    try {
      const newTicket = await this.ticketService.create(
        createTicketDto,
      );
      res.status(201).json({ success: true, body: newTicket });
    } catch (err) {
      res.status(400).json({ success: false, message: err });
    }
  }

  @Get()
  async findAll() {
    return this.ticketService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.ticketService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
  //   return this.ticketService.update(+id, updateTicketDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.ticketService.remove(+id);
  // }
}
