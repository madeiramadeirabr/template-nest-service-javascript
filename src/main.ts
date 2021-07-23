import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { grpcClientOptions, grpcPort } from './grpc-client.options';
import SwaggerSpec from './openapi/spec';

const logger = new Logger('Main');

export const APP_NAME = process.env.hasOwnProperty('APPLICATION_NAME')
  ? process.env.APPLICATION_NAME
  : 'nest-service-template';

export const APP_VERSION = process.env.hasOwnProperty('APPLICATION_VERSION')
  ? process.env.APPLICATION_VERSION
  : '1.0.0';

export const APP_ARCH_VERSION = process.env.hasOwnProperty(
  'APPLICATION_ARCH_VERSION',
)
  ? process.env.APPLICATION_ARCH_VERSION
  : 'v1';

const bootstrap = async () => {
  const restPort = 3001;
  process.env.REST_PORT = restPort.toString();
  process.env.GRPC_PORT = grpcPort.toString();
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  // swagger
  SwaggerSpec.generateDocs(app);
  await app.startAllMicroservicesAsync();
  await app.listen(restPort);
  logger.log(`🍻️ ${APP_NAME} API layer listening on port ${restPort}`);
  logger.log(`🍻️ ${APP_NAME} gRPC layer listening on port ${grpcPort}`);
};

bootstrap();
