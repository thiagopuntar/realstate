import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GetRealStatePriceDto } from './dtos/get-real-state-price.dto';
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
  async getRealStatePrice(@Query() filter: GetRealStatePriceDto) {
    const price = await this.service.calculateRealStatePrice(filter);
    return price;
  }
}
