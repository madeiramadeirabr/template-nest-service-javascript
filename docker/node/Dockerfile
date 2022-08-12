FROM node:12-alpine

RUN mkdir -p /app

WORKDIR /app

#  install app dependencies
COPY package.json ./
COPY package-lock.json ./

# python and g++ are mandatory due to Shards-Dashboard
RUN apk --no-cache --virtual build-dependencies add \
    python \
    musl-dev \
    make \
    g++ \
    && apk del build-dependencies

# add app
COPY . ./

RUN npm install

EXPOSE 3001
EXPOSE 5000

CMD ["npm", "run", "start:dev"]
