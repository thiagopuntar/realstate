import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class GetRealStatePriceDto {
  constructor(squareMeters) {
    this.squareMeters = squareMeters;
  }

  @Min(10)
  @Max(10000)
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description:
      'Quantidade de metros quadrados do imóvel. Valor entre 10 e 10000',
  })
  public squareMeters: number;
}
