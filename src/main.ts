import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');
const url = 'localhost:5000';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'health',
        protoPath: join(__dirname, 'health/health.proto'),
      },
    },
  );
  await app.listen(() =>
    logger.log('Nest Service Template Listening on ' + url),
  );
}
bootstrap();
