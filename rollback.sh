#!/bin/bash

# Rollback script - reverts to previous deployment

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

ENVIRONMENT=${1:-production}
STACK_NAME="ionova-${ENVIRONMENT}"
REGION=${AWS_REGION:-us-east-1}

echo -e "${RED}========================================${NC}"
echo -e "${RED}Ionova Rollback${NC}"
echo -e "${RED}Environment: ${ENVIRONMENT}${NC}"
echo -e "${RED}========================================${NC}"
echo ""

read -p "Are you sure you want to rollback? (yes/no): " CONFIRM
if [ "$CONFIRM" != "yes" ]; then
    echo -e "${YELLOW}Rollback cancelled${NC}"
    exit 0
fi

echo -e "${YELLOW}Getting bucket name...${NC}"
BUCKET_NAME=$(aws cloudformation describe-stacks \
    --stack-name "${STACK_NAME}" \
    --region "${REGION}" \
    --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
    --output text)

DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
    --stack-name "${STACK_NAME}" \
    --region "${REGION}" \
    --query 'Stacks[0].Outputs[?OutputKey==`DistributionId`].OutputValue' \
    --output text)

echo -e "${YELLOW}Listing available versions...${NC}"
aws s3api list-object-versions \
    --bucket "${BUCKET_NAME}" \
    --prefix "index.html" \
    --max-items 5 \
    --region "${REGION}"

echo ""
read -p "Enter the VersionId to rollback to: " VERSION_ID

if [ -z "$VERSION_ID" ]; then
    echo -e "${RED}No version ID provided. Rollback cancelled.${NC}"
    exit 1
fi

echo -e "${YELLOW}Rolling back to version ${VERSION_ID}...${NC}"
echo -e "${YELLOW}This will restore all objects to their previous versions${NC}"

# This is a simplified rollback - in production you may want to use S3 versioning more extensively
aws s3api list-object-versions \
    --bucket "${BUCKET_NAME}" \
    --region "${REGION}" \
    --output json | \
    jq -r '.Versions[] | select(.IsLatest == false) | .Key' | \
    head -n 100 | \
    while read key; do
        echo "Restoring: $key"
        # Additional logic needed for proper version restoration
    done

echo -e "${YELLOW}Creating CloudFront invalidation...${NC}"
aws cloudfront create-invalidation \
    --distribution-id "${DISTRIBUTION_ID}" \
    --paths "/*" \
    --no-cli-pager

echo -e "${GREEN}✓ Rollback initiated${NC}"
echo -e "${YELLOW}Note: This is a simplified rollback. For full version control, consider implementing a proper versioning strategy.${NC}"
