export function LeadershipSection() {
  const leaders = [
    {
      initials: "PD",
      name: "Parth Desai",
      role: "Founder & CEO",
      credentials: "MS AI, Georgia Tech · Yale · HBS · INSEAD",
      bio: "30+ years applying AI to financial services. Platforms processing $5T annually across 55+ countries. Creator of Knowledge First AI™.",
    },
    {
      initials: "IT",
      name: "Ishan Tarunesh",
      role: "Co-Founder & CTO",
      credentials: "B.Tech CS, IIT Bombay · Published NLP (ACL, EACL)",
      bio: "Leads platform architecture, proprietary NER and cascade entity resolution. Published in multilingual modelling and cross-lingual processing.",
    },
    {
      initials: "DM",
      name: "Devavrat Mahajan",
      role: "Co-Founder & COO",
      credentials: "IIT Bombay · IIM Ahmedabad · Amazon AI/ML",
      bio: "Runs enterprise partnerships and go-to-market. Former Amazon AI/ML PM. Scaled AI company to $5M+ valuation, fully bootstrapped.",
    },
  ];

  return (
    <section className="border-t border-border bg-background py-24 px-6" id="leadership">
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
            Leadership
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
          100+ Years of Combined AI, Banking & Enterprise Delivery
          <span
            style={{
              display: "block",
              fontFamily: "'Figtree', system-ui, sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: 1.7,
              color: "#466587",
              maxWidth: "620px",
              marginTop: "12px",
            }}
          >
            Forged over three decades building AI at the heart of global financial infrastructure
            — sharpened by a new generation of engineers.
          </span>
        </h2>

        {/* Leader Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-2xl border border-[#D0DAEB] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                boxShadow: "0 1px 3px rgba(14,25,53,0.05), 0 1px 2px rgba(14,25,53,0.03)",
              }}
            >
              {/* Avatar */}
              <div
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(135deg, #5FCFD0, #43ADC1, #3C75B5)",
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "white",
                  letterSpacing: "0.5px",
                }}
              >
                {leader.initials}
              </div>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  color: "#0E1935",
                  marginBottom: "4px",
                }}
              >
                {leader.name}
              </h3>

              {/* Role */}
              <div
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#43ADC1",
                  marginBottom: "6px",
                }}
              >
                {leader.role}
              </div>

              {/* Credentials */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "#8796A7",
                  marginBottom: "14px",
                  lineHeight: 1.5,
                }}
              >
                {leader.credentials}
              </div>

              {/* Bio */}
              <p
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontSize: "13.5px",
                  lineHeight: 1.65,
                  color: "#466587",
                  marginBottom: "14px",
                }}
              >
                {leader.bio}
              </p>

              {/* Link */}
              <a
                href="/company"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#3C75B5]"
                style={{
                  fontFamily: "'Figtree', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  color: "#43ADC1",
                  textDecoration: "none",
                }}
              >
                Full Bio →
              </a>
            </div>
          ))}
        </div>

        {/* Meet Team Button */}
        <div className="mt-8 text-center">
          <a
            href="/company"
            className="inline-flex items-center gap-2 rounded-full border border-[#D0DAEB] px-7 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B8CCE2] hover:shadow-md"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              color: "#0E1935",
              textDecoration: "none",
            }}
          >
            Meet the Full Team
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
