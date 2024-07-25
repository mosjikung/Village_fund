import { Test, TestingModule } from '@nestjs/testing';
import { ComitteeFundsService } from './comittee_funds.service';

describe('ComitteeFundsService', () => {
  let service: ComitteeFundsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComitteeFundsService],
    }).compile();

    service = module.get<ComitteeFundsService>(ComitteeFundsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
