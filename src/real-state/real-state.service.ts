import { HttpService, Injectable, NotFoundException } from '@nestjs/common';
import { GetRealStatePriceDto } from './dtos/get-real-state-price.dto';
import { RealStatePrice } from './models/real-state-price';

@Injectable()
export class RealStateService {
  constructor(private httpService: HttpService) {}

  async calculateRealStatePrice(filter: GetRealStatePriceDto) {
    const unitPrice = await this.getUnitPrice();

    if (!unitPrice) {
      throw new NotFoundException('No unit price found for zipCode.');
    }

    const price = unitPrice * filter.squareMeters;
    return new RealStatePrice(price);
  }

  async getUnitPrice(): Promise<number> {
    const url = `${process.env.BASE_PRICE_URL}`;
    const response = await this.httpService.get(url).toPromise();
    const { value } = response.data;
    return value;
  }
}
