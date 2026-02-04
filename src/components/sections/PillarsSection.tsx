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
    title: "Explainability",
    description: "Full audit trails for every decision. Regulatory compliance ready.",
    detail: "We provide field-by-field verification with rule citations—never a \"black box.\""
  },
  {
    icon: Target,
    title: "Deterministic and Consistent",
    description: "Same input = same output, every time.",
    detail: "Eliminates randomness to ensure stability in your payment operations."
  },
  {
    icon: ShieldCheck,
    title: "100% Accuracy",
    description: "No hallucination risk.",
    detail: "Our agentic flywheel and validation layers ensure zero-error output for critical financial data."
  },
  {
    icon: UserCog,
    title: "Human Override",
    description: "Operators can always override AI decisions.",
    detail: "You maintain full control with \"Human-in-the-Loop\" workflows for edge cases."
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "ISO 27001 Certified. End-to-end encryption and RBAC.",
    detail: "Capable of Air-Gapped, On-Premise, or VPC deployment."
  },
  {
    icon: Settings2,
    title: "Governance and Control",
    description: "Version control, testing, and approval workflows.",
    detail: "Manage your models and data with enterprise-grade governance tools."
  }
];

export function PillarsSection() {
  return (
    <section id="platform" className="bg-surface-2 py-16 lg:py-24">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl lg:text-5xl">
            Hard Problems Solved:{" "}
            <span className="text-gradient">The 6 Pillars of ioNova</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-muted">
            Generic AI is not enough for banking. To resolve addresses with 100% accuracy 
            and confidence, these capabilities are non-negotiable.
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
