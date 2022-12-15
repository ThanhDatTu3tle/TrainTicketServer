import { Test, TestingModule } from '@nestjs/testing';
import { CabinslotService } from './cabinslot.service';

describe('CabinslotService', () => {
  let service: CabinslotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CabinslotService],
    }).compile();

    service = module.get<CabinslotService>(CabinslotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
