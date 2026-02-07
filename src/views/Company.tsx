import { Layout } from "@/components/layout/Layout";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import {
  Users,
  Lightbulb,
  Target,
  GraduationCap,
  ArrowRight
} from "lucide-react";

const timeline = [
  { year: "2020", event: "Tailored AI founded by Ishan and Devavrat" },
  { year: "2022", event: "Tailored AI reaches $5M+ valuation, 10M+ users" },
  { year: "2023", event: "Partnership with Parth Desai begins" },
  { year: "2024", event: "ioNova founded to solve ISO 20022 compliance" },
  { year: "2025", event: "First Tier 1 bank deployments" },
];

const teamMembers = [
  {
    name: "Parth Desai",
    role: "Domain Lead",
    bio: "30+ years in Enterprise SaaS for Banking. Founder of Pelican AI and Architect of its Entity Intelligence Platform.",
    education: "IIT Bombay '85 (CSE), Georgia Tech '87 (AI)",
  },
  {
    name: "Ishan Tarunesh",
    role: "Tech Lead",
    bio: "Former CTO at Tailored AI. AI Engineer at Samsung Korea. Built software for 10M+ users.",
    education: "IIT Bombay '20 (CSE)",
  },
  {
    name: "Devavrat Mahajan",
    role: "Growth Lead",
    bio: "Co-Founder of Tailored AI. Former Product Manager (AI) at Amazon. Bootstrapped previous venture to $2M revenue.",
    education: "IIT Bombay '20, IIM Ahmedabad '22",
  },
  {
    name: "Sai Teja Gutta",
    role: "Senior Engineer",
    bio: "AIR 16 in IIT JEE. High-Frequency Trading (HFT) background. Ex-Senior Engineer at Tailored AI.",
    education: "IIT Bombay (CSE)",
  },
  {
    name: "Sonnandh Kalaka",
    role: "Senior Engineer",
    bio: "Ex-Amazon. Senior Engineer at Tailored AI with deep expertise in scalable systems.",
    education: "IIT Bombay (CSE)",
  },
  {
    name: "Hardik Soni",
    role: "AI Engineer",
    bio: "Specialist in AI model optimization and deployment. Formerly AI Engineer at Tailored AI.",
    education: "IIT Kharagpur (CSE)",
  },
];

const Company = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-sky-200 md:text-5xl lg:text-6xl">
              Built by Experts in{" "}
              <span className="text-gradient-accent">Banking SaaS</span> and AI
            </h1>
            <p className="text-lg text-sky-200/80">
              The ioNova story began at the intersection of deep banking expertise
              and cutting-edge AI engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 grid gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
                  <Lightbulb className="h-4 w-4" />
                  Our Story
                </div>
                <h2 className="mb-6 text-3xl font-bold text-navy-950 md:text-4xl">
                  Where Banking Meets AI Innovation
                </h2>
              </div>

              <p>
                The ioNova story began at the intersection of deep banking expertise and cutting-edge AI engineering. Founders <span className="font-semibold text-navy-950">Ishan Tarunesh</span> and <span className="font-semibold text-navy-950">Devavrat Mahajan</span> previously built an AI consultancy to a $5M+ valuation, bootstrapped.
              </p>
              <p>
                They partnered with <span className="font-semibold text-navy-950">Parth Desai</span>, an industry veteran who architected global payment platforms for Tier 1 banks (Standard Chartered, Wells Fargo).
              </p>
              <p>
                Recognizing the unique opportunity to solve the "Financial Y2K" challenge, they assembled a team of IIT experts to build ioNova—the only solution using Agentic AI to deliver deterministic accuracy.
              </p>
            </div>

            {/* Timeline */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg lg:p-8">
              <h3 className="mb-6 text-xl font-semibold text-navy-950">Our Journey</h3>
              <div className="relative">
                <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2" />
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div
                      key={item.year}
                      className={`relative flex items-center gap-4 lg:gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} hidden lg:block`}>
                        {index % 2 === 0 && (
                          <p className="text-text-muted">{item.event}</p>
                        )}
                        {index % 2 !== 0 && (
                          <p className="text-text-muted">{item.event}</p>
                        )}
                      </div>

                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 font-semibold text-primary-foreground lg:mx-0">
                        <span className="text-xs">{item.year.slice(-2)}</span>
                      </div>

                      <div className={`flex-1 ${index % 2 !== 0 ? "lg:text-right" : "lg:text-left"}`}>
                        <p className="font-semibold text-navy-950">{item.year}</p>
                        <p className="text-sm text-text-muted lg:hidden">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-surface-2 py-16 lg:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-500">
              <Users className="h-4 w-4" />
              Leadership
            </div>
            <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl">
              The Engineering Powerhouse Behind ioNova
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Avatar placeholder */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-primary text-2xl font-bold text-primary-foreground">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>

                <h3 className="text-xl font-semibold text-navy-950">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-blue-600">{member.role}</p>
                <p className="mb-4 text-sm text-text-muted">{member.bio}</p>

                <div className="flex items-center gap-2 text-xs text-text-label">
                  <GraduationCap className="h-4 w-4 text-teal-500" />
                  <span>{member.education}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/*
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Target className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl">
              Ready to Join Our Mission?
            </h2>
            <p className="mb-8 text-lg text-text-muted">
              Let's solve the biggest compliance challenge in payments together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/demo">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      */}
    </Layout>
  );
};

export default Company;
