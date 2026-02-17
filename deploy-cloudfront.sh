#!/bin/bash

# Ionova CloudFront Deployment Script
# This script builds and deploys the Ionova website to AWS CloudFront

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
ENVIRONMENT=${1:-production}
STACK_NAME="ionova-${ENVIRONMENT}"
REGION=${AWS_REGION:-us-east-1}

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}Ionova CloudFront Deployment${NC}"
echo -e "${BLUE}Environment: ${ENVIRONMENT}${NC}"
echo -e "${BLUE}Region: ${REGION}${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}Error: AWS CLI is not installed${NC}"
    echo "Please install AWS CLI: https://aws.amazon.com/cli/"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}Error: AWS credentials are not configured${NC}"
    echo "Please run: aws configure"
    exit 1
fi

echo -e "${YELLOW}Step 1: Building the application...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}Error: Build failed - dist directory not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build completed successfully${NC}"
echo ""

echo -e "${YELLOW}Step 2: Checking if CloudFormation stack exists...${NC}"
STACK_STATUS=$(aws cloudformation describe-stacks \
    --stack-name "${STACK_NAME}" \
    --region "${REGION}" \
    --query 'Stacks[0].StackStatus' \
    --output text 2>/dev/null || echo "DOES_NOT_EXIST")

if [ "$STACK_STATUS" = "DOES_NOT_EXIST" ]; then
    echo -e "${YELLOW}Stack does not exist. Creating new stack...${NC}"
    
    aws cloudformation create-stack \
        --stack-name "${STACK_NAME}" \
        --template-body file://cloudformation-cloudfront.yml \
        --parameters ParameterKey=Environment,ParameterValue="${ENVIRONMENT}" \
        --region "${REGION}" \
        --tags Key=Project,Value=Ionova Key=Environment,Value="${ENVIRONMENT}"
    
    echo -e "${YELLOW}Waiting for stack creation to complete...${NC}"
    aws cloudformation wait stack-create-complete \
        --stack-name "${STACK_NAME}" \
        --region "${REGION}"
    
    echo -e "${GREEN}✓ Stack created successfully${NC}"
else
    echo -e "${YELLOW}Stack exists with status: ${STACK_STATUS}${NC}"
    echo -e "${YELLOW}Detecting existing parameters...${NC}"
    
    EXISTING_DOMAIN=$(aws cloudformation describe-stacks \
        --stack-name "${STACK_NAME}" \
        --region "${REGION}" \
        --query 'Stacks[0].Parameters[?ParameterKey==`DomainName`].ParameterValue' \
        --output text || echo "")
        
    EXISTING_CERT=$(aws cloudformation describe-stacks \
        --stack-name "${STACK_NAME}" \
        --region "${REGION}" \
        --query 'Stacks[0].Parameters[?ParameterKey==`ACMCertificateArn`].ParameterValue' \
        --output text || echo "")

    # Normalize AWS CLI "None" or empty to empty string so existing domain/cert are preserved correctly
    [ -z "$EXISTING_DOMAIN" ] || [ "$EXISTING_DOMAIN" = "None" ] && EXISTING_DOMAIN=""
    [ -z "$EXISTING_CERT" ] || [ "$EXISTING_CERT" = "None" ] && EXISTING_CERT=""

    if [ -n "$EXISTING_DOMAIN" ]; then
        echo -e "${GREEN}✓ Detected existing domain: ${EXISTING_DOMAIN}${NC}"
    fi

    echo -e "${YELLOW}Updating stack...${NC}"
    
    UPDATE_OUTPUT=$(aws cloudformation update-stack \
        --stack-name "${STACK_NAME}" \
        --template-body file://cloudformation-cloudfront.yml \
        --parameters \
            ParameterKey=Environment,ParameterValue="${ENVIRONMENT}" \
            ParameterKey=DomainName,ParameterValue="${EXISTING_DOMAIN}" \
            ParameterKey=ACMCertificateArn,ParameterValue="${EXISTING_CERT}" \
        --region "${REGION}" 2>&1 || echo "NO_UPDATE")
    
    if echo "$UPDATE_OUTPUT" | grep -q "No updates are to be performed"; then
        echo -e "${YELLOW}No stack updates needed${NC}"
    else
        echo -e "${YELLOW}Waiting for stack update to complete...${NC}"
        aws cloudformation wait stack-update-complete \
            --stack-name "${STACK_NAME}" \
            --region "${REGION}"
        echo -e "${GREEN}✓ Stack updated successfully${NC}"
    fi
fi

echo ""

echo -e "${YELLOW}Step 3: Getting stack outputs...${NC}"
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

WEBSITE_URL=$(aws cloudformation describe-stacks \
    --stack-name "${STACK_NAME}" \
    --region "${REGION}" \
    --query 'Stacks[0].Outputs[?OutputKey==`WebsiteURL`].OutputValue' \
    --output text)

echo -e "${GREEN}✓ S3 Bucket: ${BUCKET_NAME}${NC}"
echo -e "${GREEN}✓ Distribution ID: ${DISTRIBUTION_ID}${NC}"
echo ""

echo -e "${YELLOW}Step 4: Uploading files to S3 (clean replace)...${NC}"

# Use low concurrency to reduce SSL EOF errors on flaky networks
aws configure set default.s3.max_concurrent_requests 2

# ── 4a. Wipe the bucket so no stale files remain ──
echo -e "${YELLOW}  Deleting all existing files from S3...${NC}"
aws s3 rm "s3://${BUCKET_NAME}/" --recursive --region "${REGION}"
echo -e "${GREEN}  ✓ S3 bucket cleared${NC}"

