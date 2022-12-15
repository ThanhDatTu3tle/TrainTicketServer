import { Test, TestingModule } from '@nestjs/testing';
import { CabinslotController } from './cabinslot.controller';
import { CabinslotService } from './cabinslot.service';

describe('CabinslotController', () => {
  let controller: CabinslotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CabinslotController],
      providers: [CabinslotService],
    }).compile();

    controller = module.get<CabinslotController>(CabinslotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
