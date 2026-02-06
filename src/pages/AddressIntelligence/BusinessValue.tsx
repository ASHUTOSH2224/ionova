import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, ShieldCheck, Cpu, DollarSign, AlertTriangle, CheckCircle } from "lucide-react";

export default function BusinessValue() {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
                <div className="container relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            Compliance is the Floor. <span className="text-gradient-accent">Operational Excellence</span> is the Ceiling.
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
                            Move beyond "ticking the box." Use structured data to drive 98%+ STP and unlock millions in operational savings.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button variant="hero" size="xl" asChild>
                                <Link to="/#roi-calculator">
                                    Calculate Your ROI
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Economics Section */}
            <section className="py-20 bg-background">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-navy-950 mb-6">The Economics of Failed Payments</h2>
                            <p className="text-lg text-text-body mb-6">
                                The financial industry loses an estimated <strong>$12 Billion annually</strong> due to failed payments and manual repairs.
                            </p>
                            <p className="text-text-body mb-6">
                                Unstructured addresses are a primary cause of these failures. When a payment is stopped for repair, it costs an average of $50-$100 per transaction in operational overhead, not including the cost of delayed liquidity and customer dissatisfaction.
                            </p>
                            <div className="flex items-center gap-4 text-navy-950 font-bold text-xl">
                                <DollarSign className="h-8 w-8 text-red-500" />
                                <span>$12B Annual Industry Loss</span>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm text-center">
                            <h3 className="text-lg font-semibold text-text-label mb-4">Cost of Manual Repair</h3>
                            <div className="text-5xl font-bold text-navy-950 mb-2">$64.20</div>
                            <p className="text-sm text-text-body mb-8">Average cost per failed payment investigation.</p>
                            <div className="h-px bg-slate-200 w-full mb-8"></div>
                            <h3 className="text-lg font-semibold text-text-label mb-4">ioNova Savings</h3>
                            <div className="text-5xl font-bold text-green-600 mb-2">$5M+</div>
                            <p className="text-sm text-text-body">Annual savings for a Tier 1 Bank processing 100k daily payments.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Excellence (STP) */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
                            <TrendingUp className="h-6 w-6 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-navy-950 mb-4">From 40% to 98%+ STP</h2>
                        <p className="text-text-body text-lg">
                            Cross-border payments currently suffer from low Straight-Through Processing rates. ioNova changes the game by structuring data <em>before</em> it hits the payment rails.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="text-4xl font-bold text-slate-300 mb-2">40%</div>
                            <h3 className="font-semibold text-navy-950 mb-2">Current State</h3>
                            <p className="text-sm text-text-body">Typical cross-border STP rates due to unstructured data friction.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                            <ArrowRight className="h-8 w-8 text-blue-300" />
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-t-green-500">
                            <div className="text-4xl font-bold text-green-600 mb-2">98%+</div>
                            <h3 className="font-semibold text-navy-950 mb-2">With ioNova</h3>
                            <p className="text-sm text-text-body">Near-perfect STP achieved through deterministic address structuring.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screening Precision */}
            <section className="py-20 bg-background">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 bg-navy-950 text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-6">The "Paris" Problem Solved</h3>
                            <div className="space-y-6">
                                <div className="border-b border-white/10 pb-4">
                                    <p className="text-sky-200 text-sm mb-1">Unstructured Input:</p>
                                    <code className="text-white font-mono">"Paris Hilton Hotel, New York"</code>
                                    <p className="mt-2 text-red-300 text-sm flex items-center gap-2"><AlertTriangle className="h-3 w-3" /> Flagged: Contains "Paris" (Sanctioned entity check?)</p>
                                </div>
                                <div>
                                    <p className="text-sky-200 text-sm mb-1">Structured Output:</p>
                                    <div className="bg-white/10 p-3 rounded text-sm font-mono space-y-1">
                                        <div>&lt;TwnNm&gt;New York&lt;/TwnNm&gt;</div>
                                        <div>&lt;Nm&gt;Paris Hilton Hotel&lt;/Nm&gt;</div>
                                    </div>
                                    <p className="mt-2 text-green-400 text-sm flex items-center gap-2"><CheckCircle className="h-3 w-3" /> Clear: "Paris" identified as Name, not City.</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-6">
                                <ShieldCheck className="h-6 w-6 text-indigo-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-navy-950 mb-4">Reduce False Positives by 30%</h2>
                            <p className="text-text-body text-lg mb-6">
                                Sanctions screening generates massive false positives because it cannot distinguish context in unstructured text.
                            </p>
                            <p className="text-text-body">
                                By explicitly tagging cities, names, and streets, ioNova prevents your screening engine from flagging "Paris" the person as "Paris" the city, or "Cuba Avenue" as a sanctioned country.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Readiness */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50">
                <div className="container text-center max-w-3xl">
                    <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-6">
                        <Cpu className="h-6 w-6 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy-950 mb-6">Foundation for the AI Bank</h2>
                    <p className="text-lg text-text-body mb-8">
                        You cannot build AI automation on top of unstructured, dirty data. Structured address data is the prerequisite foundation for future banking automation, predictive analytics, and personalized customer experiences.
                    </p>
                    <Button variant="outline" asChild>
                        <Link to="/platform">Explore Our AI Architecture</Link>
                    </Button>
                </div>
            </section>
        </Layout>
    );
}
