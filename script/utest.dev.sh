#!/usr/bin/env bash

npx jest -c ./jest/config.unit.js --forceExit --watchAll -t "${1}"
