import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle, Calculator } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex flex-col justify-center py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 mt-20">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          {/* <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-sky-200/5 px-6 py-2.5 text-sm backdrop-blur-sm transition-all hover:bg-sky-200/10">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span className="text-sky-100 font-medium">ISO 27001 Certified • SOC 2 Type II Compliant</span>
          </div> */}

          {/* Headline */}
          <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Make Your Payment Data <br className="hidden lg:block" />
            <span className="text-gradient-accent">ISO 20022 Ready</span> <br />
            with AI-Native Address Resolution
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-sky-200/80">
            ioNova is the purpose-built platform helping banks achieve full ISO 20022 compliance within weeks. We convert enterprise-wide unstructured data into SWIFT CBPR+ and SEPA compliant structured addresses in real-time.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row mb-16">
            <Button
              className="h-14 px-8 text-lg font-bold bg-blue-500 hover:bg-blue-400 text-white rounded-xl border-b-[6px] border-blue-700 active:border-b-0 active:translate-y-1.5 transition-all shadow-xl"
              asChild
            >
              <Link to="/demo">
                View a Demo
              </Link>
            </Button>
            <Button
              className="h-14 px-8 text-lg font-bold tracking-wide uppercase bg-blue-50 hover:bg-white text-navy-950 rounded-xl border-2 border-navy-950 shadow-[4px_4px_0px_0px_#020617] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#020617] transition-all active:translate-y-[4px] active:shadow-none"
              asChild
            >
              <a href="#roi-calculator" className="flex items-center gap-3">
                Calculate ROI
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                  <Calculator className="h-4 w-4 fill-white text-white" />
                </div>
              </a>
            </Button>
          </div>

          {/* Trust indicators - Simplified */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-sky-200/60">
            <div className="flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
              <span>Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
              <span>15-Week Implementation</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
              <span>Zero Hallucination Risk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
