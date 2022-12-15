import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStationtrainDto } from './dto/create-stationtrain.dto';
import { UpdateStationtrainDto } from './dto/update-stationtrain.dto';
import { StationTrainRelations as relations } from 'src/relations/relations';
import { NhagaTau as Stationtrain } from 'output/entities/NhagaTau';
import { Nhaga as Station } from 'output/entities/Nhaga';
import { Thongtintau as Train } from 'output/entities/Thongtintau';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class StationtrainService {

  constructor(
    @InjectRepository(Stationtrain)
    private stationtrainRepository: Repository<Stationtrain>,

    @InjectRepository(Station)
    private stationRepository: Repository<Station>,

    @InjectRepository(Train)
    private trainRepository: Repository<Train>
  ) {}

  async create(createStationtrainDto: CreateStationtrainDto) {
    try {
      // Foreign key Nhaga: station
      const stationBody = createStationtrainDto.maGa;
      const stations = await this.stationRepository.findOneByOrFail({
        maGa: stationBody
      });

      // Foreign key Thongtintau: train
      const trainBody = createStationtrainDto.maSoTau;
      const trains = await this.trainRepository.findOneByOrFail({
        maSoTau: trainBody
      });

      // create new order
      const newStationTrain = this.stationtrainRepository.create();
      newStationTrain.maGa2 = stations;
      newStationTrain.maSoTau2 = trains;
      newStationTrain.trangThai = createStationtrainDto.trangThai;

      await this.stationtrainRepository.save(newStationTrain);
      // console.log(this.productRepository)

      const findAndReturn = await this.stationtrainRepository.findOneOrFail({
        relations,
        where: { 
          maGa: newStationTrain.maGa,
          maSoTau: newStationTrain.maSoTau,
        },
      });
      return findAndReturn;
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    const findAll = await this.stationtrainRepository.find({
      relations,
    })
    
    return findAll;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} stationtrain`;
  // }

  // update(id: number, updateStationtrainDto: UpdateStationtrainDto) {
  //   return `This action updates a #${id} stationtrain`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} stationtrain`;
  // }
}
