import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Database, GitBranch, Zap, Shield } from "lucide-react";
import ArchitectureDiagram from "@/components/sections/ArchitectureDiagram";

export default function Platform() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-hero pt-24 pb-12 lg:pt-32 lg:pb-16">
                <div className="container relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            The World’s First <span className="text-gradient-accent">Deterministic</span> Entity Intelligence Engine.
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
                            Transform unstructured text into structured, relationship-aware intelligence. We combine the adaptability of Agentic AI with the certainty required by the enterprise.
                        </p>
                        {/*<div className="flex justify-center">
                            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8">
                                <a href="#technology">
                                    Explore the Technology <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>*/}
                    </div>
                </div>
            </section>

            {/* Architecture Section (Animated Isometric Diagram) */}
            <section id="technology" className="py-20 bg-background overflow-hidden">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-navy-950 mb-4">We Solved the "Hallucination" Problem of AI</h2>
                        <p className="text-text-body text-lg">
                            In regulated industries, you cannot gamble on a probability. ioNova utilizes a unique architecture where Large Language Models (LLMs) act strictly as trainers, not as the runtime engine. This ensures 100% explainability and zero latency in production.
                        </p>
                    </div>

                    {/* Interactive Diagram Component */}
                    <ArchitectureDiagram />
                    
                    <div className="text-center mt-8 text-sm text-slate-400 italic">
                        Scroll to see the automated workflow in action.
                    </div>
                </div>
            </section>

            {/* General Entity Intelligence */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            {/* Illustration (Abstract) */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 aspect-square flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                                <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-sm">
                                    <div className="flex justify-between w-full">
                                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-center w-24">
                                            <div className="text-xs text-blue-400 uppercase font-bold mb-1">Entity</div>
                                            <div className="text-sm font-semibold text-blue-900">Acme Corp</div>
                                        </div>
                                        <div className="p-3 bg-green-50 rounded-lg border border-green-100 text-center w-24">
                                            <div className="text-xs text-green-400 uppercase font-bold mb-1">Location</div>
                                            <div className="text-sm font-semibold text-green-900">New York</div>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full flex items-center gap-2">
                                        <div className="h-px bg-slate-300 flex-1"></div>
                                        <div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-mono text-slate-500 border border-slate-200">
                                            RELATIONSHIP: "Headquartered In"
                                        </div>
                                        <div className="h-px bg-slate-300 flex-1"></div>
                                    </div>

                                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-100 text-center w-32">
                                        <div className="text-xs text-purple-400 uppercase font-bold mb-1">Asset</div>
                                        <div className="text-sm font-semibold text-purple-900">Logistics Hub A</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-navy-950 mb-6">Beyond Extraction: Context & Relationships</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-bold text-lg text-navy-950 flex items-center gap-2 mb-2">
                                        <Layers className="h-5 w-5 text-blue-600" /> Entity Extraction
                                    </h3>
                                    <p className="text-text-body ml-7">Precisely identify Organizations, Locations, Individuals, and Assets.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-navy-950 flex items-center gap-2 mb-2">
                                        <GitBranch className="h-5 w-5 text-blue-600" /> Relationship Mapping
                                    </h3>
                                    <p className="text-text-body ml-7">We don't just extract data; we map the physics of your ecosystem. Understand the semantic link between entities (e.g., "Parent Company of," "Shipped to," "Patient of").</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-navy-950 flex items-center gap-2 mb-2">
                                        <Database className="h-5 w-5 text-blue-600" /> Contextual Anchoring
                                    </h3>
                                    <p className="text-text-body ml-7">Validate entities against external truth sources to ensure data integrity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Readiness */}
            <section className="py-20 bg-white text-foreground">
                <div className="container text-center max-w-5xl">
                    <h2 className="text-3xl font-bold mb-4">Engineered for Regulated Industries</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
                        Whether in Healthcare, Supply Chain, Logistics, Government, or Insurance, ioNova delivers the certainty you need.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                            <Zap className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="font-bold text-navy-950 mb-2">Zero-Latency Runtime</h3>
                            <p className="text-sm text-text-body">Decoupled architecture eliminates GenAI token latency for high-volume processing.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                            <Shield className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="font-bold text-navy-950 mb-2">Data Sovereignty</h3>
                            <p className="text-sm text-text-body">Full On-Premise or Private Cloud deployment. Your data never leaves your perimeter.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all">
                            <Database className="h-8 w-8 text-blue-600 mb-4" />
                            <h3 className="font-bold text-navy-950 mb-2">Audit-Grade Explainability</h3>
                            <p className="text-sm text-text-body">Every data transformation is logged with the specific logic rule applied.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
