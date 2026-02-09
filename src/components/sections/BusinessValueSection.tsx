export function BusinessValueSection() {
  const stats = [
    { value: "$8–12B", label: "Annual industry cost of poor address data" },
    { value: "40%→98%+", label: "Typical STP improvement" },
    { value: "~30%", label: "Sanctions false positive reduction" },
    { value: "30–50×", label: "ROI within 12 months" },
    { value: "10–16 wks", label: "To production" },
    { value: "$75K", label: "Entity Platform pilot (from)" },
  ];

  return (
    <section className="border-t border-border bg-background py-24 px-6" id="roi">
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
            Business Value
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
            marginBottom: "40px",
          }}
        >
          The Economics of Getting Address Data Right
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-[#D0DAEB] bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                boxShadow: "0 1px 3px rgba(14,25,53,0.05), 0 1px 2px rgba(14,25,53,0.03)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3vw, 36px)",
                  letterSpacing: "-0.5px",
                  color: "#243574",
                  marginBottom: "8px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontSize: "13px",
                  color: "#8796A7",
                  lineHeight: 1.5,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #1A1E35, #243574, #2B4E86)",
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            Calculate Your 5-Year Savings
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
