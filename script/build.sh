#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
VERSION="${1:-latest}"

docker build -t awesome1888/hashicorp-consul-mock:$VERSION -f docker/production.dockerfile .;
docker push awesome1888/hashicorp-consul-mock:$VERSION
docker rmi awesome1888/hashicorp-consul-mock:$VERSION
