import { MapPin, ArrowRight, Globe } from "lucide-react";

export function ParisProblemSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Left - Content */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-500">
                <MapPin className="h-4 w-4" />
                Differentiation
              </div>
              
              <h2 className="mb-6 text-3xl font-bold text-navy-950 md:text-4xl">
                Why Generic Parsers Fail Banking Standards
              </h2>
              
              <p className="mb-6 text-lg leading-relaxed text-text-label">
                Generic AI cannot distinguish context. ioNova uses{" "}
                <span className="font-semibold text-blue-600">multi-signal analysis</span>{" "}
                to correctly resolve geographic ambiguities and automatically maps 
                historical name changes—ensuring STP (Straight-Through Processing).
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20">
                    <ArrowRight className="h-3 w-3 text-cyan-400" />
                  </div>
                  <p className="text-text-muted">
                    <span className="font-medium text-navy-950">"Paris, TX"</span> vs{" "}
                    <span className="font-medium text-navy-950">"Paris, France"</span> — 
                    correctly identified every time
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20">
                    <ArrowRight className="h-3 w-3 text-cyan-400" />
                  </div>
                  <p className="text-text-muted">
                    <span className="font-medium text-navy-950">"Bombay"</span> →{" "}
                    <span className="font-medium text-navy-950">"Mumbai"</span> — 
                    historical name mapping included
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400/20">
                    <ArrowRight className="h-3 w-3 text-cyan-400" />
                  </div>
                  <p className="text-text-muted">
                    <span className="font-medium text-navy-950">"Calcutta"</span> →{" "}
                    <span className="font-medium text-navy-950">"Kolkata"</span> — 
                    automatic legacy resolution
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border bg-gradient-hero p-8 shadow-2xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-500/20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />
                
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <Globe className="h-10 w-10 text-cyan-400" />
                    <div>
                      <p className="text-sm text-sky-200/70">The Paris Problem</p>
                      <p className="text-xl font-semibold text-sky-200">Geographic Disambiguation</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg bg-sky-200/5 px-4 py-3">
                      <span className="text-sky-200/70">Input:</span>
                      <code className="text-cyan-400">"123 Main St, Paris"</code>
                    </div>
                    
                    <div className="flex justify-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                        <ArrowRight className="h-4 w-4 rotate-90 text-blue-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-teal-500/20 px-4 py-3 text-center">
                        <p className="text-xs text-sky-200/70">Context: Banking</p>
                        <p className="font-semibold text-cyan-400">Paris, FR 🇫🇷</p>
                      </div>
                      <div className="rounded-lg bg-blue-400/20 px-4 py-3 text-center">
                        <p className="text-xs text-sky-200/70">Context: US Domestic</p>
                        <p className="font-semibold text-sky-200">Paris, TX 🇺🇸</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
