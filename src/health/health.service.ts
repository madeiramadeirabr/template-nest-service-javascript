import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Health } from './health';

@Injectable()
export class HealthService {
  constructor(private configService: ConfigService) {}

  getStatus(): Health {
    return this.buildHealth('Uncle Bob we love you', true);
  }

  private buildHealth(message: string, alive: boolean) {
    const health = new Health();
    health.alive = alive;
    health.applicationName = this.configService.get<string>('APPLICATION_NAME');
    health.grpcPort = process.env?.GRPC_PORT || 'unknown port';
    health.restPort = process.env?.REST_PORT || 'unknown port';
    health.env = process.env?.APPLICATION_ENV || 'unknown environment';
    health.message = message;
    return health;
  }
}
