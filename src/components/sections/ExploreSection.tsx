import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, TrendingUp, Map, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const exploreCards = [
    {
        title: "The Mandate",
        subtitle: "ISO 20022 Structured Address Requirements",
        description: "What regulators actually require from EPC, SWIFT, and CPMI.",
        href: "/address-intelligence/structured-address-mandate",
        icon: BookOpen,
        color: "bg-blue-500"
    },
    {
        title: "The Strategic Value",
        subtitle: "Business Value Beyond Compliance",
        description: "How to turn a compliance cost into an operational advantage with 98% STP.",
        href: "/address-intelligence/business-value",
        icon: TrendingUp,
        color: "bg-green-500"
    },
    {
        title: "The Roadmap",
        subtitle: "Implementing Structured Address Resolution",
        description: "Achieve full compliance in 10-16 weeks with zero legacy system overhaul.",
        href: "/address-intelligence/implementation",
        icon: Map,
        color: "bg-purple-500"
    },
    {
        title: "The Technology",
        subtitle: "Why Payment Addresses Require Purpose-Built Intelligence",
        description: "Why postal validation tools and generic LLMs fail at cross-border payments.",
        href: "/address-intelligence/why-purpose-built",
        icon: Cpu,
        color: "bg-orange-500"
    }
];

export function ExploreSection() {
    return (
        <section className="bg-navy-950 py-16 lg:py-24 text-white">
            <div className="container">
                <div className="mb-12 text-center lg:mb-16">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                        Master the Mandate: <span className="text-gradient-accent">The 4 Pillars of Structured Data</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-sky-200/80">
                        Deep dive into the requirements, the ROI, and the technology behind ioNova.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {exploreCards.map((card) => (
                        <Link
                            key={card.title}
                            to={card.href}
                            className="group relative flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10 hover:border-white/20"
                        >
                            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${card.color} bg-opacity-20`}>
                                <card.icon className={`h-6 w-6 text-white`} />
                            </div>
                            <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-2">{card.title}</h3>
                            <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{card.subtitle}</h4>
                            <p className="text-sm text-sky-200/70 mb-6 flex-grow">{card.description}</p>

                            <div className="flex items-center text-sm font-semibold text-cyan-400">
                                Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-white/10 p-8 text-center backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">$5M+</div>
                            <div className="text-sm text-sky-200 uppercase tracking-wider">Estimated 5-Year Savings</div>
                        </div>
                        <div className="hidden md:block h-12 w-px bg-white/20"></div>
                        <div>
                            <div className="text-4xl font-bold text-white mb-1">15 Weeks</div>
                            <div className="text-sm text-sky-200 uppercase tracking-wider">Implementation Speed vs 18 Months</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
