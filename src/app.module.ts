import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HealthModule, ConfigModule.forRoot()],
})
export class AppModule {}
