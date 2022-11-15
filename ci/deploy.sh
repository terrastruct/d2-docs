#!/bin/bash
set -eu

if [ -z ${D2_DOCS_CLOUDFRONT_ID} ]; then
  echo "missing env var D2_DOCS_CLOUDFRONT_ID"
  exit 1
fi

if [ -z ${D2_DOCS_S3_BUCKET} ]; then
  echo "missing env var D2_DOCS_S3_BUCKET"
  exit 1
fi

npm run prod
aws sts get-caller-identity
aws s3 sync ./build ${D2_DOCS_S3_BUCKET} --delete --acl public-read
aws cloudfront create-invalidation --distribution-id ${D2_DOCS_CLOUDFRONT_ID} --paths "/*"
