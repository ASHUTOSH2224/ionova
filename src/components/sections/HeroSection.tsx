import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ArsCard } from "@/components/sections/ArsCard";
import { cn } from "@/lib/utils";
import "@/styles/ars-card.css";

const ROTATION_INTERVAL_MS = 7000;

type HeroSlide = {
  id: string;
  headline: ReactNode;
  subtitle: string;
  tagline?: string;
  ctaLabel: string;
  ctaHref: string;
  ariaLabel: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: "address-intelligence",
    headline: (
      <>
        <span className="block mb-2">Achieve ISO 20022</span>
        <span className="block mb-2">compliance with</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-sky-200 to-white drop-shadow-sm block">
          Structured Addresses
        </span>
      </>
    ),
    subtitle:
      "Hybrid addresses pass minimum compliance. Structured addresses pass every test. ioNova delivers AI-native structured and hybrid address resolution for SWIFT CBPR+ and SEPA.",
    tagline:
      "AI-native coverage / rules-engine determinism / 30+ years of payments compliance experience.",
    ctaLabel: "Explore Address Intelligence",
    ctaHref: "/address-intelligence",
    ariaLabel: "Address Intelligence campaign",
  },
  {
    id: "view-demo",
    headline: (
      <>
        <span className="block mb-2">See structured address</span>
        <span className="block mb-2">resolution</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-sky-200 to-white drop-shadow-sm block">
          in action
        </span>
      </>
    ),
    subtitle:
      "Watch ioNova ARS convert unstructured payment addresses into ISO 20022-compliant output — live, deterministic, and auditable for every message.",
    ctaLabel: "View Demo",
    ctaHref: "/demo",
    ariaLabel: "View Demo campaign",
  },
  {
    id: "access-sandbox",
    headline: (
      <>
        <span className="block mb-2">Integrate via the</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-sky-200 to-white drop-shadow-sm block">
          Developer Portal
        </span>
      </>
    ),
    subtitle:
      "First API call in five minutes. 24 endpoints, a production-shaped sandbox, and RFC 9421 auth — connect your rails without replacing core systems.",
    ctaLabel: "Access Sandbox",
    ctaHref: "/ionova-ars/developers",
    ariaLabel: "Access Sandbox campaign",
  },
  {
    id: "readiness-report",
    headline: (
      <>
        <span className="block mb-2">Know your ISO 20022</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-sky-200 to-white drop-shadow-sm block">
          readiness score
        </span>
      </>
    ),
    subtitle:
      "Get your STP Readiness Index scored on a 10,000-message sample of your own traffic — full report in five working days, plus a 90-minute results consultation.",
    ctaLabel: "Get Readiness Report",
    ctaHref: "/readiness-assessment",
    ariaLabel: "Readiness Report campaign",
  },
];

export function HeroSection() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
    setIsPaused(true);
    window.setTimeout(() => setIsPaused(false), ROTATION_INTERVAL_MS * 2);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    import("gsap").then(({ default: gsap }) => {
      ctx = gsap.context(() => {
        gsap.from(leftColumnRef.current?.children || [], {
          y: 30,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        });

        gsap.from(rightImageRef.current, {
          x: 50,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        });
      });
    });

    return () => ctx?.revert();
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    let ctx: { revert: () => void } | undefined;
    import("gsap").then(({ default: gsap }) => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          content,
          { y: 16, opacity: 0.72 },
          { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }
        );
      });
    });

    return () => ctx?.revert();
  }, [activeSlide]);

  const slide = heroSlides[activeSlide];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-navy-950 flex flex-col justify-center pt-32 pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-28">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 xl:pl-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 translate-y-10 md:translate-y-12 lg:translate-y-14">
          <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start justify-center">
            <div ref={leftColumnRef} className="text-center lg:text-left w-full relative z-20">
              <div ref={contentRef} key={slide.id}>
                <h1 className="hero-page-heading mb-6 font-extrabold tracking-tight text-white">
                  {slide.headline}
                </h1>

                <p className="block max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed text-blue-100/90 md:text-xl font-medium tracking-normal mb-8">
                  {slide.subtitle}
                </p>

                {slide.tagline && (
                  <p className="mb-8 max-w-xl mx-auto lg:mx-0 text-sm md:text-base font-semibold text-sky-200/90">
                    {slide.tagline}
                  </p>
                )}

                <div
                  className={cn(
                    "flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 w-full",
                    slide.tagline ? "mb-8" : "mb-12 md:mb-16"
                  )}
                >
                  <Button
                    className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 hover:-translate-y-1 w-auto sm:w-auto"
                    asChild
                  >
                    <Link to={slide.ctaHref}>
                      {slide.ctaLabel}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div
                className="flex items-center justify-center lg:justify-start gap-2.5"
                role="tablist"
                aria-label="Hero campaigns"
              >
                {heroSlides.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeSlide === index}
                    aria-label={item.ariaLabel}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900",
                      activeSlide === index
                        ? "w-8 bg-sky-200"
                        : "w-2.5 bg-white/35 hover:bg-white/55"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 flex justify-center lg:justify-end">
            <div
              ref={rightImageRef}
              className="relative w-full max-w-[400px] lg:max-w-[560px] mx-auto lg:mx-0 will-change-transform"
            >
              <div className="absolute inset-0 bg-blue-500/30 blur-[60px] lg:blur-[100px] rounded-full scale-75 animate-pulse-slow"></div>
              <div className="relative z-10">
                <ArsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
