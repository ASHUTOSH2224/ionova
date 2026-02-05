import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Box, RefreshCw, Clock, ShieldAlert, Layers } from "lucide-react";

export default function Implementation() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-32">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a,#1e40af)] opacity-20" />
                <div className="container relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            One Integration. Full Compliance. <span className="text-gradient-accent">Zero Legacy Overhaul</span>.
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
                            Achieve compliance in 10-16 weeks without ripping and replacing your core payment engine.
                        </p>
                        <div className="flex justify-center">
                            <Button variant="hero" size="xl" asChild>
                                <Link to="/demo">
                                    Schedule Implementation Review
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sidecar Architecture */}
            <section className="py-20 bg-background">
                <div className="container">
                    <h2 className="text-3xl font-bold text-navy-950 mb-12 text-center">The "Sidecar" Architecture</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-text-body mb-6">
                                Legacy core banking systems are difficult to modify. ioNova is designed to sit alongside your existing infrastructure (MuleSoft, Volante, Finastra) via API, acting as an intelligent pre-processor.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-4 p-4 border rounded-lg bg-slate-50">
                                    <Layers className="h-6 w-6 text-blue-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-navy-950">Non-Invasive Integration</h4>
                                        <p className="text-sm text-text-body">No need to touch the core payment engine logic. We sanitize data before it enters the payment flow.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 p-4 border rounded-lg bg-slate-50">
                                    <RefreshCw className="h-6 w-6 text-blue-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-navy-950">Real-Time API</h4>
                                        <p className="text-sm text-text-body">Sub-millisecond latency ensures no delay in payment processing speed.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-100 p-8 rounded-xl border border-slate-200 flex flex-col items-center justify-center">
                            {/* Visual Diagram Placeholder */}
                            <div className="flex items-center gap-4 w-full justify-center">
                                <div className="p-4 bg-slate-300 rounded text-slate-600 font-bold text-center w-32">Legacy Core</div>
                                <ArrowRight className="text-slate-400" />
                                <div className="p-4 bg-blue-600 rounded text-white font-bold text-center shadow-lg w-32 border-2 border-cyan-400">ioNova API</div>
                                <ArrowRight className="text-slate-400" />
                                <div className="p-4 bg-slate-300 rounded text-slate-600 font-bold text-center w-32">SWIFT Gateway</div>
                            </div>
                            <p className="mt-6 text-sm text-slate-500 italic">Data is enriched and structured without disrupting the core flow.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Effort Comparison */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-navy-950 mb-8">Why Implementation Effort Is the Same</h2>
                    <p className="text-lg text-text-body mb-12">
                        Many banks consider a "Hybrid" temporary fix to save time. In reality, the integration lift—connecting APIs, mapping data fields, and testing connectivity—is identical whether you implement a partial fix or a full solution.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl border border-slate-200 opacity-75">
                            <h3 className="text-xl font-bold text-slate-600 mb-2">Hybrid Integration</h3>
                            <div className="text-4xl font-bold text-slate-800 mb-4">12-14 Weeks</div>
                            <ul className="text-left space-y-2 text-slate-600 text-sm">
                                <li>• API Setup & Connectivity</li>
                                <li>• Data Mapping (Partial)</li>
                                <li>• Testing & Validation</li>
                                <li>• <strong>Result: 90% STP</strong></li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-xl border-2 border-blue-500 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl">RECOMMENDED</div>
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Full Structured Integration</h3>
                            <div className="text-4xl font-bold text-navy-950 mb-4">12-16 Weeks</div>
                            <ul className="text-left space-y-2 text-text-body text-sm">
                                <li>• API Setup & Connectivity</li>
                                <li>• Data Mapping (Full)</li>
                                <li>• Testing & Validation</li>
                                <li>• <strong>Result: 99% STP & Future Proof</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline & Process */}
            <section className="py-20 bg-background">
                <div className="container">
                    <h2 className="text-3xl font-bold text-navy-950 mb-12 text-center">Implementation Timeline</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center px-4">
                        <div className="relative pb-8 md:pb-0">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">1</div>
                            <h3 className="font-bold text-lg mb-2">Analysis (Weeks 1-4)</h3>
                            <p className="text-sm text-text-body">Data gap analysis, current state assessment, and API specification.</p>
                            <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-100 -z-10 transform translate-x-1/2"></div>
                        </div>
                        <div className="relative pb-8 md:pb-0">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mx-auto mb-4">2</div>
                            <h3 className="font-bold text-lg mb-2">Integration (Weeks 5-10)</h3>
                            <p className="text-sm text-text-body">API connection, rule configuration, and sandbox testing.</p>
                            <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-100 -z-10 transform translate-x-1/2"></div>
                        </div>
                        <div className="relative">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl mx-auto mb-4">3</div>
                            <h3 className="font-bold text-lg mb-2">Go-Live (Weeks 11-16)</h3>
                            <p className="text-sm text-text-body">Parallel run, validation, and full production switch-over.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Automatic Fallback */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-3xl text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-6">
                        <ShieldAlert className="h-6 w-6 text-red-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy-950 mb-4">The Automatic Fallback</h2>
                    <p className="text-text-body mb-8">
                        We ensure business continuity. In the rare event (0.5%) that data is too ambiguous even for our Agentic AI, the system automatically routes the message to the manual repair queue without blocking the payment flow, ensuring zero downtime.
                    </p>
                </div>
            </section>
        </Layout>
    );
}
