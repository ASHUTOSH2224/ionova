import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs: FAQItem[] = [
    {
      question:
        "What is address intelligence and how is it different from address validation?",
      answer:
        "Address intelligence parses, validates, enriches, and structures postal address data to meet ISO 20022 compliance. Unlike postal validation — which confirms a physical location exists — address intelligence resolves against regulatory standards, sanctions screening precision, and payment routing across 195 countries simultaneously.",
    },
    {
      question:
        "What is the difference between structured and hybrid addresses in ISO 20022?",
      answer:
        "Structured addresses populate dedicated XML elements (StrtNm, BldgNb, TwnNm, PstCd, Ctry) with validated components. Hybrid combines some structured with free-text. Regulators mandate structured as the target — hybrid is the minimum fallback. Delivering structured automatically satisfies hybrid with identical effort.",
    },
    {
      question: "Why can't postal APIs or LLMs handle payment compliance?",
      answer:
        "Postal APIs lack ISO 20022 XML output, can't handle financial identifiers, and cover primarily Latin-script markets. LLMs fail due to non-deterministic output, hallucination risk, latency exceeding sub-100ms requirements, and no regulatory audit trail.",
    },
    {
      question: "How long does implementation take?",
      answer:
        "Address intelligence deploys in 10–16 weeks via sidecar architecture alongside existing infrastructure. No core banking system replacement required. Pre-built connectors for MuleSoft, Volante, and Finastra.",
    },
    {
      question: "What ROI can institutions expect?",
      answer:
        "Institutions processing 500,000+ cross-border payments annually typically achieve 30–50x ROI within 12 months. The Entity Intelligence Platform delivers 366%+ three-year ROI.",
    },
    {
      question:
        "What is the SWIFT ISO 20022 deadline for structured addresses?",
      answer:
        "Enforcement begins November 2026. MT was refused for new messages in November 2025. February 2026 marks the start of the 9-month critical implementation window. The E&I Mandate in November 2027 tightens further.",
    },
  ];

  return (
    <section className="py-24 px-6" id="faq">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Label */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-5 w-1 rounded-full bg-[#43ADC1]" />
          <span
            style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "1.5px",
              color: "#43ADC1",
              textTransform: "uppercase",
            }}
          >
            FAQ
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Outfit', system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.15,
            color: "#0E1935",
            maxWidth: "700px",
            marginBottom: "40px",
          }}
        >
          What Financial Institutions Ask About ISO 20022 and Address Intelligence
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#D0DAEB] bg-white transition-all duration-300"
                style={{
                  boxShadow: isOpen
                    ? "0 4px 12px rgba(14,25,53,0.07), 0 2px 4px rgba(14,25,53,0.04)"
                    : "0 1px 3px rgba(14,25,53,0.05)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#F9FAFC]"
                >
                  <span
                    style={{
                      fontFamily: "'Outfit', system-ui, sans-serif",
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "#0E1935",
                      paddingRight: "16px",
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: "#8796A7",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <p
                      style={{
                        fontFamily: "'Figtree', system-ui, sans-serif",
                        fontSize: "14px",
                        lineHeight: 1.7,
                        color: "#466587",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
