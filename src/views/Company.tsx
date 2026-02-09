import { Layout } from "@/components/layout/Layout";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  FileText,
  TrendingUp,
  Globe,
  Users,
  BookOpen,
  Award,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Monitor,
  Database,
  GitBranch,
  Star,
} from "lucide-react";

const philosophyCards = [
  {
    icon: Shield,
    title: "Deterministic Accuracy",
    description: "Zero hallucinations in production. Every AI output is grounded in verified enterprise knowledge, not generated from parametric memory.",
    iconColor: "text-teal-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
  },
  {
    icon: FileText,
    title: "Audit-Grade Evidence",
    description: "Every decision is explainable, every claim citable. Governance isn't bolted on — it's the architectural foundation.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  },
  {
    icon: TrendingUp,
    title: "100% User Adoption",
    description: "A proven methodology refined across 50+ enterprise implementations with zero project failures — built for how regulated enterprises actually operate.",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/20",
  },
  {
    icon: Globe,
    title: "No Rip & Replace",
    description: "Overlays intelligence on existing infrastructure without data migration. Resolves entities in real-time across 50+ systems in under 200ms.",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
];

const kpiStats = [
  { value: "$5T+", label: "Processed Annually" },
  { value: "55+", label: "Countries Served" },
  { value: "<200ms", label: "Resolution Latency" },
  { value: "50+", label: "System Integrations" },
];

const domains = [
  "Financial Services",
  "Healthcare",
  "Sales & Marketing",
  "Human Resources",
  "Supply Chain",
  "Risk & Compliance",
];

const leaders = [
  {
    name: "Parth Desai",
    role: "Founder & CEO",
    initials: "PD",
    credentials: "MS AI, Georgia Tech · Yale AI Lab · HBS · INSEAD",
    bio: [
      "One of the earliest practitioners to apply AI to financial services — and one of the few who has done so continuously for over 30 years.",
      "AI foundations laid at Georgia Tech and Yale's AI Lab under Professor Roger Schank, researching natural language understanding — the same discipline powering ioNova today. Founded his first AI-for-banking company in 1994, building platforms now processing <strong>$5T+ annually across 55+ countries</strong> for Tier 1 global banks.",
      "Built <strong>Pelican AI</strong>, <strong>ACE Software Solutions</strong>, and <strong>PelicanPay</strong> — each advancing AI's role in financial services. Developed the <strong>Knowledge First AI™</strong> methodology after witnessing billions wasted on AI projects that started with models instead of knowledge.",
    ],
    stats: [
      { value: "30+", label: "Years in AI" },
      { value: "$5T+", label: "Processed / Year" },
      { value: "55+", label: "Countries" },
    ],
    featured: true,
  },
  {
    name: "Ishan Tarunesh",
    role: "Co-Founder & CTO",
    initials: "IT",
    credentials: "B.Tech CS, IIT Bombay · ACL & EACL Published · AIR 33 JEE",
    bio: [
      "Leads technology strategy, platform architecture, and ioNova's proprietary NER and cascade entity resolution engines. Published NLP research on multilingual modelling and cross-lingual text processing maps directly to ioNova's core: parsing, normalising, and resolving entity data across languages, scripts, and formats.",
    ],
    featured: false,
  },
  {
    name: "Devavrat Mahajan",
    role: "Co-Founder & COO",
    initials: "DM",
    credentials: "B.Tech, IIT Bombay · MBA, IIM Ahmedabad · Amazon AI/ML · Kearney",
    bio: [
      "Runs ioNova's commercial engine — enterprise partnerships, product operations, and go-to-market. At Amazon, built AI/ML data tools delivering measurable savings at scale. Co-built and scaled an AI services company to <strong>$5M+ valuation</strong> serving 50+ global customers, entirely bootstrapped.",
    ],
    featured: false,
  },
  {
    name: "Saumitra Naik",
    role: "VP, Operations & Delivery",
    initials: "SN",
    credentials: "20+ Years Enterprise Implementation",
    bio: [
      "<strong>200+ enterprise implementations</strong> for global financial institutions. Led delivery teams of 130+ professionals with <strong>98% on-time delivery</strong> and zero critical project failures. Ensures every client deployment meets the rigorous standards regulated institutions demand.",
    ],
    featured: false,
  },
  {
    name: "Mangesh Malekar",
    role: "VP, Customer Success",
    initials: "MM",
    credentials: "20+ Years Technology, SaaS & AI/ML",
    bio: [
      "<strong>100+ implementations</strong> managing a portfolio exceeding <strong>$100M in project value</strong>, with 95% satisfaction rate and 100% client retention. Bridges delivery teams and senior business stakeholders to progress every engagement from pilot to production to expansion.",
    ],
    featured: false,
  },
  {
    name: "Samir Dharia",
    role: "CISO & VP, Security & Compliance",
    initials: "SD",
    credentials: "30+ Years IT Security · Apple · Lucent · Bluestar",
    bio: [
      "Maintained a <strong>zero-breach security record</strong> across three decades spanning Apple, Lucent Technologies, and Bluestar Infotech. Achieved ISO 27001, SOC 1 Type II, and GDPR compliance. Ensures ioNova meets the stringent security requirements of Tier 1 banks.",
    ],
    featured: false,
  },
];

const whyCards = [
  {
    icon: Monitor,
    title: "Domain Depth",
    description: "30+ years pioneering AI in banking. Deep knowledge of how payments flow, compliance decisions are made, and entity data propagates across systems.",
    iconColor: "text-teal-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/20",
  },
  {
    icon: Database,
    title: "AI & NLP Research",
    description: "Published at ACL and EACL. Advanced capabilities to extract, normalise, match, and resolve entities across languages, formats, and data quality levels.",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/20",
  },
  {
    icon: Shield,
    title: "Enterprise Discipline",
    description: "Every AI decision grounded in verified knowledge — not statistical probability — with full auditability at production scale. Zero project failures across 50+ implementations.",
    iconColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/20",
  },
];

const Company = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></span>
              The Entity Intelligence Company
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Every Enterprise Runs on Entities.
              <br />
              <span className="text-gradient-accent">Most Can't Trust Them.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
              Every critical decision — approving a payment, clearing a counterparty, onboarding a customer — depends on knowing <em>who or what you're dealing with</em>. ioNova makes entity data trustworthy.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="border-t border-border bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-500">
                Our Philosophy
                </div>
              <div className="mb-4 flex items-center gap-3">
                <BookOpen className="h-7 w-7 text-teal-500" />
                <h2 className="text-3xl font-bold text-navy-950 md:text-4xl">
                  Knowledge First, Not Model First
                </h2>
              </div>
              <p className="text-lg text-text-label">
                70% of enterprise AI projects fail — not because the technology is inadequate, but because organisations start with the model and force-fit it to their business.
              </p>
            </div>

            <div className="mb-8 text-base leading-relaxed text-text-label">
              <p className="mb-4">
                Entity data — the people, companies, products, and transactions that flow through every enterprise — is scattered across dozens of systems, duplicated in conflicting formats, and silently degrading every downstream process. <strong className="text-navy-950">"Acme Corp"</strong> in your CRM is <strong className="text-navy-950">"ACME Corporation"</strong> in your ERP and <strong className="text-navy-950">"Acme Inc."</strong> in compliance. Multiply this across millions of entities, and the result is a trust deficit costing billions annually.
              </p>
            </div>

            <div className="mb-12 rounded-lg border-l-4 border-teal-500 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 p-6 text-base leading-relaxed">
              <p className="font-medium text-navy-950">
                ioNova is built on <strong>Knowledge First AI™</strong> — we start with the enterprise's own knowledge, structure it into an Enterprise Knowledge Model, and only then deploy AI on top. This is why we achieve what generic AI cannot.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {philosophyCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500"></div>
                    <CardContent className="p-6">
                      <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border ${card.bgColor} ${card.borderColor}`}>
                        <Icon className={`h-5 w-5 ${card.iconColor}`} />
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-navy-950">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-text-label">{card.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="border-t border-border bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-500">
                The Platform
              </div>
              <div className="mb-4 flex items-center gap-3">
                <GitBranch className="h-7 w-7 text-teal-500" />
                <h2 className="text-3xl font-bold text-navy-950 md:text-4xl">
                  Entity Intelligence, Unified
                </h2>
              </div>
              <p className="text-lg text-text-label">
                The first system to unify Named Entity Recognition, golden record creation, evidence-first AI copilots, and permissioned agentic automation — all governed from day one.
              </p>
                      </div>

            <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {kpiStats.map((stat, index) => (
                <Card
                  key={index}
                  className="group text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-2 text-3xl font-bold text-gradient-accent">
                      {stat.value}
                    </div>
                    <div className="text-xs font-medium text-text-muted">{stat.label}</div>
                  </CardContent>
                </Card>
                  ))}
                </div>

            <div className="mb-6 text-base leading-relaxed text-text-label">
              <p>
                All enterprise entities reduce to four core types: <strong className="text-navy-950">Individual, Company, Product, and Transaction</strong>. One architecture with universal applicability across six domains.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-navy-950">
                <div className="h-1 w-1 rounded-full bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500"></div>
                Domains Served
              </h3>
              <div className="flex flex-wrap gap-2">
                {domains.map((domain, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-text-label transition-all hover:border-teal-500 hover:text-teal-500"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-lg border-l-4 border-teal-500 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 p-6 text-base leading-relaxed">
              <p className="font-medium text-navy-950">
                Within financial services, ioNova powers the industry's only <strong>ISO 20022-native address resolution</strong> capability — transforming unstructured address data into fully structured output using Agentic AI with deterministic accuracy, ahead of the <strong>November 2026 deadline</strong> for structured addresses in every cross-border payment message.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="border-t border-border bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-500">
              Leadership
            </div>
              <div className="mb-4 flex items-center justify-center gap-3">
                <Users className="h-7 w-7 text-teal-500" />
                <h2 className="text-3xl font-bold text-navy-950 md:text-4xl">
                  The Team Behind the Platform
            </h2>
          </div>
              <p className="mx-auto max-w-2xl text-lg text-text-label">
                100+ years of combined experience across AI, banking technology, payments, compliance, and enterprise security. Forged over three decades of building AI systems at the heart of global financial infrastructure.
              </p>
                </div>

            <div className="grid gap-6 md:grid-cols-2">
              {leaders.map((leader, index) => {
                const isFeatured = leader.featured;
                return (
                  <Card
                    key={index}
                    className={`group relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      isFeatured ? "md:col-span-2" : ""
                    }`}
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500"></div>
                    <CardContent className={`p-6 ${isFeatured ? "md:grid md:grid-cols-2 md:gap-8" : ""}`}>
                      <div>
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-500 text-xl font-bold text-white shadow-md">
                          {leader.initials}
                        </div>
                        <h3 className="mb-1 text-xl font-bold text-navy-950">{leader.name}</h3>
                        <div className="mb-3 text-sm font-semibold text-gradient-accent">
                          {leader.role}
                        </div>
                        <div className="mb-4 font-mono text-xs text-text-muted">
                          {leader.credentials}
                        </div>
                        {leader.stats && (
                          <div className="mb-4 flex gap-4 border-t border-border pt-4">
                            {leader.stats.map((stat, statIndex) => (
                              <div key={statIndex} className="flex-1 text-center">
                                <div className="mb-1 text-lg font-bold text-gradient-accent">
                                  {stat.value}
                </div>
                                <div className="text-xs text-text-muted">{stat.label}</div>
              </div>
            ))}
                          </div>
                        )}
                      </div>
                      <div className={isFeatured ? "" : "mt-4"}>
                        {leader.bio.map((paragraph, pIndex) => {
                          // Parse paragraph to handle <strong> tags from reference
                          const parts = paragraph.split(/(<strong>.*?<\/strong>|\$[\dT+]+)/);
                          return (
                            <p
                              key={pIndex}
                              className={`mb-3 text-sm leading-relaxed text-text-label ${
                                pIndex === 0 ? "font-medium" : ""
                              }`}
                            >
                              {parts.map((part, partIndex) => {
                                if (part.startsWith("<strong>") && part.endsWith("</strong>")) {
                                  const text = part.replace(/<\/?strong>/g, "");
                                  return (
                                    <strong key={partIndex} className="text-navy-950">
                                      {text}
                                    </strong>
                                  );
                                }
                                // Handle dollar amounts like $5T+, $100M, etc.
                                if (part.match(/^\$[\dT+]+/)) {
                                  return (
                                    <strong key={partIndex} className="text-navy-950">
                                      {part}
                                    </strong>
                                  );
                                }
                                return <span key={partIndex}>{part}</span>;
                              })}
                            </p>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Team Section */}
      <section className="border-t border-border bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-teal-500">
                Why This Team
              </div>
              <div className="mb-4 flex items-center justify-center gap-3">
                <Star className="h-7 w-7 text-teal-500" />
                <h2 className="text-3xl font-bold text-navy-950 md:text-4xl">
                  The Rare Intersection
            </h2>
              </div>
              <p className="text-lg text-text-label">
                Entity intelligence demands expertise that few organisations possess simultaneously.
              </p>
            </div>

            <div className="mb-12 grid gap-6 md:grid-cols-3">
              {whyCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <CardContent className="p-6">
                      <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border ${card.bgColor} ${card.borderColor}`}>
                        <Icon className={`h-6 w-6 ${card.iconColor}`} />
                      </div>
                      <h3 className="mb-2 text-base font-bold text-navy-950">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-text-label">{card.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Banner */}
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-navy-950 via-blue-700 to-navy-950 text-center">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500"></div>
              <CardContent className="relative p-12">
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                  Purpose-Built for Regulated Industries
                </h3>
                <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-white/70">
                  The only entity intelligence platform trusted by the world's leading financial institutions for their most consequential data challenges.
                </p>
                <div className="text-xs font-semibold uppercase tracking-wider text-gradient-accent">
                  ioNova AI · Powered by Knowledge First AI™
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Company;
