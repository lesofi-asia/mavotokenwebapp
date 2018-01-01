#!/bin/bash

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')

aws cloudfront update-distribution --id E2SXKYU3N260EA --default-root-object $PACKAGE_VERSION/index.html  