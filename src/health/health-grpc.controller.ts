import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { StatusInterface } from './interfaces/status.interface';
import { HealthService } from './health.service';

@Controller('health-grpc')
export class HealthGrpcController {
  constructor(private healthService: HealthService) {}

  @GrpcMethod('HealthService')
  getStatus(): StatusInterface {
    const health = this.healthService.getStatus();
    return health.getResource();
  }
}
