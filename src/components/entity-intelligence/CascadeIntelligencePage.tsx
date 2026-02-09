import { ScrollReveal } from '@/components/design-system/ScrollReveal';
import { HeroBadge } from '@/components/design-system/HeroBadge';
import { FaqAccordion } from '@/components/design-system/FaqAccordion';
import { CtaBand } from '@/components/design-system/CtaBand';
import { PillarNav } from './PillarNav';

interface CascadeIntelligencePageProps {
  navigate: (page: string) => void;
}

const cascadeFaqs = [
  {
    q: 'What is cascade intelligence and how does it optimize entity resolution?',
    a: (
      <p><strong>Cascade intelligence</strong> is a multi-stage entity resolution architecture that routes every comparison through the fastest, cheapest, most accurate method first — and only escalates to more expensive processing when needed. The four stages are: <strong>Stage 1 (Exact Match)</strong> resolves ~40% of comparisons in under 5ms using deterministic rules and identifier lookup. <strong>Stage 2 (Fuzzy Match)</strong> resolves ~30% in under 50ms using edit-distance, phonetic, and token similarity. <strong>Stage 3 (Semantic Match)</strong> resolves ~20% in under 200ms using vector embeddings. <strong>Stage 4 (LLM Escalation)</strong> handles the remaining ~10% using full-context reasoning. This achieves 90%+ cost reduction versus LLM-everywhere approaches while maintaining equivalent accuracy.</p>
    ),
  },
  {
    q: 'How does fuzzy matching work for entity resolution?',
    a: (
      <p><strong>Fuzzy matching</strong> in ioNova's cascade uses a combination of edit-distance algorithms (Levenshtein, Jaro-Winkler), phonetic matching (Soundex, Metaphone), and token-level similarity to handle the real-world messiness of enterprise entity data: typos, abbreviations, formatting differences, and transliterations. For example, "Acme Corp" vs. "ACME Corporation" or "John Smyth" vs. "Jon Smith" are resolved at this stage in under 50ms. This stage handles approximately 30% of all entity comparisons and is fully deterministic — every match decision produces an explicit similarity score with defined thresholds, making it completely auditable.</p>
    ),
  },
  {
    q: 'Why is LLM-only entity resolution too expensive for enterprise scale?',
    a: (
      <p>At enterprise scale, entity resolution involves millions of comparisons monthly. Processing 10 million comparisons through an LLM costs <strong>$200K–$600K per month</strong> in inference fees alone, with average latencies of 200–500ms per comparison, non-deterministic results (the same inputs can produce different outputs across runs), and API rate limits that cap throughput. ioNova's cascade architecture reduces this to <strong>$15K–$40K per month</strong> by reserving LLMs for only the ~10% of genuinely ambiguous cases that require world knowledge. The first three stages (handling 90% of volume) are deterministic, sub-200ms, and run on your infrastructure with effectively unlimited throughput.</p>
    ),
  },
  {
    q: 'What is semantic matching and when is it needed for entity resolution?',
    a: (
      <p><strong>Semantic matching</strong> uses vector embeddings to identify entities that are conceptually the same but textually different — cases where exact and fuzzy matching fail. This includes parent-subsidiary relationships (recognizing "YouTube" as part of "Alphabet Inc."), entity aliases and trade names, cross-language entity references, and entities known by multiple forms across different jurisdictions. Semantic matching processes comparisons in under 200ms and resolves approximately 20% of entity comparisons that would otherwise require expensive LLM escalation. The stage is still deterministic for a given embedding model version, preserving auditability.</p>
    ),
  },
  {
    q: 'How does the cascade improve over time with the data flywheel?',
    a: (
      <p>The cascade implements a continuous <strong>data flywheel</strong>: every resolution decision feeds back into the optimization loop. When an analyst overrides a score, that feedback tightens matching thresholds. When an LLM escalation resolves to a pattern the fuzzy matcher could have caught, the system promotes that pattern to an earlier (faster, cheaper) stage. Over time, more comparisons resolve at faster, cheaper stages — increasing the percentage handled by Stages 1 and 2 while reducing costly LLM escalations. This creates compounding cost and speed improvements: organizations typically see cascade efficiency increase by 10–15% in the first year as the system learns their specific entity landscape.</p>
    ),
  },
];

