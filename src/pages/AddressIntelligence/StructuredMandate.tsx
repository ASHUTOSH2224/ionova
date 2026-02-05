import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertTriangle, FileText, Globe, Clock } from "lucide-react";

export default function StructuredMandate() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-navy-950 to-navy-950" />
                <div className="container relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            The Regulatory Mandate: <span className="text-gradient-accent">Structured Data</span> is No Longer Optional.
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
                            Establish a compliant baseline. Understand the shift from unstructured blocks to granular, semantic address components required by SWIFT, SEPA, and CPMI.
                        </p>
                        <div className="flex justify-center">
                            <Button variant="hero" size="xl" asChild>
                                <Link to="/demo">
                                    Start Your Compliance Journey
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Regulators Require */}
            <section className="py-20 bg-background">
                <div className="container">
                    <h2 className="text-3xl font-bold text-navy-950 mb-12 text-center">What Regulators Actually Require</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-text-body mb-6">
                                The shift to ISO 20022 is not just a format change; it is a data quality mandate. Regulators demand granular "Structured Addresses" where every component—Street Name, Building Number, City, Post Code—is distinctly identified.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 border rounded-lg bg-slate-50">
                                    <Globe className="h-6 w-6 text-blue-600 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-navy-950">EPC & SEPA</h3>
                                        <p className="text-sm text-text-body">Mandates fully structured addresses for all payments within the Single Euro Payments Area.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 border rounded-lg bg-slate-50">
                                    <Globe className="h-6 w-6 text-blue-600 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-navy-950">SWIFT CBPR+</h3>
                                        <p className="text-sm text-text-body">Requires structured data for cross-border payments, rejecting unstructured MT format messages after Nov 2026.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 border rounded-lg bg-slate-50">
                                    <Globe className="h-6 w-6 text-blue-600 shrink-0" />
                                    <div>
                                        <h3 className="font-semibold text-navy-950">CPMI</h3>
                                        <p className="text-sm text-text-body">Global harmonisation requirements for cross-border payments to enhance speed and transparency.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-100 p-8 rounded-xl border border-slate-200">
                            <h3 className="font-bold text-xl mb-4 text-navy-950">Postal vs. Structured</h3>
                            <div className="space-y-4">
                                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                                    <div className="font-semibold text-red-700 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> Unstructured (Legacy)</div>
                                    <code className="block mt-2 text-sm text-slate-600 bg-white p-2 rounded">
                                        /59/Beneficiary<br />
                                        Davos Platz 12, 7270 Davos
                                    </code>
                                </div>
                                <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                                    <div className="font-semibold text-green-700 flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Structured (ISO 20022)</div>
                                    <code className="block mt-2 text-sm text-slate-600 bg-white p-2 rounded">
                                        &lt;StrtNm&gt;Davos Platz&lt;/StrtNm&gt;<br />
                                        &lt;BldgNb&gt;12&lt;/BldgNb&gt;<br />
                                        &lt;PstCd&gt;7270&lt;/PstCd&gt;<br />
                                        &lt;TwnNm&gt;Davos&lt;/TwnNm&gt;
                                    </code>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Structured-Hybrid Relationship */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy-950 mb-8 text-center">The Structured-Hybrid Relationship</h2>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-navy-950 mb-4">Why "Hybrid-Only" is a Dead End</h3>
                                <p className="text-text-body mb-4">
                                    Some solutions offer a "Hybrid" approach where structured data is optional or partially applied. This is a technical debt trap.
                                </p>
                                <p className="text-text-body font-medium">
                                    True ISO 20022 compliance treats "Hybrid" only as a fallback subset, not the strategy. Investing in Hybrid-only logic limits STP rates and will require re-platforming before 2026.
                                </p>
                            </div>
                            <div className="flex items-center justify-center bg-blue-50/50 rounded-xl p-6">
                                {/* Visual representation of Hybrid subset of Structured */}
                                <div className="relative w-64 h-64 border-2 border-blue-500 rounded-full flex items-center justify-center bg-white shadow-lg">
                                    <span className="absolute top-4 font-bold text-blue-700">Structured Data</span>
                                    <div className="w-40 h-40 border-2 border-dashed border-sky-400 rounded-full flex items-center justify-center bg-blue-50">
                                        <span className="font-semibold text-sky-700">Hybrid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-background">
                <div className="container max-w-6xl">
                    <h2 className="text-3xl font-bold text-center text-navy-950 mb-12">The Critical Timeline</h2>
                    <div className="relative border-l-4 border-blue-200 ml-4 md:ml-0 md:pl-0 md:border-l-0 md:border-t-4 md:pt-12 grid md:grid-cols-4 gap-8">
                        <div className="relative pl-8 md:pl-0 md:text-center">
                            <div className="absolute left-[-10px] top-0 md:top-[-26px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow"></div>
                            <h4 className="font-bold text-lg text-navy-950">Nov '25</h4>
                            <p className="text-sm text-text-body mt-2">MT Format refused for payment messages.</p>
                        </div>
                        <div className="relative pl-8 md:pl-0 md:text-center">
                            <div className="absolute left-[-10px] top-0 md:top-[-26px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow animate-pulse"></div>
                            <h4 className="font-bold text-lg text-blue-600">Feb '26 (NOW)</h4>
                            <p className="text-sm text-text-body mt-2 font-medium">Start of the 9-Month Critical Implementation Window.</p>
                        </div>
                        <div className="relative pl-8 md:pl-0 md:text-center">
                            <div className="absolute left-[-10px] top-0 md:top-[-26px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-navy-950 border-4 border-white shadow"></div>
                            <h4 className="font-bold text-lg text-navy-950">Nov '26</h4>
                            <p className="text-sm text-text-body mt-2">DEADLINE. Unstructured addresses refused by SEPA and SWIFT.</p>
                        </div>
                        <div className="relative pl-8 md:pl-0 md:text-center">
                            <div className="absolute left-[-10px] top-0 md:top-[-26px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow"></div>
                            <h4 className="font-bold text-lg text-slate-500">Nov '27</h4>
                            <p className="text-sm text-text-body mt-2">E&I Mandate.</p>
                        </div>
                    </div>

                    <div className="mt-16 bg-navy-950 text-white rounded-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Hybrid-Only vs. Full Structured</h3>
                                <p className="text-sky-100 mb-6">Why settling for partial compliance is risky.</p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3"><AlertTriangle className="text-yellow-400 shrink-0" /> <span className="text-sm">Hybrid requires manual repair for complex addresses</span></li>
                                    <li className="flex gap-3"><AlertTriangle className="text-yellow-400 shrink-0" /> <span className="text-sm">Cannot guarantee 100% STP for cross-border flows</span></li>
                                    <li className="flex gap-3"><AlertTriangle className="text-yellow-400 shrink-0" /> <span className="text-sm">Will require new investment by 2027</span></li>
                                </ul>
                            </div>
                            <div className="bg-white/10 p-6 rounded-xl border border-white/20">
                                <h4 className="font-bold text-lg mb-4 text-cyan-400">IoNova Structured Approach</h4>
                                <ul className="space-y-4">
                                    <li className="flex gap-3"><CheckCircle className="text-cyan-400 shrink-0" /> <span className="text-sm">98%+ STP Day 1</span></li>
                                    <li className="flex gap-3"><CheckCircle className="text-cyan-400 shrink-0" /> <span className="text-sm">Future-proof for E&I Mandate</span></li>
                                    <li className="flex gap-3"><CheckCircle className="text-cyan-400 shrink-0" /> <span className="text-sm">Zero legacy overhaul required</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
