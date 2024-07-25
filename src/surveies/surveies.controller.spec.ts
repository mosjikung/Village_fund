import { Test, TestingModule } from '@nestjs/testing';
import { SurveiesController } from './surveies.controller';
import { SurveiesService } from './surveies.service';

describe('SurveiesController', () => {
  let controller: SurveiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveiesController],
      providers: [SurveiesService],
    }).compile();

    controller = module.get<SurveiesController>(SurveiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
