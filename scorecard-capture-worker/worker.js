const ALLOWED_ORIGINS = new Set([
  "https://ionova.ai",
  "https://www.ionova.ai",
  "https://d1ycysbz0o2min.cloudfront.net",
]);

const MAX_BODY_BYTES = 128 * 1024;
const SCORECARD_URL = "https://ionova.ai/tools/structured-address-readiness-scorecard";
const WORKER_VERSION = "kit-v3-2026-08-06";

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return json({ ok: true, version: WORKER_VERSION }, 200, cors);
    }

    if (url.pathname !== "/scorecard") {
      return json({ ok: false, error: "not_found" }, 404, cors);
    }

    if (request.method !== "POST") {
      return json({ ok: false, error: "method_not_allowed" }, 405, {
        ...cors,
        Allow: "POST, OPTIONS",
      });
    }

    if (!env.DB) {
      return json({ ok: false, error: "missing_d1_binding" }, 500, cors);
    }

    const parsed = await readPayload(request);
    if (!parsed.ok) {
      return json({ ok: false, error: parsed.error }, parsed.status, cors);
    }

    const validation = validatePayload(parsed.payload);
    if (!validation.ok) {
      return json({ ok: false, error: validation.error }, 400, cors);
    }

    const id = crypto.randomUUID();
    const row = toRow(id, parsed.payload, request);

    try {
      await insertSubmission(env.DB, row);
    } catch (error) {
      console.error("D1 insert failed", error);
      return json({ ok: false, error: "database_insert_failed" }, 500, cors);
    }

    const kitResult = await syncKit(parsed.payload, env);
    await updateKitStatus(env.DB, id, kitResult.status, kitResult.error);

    return json({ ok: true, id, kitStatus: kitResult.status }, 200, cors);
  },
};

function corsHeaders(origin) {
  const isLocal = /^https?:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
  const headers = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };

  if (ALLOWED_ORIGINS.has(origin) || isLocal) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

async function readPayload(request) {
  const body = await request.text();
  if (body.length > MAX_BODY_BYTES) {
    return { ok: false, status: 413, error: "payload_too_large" };
  }

  try {
    return { ok: true, payload: JSON.parse(body) };
  } catch {
    return { ok: false, status: 400, error: "invalid_json" };
  }
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") {
    return { ok: false, error: "invalid_payload" };
  }

  const lead = payload.lead || {};
  if (!lead.name || typeof lead.name !== "string") {
    return { ok: false, error: "missing_name" };
  }

  if (!lead.email || typeof lead.email !== "string" || !isEmail(lead.email)) {
    return { ok: false, error: "invalid_email" };
  }

  if (!Number.isFinite(payload.score) || !Number.isFinite(payload.maxScore)) {
    return { ok: false, error: "invalid_score" };
  }

  if (!payload.band || typeof payload.band !== "string") {
    return { ok: false, error: "missing_band" };
  }

  return { ok: true };
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function toRow(id, payload, request) {
  const lead = payload.lead;

  return {
    id,
    name: clean(lead.name, 180),
    email: clean(lead.email, 254).toLowerCase(),
    organization: clean(lead.organization || "", 220),
    score: Math.round(payload.score),
    maxScore: Math.round(payload.maxScore),
    band: clean(payload.band, 20),
    bandTitle: clean(payload.bandTitle || "", 180),
    adjustedBand: clean(payload.adjustedBand || "", 20) || null,
    overrideCount: Math.round(payload.overrideCount || 0),
    flaggedDimensions: stringify(payload.flaggedDimensions || []),
    dimensionScores: stringify(payload.dimensionScores || []),
    answers: stringify(payload.answers || []),
    overrides: stringify(payload.overrides || []),
    worksheet: stringify(payload.worksheet || []),
    pageUrl: clean(payload.pageUrl || SCORECARD_URL, 500),
    userAgent: clean(request.headers.get("User-Agent") || "", 500),
  };
}

function clean(value, maxLength) {
  return String(value).trim().slice(0, maxLength);
}

function stringify(value) {
  return JSON.stringify(value).slice(0, 100000);
}

async function insertSubmission(db, row) {
  await db
    .prepare(
      `INSERT INTO structured_address_scorecard_submissions (
        id,
        name,
        email,
        organization,
        score,
        max_score,
        band,
        band_title,
        adjusted_band,
        override_count,
        flagged_dimensions_json,
        dimension_scores_json,
        answers_json,
        overrides_json,
        worksheet_json,
        page_url,
        user_agent,
        kit_status,
        kit_error
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
      row.id,
      row.name,
      row.email,
      row.organization,
      row.score,
      row.maxScore,
      row.band,
      row.bandTitle,
      row.adjustedBand,
      row.overrideCount,
      row.flaggedDimensions,
      row.dimensionScores,
      row.answers,
      row.overrides,
      row.worksheet,
      row.pageUrl,
      row.userAgent,
      "pending",
      ""
    )
    .run();
}

async function updateKitStatus(db, id, status, error) {
  try {
    await db
      .prepare(
        `UPDATE structured_address_scorecard_submissions
         SET kit_status = ?, kit_error = ?
         WHERE id = ?`
      )
      .bind(status, error || "", id)
      .run();
  } catch (updateError) {
    console.error("D1 Kit status update failed", updateError);
  }
}

async function syncKit(payload, env) {
  if (!env.KIT_API_KEY || !env.KIT_FORM_ID) {
    return { status: "skipped", error: "" };
  }

  const lead = payload.lead;
  const formUrl = `https://api.convertkit.com/v3/forms/${encodeURIComponent(env.KIT_FORM_ID)}/subscribe`;
  const form = await kitFetch(formUrl, {
    api_key: env.KIT_API_KEY,
    email: lead.email,
    first_name: lead.name,
    fields: kitCustomFields(lead, env),
  });

  if (!form.ok) {
    return { status: "form_error", error: form.error };
  }

  return { status: "subscribed", error: "" };
}

function kitCustomFields(lead, env) {
  const institutionFieldKey = clean(env.KIT_INSTITUTION_FIELD_KEY || "company_name", 80);
  const organization = clean(lead.organization || "", 220);

  if (!organization) {
    return null;
  }

  return {
    [institutionFieldKey]: organization,
  };
}

async function kitFetch(url, body) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    const data = parseJson(text);

    if (response.ok) {
      return { ok: true, data, error: "" };
    }

    return {
      ok: false,
      error: `HTTP ${response.status}: ${text.slice(0, 500)}`,
    };
  } catch (error) {
    return { ok: false, error: error.message || "Kit request failed" };
  }
}

function parseJson(text) {
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function json(body, status, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
