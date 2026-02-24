import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export function CTABandSection() {
  // Pre-compute at render time so SSR/SSG shows real countdown
  // (Googlebot may not execute useEffect, so "0 DAYS LEFT" would hurt indexing)
  const initialDays = Math.max(0, Math.floor((new Date("2026-11-01T00:00:00Z").getTime() - Date.now()) / 864e5));
  const [days, setDays] = useState(initialDays);
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function update() {
      const diff = new Date("2026-11-01T00:00:00Z").getTime() - Date.now();
      if (diff <= 0) return;
      setDays(Math.floor(diff / 864e5));
    }
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          width: "80%",
          borderRadius: "2rem",
          y: 50,
          opacity: 0.8,
        },
        {
          width: "95%",
          borderRadius: "1.5rem",
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            end: "center center",
            scrub: 1.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex justify-center items-center overflow-hidden bg-surface-2"
      style={{ paddingTop: 'var(--section-padding-y)', paddingBottom: 'var(--section-padding-y)' }}
    >
      {/* Background decoration or context if needed, currently kept clean for the card effect */}

      <div
        ref={cardRef}
        className="relative z-10 mx-auto overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #0E1935 0%, #1A1E35 40%, #243574 100%)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Shine effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

        <div className="relative px-6 py-10 sm:px-12 sm:py-12 flex flex-col items-center text-center">

          {/* Title Group — same font/size style as About page CTA */}
          <div className="max-w-4xl mx-auto mb-8">
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "38.4px",
                letterSpacing: "-0.8px",
                lineHeight: 1.2,
                color: "#E2E8F4",
              }}
            >
              The November 2026 ISO 20022 Deadline Won't Wait<br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA, #3B82F6, #2563EB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Address Data Shouldn't Either
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Figtree', system-ui, sans-serif",
                fontSize: "16px",
                lineHeight: 1.65,
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Purpose-built address intelligence. 195 countries. 98%+ STP. <br className="hidden sm:block" />
              <span className="text-white/90 font-medium">10–16 weeks to production.</span>
            </p>
          </div>

          {/* Compact Countdown */}
          <div className="mb-8">
            <div
              className="inline-flex items-baseline gap-2 rounded-xl border border-white/10 px-6 py-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Outfit', system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#fff",
                  lineHeight: 1,
                  background: "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {days}
              </span>
              <span
                className="text-xs font-bold tracking-widest text-slate-400"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                DAYS LEFT
              </span>
            </div>
          </div>

          {/* Buttons - Compact */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="/demo"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)",
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                minWidth: "200px",
              }}
            >
              <span className="relative z-10">See Structured Resolution in Action</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* <a
              href="/roi-calculator"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 transition-all duration-300 hover:bg-white/5 hover:border-white/30"
              style={{
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "#E2E8F4",
                minWidth: "160px",
                textDecoration: "none",
              }}
            >
              Calculate Savings
            </a> */}
          </div>

        </div>
      </div>
    </section>
  );
}
