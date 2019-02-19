#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )";

docker stop $(docker ps -aq) > /dev/null
docker-compose -f ${DIR}/../infra/integration-test/composition.yml up --build --abort-on-container-exit
