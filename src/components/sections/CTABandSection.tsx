import { useState, useEffect } from "react";

export function CTABandSection() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    function update() {
      const diff = new Date("2026-11-01T00:00:00Z").getTime() - Date.now();
      if (diff <= 0) return;
      setDays(Math.floor(diff / 864e5));
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden px-6 py-14"
      style={{
        background: "linear-gradient(135deg, #0E1935 0%, #1A1E35 30%, #243574 60%, #2B4E86 100%)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        {/* Title */}
        <h2
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4.5vw, 44px)",
            lineHeight: 1.2,
            color: "#E2E8F4",
            marginBottom: "16px",
          }}
        >
          The November 2026 ISO 20022 Deadline Won't Wait.{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #EF4444, #F87171, #F59E0B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Address Data Shouldn't Either.
          </span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Figtree', system-ui, sans-serif",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#8A9DBD",
            marginBottom: "32px",
          }}
        >
          Purpose-built address intelligence. 195 countries. 98%+ STP. 10–16 weeks to production.
        </p>

        {/* Countdown */}
        <div className="mb-10 flex justify-center">
          <div
            className="rounded-2xl border border-white/10 px-10 py-5 text-center transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.06)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.3)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(40px, 7vw, 56px)",
                letterSpacing: "-1.5px",
                lineHeight: 1,
                background: "linear-gradient(180deg, #6ED9DA, #5AAFCB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {days}
            </div>
            <div
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1.5px",
                color: "#6B7FA0",
                marginTop: "6px",
              }}
            >
              DAYS
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #43ADC1, #3C75B5)",
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
            }}
          >
            See Structured Resolution in Action
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
          <a
            href="/demo"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40"
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#E2E8F4",
              textDecoration: "none",
            }}
          >
            Calculate Savings
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
