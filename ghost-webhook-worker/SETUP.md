# Ghost Webhook Setup

## Overview

This project now deploys in two stages:

```text
Ghost publish
  -> Cloudflare Worker webhook relay
  -> GitHub Actions "Deploy to Staging"
  -> verify staging
  -> GitHub Actions "Promote to Production" (manual)
```

Current endpoints:

- Staging: `https://d1ycysbz0o2min.cloudfront.net`
- Production: `https://ionova.ai`
- Cloudflare Worker: `https://ghost-webhook-relay.ionova-relay.workers.dev`

## Important Prerequisite

Ghost must support custom integrations and webhooks.

- Ghost `Starter` plan does not allow custom integrations/webhooks
- Ghost `Publisher` or higher is required for the webhook flow in this document

If Ghost is still on `Starter`, the GitHub and Cloudflare setup can remain in place, but Ghost will not let you create the webhook until the plan is upgraded.

## Step 1: Add GitHub Repository Secrets

Go to:

`https://github.com/ASHUTOSH2224/ionova/settings/secrets/actions`

Add these under `Repository secrets`:

### Shared

- `AWS_ACCESS_KEY_ID`
  Value: your AWS IAM access key
- `AWS_SECRET_ACCESS_KEY`
  Value: your AWS IAM secret key
- `PUBLIC_GHOST_API_URL`
  Value: `https://ionova-knowledge-hub.ghost.io`
- `PUBLIC_GHOST_CONTENT_API_KEY`
  Value: your Ghost Content API key

### Staging

- `STAGING_S3_BUCKET_NAME`
  Value: `ionova-staging-211125439175`
- `STAGING_CLOUDFRONT_DISTRIBUTION_ID`
  Value: `E2OFRW4T7XWHDN`

### Production

- `S3_BUCKET_NAME`
  Value: `ionova-production-211125439175`
- `CLOUDFRONT_DISTRIBUTION_ID`
  Value: `E17UFDHGQE8EZ4`

## Step 2: Confirm GitHub Actions Behavior

These workflows are already configured:

- `.github/workflows/deploy.yml`
  Trigger: push to `main`, manual run, or Ghost webhook dispatch
  Target: staging
- `.github/workflows/deploy-production.yml`
  Trigger: manual only
  Target: production

Expected behavior:

- code push or Ghost publish -> deploys to staging
- production deploy -> manual approval via GitHub Actions

## Step 3: Create a GitHub Token for the Worker

Create a fine-grained personal access token:

1. Open `https://github.com/settings/personal-access-tokens/new`
2. Name: `ghost-webhook-deploy`
3. Repository access: `Only select repositories`
4. Select repository: `ASHUTOSH2224/ionova`
5. Repository permission: `Contents -> Read and write`
6. Generate the token

Use this token only as the Cloudflare Worker secret `GITHUB_TOKEN`.

## Step 4: Deploy the Cloudflare Worker

From this directory:

```bash
cd /Users/ashutosh/TailoredAI/IONOVAA/ionova-1/ghost-webhook-worker
```

If needed:

```bash
npx wrangler login
```

Deploy the worker:

```bash
npx wrangler deploy
```

This project is configured to deploy:

- Worker name: `ghost-webhook-relay`
- Worker URL: `https://ghost-webhook-relay.ionova-relay.workers.dev`

## Step 5: Add Worker Secrets in Cloudflare

Set the GitHub token secret:

```bash
npx wrangler secret put GITHUB_TOKEN
```

When prompted, paste the GitHub token from Step 3.

Set the webhook secret:

```bash
openssl rand -hex 32
npx wrangler secret put WEBHOOK_SECRET
```

When prompted, paste the random hex string.

Keep the webhook secret somewhere safe. You will use the same value in the Ghost webhook URL.

## Step 6: Configure the Ghost Webhook

In Ghost Admin:

1. Open `Settings`
2. Open `Integrations`
3. Click `Add custom integration`
4. Name it `GitHub Deploy`
5. Add a webhook

Use these values:

- Event: `Post published`
- Method: `POST`
- Target URL:

```text
https://ghost-webhook-relay.ionova-relay.workers.dev/webhook?secret=YOUR_WEBHOOK_SECRET
```

Replace `YOUR_WEBHOOK_SECRET` with the exact value stored in Cloudflare as `WEBHOOK_SECRET`.

## Step 7: Test the Flow

1. Publish a test post in Ghost
2. Open GitHub Actions:
   `https://github.com/ASHUTOSH2224/ionova/actions`
3. Confirm `Deploy to Staging` starts automatically
4. Wait for it to turn green
5. Verify staging:
   `https://d1ycysbz0o2min.cloudfront.net`
6. If staging looks correct, manually run `Promote to Production`
7. Verify production:
   `https://ionova.ai`

## Manual Production Promotion

To promote staging content to production manually:

1. Open `https://github.com/ASHUTOSH2224/ionova/actions`
2. Click `Promote to Production`
3. Click `Run workflow`
4. Keep branch as `main`
5. Wait for the workflow to finish

## Troubleshooting

### Ghost cannot add a custom integration

Cause:

- the Ghost plan does not support custom integrations/webhooks

Fix:

- upgrade Ghost to `Publisher` or higher

### Worker returns `401 Unauthorized`

Cause:

- the `secret=` value in the Ghost webhook URL does not match `WEBHOOK_SECRET` in Cloudflare

Fix:

- reset `WEBHOOK_SECRET`
- update the Ghost webhook URL to match

### Worker returns `502`

Cause:

- the GitHub token is missing, expired, revoked, or does not have repo access

Fix:

- create a new fine-grained GitHub token
- run `npx wrangler secret put GITHUB_TOKEN`

### No GitHub Action starts after publishing in Ghost

Check:

- Ghost webhook delivery logs
- Cloudflare Worker deployment status
- Cloudflare Worker secrets
- GitHub Actions tab for repository dispatch events

### Staging deploy works but production is not updated

Expected behavior:

- production is manual by design

Fix:

- run `Promote to Production` from GitHub Actions

## Security Notes

- Never paste GitHub tokens into chat, docs, commits, or source files
- Never store `WEBHOOK_SECRET` in source control
- If either secret is exposed, rotate it immediately
- Use `npx wrangler secret put ...` to update Cloudflare secrets safely
