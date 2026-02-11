import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { UserPen, Server, Briefcase, Code, Star, CheckCircle } from "lucide-react";
import { Link } from "@/lib/router-shim";

const LABELS: Record<OptionId, string> = {
  manual: "Manual Repair",
  legacy: "Legacy System",
  consultant: "External Consultants",
  generic: "Generic Parser Tool",
  ionova: "ioNova",
};

type OptionId = "manual" | "legacy" | "consultant" | "generic" | "ionova";

const OPTIONS: { id: OptionId; name: string; icon: React.ElementType; isIonova?: boolean }[] = [
  { id: "manual", name: "Manual Repair", icon: UserPen },
  { id: "legacy", name: "Legacy System", icon: Server },
  { id: "consultant", name: "Consultants", icon: Briefcase },
  { id: "generic", name: "Generic Parser", icon: Code },
  { id: "ionova", name: "ioNova", icon: Star, isIonova: true },
];

const STATIC_MIN = 0;
const STATIC_MAX = 500_000;
const STATIC_STEP = 5000;
const MONTHLY_MIN = 0;
const MONTHLY_MAX = 50_000;
const MONTHLY_STEP = 500;

const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function computeCosts(staticVol: number, monthlyVol: number) {
  const costManual = staticVol * 5 + monthlyVol * 60 * 5;
  const costLegacy = staticVol * 3.5 + monthlyVol * 60 * 3.5 + 50000;
  const costConsultant = staticVol * 6 + monthlyVol * 60 * 2 + 20000;
  const costGeneric = staticVol * 2 + monthlyVol * 60 * 2 + 10000;
  const costIonova = staticVol * 0.5 + monthlyVol * 60 * 0.2 + 5000;
  return {
    manual: costManual,
    legacy: costLegacy,
    consultant: costConsultant,
    generic: costGeneric,
    ionova: costIonova,
  };
}

