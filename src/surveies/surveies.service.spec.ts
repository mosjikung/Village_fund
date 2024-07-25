import { Test, TestingModule } from '@nestjs/testing';
import { SurveiesService } from './surveies.service';

describe('SurveiesService', () => {
  let service: SurveiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveiesService],
    }).compile();

    service = module.get<SurveiesService>(SurveiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
