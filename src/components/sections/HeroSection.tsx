import { useEffect, useRef } from "react";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

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

        // Continuous floating animation for the image
        gsap.to(rightImageRef.current, {
          y: -20,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 2 // Start floating after entrance
        });
      });
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-navy-950 flex flex-col justify-center pt-32 pb-6 md:pt-24 lg:pt-28 md:pb-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 xl:pl-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Area */}
          <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start justify-center">
            <div ref={leftColumnRef} className="text-center lg:text-left w-full relative z-20">
              {/* Headline */}
              <h1 className="hero-page-heading mb-6 font-extrabold tracking-tight text-white">
                <span className="block mb-2">Achieve ISO 20022 compliance with </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-sky-200 to-white drop-shadow-sm block">
                  fully Structured Payment Addresses
                </span>
              </h1>

              {/* Subtitle */}
              <p className="block max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed text-blue-100/90 md:text-xl font-medium tracking-normal mb-8">
                Hybrid addresses pass minimum compliance. Structured addresses pass every test. ioNova delivers AI-native structured address resolution for SWIFT CBPR+ and SEPA
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
                  { value: "98%+", label: "STP Rates" },
                  { value: "195", label: "Countries" },
                  { value: "10–16", label: "Weeks to Production" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-col items-center justify-center rounded-xl border border-white/15 bg-white/5 backdrop-blur-md px-6 py-3 min-w-[120px]"
                  >
                    <span className="text-2xl font-extrabold text-white">{metric.value}</span>
                    <span className="text-xs font-medium text-blue-200/80 uppercase tracking-wider mt-1">{metric.label}</span>
                  </div>
                ))}
              </div>
              */}
            </div>
          </div>

          {/* Right Image / Globe */}
          <div className="absolute inset-x-0 top-[15%] lg:top-auto lg:inset-auto lg:static w-full lg:w-6/12 flex justify-center lg:justify-end opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
            <div ref={rightImageRef} className="relative w-[300px] md:w-[400px] lg:w-full max-w-[600px] will-change-transform">
              {/* Globe Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/30 blur-[60px] lg:blur-[100px] rounded-full scale-75 animate-pulse-slow"></div>

              <img
                src="/Logo/hero Image/hero.webp"
                srcSet="/Logo/hero%20Image/hero-480w.webp 480w, /Logo/hero%20Image/hero-768w.webp 768w, /Logo/hero%20Image/hero.webp 1024w"
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
                alt="ISO 20022 Compliance Platform"
                width={1024}
                height={1024}
                loading="eager"
                fetchPriority="high"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