export default function ROICalculator() {
  const [staticVolume, setStaticVolume] = useState(50_000);
  const [monthlyVolume, setMonthlyVolume] = useState(2_000);
  const [calculatedVolumes, setCalculatedVolumes] = useState<{ static: number; monthly: number } | null>(null);
  const [currentOption, setCurrentOption] = useState<OptionId>("manual");

  const hasCalculated = calculatedVolumes !== null;
  const displayStatic = calculatedVolumes?.static ?? 0;
  const displayMonthly = calculatedVolumes?.monthly ?? 0;
  const costs = computeCosts(displayStatic, displayMonthly);
  const selectedCost = costs[currentOption];
  const savings = hasCalculated ? selectedCost - costs.ionova : 0;

  let resultText = "Set volumes with the sliders and click Calculate to see cost analysis.";
  if (hasCalculated && currentOption !== "ionova") {
    resultText =
      savings > 0
        ? `You can save ${currencyFormat.format(savings)} with ioNova compared to ${LABELS[currentOption]}.`
        : `ioNova is comparable in price to ${LABELS[currentOption]}.`;
  }

  const handleCalculate = () => {
    setCalculatedVolumes({ static: staticVolume, monthly: monthlyVolume });
  };

  return (
    <Layout>
      <div className="ds-v5">
        <div className="container">
          <section className="hero" id="roi-calculator">
            <div className="hero-badge">
              <span className="pulse-dot"></span>
              <span style={{ position: "relative", zIndex: 1 }}>ROI Calculator</span>
            </div>

            <h1>
              Compliance <span className="accent">Cost Calculator</span>
            </h1>

            <p className="hero-sub">
              Adjust the sliders for your address volumes, then click Calculate to <br /> compare 5-year costs across manual repair, legacy systems, <br /> consultants, generic tools, and ioNova.
            </p>

            <div className="narrative" style={{ marginTop: "var(--space-2xl)", marginBottom: "var(--space-lg)", textAlign: "left", maxWidth: "700px", width: "100%" }}>
              <div style={{ marginBottom: "var(--space-md)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "var(--space-sm)" }}>
                  Vol. Unstructured Addresses (Static DB): {staticVolume.toLocaleString()}
                </div>
                <div className="roi-slider-wrapper">
                  <Slider
                    value={[staticVolume]}
                    onValueChange={(v) => setStaticVolume(v[0] ?? STATIC_MIN)}
                    min={STATIC_MIN}
                    max={STATIC_MAX}
                    step={STATIC_STEP}
                    className="w-full [&>span:first-child]:bg-slate-200 [&>span:first-child>span]:bg-gradient-to-r [&>span:first-child>span]:from-blue-900 [&>span:first-child>span]:to-navy-950 [&>span:last-child]:border-navy-950"
                  />
                </div>
              </div>
              <div style={{ marginBottom: "var(--space-md)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "15px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "var(--space-sm)" }}>
                  Vol. Processed Per Month: {monthlyVolume.toLocaleString()}
                </div>
                <div className="roi-slider-wrapper">
                  <Slider
                    value={[monthlyVolume]}
                    onValueChange={(v) => setMonthlyVolume(v[0] ?? MONTHLY_MIN)}
                    min={MONTHLY_MIN}
                    max={MONTHLY_MAX}
                    step={MONTHLY_STEP}
                    className="w-full [&>span:first-child]:bg-slate-200 [&>span:first-child>span]:bg-gradient-to-r [&>span:first-child>span]:from-blue-900 [&>span:first-child>span]:to-navy-950 [&>span:last-child]:border-navy-950"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "var(--space-lg)", marginTop: "var(--space-xl)" }}>
                <Button onClick={handleCalculate} className="btn btn-accent btn-lg" type="button">
                  Calculate
                </Button>
              </div>
            </div>

            {hasCalculated && (
              <>
                <div className="kpi-grid" style={{ maxWidth: "500px", margin: "0 auto var(--space-md)" }}>
                  <div className="kpi-tile" style={{ gridColumn: "1 / -1", padding: "var(--space-md)" }}>
                    <div className="kpi-label">Total 5-Year Cost of Operations</div>
                    <div className="kpi-value gradient">{currencyFormat.format(selectedCost)}</div>
                    <div className="kpi-label" style={{ marginTop: "var(--space-xs)", fontSize: "14px" }}>
                      Cost using {LABELS[currentOption]}
                    </div>
                  </div>
                </div>

                <div className="sub-label" style={{ marginTop: "var(--space-sm)", marginBottom: "var(--space-xs)" }}>Select an approach to compare</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "var(--space-sm)", marginTop: 0, marginBottom: "var(--space-md)", maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}>
                  {OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const active = currentOption === opt.id;
                    const isIonova = opt.isIonova === true;
                    let borderColor: string | undefined;
                    let background: string | undefined;
                    if (active) {
                      borderColor = isIonova ? "var(--alert-green)" : "var(--blue-500)";
                      background = isIonova ? "var(--alert-green-soft)" : "var(--surface-3)";
                    }
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCurrentOption(opt.id)}
                        className="philosophy-card"
                        style={{ cursor: "pointer", borderColor, background, padding: "var(--space-md)" }}
                      >
                        <div className={`philosophy-icon ${isIonova ? "ic-teal" : "ic-blue"}`} style={{ width: "2.5rem", height: "2.5rem", marginBottom: "var(--space-sm)" }}>
                          <Icon size={20} />
                        </div>
                        <div className="philosophy-title" style={{ fontSize: "14px" }}>{opt.name}</div>
                      </button>
                    );
                  })}
                </div>

                <div
                  className={currentOption === "ionova" ? "narrative-highlight" : "narrative"}
                  style={{
                    maxWidth: "600px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: "var(--space-sm) var(--space-md)",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: currentOption === "ionova" ? "var(--alert-green-soft)" : "var(--surface-2)",
                    borderLeft: currentOption === "ionova" ? "3px solid var(--alert-green)" : undefined,
                  }}
                >
                  {currentOption === "ionova" && (
                    <p style={{ margin: 0, display: "flex", alignItems: "center", gap: "var(--space-sm)", flexWrap: "wrap" }}>
                      <CheckCircle style={{ color: "var(--alert-green)", flexShrink: 0 }} size={20} />
                      You have chosen the lowest cost path to ISO 20022 compliance.
                    </p>
                  )}
                  {currentOption !== "ionova" && savings > 0 && (
                    <p style={{ margin: 0 }}>
                      You can save <strong style={{ color: "var(--blue-500)" }}>{currencyFormat.format(savings)}</strong> with ioNova compared to {LABELS[currentOption]}.
                    </p>
                  )}
                  {currentOption !== "ionova" && savings <= 0 && <p style={{ margin: 0 }}>{resultText}</p>}
                </div>
              </>
            )}

            {!hasCalculated && (
              <div className="narrative-highlight" style={{ maxWidth: "600px", margin: "0 auto" }}>
                <p style={{ margin: 0 }}>{resultText}</p>
              </div>
            )}

            <div style={{ marginTop: "var(--space-xl)", textAlign: "center" }}>
              <Link to="/demo" className="btn btn-accent btn-lg">
                Schedule a Demo
                <svg viewBox="0 0 24 24" style={{ width: 18, height: 18, marginLeft: 8 }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
