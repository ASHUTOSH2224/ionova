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
    description: "Resolves 28 \"Paris\" locations using postal formats.",
    detail: "Distinguishes between Paris, TX and Paris, France with context."
  },
  {
    icon: ShieldCheck,
    title: "Historical Name Resolution",
    description: "Automates mapping for \"Bombay\" → \"Mumbai.\"",
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
    description: "Provides field-by-field audit trails.",
    detail: "Every decision is cited with a specific rule for compliance audit."
  },
  {
    icon: Settings2,
    title: "Confidence Scoring",
    description: "Threshold-based routing (0.95+ auto-process).",
    detail: "Minimizes manual review by auto-processing high confidence data."
  }
];

export function PillarsSection() {
  return (
    <section id="platform" className="bg-white min-h-screen flex flex-col justify-center py-16 lg:py-24">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl lg:text-5xl">
            6 Signature Capabilities that Drive <span className="text-gradient">98%+ Straight-Through Processing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-muted">
            ioNova is differentiated by deep banking logic
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent strip */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                <pillar.icon className="h-7 w-7 text-blue-500" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-xl font-semibold text-navy-950">
                {pillar.title}
              </h3>
              <p className="mb-3 font-medium text-text-label">
                {pillar.description}
              </p>
              <p className="text-sm text-text-muted">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
