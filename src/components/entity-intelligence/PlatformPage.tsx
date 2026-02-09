import { useRef, useEffect } from 'react';

interface Props {
  navigate: (page: string) => void;
}

export function PlatformPage({ navigate }: Props) {
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
    <div class="hero-orb"></div>
    <div class="hero-badge"><span class="pulse-dot"></span> The Entity Intelligence Platform</div>
    <h1>Every Enterprise Runs on Entities.<br><span class="accent">Now They Can Finally Trust Them.</span></h1>
    <p class="hero-sub">The first platform to unify Named Entity Recognition, golden record creation, evidence-first AI copilots, and permissioned agentic automation — all governed from day one. Purpose-built for regulated industries that demand accuracy, auditability, and speed.</p>
    <div class="hero-ctas">
      <a class="btn btn-accent btn-lg">See It In Action <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
      <a class="btn btn-outline" data-nav="cascade" style="cursor:pointer">Explore the Architecture <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></a>
    </div>
    <div class="proof-bar">
      <div class="kpi-tile"><div class="kpi-value grad">&lt;200ms</div><div class="kpi-label">End-to-end entity resolution</div></div>
      <div class="kpi-tile"><div class="kpi-value grad-b">95%+</div><div class="kpi-label">NER extraction precision</div></div>
      <div class="kpi-tile"><div class="kpi-value grad-t">366%</div><div class="kpi-label">Documented 3-year ROI</div></div>
      <div class="kpi-tile"><div class="kpi-value grad">580M+</div><div class="kpi-label">Accessible entity profiles</div></div>
    </div>
  </div>

  
  <div class="section reveal">
    <div class="section-header">
      <div class="section-label">The Enterprise Entity Crisis</div>
      <h2 class="section-title">Your Most Critical Business Data Is Scattered, Duplicated, and Untrustworthy</h2>
    </div>
    <div class="g32">
      <div class="prose">
        <p>Every enterprise decision — approving a loan, onboarding a vendor, launching a campaign, settling a payment — depends on knowing exactly <strong>who or what</strong> you're dealing with. Yet the average enterprise stores entity data across 50+ systems in conflicting formats.</p>
        <p>"Acme Corp" in your CRM is "ACME Corporation" in your ERP, "Acme Inc." in compliance, and "A.C.M.E. Corp Ltd" in a counterparty's SWIFT message. Multiply this across millions of entities — and the result is a foundational trust deficit that silently degrades every downstream process.</p>
        <p>Traditional approaches force painful trade-offs. MDM platforms require multi-year rip-and-replace. Entity resolution tools offer APIs without workflows. AI copilots hallucinate. And pure LLM approaches collapse under production economics — 10 million entity comparisons monthly costs <strong>$200K–$600K</strong> in inference alone.</p>
      </div>
      <div class="decision-box">
        <div class="decision-label">Market Signal</div>
        <div class="decision-title">"40% of agentic AI projects will be scrapped by 2027"</div>
        <div class="decision-body">…largely due to integration challenges and trust gaps. The market needs extraction, resolution, and intelligence in a single, governed system.</div>
        <div style="margin-top:16px;font-family:var(--font-mono);font-size:12px;color:var(--cyan-400)">— Gartner Research</div>
      </div>
    </div>
  </div>

  
  <div class="section reveal">
    <div class="section-header">
      <div class="section-label">Platform Architecture</div>
      <h2 class="section-title">Four Layers. One Platform. Zero Integration Gaps.</h2>
      <p class="section-desc">Each layer builds on the previous to create capabilities no point solution can match.</p>
    </div>
    <div class="g2">
      <div class="card card-accent" style="cursor:pointer" data-nav="cascade" style="cursor:pointer">
        <div class="icon-box ib-teal"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
        <div class="card-label">Layer 1 — The Foundation</div>
        <div class="card-title">Entity Intelligence Core</div>
        <div class="card-body">Advanced NER with cascade entity resolution and golden record creation. Extracts persons, organizations, locations, products, and monetary values with 95%+ precision in &lt;200ms. Cascade matching: Exact (&lt;5ms) → Fuzzy (&lt;50ms) → Semantic (&lt;200ms).</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px"><span class="badge badge-accent">90%+ Duplicate Detection</span><span class="badge badge-accent">&lt;5ms Exact Match</span></div>
      </div>
      <div class="card card-accent" style="cursor:pointer" data-nav="evidence" style="cursor:pointer">
        <div class="icon-box ib-blue"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>
        <div class="card-label">Layer 2 — AI That Shows Its Work</div>
        <div class="card-title">Evidence-First Copilots</div>
        <div class="card-body">RAG-grounded assistants with mandatory citations. When a copilot states a counterparty is sanctioned, it provides the exact source, date, authority, and confidence score. Transforms generative AI into an audit-defensible decision-support system.</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px"><span class="badge badge-accent">100% Citation Coverage</span><span class="badge badge-accent">50–70% Time Savings</span></div>
      </div>
      <div class="card card-accent" style="cursor:pointer" data-nav="autonomy" style="cursor:pointer">
        <div class="icon-box ib-cyan"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
        <div class="card-label">Layer 3 — Automation That Earns Trust</div>
        <div class="card-title">Permissioned Agentic AI</div>
        <div class="card-body">Progressive autonomy: Explain → Recommend → Prepare → Execute. Each level gated by governance approval with audit evidence. Start with recommendations, graduate to autonomous execution for pre-approved, low-risk, reversible operations.</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px"><span class="badge badge-accent">60–90% AHT Reduction</span><span class="badge badge-accent">4 Autonomy Levels</span></div>
      </div>
      <div class="card card-accent" style="cursor:pointer" data-nav="governance" style="cursor:pointer">
        <div class="icon-box ib-navy"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="card-label">Layer 4 — Built for Regulators</div>
        <div class="card-title">Governance-by-Design</div>
        <div class="card-body">Audit-grade evidence packs, complete decision replayability, continuous drift monitoring, and MRM-ready validation artifacts. SR 11-7 aligned. Governance isn't a bolt-on — it's the foundation every other layer rests upon.</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px"><span class="badge badge-accent">80% Faster Audit</span><span class="badge badge-accent">100% Traceability</span></div>
      </div>
    </div>
  </div>

  
  <div class="section reveal">
    <div class="section-header">
      <div class="section-label">Why ioNova</div>
      <h2 class="section-title">What Makes Entity Intelligence Different from Everything Else</h2>
    </div>
    <div style="overflow-x:auto">
    <table class="token-table">
      <thead><tr><th>Capability</th><th>Traditional MDM</th><th>Entity Resolution</th><th>GenAI Copilots</th><th style="background:rgba(95,207,208,.08);color:var(--teal-500)">ioNova</th></tr></thead>
      <tbody>
        <tr><td>Native NER Extraction</td><td class="no">✗ Separate tools</td><td class="no">✗ No NER</td><td class="no">✗ Chat-only</td><td class="chk"><strong>✓ Integrated engine</strong></td></tr>
        <tr><td>Golden Records</td><td class="chk">✓ Core</td><td class="part">△ Limited</td><td class="no">✗ No MDM</td><td class="chk"><strong>✓ With evidence trails</strong></td></tr>
        <tr><td>Evidence-First AI</td><td class="no">✗ No copilots</td><td class="no">✗ SDK only</td><td class="no">✗ No citations</td><td class="chk"><strong>✓ Mandatory citations</strong></td></tr>
        <tr><td>Progressive Autonomy</td><td class="no">✗ Manual</td><td class="no">✗ No automation</td><td class="part">△ Chat-style</td><td class="chk"><strong>✓ 4-level governance</strong></td></tr>
        <tr><td>Regulatory Governance</td><td class="part">△ Basic logs</td><td class="no">✗ None</td><td class="no">✗ No audit trails</td><td class="chk"><strong>✓ SR 11-7 aligned</strong></td></tr>
        <tr><td>Real-time Processing</td><td class="no">✗ Batch</td><td class="chk">✓ &lt;200ms</td><td class="part">N/A</td><td class="chk"><strong>✓ &lt;5ms exact, &lt;200ms full</strong></td></tr>
      </tbody>
    </table>
    </div>
  </div>

  
  <div class="section reveal">
    <div class="section-header">
      <div class="section-label">Industry Solutions</div>
      <h2 class="section-title">One Platform. Six Domains. Universal Entity Intelligence.</h2>
      <p class="section-desc">All enterprise entities reduce to four core types: Individual, Company, Product, and Transaction.</p>
    </div>
    <div class="g3">
      <div class="card"><div class="icon-box ib-teal"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></div><div class="card-title">Financial Services</div><div class="card-body">60–70% false positive reduction in AML monitoring. KYC entity screening, sanctions compliance, SAR narrative generation.</div></div>
      <div class="card"><div class="icon-box ib-blue"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div><div class="card-title">Healthcare</div><div class="card-body">87% duplicate resolution across EHR systems. Patient 360, clinical NER, claims processing, provider master.</div></div>
      <div class="card"><div class="icon-box ib-cyan"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div><div class="card-title">Sales &amp; Marketing</div><div class="card-body">3.2× conversion lift with entity-grounded targeting. Customer 360, lead scoring, campaign intelligence.</div></div>
      <div class="card"><div class="icon-box ib-teal"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div><div class="card-title">Human Resources</div><div class="card-body">85% onboarding acceleration. Employee master management, resume parsing, background verification.</div></div>
      <div class="card"><div class="icon-box ib-blue"><svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg></div><div class="card-title">Supply Chain</div><div class="card-body">92% first-time-right matching. Vendor management, contract entity extraction, logistics tracking.</div></div>
      <div class="card"><div class="icon-box ib-navy"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="card-title">Risk &amp; Compliance</div><div class="card-body">80% faster audit response. Entity risk registry, TPRM screening, regulatory reporting automation.</div></div>
    </div>
  </div>

  
  <div class="section reveal">
    <div class="section-header">
      <div class="section-label">Measurable Outcomes</div>
      <h2 class="section-title">Numbers That Survive a Board Presentation</h2>
    </div>
    <div class="g4">
      <div class="kpi-tile"><div class="kpi-value grad">366%+</div><div class="kpi-label">3-year ROI</div></div>
      <div class="kpi-tile"><div class="kpi-value grad-b">6–12 mo</div><div class="kpi-label">Payback period</div></div>
      <div class="kpi-tile"><div class="kpi-value grad-t">60–70%</div><div class="kpi-label">FP reduction (AML)</div></div>
      <div class="kpi-tile"><div class="kpi-value grad">$250K–$890K</div><div class="kpi-label">Annual savings/domain</div></div>
    </div>
  </div>

  
  <div class="faq-section reveal" id="faq-platform" itemscope itemtype="https://schema.org/FAQPage">
    <div class="section-header"><div class="section-label">Frequently Asked Questions</div><h2 class="section-title">Entity Intelligence Platform — Your Questions Answered</h2></div>
    <div class="faq-list">
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">What is an entity intelligence platform and how does it differ from traditional MDM?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p>An <strong>entity intelligence platform</strong> unifies four capabilities that have historically required separate tools: Named Entity Recognition (NER) for extraction, entity resolution for matching and deduplication, AI copilots for investigation, and agentic automation for workflow execution. Unlike traditional <strong>master data management (MDM)</strong>, which focuses on storing a "single source of truth" through batch ETL processes and schema consolidation, entity intelligence operates in real-time across existing systems without requiring data migration. ioNova overlays intelligence on your current infrastructure, resolving entities across 50+ systems in under 200ms, while traditional MDM implementations typically require 18–24 months and $2–10M+ in deployment costs.</p></div></div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">What is entity resolution and why does it matter for regulated enterprises?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p><strong>Entity resolution</strong> is the process of determining whether different data records refer to the same real-world entity — such as recognizing that "Acme Corp," "ACME Corporation," and "Acme Inc." all refer to one company. For regulated enterprises, this is critical because inaccurate entity data directly impacts compliance decisions: KYC/AML screening, sanctions monitoring, beneficial ownership verification, and transaction surveillance all depend on correctly identifying who you're dealing with. ioNova achieves 95%+ NER extraction precision with end-to-end resolution in under 200ms, creating auditable <strong>golden records</strong> with evidence trails that satisfy regulators including SR 11-7, EU AI Act, and BSA/AML requirements.</p></div></div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">What is a golden record and how does ioNova create them with evidence trails?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p>A <strong>golden record</strong> is the single, authoritative representation of an entity — the "best version of the truth" assembled from multiple source systems. ioNova creates golden records differently from traditional MDM: instead of requiring data migration into a centralized repository, it reads data where it lives, resolves matches in real-time using a four-stage cascade (exact match → fuzzy match → semantic match → LLM escalation), and constructs the golden record with full provenance. Every attribute in a golden record carries its source document, confidence score, and timestamp. This means every golden record is defensible to auditors — not just accurate, but provably accurate.</p></div></div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">Which industries benefit most from entity intelligence?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p>Entity intelligence delivers measurable outcomes across six primary domains. <strong>Financial services</strong> see 60–70% false positive reduction in AML monitoring and accelerated KYC screening. <strong>Healthcare</strong> achieves 87% duplicate resolution across EHR systems for patient 360 views. <strong>Sales and marketing</strong> teams report 3.2× conversion lifts with entity-grounded targeting. <strong>Human resources</strong> sees 85% onboarding acceleration through employee master management. <strong>Supply chain</strong> organizations achieve 92% first-time-right matching for vendor and contract management. <strong>Risk and compliance</strong> teams benefit from 80% faster audit response with automated entity risk registries. All enterprise entities reduce to four core types — Individual, Company, Product, and Transaction — making the platform universally applicable.</p></div></div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">What ROI can enterprises expect from deploying ioNova?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p>ioNova delivers a documented <strong>366%+ three-year ROI</strong> with a 6–12 month payback period. Annual savings range from <strong>$250K to $890K per domain</strong>, driven by reduced false positives (60–70% in AML), accelerated investigations (50–70% time savings), and eliminated manual data reconciliation. The overlay-first deployment model means organizations can start proving value with a pilot from $75K and see measurable outcomes within 90 days — without the multi-million-dollar, multi-year commitment required by traditional MDM implementations.</p></div></div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">How does ioNova compare to using LLMs directly for entity resolution?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p>Using LLMs for every entity comparison is economically unsustainable at enterprise scale. Processing 10 million entity comparisons monthly through an LLM-everywhere approach costs <strong>$200K–$600K in inference alone</strong>. ioNova's cascade architecture reduces this by 90%+ (to $15K–$40K/month) by routing 70–80% of comparisons through deterministic, sub-50ms stages (exact and fuzzy matching) and only escalating genuinely ambiguous cases (roughly 10%) to LLM reasoning. This also improves auditability — 90% of decisions are fully deterministic and explainable — while reducing latency from 200–500ms to under 50ms weighted average.</p></div></div>
      </div>
    </div>
  </div>

  <div class="cta-band">
    <h2 class="cta-hl">Your Entities Are Your Business.<br><span class="text-grad">It's Time They Worked Like It.</span></h2>
    <p class="cta-sub">See how ioNova delivers measurable outcomes in 90 days — with your data, your workflows, your compliance requirements.</p>
    <div class="cta-btns"><a class="btn btn-accent btn-lg">Schedule a Demo <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a><a class="btn btn-outline">Download Platform Overview</a></div>
  </div>`;
