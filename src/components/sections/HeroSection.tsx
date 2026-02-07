import { useLayoutEffect, useRef } from "react";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Calculator } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements stagger in
      gsap.from(leftColumnRef.current?.children || [], {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Animate image fade in and scale
      gsap.from(rightImageRef.current, {
        x: 50,
        opacity: 0,
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

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-navy-950 flex flex-col justify-center pt-28 pb-8 md:pt-24 md:pb-8">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-20 -left-20 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content Area */}
          <div className="w-full lg:w-6/12 flex flex-col items-center lg:items-start justify-center">
            <div ref={leftColumnRef} className="text-center lg:text-left w-full relative z-20">
              {/* Headline */}
              <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-[4rem]">
                <span className="block mb-2">Achieve ISO 20022 compliance with</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-sky-200 to-white drop-shadow-sm">
                  fully Structured Payment Addresses
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mb-8 max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed text-blue-100/90 md:text-xl md:mb-10 font-medium">
                AI-native address resolution for SWIFT CBPR+ and SEPA compliance. Done in weeks.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 md:gap-6 md:mb-16 w-full">
                <Button
                  className="h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                  asChild
                >
                  <Link to="/demo">
                    View a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  className="h-14 px-8 text-lg font-medium bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                  asChild
                >
                  <a href="#roi-calculator" className="flex items-center gap-3">
                    Calculate ROI
                    <div className="bg-white/20 p-1.5 rounded-full">
                      <Calculator className="h-4 w-4" />
                    </div>
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-blue-200/80">
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)]"></div>
                  <span>Bank-Grade Security</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)]"></div>
                  <span>15-Week Implementation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)]"></div>
                  <span>Zero Hallucination Risk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image / Globe */}
          <div className="absolute inset-x-0 top-[15%] lg:top-auto lg:inset-auto lg:static w-full lg:w-6/12 flex justify-center lg:justify-end opacity-30 lg:opacity-100 pointer-events-none lg:pointer-events-auto">
            <div ref={rightImageRef} className="relative w-[300px] md:w-[400px] lg:w-full max-w-[600px] will-change-transform">
              {/* Globe Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/30 blur-[60px] lg:blur-[100px] rounded-full scale-75 animate-pulse-slow"></div>

              <img
                src="/Logo/hero Image/hero.webp"
                alt="ISO 20022 Compliance Platform"
                width={900}
                height={900}
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
