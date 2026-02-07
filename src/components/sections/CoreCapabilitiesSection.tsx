import { 
  Shield, 
  MapPin, 
  RefreshCw, 
  Filter, 
  FileCheck, 
  Target 
} from "lucide-react";

const capabilities = [
  {
    icon: Shield,
    title: "Financial ID Preservation",
    description: "Validates 50+ identifiers (LEI, IBAN, BIC) before parsing begins.",
    detail: "Critical financial identifiers are protected and correctly mapped, never discarded or corrupted."
  },
  {
    icon: MapPin,
    title: "Geographic Disambiguation",
    description: "Resolves 28 \"Paris\" locations using postal formats and street patterns.",
    detail: "Distinguishes between Paris, TX, USA and Paris, Île-de-France, FR with 100% accuracy."
  },
  {
    icon: RefreshCw,
    title: "Historical Name Resolution",
    description: "Automates bidirectional mapping for cities like \"Bombay\" → \"Mumbai.\"",
    detail: "Maintains 10,000+ historical city name mappings for legacy system compatibility."
  },
  {
    icon: Filter,
    title: "Data De-Duplication",
    description: "Intelligently removes redundant elements.",
    detail: "Semantic de-duplication engine detects and removes duplicate data while preserving unique information."
  },
  {
    icon: FileCheck,
    title: "Full Explainability",
    description: "Provides field-by-field audit trails with specific rule citations.",
    detail: "Every transformation is traceable to a specific logic rule for regulatory compliance."
  },
  {
    icon: Target,
    title: "Confidence Scoring",
    description: "Threshold-based routing (0.95+ auto-process) to minimize manual review.",
    detail: "Intelligent confidence scoring ensures high-confidence transactions process automatically while ambiguous cases receive human review."
  }
];

export function CoreCapabilitiesSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
            <Shield className="h-4 w-4" />
            Core Capabilities
          </div>
          <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl lg:text-5xl">
            6 Signature Capabilities that Drive{" "}
            <span className="text-gradient">98%+ Straight-Through Processing</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-muted">
            ioNova is differentiated by deep banking logic that generic tools cannot replicate.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 transition-colors group-hover:bg-blue-500/20">
                <capability.icon className="h-7 w-7 text-blue-500" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-navy-950">
                {capability.title}
              </h3>
              <p className="mb-3 font-medium text-text-label">
                {capability.description}
              </p>
              <p className="text-sm text-text-muted">
                {capability.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
