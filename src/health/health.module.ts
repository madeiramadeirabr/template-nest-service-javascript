import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { ConfigModule } from '@nestjs/config';
import { HealthService } from './health.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
