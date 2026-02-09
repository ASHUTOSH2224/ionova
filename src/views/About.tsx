import { useRef, useEffect } from 'react';
import { Layout } from '@/components/layout/Layout';
import { AppWrapper } from '@/components/AppWrapper';

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);

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

    // Staggered fade-in for cards
    const fadeObs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.animation = `fadeSlideUp 0.5s ease-out ${i * 0.08}s both`;
          fadeObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    el.querySelectorAll('.philosophy-card, .kpi-tile, .leader-card, .why-card').forEach(card => {
      (card as HTMLElement).style.opacity = '0';
      fadeObs.observe(card);
    });

    return () => { observer.disconnect(); fadeObs.disconnect(); };
  }, []);

  return (
    <AppWrapper>
      <Layout>
        <div className="ds-v5">
          <div className="container">
            <div ref={ref} dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />
          </div>
        </div>
      </Layout>
    </AppWrapper>
  );
}

const PAGE_HTML = `<svg width="0" height="0" style="position:absolute">
  <defs>
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#5FCFD0"/>
      <stop offset="50%" stop-color="#43ADC1"/>
      <stop offset="100%" stop-color="#3C75B5"/>
    </linearGradient>
  </defs>
</svg>

<div class="container">

<section class="hero" id="story">
  <div class="hero-badge">
    <span class="pulse-dot"></span>
    <span style="position:relative;z-index:1">The Entity Intelligence Company</span>
  </div>
  <h1>Every Enterprise Runs on Entities.<br><span class="accent">Most Can't Trust Them.</span></h1>
  <p class="hero-subtitle">Every critical decision — approving a payment, clearing a counterparty, onboarding a customer — depends on knowing <em>who or what you're dealing with</em>. ioNova makes entity data trustworthy.</p>
</section>

<section class="section" id="philosophy">
  <div class="section-header">
    <div class="section-label">Our Philosophy</div>
    <h2 class="section-title">
      <span style="display:inline-flex;align-items:center;gap:10px">
        <svg style="width:28px;height:28px;stroke-width:1.5;color:var(--teal-500)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
      </span>
      Knowledge First, Not Model First
    </h2>
    <p class="section-desc">70% of enterprise AI projects fail — not because the technology is inadequate, but because organisations start with the model and force-fit it to their business.</p>
  </div>

  <div class="narrative" style="margin-bottom:var(--space-xl)">
    <p>Entity data — the people, companies, products, and transactions that flow through every enterprise — is scattered across dozens of systems, duplicated in conflicting formats, and silently degrading every downstream process. <strong>"Acme Corp"</strong> in your CRM is <strong>"ACME Corporation"</strong> in your ERP and <strong>"Acme Inc."</strong> in compliance. Multiply this across millions of entities, and the result is a trust deficit costing billions annually.</p>
  </div>

  <div class="narrative-highlight">
    ioNova is built on <strong>Knowledge First AI™</strong> — we start with the enterprise's own knowledge, structure it into an Enterprise Knowledge Model, and only then deploy AI on top. This is why we achieve what generic AI cannot.
  </div>

  <div class="philosophy-grid" style="margin-top:var(--space-xl)">
    <div class="philosophy-card">
      <div class="philosophy-icon ic-teal">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div class="philosophy-title">Deterministic Accuracy</div>
      <div class="philosophy-desc">Zero hallucinations in production. Every AI output is grounded in verified enterprise knowledge, not generated from parametric memory.</div>
    </div>
    <div class="philosophy-card">
      <div class="philosophy-icon ic-blue">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      </div>
      <div class="philosophy-title">Audit-Grade Evidence</div>
      <div class="philosophy-desc">Every decision is explainable, every claim citable. Governance isn't bolted on — it's the architectural foundation.</div>
    </div>
    <div class="philosophy-card">
      <div class="philosophy-icon ic-cyan">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      </div>
      <div class="philosophy-title">100% User Adoption</div>
      <div class="philosophy-desc">A proven methodology refined across 50+ enterprise implementations with zero project failures — built for how regulated enterprises actually operate.</div>
    </div>
    <div class="philosophy-card">
      <div class="philosophy-icon ic-navy">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      </div>
      <div class="philosophy-title">No Rip & Replace</div>
      <div class="philosophy-desc">Overlays intelligence on existing infrastructure without data migration. Resolves entities in real-time across 50+ systems in under 200ms.</div>
    </div>
  </div>
</section>

<section class="section" id="platform">
  <div class="section-header">
    <div class="section-label">The Platform</div>
    <h2 class="section-title">
      <span style="display:inline-flex;align-items:center;gap:10px">
        <svg style="width:28px;height:28px;stroke-width:1.5;color:var(--teal-500)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
      </span>
      Entity Intelligence, Unified
    </h2>
    <p class="section-desc">The first system to unify Named Entity Recognition, golden record creation, evidence-first AI copilots, and permissioned agentic automation — all governed from day one.</p>
  </div>

  <div class="kpi-grid">
    <div class="kpi-tile">
      <div class="kpi-value gradient">$5T+</div>
      <div class="kpi-label">Processed Annually</div>
    </div>
    <div class="kpi-tile">
      <div class="kpi-value gradient">55+</div>
      <div class="kpi-label">Countries Served</div>
    </div>
    <div class="kpi-tile">
      <div class="kpi-value gradient">&lt;200ms</div>
      <div class="kpi-label">Resolution Latency</div>
    </div>
    <div class="kpi-tile">
      <div class="kpi-value gradient">50+</div>
      <div class="kpi-label">System Integrations</div>
    </div>
  </div>

  <div class="narrative" style="margin-top:var(--space-xl)">
    <p>All enterprise entities reduce to four core types: <strong>Individual, Company, Product, and Transaction</strong>. One architecture with universal applicability across six domains.</p>
  </div>

  <div class="sub-label">Domains Served</div>
  <div class="domains-row">
    <span class="domain-tag">Financial Services</span>
    <span class="domain-tag">Healthcare</span>
    <span class="domain-tag">Sales & Marketing</span>
    <span class="domain-tag">Human Resources</span>
    <span class="domain-tag">Supply Chain</span>
    <span class="domain-tag">Risk & Compliance</span>
  </div>

  <div class="narrative-highlight" style="margin-top:var(--space-xl)">
    Within financial services, ioNova powers the industry's only <strong>ISO 20022-native address resolution</strong> capability — transforming unstructured address data into fully structured output using Agentic AI with deterministic accuracy, ahead of the <strong>November 2026 deadline</strong> for structured addresses in every cross-border payment message.
  </div>
</section>

<section class="section" id="leadership">
  <div class="section-header">
    <div class="section-label">Leadership</div>
    <h2 class="section-title">
      <span style="display:inline-flex;align-items:center;gap:10px">
        <svg style="width:28px;height:28px;stroke-width:1.5;color:var(--teal-500)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </span>
      The Team Behind the Platform
    </h2>
    <p class="section-desc">100+ years of combined experience across AI, banking technology, payments, compliance, and enterprise security. Forged over three decades of building AI systems at the heart of global financial infrastructure.</p>
  </div>

  <div class="leaders-grid">

    
    <div class="leader-card featured">
      <div class="leader-inner">
        <div>
          <div class="leader-avatar">PD</div>
          <div class="leader-name">Parth Desai</div>
          <div class="leader-role">Founder & CEO</div>
          <div class="leader-creds">MS AI, Georgia Tech · Yale AI Lab · HBS · INSEAD</div>
          <div class="leader-stats">
            <div class="leader-stat">
              <div class="leader-stat-value">30+</div>
              <div class="leader-stat-label">Years in AI</div>
            </div>
            <div class="leader-stat">
              <div class="leader-stat-value">$5T+</div>
              <div class="leader-stat-label">Processed / Year</div>
            </div>
            <div class="leader-stat">
              <div class="leader-stat-value">55+</div>
              <div class="leader-stat-label">Countries</div>
            </div>
          </div>
        </div>
        <div>
          <div class="leader-bio">
            <p>One of the earliest practitioners to apply AI to financial services — and one of the few who has done so continuously for over 30 years.</p>
            <p style="margin-top:var(--space-sm)">AI foundations laid at Georgia Tech and Yale's AI Lab under Professor Roger Schank, researching natural language understanding — the same discipline powering ioNova today. Founded his first AI-for-banking company in 1994, building platforms now processing <strong>$5T+ annually across 55+ countries</strong> for Tier 1 global banks.</p>
            <p style="margin-top:var(--space-sm)">Built <strong>Pelican AI</strong>, <strong>ACE Software Solutions</strong>, and <strong>PelicanPay</strong> — each advancing AI's role in financial services. Developed the <strong>Knowledge First AI™</strong> methodology after witnessing billions wasted on AI projects that started with models instead of knowledge.</p>
          </div>
        </div>
      </div>
    </div>

    
    <div class="leader-card">
      <div class="leader-avatar">IT</div>
      <div class="leader-name">Ishan Tarunesh</div>
      <div class="leader-role">Co-Founder & CTO</div>
      <div class="leader-creds">B.Tech CS, IIT Bombay · ACL & EACL Published · AIR 33 JEE</div>
      <div class="leader-bio">
        Leads technology strategy, platform architecture, and ioNova's proprietary NER and cascade entity resolution engines. Published NLP research on multilingual modelling and cross-lingual text processing maps directly to ioNova's core: parsing, normalising, and resolving entity data across languages, scripts, and formats.
      </div>
    </div>

    
    <div class="leader-card">
      <div class="leader-avatar">DM</div>
      <div class="leader-name">Devavrat Mahajan</div>
      <div class="leader-role">Co-Founder & COO</div>
      <div class="leader-creds">B.Tech, IIT Bombay · MBA, IIM Ahmedabad · Amazon AI/ML · Kearney</div>
      <div class="leader-bio">
        Runs ioNova's commercial engine — enterprise partnerships, product operations, and go-to-market. At Amazon, built AI/ML data tools delivering measurable savings at scale. Co-built and scaled an AI services company to <strong>$5M+ valuation</strong> serving 50+ global customers, entirely bootstrapped.
      </div>
    </div>

    
    <div class="leader-card">
      <div class="leader-avatar">SN</div>
      <div class="leader-name">Saumitra Naik</div>
      <div class="leader-role">VP, Operations & Delivery</div>
      <div class="leader-creds">20+ Years Enterprise Implementation</div>
      <div class="leader-bio">
        <strong>200+ enterprise implementations</strong> for global financial institutions. Led delivery teams of 130+ professionals with <strong>98% on-time delivery</strong> and zero critical project failures. Ensures every client deployment meets the rigorous standards regulated institutions demand.
      </div>
    </div>

    
    <div class="leader-card">
      <div class="leader-avatar">MM</div>
      <div class="leader-name">Mangesh Malekar</div>
      <div class="leader-role">VP, Customer Success</div>
      <div class="leader-creds">20+ Years Technology, SaaS & AI/ML</div>
      <div class="leader-bio">
        <strong>100+ implementations</strong> managing a portfolio exceeding <strong>$100M in project value</strong>, with 95% satisfaction rate and 100% client retention. Bridges delivery teams and senior business stakeholders to progress every engagement from pilot to production to expansion.
      </div>
    </div>

    
    <div class="leader-card">
      <div class="leader-avatar">SD</div>
      <div class="leader-name">Samir Dharia</div>
      <div class="leader-role">CISO & VP, Security & Compliance</div>
      <div class="leader-creds">30+ Years IT Security · Apple · Lucent · Bluestar</div>
      <div class="leader-bio">
        Maintained a <strong>zero-breach security record</strong> across three decades spanning Apple, Lucent Technologies, and Bluestar Infotech. Achieved ISO 27001, SOC 1 Type II, and GDPR compliance. Ensures ioNova meets the stringent security requirements of Tier 1 banks.
      </div>
    </div>

  </div>
</section>

<section class="section" id="why">
  <div class="section-header">
    <div class="section-label">Why This Team</div>
    <h2 class="section-title">
      <span style="display:inline-flex;align-items:center;gap:10px">
        <svg style="width:28px;height:28px;stroke-width:1.5;color:var(--teal-500)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </span>
      The Rare Intersection
    </h2>
    <p class="section-desc">Entity intelligence demands expertise that few organisations possess simultaneously.</p>
  </div>

  <div class="why-grid">
    <div class="why-card">
      <div class="why-icon ic-teal" style="background:linear-gradient(135deg,rgba(95,207,208,0.12),rgba(67,173,193,0.08));border:1px solid rgba(67,173,193,0.2);color:var(--teal-500)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      </div>
      <div class="why-title">Domain Depth</div>
      <div class="why-desc">30+ years pioneering AI in banking. Deep knowledge of how payments flow, compliance decisions are made, and entity data propagates across systems.</div>
    </div>
    <div class="why-card">
      <div class="why-icon ic-blue" style="background:linear-gradient(135deg,rgba(94,161,220,0.12),rgba(60,117,181,0.08));border:1px solid rgba(94,161,220,0.2);color:var(--blue-400)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>
      </div>
      <div class="why-title">AI & NLP Research</div>
      <div class="why-desc">Published at ACL and EACL. Advanced capabilities to extract, normalise, match, and resolve entities across languages, formats, and data quality levels.</div>
    </div>
    <div class="why-card">
      <div class="why-icon ic-cyan" style="background:linear-gradient(135deg,rgba(95,207,208,0.12),rgba(142,205,242,0.08));border:1px solid rgba(95,207,208,0.2);color:var(--cyan-400)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      </div>
      <div class="why-title">Enterprise Discipline</div>
      <div class="why-desc">Every AI decision grounded in verified knowledge — not statistical probability — with full auditability at production scale. Zero project failures across 50+ implementations.</div>
    </div>
  </div>

  
  <div class="cta-banner">
    <div class="cta-title">Purpose-Built for Regulated Industries</div>
    <div class="cta-desc">The only entity intelligence platform trusted by the world's leading financial institutions for their most consequential data challenges.</div>
    <div class="cta-tagline">ioNova AI · Powered by Knowledge First AI™</div>
  </div>
</section>`;
