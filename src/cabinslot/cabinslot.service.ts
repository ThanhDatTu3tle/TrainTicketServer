import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCabinslotDto } from './dto/create-cabinslot.dto';
import { UpdateCabinslotDto } from './dto/update-cabinslot.dto';
import { CabinSlotRelations as relations } from 'src/relations/relations';
import { ToaGhe as Cabinslot } from 'output/entities/ToaGhe';
import { Thongtintoa as Cabin } from 'output/entities/Thongtintoa';
import { Ghe as Slot } from 'output/entities/Ghe';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class CabinslotService {

  constructor(
    @InjectRepository(Cabinslot)
    private cabinslotRepository: Repository<Cabinslot>,

    @InjectRepository(Cabin)
    private cabinRepository: Repository<Cabin>,

    @InjectRepository(Slot)
    private slotRepository: Repository<Slot>
  ) {}

  async create(createCabinslotDto: CreateCabinslotDto): Promise<Cabinslot> {
    try {
      // Foreign key Thongtintoa: cabin
      const cabinBody = createCabinslotDto.maSoToa;
      const cabins = await this.cabinRepository.findOneByOrFail({
        maSoToa: cabinBody
      });

      // Foreign key Ghe: slot
      const slotBody = createCabinslotDto.maSoGhe;
      const slots = await this.slotRepository.findOneByOrFail({
        maSoGhe: slotBody
      });

      // create new order
      const newCabinSlot = this.cabinslotRepository.create();
      newCabinSlot.maToaGhe = createCabinslotDto.maToaGhe;
      newCabinSlot.maSoToa = cabins;
      newCabinSlot.maSoGhe = slots;
      newCabinSlot.trangThai = createCabinslotDto.trangThai;

      await this.cabinslotRepository.save(newCabinSlot);
      // console.log(this.productRepository)

      const findAndReturn = await this.cabinslotRepository.findOneOrFail({
        relations,
        where: { 
          maToaGhe: newCabinSlot.maToaGhe,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    const findAll = await this.cabinslotRepository.find({
      relations,
    })
    
    return findAll;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} cabinslot`;
  // }

  // update(id: number, updateCabinslotDto: UpdateCabinslotDto) {
  //   return `This action updates a #${id} cabinslot`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cabinslot`;
  // }
}
