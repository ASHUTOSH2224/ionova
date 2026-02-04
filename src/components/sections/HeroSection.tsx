import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-teal-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-sky-200/5 px-4 py-2 text-sm">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span className="text-sky-200">ISO 27001 Certified • SOC 2 Type II Compliant</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-sky-200 md:text-5xl lg:text-6xl">
            Make Your Payment Data{" "}
            <span className="text-gradient-accent">ISO 20022 Ready</span>{" "}
            with AI-Native Address Resolution
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-8 max-w-2xl text-lg text-sky-200/80 md:text-xl">
            The November 2026 deadline is non-negotiable. Automatically convert unstructured 
            payment data into SWIFT CBPR+ and SEPA compliant structured addresses with{" "}
            <span className="font-semibold text-cyan-400">100% deterministic accuracy</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/demo">
                View a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <a href="#roi-calculator">Calculate Your ROI</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-sky-200/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              <span>Bank-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              <span>15-Week Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-cyan-400" />
              <span>Zero Hallucination Risk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
