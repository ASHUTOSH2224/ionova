import { useRef, useEffect, useState } from 'react';
import { PillarNav } from './PillarNav';

interface Props {
  navigate: (page: string) => void;
}

export function GovernancePage({ navigate }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll('.reveal');
    elements.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="hero">
        <div className="hero-orb"></div>
        <PillarNav activePage="governance" onNavigate={navigate} />
        <div className="hero-badge"><span className="pulse-dot"></span> Platform Pillar — Governance-by-Design</div>
        <h1>Governance Isn't What We Added Last.<br /><span className="accent">It's What We Built First.</span></h1>
        <p className="hero-sub">Every layer generates audit-grade evidence. Every decision is replayable. Every model change is versioned. Every autonomy level is gated by governance. This is the architectural foundation that makes everything else trustworthy.</p>
      </div>

      <div className="section reveal">
        <div className="section-header"><div className="section-label">The Problem</div><h2 className="section-title">AI Without Governance Is a Liability Dressed as Innovation</h2></div>
        <div className="prose">
          <p>Regulators are clear: if you can't explain it, you can't use it. The Federal Reserve's <strong>SR 11-7</strong> guidance applies to any model used in decision-making — including AI systems. The <strong>EU AI Act</strong> classifies entity resolution in financial services as high-risk AI requiring transparency, human oversight, and risk management.</p>
          <p>Most enterprise AI treats governance as an afterthought — a logging layer added post-launch, an audit trail assembled retrospectively from scattered logs. Governance-by-design means the platform produces compliance artifacts as a natural byproduct of operation. Not because someone remembered to turn on logging, but because the architecture makes it impossible to operate without producing an audit trail.</p>
        </div>
      </div>

      <div className="section reveal">
        <div className="section-header"><div className="section-label">Five Capabilities</div><h2 className="section-title">Make Your Auditor's Job Easy — and Yours Easier</h2></div>
        <div className="g2">
          <div className="card card-accent">
            <div className="icon-box ib-teal"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg></div>
            <div className="card-title">Audit-Grade Evidence Packs</div>
            <div className="card-body">Every decision generates a complete pack: input data, processing steps, matching scores, rules fired, determination, source documents, and confidence assessment. Cryptographically timestamped and immutable.</div>
          </div>
          <div className="card card-accent">
            <div className="icon-box ib-blue"><svg viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 102.13-9.36L1 10" /></svg></div>
            <div className="card-title">Complete Replayability</div>
            <div className="card-body">Any decision can be replayed to show exactly what happened, with what data, at what point in time. Deterministic reconstruction — including model version, data state, and active configuration.</div>
          </div>
          <div className="card card-accent">
            <div className="icon-box ib-cyan"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
            <div className="card-title">Drift Monitoring &amp; Alerting</div>
            <div className="card-body">Continuous monitoring of performance, data quality, and decision patterns. When accuracy degrades below thresholds, the system alerts teams and can automatically dial back autonomy levels.</div>
          </div>
          <div className="card card-accent">
            <div className="icon-box ib-navy"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg></div>
            <div className="card-title">MRM-Ready Validation Artifacts</div>
            <div className="card-body">Pre-assembled packages for model risk management: performance metrics, sensitivity analysis, bias assessment, exception tracking. Produced during normal operation, not retrofitted.</div>
          </div>
        </div>
        <div style={{ marginTop: 'var(--space-lg)' }}>
          <div className="card card-dark card-accent">
            <div className="card-label">Capability 5</div>
            <div className="card-title">Progressive Autonomy Controls</div>
            <div className="card-body">Governance gates control the four autonomy levels. Each gate requires evidence thresholds, committee approval, and documented rationale. Autonomy can be dialed back at any time — for the entire platform, a specific workflow, or a single entity type.</div>
          </div>
        </div>
      </div>

      <div className="section reveal">
        <div className="section-header"><div className="section-label">Regulatory Alignment</div><h2 className="section-title">Designed for the Regulators You Have — and the Ones Coming</h2></div>
        <table className="token-table">
          <thead><tr><th>Framework</th><th>Requirement</th><th style={{ background: 'rgba(95,207,208,.08)', color: 'var(--teal-500)' }}>ioNova Solution</th></tr></thead>
          <tbody>
            <tr><td><strong>SR 11-7</strong></td><td>Model validation, performance monitoring</td><td className="chk">MRM-ready artifacts, drift monitoring</td></tr>
            <tr><td><strong>EU AI Act</strong></td><td>Transparency, human oversight</td><td className="chk">Evidence packs, progressive autonomy</td></tr>
            <tr><td><strong>BSA/AML</strong></td><td>Transaction monitoring, record keeping</td><td className="chk">Entity audit trails, 5-year retention</td></tr>
            <tr><td><strong>GDPR</strong></td><td>Right to explanation, data lineage</td><td className="chk">Decision replayability, processing logs</td></tr>
            <tr><td><strong>DORA</strong></td><td>ICT risk management, testing</td><td className="chk">Continuous monitoring, governance controls</td></tr>
            <tr><td><strong>CTA</strong></td><td>Beneficial ownership verification</td><td className="chk">Entity resolution with ownership evidence</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section reveal">
        <div className="proof-bar" style={{ animation: 'none' }}>
          <div className="kpi-tile"><div className="kpi-value grad">80%</div><div className="kpi-label">Faster audit response</div></div>
          <div className="kpi-tile"><div className="kpi-value grad-b">100%</div><div className="kpi-label">Decision traceability</div></div>
          <div className="kpi-tile"><div className="kpi-value grad-t">SR 11-7</div><div className="kpi-label">Architecture aligned</div></div>
          <div className="kpi-tile"><div className="kpi-value grad">24/7</div><div className="kpi-label">Continuous drift detection</div></div>
        </div>
      </div>

      <div className="faq-section reveal" id="faq-governance" itemScope itemType="https://schema.org/FAQPage">
        <div className="section-header"><div className="section-label">Frequently Asked Questions</div><h2 className="section-title">Governance-by-Design — Your Questions Answered</h2></div>
        <div className="faq-list">
          {[
            {
              q: "What is governance-by-design and how is it different from adding governance after deployment?",
              a: <p><strong>Governance-by-design</strong> means the platform produces compliance artifacts as a natural byproduct of operation — not because someone remembered to turn on logging, but because the architecture makes it impossible to operate without producing an audit trail. Most enterprise AI treats governance as an afterthought: a logging layer added post-launch, an audit trail assembled retrospectively from scattered logs. ioNova inverts this: governance is the foundation every other layer rests upon. Every decision automatically generates evidence packs, every model change is versioned, every autonomy level is gated by governance controls. This is architecturally enforced, not policy-dependent.</p>
            },
            {
              q: "How does ioNova help with SR 11-7 compliance for AI systems?",
              a: <p>The Federal Reserve's <strong>SR 11-7</strong> guidance applies to any model used in decision-making — including AI systems used in entity resolution, risk scoring, and compliance workflows. ioNova addresses SR 11-7 requirements through: <strong>MRM-ready validation artifacts</strong> including performance metrics, sensitivity analysis, bias assessment, and exception tracking — produced during normal operation, not retrofitted. <strong>Continuous drift monitoring</strong> that tracks model performance and data quality 24/7 and automatically alerts teams when accuracy degrades. <strong>Complete decision replayability</strong> for deterministic reconstruction of any decision including model version, data state, and active configuration. These capabilities mean Model Risk Management reviews can be supported with platform-generated evidence rather than manually assembled documentation.</p>
            },
            {
              q: "How does ioNova comply with the EU AI Act requirements for high-risk AI?",
              a: <p>The <strong>EU AI Act</strong> classifies entity resolution in financial services as high-risk AI, requiring transparency, human oversight, and risk management. ioNova meets these requirements through: <strong>evidence packs</strong> that provide full transparency into every AI decision; <strong>progressive autonomy controls</strong> that enforce human oversight at every level with configurable governance gates; and <strong>MRM-ready artifacts</strong> that document risk management processes. Additionally, the cascade architecture ensures 90% of decisions are made by deterministic systems (Stages 1–3), which are inherently more transparent and explainable than opaque LLM reasoning — a significant advantage when demonstrating compliance to European regulators.</p>
            },
            {
              q: "What is AI drift monitoring and why does it matter for compliance?",
              a: <p><strong>AI drift monitoring</strong> is the continuous surveillance of an AI system's performance, data quality, and decision patterns to detect degradation over time. In regulated environments, undetected drift can mean the difference between a compliant system and a compliance violation. ioNova monitors for data drift (changes in input distributions), model drift (degradation in accuracy or confidence patterns), and concept drift (shifts in what constitutes correct decisions). When metrics fall below configurable thresholds, the system alerts teams and can automatically dial back autonomy levels — ensuring that a Level 3 (Execute) workflow reverts to Level 2 (Prepare) or lower until the issue is resolved.</p>
            },
            {
              q: "Which regulatory frameworks does ioNova support beyond SR 11-7 and the EU AI Act?",
              a: <p>ioNova is architecturally aligned with six major regulatory frameworks: <strong>SR 11-7</strong> (model validation and performance monitoring via MRM-ready artifacts and drift monitoring), <strong>EU AI Act</strong> (transparency and human oversight via evidence packs and progressive autonomy), <strong>BSA/AML</strong> (transaction monitoring and record keeping via entity audit trails with 5-year retention), <strong>GDPR</strong> (right to explanation and data lineage via decision replayability and processing logs), <strong>DORA</strong> (ICT risk management and testing via continuous monitoring and governance controls), and <strong>CTA</strong> (beneficial ownership verification via entity resolution with ownership evidence chains). The platform is designed for the regulators you have — and the ones coming.</p>
            }
          ].map((item, i) => (
            <div key={i} className={`faq-item ${openFaqs[i] ? 'open' : ''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <div className="faq-q" itemProp="name" onClick={() => toggleFaq(i)}>
                {item.q}<svg className="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
              <div className="faq-a" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div className="faq-a-inner" itemProp="text">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-band"><h2 className="cta-hl">Governance Should Accelerate AI, <span className="text-grad">Not Slow It Down.</span></h2><p className="cta-sub">Audit-grade by architecture. Compliant by design. Ready today.</p><div className="cta-btns"><a className="btn btn-accent btn-lg">See Governance in Action</a><a className="btn btn-outline">Download Regulatory Guide</a></div></div>
    </div>
  );
}
