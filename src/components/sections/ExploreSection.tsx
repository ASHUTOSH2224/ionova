import { Link } from "@/lib/router-shim";
import { BookOpen, TrendingUp, Map, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardRef.current,
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.98,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "center center",
                        scrub: 1,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#F9F9FB] pb-8 lg:pb-12 px-6 md:px-4">
            <div className="w-full mx-auto">
                <div
                    ref={cardRef}
                    className="relative bg-white rounded-[2.5rem] overflow-hidden py-16 lg:py-24 shadow-2xl ring-1 ring-black/5"
                >
                    {/* Subtle geometric background pattern (Adjusted for light mode) */}
                    <div className="absolute inset-0 opacity-[0.4]">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0E1935_1px,transparent_1px),linear-gradient(to_bottom,#0E1935_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.05]"></div>
                    </div>

                    {/* Decorative elements (Subtler for light mode) */}
                    <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl mix-blend-multiply"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl mix-blend-multiply"></div>

                    <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                        {/* Hero Content - Centered */}
                        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
                            {/* Main Headline */}
                            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl text-navy-950">
                                Master the Mandate: <span className="text-gradient">The 4 Pillars of Structured Data</span>
                            </h2>
                            <p className="mx-auto max-w-2xl text-lg text-navy-900/80">
                                Deep dive into the requirements, the ROI, and the technology behind ioNova.
                            </p>
                        </div>

                        {/* Cards - Single Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                            {exploreCards.map((card) => (
                                <Link
                                    key={card.title}
                                    to={card.href}
                                    className="group relative flex flex-col bg-[#EFF2F7] h-full rounded-xl border border-transparent p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-100/50 hover:-translate-y-1"
                                >
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                            <card.icon className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Content Wrapper for flex spacing */}
                                    <div className="flex flex-col h-full">
                                        {/* Title */}
                                        <h3 className="text-lg font-bold text-navy-950 mb-2 leading-tight">
                                            {card.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <div className="text-sm font-medium text-blue-600 mb-4">
                                            {card.subtitle}
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-navy-800/70 leading-relaxed">
                                            {card.description}
                                        </p>

                                        {/* View More Button */}
                                        <div className="mt-auto pt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                                            View More
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
