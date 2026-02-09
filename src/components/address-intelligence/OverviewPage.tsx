import { useRef, useEffect } from 'react';

interface Props {
  navigate: (page: string) => void;
}

export function OverviewPage({ navigate }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-nav]');
      if (target) {
        e.preventDefault();
        navigate(target.getAttribute('data-nav')!);
      }
    };
    el.addEventListener('click', handler);
    return () => el.removeEventListener('click', handler);
  }, [navigate]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const q = (e.target as HTMLElement).closest('.faq-q');
      if (q) {
        q.parentElement?.classList.toggle('open');
      }
    };
    el.addEventListener('click', handler);
    return () => el.removeEventListener('click', handler);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
    el.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}

const PAGE_HTML = `<div class="hero">
    <div class="hero-badge"><span class="pulse-dot"></span><span style="position:relative;z-index:1">Address Intelligence Platform</span></div>
    <h1>The Missing Layer in Your <span class="accent">Payment Infrastructure</span></h1>
    <p class="hero-sub"><strong>Every cross-border payment carries an address. Most of them are wrong.</strong> Unstructured, inconsistent address data costs the global payments industry $8–12 billion annually. With ISO 20022 mandating structured addresses by November 2026, the question is whether you build to the floor—or the ceiling.</p>
    <div class="btn-row">
      <button class="btn btn-accent" data-nav="business" style="cursor:pointer">Calculate Your Savings <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
      <button class="btn btn-outline">Request a Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
    </div>
  </div>

  
  <div class="kpi-grid">
    <div class="kpi-tile"><div class="kpi-value">$8-12B</div><div class="kpi-label">Annual Industry Cost</div></div>
    <div class="kpi-tile"><div class="kpi-value blue">98%+</div><div class="kpi-label">STP Rate Achieved</div></div>
    <div class="kpi-tile"><div class="kpi-value teal">~30%</div><div class="kpi-label">Fewer False Positives</div></div>
    <div class="kpi-tile"><div class="kpi-value">195</div><div class="kpi-label">Countries Covered</div></div>
  </div>

  
  <div class="section">
    <div class="section-label">Definition</div>
    <div class="section-title">What Is Address Intelligence?</div>
    <div class="content-block" style="margin-top:var(--space-lg)">
      <p>Address intelligence is the capability to parse, validate, enrich, and structure postal address data within financial messaging systems to meet ISO 20022 compliance and operational quality standards.</p>
      <p>Unlike conventional address validation—which confirms whether a physical location exists for postal delivery—address intelligence operates at the intersection of <strong>regulatory compliance</strong>, <strong>financial crime prevention</strong>, and <strong>payment processing efficiency</strong>.</p>
      <p>It transforms unstructured address blocks into granular, semantically tagged components including <code style="font-family:var(--font-mono);font-size:13px;background:var(--surface-2);padding:2px 6px;border-radius:4px">&lt;StrtNm&gt;</code>, <code style="font-family:var(--font-mono);font-size:13px;background:var(--surface-2);padding:2px 6px;border-radius:4px">&lt;TwnNm&gt;</code>, <code style="font-family:var(--font-mono);font-size:13px;background:var(--surface-2);padding:2px 6px;border-radius:4px">&lt;PstCd&gt;</code>, and <code style="font-family:var(--font-mono);font-size:13px;background:var(--surface-2);padding:2px 6px;border-radius:4px">&lt;Ctry&gt;</code>—the regulatory format mandated by EPC, SWIFT, and CPMI/BIS.</p>
    </div>
  </div>

  
  <div class="section">
    <div class="section-label">Core Framework</div>
    <div class="section-title">The Four Pillars of Address Intelligence</div>
    <div class="section-desc">Each pillar represents a critical dimension of the payment address challenge—with its own dedicated deep-dive.</div>

    <div class="pillar-grid">
      <div class="pillar-card" data-nav="mandate" style="cursor:pointer">
        <div class="icon-container ic-teal"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
        <div class="pillar-num">Pillar 1 · The Regulatory Mandate</div>
        <h3>ISO 20022 Structured Address Requirements</h3>
        <p>Structured addresses are what regulators actually require. Hybrid is the allowed minimum fallback—not the target. This distinction matters.</p>
        <span class="pillar-link">Explore the mandate <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </div>

      <div class="pillar-card" data-nav="business" style="cursor:pointer">
        <div class="icon-container ic-blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
        <div class="pillar-num">Pillar 2 · The Business Case</div>
        <h3>Business Value Beyond Compliance</h3>
        <p>The $8–12 billion cost of poor address data is a structural drain. Institutions that structure addresses achieve 98%+ STP and 30–50x ROI.</p>
        <span class="pillar-link">See the economics <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </div>

      <div class="pillar-card" data-nav="implementation" style="cursor:pointer">
        <div class="icon-container ic-cyan"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
        <div class="pillar-num">Pillar 3 · The Implementation Reality</div>
        <h3>One Integration. Full Compliance. Zero Legacy Overhaul.</h3>
        <p>The sidecar architecture sits alongside existing infrastructure—connecting via API to MuleSoft, Volante, and Finastra—in 10–16 weeks.</p>
        <span class="pillar-link">See how it works <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </div>

      <div class="pillar-card" data-nav="purpose" style="cursor:pointer">
        <div class="icon-container ic-navy"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="pillar-num">Pillar 4 · The Competitive Clarity</div>
        <h3>Why Payment Addresses Require Purpose-Built Intelligence</h3>
        <p>Postal validation ≠ payment validation. Generic tools and off-the-shelf LLMs fail for fundamentally different reasons.</p>
        <span class="pillar-link">Understand why <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      </div>
    </div>
  </div>

  
  <div class="section">
    <div class="section-label">Differentiation</div>
    <div class="section-title">The ioNova Difference</div>
    <table class="comp-table">
      <thead><tr><th>Capability</th><th>Generic Tools</th><th>ioNova Intelligence</th></tr></thead>
      <tbody>
        <tr><td>Primary design</td><td>Postal delivery validation</td><td>Payment compliance resolution</td></tr>
        <tr><td>Output format</td><td>Standardised postal format</td><td>ISO 20022 structured XML elements</td></tr>
        <tr><td>Coverage</td><td>Major markets only</td><td>195 countries, 50+ writing systems</td></tr>
        <tr><td>Geographic disambiguation</td><td>Limited or none</td><td>Full context-aware resolution</td></tr>
        <tr><td>Financial ID preservation</td><td>Not supported</td><td>LEI, IBAN, BIC preserved</td></tr>
        <tr><td>Audit trail</td><td>Minimal</td><td>Full deterministic provenance</td></tr>
        <tr><td>STP improvement</td><td>Marginal</td><td>From ~40% to 98%+</td></tr>
        <tr><td>Implementation</td><td>6–18 months</td><td>10–16 weeks</td></tr>
      </tbody>
    </table>
  </div>

  
  <div class="section">
    <div class="section-label">Stakeholders</div>
    <div class="section-title">Who Benefits from Address Intelligence</div>
    <div class="persona-grid">
      <div class="persona-card"><div class="persona-role">Heads of Payments Operations</div><div class="persona-desc">Reduce manual exception handling by up to 95% and achieve STP rates above 98% across cross-border corridors.</div></div>
      <div class="persona-card"><div class="persona-role">Chief Compliance Officers</div><div class="persona-desc">Meet the November 2026 structured address mandate with full regulatory documentation and deterministic audit trails.</div></div>
      <div class="persona-card"><div class="persona-role">Chief Technology Officers</div><div class="persona-desc">Integrate without legacy system replacement, using standard API connectivity to existing middleware platforms.</div></div>
      <div class="persona-card"><div class="persona-role">Financial Crime Teams</div><div class="persona-desc">Reduce sanctions screening false positives by ~30% through field-level address matching rather than string comparison.</div></div>
    </div>
  </div>

  
  <div class="section">
    <div class="section-label">FAQ</div>
    <div class="section-title">Frequently Asked Questions</div>
    <div class="faq-list">
      <div class="faq-item"><div class="faq-q">What is the difference between address validation and address intelligence?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">Address validation confirms that a physical location exists—"can a letter be delivered here?" Address intelligence resolves, structures, and enriches address data for financial compliance—"does this address identify a legal entity in a format that satisfies ISO 20022, sanctions screening, and payment routing across 195 countries?" These are fundamentally different problems.</div></div>
      <div class="faq-item"><div class="faq-q">What is the difference between structured and hybrid addresses?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">A structured address populates all components in dedicated XML elements: &lt;StrtNm&gt;, &lt;BldgNb&gt;, &lt;TwnNm&gt;, &lt;PstCd&gt;, &lt;Ctry&gt;. A hybrid uses some structured elements plus free-text address lines. Structured is the regulatory mandate; hybrid is the allowed fallback. Because hybrid is a subset of structured, delivering structured automatically satisfies hybrid with identical implementation effort.</div></div>
      <div class="faq-item"><div class="faq-q">What does ISO 20022 require for payment addresses?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">ISO 20022 mandates that payment messages contain address data in structured XML elements rather than free-text blocks. This means addresses must be broken into discrete, semantically tagged components—street name, building number, postal code, town name, and country code—within the ISO 20022 postal address schema. The European Payments Council (EPC), SWIFT CBPR+, and CPMI/BIS all converge on structured addressing as the target state, with November 2026 as the enforcement milestone for SWIFT traffic.</div></div>
      <div class="faq-item"><div class="faq-q">How does address intelligence improve sanctions screening?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">When address data is unstructured, sanctions screening engines perform string-level matching, which generates enormous false positive rates—often exceeding 95%. For example, "Cuba Street, Wellington" triggers Cuba sanctions alerts. With structured addresses, screening operates at field level: matching &lt;Ctry&gt; against sanctioned jurisdictions and &lt;TwnNm&gt; against city databases independently. This reduces false positives by approximately 30%, allowing compliance teams to focus on genuine risk rather than clearing noise.</div></div>
      <div class="faq-item"><div class="faq-q">Can AI or LLMs be used for payment address parsing?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">Large language models (LLMs) are architecturally unsuited for payment address compliance. They produce non-deterministic output—identical inputs may yield different results across invocations—which is incompatible with sanctions screening and audit requirements. LLMs can hallucinate postal codes, fabricate building numbers, or select the wrong city. They also introduce 1–5 second latency per request (payments require sub-100ms), and operate as black boxes without the explainability regulators demand. Purpose-built, deterministic address resolution engines are the only approach that satisfies regulatory, operational, and audit requirements simultaneously.</div></div>
      <div class="faq-item"><div class="faq-q">How does it work with existing payment systems?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">ioNova operates as a "sidecar" service—connecting to existing payment infrastructure via standard API without replacing or modifying core systems. Integration works with MuleSoft, Volante, Finastra, and similar middleware solutions.</div></div>
      <div class="faq-item"><div class="faq-q">How long does implementation take?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">Typical implementation completes in 10–16 weeks: weeks 1–4 for analysis and configuration, weeks 5–10 for integration and testing, and weeks 11–16 for production deployment. No legacy system changes are required.</div></div>
      <div class="faq-item"><div class="faq-q">What countries and writing systems does address intelligence support?<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div><div class="faq-a">ioNova's address intelligence engine covers 195 countries and over 50 writing systems natively—including Latin, Cyrillic, Arabic, Chinese, Japanese, Korean (CJK), Devanagari, Thai, and Hebrew scripts. This is critical for cross-border payment processing where addresses arrive in multiple scripts and formats. Unlike postal validation tools that focus primarily on major Latin markets, purpose-built payment address resolution handles script normalisation, transliteration, and multi-format parsing from day one.</div></div>
    </div>
  </div>

  
  <div class="cta-section">
    <h3>Start Your Address Intelligence Journey</h3>
    <p>The November 2026 deadline is approaching. The business case is proven. The implementation path is clear.</p>
    <div class="btn-row"><button class="btn btn-accent">Calculate Your ROI <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button><button class="btn btn-outline" style="border-color:rgba(255,255,255,0.25);color:#fff">Request a Demo</button></div>
  </div>`;
