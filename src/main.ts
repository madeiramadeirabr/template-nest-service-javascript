import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Logger } from '@nestjs/common';

const port = '5000';
const host = 'localhost';
const url = host + ':' + port;
process.env.HOST = host;
process.env.PORT = port;
process.env.URL = url;
const logger = new Logger('Main');

const bootstrap = async () => {
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
    logger.log('🍻 Core APIs Nest Service Template listening on ' + url),
  );
};

bootstrap();
