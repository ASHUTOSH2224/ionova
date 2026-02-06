import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, Map, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const exploreCards = [
    {
        title: "ISO 20022 Structured Address Requirements",
        subtitle: "ISO 20022 Requirements",
        description: "Understand what regulators actually require from EPC, SWIFT, and CPMI for structured address data.",
        href: "/address-intelligence/structured-address-mandate",
        icon: BookOpen,
    },
    {
        title: "Business Value Beyond Compliance",
        subtitle: "Business Value",
        description: "Turn compliance cost into operational advantage with 98% straight-through processing rates.",
        href: "/address-intelligence/business-value",
        icon: TrendingUp,
    },
    {
        title: "Implementing Structured Address Resolution",
        subtitle: "Implementation",
        description: "Achieve full compliance in 10-16 weeks with zero legacy system overhaul required.",
        href: "/address-intelligence/implementation",
        icon: Map,
    },
    {
        title: "Why Payment Addresses Require Purpose-Built Intelligence",
        subtitle: "Purpose-Built AI",
        description: "Discover why postal validation tools and generic LLMs fail at cross-border payment addresses.",
        href: "/address-intelligence/why-purpose-built",
        icon: Cpu,
    }
];

export function ExploreSection() {
    return (
        <section className="relative bg-[#0E1935] min-h-screen flex flex-col justify-center py-24 lg:py-32 overflow-hidden">
            {/* Subtle geometric background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

            <div className="container relative z-10 max-w-7xl">
                {/* Hero Content - Centered */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    {/* Small label */}
                    {/*<div className="mb-6">
                        <span className="inline-block text-[10px] font-bold text-blue-400 uppercase tracking-[0.25em] px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/5">
                            Address Intelligence Platform
                        </span>
                    </div>*/}

                    {/* Main Headline */}
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-white">
                        Master the Mandate: <span className="text-gradient-accent">The 4 Pillars of Structured Data</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-sky-200/80">
                        Deep dive into the requirements, the ROI, and the technology behind ioNova.
                    </p>
                </div>

                {/* Cards - Single Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {exploreCards.map((card) => (
                        <Link
                            key={card.title}
                            to={card.href}
                            className="group relative flex flex-col bg-[#1a1f2e] rounded-xl border border-white/[0.06] p-8 transition-all duration-300 hover:bg-[#1e2433] hover:border-white/[0.12]"
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                                    <card.icon className="h-6 w-6 text-blue-400" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-white mb-2">
                                {card.title}
                            </h3>

                            {/* Subtitle */}
                            <div className="text-sm font-medium text-gray-400 mb-4">
                                {card.subtitle}
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {card.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
