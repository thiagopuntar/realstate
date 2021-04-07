import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RealStateService } from '../src/real-state/real-state.service';
import { RealStatePrice } from '../src/real-state/models/real-state-price';
import { RealStateModule } from '../src/real-state/real-state.module';

describe('RealStateController (e2e)', () => {
  let app: INestApplication;
  const mockService = {
    calculateRealStatePrice: () => new RealStatePrice(1),
  };

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RealStateModule],
    })
      .overrideProvider(RealStateService)
      .useValue(mockService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/ GET', () => {
    it('should return 400 if squareMeters less than 10', () => {
      return request(app.getHttpServer())
        .get('/real-state/price?squareMeters=1')
        .expect(400);
    });

    it('should return 400 if squareMeters more than 10000', () => {
      return request(app.getHttpServer())
        .get('/real-state/price?squareMeters=10001')
        .expect(400);
    });

    it('should return 200 if ok', () => {
      return request(app.getHttpServer())
        .get('/real-state/price?squareMeters=11')
        .expect(200);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
