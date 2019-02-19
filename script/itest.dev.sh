#!/usr/bin/env bash

npx jest -c ./jest/config.integration.js --runInBand --forceExit --watchAll -t "${1}"
