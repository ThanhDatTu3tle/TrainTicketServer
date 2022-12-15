import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { BookingRelations as relations } from 'src/relations/relations';
import { Phieudatcho as Booking } from 'output/entities/Phieudatcho';
import { Lichtrinh as Schedule } from 'output/entities/Lichtrinh';
import { Vechuyentau as Ticket } from 'output/entities/Vechuyentau';
import { Chuyentau as Trip } from 'output/entities/Chuyentau';
import { ToaGhe as Cabinslot } from 'output/entities/ToaGhe';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class BookingService {

  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,

    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,

    @InjectRepository(Ticket)
    private ticketRepository: Repository<Ticket>,

    @InjectRepository(Trip)
    private tripRepository: Repository<Trip>,

    @InjectRepository(Cabinslot)
    private cabinslotRepository: Repository<Cabinslot>
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    try {
      // Foreign key Lichtrinh: schedule
      const scheduleBody = createBookingDto.maLichTrinh;
      const schedules = await this.scheduleRepository.findOneByOrFail({
        maLichTrinh: scheduleBody
      });

      // Foreign key Vechuyentau: ticket
      const ticketBody = createBookingDto.maVeChuyenTau;
      const tickets = await this.ticketRepository.findOneByOrFail({
        maVeChuyenTau: ticketBody
      });

      // Foreign key Chuyentau: Trip
      const tripBody = createBookingDto.maChuyenTau;
      const trips = await this.tripRepository.findOneByOrFail({
        maChuyenTau: tripBody
      });

      // Foreign key ToaGhe: cabinslot
      const cabinslotBody = createBookingDto.maToaGhe;
      const cabinslots = await this.cabinslotRepository.findOneByOrFail({
        maToaGhe: cabinslotBody
      });

      // create new order
      const newBooking = this.bookingRepository.create();
      newBooking.maPhieuDatCho = createBookingDto.maPhieuDatCho;
      newBooking.maLichTrinh = schedules;
      newBooking.maVeChuyenTau = tickets;
      newBooking.maChuyenTau = trips;
      newBooking.maToaGhe = cabinslots;
      newBooking.hoTenHanhKhach = createBookingDto.hoTenHanhKhach;
      newBooking.giaTien = createBookingDto.giaTien;
      
      await this.bookingRepository.save(newBooking);
      // console.log(this.productRepository)

      const findAndReturn = await this.bookingRepository.findOneOrFail({
        relations,
        where: { 
          maPhieuDatCho: newBooking.maPhieuDatCho,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    const findAll = await this.bookingRepository.find({
      relations,
    })
    
    return findAll;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} booking`;
  // }

  // update(id: number, updateBookingDto: UpdateBookingDto) {
  //   return `This action updates a #${id} booking`;
  // }

  async remove(maPhieuDatCho: string) {
    try {
      const findOne = await this.bookingRepository.findOneOrFail({
        where: { maPhieuDatCho },
      });
      return await this.bookingRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
