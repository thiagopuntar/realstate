import { Test, TestingModule } from '@nestjs/testing';
import { RealStateService } from './real-state.service';

describe('RealStateService', () => {
  let service: RealStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealStateService],
    }).compile();

    service = module.get<RealStateService>(RealStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
