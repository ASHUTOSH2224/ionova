import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-shim";
import { ArrowRight, CheckCircle, AlertTriangle, FileText, Globe, Clock } from "lucide-react";

import { AppWrapper } from "@/components/AppWrapper";

function StructuredMandateContent() {
    // Dynamic Date Calculation
    const currentDate = new Date();
    const currentMonthStr = currentDate.toLocaleString('default', { month: 'short' });
    const currentYearShort = currentDate.getFullYear().toString().slice(-2);
    const displayDate = `${currentMonthStr} '${currentYearShort}`;

    // Calculate months remaining until Nov 2026 (Deadline)
    // Target: Nov 1, 2026
    const targetDate = new Date('2026-11-01');
    const totalMonthsRemaining = (targetDate.getFullYear() - currentDate.getFullYear()) * 12 + (targetDate.getMonth() - currentDate.getMonth());

    // Ensure we don't show negative numbers if passed
    const monthsRemaining = Math.max(0, totalMonthsRemaining);

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-hero pt-24 pb-12 lg:pt-32 lg:pb-16">
                <div className="container relative z-10">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                            The Regulatory Mandate: <span className="text-gradient-accent">Structured Data</span> is No Longer Optional.
                        </h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
                            Establish a compliant baseline. Understand the shift from unstructured blocks to granular, semantic address components required by SWIFT, SEPA, and CPMI.
                        </p>
                        {/*<div className="flex justify-center">
                            <Button variant="hero" size="xl" asChild>
                                <Link to="/demo">
                                    Start Your Compliance Journey
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>*/}
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

                    {/* Modern Timeline Layout */}
                    <div className="relative mt-12 md:mt-16">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[-22px] left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-slate-200 rounded-full z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">

                            {/* Card 1: Past */}
                            <div className="group relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                {/* Connector Dot (Desktop) */}
                                <div className="hidden md:block absolute -top-[32px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow-sm z-10"></div>
                                {/* Mobile Line */}
                                <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-blue-200 rounded-l-xl"></div>

                                <div className="mb-3">
                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded tracking-wider">Completed</span>
                                </div>
                                <h4 className="font-bold text-xl text-navy-950 mb-2">Nov '25</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    MT Format refused for payment messages. The legacy era officially began its end.
                                </p>
                            </div>

                            {/* Card 2: NOW (Active) */}
                            <div className="group relative bg-blue-600 p-6 rounded-xl border border-blue-500 shadow-lg transform md:-translate-y-4">
                                {/* Connector Dot (Desktop) - Adjusted for card lift */}
                                <div className="hidden md:block absolute -top-[18px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-lg z-10 animate-pulse"></div>
                                {/* Mobile Line */}
                                <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-white/30 rounded-l-xl"></div>

                                <div className="mb-3 flex items-center justify-between">
                                    <span className="px-2 py-1 bg-white/20 text-white text-xs font-bold uppercase rounded tracking-wider backdrop-blur-sm">Current Phase</span>
                                    <Clock className="w-4 h-4 text-white/80" />
                                </div>
                                <h4 className="font-bold text-xl text-white mb-2">{displayDate}</h4>
                                <p className="text-sm text-blue-50 leading-relaxed font-medium">
                                    {monthsRemaining > 0
                                        ? `Start of the ${monthsRemaining}-Month Critical Implementation Window. Action is required now to meet the deadline.`
                                        : "Implementation Deadline Reached. Immediate compliance action required."}
                                </p>
                            </div>

                            {/* Card 3: Deadline (Future) */}
                            <div className="group relative bg-white p-6 rounded-xl border-l-4 border-l-red-500 md:border-l md:border-t-4 md:border-t-red-500 border-slate-200 shadow-sm hover:shadow-md transition-all">
                                {/* Connector Dot (Desktop) */}
                                <div className="hidden md:block absolute -top-[32px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-navy-950 border-4 border-white shadow-sm z-10"></div>

                                <div className="mb-3">
                                    <span className="px-2 py-1 bg-red-50 text-red-700 text-xs font-bold uppercase rounded tracking-wider">Hard Deadline</span>
                                </div>
                                <h4 className="font-bold text-xl text-navy-950 mb-2">Nov '26</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Unstructured addresses refused by SEPA and SWIFT. Non-compliant payments will fail.
                                </p>
                            </div>

                            {/* Card 4: Future */}
                            <div className="group relative bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all opacity-80 hover:opacity-100">
                                {/* Connector Dot (Desktop) */}
                                <div className="hidden md:block absolute -top-[32px] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-slate-300 border-4 border-white shadow-sm z-10"></div>
                                {/* Mobile Line */}
                                <div className="md:hidden absolute left-0 top-0 bottom-0 w-1 bg-slate-200 rounded-l-xl"></div>

                                <div className="mb-3">
                                    <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold uppercase rounded tracking-wider">Upcoming</span>
                                </div>
                                <h4 className="font-bold text-xl text-slate-500 mb-2">Nov '27</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    E&I Mandate comes into full effect, requiring even stricter compliance standards.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="mt-16 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                        <div className="bg-navy-950 text-white p-6 md:p-8 text-center">
                            <h3 className="text-2xl font-bold mb-2">Hybrid-Only vs. Full Structured</h3>
                            <p className="text-sky-200/80">Why settling for partial compliance is a risky strategy.</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-4 md:p-6 font-semibold text-slate-500 uppercase text-xs tracking-wider w-1/3">Feature / Risk</th>
                                        <th className="p-4 md:p-6 font-bold text-red-600 bg-red-50/50 w-1/3">Hybrid-Only Implementation</th>
                                        <th className="p-4 md:p-6 font-bold text-blue-600 bg-blue-50/50 w-1/3">IoNova Structured Approach</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 md:p-6 font-medium text-navy-950">Address Handling</td>
                                        <td className="p-4 md:p-6 text-slate-600 bg-red-50/10">
                                            <div className="flex items-start gap-2">
                                                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                                <span>Manual repair required for complex addresses</span>
                                            </div>
                                        </td>
                                        <td className="p-4 md:p-6 text-navy-950 bg-blue-50/10 font-medium">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Automated 98%+ STP Day 1</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 md:p-6 font-medium text-navy-950">Cross-Border STP</td>
                                        <td className="p-4 md:p-6 text-slate-600 bg-red-50/10">
                                            <div className="flex items-start gap-2">
                                                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                                <span>Cannot guarantee 100% STP success</span>
                                            </div>
                                        </td>
                                        <td className="p-4 md:p-6 text-navy-950 bg-blue-50/10 font-medium">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>High confidence, validated output</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 md:p-6 font-medium text-navy-950">Future Readiness</td>
                                        <td className="p-4 md:p-6 text-slate-600 bg-red-50/10">
                                            <div className="flex items-start gap-2">
                                                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                                <span>Will require new investment by 2027</span>
                                            </div>
                                        </td>
                                        <td className="p-4 md:p-6 text-navy-950 bg-blue-50/10 font-medium">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Future-proof for E&I Mandate</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 md:p-6 font-medium text-navy-950">Legacy Impact</td>
                                        <td className="p-4 md:p-6 text-slate-600 bg-red-50/10">
                                            <div className="flex items-start gap-2">
                                                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                                <span>Adds technical debt to existing stack</span>
                                            </div>
                                        </td>
                                        <td className="p-4 md:p-6 text-navy-950 bg-blue-50/10 font-medium">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span>Zero legacy overhaul required</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default function StructuredMandate() {
    return (
        <AppWrapper>
            <StructuredMandateContent />
        </AppWrapper>
    );
}