export function CascadeIntelligencePage({ navigate }: CascadeIntelligencePageProps) {
  return (
    <>
      {/* Hero */}
      <div className="hero">
        <div className="hero-orb" />
        <PillarNav activePage="cascade" onNavigate={navigate} />
        <HeroBadge text="Platform Pillar — Cascade Intelligence" />
        <h1>
          Fast When Certainty Is High.
          <br />
          <span className="accent">Smart When It's Not.</span>
        </h1>
        <p className="hero-sub">
          Every entity comparison is routed through the fastest, cheapest, most accurate method first — escalating
          only when needed. 90%+ cost reduction vs. LLM-everywhere approaches.
        </p>
      </div>

      {/* Four Stages */}
      <ScrollReveal className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">The Four Stages</div>
            <h2 className="section-title">Every Entity Gets the Right Treatment</h2>
            <p className="section-desc">
              70–80% of entity resolution is straightforward. The cascade solves easy problems cheaply and handles
              hard cases with full sophistication.
            </p>
          </div>
          <div className="cascade">
            <div className="cstage">
              <div className="cstage-num">01</div>
              <div className="cstage-name">Exact Match</div>
              <div className="cstage-speed">&lt;5ms</div>
              <div className="cstage-pct">~40% resolved</div>
              <div className="cstage-desc">
                Deterministic rules. Exact string match, standardized identifiers, canonical ID lookup.
              </div>
            </div>
            <div className="cstage">
              <div className="cstage-num">02</div>
              <div className="cstage-name">Fuzzy Match</div>
              <div className="cstage-speed">&lt;50ms</div>
              <div className="cstage-pct">~30% resolved</div>
              <div className="cstage-desc">
                Edit-distance, phonetic matching, token similarity. Handles typos, abbreviations, formatting.
              </div>
            </div>
            <div className="cstage">
              <div className="cstage-num">03</div>
              <div className="cstage-name">Semantic Match</div>
              <div className="cstage-speed">&lt;200ms</div>
              <div className="cstage-pct">~20% resolved</div>
              <div className="cstage-desc">
                Vector embeddings for semantic similarity. Parent-subsidiary, aliases, cross-language entities.
              </div>
            </div>
            <div className="cstage">
              <div className="cstage-num">04</div>
              <div className="cstage-name">LLM Escalation</div>
              <div className="cstage-speed">200–2000ms</div>
              <div className="cstage-pct">~10% escalated</div>
              <div className="cstage-desc">
                Full-context reasoning for genuinely ambiguous cases requiring world knowledge.
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Economic Argument */}
      <ScrollReveal className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">The Economic Argument</div>
            <h2 className="section-title">90% Cost Reduction. Same Accuracy. Better Auditability.</h2>
          </div>
          <table className="token-table">
            <thead>
              <tr>
                <th>Dimension</th>
                <th>LLM-Everywhere</th>
                <th style={{ background: 'rgba(95,207,208,.08)', color: 'var(--teal-500)' }}>ioNova Cascade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cost / 10M comparisons</td>
                <td>$200K–$600K / month</td>
                <td className="chk"><strong>$15K–$40K / month</strong></td>
              </tr>
              <tr>
                <td>Average Latency</td>
                <td>200–500ms</td>
                <td className="chk"><strong>&lt;50ms weighted average</strong></td>
              </tr>
              <tr>
                <td>Determinism</td>
                <td className="no">Varies by run</td>
                <td className="chk">Stages 1–3 deterministic (90%)</td>
              </tr>
              <tr>
                <td>Auditability</td>
                <td className="no">Opaque model reasoning</td>
                <td className="chk">Explicit rules/thresholds per stage</td>
              </tr>
              <tr>
                <td>Provider Dependency</td>
                <td className="part">Fully dependent on LLM provider</td>
                <td className="chk">LLM only for 10% — provider-agnostic</td>
              </tr>
              <tr>
                <td>Throughput Ceiling</td>
                <td className="no">API rate limited</td>
                <td className="chk">Effectively unlimited (Stages 1–2)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ScrollReveal>

      {/* Data Flywheel */}
      <ScrollReveal className="section">
        <div className="container">
          <div className="decision-box">
            <div className="decision-label">Data Flywheel</div>
            <div className="decision-title">The Cascade Gets Smarter Over Time</div>
            <div className="decision-body">
              Every resolution decision feeds back into the optimization loop. When an analyst overrides a score,
              that feedback tightens thresholds. When an LLM escalation resolves to a pattern the fuzzy matcher
              could have caught, the system promotes that pattern. Over time, more comparisons resolve at faster,
              cheaper stages — creating a continuous improvement cycle.
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal className="faq-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Frequently Asked Questions</div>
            <h2 className="section-title">Cascade Intelligence — Your Questions Answered</h2>
          </div>
          <FaqAccordion items={cascadeFaqs} schemaOrg={true} />
        </div>
      </ScrollReveal>

      {/* CTA */}
      <CtaBand
        headline={
          <>
            See Cascade Intelligence Process Your Data — <span className="text-grad">in Milliseconds</span>
          </>
        }
        sub="Fast. Accurate. Affordable. Auditable."
      >
        <a className="btn btn-accent btn-lg" style={{ cursor: 'pointer' }}>Request a Technical Deep-Dive</a>
        <a className="btn btn-outline" style={{ cursor: 'pointer' }}>Download Cascade Whitepaper</a>
      </CtaBand>
    </>
  );
}
