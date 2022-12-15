import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCabinDto } from './dto/create-cabin.dto';
import { UpdateCabinDto } from './dto/update-cabin.dto';
import { CabinRelations as relations } from 'src/relations/relations';
import { Thongtintoa as Cabin } from 'output/entities/Thongtintoa';
import { Thongtintau as Train } from 'output/entities/Thongtintau';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class CabinService {

  constructor(
    @InjectRepository(Cabin)
    private cabinRepository: Repository<Cabin>,

    @InjectRepository(Train)
    private trainRepository: Repository<Train>,
  ) {}

  async create(createCabinDto: CreateCabinDto): Promise<Cabin> {
    try {
      // Foreign key Thongtintau: train
      const trainBody = createCabinDto.maSoTau;
      const trains = await this.trainRepository.findOneByOrFail({
        maSoTau: trainBody
      });

      // create new order
      const newCabin = this.cabinRepository.create();
      newCabin.maSoToa = createCabinDto.maSoToa;
      newCabin.maSoTau = trains;
      newCabin.soLuongGhe = createCabinDto.soLuongGhe;
      newCabin.loaiGhe = createCabinDto.loaiGhe;
      newCabin.giaTienGhe = createCabinDto.giaTienGhe;
      
      await this.cabinRepository.save(newCabin);
      // console.log(this.productRepository)

      const findAndReturn = await this.cabinRepository.findOneOrFail({
        relations,
        where: { 
          maSoToa: newCabin.maSoToa,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    const findAll = await this.cabinRepository.find({
      relations,
    })
    
    return findAll;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} cabin`;
  // }

  // update(id: number, updateCabinDto: UpdateCabinDto) {
  //   return `This action updates a #${id} cabin`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} cabin`;
  // }
}
