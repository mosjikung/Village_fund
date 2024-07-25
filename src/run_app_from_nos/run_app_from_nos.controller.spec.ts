import { Test, TestingModule } from '@nestjs/testing';
import { RunAppFromNosController } from './run_app_from_nos.controller';
import { RunAppFromNosService } from './run_app_from_nos.service';

describe('RunAppFromNosController', () => {
  let controller: RunAppFromNosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RunAppFromNosController],
      providers: [RunAppFromNosService],
    }).compile();

    controller = module.get<RunAppFromNosController>(RunAppFromNosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
