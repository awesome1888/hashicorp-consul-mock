# Module name

## Installation

## Usage

~~~~
version: '3'

services:

  backend:
    image: backend:dev
    build:
      context: ../../backend/
      dockerfile: docker/development.dockerfile
    expose:
      - 3010
    ports:
      - 3010:3010
    depends_on:
      - db
      - cache
      - consul
    volumes:
      - ../../backend/:/app/
    environment:
      - NODE_ENV=development
      - CONSUL_URL=http://consul:8500/ui/dc1/kv/
      - CONSUL_PREFIX=dev/main/backend

  consul:
    image: awesome1888/hashicorp-consul-mock
    expose:
      - 8500
    ports:
      - 8500:8500
    environment:
      CLUSTER_NAME: dc1
      'dev/main/backend/database/url': postgres://root:123@db:5432/db
      'dev/main/backend/cache/url': redis://cache:6379
      'dev/main/backend/network/hostname': 0.0.0.0
      'dev/main/backend/network/port': 3010
~~~~

## Build

~~~~
npm install;
npm run dev;
~~~~
