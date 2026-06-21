import { useEffect, useRef, useState } from "react";

// Animated "ARS engine · resolve & fix" card — ported from ionova-homepage.html.
// Cycles through scenarios: free-text chips → validated ISO 20022 PstlAdr output.

type Chip = { t: string; raw?: boolean };
type Scenario = {
  city: string;
  chips: Chip[];
  out: [string, string][];
  rule: string;
  ms: number;
};

const SCENARIOS: Scenario[] = [
  {
    city: "Shenzhen",
    chips: [{ t: "No. 33 Haitian 2nd Road Nanshan Level 15 / near Shenzhen Bay Shenzhen 518054", raw: true }],
    out: [["Flr", "Level 15"], ["BldgNm", "near Shenzhen Bay"], ["BldgNb", "No. 33"], ["StrtNm", "Haitian 2nd Road"], ["DstrctNm", "Nanshan"], ["TwnNm", "Shenzhen"], ["PstCd", "518054"], ["Ctry", "CN"]],
    rule: "GB/T 7408 · PMPG v1.11",
    ms: 44,
  },
  {
    city: "Athens",
    chips: [{ t: "Floor 80, Agios Eleftherios / Athens 111 43", raw: true }],
    out: [["Flr", "Floor 80"], ["TwnLctnNm", "Agios Eleftherios"], ["TwnNm", "Athens"], ["PstCd", "111 43"], ["Ctry", "GR"]],
    rule: "ELOT 743 · PMPG v1.11",
    ms: 38,
  },
  {
    city: "Milan",
    chips: [{ t: "Suite 412, Palazzo Lombardia / Via Melchiorre Gioia 37 Milano Italia", raw: true }],
    out: [["Room", "Suite 412"], ["BldgNm", "Palazzo Lombardia"], ["BldgNb", "37"], ["StrtNm", "Via Melchiorre Gioia"], ["TwnNm", "Milano"], ["Ctry", "IT"]],
    rule: "UNI EN 13601 · PMPG v1.11",
    ms: 41,
  },
  {
    city: "Ahmedabad",
    chips: [{ t: "PLOT NO. 98 P NARANPURA, SANAD / CHHARODI AHMEDABAD 382210 IN-GJ", raw: true }],
    out: [["BldgNm", "PLOT NO. 98 P"], ["TwnLctnNm", "NARANPURA SANAD CHHARODI"], ["TwnNm", "AHMEDABAD"], ["CtrySubDvsn", "IN-GJ"], ["PstCd", "382210"], ["Ctry", "IN"]],
    rule: "ISO 3166-2:IN · PMPG v1.11",
    ms: 47,
  },
  {
    city: "Uppsala",
    chips: [{ t: "DRAGARBRUNNSGATAN 50C / UPPSALA 753 20", raw: true }],
    out: [["BldgNb", "50C"], ["StrtNm", "DRAGARBRUNNSGATAN"], ["TwnNm", "UPPSALA"], ["PstCd", "753 20"], ["Ctry", "SE"]],
    rule: "SS 613510 · PMPG v1.11",
    ms: 36,
  },
];

export function ArsCard() {
  const [idx, setIdx] = useState(0);
  const [resolving, setResolving] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [revealed, setRevealed] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  const s = SCENARIOS[idx];
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const clearTimers = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  };

  // Run the resolve animation for a given scenario index.
  const show = (i: number) => {
    clearTimers();
    setIdx(i);
    if (reduce) {
      setResolving(false);
      setScanning(false);
      setRevealed(true);
      return;
    }
    setResolving(true);
    setScanning(true);
    setRevealed(false);
    const t1 = window.setTimeout(() => {
      setScanning(false);
      setResolving(false);
      setRevealed(true);
      const t2 = window.setTimeout(() => show((i + 1) % SCENARIOS.length), 4200);
      timersRef.current.push(t2);
    }, 1150);
    timersRef.current.push(t1);
  };

  // Start once the card scrolls into view.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            show(0);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusText = resolving ? "resolving" : "repaired";
  const badgeText = resolving ? "RESOLVING" : "REPAIRED";
  const ruleText = resolving ? "matching rules…" : s.rule;
  const msText = resolving ? "— ms" : `${s.ms} ms`;

  const lines = [
    { html: "<span class='ars-tag'>&lt;PstlAdr&gt;</span>" },
    ...s.out.map(([k, v]) => ({
      html: `<span class='ars-ind'><span class='ars-tag2'>&lt;${k}&gt;</span><span class='ars-val'>${v}</span><span class='ars-tag2'>&lt;/${k}&gt;</span></span>`,
    })),
    { html: "<span class='ars-tag'>&lt;/PstlAdr&gt;</span>" },
  ];

  return (
    <div
      ref={cardRef}
      className={`ars-card${resolving ? " resolving" : ""}${scanning ? " scanning" : ""}`}
    >
      <div className="ars-scan" />
      <div className="ars-row">
        <span className="ars-eyebrow">ARS ENGINE · RESOLVE &amp; FIX</span>
        <span className="ars-status">
          <span className="sdot" />
          <span>{statusText}</span>
        </span>
      </div>
      <div className="ars-mini">Free-text in</div>
      <div className="ars-chips">
        {s.chips.map((c, i) => (
          <span key={i} className={`ars-chip${c.raw ? " raw" : ""}`}>
            {c.t.split(" / ").map((line, j) => (
              <span key={j} style={{ display: "block" }}>{line}</span>
            ))}
          </span>
        ))}
      </div>
      <div className="ars-mini">Validated ISO 20022 out</div>
      <div className={`ars-out${revealed ? " revealed" : ""}`}>
        {lines.map((l, i) => (
          <span
            key={`${idx}-${i}`}
            className="ln"
            style={revealed && !reduce ? { animationDelay: `${i * 60}ms` } : undefined}
            dangerouslySetInnerHTML={{ __html: l.html }}
          />
        ))}
      </div>
      <div className="ars-foot">
        <span className="ars-badge">
          <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
          <span>{badgeText}</span>
        </span>
        <span className="ars-rule">
          rule_source <b>{ruleText}</b>
        </span>
        <span className="ars-ms">{msText}</span>
      </div>
      <div className="ars-dots">
        {SCENARIOS.map((_, i) => (
          <i
            key={i}
            className={i === idx ? "on" : ""}
            onClick={() => {
              startedRef.current = true;
              show(i);
            }}
          />
        ))}
      </div>
    </div>
  );
}
