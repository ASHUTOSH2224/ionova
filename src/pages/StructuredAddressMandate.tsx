import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  ArrowRight, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  XCircle
} from "lucide-react";

const StructuredAddressMandate = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-bold text-sky-200">
              The Regulatory Mandate: <span className="text-gradient-accent">Structured Data</span> is No Longer Optional
            </h1>
            <p className="text-lg text-sky-200/80">
              Establish a compliant baseline. Understand the shift from unstructured blocks to granular, semantic address components.
            </p>
          </div>
        </div>
      </section>

      {/* What Regulators Actually Require */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
                <Shield className="h-4 w-4" />
                Regulatory Requirements
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                What Regulators Actually Require
              </h2>
            </div>

            <div className="space-y-8">
              {/* EPC Requirements */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                    <Shield className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-950">European Payments Council (EPC)</h3>
                    <p className="text-sm text-text-muted">SEPA Credit Transfer Rulebook</p>
                  </div>
                </div>
                <div className="space-y-4 text-text-label">
                  <p>
                    <span className="font-semibold text-navy-950">Structured Address Requirement:</span> All SEPA payment messages must contain addresses in structured format with separate fields for Street Name, Building Number, Post Code, Town Name, and Country.
                  </p>
                  <div className="rounded-lg bg-surface-2 p-4">
                    <p className="text-sm font-medium text-navy-950 mb-2">Key Mandate:</p>
                    <p className="text-sm">
                      "The use of unstructured addresses will no longer be permitted from November 2026."
                    </p>
                  </div>
                </div>
              </div>

              {/* SWIFT Requirements */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10">
                    <Shield className="h-6 w-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-950">SWIFT (Society for Worldwide Interbank Financial Telecommunication)</h3>
                    <p className="text-sm text-text-muted">CBPR+ Standards</p>
                  </div>
                </div>
                <div className="space-y-4 text-text-label">
                  <p>
                    <span className="font-semibold text-navy-950">CBPR+ Mandate:</span> Cross-border payments must comply with ISO 20022 structured data standards. This includes granular address parsing with distinct fields for Department, Sub-Department, Street Name, Building Number, Building Name, Floor, Post Box, Room, Post Code, Town Name, Town Location Name, District Name, Country Sub-Division, and Country.
                  </p>
                  <div className="rounded-lg bg-surface-2 p-4">
                    <p className="text-sm font-medium text-navy-950 mb-2">Deadline:</p>
                    <p className="text-sm">
                      "November 2025: MT format refused for payment messages. November 2026: Unstructured addresses rejected."
                    </p>
                  </div>
                </div>
              </div>

              {/* CPMI Requirements */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10">
                    <Shield className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-950">Committee on Payments and Market Infrastructures (CPMI)</h3>
                    <p className="text-sm text-text-muted">Global Standards Body</p>
                  </div>
                </div>
                <div className="space-y-4 text-text-label">
                  <p>
                    <span className="font-semibold text-navy-950">Harmonization Goals:</span> CPMI advocates for the global adoption of ISO 20022 to improve data quality, reduce payment delays, and enhance sanctions screening accuracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postal vs Structured Address */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-bold text-navy-950">
              Postal Address vs Structured Address
            </h2>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Postal Address */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-destructive" />
                  <h3 className="text-xl font-semibold text-navy-950">Unstructured "Postal" Address</h3>
                </div>
                <div className="rounded-lg bg-destructive/5 p-4 mb-4">
                  <code className="text-sm text-text-label whitespace-pre-wrap break-words">
                    John Smith{'\n'}
                    123 Main Street, Apt 4B{'\n'}
                    New York, NY 10001{'\n'}
                    United States
                  </code>
                </div>
                <div className="space-y-2 text-sm text-text-muted">
                  <p className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 mt-0.5 shrink-0 text-destructive" />
                    <span>Free-text blocks with no semantic structure</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 mt-0.5 shrink-0 text-destructive" />
                    <span>Cannot be machine-validated</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 mt-0.5 shrink-0 text-destructive" />
                    <span>Will be rejected by SWIFT and SEPA from November 2026</span>
                  </p>
                </div>
              </div>

              {/* Structured Address */}
              <div className="rounded-xl border border-blue-500/20 bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-blue-500" />
                  <h3 className="text-xl font-semibold text-navy-950">ISO 20022 Structured Address</h3>
                </div>
                <div className="rounded-lg bg-blue-500/5 p-4 mb-4">
                  <code className="text-sm text-text-label whitespace-pre-wrap break-words">
                    StreetName: Main Street{'\n'}
                    BuildingNumber: 123{'\n'}
                    SubDepartment: Apt 4B{'\n'}
                    TownName: New York{'\n'}
                    CountrySubDivision: NY{'\n'}
                    PostCode: 10001{'\n'}
                    Country: US
                  </code>
                </div>
                <div className="space-y-2 text-sm text-text-muted">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-blue-500" />
                    <span>Granular, semantic fields</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-blue-500" />
                    <span>Machine-readable and validatable</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0 text-blue-500" />
                    <span>Fully compliant with ISO 20022</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured-Hybrid Relationship */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-600">
                <AlertTriangle className="h-4 w-4" />
                Critical Understanding
              </div>
              <h2 className="mb-6 font-bold text-navy-950">
                The Structured-Hybrid Relationship
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-8">
              <div className="mb-6 space-y-4 text-text-label">
                <p>
                  <span className="font-semibold text-navy-950">Hybrid is a temporary fallback, not a destination.</span> The "Hybrid" address format allows some unstructured data to be included alongside structured fields—but only as a bridge during the transition period.
                </p>
                <p>
                  By November 2026, the Hybrid option will be phased out entirely. Any payment message containing unstructured address data will be rejected.
                </p>
              </div>

              <div className="rounded-lg bg-surface-2 p-6 mb-6">
                <h3 className="mb-4 font-semibold text-navy-950">Why "Hybrid-Only" is a Technical Dead-End:</h3>
                <ul className="space-y-3 text-sm text-text-muted">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-amber-600" />
                    <span>It delays the inevitable investment in full parsing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-amber-600" />
                    <span>It limits operational improvements (STP remains low)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5 shrink-0 text-amber-600" />
                    <span>You'll need to re-implement the same integration work again in 1-2 years</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-6">
                <p className="font-semibold text-blue-600 mb-2">ioNova Insight:</p>
                <p className="text-sm text-text-label">
                  The integration effort for "Hybrid" and "Full Structured" is identical. Since you're making the investment anyway, choose the solution that delivers maximum business value and future-proofs your operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center font-bold text-navy-950">
              The Timeline: A Binary Event
            </h2>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
              
              <div className="space-y-8">
                {/* Nov 2025 */}
                <div className="relative grid lg:grid-cols-2 gap-6">
                  <div className="lg:text-right lg:pr-12">
                    <div className="inline-block rounded-xl border border-border bg-card p-6 shadow-lg">
                      <div className="mb-2 text-sm font-medium text-blue-600">November 2025</div>
                      <h3 className="mb-2 font-semibold text-navy-950">MT Format Refused</h3>
                      <p className="text-sm text-text-muted">
                        SWIFT stops accepting legacy MT format payment messages. All messages must be in ISO 20022 MX format.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="absolute left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-primary-foreground font-semibold shadow-lg hidden lg:flex">
                      '25
                    </div>
                  </div>
                </div>

                {/* Feb 2026 */}
                <div className="relative grid lg:grid-cols-2 gap-6">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-primary-foreground font-semibold shadow-lg hidden lg:flex">
                      NOW
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="inline-block rounded-xl border border-amber-500/20 bg-amber-500/5 p-6 shadow-lg">
                      <div className="mb-2 text-sm font-medium text-amber-600">February 2026 (NOW)</div>
                      <h3 className="mb-2 font-semibold text-navy-950">9-Month Implementation Window Begins</h3>
                      <p className="text-sm text-text-muted">
                        The critical window for banks to implement structured address resolution. Delays now will result in November deadline misses.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nov 2026 */}
                <div className="relative grid lg:grid-cols-2 gap-6">
                  <div className="lg:text-right lg:pr-12">
                    <div className="inline-block rounded-xl border border-destructive/20 bg-destructive/5 p-6 shadow-lg">
                      <div className="mb-2 text-sm font-medium text-destructive">November 2026</div>
                      <h3 className="mb-2 font-semibold text-navy-950">DEADLINE: Unstructured Addresses Rejected</h3>
                      <p className="text-sm text-text-muted">
                        SEPA and SWIFT will reject any payment message with unstructured address data. Non-compliant payments will fail.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="absolute left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-destructive text-primary-foreground font-semibold shadow-lg hidden lg:flex">
                      '26
                    </div>
                  </div>
                </div>

                {/* Nov 2027 */}
                <div className="relative grid lg:grid-cols-2 gap-6">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 text-primary-foreground font-semibold shadow-lg hidden lg:flex">
                      '27
                    </div>
                  </div>
                  <div className="lg:pl-12">
                    <div className="inline-block rounded-xl border border-border bg-card p-6 shadow-lg">
                      <div className="mb-2 text-sm font-medium text-blue-600">November 2027</div>
                      <h3 className="mb-2 font-semibold text-navy-950">Enrichment & Intelligence Mandate</h3>
                      <p className="text-sm text-text-muted">
                        Extended data enrichment requirements come into effect, requiring enhanced due diligence data.
                      </p>
                    </div>
                  </div>
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
            <Clock className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h2 className="mb-4 font-bold text-navy-950">
              Don't Wait Until the Deadline Looms
            </h2>
            <p className="mb-8 text-lg text-text-muted">
              ioNova can get you compliant in 10-16 weeks. Start your structured address journey today.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="hero" size="xl" asChild>
                <Link to="/demo">
                  View a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/address-intelligence/business-value">
                  Explore the Business Value
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

export default StructuredAddressMandate;
