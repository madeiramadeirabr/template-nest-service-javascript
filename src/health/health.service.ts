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
    health.host = process.env?.HOST || 'unknown host';
    health.alive = alive;
    health.applicationName = this.configService.get<string>('APPLICATION_NAME');
    health.host = process.env?.HOST || 'unknown host';
    health.port = process.env?.PORT || 'unknown port';
    health.env = process.env?.APPLICATION_ENV || 'unknown environment';
    health.message = message;
    return health;
  }
}
