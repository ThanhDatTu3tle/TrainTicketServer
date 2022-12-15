import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { TicketRelations as relations } from 'src/relations/relations';
import { Vechuyentau as Ticket } from 'output/entities/Vechuyentau';
import { Chuyentau as Trip } from 'output/entities/Chuyentau';
import { Thongtintoa as Cabin } from 'output/entities/Thongtintoa';
import { Lichtrinh as Schedule } from 'output/entities/Lichtrinh';
import { Hanhkhach as Passenger } from 'output/entities/Hanhkhach';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class TicketService {

  constructor(
    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,

    @InjectRepository(Trip)
    private tripRepository: Repository<Trip>,

    @InjectRepository(Cabin)
    private cabinRepository: Repository<Cabin>,

    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,

    @InjectRepository(Passenger)
    private passengerRepository: Repository<Passenger>
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    try {
      // Foreign key Chuyentau: trip
      const tripBody = createTicketDto.maChuyenTau;
      const trips = await this.tripRepository.findOneByOrFail({
        maChuyenTau: tripBody
      });

      // Foreign key Thongtintoa: cabin
      const cabinBody = createTicketDto.maSoToa;
      const cabins = await this.cabinRepository.findOneByOrFail({
        maSoToa: cabinBody
      });

      // Foreign key Lichtrinh: schedule
      const scheduleBody = createTicketDto.maLichTrinh;
      const schdules = await this.scheduleRepository.findOneByOrFail({
        maLichTrinh: scheduleBody
      });

      // Foreign key Lichtrinh: schedule
      const passengerBody = createTicketDto.cccd;
      const passengers = await this.passengerRepository.findOneByOrFail({
        cccd: passengerBody
      });

      // create new order
      const newTicket = this.ticketRepository.create();
      newTicket.maVeChuyenTau = createTicketDto.maVeChuyenTau;
      newTicket.maChuyenTau = trips;
      newTicket.maLichTrinh = schdules;
      newTicket.cccd = passengers;
      newTicket.maSoToa = cabins;
      newTicket.tongTien = createTicketDto.tongTien;
      newTicket.loaiGhe = createTicketDto.loaiGhe;
      newTicket.soLuongGhe = createTicketDto.soLuongGhe;
      newTicket.ngayDat = createTicketDto.ngayDat;
      
      await this.ticketRepository.save(newTicket);
      // console.log(this.productRepository)

      const findAndReturn = await this.ticketRepository.findOneOrFail({
        relations,
        where: { 
          maVeChuyenTau: newTicket.maVeChuyenTau,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    const findAll = await this.ticketRepository.find({
      relations,
    })
    
    return findAll;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} ticket`;
  // }

  // update(id: number, updateTicketDto: UpdateTicketDto) {
  //   return `This action updates a #${id} ticket`;
  // }

  async remove(maVeChuyenTau: string) {
    try {
      const findOne = await this.ticketRepository.findOneOrFail({
        where: { maVeChuyenTau },
      });
      return await this.ticketRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
