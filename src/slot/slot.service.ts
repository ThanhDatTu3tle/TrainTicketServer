import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';
import { Ghe as Slot } from 'output/entities/Ghe';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class SlotService {

  constructor(
    @InjectRepository(Slot)
    private slotRepository: Repository<Slot>,
  ) {}

  async create(createSlotDto: CreateSlotDto) {
    // create new station
    const newSlot = this.slotRepository.create();
    newSlot.maSoGhe = createSlotDto.maSoGhe;

    await this.slotRepository.save(newSlot);
  }

  async findAll() {
    return this.slotRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} slot`;
  // }

  // update(id: number, updateSlotDto: UpdateSlotDto) {
  //   return `This action updates a #${id} slot`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} slot`;
  // }
}
