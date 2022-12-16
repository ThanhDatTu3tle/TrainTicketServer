import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTripDto } from './dto/create-trip.dto';
import { UpdateTripDto } from './dto/update-trip.dto';
import { TripRelations as relations } from 'src/relations/relations';
import { Chuyentau as Trip } from 'output/entities/Chuyentau';
import { Thongtintau as Train } from 'output/entities/Thongtintau';
import { Lichtrinh as Schedule } from 'output/entities/Lichtrinh';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class TripService {

  constructor(
    @InjectRepository(Trip)
    private tripRepository: Repository<Trip>,

    @InjectRepository(Train)
    private trainRepository: Repository<Train>,

    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>
  ) {}

  async create(createTripDto: CreateTripDto): Promise<Trip> {
    try {
      // Foreign key Thongtintau: train
      const trainBody = createTripDto.maSoTau;
      const trains = await this.trainRepository.findOneByOrFail({
        maSoTau: trainBody
      });

      // Foreign key Monan: product
      const scheduleBody = createTripDto.maLichTrinh;
      const schdules = await this.scheduleRepository.findOneByOrFail({
        maLichTrinh: scheduleBody
      });

      // create new order
      const newTrip = this.tripRepository.create();
      newTrip.maChuyenTau = createTripDto.maChuyenTau;
      newTrip.maSoTau = trains;
      newTrip.maLichTrinh = schdules;
      newTrip.tenTau = createTripDto.tenTau;
      
      await this.tripRepository.save(newTrip);
      // console.log(this.productRepository)

      const findAndReturn = await this.tripRepository.findOneOrFail({
        relations,
        where: { 
          maChuyenTau: newTrip.maChuyenTau,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    const findAll = await this.tripRepository.find({
      relations,
    })
    
    return findAll;
  }

  async findOne(maChuyenTau: string) {
    const findOne = await this.tripRepository.find({ 
      relations,
    })
    const trip = await this.tripRepository.find();

    return findOne;
  }

  async findSchedule(maLichTrinh: string) {
    const schedule = await this.tripRepository.find({ 
      relations,
    })
    const trip = await this.tripRepository.find();

    return schedule;
  }

  // update(id: number, updateTripDto: UpdateTripDto) {
  //   return `This action updates a #${id} trip`;
  // }

  async remove(maChuyenTau: string) {
    try {
      const findOne = await this.tripRepository.findOneOrFail({
        where: { maChuyenTau },
      });
      return await this.tripRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
