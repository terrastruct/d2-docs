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

if [ -z ${D2_DOCS_ALGOLIA_CRAWLER_API_KEY} ]; then
  echo "missing env var D2_DOCS_ALGOLIA_CRAWLER_API_KEY"
  exit 1
fi

npm run prod
aws sts get-caller-identity
aws s3 sync ./build ${D2_DOCS_S3_BUCKET} --delete --acl public-read
aws cloudfront create-invalidation --distribution-id ${D2_DOCS_CLOUDFRONT_ID} --paths "/*"

curl -H "Content-Type: application/json" \
  -X POST \
  --user dd0bd3fe-db42-4673-89ae-e7e70dfae16b:${D2_DOCS_ALGOLIA_CRAWLER_API_KEY} \
  "https://crawler.algolia.com/api/1/crawlers/2d841c67-ab75-4fb1-9114-f8844363d74c/reindex"

