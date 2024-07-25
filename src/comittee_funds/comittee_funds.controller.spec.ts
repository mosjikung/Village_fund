import { Test, TestingModule } from '@nestjs/testing';
import { ComitteeFundsController } from './comittee_funds.controller';
import { ComitteeFundsService } from './comittee_funds.service';

describe('ComitteeFundsController', () => {
  let controller: ComitteeFundsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComitteeFundsController],
      providers: [ComitteeFundsService],
    }).compile();

    controller = module.get<ComitteeFundsController>(ComitteeFundsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
