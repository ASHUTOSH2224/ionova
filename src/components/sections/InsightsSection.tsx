export function InsightsSection() {
  const articles = [
    {
      badge: "Blog",
      title: "The $8–12 Billion Address Problem in Global Payments",
      description:
        "Address-related payment exceptions cost the industry $8–12 billion annually in operational drag that institutions rarely track as a single number.",
      href: "/blog/payment-exception-costs-address-data",
    },
    {
      badge: "Blog",
      title: "November 2026: The ISO 20022 Deadline That Changes Everything",
      description:
        "Financial institutions face an ~9-month timeline to achieve mandatory structured address compliance, requiring immediate implementation rather than delayed action.",
      href: "/blog/november-2026-the-iso-20022-deadline",
    },
    {
      badge: "Blog",
      title: "What Regulators Actually Require: EPC, SWIFT, and CPMI Decoded",
      description:
        "Structured addressing is mandatory under ISO 20022 regulations, not optional — with hybrid format only as a constrained transitional fallback.",
      href: "/blog/what-regulators-actually-require-iso-20022-addresses",
    },
  ];

  return (
    <section className="bg-surface-2 px-6" id="insights" style={{ paddingTop: 'var(--section-padding-y)', paddingBottom: 'var(--section-padding-y)' }}>
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="landing-section-header mb-12 text-center lg:mb-16">
          <h2 className="landing-section-title mb-4">
            Latest from <span className="text-gradient">ioNova Resource Center</span>
          </h2>
          <span className="landing-section-subtitle">
            Research, analysis, and practical guidance for ISO 20022 address compliance
          </span>
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              className="group flex flex-col rounded-2xl border border-[#D0DAEB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                textDecoration: "none",
                boxShadow: "0 1px 3px rgba(14,25,53,0.05), 0 1px 2px rgba(14,25,53,0.03)",
              }}
            >
              {/* Badge */}
              <span
                className="mb-4 inline-block w-fit rounded-full border border-[#D0DAEB] px-3 py-1"
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "0.5px",
                  color: "#466587",
                }}
              >
                {article.badge.toUpperCase()}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "17px",
                  lineHeight: 1.35,
                  color: "#0E1935",
                  marginBottom: "10px",
                }}
              >
                {article.title}
              </h3>

              {/* Description */}
              <p
                className="flex-1"
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontSize: "13.5px",
                  lineHeight: 1.65,
                  color: "#466587",
                  marginBottom: "16px",
                }}
              >
                {article.description}
              </p>

              {/* Read Link */}
              <span
                className="inline-flex items-center gap-1.5 transition-colors group-hover:text-[#3C75B5]"
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#43ADC1",
                }}
              >
                Read Article
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
              </span>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-[#D0DAEB] px-7 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B8CCE2] hover:shadow-md"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: "#0E1935",
              textDecoration: "none",
            }}
          >
            View All Resources
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
