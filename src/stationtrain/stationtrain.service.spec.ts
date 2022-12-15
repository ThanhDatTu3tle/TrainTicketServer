import { Test, TestingModule } from '@nestjs/testing';
import { StationtrainService } from './stationtrain.service';

describe('StationtrainService', () => {
  let service: StationtrainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StationtrainService],
    }).compile();

    service = module.get<StationtrainService>(StationtrainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
