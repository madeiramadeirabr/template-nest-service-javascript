# Build dist
FROM node:20-alpine AS development

WORKDIR /usr/src/app

RUN apk add --no-cache python3 gcc g++ make

COPY package*.json ./

RUN npm install
RUN rm -rf dist

COPY . .

RUN npm run build
RUN rm -rf node_modules

# start back
FROM node:20-alpine AS production

ARG ENVIRONMENT_NAME=docker
ENV ENVIRONMENT_NAME=${ENVIRONMENT_NAME}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g husky

RUN npm ci --omit=dev

COPY --from=development /usr/src/app/dist ./dist
COPY --from=development /usr/src/app/.env ./
COPY --from=development /usr/src/app/newrelic.js ./

CMD npm run start:$ENVIRONMENT_NAME
