# Core APIs NestJS Service Template

MadeiraMadeira boilerplate project to build scalable, testable and high performance Node.js microservices. 
 
## Stack

- [NestJS](https://github.com/nestjs/nest): a progressive Node.js + TypeScript framework based on dependency injection;
- [gRPC](https://grpc.io): a Remote Procedure Call framework that provides high performance communication between microservices.

## Features
- REST and gRPC layers; 
- Husky Git hooks that automatically runs [ESLint](https://eslint.org) and [Prettier](https://prettier.io) before all commits;
- `ConfigService`: easily manage environment variables;
- `Health` module: a gRPC and a REST endpoint that displays relevant information about the application status;
- Docker infrastructure with Docker Compose.

## Installation for local development with Docker

### Installation
```bash
$ cp example.env .env
$ npm install --target=12.0.0 --target_platform=linux --target_arch=x64 --target_libc=musl
```
Notice: these flags are needed to build the gRPC package to the correct container architecture. This issue
will be fixed in the next major release of NestJS (https://github.com/nestjs/nest/pull/6349). 

### Running the app
```bash
$ docker-compose up
```

## Installation for local development
```bash
$ cp example.env .env
$ npm install
```
### Running the app

```bash
# local development
$ npm run start

# local watch mode
$ npm run start:dev

# local production mode
$ npm run start:prod
```

## Endpoints
* gRPC: use a gRPC client (like [Kreya](https://kreya.app) or [Insomnia](https://insomnia.rest)) to hit 
`http://localhost:5000/health.HealthService.GetStatus`
* REST: `http://localhost:3001/health`

### Response
```json
{
  "alive": true,
  "applicationName": "Core APIs Nest Service Template",
  "grpcPort": "5000",
  "restPort": "3001",
  "env": "development",
  "message": "Uncle Bob we love you"
}
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` 

## Getting started with boilerplate

Download and extract the project, then:
```bash
$ mv nest-service-template-production {your_project_name}
$ git init
$ git remote add origin https://github.com/{user}/{repo}.git
```

Hint: use `$ git remote -v` to verify new remote
