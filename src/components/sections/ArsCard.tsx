type ArsCardProps = {
  activeStage?: number;
  onStageChange?: (stage: number) => void;
};

type Stage = {
  label: string;
  badge: string;
  source: string;
  ms: string;
  showSubdivision: boolean;
  reasonCode: string;
  reasonText: string;
};

const STAGES: Stage[] = [
  {
    label: "STRUCTURED",
    badge: "STRUCTURED",
    source: "rule_source PMPG v1.11",
    ms: "47 ms",
    showSubdivision: false,
    reasonCode: "PARSED",
    reasonText: "five elements, each in its own field. None inferred.",
  },
  {
    label: "VERIFIED",
    badge: "VERIFIED",
    source: "source India Post PIN directory · checked 2026-09-18",
    ms: "112 ms",
    showSubdivision: false,
    reasonCode: "ADR-V2",
    reasonText: "town and postcode coherent · ADR-V7 locality confirmed against an authoritative source.",
  },
  {
    label: "ENRICHED",
    badge: "ENRICHED",
    source: "rule_source ISO 3166-2:IN · on verified base",
    ms: "138 ms",
    showSubdivision: true,
    reasonCode: "ADR-E4",
    reasonText: "a sixth element resolved from a verified postcode — resolved, not inferred.",
  },
];

const ADDRESS_LINES = [
  "PLOT NO. 98 P NARANPURA, SANAD,",
  "CHHARODI AHMEDABAD, 382210, INDIA",
];

const ADDRESS_ROWS = [
  { tag: "BldgNm", value: "PLOT NO. 98 P" },
  { tag: "TwnLctnNm", value: "NARANPURA SANAD CHHARODI" },
  { tag: "TwnNm", value: "AHMEDABAD" },
  { tag: "CtrySubDvsn", value: "IN-GJ", enriched: true },
  { tag: "PstCd", value: "382210" },
  { tag: "Ctry", value: "IN" },
];

export function ArsCard({ activeStage = 0, onStageChange }: ArsCardProps) {
  const stageIndex = Math.min(Math.max(activeStage, 0), STAGES.length - 1);
  const stage = STAGES[stageIndex];

  return (
    <div className={`ars-card stage-${stage.label.toLowerCase()}`}>
      <div className="ars-row">
        <span className="ars-eyebrow">ARS ENGINE · RESOLVE &amp; FIX</span>
        <span className="ars-status">
          <span className="sdot" />
          <span>{stage.label}</span>
        </span>
      </div>

      <div className="ars-mini">Free-text in</div>
      <div className="ars-chips">
        <span className="ars-chip raw">
          {ADDRESS_LINES.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </span>
      </div>

      <div className="ars-mini">Validated ISO 20022 out</div>
      <div key={stageIndex} className="ars-out revealed">
        <span className="ln">
          <span className="ars-tag">&lt;PstlAdr&gt;</span>
        </span>
        {ADDRESS_ROWS.map((row) => {
          const hidden = Boolean(row.enriched && !stage.showSubdivision);

          return (
            <span
              key={row.tag}
              className={`ln ars-ind${hidden ? " muted" : ""}`}
              data-hidden={hidden}
            >
              <span className="ars-tag2">&lt;{row.tag}&gt;</span>
              <span className={row.enriched ? "ars-val new" : "ars-val"}>{row.value}</span>
              <span className="ars-tag2">&lt;/{row.tag}&gt;</span>
            </span>
          );
        })}
        <span className="ln">
          <span className="ars-tag">&lt;/PstlAdr&gt;</span>
        </span>
      </div>

      <div key={`${stageIndex}-reason`} className="ars-reason">
        <b>{stage.reasonCode}</b> — {stage.reasonText}
      </div>

      <div className="ars-foot">
        <span className="ars-badge">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
          <span>{stage.badge}</span>
        </span>
        <span className="ars-rule">{stage.source}</span>
        <span className="ars-ms">{stage.ms}</span>
      </div>

      <div className="ars-dots" role="tablist" aria-label="Resolution stage">
        {STAGES.map((item, index) => (
          <button
            key={item.label}
            type="button"
            role="tab"
            aria-label={item.label[0] + item.label.slice(1).toLowerCase()}
            aria-selected={index === stageIndex}
            className={index === stageIndex ? "on" : ""}
            onClick={() => onStageChange?.(index)}
          />
        ))}
      </div>

      <p className="ars-note"><b>Enriched only on a verified base.</b> Nothing inferred.</p>
    </div>
  );
}
