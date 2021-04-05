import { Test, TestingModule } from '@nestjs/testing';
import { RealStateController } from './real-state.controller';

describe('RealStateController', () => {
  let controller: RealStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealStateController],
    }).compile();

    controller = module.get<RealStateController>(RealStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
