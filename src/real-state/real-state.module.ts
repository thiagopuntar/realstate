import { HttpModule, Module } from '@nestjs/common';
import { RealStateController } from './real-state.controller';
import { RealStateService } from './real-state.service';

@Module({
  imports: [HttpModule],
  controllers: [RealStateController],
  providers: [RealStateService],
})
export class RealStateModule {}
