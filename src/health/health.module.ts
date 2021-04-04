import { Module } from '@nestjs/common';
import { HealthGrpcController } from './health-grpc.controller';
import { ConfigModule } from '@nestjs/config';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [HealthGrpcController, HealthController],
  providers: [HealthService],
})
export class HealthModule {}
