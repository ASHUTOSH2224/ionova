import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-gradient-hero py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-sky-200 md:text-4xl lg:text-5xl">
            Ready to Future-Proof Your Payments?
          </h2>
          <p className="mb-8 text-lg text-sky-200/80">
            Don't wait until November 2026. Start your structured address journey today
            and deploy a production-ready solution in as little as 15 weeks.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <Link to="/demo">
                Schedule Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline-light" size="xl" asChild>
              <a href="#roi-calculator">See Your ROI</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
