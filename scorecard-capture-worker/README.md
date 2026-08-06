# Structured Address Scorecard Capture Worker

This Worker receives scorecard submissions from:

`https://ionova.ai/tools/structured-address-readiness-scorecard`

The website remains hosted on AWS CloudFront. This Worker is only the capture
endpoint:

```text
CloudFront static page -> Cloudflare Worker -> Cloudflare D1 -> Kit
```

It stores the full response payload in Cloudflare D1 and sends the lead
name/email to the configured Kit form server-side, keeping the Kit API key out
of browser JavaScript.

The existing `.env` Kit variables are public frontend variables. Use Worker
secrets for this capture endpoint.

## Setup

Create the D1 database:

```bash
cd /Users/ashutosh/TailoredAI/IONOVAA/ionova-1/scorecard-capture-worker
npx wrangler d1 create ionova_scorecard
```

Copy the returned `database_id` into `wrangler.toml`, then apply the schema:

```bash
npx wrangler d1 execute ionova_scorecard --remote --file=./schema.sql
```

Set Kit secrets:

```bash
npx wrangler secret put KIT_API_KEY
npx wrangler secret put KIT_FORM_ID
npx wrangler secret put KIT_INSTITUTION_FIELD_KEY # optional override
```

The scorecard Kit page that has been created is:

`https://pdmc.kit.com/e67de7fbe4`

That URL exposes the public Kit page UID (`e67de7fbe4`), but the Kit API needs
the numeric `form_id` for `KIT_FORM_ID`. The verified scorecard form ID is:

```text
9771422
```

`KIT_API_KEY` must be a valid Kit API key for the same account/workspace as the
form, and it must be set as a Cloudflare Worker secret, not exposed from browser
JavaScript. The scorecard Kit embed stores Institution in the `company_name`
custom field, so the Worker defaults `KIT_INSTITUTION_FIELD_KEY` to
`company_name`; only set that secret if the Kit custom-field key changes later.

Deploy:

```bash
npx wrangler deploy
```

Expected Worker URL:

`https://ionova-scorecard-capture.ionova-relay.workers.dev/scorecard`

If a custom domain is added later, update `SCORECARD_CAPTURE_ENDPOINT` in `src/pages/tools/structured-address-readiness-scorecard.astro`.

## CORS

The Worker currently accepts submissions from:

- `https://ionova.ai`
- `https://www.ionova.ai`
- `https://d1ycysbz0o2min.cloudfront.net`
- local dev URLs
