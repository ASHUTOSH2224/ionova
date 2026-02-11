import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  ArrowRight, 
  Target,
  CheckCircle,
  ShieldCheck,
  Zap,
  DollarSign,
  AlertCircle
} from "lucide-react";

const BusinessValue = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-bold text-sky-200">
              Compliance is the Floor. <span className="text-gradient-accent">Operational Excellence</span> is the Ceiling.
            </h1>
            <p className="text-lg text-sky-200/80">
              Move beyond "ticking the box." Use structured data to drive 98%+ STP and unlock millions in operational savings.
            </p>
          </div>
        </div>
      </section>

      {/* The Economics */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
                <DollarSign className="h-4 w-4" />
                Industry Economics
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                The $12 Billion Problem
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8 mb-8">
              <div className="space-y-6 text-text-label">
                <p className="text-lg">
                  According to <span className="font-semibold text-navy-950">SWIFT GPI data</span>, the global banking industry loses approximately <span className="font-semibold text-destructive">$12 billion annually</span> to failed cross-border payments caused by poor data quality.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-surface-2 p-4">
                    <div className="text-2xl font-bold text-navy-950 mb-2">~40%</div>
                    <p className="text-sm text-text-muted">Typical cross-border STP rate with unstructured data</p>
                  </div>
                  <div className="rounded-lg bg-surface-2 p-4">
                    <div className="text-2xl font-bold text-navy-950 mb-2">$25-50</div>
                    <p className="text-sm text-text-muted">Average cost per failed payment repair</p>
                  </div>
                  <div className="rounded-lg bg-surface-2 p-4">
                    <div className="text-2xl font-bold text-navy-950 mb-2">2-5 days</div>
                    <p className="text-sm text-text-muted">Typical delay for manual intervention</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 shadow-lg lg:p-8">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle className="h-8 w-8 text-destructive" />
                <h3 className="text-xl font-semibold text-navy-950">The Hidden Costs of Poor Data Quality</h3>
              </div>
              <ul className="space-y-3 text-text-label">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-semibold text-destructive mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-semibold text-navy-950">Manual Repair Teams:</span> Banks employ hundreds of operations staff dedicated solely to fixing rejected payments
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-semibold text-destructive mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-semibold text-navy-950">Customer Dissatisfaction:</span> Failed payments erode trust and lead to relationship attrition
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-semibold text-destructive mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-semibold text-navy-950">Reputational Risk:</span> Chronic payment failures damage bank reputation and competitive positioning
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-semibold text-destructive mt-0.5">
                    4
                  </div>
                  <div>
                    <span className="font-semibold text-navy-950">Opportunity Cost:</span> Operations teams focus on firefighting instead of strategic initiatives
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Excellence (STP) */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-500">
                <Zap className="h-4 w-4" />
                Operational Excellence
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                From 40% STP to 98%+ with Structured Data
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mb-8">
              {/* Before */}
              <div className="rounded-xl border border-destructive/20 bg-card p-6 shadow-lg">
                <div className="mb-4 text-sm font-medium text-destructive">BEFORE: Unstructured Data</div>
                <div className="mb-6 text-5xl font-bold text-navy-950">~40%</div>
                <p className="mb-4 text-sm text-text-muted">Cross-border STP rate</p>
                <div className="space-y-2 text-sm text-text-label">
                  <p className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>60% of payments require manual intervention</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>High operational costs</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>Customer delays and complaints</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-destructive">✗</span>
                    <span>Large repair teams needed</span>
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-teal-500/5 p-6 shadow-lg">
                <div className="mb-4 text-sm font-medium text-blue-600">AFTER: ioNova Structured Data</div>
                <div className="mb-6 text-5xl font-bold text-blue-600">98%+</div>
                <p className="mb-4 text-sm text-text-muted">Cross-border STP rate</p>
                <div className="space-y-2 text-sm text-text-label">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>98%+ of payments process automatically</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>Dramatic reduction in operational costs</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>Near-instant payment completion</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>Minimal manual intervention required</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-card p-6 shadow-xl lg:p-8">
              <h3 className="mb-4 text-xl font-semibold text-navy-950">Real-World Impact Example</h3>
              <p className="mb-4 text-text-label">
                A Tier 1 bank processing <span className="font-semibold text-navy-950">1 million cross-border payments per month</span> with a <span className="font-semibold text-navy-950">40% STP rate</span>:
              </p>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="rounded-lg bg-surface-2 p-4">
                  <div className="text-sm text-text-muted mb-2">Manual interventions per month</div>
                  <div className="text-2xl font-bold text-navy-950">600,000</div>
                </div>
                <div className="rounded-lg bg-surface-2 p-4">
                  <div className="text-sm text-text-muted mb-2">Monthly operational cost @ $40/fix</div>
                  <div className="text-2xl font-bold text-destructive">$24 Million</div>
                </div>
              </div>
              <div className="rounded-lg bg-blue-500/10 p-4">
                <p className="font-semibold text-blue-600 mb-2">With ioNova (98% STP):</p>
                <p className="text-sm text-text-label">
                  Manual interventions drop to <span className="font-semibold">20,000/month</span>, reducing operational costs to <span className="font-semibold text-blue-600">$800K/month</span> — a savings of <span className="font-semibold text-blue-600">$23.2M per month</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screening Precision */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
                <ShieldCheck className="h-4 w-4" />
                Sanctions Screening
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                Reduce False Positives by ~30%
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 mb-8">
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-navy-950">The "Paris" Problem</h3>
                <p className="mb-4 text-text-label">
                  Unstructured data makes it impossible to distinguish between:
                </p>
                <ul className="space-y-2 text-sm text-text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-navy-950 font-semibold">•</span>
                    <span><span className="font-semibold text-navy-950">Paris</span> the city in France</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy-950 font-semibold">•</span>
                    <span><span className="font-semibold text-navy-950">Paris</span> the city in Texas, USA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy-950 font-semibold">•</span>
                    <span><span className="font-semibold text-navy-950">Paris</span> as a person's name</span>
                  </li>
                </ul>
                <div className="mt-6 rounded-lg bg-destructive/5 p-4">
                  <p className="text-sm text-text-label">
                    <span className="font-semibold text-destructive">Result:</span> Thousands of false positive alerts that require manual review, overwhelming compliance teams.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-blue-500/20 bg-card p-6 shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-navy-950">ioNova Solution: Semantic Precision</h3>
                <p className="mb-4 text-text-label">
                  Structured data enables semantic disambiguation:
                </p>
                <div className="space-y-3 text-sm">
                  <div className="rounded-lg bg-blue-500/5 p-3">
                    <div className="font-semibold text-navy-950 mb-1">TownName: Paris</div>
                    <div className="text-text-muted">Country: FR → Geographic location, not a person</div>
                  </div>
                  <div className="rounded-lg bg-blue-500/5 p-3">
                    <div className="font-semibold text-navy-950 mb-1">TownName: Paris</div>
                    <div className="text-text-muted">CountrySubDivision: TX, Country: US → Different Paris</div>
                  </div>
                  <div className="rounded-lg bg-blue-500/5 p-3">
                    <div className="font-semibold text-navy-950 mb-1">Name: Paris Hilton</div>
                    <div className="text-text-muted">Entity Type: Individual → Person, not location</div>
                  </div>
                </div>
                <div className="mt-6 rounded-lg bg-blue-500/10 p-4">
                  <p className="text-sm text-text-label">
                    <span className="font-semibold text-blue-600">Result:</span> ~30% reduction in false positive sanctions alerts, allowing compliance teams to focus on genuine risks.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
              <h3 className="mb-4 text-xl font-semibold text-navy-950">Financial Impact of Improved Screening</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-surface-2 p-4">
                  <div className="text-2xl font-bold text-navy-950 mb-2">30%</div>
                  <p className="text-sm text-text-muted">Reduction in false positives</p>
                </div>
                <div className="rounded-lg bg-surface-2 p-4">
                  <div className="text-2xl font-bold text-navy-950 mb-2">$15-25</div>
                  <p className="text-sm text-text-muted">Average cost per false positive review</p>
                </div>
                <div className="rounded-lg bg-surface-2 p-4">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Millions</div>
                  <p className="text-sm text-text-muted">Annual savings in compliance costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Readiness */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-600">
                <Target className="h-4 w-4" />
                Future-Proofing
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                Structured Data: The Foundation for AI Automation
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8">
              <div className="space-y-6 text-text-label">
                <p>
                  The future of banking is <span className="font-semibold text-navy-950">AI-driven automation</span>—but AI cannot operate on unstructured, ambiguous data. Structured addresses are the <span className="font-semibold text-navy-950">prerequisite foundation</span> for:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-surface-2 p-4">
                    <h4 className="font-semibold text-navy-950 mb-2">Intelligent Payment Routing</h4>
                    <p className="text-sm text-text-muted">AI models that select optimal payment rails based on geographic and entity metadata</p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface-2 p-4">
                    <h4 className="font-semibold text-navy-950 mb-2">Predictive Risk Scoring</h4>
                    <p className="text-sm text-text-muted">Machine learning models that assess transaction risk using granular address components</p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface-2 p-4">
                    <h4 className="font-semibold text-navy-950 mb-2">Automated KYC Enhancement</h4>
                    <p className="text-sm text-text-muted">Dynamic entity verification that enriches customer profiles in real-time</p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface-2 p-4">
                    <h4 className="font-semibold text-navy-950 mb-2">Next-Gen Analytics</h4>
                    <p className="text-sm text-text-muted">Business intelligence powered by clean, structured data</p>
                  </div>
                </div>
                <div className="rounded-lg bg-blue-500/10 p-6">
                  <p className="font-semibold text-blue-600 mb-2">Strategic Insight:</p>
                  <p className="text-sm">
                    Banks that implement structured data now will be positioned to leverage next-generation AI capabilities. Those that don't will be locked into legacy manual processes, unable to compete on speed, cost, or customer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <TrendingUp className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h2 className="mb-4 font-bold text-navy-950">
              Turn Compliance into Competitive Advantage
            </h2>
            <p className="mb-8 text-lg text-text-muted">
              Calculate your ROI and see how much you could save with structured data.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/#roi-calculator">
                  Calculate Your ROI
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/address-intelligence/implementation">
                  See Implementation Timeline
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessValue;
