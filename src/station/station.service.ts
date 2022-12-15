import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { Nhaga as Station } from '../../output/entities/Nhaga';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class StationService {

  constructor(
    @InjectRepository(Station)
    private stationRepository: Repository<Station>,
  ) {}

  async create(createStationDto: CreateStationDto) {

    // create new station
    const newStation = this.stationRepository.create();
    newStation.maGa = createStationDto.maGa;
    newStation.tenGa = createStationDto.tenGa;
    newStation.soLuongTau = createStationDto.soLuongTau;

    await this.stationRepository.save(newStation);
  }

  async findAll() {
    return this.stationRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} station`;
  // }

  // update(id: number, updateStationDto: UpdateStationDto) {
  //   return `This action updates a #${id} station`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} station`;
  // }
}
