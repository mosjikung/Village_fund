import { Test, TestingModule } from '@nestjs/testing';
import { RunAppFromNosService } from './run_app_from_nos.service';

describe('RunAppFromNosService', () => {
  let service: RunAppFromNosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RunAppFromNosService],
    }).compile();

    service = module.get<RunAppFromNosService>(RunAppFromNosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
