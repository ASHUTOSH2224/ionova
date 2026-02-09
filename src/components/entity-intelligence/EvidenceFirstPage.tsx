import { useRef, useEffect } from 'react';

interface Props {
  navigate: (page: string) => void;
}

export function EvidenceFirstPage({ navigate }: Props) {
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
    <div class="pillar-nav"><a class="cur">Evidence-First</a><a data-nav="overlay" style="cursor:pointer">Overlay-First</a><a data-nav="autonomy" style="cursor:pointer">Progressive Autonomy</a><a data-nav="cascade" style="cursor:pointer">Cascade Intelligence</a><a data-nav="governance" style="cursor:pointer">Governance</a></div>
    <div class="hero-badge"><span class="pulse-dot"></span> Platform Pillar — Evidence-First AI</div>
    <h1>AI That Cites Every Source.<br><span class="accent">Defends Every Decision.</span></h1>
    <p class="hero-sub">No uncited claims. Every copilot response is grounded in specific source documents with citations you can trace, verify, and defend to any regulator.</p>
  </div>
  <div class="section reveal">
    <div class="section-header"><div class="section-label">The Trust Problem</div><h2 class="section-title">Generative AI Has a Trust Problem. In Regulated Industries, It's a Compliance Problem.</h2></div>
    <div class="prose">
      <p>When ChatGPT tells you a company is on a sanctions list, you can't submit that to your regulator. There's no source document, no confidence score, no audit trail, no way to verify the claim was accurate at the time it was made.</p>
      <p>For enterprises under regulatory scrutiny — financial institutions under BSA/AML, healthcare under HIPAA — <strong>"the AI said so" is not an acceptable basis for a compliance decision.</strong> Regulators require reproducible, auditable evidence trails.</p>
      <p>LLMs are probabilistic. They generate statistically plausible text, not verified facts. They cannot provide deterministic, explainable results that survive regulatory examination. Evidence-first architecture is the prerequisite for deploying AI in any regulated workflow.</p>
    </div>
  </div>
  <div class="section reveal">
    <div class="section-header"><div class="section-label">How It Works</div><h2 class="section-title">From Source Document to Auditable Decision — Every Step Traceable</h2></div>
    <div class="steps">
      <div class="step"><div class="step-n">1</div><div><div class="step-title">Grounded Retrieval</div><div class="step-body">Every query triggers a retrieval pipeline that identifies and ranks relevant source documents. The copilot never generates from parametric memory alone — every claim must be grounded in retrieved evidence.</div></div></div>
      <div class="step"><div class="step-n">2</div><div><div class="step-title">Mandatory Citation Injection</div><div class="step-body">Every factual claim is paired with a specific citation: source document, relevant passage, date of record, and confidence score. Uncitable claims are explicitly flagged as uncertain.</div></div></div>
      <div class="step"><div class="step-n">3</div><div><div class="step-title">Audit-Grade Evidence Packs</div><div class="step-body">Every interaction produces a complete evidence pack — query, retrieved sources, response, citations, confidence scores, and reasoning chain — stored immutably for regulatory examination.</div></div></div>
    </div>
  </div>
  <div class="section reveal">
    <div class="section-header"><div class="section-label">Comparison</div><h2 class="section-title">Evidence-First vs. Generic AI</h2></div>
    <table class="token-table">
      <thead><tr><th>Dimension</th><th>Generic AI Copilots</th><th style="background:rgba(95,207,208,.08);color:var(--teal-500)">ioNova Evidence-First</th></tr></thead>
      <tbody>
        <tr><td>Source Attribution</td><td class="no">None — parametric memory</td><td class="chk">✓ Mandatory citations to source docs</td></tr>
        <tr><td>Confidence Signaling</td><td class="no">Binary — answer or decline</td><td class="chk">✓ Graduated 0–100 scores with thresholds</td></tr>
        <tr><td>Reproducibility</td><td class="no">Non-deterministic</td><td class="chk">✓ Deterministic evidence retrieval</td></tr>
        <tr><td>Audit Trail</td><td class="no">Chat logs only</td><td class="chk">✓ Complete evidence packs with reasoning</td></tr>
        <tr><td>Hallucination Risk</td><td class="part">High — plausible but unverified</td><td class="chk">✓ Uncitable claims explicitly flagged</td></tr>
        <tr><td>Regulatory Acceptance</td><td class="no">Insufficient</td><td class="chk">✓ Designed for regulator examination</td></tr>
      </tbody>
    </table>
  </div>
  <div class="section reveal">
    <div class="proof-bar" style="animation:none"><div class="kpi-tile"><div class="kpi-value grad">100%</div><div class="kpi-label">Citation coverage</div></div><div class="kpi-tile"><div class="kpi-value grad-b">50–70%</div><div class="kpi-label">Investigation time savings</div></div><div class="kpi-tile"><div class="kpi-value grad-t">80%</div><div class="kpi-label">Faster audit response</div></div><div class="kpi-tile"><div class="kpi-value grad">Zero</div><div class="kpi-label">Uncited claims policy</div></div></div>
  </div>
  
  <div class="faq-section reveal" id="faq-evidence" itemscope itemtype="https://schema.org/FAQPage">
    <div class="section-header"><div class="section-label">Frequently Asked Questions</div><h2 class="section-title">Evidence-First AI — Your Questions Answered</h2></div>
    <div class="faq-list">
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">What is evidence-first AI and how does it prevent hallucinations?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p><strong>Evidence-first AI</strong> is an architectural approach where every factual claim produced by an AI copilot must be grounded in specific, traceable source documents — never generated from the model's parametric memory alone. Unlike generic AI chatbots that produce statistically plausible text without verification, ioNova's copilots pair every claim with a mandatory citation including the source document, relevant passage, date of record, and confidence score. Claims that cannot be cited are explicitly flagged as uncertain. This eliminates <strong>AI hallucination</strong> as a risk vector for regulated workflows, because every response carries a verifiable evidence trail.</p></div></div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">Why can't generic AI copilots be used for compliance decisions?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p>Generic AI copilots like ChatGPT are probabilistic systems — they generate text that is statistically likely to be correct, but they cannot provide <strong>deterministic, reproducible, explainable results</strong> that survive regulatory examination. When a generic AI tells you a company is on a sanctions list, there is no source document, no confidence score, no audit trail, and no way to verify the claim was accurate at the time it was made. Under regulatory frameworks like <strong>BSA/AML</strong>, <strong>HIPAA</strong>, <strong>SR 11-7</strong>, and the <strong>EU AI Act</strong>, "the AI said so" is not an acceptable basis for a compliance decision. Regulators require reproducible, auditable evidence trails — which is exactly what evidence-first architecture provides.</p></div></div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">How do evidence packs work in ioNova and what do they contain?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p>Every interaction with ioNova's copilots generates a complete <strong>audit-grade evidence pack</strong> containing: the original query, all retrieved source documents with relevance rankings, the generated response, mandatory citations linking each claim to specific passages, confidence scores on a 0–100 graduated scale with configurable thresholds, and the complete reasoning chain. These evidence packs are cryptographically timestamped and stored immutably, ensuring they can be presented to regulators exactly as produced. This achieves <strong>100% citation coverage</strong> and delivers 50–70% time savings in compliance investigations by providing pre-assembled evidence for every decision.</p></div></div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">What is AI explainability and how does ioNova achieve it?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p><strong>AI explainability</strong> refers to the ability to understand, interpret, and trace why an AI system made a particular decision. ioNova achieves explainability through three mechanisms: <strong>grounded retrieval</strong> ensures every claim traces to a source document; <strong>mandatory citation injection</strong> pairs each factual assertion with verifiable evidence; and <strong>complete decision replayability</strong> allows any decision to be reconstructed with the exact data, model version, and configuration that existed at the time. This goes beyond "explainable AI" frameworks that simply provide post-hoc rationales — ioNova's evidence is produced during normal operation, not generated retrospectively.</p></div></div>
      </div>
      <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <div class="faq-q" itemprop="name">How does evidence-first AI handle uncertainty and low-confidence results?<svg class="faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
        <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><div class="faq-a-inner" itemprop="text"><p>Unlike generic AI that either provides an answer or declines, ioNova uses a <strong>graduated confidence scoring system</strong> from 0 to 100, with configurable thresholds for different workflow types. When confidence falls below threshold, the system explicitly flags the claim as uncertain and routes it for human review — it never silently guesses. This approach means analysts know precisely which elements of an AI-generated response they can trust and which require additional verification, eliminating the binary "trust everything or nothing" dilemma that plagues generic AI deployments in regulated environments.</p></div></div>
      </div>
    </div>
  </div>

  <div class="cta-band"><h2 class="cta-hl">See How Evidence-First AI Transforms <span class="text-grad">Compliance Workflows</span></h2><p class="cta-sub">Every claim cited. Every decision auditable. Every regulator satisfied.</p><div class="cta-btns"><a class="btn btn-accent btn-lg">Request a Demo</a><a class="btn btn-outline">Download Architecture Paper</a></div></div>
  <footer class="footer"><div class="footer-l"><span class="io">io</span>Nova AI</div><div class="footer-r">Entity Intelligence Platform · 2026</div></footer>`;
