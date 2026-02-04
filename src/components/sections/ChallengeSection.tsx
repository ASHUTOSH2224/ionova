import { AlertTriangle, Clock, XCircle } from "lucide-react";

export function ChallengeSection() {
  return (
    <section className="bg-surface-2 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
              <AlertTriangle className="h-4 w-4" />
              The "Financial Y2K" Challenge
            </div>
            <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl lg:text-5xl">
              November 2026 is a Binary Event for Global Payments
            </h2>
          </div>

          {/* Content */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left - Main message */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-lg lg:p-8">
              <p className="mb-6 text-lg leading-relaxed text-text-label">
                SWIFT, EPC, and SEPA mandates are clear:{" "}
                <span className="font-semibold text-navy-950">
                  unstructured data will no longer be tolerated
                </span>
                . The "Hybrid" address phase is ending. If your payment instructions are 
                not fully structured, they will be{" "}
                <span className="font-semibold text-destructive">rejected</span> by the 
                clearing networks.
              </p>
              
              <div className="flex items-start gap-4 rounded-lg bg-surface-2 p-4">
                <Clock className="mt-1 h-6 w-6 shrink-0 text-blue-500" />
                <div>
                  <p className="font-semibold text-navy-950">The Reality</p>
                  <p className="text-sm text-text-muted">
                    Legacy systems cannot handle this transition alone, and manual repair 
                    is unscalable.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Impact cards */}
            <div className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-5 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                    <XCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-navy-950">Payment Rejections</h3>
                </div>
                <p className="text-sm text-text-muted">
                  Non-compliant payments will be automatically rejected, causing delays 
                  and customer dissatisfaction.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-navy-950">Regulatory Penalties</h3>
                </div>
                <p className="text-sm text-text-muted">
                  Non-compliance can result in significant fines and increased 
                  regulatory scrutiny.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-5 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                    <Clock className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="font-semibold text-navy-950">Operational Burden</h3>
                </div>
                <p className="text-sm text-text-muted">
                  Manual data remediation is costly, time-consuming, and prone to 
                  human error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
