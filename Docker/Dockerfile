FROM node:14-alpine

WORKDIR /app

RUN apk -U --no-cache add protobuf \
  protobuf-dev \
  git \
  gcc \
  g++ \
  make \
  python

COPY . .

RUN git clone https://github.com/googleapis/googleapis.git /googleapis

RUN npm install -g @nestjs/cli

RUN npm install && sh compile.proto.sh

EXPOSE 5000

CMD ["npm", "start"]
