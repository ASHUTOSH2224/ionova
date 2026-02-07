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
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex flex-col justify-center py-12 md:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[100px]" />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] pointer-events-none z-0">
        <div ref={rightImageRef} className="relative h-full will-change-transform">
          <img
            src="/Logo/hero Image/hero.webp"
            alt="ISO 20022 Compliance Platform"
            width={800}
            height={800}
            loading="eager"
            fetchPriority="high"
            className="h-full w-auto opacity-90 mix-blend-lighten object-contain"
            style={{
              maskImage: 'radial-gradient(circle at center, black 50%, transparent 95%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 95%)'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full mt-12 md:mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start w-full">
          {/* Content Area - Takes up left portion (Free Space) */}
          <div className="w-full lg:w-[65%] flex flex-col items-center justify-center px-4 md:px-8">
            <div ref={leftColumnRef} className="text-center max-w-4xl w-full">
              {/* Headline */}
              <h1 className="mb-6 text-3xl font-bold leading-[1.2] tracking-tight text-white md:text-5xl lg:text-6xl">
                <span className="block">Achieve ISO 20022 compliance with</span>
                <span className="block">fully Structured Payment</span>
                <span className="block">Addresses</span>
              </h1>

              {/* Subtitle */}
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-sky-200/80 md:text-xl md:mb-10">
                AI-native address resolution for SWIFT CBPR+ and SEPA compliance. Done in weeks.
              </p>

              {/* CTAs */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row mb-12 md:gap-6 md:mb-16">
                <Button
                  className="h-12 px-6 text-base font-bold bg-blue-500 hover:bg-blue-400 text-white rounded-xl border-b-[6px] border-blue-700 active:border-b-0 active:translate-y-1.5 transition-all shadow-xl md:h-14 md:px-8 md:text-lg"
                  asChild
                >
                  <Link to="/demo">
                    View a Demo
                  </Link>
                </Button>
                <Button
                  className="h-12 px-6 text-base font-bold tracking-wide uppercase bg-blue-50 hover:bg-white text-navy-950 rounded-xl border-2 border-navy-950 shadow-[4px_4px_0px_0px_#020617] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#020617] transition-all active:translate-y-[4px] active:shadow-none md:h-14 md:px-8 md:text-lg"
                  asChild
                >
                  <a href="#roi-calculator" className="flex items-center gap-3">
                    Calculate ROI
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 md:h-8 md:w-8">
                      <Calculator className="h-3 w-3 fill-white text-white md:h-4 md:w-4" />
                    </div>
                  </a>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-sky-200/60 md:gap-8 md:text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                  <span>Bank-Grade Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                  <span>15-Week Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                  <span>Zero Hallucination Risk</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
