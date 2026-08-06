CREATE TABLE IF NOT EXISTS structured_address_scorecard_submissions (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  score INTEGER NOT NULL,
  max_score INTEGER NOT NULL,
  band TEXT NOT NULL,
  band_title TEXT NOT NULL,
  adjusted_band TEXT,
  override_count INTEGER NOT NULL DEFAULT 0,
  flagged_dimensions_json TEXT NOT NULL,
  dimension_scores_json TEXT NOT NULL,
  answers_json TEXT NOT NULL,
  overrides_json TEXT NOT NULL,
  worksheet_json TEXT NOT NULL,
  page_url TEXT,
  user_agent TEXT,
  kit_status TEXT NOT NULL DEFAULT 'skipped',
  kit_error TEXT
);

CREATE INDEX IF NOT EXISTS idx_scorecard_submissions_created_at
  ON structured_address_scorecard_submissions (created_at);

CREATE INDEX IF NOT EXISTS idx_scorecard_submissions_email
  ON structured_address_scorecard_submissions (email);
