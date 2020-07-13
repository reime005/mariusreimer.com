#!/bin/sh

lastLine=$(cat ./node_modules/react-native-web/dist/index.js | tail -n1)

if [ "$lastLine" != "export const ViewPropTypes = { style: null };" ]; then
  echo "\n\nexport const ViewPropTypes = { style: null };" >> ./node_modules/react-native-web/dist/index.js
fi

yarn workspace mobile postinstall

npx jetify
