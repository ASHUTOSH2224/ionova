import {
  FileCheck,
  Target,
  ShieldCheck,
  UserCog,
  Lock,
  Settings2
} from "lucide-react";

const pillars = [
  {
    icon: FileCheck,
    title: "Financial ID Preservation",
    description: "Validates 50+ identifiers (LEI, IBAN, BIC) before parsing begins.",
    detail: "Ensures entity integrity before splitting data."
  },
  {
    icon: Target,
    title: "Geographic Disambiguation",
    description: "Resolves 28 \"Paris\" locations using postal formats and street patterns.",
    detail: "Distinguishes between Paris, TX and Paris, France with context."
  },
  {
    icon: ShieldCheck,
    title: "Historical Name Resolution",
    description: "Automates bidirectional mapping for cities like \"Bombay\" → \"Mumbai.\"",
    detail: "Handles legacy city names and street changes automatically."
  },
  {
    icon: UserCog,
    title: "Data De-Duplication",
    description: "Intelligently removes redundant elements.",
    detail: "Cleanses repetitive information to ensure clean structured output."
  },
  {
    icon: Lock,
    title: "Full Explainability",
    description: "Provides field-by-field audit trails with specific rule citations.",
    detail: "Every decision is cited with a specific rule for compliance audit."
  },
  {
    icon: Settings2,
    title: "Confidence Scoring",
    description: "Threshold-based routing (0.95+ auto-process) to minimize manual review.",
    detail: "Minimizes manual review by auto-processing high confidence data."
  }
];

export function PillarsSection() {
  return (
    <section id="platform" className="bg-surface-2 flex flex-col justify-center" style={{ paddingTop: 'var(--section-padding-y)', paddingBottom: 'var(--section-padding-y)' }}>
      <div className="container">
        {/* Section header */}
        <div className="landing-section-header mb-12 text-center lg:mb-16">
          <h2 className="landing-section-title mb-4">
            6 Signature Capabilities that Drive <span className="text-gradient">98%+ Straight-Through Processing</span>
          </h2>
          <span className="landing-section-subtitle">
            ioNova is differentiated by deep banking logic
          </span>
        </div>

        {/* Pillars grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Header Row: Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100/50 text-blue-600">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="landing-card-title pt-1">
                    {pillar.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <p className="landing-card-body mb-3 font-medium">
                    {pillar.description}
                  </p>
                  <div className="h-px w-full bg-slate-100 my-4 group-hover:bg-blue-100 transition-colors"></div>
                  <p className="landing-card-body" style={{ fontSize: '15px' }}>
                    {pillar.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
