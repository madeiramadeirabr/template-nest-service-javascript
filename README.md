# Core APIs NestJS Service Template

<p align="left">  
<img src="https://img.shields.io/badge/status-finished-green" alt="Status">    
</p> 

MadeiraMadeira boilerplate project to build scalable, testable and high performance Node.js microservices. 
 
## Stack

- [NestJS](https://github.com/nestjs/nest): a progressive Node.js + TypeScript framework based on dependency injection;
- [gRPC](https://grpc.io): a *Remote Procedure Call* framework that provides high performance communication between microservices.

## Features
- Husky Git hooks that automatically runs [ESLint](https://eslint.org) and [Prettier](https://prettier.io) before all commits;
- `ConfigService`: easily manage environment variables;
- `Health` module: a gRPC endpoint that displays relevant information about the application status and serves as example for creating other gRPC services with [protobufs](https://developers.google.com/protocol-buffers);
- Docker infrastructure with Docker Compose.

## Installation

```bash
$ cp example.env .env
$ npm install
```

## Running the app

```bash
# local development
$ npm run start

# local watch mode
$ npm run start:dev

# local production mode
$ npm run start:prod

# Docker environment
$ docker-compose up
```
Use some gRPC client (like [Kreya](https://kreya.app) or [Insomnia](https://insomnia.rest)) to hit 
`http://localhost:5000/health.HealthService.GetStatus`. If everything goes well, you should receive a JSON as response:
```json
{
  "alive": true,
  "applicationName": "Core APIs Nest Service Template",
  "host": "localhost",
  "port": "5000",
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