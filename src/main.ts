import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { grpcClientOptions, grpcPort } from './grpc-client.options';
import { GeneralErrorFilter } from './common/filters/http-exception.filter';

const logger = new Logger('Main');

const bootstrap = async () => {
  const restPort = 3001;
  process.env.REST_PORT = restPort.toString();
  process.env.GRPC_PORT = grpcPort.toString();
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GeneralErrorFilter(logger));
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  await app.startAllMicroservicesAsync();
  await app.listen(restPort);
  logger.log(
    '🍻️ Core APIs Nest Service Template REST layer listening on port ' +
      restPort,
  );
  logger.log(
    '🍻️ Core APIs Nest Service Template gRPC layer listening on port ' +
      grpcPort,
  );
};

bootstrap();
