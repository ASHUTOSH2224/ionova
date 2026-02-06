import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Layers, Zap, Database, GitBranch } from "lucide-react";

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

                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section id="technology" className="py-20 bg-background">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-navy-950 mb-4">Agentic Learning, Deterministic Runtime</h2>
                        <p className="text-text-body text-lg">
                            In regulated industries, you cannot gamble on a probability. ioNova utilizes a unique architecture where Large Language Models (LLMs) act strictly as trainers, not as the runtime engine. This ensures 100% explainability and zero latency in production.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Runtime Engine */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <div className="mb-4 inline-flex p-3 bg-blue-100 rounded-lg">
                                <Zap className="h-6 w-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-bold text-navy-950 mb-2">1. Runtime Engine</h3>
                            <p className="text-sm text-text-body mb-4">Deterministic, high-speed engine processing data against a crystallized rule set.</p>
                            <div className="bg-white p-3 rounded border border-slate-100 text-xs font-mono text-green-600">
                                Outcome: Straight Through Processing (High confidence, zero hallucination).
                            </div>
                        </div>

                        {/* Agentic Workbench */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <div className="mb-4 inline-flex p-3 bg-purple-100 rounded-lg">
                                <Brain className="h-6 w-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-navy-950 mb-2">2. Agentic Workbench</h3>
                            <p className="text-sm text-text-body mb-4">When a "2% Exception" occurs, context-aware LLMs analyze the exception to understand intent.</p>
                            <div className="bg-white p-3 rounded border border-slate-100 text-xs font-mono text-purple-600">
                                Outcome: Proposed fix sent to human expert.
                            </div>
                        </div>

                        {/* Autonomous Learning */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                            <div className="mb-4 inline-flex p-3 bg-cyan-100 rounded-lg">
                                <GitBranch className="h-6 w-6 text-cyan-600" />
                            </div>
                            <h3 className="text-lg font-bold text-navy-950 mb-2">3. Autonomous Learning</h3>
                            <p className="text-sm text-text-body mb-4">The system performs Semi-Autonomous Updates. The exception becomes a rule.</p>
                            <div className="bg-white p-3 rounded border border-slate-100 text-xs font-mono text-blue-600">
                                Result: Next time, it's automatic.
                            </div>
                        </div>
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
                                <div className="relative z-10 flex flex-col items-center gap-4">
                                    <div className="flex gap-8">
                                        <div className="p-4 bg-blue-100 rounded-lg text-blue-700 font-semibold border border-blue-200">Organization</div>
                                        <div className="p-4 bg-green-100 rounded-lg text-green-700 font-semibold border border-green-200">Location</div>
                                    </div>
                                    <div className="h-8 w-px bg-slate-300"></div>
                                    <div className="p-2 bg-slate-100 rounded text-xs text-slate-500">Semantic Link: "Headquartered In"</div>
                                    <div className="h-8 w-px bg-slate-300"></div>
                                    <div className="p-4 bg-purple-100 rounded-lg text-purple-700 font-semibold border border-purple-200">Asset</div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="text-3xl font-bold text-navy-950 mb-6">Beyond Extraction: Context & Relationships</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-bold text-lg text-navy-950 flex items-center gap-2">
                                        <Layers className="h-5 w-5 text-blue-600" /> Entity Extraction
                                    </h3>
                                    <p className="text-text-body mt-2 ml-7">Precisely identify Organizations, Locations, Individuals, and Assets within unstructured streams.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-navy-950 flex items-center gap-2">
                                        <GitBranch className="h-5 w-5 text-blue-600" /> Relationship Mapping
                                    </h3>
                                    <p className="text-text-body mt-2 ml-7">We don't just extract data; we map the physics of your ecosystem. Understand the semantic link between entities (e.g., "Parent Company of," "Shipped to").</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-navy-950 flex items-center gap-2">
                                        <Database className="h-5 w-5 text-blue-600" /> Contextual Anchoring
                                    </h3>
                                    <p className="text-text-body mt-2 ml-7">Validate entities against external truth sources to ensure data integrity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Readiness */}
            <section className="py-20 bg-navy-950 text-white">
                <div className="container text-center max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6">Engineered for Regulated Industries</h2>
                    <p className="text-lg text-sky-200/80 mb-12">
                        Whether in Healthcare, Supply Chain, Logistics, Government, or Insurance, ioNova delivers the certainty you need.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <Zap className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Zero-Latency Runtime</h3>
                            <p className="text-sm text-sky-200/70">Decoupled architecture eliminates GenAI token latency for high-volume processing.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <Shield className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Data Sovereignty</h3>
                            <p className="text-sm text-sky-200/70">Full On-Premise or Private Cloud deployment. Your data never leaves your perimeter.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <Database className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                            <h3 className="font-bold mb-2">Audit-Grade Explainability</h3>
                            <p className="text-sm text-sky-200/70">Every data transformation is logged with the specific logic rule applied.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
