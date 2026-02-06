import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Search, Database, XCircle, CheckCircle } from "lucide-react";

export default function PurposeBuilt() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
                <div className="container relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            Postal Validation <span className="text-red-400">≠</span> Payment Validation.
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
                            Why generic address tools and off-the-shelf LLMs fail to meet the rigorous demands of cross-border payments.
                        </p>
                        <div className="flex justify-center">
                            <Button variant="hero" size="xl" asChild>
                                <Link to="/demo">
                                    See the Difference
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 Capabilities */}
            <section className="py-20 bg-background">
                <div className="container">
                    <h2 className="text-3xl font-bold text-navy-950 mb-12 text-center">6 Capabilities Generic Tools Lack</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Financial ID Preservation", desc: "Validates 50+ identifiers (LEI, IBAN, BIC) before parsing begins." },
                            { title: "Geographic Disambiguation", desc: "Resolves 28 'Paris' locations using postal formats and street patterns." },
                            { title: "Historical Name Resolution", desc: "Automates bidirectional mapping for cities like 'Bombay' → 'Mumbai.'" },
                            { title: "Data De-Duplication", desc: "Intelligently removes redundant elements." },
                            { title: "Full Explainability", desc: "Provides field-by-field audit trails with specific rule citations." },
                            { title: "Confidence Scoring", desc: "Threshold-based routing (0.95+ auto-process) to minimize manual review." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="font-bold text-lg text-navy-950 mb-2">{item.title}</h3>
                                <p className="text-sm text-text-body">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Postal vs Payment */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center justify-center p-3 bg-red-100 rounded-full mb-6">
                                <MapPin className="h-6 w-6 text-red-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-navy-950 mb-4">Why Postal Validation Fails</h2>
                            <p className="text-text-body text-lg mb-6">
                                Postal tools (like Google Maps API) are designed for <strong>delivery points</strong>—getting a package to a door. They will auto-correct to the nearest physical coordinate.
                            </p>
                            <p className="text-text-body font-bold">
                                Payment compliance requires "Legal Entity Verification."
                            </p>
                            <p className="text-text-body mt-2">
                                Changing a registered address to a "deliverable" coordinate can technically check a box but fail a legal compliance check if the resulting address doesn't match the bank record.
                            </p>
                        </div>
                        <div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-4">
                                <div className="flex items-center justify-between border-b pb-4">
                                    <span className="font-semibold text-slate-600">Google Maps API</span>
                                    <span className="text-red-500 font-bold">Risk</span>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-slate-500">Input: "123 Industria Block, Mumbai"</p>
                                    <p className="text-sm text-slate-800 font-mono bg-slate-100 p-2 rounded">Output: "123 Industrial Estate, Mumbai"</p>
                                    <p className="text-xs text-red-500 flex items-center gap-1"><XCircle className="h-3 w-3" /> Changed entity name implies different legal entity.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LLMs vs Purpose Built */}
            <section className="py-20 bg-background">
                <div className="container">
                    <h2 className="text-3xl font-bold text-navy-950 mb-12 text-center">Why Generic LLMs Fail</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-navy-950 text-white">
                                    <th className="p-4 text-left rounded-tl-lg">Feature</th>
                                    <th className="p-4 text-left text-cyan-400">ioNova Purpose-Built</th>
                                    <th className="p-4 text-left">Google Maps / Postal APIs</th>
                                    <th className="p-4 text-left rounded-tr-lg">Generic LLMs (GPT-4)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 border border-slate-100">
                                <tr className="bg-white">
                                    <td className="p-4 font-semibold text-navy-950">Hallucination Risk</td>
                                    <td className="p-4 text-green-600 font-medium">Zero (Deterministic Runtime)</td>
                                    <td className="p-4 text-slate-600">Low (but changes semantics)</td>
                                    <td className="p-4 text-red-600 font-medium">High (invents addresses)</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="p-4 font-semibold text-navy-950">Audit Trail</td>
                                    <td className="p-4 text-green-600 font-medium">Field-level Rule Citations</td>
                                    <td className="p-4 text-slate-600">None</td>
                                    <td className="p-4 text-slate-600">Opaque "Black Box"</td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="p-4 font-semibold text-navy-950">Latency</td>
                                    <td className="p-4 text-green-600 font-medium">&lt; 50ms</td>
                                    <td className="p-4 text-slate-600">~200ms</td>
                                    <td className="p-4 text-red-600 font-medium">3-5 Seconds (Tokens)</td>
                                </tr>
                                <tr className="bg-slate-50">
                                    <td className="p-4 font-semibold text-navy-950">Data Privacy</td>
                                    <td className="p-4 text-green-600 font-medium">On-Prem / Private Cloud</td>
                                    <td className="p-4 text-slate-600">Public Cloud</td>
                                    <td className="p-4 text-slate-600">Public/Private Mix</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
