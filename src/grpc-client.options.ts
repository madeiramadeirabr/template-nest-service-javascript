import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GrpcOptions } from '@nestjs/microservices/interfaces/microservice-configuration.interface';

export const grpcPort = '5000';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:' + grpcPort,
    package: 'health',
    protoPath: join(__dirname, 'health/health.proto'),
  },
};
