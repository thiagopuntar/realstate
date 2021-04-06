import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { GetRealStatePriceDto } from './dtos/get-real-state-price.dto';
import { RealStatePrice } from './models/real-state-price';
import { RealStateService } from './real-state.service';

@Controller('real-state')
export class RealStateController {
  constructor(private service: RealStateService) {}

  @Get('/price')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  @ApiResponse({ type: RealStatePrice, status: 200 })
  async getRealStatePrice(@Query() filter: GetRealStatePriceDto) {
    const price = await this.service.calculateRealStatePrice(filter);
    return price;
  }
}
