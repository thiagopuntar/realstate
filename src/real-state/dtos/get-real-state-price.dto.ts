import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class GetRealStatePriceDto {
  @Min(10)
  @Max(10000)
  @IsNumber()
  @IsNotEmpty()
  public squareMeters: number;

  private _zipCode: string;

  get zipCode() {
    return this._zipCode;
  }

  set zipCode(zipCode) {
    this._zipCode = zipCode.replace(/\D+/gi, '');
  }
}
