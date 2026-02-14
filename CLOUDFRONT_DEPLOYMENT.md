# Deploying Ionova to AWS CloudFront

This guide explains how to deploy the Ionova Astro website to AWS CloudFront with S3 as the origin.

## Prerequisites

1. **AWS Account**: You need an active AWS account
2. **AWS CLI**: Install and configure the AWS CLI
   ```bash
   # Install AWS CLI (macOS)
   brew install awscli
   
   # Configure AWS credentials
   aws configure
   ```
   
3. **Node.js and npm**: Required for building the project
4. **Permissions**: Your AWS user needs permissions for:
   - CloudFormation
   - S3
   - CloudFront
   - IAM (for creating service roles)

## Architecture Overview

The deployment consists of:
- **S3 Bucket**: Stores the static website files
- **CloudFront Distribution**: CDN for fast global delivery
- **Origin Access Control (OAC)**: Secure access from CloudFront to S3
- **Response Headers Policy**: Security headers (HSTS, CSP, etc.)
- **Cache Policy**: Optimized caching for static assets
- **Logging Bucket**: Stores CloudFront access logs

## Deployment Methods

### Method 1: Full Deployment (Recommended for First Time)

This creates all AWS infrastructure and deploys your site:

```bash
# Deploy to production
./deploy-cloudfront.sh production

# Deploy to staging
./deploy-cloudfront.sh staging

# Deploy to development
./deploy-cloudfront.sh development
```

**What it does:**
1. Builds your Astro project (`npm run build`)
2. Creates/updates CloudFormation stack with:
   - S3 buckets (content + logs)
   - CloudFront distribution
   - Security policies
3. Syncs built files to S3
4. Invalidates CloudFront cache

**First deployment takes**: ~15-20 minutes (CloudFront distribution creation)

### Method 2: Quick Deployment

For subsequent deployments when infrastructure is already set up:

```bash
# Quick deploy to production
./deploy-quick.sh production

# Quick deploy to staging
./deploy-quick.sh staging
```

**What it does:**
1. Builds your project
2. Syncs files to existing S3 bucket
3. Invalidates CloudFront cache

**Deployment time**: ~2-5 minutes

### Method 3: Manual Deployment

If you prefer manual control:

```bash
# 1. Build the project
npm run build

# 2. Create/update CloudFormation stack
aws cloudformation deploy \
  --stack-name ionova-production \
  --template-file cloudformation-cloudfront.yml \
  --parameter-overrides Environment=production \
  --region us-east-1

# 3. Get bucket name
BUCKET_NAME=$(aws cloudformation describe-stacks \
  --stack-name ionova-production \
  --query 'Stacks[0].Outputs[?OutputKey==`BucketName`].OutputValue' \
  --output text)

# 4. Sync files
aws s3 sync dist/ "s3://${BUCKET_NAME}/" --delete

# 5. Invalidate cache
DISTRIBUTION_ID=$(aws cloudformation describe-stacks \
  --stack-name ionova-production \
  --query 'Stacks[0].Outputs[?OutputKey==`DistributionId`].OutputValue' \
  --output text)

aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths "/*"
```

## Custom Domain Setup

To use a custom domain (e.g., `www.ionova.com`):

### 1. Request SSL Certificate

```bash
# Certificate must be in us-east-1 for CloudFront
aws acm request-certificate \
  --domain-name www.ionova.com \
  --validation-method DNS \
  --region us-east-1
```

### 2. Validate Certificate

Follow AWS console instructions to add DNS validation records to your domain.

### 3. Deploy with Custom Domain

```bash
# Update CloudFormation stack with custom domain
aws cloudformation update-stack \
  --stack-name ionova-production \
  --template-body file://cloudformation-cloudfront.yml \
  --parameters \
    ParameterKey=Environment,ParameterValue=production \
    ParameterKey=DomainName,ParameterValue=www.ionova.com \
    ParameterKey=ACMCertificateArn,ParameterValue=arn:aws:acm:us-east-1:ACCOUNT:certificate/CERT_ID \
  --region us-east-1
```

### 4. Update DNS

Point your domain to the CloudFront distribution:
- Create a CNAME record: `www.ionova.com` → `d1234567890.cloudfront.net`
- Or use Route53 with an A record (ALIAS)

## Environment Variables

Configure these in your environment or CI/CD:

```bash
# AWS Region (default: us-east-1)
export AWS_REGION=us-east-1

# AWS Profile (if using named profiles)
export AWS_PROFILE=ionova-deployer
```

## Caching Strategy

The deployment uses a smart caching strategy:

- **Static Assets** (JS, CSS, images): `max-age=31536000` (1 year) with immutable flag
- **HTML & JSON files**: `max-age=0, must-revalidate` (always check for updates)
- **CloudFront TTL**: 24 hours default, up to 1 year max

## Security Features

The deployment includes comprehensive security headers:

- **HSTS**: Enforces HTTPS with 1-year max-age
- **Content-Type-Options**: Prevents MIME sniffing
- **Frame-Options**: Prevents clickjacking (SAMEORIGIN)
- **XSS-Protection**: Enables browser XSS filtering
- **Referrer-Policy**: Limits referrer information
- **Permissions-Policy**: Restricts browser features
- **CORS Policies**: Cross-origin isolation

## Monitoring and Logs

### CloudFront Logs

Logs are stored in: `s3://ionova-{environment}-logs-{account-id}/cloudfront-logs/`

To analyze logs:
```bash
# Download recent logs
aws s3 sync s3://ionova-production-logs-123456789012/cloudfront-logs/ ./logs/

# View logs
gunzip -c logs/*.gz | less
```

### CloudWatch Metrics

View metrics in AWS Console:
- CloudFront → Reports & Analytics
- Metrics: Requests, Data Transfer, Error Rate, Cache Hit Rate

## Rollback

To rollback to a previous version:

```bash
./rollback.sh production
```

**Note**: S3 versioning is enabled, allowing rollback to previous file versions.

## Cost Estimation

Approximate monthly costs for moderate traffic:

- **CloudFront**: $0.085/GB (first 10TB) + $0.0075 per 10,000 requests
- **S3 Storage**: $0.023/GB
- **S3 Requests**: $0.005 per 1,000 PUT + $0.0004 per 1,000 GET
- **Data Transfer**: Included with CloudFront

**Example**: 100GB traffic, 1M requests ≈ $10-15/month

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf dist node_modules bun.lockb
npm install
npm run build
```

### Deployment Fails

```bash
# Check CloudFormation stack status
aws cloudformation describe-stacks \
  --stack-name ionova-production \
  --query 'Stacks[0].StackStatus'

# View stack events
aws cloudformation describe-stack-events \
  --stack-name ionova-production \
  --max-items 10
```

### CloudFront Not Updating

```bash
# Check invalidation status
aws cloudfront get-invalidation \
  --distribution-id E1234567890ABC \
  --id I1234567890ABC

# Create manual invalidation
aws cloudfront create-invalidation \
  --distribution-id E1234567890ABC \
  --paths "/*"
```

### 403 Errors

- Verify S3 bucket policy allows CloudFront access
- Check OAC configuration
- Ensure files exist in S3

### 404 Errors

- Verify `404.html` exists in `dist/`
- Check CustomErrorResponses in CloudFormation template
- Test file paths in S3

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Deploy to CloudFront

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      
      - name: Deploy to CloudFront
        run: ./deploy-cloudfront.sh production
```

## Best Practices

1. **Use Staging**: Test in staging before production
2. **Monitor Costs**: Set up AWS Budgets alerts
3. **Review Logs**: Regularly check CloudFront logs
4. **Cache Invalidations**: Minimize invalidations (they cost money after 1,000/month)
5. **Security**: Regularly update security headers
6. **Backups**: S3 versioning is enabled, but consider cross-region replication for critical data

## Cleanup

To delete all resources:

```bash
# Delete CloudFormation stack
aws cloudformation delete-stack --stack-name ionova-production

# Manually empty and delete buckets if needed
aws s3 rm s3://ionova-production-123456789012 --recursive
aws s3 rb s3://ionova-production-123456789012

aws s3 rm s3://ionova-production-logs-123456789012 --recursive
aws s3 rb s3://ionova-production-logs-123456789012
```

## Support

For issues or questions:
1. Check AWS CloudFormation events for detailed error messages
2. Review CloudFront distribution settings in AWS Console
3. Verify S3 bucket permissions and content
4. Check AWS Service Health Dashboard for any outages

## Additional Resources

- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFormation Best Practices](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html)