# ── 4b. Fast bulk upload with s3 sync (parallel, handles most files) ──
echo -e "${YELLOW}  Bulk uploading static assets...${NC}"
aws s3 sync dist/ "s3://${BUCKET_NAME}/" \
    --region "${REGION}" \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "*.html" \
    --exclude "*.json" \
    --exclude "*.xml" \
    --exclude "*.txt" || true

echo -e "${YELLOW}  Bulk uploading HTML files...${NC}"
aws s3 sync dist/ "s3://${BUCKET_NAME}/" \
    --region "${REGION}" \
    --cache-control "public, max-age=0, must-revalidate" \
    --content-type "text/html" \
    --exclude "*" \
    --include "*.html" || true

echo -e "${YELLOW}  Bulk uploading JSON files...${NC}"
aws s3 sync dist/ "s3://${BUCKET_NAME}/" \
    --region "${REGION}" \
    --cache-control "public, max-age=0, must-revalidate" \
    --content-type "application/json" \
    --exclude "*" \
    --include "*.json" || true

echo -e "${YELLOW}  Bulk uploading XML files...${NC}"
aws s3 sync dist/ "s3://${BUCKET_NAME}/" \
    --region "${REGION}" \
    --cache-control "public, max-age=3600, must-revalidate" \
    --content-type "application/xml" \
    --exclude "*" \
    --include "*.xml" || true

echo -e "${YELLOW}  Bulk uploading TXT files...${NC}"
aws s3 sync dist/ "s3://${BUCKET_NAME}/" \
    --region "${REGION}" \
    --cache-control "public, max-age=3600, must-revalidate" \
    --content-type "text/plain" \
    --exclude "*" \
    --include "*.txt" || true

echo -e "${GREEN}  ✓ Bulk upload phase complete${NC}"

# ── Helper: upload a single file with retries ──
upload_file() {
    local local_path="$1"
    local s3_key="$2"
    local cache_control="$3"
    local content_type="$4"
    local max_attempts=3
    local attempt=1

    while [ $attempt -le $max_attempts ]; do
        local cp_args=("${local_path}" "s3://${BUCKET_NAME}/${s3_key}" --region "${REGION}" --cache-control "${cache_control}")
        if [ -n "${content_type}" ]; then
            cp_args+=(--content-type "${content_type}")
        fi
        if aws s3 cp "${cp_args[@]}" > /dev/null 2>&1; then
            return 0
        fi
        echo -e "${YELLOW}      Retry ${attempt}/${max_attempts} for: ${s3_key}${NC}"
        attempt=$((attempt + 1))
        sleep $((attempt * 2))
    done
    return 1
}

# ── 4c. Verify + fix: compare sizes and re-upload any mismatches ──
echo -e "${YELLOW}  Verifying all files (size comparison)...${NC}"
FIXED_COUNT=0
FAILED_COUNT=0

while IFS= read -r local_file; do
    s3_key="${local_file#dist/}"
    local_size=$(wc -c < "dist/${s3_key}" | tr -d ' ')

    # Get S3 file size (0 if missing)
    s3_size=$(aws s3api head-object \
        --bucket "${BUCKET_NAME}" \
        --key "${s3_key}" \
        --region "${REGION}" \
        --query 'ContentLength' \
        --output text 2>/dev/null || echo "0")

    if [ "$local_size" != "$s3_size" ]; then
        echo -e "${YELLOW}    Size mismatch: ${s3_key} (local: ${local_size}, S3: ${s3_size})${NC}"

        # Determine correct metadata
        case "${s3_key}" in
            *.html) cache="public, max-age=0, must-revalidate";           ctype="text/html" ;;
            *.json) cache="public, max-age=0, must-revalidate";           ctype="application/json" ;;
            *.xml)  cache="public, max-age=3600, must-revalidate";        ctype="application/xml" ;;
            *.txt)  cache="public, max-age=3600, must-revalidate";        ctype="text/plain" ;;
            *)      cache="public, max-age=31536000, immutable";          ctype="" ;;
        esac

        if upload_file "dist/${s3_key}" "${s3_key}" "${cache}" "${ctype}"; then
            echo -e "${GREEN}    ✓ Fixed: ${s3_key}${NC}"
            FIXED_COUNT=$((FIXED_COUNT + 1))
        else
            echo -e "${RED}    ✗ FAILED after 3 retries: ${s3_key}${NC}"
            FAILED_COUNT=$((FAILED_COUNT + 1))
        fi
    fi
done < <(find dist -type f)

if [ $FIXED_COUNT -gt 0 ]; then
    echo -e "${GREEN}  ✓ Fixed ${FIXED_COUNT} file(s) that failed during bulk upload${NC}"
fi
if [ $FAILED_COUNT -gt 0 ]; then
    echo -e "${RED}✗ ERROR: ${FAILED_COUNT} file(s) could not be uploaded after all retries${NC}"
    exit 1
fi
echo -e "${GREEN}✓ All files uploaded and verified on S3${NC}"
echo ""

echo -e "${YELLOW}Step 5: Creating CloudFront invalidation...${NC}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id "${DISTRIBUTION_ID}" \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)

echo -e "${GREEN}✓ Invalidation created: ${INVALIDATION_ID}${NC}"
echo ""

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}Deployment completed successfully!${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""
echo -e "${BLUE}Website URL: ${WEBSITE_URL}${NC}"
echo ""
echo -e "${YELLOW}Note: CloudFront invalidation may take 5-10 minutes to complete${NC}"
echo -e "${YELLOW}You can check the status with:${NC}"
echo -e "aws cloudfront get-invalidation --distribution-id ${DISTRIBUTION_ID} --id ${INVALIDATION_ID}"
