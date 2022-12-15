import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { Thongtintau as Train } from 'output/entities/Thongtintau';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class TrainService {

  constructor(
    @InjectRepository(Train)
    private trainRepository: Repository<Train>,
  ) {}

  async create(createTrainDto: CreateTrainDto) {
    // create new station
    const newTrain = this.trainRepository.create();
    newTrain.maSoTau = createTrainDto.maSoTau;
    newTrain.tenTau = createTrainDto.tenTau;
    newTrain.soLuongToa = createTrainDto.soLuongToa;

    await this.trainRepository.save(newTrain);
  }

  async findAll() {
    return this.trainRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} train`;
  // }

  // update(id: number, updateTrainDto: UpdateTrainDto) {
  //   return `This action updates a #${id} train`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} train`;
  // }
}
