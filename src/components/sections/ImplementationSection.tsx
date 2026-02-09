export function ImplementationSection() {
  const phases = [
    {
      phase: "Phase 1",
      weeks: "Weeks 1–4",
      title: "Analysis & Configuration",
      description:
        "Connect to existing infrastructure. Analyse address data quality. Configure parsing rules and confidence thresholds.",
    },
    {
      phase: "Phase 2",
      weeks: "Weeks 5–10",
      title: "Integration & Testing",
      description:
        "Pre-built connectors for MuleSoft, Volante, Finastra. SWIFT integration via Alliance Lite2 and Alliance Access.",
    },
    {
      phase: "Phase 3",
      weeks: "Weeks 11–16",
      title: "Production Deployment",
      description:
        "Circuit-breaker protection. 85–90% initial structuring, rising to 95%+ in the first quarter. Zero downtime risk.",
    },
  ];

  return (
    <section className="py-24 px-6" id="implementation">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Label */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-5 w-1 rounded-full bg-[#43ADC1]" />
          <span
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "1.5px",
              color: "#43ADC1",
              textTransform: "uppercase",
            }}
          >
            Implementation
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.15,
            color: "#0E1935",
            maxWidth: "700px",
            marginBottom: "16px",
          }}
        >
          One Integration. Full Compliance. Zero Legacy Overhaul.
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#466587",
            maxWidth: "620px",
            marginBottom: "40px",
          }}
        >
          Deploys as a sidecar service — intercepts, resolves, and returns enriched messages
          without modifying your core payment flow.
        </p>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {phases.map((phase) => (
            <div
              key={phase.phase}
              className="rounded-2xl border border-[#D0DAEB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                boxShadow: "0 1px 3px rgba(14,25,53,0.05), 0 1px 2px rgba(14,25,53,0.03)",
              }}
            >
              {/* Phase Badge */}
              <div
                className="mb-4"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                  color: "#43ADC1",
                  textTransform: "uppercase",
                }}
              >
                {phase.phase} · {phase.weeks}
              </div>

              {/* Phase Title */}
              <h3
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "17px",
                  color: "#0E1935",
                  marginBottom: "10px",
                }}
              >
                {phase.title}
              </h3>

              {/* Phase Description */}
              <p
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontSize: "13.5px",
                  lineHeight: 1.65,
                  color: "#466587",
                }}
              >
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
