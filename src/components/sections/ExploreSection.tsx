import { Link } from "@/lib/router-shim";
import { BookOpen, TrendingUp, Map, Cpu, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ExploreSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardRef.current,
                {
                    scaleX: 80 / 95,
                    borderRadius: "6px",
                    y: 50,
                    opacity: 0.8,
                },
                {
                    scaleX: 1,
                    borderRadius: "6px",
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        end: "center center",
                        scrub: 1.5,
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

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
            href: "/address-intelligence/structured-address-value",
            icon: TrendingUp,
        },
        {
            title: "Implementing Structured Address Resolution",
            subtitle: "Implementation",
            description: "Achieve full compliance in 2-4 weeks with zero legacy system overhaul required.",
            href: "/address-intelligence/address-implementation",
            icon: Map,
        },
        {
            title: "Why Payment Addresses Require Purpose-Built Intelligence",
            subtitle: "Purpose-Built AI",
            description: "Discover why postal validation tools and generic LLMs fail at cross-border payment addresses.",
            href: "/address-intelligence/purpose-built-address-solution",
            icon: Cpu,
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full flex justify-center items-center overflow-hidden bg-surface-2"
            style={{ paddingTop: 'var(--section-padding-y)', paddingBottom: 'var(--section-padding-y)' }}
        >
            <div className="w-[95%] mx-auto">
                <div
                    ref={cardRef}
                    className="relative z-10 mx-auto bg-white overflow-hidden py-16 lg:py-24 shadow-2xl ring-1 ring-black/5 will-change-transform origin-center rounded-[6px]"
                >
                {/* Subtle geometric background pattern */}
                <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0E1935_1px,transparent_1px),linear-gradient(to_bottom,#0E1935_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.05]"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>

                <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Hero Content - Centered */}
                    <div className="landing-section-header text-center mb-12 md:mb-20 max-w-3xl mx-auto">
                        <h2 className="landing-section-title mb-4">
                            Master the Mandate: <span className="text-gradient">The 4 Pillars of Structured Data</span>
                        </h2>
                        <span className="landing-section-subtitle">
                            Deep dive into the requirements, the ROI, and the technology behind ioNova.
                        </span>
                    </div>

                    {/* Cards - Single Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {exploreCards.map((card) => (
                            <div
                                key={card.title}
                                className="group relative flex flex-col bg-[#EFF2F7] h-full rounded-[6px] border border-transparent p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-blue-100/50 hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                        <card.icon className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Content Wrapper for flex spacing */}
                                <div className="flex flex-col h-full">
                                    {/* Title as link with stretched-link for full card click */}
                                    <h3 className="landing-card-title mb-2">
                                        <Link to={card.href} className="after:absolute after:inset-0">
                                            {card.title}
                                        </Link>
                                    </h3>

                                    {/* Subtitle */}
                                    <div className="text-sm font-medium text-blue-600 mb-4" style={{ fontFamily: "var(--landing-font-body)" }}>
                                        {card.subtitle}
                                    </div>

                                    {/* Description */}
                                    <p className="landing-card-body">
                                        {card.description}
                                    </p>

                                    {/* View More Button */}
                                    <div className="mt-auto pt-6 flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                                        View More
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
