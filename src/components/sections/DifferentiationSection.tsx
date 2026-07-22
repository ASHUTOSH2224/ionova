export function DifferentiationSection() {
  const rows = [
    {
      capability: "Output format",
      postal: "Postal standard",
      llm: "Unstructured text",
      inHouse: "Custom XML",
      ionova: "Native ISO 20022 XML",
    },
    {
      capability: "Coverage",
      postal: "Major markets",
      llm: "Training-dependent",
      inHouse: "What you build",
      ionova: "246 countries, 50+ scripts",
    },
    {
      capability: "Financial ID handling",
      postal: "Stripped / corrupted",
      llm: "Not understood",
      inHouse: "Manual",
      ionova: "50+ IDs preserved",
    },
    {
      capability: "Sanctions screening impact",
      postal: "None",
      llm: "Unreliable",
      inHouse: "Manual tuning",
      ionova: "~30% false positive reduction",
    },
    {
      capability: "Explainability",
      postal: "Minimal",
      llm: "None (black box)",
      inHouse: "What you build",
      ionova: "Field-level rule citations",
    },
    {
      capability: "STP improvement",
      postal: "Marginal",
      llm: "N/A",
      inHouse: "Variable",
      ionova: "40% → 98%",
    },
    {
      capability: "Implementation",
      postal: "6–18 months",
      llm: "Weeks (unreliable)",
      inHouse: "18–36 months",
      ionova: "2–4 weeks",
    },
    {
      capability: "Determinism",
      postal: "Deterministic",
      llm: "Non-deterministic",
      inHouse: "Deterministic",
      ionova: "Deterministic with audit",
    },
  ];

  return (
    <section className="bg-surface-2 px-6" id="comparison" style={{ paddingTop: 'var(--section-padding-y)', paddingBottom: 'var(--section-padding-y)' }}>
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="landing-section-header mb-12 text-center lg:mb-16">
          <h2 className="landing-section-title mb-4">
            Why Postal Validation Tools, LLMs and generic vendors Fail for <span className="text-gradient">Payment Compliance</span>
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-[6px] border border-[#D0DAEB]">
          <table className="w-full border-collapse" style={{ fontSize: "15px" }}>
            <thead>
              <tr>
                {["Capability", "Generic Postal APIs", "LLMs", "In-House Build", "ioNova"].map(
                  (header, i) => (
                    <th
                      key={header}
                      className={`whitespace-nowrap border-b-2 border-[#D0DAEB] px-4 py-3.5 text-left ${i === 4
                        ? "bg-gradient-to-br from-[rgba(95,207,208,0.08)] to-[rgba(67,173,193,0.04)]"
                        : "bg-[#EFF2F7]"
                        }`}
                      style={{
                        fontFamily: "'Figtree', system-ui, sans-serif",
                        fontWeight: 700,
                        fontSize: "14px",
                        letterSpacing: "0.3px",
                        color: i === 4 ? "#43ADC1" : "#0E1935",
                      }}
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={row.capability}
                  className="transition-colors hover:bg-[rgba(239,242,247,0.5)]"
                >
                  <td
                    className={`px-4 py-3 ${idx !== rows.length - 1 ? "border-b border-[#DFE8F2]" : ""
                      }`}
                    style={{
                      fontWeight: 600,
                      color: "#0E1935",
                      fontSize: "14px",
                      fontFamily: "'Figtree', system-ui, sans-serif",
                    }}
                  >
                    {row.capability}
                  </td>
                  <td
                    className={`px-4 py-3 ${idx !== rows.length - 1 ? "border-b border-[#DFE8F2]" : ""
                      }`}
                    style={{ color: "#466587", fontFamily: "'Figtree', system-ui, sans-serif" }}
                  >
                    {row.postal}
                  </td>
                  <td
                    className={`px-4 py-3 ${idx !== rows.length - 1 ? "border-b border-[#DFE8F2]" : ""
                      }`}
                    style={{ color: "#466587", fontFamily: "'Figtree', system-ui, sans-serif" }}
                  >
                    {row.llm}
                  </td>
                  <td
                    className={`px-4 py-3 ${idx !== rows.length - 1 ? "border-b border-[#DFE8F2]" : ""
                      }`}
                    style={{ color: "#466587", fontFamily: "'Figtree', system-ui, sans-serif" }}
                  >
                    {row.inHouse}
                  </td>
                  <td
                    className={`px-4 py-3 ${idx !== rows.length - 1 ? "border-b border-[#DFE8F2]" : ""
                      }`}
                    style={{
                      color: "#43ADC1",
                      fontWeight: 600,
                      fontFamily: "'Figtree', system-ui, sans-serif",
                    }}
                  >
                    {row.ionova}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
