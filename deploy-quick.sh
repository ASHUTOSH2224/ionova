#!/bin/bash

# Quick deployment script - only syncs files and invalidates cache
# Use this for quick updates after the initial infrastructure is set up

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

ENVIRONMENT=${1:-production}
STACK_NAME="ionova-${ENVIRONMENT}"
REGION=${AWS_REGION:-us-east-1}

echo -e "${BLUE}Quick Deploy to CloudFront${NC}"
echo ""

echo -e "${YELLOW}Building application...${NC}"
npm run build

echo -e "${YELLOW}Getting stack outputs...${NC}"
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

echo -e "${YELLOW}Syncing to S3...${NC}"
aws s3 sync dist/ "s3://${BUCKET_NAME}/" \
    --region "${REGION}" \
    --delete \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "*.html" \
    --exclude "*.json"

aws s3 sync dist/ "s3://${BUCKET_NAME}/" \
    --region "${REGION}" \
    --cache-control "public, max-age=0, must-revalidate" \
    --content-type "text/html" \
    --exclude "*" \
    --include "*.html"

aws s3 sync dist/ "s3://${BUCKET_NAME}/" \
    --region "${REGION}" \
    --cache-control "public, max-age=0, must-revalidate" \
    --content-type "application/json" \
    --exclude "*" \
    --include "*.json"

echo -e "${YELLOW}Invalidating CloudFront cache...${NC}"
aws cloudfront create-invalidation \
    --distribution-id "${DISTRIBUTION_ID}" \
    --paths "/*" \
    --no-cli-pager

echo -e "${GREEN}✓ Quick deploy completed!${NC}"
