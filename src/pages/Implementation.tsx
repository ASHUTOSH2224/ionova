import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Workflow, 
  ArrowRight, 
  CheckCircle,
  Layers,
  Clock,
  AlertCircle,
  BarChart3,
  Shield
} from "lucide-react";

const Implementation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-bold text-sky-200">
              One Integration. <span className="text-gradient-accent">Full Compliance.</span> Zero Legacy Overhaul.
            </h1>
            <p className="text-lg text-sky-200/80">
              Achieve compliance in 10-16 weeks without ripping and replacing your core payment engine.
            </p>
          </div>
        </div>
      </section>

      {/* The "Sidecar" Architecture */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
                <Layers className="h-4 w-4" />
                Integration Architecture
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                The "Sidecar" Model: No Core System Replacement Required
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8 mb-8">
              <p className="mb-6 text-lg text-text-label">
                ioNova sits <span className="font-semibold text-navy-950">alongside your existing payment infrastructure</span> via a lightweight API integration. You don't need to replace or modify your core payment engines (MuleSoft, Volante, Jack Henry, etc.).
              </p>

              {/* Architecture Diagram */}
              <div className="rounded-xl bg-surface-2 p-6 mb-6">
                <div className="space-y-4">
                  {/* Legacy Systems */}
                  <div>
                    <div className="text-sm font-medium text-text-muted mb-3">Your Existing Systems</div>
                    <div className="grid gap-3 md:grid-cols-3">
                      <div className="rounded-lg border border-border bg-card p-4 text-center">
                        <div className="text-sm font-semibold text-navy-950">Core Banking</div>
                        <div className="text-xs text-text-muted mt-1">Temenos, Finastra, etc.</div>
                      </div>
                      <div className="rounded-lg border border-border bg-card p-4 text-center">
                        <div className="text-sm font-semibold text-navy-950">Payment Hubs</div>
                        <div className="text-xs text-text-muted mt-1">MuleSoft, Volante, etc.</div>
                      </div>
                      <div className="rounded-lg border border-border bg-card p-4 text-center">
                        <div className="text-sm font-semibold text-navy-950">SWIFT Gateway</div>
                        <div className="text-xs text-text-muted mt-1">Alliance, Alliance Cloud</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-blue-500 rotate-90" />
                  </div>

                  {/* ioNova Integration Layer */}
                  <div className="rounded-lg border-2 border-blue-500 bg-blue-500/10 p-6">
                    <div className="text-center mb-4">
                      <div className="text-lg font-bold text-blue-600">ioNova Address Resolution Engine</div>
                      <div className="text-sm text-text-muted mt-1">Lightweight API Integration</div>
                    </div>
                    <div className="grid gap-2 md:grid-cols-4 text-xs">
                      <div className="rounded bg-background/80 p-2 text-center">
                        <div className="font-medium text-navy-950">Ingest</div>
                      </div>
                      <div className="rounded bg-background/80 p-2 text-center">
                        <div className="font-medium text-navy-950">Parse</div>
                      </div>
                      <div className="rounded bg-background/80 p-2 text-center">
                        <div className="font-medium text-navy-950">Validate</div>
                      </div>
                      <div className="rounded bg-background/80 p-2 text-center">
                        <div className="font-medium text-navy-950">Output</div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="h-6 w-6 text-blue-500 rotate-90" />
                  </div>

                  {/* Output */}
                  <div>
                    <div className="text-sm font-medium text-text-muted mb-3">Structured Output</div>
                    <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                      <div className="text-sm font-medium text-navy-950 mb-2">ISO 20022 Compliant Address</div>
                      <code className="text-xs text-text-label">
                        StreetName, BuildingNumber, PostCode, TownName, Country...
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-border bg-surface-2 p-4">
                  <CheckCircle className="h-6 w-6 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-navy-950 mb-2">No Rip & Replace</h4>
                  <p className="text-sm text-text-muted">Your existing systems remain untouched. ioNova operates as a non-invasive middleware layer.</p>
                </div>
                <div className="rounded-lg border border-border bg-surface-2 p-4">
                  <CheckCircle className="h-6 w-6 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-navy-950 mb-2">API-First Integration</h4>
                  <p className="text-sm text-text-muted">RESTful APIs with enterprise-grade SLAs. Supports both real-time and batch processing modes.</p>
                </div>
                <div className="rounded-lg border border-border bg-surface-2 p-4">
                  <CheckCircle className="h-6 w-6 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-navy-950 mb-2">On-Premise or Cloud</h4>
                  <p className="text-sm text-text-muted">Deploy in your VPC, on-premise, or air-gapped environment. Full data sovereignty.</p>
                </div>
                <div className="rounded-lg border border-border bg-surface-2 p-4">
                  <CheckCircle className="h-6 w-6 text-blue-500 mb-3" />
                  <h4 className="font-semibold text-navy-950 mb-2">Zero Latency Impact</h4>
                  <p className="text-sm text-text-muted">Sub-100ms response times. Deterministic runtime ensures no GenAI token latency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Implementation Effort Is the Same */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-500">
                <BarChart3 className="h-4 w-4" />
                Cost-Benefit Analysis
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                Hybrid vs. Full Structured: Same Effort, Different Outcomes
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8 mb-8">
              <p className="mb-6 text-lg text-text-label">
                A common misconception is that implementing "Hybrid" addresses (partially structured, with unstructured fallback) is somehow "easier" or "faster" than implementing fully structured addresses.
              </p>
              <div className="rounded-lg bg-amber-500/10 p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-6 w-6 shrink-0 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-600 mb-2">The Reality:</p>
                    <p className="text-sm text-text-label">
                      The integration lift is <span className="font-semibold text-navy-950">identical</span>. You still need to:
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-navy-950 mb-3">Integration Requirements (Both Cases)</h4>
                  {[
                    "Modify payment message schema",
                    "Update API endpoints",
                    "Test integration with legacy systems",
                    "Train operations teams",
                    "Conduct UAT and validation"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-text-label">
                      <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                  <h4 className="font-semibold text-blue-600 mb-3">The Logical Choice</h4>
                  <p className="text-sm text-text-label mb-4">
                    Since the effort is the same, why not implement the solution that delivers:
                  </p>
                  <ul className="space-y-2 text-sm text-text-label">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>98%+ STP (not 40-60%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>Full regulatory compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>AI-ready infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      <span>No re-implementation in 1-2 years</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 shadow-lg lg:p-8">
              <h3 className="mb-4 text-xl font-semibold text-navy-950">The Hidden Cost of "Hybrid-Only"</h3>
              <p className="mb-4 text-text-label">
                Banks that choose "Hybrid" as their end-state (rather than a temporary transition) will face:
              </p>
              <ul className="space-y-3 text-sm text-text-label">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-semibold text-destructive mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-semibold text-navy-950">Another Integration Effort in 1-2 Years:</span> When regulators tighten enforcement or competitors gain STP advantages, you'll need to re-implement
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-semibold text-destructive mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-semibold text-navy-950">Persistent Low STP Rates:</span> You'll continue paying millions in manual repair costs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs font-semibold text-destructive mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-semibold text-navy-950">Competitive Disadvantage:</span> Rivals with full structured data will outpace you on speed, cost, and customer experience
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Process */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400">
                <Clock className="h-4 w-4" />
                Implementation Timeline
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                From Kickoff to Go-Live in 10-16 Weeks
              </h2>
            </div>

            <div className="space-y-6">
              {/* Week 1-4 */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500 text-primary-foreground font-semibold">
                    1-4
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-navy-950">Discovery & Analysis</h3>
                      <span className="text-sm text-text-muted">(4 Weeks)</span>
                    </div>
                    <p className="text-text-label mb-4">
                      We analyze your existing payment data, identify common patterns, and map integration points with your legacy systems.
                    </p>
                    <div className="grid gap-2 md:grid-cols-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-text-muted">Data profiling & quality assessment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-text-muted">System architecture review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-text-muted">Compliance gap analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-blue-500" />
                        <span className="text-text-muted">Integration design</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 5-10 */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-500 text-primary-foreground font-semibold">
                    5-10
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-navy-950">Integration & Configuration</h3>
                      <span className="text-sm text-text-muted">(6 Weeks)</span>
                    </div>
                    <p className="text-text-label mb-4">
                      We deploy ioNova in your environment (cloud or on-premise) and configure the engine to your specific data patterns.
                    </p>
                    <div className="grid gap-2 md:grid-cols-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        <span className="text-text-muted">API endpoint setup</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        <span className="text-text-muted">Custom rule configuration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        <span className="text-text-muted">Batch processing setup</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        <span className="text-text-muted">Confidence thresholding</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 11-16 */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-primary-foreground font-semibold">
                    11-16
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-navy-950">Testing & Go-Live</h3>
                      <span className="text-sm text-text-muted">(6 Weeks)</span>
                    </div>
                    <p className="text-text-label mb-4">
                      We run comprehensive testing (UAT, regression, performance), train your teams, and transition to production.
                    </p>
                    <div className="grid gap-2 md:grid-cols-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span className="text-text-muted">UAT & edge case validation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span className="text-text-muted">Performance & load testing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span className="text-text-muted">Operations team training</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400" />
                        <span className="text-text-muted">Phased production rollout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 shadow-lg lg:p-8">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 shrink-0 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-navy-950 mb-2">Ongoing Support & Continuous Learning</h3>
                  <p className="text-sm text-text-label">
                    After go-live, ioNova's Agentic Learning System continues to improve. As new edge cases appear, the system learns and adapts—with human oversight—ensuring accuracy improves over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automatic Fallback */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-600">
                <Workflow className="h-4 w-4" />
                Intelligent Handling
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                The Automatic Fallback: Confidence-Based Routing
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8">
              <p className="mb-6 text-lg text-text-label">
                ioNova doesn't operate in binary "pass/fail" mode. Every address resolution receives a <span className="font-semibold text-navy-950">confidence score (0.00 to 1.00)</span>.
              </p>

              <div className="space-y-4 mb-6">
                {/* High Confidence */}
                <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-primary-foreground">
                      0.95+
                    </div>
                    <h4 className="font-semibold text-navy-950">High Confidence: Auto-Process</h4>
                  </div>
                  <p className="text-sm text-text-muted">
                    Addresses with confidence ≥0.95 are automatically approved and passed to the payment engine. No human review required.
                  </p>
                </div>

                {/* Medium Confidence */}
                <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-primary-foreground">
                      0.80-0.94
                    </div>
                    <h4 className="font-semibold text-navy-950">Medium Confidence: Human Review</h4>
                  </div>
                  <p className="text-sm text-text-muted">
                    Ambiguous addresses are flagged for quick human verification. The system provides context and suggestions to expedite review.
                  </p>
                </div>

                {/* Low Confidence */}
                <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-primary-foreground">
                      &lt;0.80
                    </div>
                    <h4 className="font-semibold text-navy-950">Low Confidence: Fallback to Hybrid</h4>
                  </div>
                  <p className="text-sm text-text-muted">
                    If ioNova cannot confidently parse an address, it automatically routes the payment as "Hybrid" (unstructured fallback), ensuring the payment is not blocked.
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-blue-500/10 p-6">
                <p className="font-semibold text-blue-600 mb-2">Zero Payment Blockage Guarantee:</p>
                <p className="text-sm text-text-label">
                  ioNova ensures that no payment is ever rejected due to address resolution uncertainty. Low-confidence cases fall back gracefully to Hybrid format until November 2026—and by then, the Agentic Learning System will have learned those edge cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Workflow className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h2 className="mb-4 font-bold text-navy-950">
              Ready to Start Your Implementation?
            </h2>
            <p className="mb-8 text-lg text-text-muted">
              Schedule a technical deep-dive to discuss your specific integration requirements.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/demo">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/address-intelligence/why-purpose-built">
                  Explore the Technology
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

export default Implementation;
