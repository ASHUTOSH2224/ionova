import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Cpu, 
  ArrowRight, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Zap,
  Brain,
  Shield,
  Clock
} from "lucide-react";

const WhyPurposeBuilt = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-sky-200 md:text-5xl lg:text-6xl">
              Postal Validation ≠ <span className="text-gradient-accent">Payment Validation</span>
            </h1>
            <p className="text-lg text-sky-200/80">
              Why generic address tools and off-the-shelf LLMs fail to meet the rigorous demands of cross-border payments.
            </p>
          </div>
        </div>
      </section>

      {/* The 6 Capabilities Generic Tools Lack */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
                <Cpu className="h-4 w-4" />
                Purpose-Built Capabilities
              </div>
              <h2 className="mb-6 text-3xl font-bold text-navy-950 md:text-4xl">
                The 6 Capabilities Generic Tools Lack
              </h2>
              <p className="text-lg text-text-muted">
                ioNova is differentiated by deep banking logic that generic postal validation tools and LLMs cannot replicate.
              </p>
            </div>

            <div className="space-y-6">
              {/* Capability 1: Financial ID Preservation */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-navy-950">1. Financial ID Preservation</h3>
                    <p className="mb-4 text-text-label">
                      Payment addresses often contain critical financial identifiers (LEI, IBAN, BIC, SWIFT codes, etc.) embedded within address blocks. Generic parsers don't understand these identifiers and often corrupt or discard them.
                    </p>
                    <div className="rounded-lg bg-blue-500/5 p-4">
                      <p className="text-sm font-medium text-blue-600 mb-2">ioNova Approach:</p>
                      <p className="text-sm text-text-label">
                        We validate <span className="font-semibold text-navy-950">50+ financial identifiers</span> before parsing begins. If a LEI or IBAN is detected, it's protected and correctly mapped to its designated field—never discarded or corrupted.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capability 2: Geographic Disambiguation */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-500/10">
                    <Zap className="h-6 w-6 text-teal-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-navy-950">2. Geographic Disambiguation (The "Paris Problem")</h3>
                    <p className="mb-4 text-text-label">
                      There are 28 cities named "Paris" worldwide. Generic geocoding tools often guess incorrectly or return the most common match (Paris, France)—regardless of context.
                    </p>
                    <div className="rounded-lg bg-teal-500/5 p-4">
                      <p className="text-sm font-medium text-teal-500 mb-2">ioNova Approach:</p>
                      <p className="text-sm text-text-label">
                        We use <span className="font-semibold text-navy-950">postal format patterns, street name dictionaries, and regional context clues</span> to distinguish between "Paris, TX, USA" and "Paris, Île-de-France, France" with 100% accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capability 3: Historical Name Resolution */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                    <Brain className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-navy-950">3. Historical Name Resolution</h3>
                    <p className="mb-4 text-text-label">
                      Legacy banking systems often contain outdated city names ("Bombay" instead of "Mumbai", "Leningrad" instead of "St. Petersburg"). Generic tools don't recognize these historical mappings.
                    </p>
                    <div className="rounded-lg bg-cyan-400/5 p-4">
                      <p className="text-sm font-medium text-cyan-400 mb-2">ioNova Approach:</p>
                      <p className="text-sm text-text-label">
                        We maintain a <span className="font-semibold text-navy-950">bidirectional mapping of 10,000+ historical city names</span>, ensuring "Bombay" is correctly resolved to "Mumbai" with Country: IN and appropriate postal code validation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capability 4: Data De-Duplication */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/10">
                    <Cpu className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-navy-950">4. Intelligent Data De-Duplication</h3>
                    <p className="mb-4 text-text-label">
                      Unstructured address blocks often contain redundant information ("123 Main Street, Main Street, New York"). Generic parsers duplicate these fields, causing validation errors.
                    </p>
                    <div className="rounded-lg bg-purple-500/5 p-4">
                      <p className="text-sm font-medium text-purple-600 mb-2">ioNova Approach:</p>
                      <p className="text-sm text-text-label">
                        Our <span className="font-semibold text-navy-950">semantic de-duplication engine</span> detects and removes redundant elements while preserving unique data, ensuring clean, compliant output.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capability 5: Full Explainability */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                    <Shield className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-navy-950">5. Full Explainability & Audit Trails</h3>
                    <p className="mb-4 text-text-label">
                      Regulators demand explainability. Generic LLMs and "black box" parsers cannot provide field-by-field justifications for their output.
                    </p>
                    <div className="rounded-lg bg-amber-500/5 p-4">
                      <p className="text-sm font-medium text-amber-600 mb-2">ioNova Approach:</p>
                      <p className="text-sm text-text-label">
                        Every field transformation is logged with the <span className="font-semibold text-navy-950">specific rule citation applied</span>. Auditors can trace exactly why "123 Main St" became "StreetName: Main Street, BuildingNumber: 123".
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Capability 6: Confidence Scoring */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                    <CheckCircle className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-navy-950">6. Confidence Scoring & Threshold-Based Routing</h3>
                    <p className="mb-4 text-text-label">
                      Generic tools operate in binary "success/failure" mode. There's no nuance for "probably correct" vs. "definitely correct."
                    </p>
                    <div className="rounded-lg bg-blue-500/5 p-4">
                      <p className="text-sm font-medium text-blue-600 mb-2">ioNova Approach:</p>
                      <p className="text-sm text-text-label">
                        Every address receives a <span className="font-semibold text-navy-950">confidence score (0.00 to 1.00)</span>. Scores ≥0.95 auto-process, 0.80-0.94 trigger quick human review, and &lt;0.80 fallback to Hybrid—minimizing manual workload while ensuring accuracy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Postal Validation Fails at Payments */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
                <AlertTriangle className="h-4 w-4" />
                Critical Distinction
              </div>
              <h2 className="mb-6 text-3xl font-bold text-navy-950 md:text-4xl">
                Why Postal Validation Fails at Payments
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8 mb-8">
              <div className="space-y-6 text-text-label">
                <p className="text-lg">
                  Postal validation tools (like Google Maps API, UPS Address Validation, or USPS APIs) are designed for one purpose: <span className="font-semibold text-navy-950">ensuring a package can be physically delivered</span>.
                </p>
                <p>
                  Payment compliance cares about something fundamentally different: <span className="font-semibold text-navy-950">legal entity verification and regulatory data quality standards</span>.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Postal Validation */}
              <div className="rounded-xl border border-destructive/20 bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-destructive" />
                  <h3 className="text-xl font-semibold text-navy-950">Postal Validation Focus</h3>
                </div>
                <ul className="space-y-3 text-sm text-text-label">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold mt-0.5">✗</span>
                    <span>Delivery point accuracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold mt-0.5">✗</span>
                    <span>Geocoding coordinates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold mt-0.5">✗</span>
                    <span>Standardizing abbreviations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold mt-0.5">✗</span>
                    <span>No understanding of financial IDs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold mt-0.5">✗</span>
                    <span>No audit trails or explainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive font-bold mt-0.5">✗</span>
                    <span>Not designed for ISO 20022 compliance</span>
                  </li>
                </ul>
              </div>

              {/* Payment Validation */}
              <div className="rounded-xl border border-blue-500/20 bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-semibold text-navy-950">Payment Validation Focus (ioNova)</h3>
                </div>
                <ul className="space-y-3 text-sm text-text-label">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>Legal entity verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>Financial ID preservation (LEI, IBAN, BIC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>ISO 20022 structured field mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>Full audit trails with rule citations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>Confidence scoring for risk management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 shrink-0 text-blue-500 mt-0.5" />
                    <span>SWIFT CBPR+ and SEPA compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LLMs Fail at Payment Parsing */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600">
                <Brain className="h-4 w-4" />
                The LLM Problem
              </div>
              <h2 className="mb-6 text-3xl font-bold text-navy-950 md:text-4xl">
                Why Generic LLMs Fail at Payment Parsing
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              {/* Hallucination Risk */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-destructive" />
                  <h3 className="text-xl font-semibold text-navy-950">1. The "Hallucination" Problem</h3>
                </div>
                <p className="mb-4 text-text-label">
                  Off-the-shelf LLMs (GPT, Llama, Claude, etc.) are probabilistic. They generate plausible-sounding outputs based on statistical patterns—but there's no guarantee of factual accuracy.
                </p>
                <div className="rounded-lg bg-destructive/5 p-4">
                  <p className="text-sm font-medium text-destructive mb-2">Critical Risk for Payments:</p>
                  <p className="text-sm text-text-label">
                    An LLM might confidently return "TownName: Paris, Country: FR" when the correct answer is "TownName: Paris, CountrySubDivision: TX, Country: US." In regulated banking, a single incorrect field can cause payment rejection or compliance failure.
                  </p>
                </div>
              </div>

              {/* Latency */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <Clock className="h-8 w-8 text-amber-600" />
                  <h3 className="text-xl font-semibold text-navy-950">2. Token Latency & Cost</h3>
                </div>
                <p className="mb-4 text-text-label">
                  Generic LLMs operate on a token-based inference model. Each API call incurs latency (typically 500ms - 3 seconds) and per-token costs.
                </p>
                <div className="rounded-lg bg-amber-500/5 p-4">
                  <p className="text-sm font-medium text-amber-600 mb-2">Scalability Problem:</p>
                  <p className="text-sm text-text-label">
                    A Tier 1 bank processing 1 million payments per day cannot afford 500ms+ latency per transaction. ioNova's deterministic runtime delivers <span className="font-semibold text-navy-950">sub-100ms response times</span> with zero per-transaction token cost.
                  </p>
                </div>
              </div>

              {/* No Audit Trail */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-destructive" />
                  <h3 className="text-xl font-semibold text-navy-950">3. Lack of Deterministic Audit Trails</h3>
                </div>
                <p className="mb-4 text-text-label">
                  LLMs cannot explain their reasoning in audit-grade terms. They generate outputs based on neural network weights—not explicit, referenceable rules.
                </p>
                <div className="rounded-lg bg-destructive/5 p-4">
                  <p className="text-sm font-medium text-destructive mb-2">Regulatory Risk:</p>
                  <p className="text-sm text-text-label">
                    Auditors will ask: "Why did this address get parsed this way?" An LLM cannot answer with a specific rule citation. ioNova can.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 shadow-xl lg:p-8">
              <div className="flex items-start gap-4">
                <Cpu className="h-8 w-8 shrink-0 text-blue-500 mt-1" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-navy-950">ioNova's Hybrid Approach</h3>
                  <p className="mb-4 text-text-label">
                    We use LLMs <span className="font-semibold text-navy-950">as trainers, not as the runtime engine</span>. LLMs help our Agentic Learning System analyze edge cases and propose new rules—but the production engine runs on a deterministic, explainable ruleset with zero hallucination risk.
                  </p>
                  <div className="grid gap-3 md:grid-cols-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-text-muted">100% deterministic runtime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-text-muted">Sub-100ms latency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-text-muted">Zero hallucination risk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-text-muted">Full audit trails</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-navy-950 md:text-4xl">
              Comparison: ioNova vs. Generic Tools vs. Raw LLMs
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl border border-border bg-card shadow-xl">
                <thead>
                  <tr className="border-b border-border bg-surface-2">
                    <th className="p-4 text-left text-sm font-semibold text-navy-950">Capability</th>
                    <th className="p-4 text-center text-sm font-semibold text-navy-950">ioNova</th>
                    <th className="p-4 text-center text-sm font-semibold text-navy-950">Google Maps / Postal APIs</th>
                    <th className="p-4 text-center text-sm font-semibold text-navy-950">Raw LLMs (GPT, Llama)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-4 text-sm text-text-label">Financial ID Preservation</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-text-label">Geographic Disambiguation</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><span className="text-amber-600 text-sm">Partial</span></td>
                    <td className="p-4 text-center"><span className="text-amber-600 text-sm">Probabilistic</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-text-label">Historical Name Resolution</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-text-label">Data De-Duplication</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                    <td className="p-4 text-center"><span className="text-amber-600 text-sm">Inconsistent</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-text-label">Full Explainability & Audit Trails</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-text-label">Confidence Scoring</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                    <td className="p-4 text-center"><span className="text-amber-600 text-sm">No Thresholds</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-text-label">Deterministic Output</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-text-label">Zero Hallucination Risk</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-text-label">Sub-100ms Latency</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><span className="text-amber-600 text-sm">~200-500ms</span></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm text-text-label">ISO 20022 Compliant</td>
                    <td className="p-4 text-center"><CheckCircle className="inline h-5 w-5 text-blue-500" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                    <td className="p-4 text-center"><XCircle className="inline h-5 w-5 text-destructive" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Cpu className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl">
              Purpose-Built for Banking, Not Just Delivery
            </h2>
            <p className="mb-8 text-lg text-text-muted">
              See how ioNova's purpose-built intelligence outperforms generic tools.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/demo">
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/address-intelligence/structured-address-mandate">
                  Back to The Mandate
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

export default WhyPurposeBuilt;
