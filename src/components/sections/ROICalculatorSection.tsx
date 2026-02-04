import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

export function ROICalculatorSection() {
  const [volume, setVolume] = useState("");
  const [repairCost, setRepairCost] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    if (volume && repairCost && teamSize) {
      setShowResults(true);
    }
  };

  // Simple calculation logic
  const monthlyVolume = parseFloat(volume) || 0;
  const costPerPayment = parseFloat(repairCost) || 0;
  const ftes = parseFloat(teamSize) || 0;
  
  const annualSavings = (monthlyVolume * costPerPayment * 12 * 0.7) + (ftes * 80000 * 0.5);
  const fiveYearSavings = annualSavings * 5;

  return (
    <section id="roi-calculator" className="bg-background py-16 lg:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600">
              <Calculator className="h-4 w-4" />
              Interactive Tool
            </div>
            <h2 className="mb-4 text-3xl font-bold text-navy-950 md:text-4xl">
              Estimate Your Compliance Savings
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-muted">
              Compare the Total Cost of Ownership (TCO) of ioNova against building 
              in-house or using generic entity parsers.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl lg:p-10">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <Label htmlFor="volume" className="text-sm font-medium text-navy-950">
                    Monthly Payment Volume
                  </Label>
                  <Input
                    id="volume"
                    type="number"
                    placeholder="e.g., 100000"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="repairCost" className="text-sm font-medium text-navy-950">
                    Current Repair Cost per Payment ($)
                  </Label>
                  <Input
                    id="repairCost"
                    type="number"
                    placeholder="e.g., 2.50"
                    step="0.01"
                    value={repairCost}
                    onChange={(e) => setRepairCost(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="teamSize" className="text-sm font-medium text-navy-950">
                    Current Compliance Team Size (FTEs)
                  </Label>
                  <Input
                    id="teamSize"
                    type="number"
                    placeholder="e.g., 5"
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
                    className="mt-2"
                  />
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={handleCalculate}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calculate Savings
                </Button>
              </div>

              {/* Results */}
              <div className={`transition-all duration-500 ${showResults ? "opacity-100" : "opacity-40"}`}>
                <div className="h-full rounded-xl bg-gradient-hero p-6 text-sky-200">
                  <h3 className="mb-6 text-lg font-semibold">Your Estimated Savings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-400/20">
                        <DollarSign className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm text-sky-200/70">Estimated 5-Year Savings</p>
                        <p className="text-3xl font-bold text-cyan-400">
                          ${showResults ? (fiveYearSavings >= 1000000 
                            ? `${(fiveYearSavings / 1000000).toFixed(1)}M+`
                            : fiveYearSavings.toLocaleString()) 
                            : "—"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-500/20">
                        <Clock className="h-6 w-6 text-teal-500" />
                      </div>
                      <div>
                        <p className="text-sm text-sky-200/70">Implementation Speed</p>
                        <p className="text-xl font-semibold">
                          <span className="text-cyan-400">15 Weeks</span>
                          <span className="mx-2 text-sky-200/50">vs</span>
                          <span className="text-sky-200/70">18 Months (In-House)</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-400/20">
                        <TrendingUp className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-sky-200/70">Annual ROI</p>
                        <p className="text-xl font-semibold text-cyan-400">
                          {showResults ? "300%+" : "—"}
                        </p>
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
