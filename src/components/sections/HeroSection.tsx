import { useEffect, useRef, useState } from "react";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ArsCard } from "@/components/sections/ArsCard";
import "@/styles/ars-card.css";

const resolutionStages = ["Structured", "Verified", "Enriched"];

export function HeroSection() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    let ctx: any;
    import("gsap").then(({ default: gsap }) => {
      ctx = gsap.context(() => {
        // Animate text elements stagger in (no opacity — keeps SSR content visible for fast LCP)
        gsap.from(leftColumnRef.current?.children || [], {
          y: 30,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2
        });

        // Animate image slide in (no opacity — keeps SSR content visible for fast LCP)
        gsap.from(rightImageRef.current, {
          x: 50,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5
        });
      });
    });

    return () => ctx?.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      setActiveStage((current) => (current + 1) % resolutionStages.length);
    }, 3400);

    return () => window.clearTimeout(timer);
  }, [activeStage]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-navy-950 flex flex-col justify-center pt-32 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 xl:pl-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 translate-y-10 md:translate-y-12 lg:translate-y-14">
          {/* Content Area */}
          <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start justify-center">
            <div ref={leftColumnRef} className="text-center lg:text-left w-full relative z-20">
              {/* Headline */}
              <h1 className="hero-page-heading mb-6 font-extrabold tracking-tight text-white">
                <span className="block mb-2">Do it once.</span>
                <span className="block mb-2">Do it fully.</span>
                <span className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-white/15 pt-5 text-[0.48em] font-bold leading-tight tracking-tight lg:justify-start">
                  {resolutionStages.map((stage, index) => (
                    <span key={stage} className="flex items-center gap-3">
                      <span
                        className={`relative text-sky-200/70 transition-colors duration-500 ${
                          activeStage === index ? "text-white drop-shadow-[0_0_18px_rgba(95,207,208,0.45)]" : ""
                        }`}
                      >
                        {stage}
                        <span
                          className={`absolute -bottom-2 left-0 h-0.5 rounded-full bg-cyan-300 transition-all duration-500 ${
                            activeStage === index ? "w-full opacity-100" : "w-4 opacity-0"
                          }`}
                        />
                      </span>
                      {index < resolutionStages.length - 1 && (
                        <ArrowRight className="h-4 w-4 shrink-0 text-blue-300/50 md:h-5 md:w-5" />
                      )}
                    </span>
                  ))}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="block max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed text-blue-100/90 md:text-xl font-medium tracking-normal mb-8">
                Hybrid addresses satisfy the rulebook. Structured, verified and enriched addresses also hold up in screening, settlement and reporting. ioNova ARS parses free text into its ISO 20022 elements, verifies each against an authoritative source and reason-codes every correction, for SWIFT CBPR+ and SEPA.
              </p>

              <p className="mb-8 max-w-xl mx-auto lg:mx-0 text-sm md:text-base font-semibold text-sky-200/90">
                AI-native coverage / rules-engine determinism / 30+ years of payments compliance experience.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 md:gap-6 md:mb-16 w-full">
                <Button
                  className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 hover:-translate-y-1 w-auto sm:w-auto"
                  asChild
                >
                  <Link to="/demo">
                    See ioNova in action
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Link
                  to="/readiness-assessment"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-blue-100/85 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 md:min-h-14 md:text-base"
                >
                  <span className="border-b border-blue-100/35 pb-0.5 transition-colors group-hover:border-white/80">
                    ISO 20022 STP Readiness Assessment
                  </span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {/* <Button
                  className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-medium bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full transition-all duration-300 hover:-translate-y-1 w-auto sm:w-auto"
                  asChild
                >
                  <Link to="/roi-calculator" className="flex items-center gap-3">
                    Calculate your Savings
                    <div className="bg-white/20 p-1.5 rounded-full">
                      <Calculator className="h-4 w-4" />
                    </div>
                  </Link>
                </Button> */}
              </div>

              {/* Metric boxes */}
              {/*<div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {[
                  { value: "98%", label: "STP Rates" },
                  { value: "246", label: "Countries" },
                  { value: "2–4", label: "Weeks to Production" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-col items-center justify-center rounded-[6px] border border-white/15 bg-white/5 backdrop-blur-md px-6 py-3 min-w-[120px]"
                  >
                    <span className="text-2xl font-extrabold text-white">{metric.value}</span>
                    <span className="text-xs font-medium text-blue-200/80 uppercase tracking-wider mt-1">{metric.label}</span>
                  </div>
                ))}
              </div>
              */}
            </div>
          </div>

          {/* Right Visual / Animated ARS Engine Card */}
          <div className="w-full lg:w-6/12 flex justify-center lg:justify-end">
            <div ref={rightImageRef} className="relative w-full max-w-[400px] lg:max-w-[560px] mx-auto lg:mx-0 will-change-transform">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/30 blur-[60px] lg:blur-[100px] rounded-full scale-75 animate-pulse-slow"></div>

              <div className="relative z-10">
                <ArsCard activeStage={activeStage} onStageChange={setActiveStage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
