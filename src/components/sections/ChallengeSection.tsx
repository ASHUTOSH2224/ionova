import { AlertTriangle, Clock, XCircle } from "lucide-react";

export function ChallengeSection() {
  return (
    <section className="bg-surface-2 py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
              <AlertTriangle className="h-4 w-4" />
              The "Financial Y2K" Challenge
            </div>
            <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl lg:text-5xl">
              November 2026 is a Binary Event for Global Payments
            </h2>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <p className="text-xl font-bold text-destructive mb-4">The Clock is Ticking</p>
              <h3 className="text-4xl font-bold text-navy-950">You Are Entering the 9-Month Implementation Window</h3>
              {/* Dynamic Counter Placeholder */}
              <div className="mt-6 inline-block bg-navy-950 text-white px-8 py-4 rounded-xl font-mono text-2xl shadow-lg">
                Countdown to Nov 2026
              </div>
            </div>

            {/* Visual Timeline */}
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
          </div>
        </div>
      </div>
    </section>
  );
}
