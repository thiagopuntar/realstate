import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RealStateModule } from './real-state/real-state.module';

@Module({
  imports: [
    RealStateModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
