#!/bin/bash
# IndexNow - Notify Bing (and other engines) of all site URLs after deploy
# Usage: ./scripts/indexnow.sh
# Reads URLs from the live sitemap and submits them to IndexNow API.

set -euo pipefail

SITE="https://ionova.ai"
KEY="9b529d484b3f4c6e8fa5738595469ee7"
API_ENDPOINT="https://api.indexnow.org/IndexNow"

echo "Fetching sitemap index from ${SITE}/sitemap-index.xml ..."

# Get all sitemap URLs from the sitemap index
SITEMAP_URLS=$(curl -s "${SITE}/sitemap-index.xml" | grep -oP '(?<=<loc>)[^<]+')

ALL_URLS=""

for sitemap_url in $SITEMAP_URLS; do
  echo "Fetching ${sitemap_url} ..."
  URLS=$(curl -s "${sitemap_url}" | grep -oP '(?<=<loc>)[^<]+')
  ALL_URLS="${ALL_URLS}${URLS}"$'\n'
done

# Build JSON array of URLs
URL_JSON=$(echo "$ALL_URLS" | sed '/^$/d' | sort -u | awk '{printf "    \"%s\",\n", $0}' | sed '$ s/,$//')

URL_COUNT=$(echo "$ALL_URLS" | sed '/^$/d' | sort -u | wc -l | tr -d ' ')
echo ""
echo "Submitting ${URL_COUNT} URLs to IndexNow ..."
echo ""

PAYLOAD=$(cat <<EOF
{
  "host": "ionova.ai",
  "key": "${KEY}",
  "keyLocation": "${SITE}/${KEY}.txt",
  "urlList": [
${URL_JSON}
  ]
}
EOF
)

RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "${API_ENDPOINT}" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "${PAYLOAD}")

if [ "$RESPONSE" = "200" ]; then
  echo "IndexNow: Successfully submitted ${URL_COUNT} URLs (HTTP ${RESPONSE})"
elif [ "$RESPONSE" = "202" ]; then
  echo "IndexNow: URLs accepted for processing (HTTP ${RESPONSE})"
else
  echo "IndexNow: Unexpected response (HTTP ${RESPONSE})"
  echo "Payload sent:"
  echo "${PAYLOAD}"
  exit 1
fi
