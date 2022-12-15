import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Hanhkhach as Passenger } from 'output/entities/Hanhkhach';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class PassengerService {

  constructor(
    @InjectRepository(Passenger)
    private passengerRepository: Repository<Passenger>,
  ) {}

  async create(createPassengerDto: CreatePassengerDto) {
        // create new station
        const newPassenger = this.passengerRepository.create();
        newPassenger.cccd = createPassengerDto.cccd;
        newPassenger.tenHanhKhach = createPassengerDto.tenHanhKhach;
        newPassenger.soDienThoai = createPassengerDto.soDienThoai;
        newPassenger.matKhau = createPassengerDto.matKhau;
    
        await this.passengerRepository.save(newPassenger);
  }

  async findAll() {
    return this.passengerRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} passenger`;
  // }

  // update(id: number, updatePassengerDto: UpdatePassengerDto) {
  //   return `This action updates a #${id} passenger`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} passenger`;
  // }
}
