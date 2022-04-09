import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { StatusInterface } from './interfaces/status.interface';
import { ApiResponse } from '@nestjs/swagger';
import { Health } from './health';

@Controller('health')
export class HealthController {
  constructor(private healthService: HealthService) {}

  @Get()
  @ApiResponse({
    status: 201,
    description: 'Successful response',
    type: Health,
  })
  getStatus(): StatusInterface {
    const health = this.healthService.getStatus();
    return health.getResource();
  }
}
