import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class GetRealStatePriceDto {
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

  private _zipCode: string;

  get zipCode() {
    return this._zipCode;
  }

  set zipCode(zipCode) {
    this._zipCode = zipCode.replace(/\D+/gi, '');
  }
}
