import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Lichtrinh as Schedule } from 'output/entities/Lichtrinh';
import { Repository, getManager } from 'typeorm';

@Injectable()
export class ScheduleService {

  constructor(
    @InjectRepository(Schedule)
    private scheduleRepository: Repository<Schedule>,
  ) {}

  async create(createScheduleDto: CreateScheduleDto) {
    // create new station
    const newSchedule = this.scheduleRepository.create();
    newSchedule.maLichTrinh = createScheduleDto.maLichTrinh;
    newSchedule.maGaDi = createScheduleDto.maGaDi;
    newSchedule.maGaDen = createScheduleDto.maGaDen;
    newSchedule.tenGaDi = createScheduleDto.tenGaDi;
    newSchedule.tenGaDen = createScheduleDto.tenGaDen;
    newSchedule.gioKhoiHanh = createScheduleDto.gioKhoiHanh;
    newSchedule.gioKetThuc = createScheduleDto.gioKetThuc;
    newSchedule.ngayKhoiHanh = createScheduleDto.ngayKhoiHanh;
    newSchedule.ngayKetThuc = createScheduleDto.ngayKetThuc;

    await this.scheduleRepository.save(newSchedule);
  }

  async findAll() {
    return this.scheduleRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} schedule`;
  // }

  async update(maLichTrinh: string, updateScheduleDto: UpdateScheduleDto) {
    try {
      const updateSchedule = await this.scheduleRepository.findOneByOrFail({ maLichTrinh });

      return await this.scheduleRepository.save({
        ...updateSchedule,
      });
    } catch (err) {
      throw err;
    }
  }

  async remove(maLichTrinh: string) {
    try {
      const findOne = await this.scheduleRepository.findOneOrFail({
        where: { maLichTrinh },
      });
      return await this.scheduleRepository.remove(findOne);
    } catch (err) {
      throw err;
    }
  }
}
