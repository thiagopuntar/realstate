import { ApiProperty } from '@nestjs/swagger';

export class RealStatePrice {
  @ApiProperty({ type: Number })
  public price: number;

  constructor(price: number) {
    this.price = price;
  }
}
