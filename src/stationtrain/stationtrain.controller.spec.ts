import { Test, TestingModule } from '@nestjs/testing';
import { StationtrainController } from './stationtrain.controller';
import { StationtrainService } from './stationtrain.service';

describe('StationtrainController', () => {
  let controller: StationtrainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StationtrainController],
      providers: [StationtrainService],
    }).compile();

    controller = module.get<StationtrainController>(StationtrainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
