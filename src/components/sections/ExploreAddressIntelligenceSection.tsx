import { Link } from "react-router-dom";
import { 
  FileCheck, 
  TrendingUp, 
  Workflow, 
  Cpu,
  ArrowRight 
} from "lucide-react";

const pillars = [
  {
    icon: FileCheck,
    title: "The Mandate",
    subtitle: "ISO 20022 Structured Address Requirements",
    description: "What regulators actually require from EPC, SWIFT, and CPMI.",
    href: "/address-intelligence/structured-address-mandate",
    color: "blue"
  },
  {
    icon: TrendingUp,
    title: "The Strategic Value",
    subtitle: "Business Value Beyond Compliance",
    description: "How to turn a compliance cost into an operational advantage with 98% STP.",
    href: "/address-intelligence/business-value",
    color: "teal"
  },
  {
    icon: Workflow,
    title: "The Roadmap",
    subtitle: "Implementing Structured Address Resolution",
    description: "Achieve full compliance in 10–16 weeks with zero legacy system overhaul.",
    href: "/address-intelligence/implementation",
    color: "cyan"
  },
  {
    icon: Cpu,
    title: "The Technology",
    subtitle: "Why Payment Addresses Require Purpose-Built Intelligence",
    description: "Why postal validation tools and generic LLMs fail at cross-border payments.",
    href: "/address-intelligence/why-purpose-built",
    color: "purple"
  }
];

const colorClasses = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    hover: "group-hover:bg-blue-500/20",
    border: "border-blue-500/20"
  },
  teal: {
    bg: "bg-teal-500/10",
    text: "text-teal-500",
    hover: "group-hover:bg-teal-500/20",
    border: "border-teal-500/20"
  },
  cyan: {
    bg: "bg-cyan-400/10",
    text: "text-cyan-400",
    hover: "group-hover:bg-cyan-400/20",
    border: "border-cyan-400/20"
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-600",
    hover: "group-hover:bg-purple-500/20",
    border: "border-purple-500/20"
  }
};

export function ExploreAddressIntelligenceSection() {
  return (
    <section className="bg-surface-2 py-16 lg:py-24">
      <div className="container">
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl lg:text-5xl">
            Master the Mandate:{" "}
            <span className="text-gradient">The 4 Pillars</span> of Structured Data
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-muted">
            Deep dive into the requirements, the ROI, and the technology behind ioNova.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const colors = colorClasses[pillar.color as keyof typeof colorClasses];
            return (
              <Link
                key={pillar.title}
                to={pillar.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`absolute left-0 top-0 h-1 w-full bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100`} />
                
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg} transition-colors ${colors.hover}`}>
                  <pillar.icon className={`h-7 w-7 ${colors.text}`} />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-navy-950">
                  {pillar.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-blue-600">
                  {pillar.subtitle}
                </p>
                <p className="mb-4 text-sm text-text-muted">
                  {pillar.description}
                </p>

                <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
