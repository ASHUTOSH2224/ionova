# Ghost → GitHub Actions Auto-Deploy Setup

## Overview

When a post is published on Ghost, a webhook fires to a Cloudflare Worker, which triggers a GitHub Actions workflow to rebuild and deploy the site to AWS CloudFront/S3.

```
Ghost (publish) → Cloudflare Worker → GitHub Actions → Build → S3 + CloudFront
```

## Step 1: Add GitHub Repository Secrets

Go to **github.com/ASHUTOSH2224/ionova** → Settings → Secrets and variables → Actions → New repository secret.

Add these secrets:

| Secret | Value |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | Your AWS IAM access key |
| `AWS_SECRET_ACCESS_KEY` | Your AWS IAM secret key |
| `S3_BUCKET_NAME` | Your S3 bucket name (run `aws cloudformation describe-stacks --stack-name ionova-production --query 'Stacks[0].Outputs[?OutputKey==\`BucketName\`].OutputValue' --output text`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | Your CloudFront distribution ID (run `aws cloudformation describe-stacks --stack-name ionova-production --query 'Stacks[0].Outputs[?OutputKey==\`DistributionId\`].OutputValue' --output text`) |
| `PUBLIC_GHOST_API_URL` | `https://ionova-knowledge-hub.ghost.io` |
| `PUBLIC_GHOST_CONTENT_API_KEY` | Your Ghost Content API key |

## Step 2: Create a GitHub Personal Access Token (PAT)

1. Go to **github.com/settings/tokens?type=beta** (fine-grained tokens)
2. Create a new token:
   - Name: `ghost-webhook-deploy`
   - Repository access: Only select `ASHUTOSH2224/ionova`
   - Permissions → Repository → Contents: **Read and Write**
3. Copy the token — you'll need it for the Cloudflare Worker

## Step 3: Deploy the Cloudflare Worker

```bash
cd ghost-webhook-worker

# Install Wrangler CLI if not already installed
npm install -g wrangler

# Login to Cloudflare
npx wrangler login

# Deploy the worker
npx wrangler deploy

# Set the secrets
npx wrangler secret put WEBHOOK_SECRET
# Enter a strong random secret (e.g., generate with: openssl rand -hex 32)

npx wrangler secret put GITHUB_TOKEN
# Paste the GitHub PAT from Step 2
```

After deploying, note your worker URL: `https://ghost-webhook-relay.<your-subdomain>.workers.dev`

## Step 4: Configure Ghost Webhook

1. Go to **Ghost Admin** → Settings → Integrations
2. Click **Add custom integration**
3. Name: `GitHub Deploy`
4. Click **Add webhook**:
   - Event: **Post published**
   - Target URL: `https://ghost-webhook-relay.<your-subdomain>.workers.dev/webhook?secret=YOUR_WEBHOOK_SECRET`

Replace `YOUR_WEBHOOK_SECRET` with the secret you set in Step 3.

## Step 5: Test

1. Create a draft post in Ghost
2. Publish it
3. Check **github.com/ASHUTOSH2224/ionova/actions** — you should see a "Deploy to Production" workflow running
4. After ~2-3 minutes, verify your site is updated at ionova.ai

## Manual Trigger

You can also manually trigger a deploy from the GitHub Actions tab:

1. Go to **github.com/ASHUTOSH2224/ionova/actions**
2. Click "Deploy to Production" workflow
3. Click "Run workflow" → "Run workflow"

## Troubleshooting

**Workflow not triggering:**
- Check Ghost webhook delivery logs in Ghost Admin → Integrations
- Check Cloudflare Worker logs: `npx wrangler tail`
- Verify the GitHub PAT hasn't expired
- Verify the webhook secret matches between Ghost URL and Worker

**Build failing:**
- Check that all GitHub Secrets are set correctly
- Verify Ghost API credentials are valid
- Check the Actions log for specific error messages
