import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from '../health/health.module';
import { AppController } from './app.controller';

@Module({
  imports: [HealthModule, ConfigModule.forRoot()],
  controllers: [AppController],
})
export class AppModule {}
