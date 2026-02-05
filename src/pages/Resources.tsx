import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

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
            {[
              {
                title: "The Legacy Data Trap: From Bombay to Mumbai",
                excerpt: "Why historical name changes are the silent killer of straight-through processing rates.",
                slug: "legacy-data-trap"
              },
              {
                title: "Beyond Compliance: The ROI of Structured Data",
                excerpt: "How to turn a compliance cost into a $5M+ annual operational advantage.",
                slug: "roi-structured-data"
              },
              {
                title: "Why Generic Parsers Fail at Address Resolution (The Paris Problem)",
                excerpt: "Understanding the difference between postal validation and financial entity verification.",
                slug: "paris-problem"
              }
            ].map((post, i) => (
              <article
                key={i}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-48 bg-navy-950/5 flex items-center justify-center">
                  <FileText className="h-12 w-12 text-blue-200" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-navy-950 group-hover:text-blue-600">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/resources`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
