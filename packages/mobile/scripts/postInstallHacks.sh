#!/bin/sh

npx jetify

if [ $(uname -s) = 'Darwin' ]; then
  npx pod-install ios
else echo 'Skipping pod installation since we are not Mac OS'; fi
