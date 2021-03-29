import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';
import { Health } from './health';
import { ConfigModule } from '@nestjs/config';

describe('HealthService', () => {
  let service: HealthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [HealthService],
    }).compile();

    service = module.get<HealthService>(HealthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getStatus', () => {
    it('should return the correct Health entity', () => {
      const expectedResult = new Health();
      expectedResult.host = process.env?.HOST || 'unknown host';
      expectedResult.alive = true;
      expectedResult.applicationName = process.env.APPLICATION_NAME;
      expectedResult.host = process.env?.HOST || 'unknown host';
      expectedResult.port = process.env?.PORT || 'unknown port';
      expectedResult.env =
        process.env?.APPLICATION_ENV || 'unknown environment';
      expectedResult.message = 'Uncle Bob we love you';
      const result = service.getStatus();
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
