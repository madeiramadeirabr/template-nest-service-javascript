import { HealthGrpcController } from './health-grpc.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HealthService } from './health.service';

describe('HealthController', () => {
  let healthController: HealthGrpcController;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [HealthGrpcController],
      providers: [HealthService],
    }).compile();
    healthController = module.get<HealthGrpcController>(HealthGrpcController);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe('getStatus', () => {
    it('should return the correct application status object', () => {
      const expectedResponse = {
        alive: true,
        applicationName: configService.get<string>('APPLICATION_NAME'),
        restPort: 'unknown port',
        grpcPort: 'unknown port',
        env: process.env?.APPLICATION_ENV || 'unknown environment',
        message: 'Uncle Bob we love you',
      };

      expect(healthController.getStatus()).toStrictEqual(expectedResponse);
    });
  });
});
