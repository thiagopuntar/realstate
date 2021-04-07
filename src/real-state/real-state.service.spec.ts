import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { GetRealStatePriceDto } from './dtos/get-real-state-price.dto';
import { RealStateService } from './real-state.service';
import axios from 'axios';

describe('RealStateService', () => {
  let service: RealStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealStateService],
      imports: [HttpModule],
    }).compile();

    service = module.get<RealStateService>(RealStateService);
  });

  describe('calculateRealStatePrice', () => {
    it('should return a number', async () => {
      service.getUnitPrice = jest.fn().mockResolvedValue(10);

      const filter = new GetRealStatePriceDto(2);
      const { price: result } = await service.calculateRealStatePrice(filter);
      expect(result).toBe(20);
    });
  });

  describe('getUnitPrice', () => {
    it('should return a number', async () => {
      jest.mock('axios');
      axios.get = jest.fn().mockResolvedValue({ data: { value: 10 } });

      const result = await service.getUnitPrice();
      expect(result).toBe(10);
    });
  });
});
