import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { StatusInterface } from './interfaces/status.interface';

@Controller('health')
export class HealthController {
  @GrpcMethod('HealthService')
  getStatus(): StatusInterface {
    return {
      alive: true,
    };
  }
}
