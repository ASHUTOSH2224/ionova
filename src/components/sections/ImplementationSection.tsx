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
    <section className="bg-surface-2 px-6" id="implementation" style={{ paddingTop: 'var(--section-padding-y)', paddingBottom: 'var(--section-padding-y)' }}>
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="landing-section-header mb-12 text-center lg:mb-16">
          <h2 className="landing-section-title mb-4">
            One Integration Full Compliance <span className="text-gradient">Zero Legacy Overhaul</span>
          </h2>
          <span className="landing-section-subtitle">
            Deploys as a sidecar service. Repairs messages in real time or does a one time cleanup on your legacy data.
          </span>
        </div>

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
