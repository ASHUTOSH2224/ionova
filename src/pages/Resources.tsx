import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Clock } from "lucide-react";

const Resources = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-sky-200 md:text-5xl">
              Resources & Insights
            </h1>
            <p className="text-lg text-sky-200/80">
              Education and thought leadership on ISO 20022 compliance and 
              payment data transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Whitepaper */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
              <div className="bg-gradient-primary p-6 lg:p-8">
                <div className="flex items-center gap-3 text-primary-foreground">
                  <FileText className="h-8 w-8" />
                  <span className="text-sm font-medium uppercase tracking-wider">Featured Whitepaper</span>
                </div>
              </div>
              
              <div className="p-6 lg:p-8">
                <h2 className="mb-4 text-2xl font-bold text-navy-950 md:text-3xl">
                  The Financial Y2K Survival Guide
                </h2>
                <p className="mb-2 text-lg font-medium text-blue-600">
                  Solving the ISO 20022 Address Resolution Challenge
                </p>
                <p className="mb-6 text-text-muted">
                  November 2026 isn't just a deadline; it's a binary event. Learn the specific 
                  requirements of SWIFT CBPR+ and SEPA, and why "Hybrid" addresses are only 
                  a temporary fallback.
                </p>
                
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button variant="hero" size="lg">
                    Download PDF
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/demo">Request a Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-navy-950 md:text-3xl">
              Insights & Articles
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Article 1 */}
            <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-gradient-primary" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-text-muted">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-950 group-hover:text-blue-600">
                  The Legacy Data Trap: From Bombay to Mumbai
                </h3>
                <p className="text-sm text-text-muted">
                  How Temporal Name Mapping ensures payments referencing obsolete city 
                  names like "Calcutta" or "Madras" settle correctly.
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-gradient-accent" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-text-muted">
                  <Clock className="h-4 w-4" />
                  <span>12 min read</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-950 group-hover:text-blue-600">
                  Beyond Compliance: The ROI of Structured Data
                </h3>
                <p className="text-sm text-text-muted">
                  How accurate address resolution reduces Financial Crime false positives 
                  and optimizes Trade Finance operations.
                </p>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="h-48 bg-gradient-hero" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-text-muted">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-navy-950 group-hover:text-blue-600">
                  Why Generic Parsers Fail at Address Resolution
                </h3>
                <p className="text-sm text-text-muted">
                  A deep dive into geographic disambiguation and multi-signal analysis 
                  for banking-grade accuracy.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-8 text-center text-text-muted">
            <p>More articles coming soon...</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
