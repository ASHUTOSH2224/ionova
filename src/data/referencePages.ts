export type ReferencePageMeta = {
  key: string;
  slug: string;
  path: string;
  source: string;
  output: string;
  ogType: 'website' | 'article';
  title: string;
  description: string;
  structuredData: Record<string, unknown>;
};

export const pricingPage = {
  "key": "pricing",
  "slug": "pricing",
  "path": "/pricing",
  "source": "pricing.html",
  "output": "pricing.astro",
  "ogType": "website",
  "title": "ISO 20022 Address Solution Pricing | ioNova ARS",
  "description": "How ioNova ARS is priced: three editions, banded message-volume rates, four deployment modes, annual terms — and 246-country data included, no separate licence.",
  "structuredData": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ionova.ai/pricing",
        "name": "ISO 20022 Address Solution Pricing: The ioNova ARS Model",
        "url": "https://ionova.ai/pricing",
        "description": "How ioNova ARS is priced: three editions, banded message-volume rates, four deployment modes, annual terms — and 246-country data included, no separate licence.",
        "inLanguage": "en-GB",
        "dateModified": "2026-07-26",
        "publisher": {
          "@id": "https://ionova.ai/#organization"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            ".answer-block",
            ".tldr"
          ]
        }
      },
      {
        "@type": "Product",
        "@id": "https://ionova.ai/pricing#product",
        "name": "ioNova ARS (Address Resolution Service) v4.3",
        "description": "Deterministic ISO 20022 address resolution engine: classifies, validates, corrects and renders postal addresses for payment messages across 246 countries, with ~98% automatic STP and >99% with the Exceptions Workbench.",
        "brand": {
          "@id": "https://ionova.ai/#organization"
        },
        "url": "https://ionova.ai/pricing",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "ioNova ARS editions",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "ARS Treasury",
              "description": "For corporate treasury and shared service centres: compliant pain.001 and payment-file output from ERP/TMS data.",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "ARS Banking",
              "description": "For banks and PSPs: point-of-entry validation and in-flight pacs/camt message correction.",
              "availability": "https://schema.org/InStock"
            },
            {
              "@type": "Offer",
              "name": "ARS Transact",
              "description": "For correspondent FIs and payment hubs: high-volume message streams with on-premise and air-gapped deployment options.",
              "availability": "https://schema.org/InStock"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is the ioNova ISO 20022 address solution priced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ioNova ARS is priced on five dimensions: platform tier, annual message volume (banded per-message rates that decline with scale), the integration mechanisms you enable, deployment mode (multi-tenant SaaS, private cloud/VPC, on-premise or air-gapped) and support level. Contracts are annual as standard and quoted in EUR, USD or GBP; figures are provided on request."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a free tier?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ioNova does not publish a free production tier. Evaluation starts in the developer sandbox at dev.ionova.ai — running in days — so engineering teams can exercise the 27 API endpoints against real address data before any production commitment; production plans then go live in as little as 2–4 weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Is the 246-country reference data licensed separately?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The 246-country postal reference dataset (GeoPostcodes-sourced) is embedded in every ioNova ARS edition. There is no separate data licence to negotiate or renew, and reference-data updates — including historical place-name changes such as Bombay to Mumbai — are included in the subscription."
            }
          },
          {
            "@type": "Question",
            "name": "What is the standard contract length?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An annual subscription is the standard commercial term, covering the platform fee, metered message volume, enabled integrations, deployment add-ons and the support tier. Multi-year terms are available commercially, and implementation is scoped as a one-time programme at the start of the engagement."
            }
          },
          {
            "@type": "Question",
            "name": "How does pricing scale with message volume?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Message charges are banded: the per-message rate steps down as annual volume grows, across eight volume bands that reach nine-figure annual message counts. High-volume correspondent banking and payment-hub deployments therefore see materially lower unit economics than entry-volume tiers."
            }
          },
          {
            "@type": "Question",
            "name": "Do deployment modes change the price?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Multi-tenant SaaS is the baseline; private cloud/VPC, on-premise, white-label and air-gapped dedicated infrastructure are priced as deployment add-ons on top of the platform tier. Higher-isolation modes also carry longer implementation programmes than the standard 2–4 week SaaS onboarding."
            }
          },
          {
            "@type": "Question",
            "name": "What support levels are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Four support tiers — Bronze, Silver, Gold and Platinum — carry uptime SLAs from 99.0% to 99.95%, escalating from business-hours email support with self-service onboarding to 24/7 critical response with a named account manager, SLA credits and a dedicated customer-success and engineering contact."
            }
          },
          {
            "@type": "Question",
            "name": "How does the cost compare with building an address solution in-house?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ioNova's 25-criterion evaluation framework puts an in-house build at 18–36 months of engineering before reaching parity, and a postal-API retrofit at 26–40 weeks with payment-compliance gaps unresolved. ioNova ARS starts in the sandbox in days and goes live in 2–4 weeks — the dominant driver of its total cost of ownership and payback period."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ionova.ai/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pricing"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://ionova.ai/#organization",
        "name": "ioNova",
        "url": "https://ionova.ai/",
        "logo": "https://ionova.ai/assets/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/ionova"
        ]
      }
    ]
  }
} satisfies ReferencePageMeta;

export const glossaryIndexPage = {
  "key": "glossary",
  "slug": "glossary",
  "path": "/glossary",
  "source": "glossary/index.html",
  "output": "glossary/index.astro",
  "ogType": "website",
  "title": "ISO 20022 Address Glossary — 22 Terms Defined | ioNova",
  "description": "22 cited definitions for ISO 20022 postal addresses: hybrid and structured formats, PstlAdr elements, CBPR+, SEPA, FATF R16 and the CUTOVER2026 keyword.",
  "structuredData": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ionova.ai/glossary",
        "name": "ioNova ISO 20022 Address Glossary",
        "url": "https://ionova.ai/glossary",
        "description": "22 cited definitions for ISO 20022 postal addresses: hybrid and structured formats, PstlAdr elements, CBPR+, SEPA, FATF R16 and the CUTOVER2026 keyword.",
        "inLanguage": "en-GB",
        "dateModified": "2026-07-26",
        "publisher": {
          "@id": "https://ionova.ai/#organization"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            ".answer-block"
          ]
        }
      },
      {
        "@type": "DefinedTermSet",
        "@id": "https://ionova.ai/glossary#termset",
        "name": "ioNova ISO 20022 Address Glossary",
        "url": "https://ionova.ai/glossary",
        "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line.",
        "hasDefinedTerm": [
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/hybrid-address#term",
            "name": "Hybrid address",
            "url": "https://ionova.ai/glossary/hybrid-address"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/structured-address#term",
            "name": "Structured address",
            "url": "https://ionova.ai/glossary/structured-address"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/pstladr-element#term",
            "name": "PstlAdr element",
            "url": "https://ionova.ai/glossary/pstladr-element"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/adrline#term",
            "name": "AdrLine",
            "url": "https://ionova.ai/glossary/adrline"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/twnnm-ctry#term",
            "name": "TwnNm and Ctry",
            "url": "https://ionova.ai/glossary/twnnm-ctry"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/structured-address-elements#term",
            "name": "Structured address elements",
            "url": "https://ionova.ai/glossary/structured-address-elements"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/iso-20022#term",
            "name": "ISO 20022",
            "url": "https://ionova.ai/glossary/iso-20022"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/pacs-008#term",
            "name": "pacs.008",
            "url": "https://ionova.ai/glossary/pacs-008"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/pain-001#term",
            "name": "pain.001",
            "url": "https://ionova.ai/glossary/pain-001"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/camt-messages#term",
            "name": "camt messages",
            "url": "https://ionova.ai/glossary/camt-messages"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/mt103-mx-mapping#term",
            "name": "MT 103 to MX address mapping",
            "url": "https://ionova.ai/glossary/mt103-mx-mapping"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/cbpr-plus#term",
            "name": "CBPR+",
            "url": "https://ionova.ai/glossary/cbpr-plus"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/hvps-plus#term",
            "name": "HVPS+",
            "url": "https://ionova.ai/glossary/hvps-plus"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/sepa-sct-addresses#term",
            "name": "SEPA structured addresses",
            "url": "https://ionova.ai/glossary/sepa-sct-addresses"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/epc-153-22#term",
            "name": "EPC 153-22",
            "url": "https://ionova.ai/glossary/epc-153-22"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/cutover2026#term",
            "name": "CUTOVER2026 keyword",
            "url": "https://ionova.ai/glossary/cutover2026"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/best-effort-structuring#term",
            "name": "Best-Effort Structuring",
            "url": "https://ionova.ai/glossary/best-effort-structuring"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/fatf-recommendation-16#term",
            "name": "FATF Recommendation 16",
            "url": "https://ionova.ai/glossary/fatf-recommendation-16"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/iso-3166-codes#term",
            "name": "ISO 3166 codes",
            "url": "https://ionova.ai/glossary/iso-3166-codes"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/straight-through-processing#term",
            "name": "Straight-through processing (STP)",
            "url": "https://ionova.ai/glossary/straight-through-processing"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/address-resolution#term",
            "name": "Address resolution",
            "url": "https://ionova.ai/glossary/address-resolution"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://ionova.ai/glossary/iso-20022-xml-schema#term",
            "name": "ISO 20022 XML schema (postal address)",
            "url": "https://ionova.ai/glossary/iso-20022-xml-schema"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ionova.ai/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Glossary"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://ionova.ai/#organization",
        "name": "ioNova",
        "url": "https://ionova.ai/",
        "logo": "https://ionova.ai/assets/logo.png",
        "sameAs": [
          "https://www.linkedin.com/company/ionova"
        ]
      }
    ]
  }
} satisfies ReferencePageMeta;

export const glossaryTermPages = [
  {
    "key": "glossary-hybrid-address",
    "slug": "hybrid-address",
    "path": "/glossary/hybrid-address",
    "source": "glossary/hybrid-address.html",
    "output": "glossary/hybrid-address.astro",
    "ogType": "article",
    "title": "Hybrid Address (ISO 20022) — Definition, Format, Example",
    "description": "A hybrid address keeps Town Name and Country in structured ISO 20022 elements plus up to two 70-character address lines. Permanent per CPMI harmonisation requirements — technical annex §0.31.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/hybrid-address#term",
          "name": "Hybrid address",
          "alternateName": [
            "Hybrid postal address",
            "ISO 20022 hybrid address",
            "Partially structured address"
          ],
          "description": "A hybrid address is the ISO 20022 postal-address format in which Country and Town Name are carried in dedicated structured XML elements (<Ctry>, <TwnNm>), while residual content may be carried in up to two free-format <AdrLine> elements of 70 characters each. Codified as a permanent compliant option by CPMI harmonisation requirements — technical annex (February 2026), it is accepted alongside fully structured addresses from the 15 November 2026 cutover.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/hybrid-address",
          "sameAs": [
            "https://www.iso20022.org/iso-20022-message-definitions",
            "https://www.swift.com/standards/iso-20022"
          ],
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/hybrid-address",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — technical annex",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            },
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — updated report",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            },
            {
              "@type": "CreativeWork",
              "name": "Hybrid Postal Address, Version 1.12",
              "url": "https://www.swift.com/sites/default/files/files/pmpg-hybrid-postal-address-v1.12-05mar2026.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "Payments Market Practice Group (PMPG)"
              },
              "datePublished": "2026-03-05"
            },
            {
              "@type": "CreativeWork",
              "name": "ISO 20022 — Removal of unstructured address",
              "url": "https://www.swift.com/standards/iso-20022/removal-unstructured-address",
              "publisher": {
                "@type": "Organization",
                "name": "Swift"
              },
              "datePublished": "2026"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Hybrid address"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-structured-address",
    "slug": "structured-address",
    "path": "/glossary/structured-address",
    "source": "glossary/structured-address.html",
    "output": "glossary/structured-address.astro",
    "ogType": "article",
    "title": "Structured Address (ISO 20022) — Definition & Rules",
    "description": "A fully structured address carries every component in its dedicated ISO 20022 element — no AdrLine allowed. The preferred format, with TwnNm and Ctry mandatory.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/structured-address#term",
          "name": "Structured address",
          "alternateName": [
            "Fully structured address",
            "ISO 20022 structured address"
          ],
          "description": "A fully structured address carries every postal-address component in its dedicated ISO 20022 XML element — <StrtNm>, <BldgNb>, <PstCd>, <TwnNm>, <Ctry> and the other elements of the <PstlAdr> block — with no free-format <AdrLine> permitted. It is the preferred format under the CPMI harmonised data model and has no end date.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/structured-address",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/structured-address",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — technical annex",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            },
            {
              "@type": "CreativeWork",
              "name": "EPC guidance document — Provision of Addresses under the EPC Payment Schemes, v2.1",
              "url": "https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-10/EPC153-22%20v2.1%20EPC%20guidance%20document%20-%20Provision%20of%20Addresses%20under%20the%20EPC%20Payment%20Schemes.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "European Payments Council"
              },
              "datePublished": "2025-10"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Structured address"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-structured-address-elements",
    "slug": "structured-address-elements",
    "path": "/glossary/structured-address-elements",
    "source": "glossary/structured-address-elements.html",
    "output": "glossary/structured-address-elements.astro",
    "ogType": "article",
    "title": "Structured Address Elements (ISO 20022) — Field Guide",
    "description": "The dedicated ISO 20022 address fields: StrtNm (70 chars), BldgNb (16), PstCd (16), TwnNm (35), CtrySubDvsn (ISO 3166-2), Ctry — with CPMI requirement levels.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/structured-address-elements#term",
          "name": "Structured address elements",
          "alternateName": [
            "StrtNm BldgNb PstCd",
            "ISO 20022 address fields"
          ],
          "description": "The structured address elements are the dedicated ISO 20022 XML fields that replace free-text address lines: <StrtNm> (street, 70 chars), <BldgNb> (16), <BldgNm> (35), <PstCd> (16), <TwnNm> (35), <CtrySubDvsn> (ISO 3166-2) and <Ctry>. <TwnNm> and <Ctry> are mandatory; <PstCd> is Required-Conditional under the CPMI model.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/structured-address-elements",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/structured-address-elements",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — technical annex",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Structured address elements"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-pstladr-element",
    "slug": "pstladr-element",
    "path": "/glossary/pstladr-element",
    "source": "glossary/pstladr-element.html",
    "output": "glossary/pstladr-element.astro",
    "ogType": "article",
    "title": "PstlAdr Element — The ISO 20022 Postal Address Block",
    "description": "PstlAdr is the ISO 20022 XML container for a party's postal address. CPMI harmonisation requirements — technical annex catalogues 17 child elements — 14 operational — with TwnNm and Ctry mandatory.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/pstladr-element#term",
          "name": "PstlAdr element",
          "alternateName": [
            "PostalAddress element",
            "PstlAdr block",
            "ISO 20022 postal address element"
          ],
          "description": "<PstlAdr> (PostalAddress) is the ISO 20022 XML container that carries a party’s postal address inside payment messages such as pacs.008 and pain.001. CPMI harmonisation requirements — technical annex catalogues 17 child elements, of which 14 form the operational model — from <Dept> and <StrtNm> to the mandatory <TwnNm> and <Ctry> — plus the free-format <AdrLine>.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/pstladr-element",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/pstladr-element",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — technical annex",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "PstlAdr element"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-adrline",
    "slug": "adrline",
    "path": "/glossary/adrline",
    "source": "glossary/adrline.html",
    "output": "glossary/adrline.astro",
    "ogType": "article",
    "title": "AdrLine (ISO 20022) — Cardinality, Limits, Rules",
    "description": "AdrLine is the free-format element of the ISO 20022 PstlAdr block: 70 characters per line, up to 7 in unstructured, capped at [0..2] in hybrid, 0 in structured.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/adrline#term",
          "name": "AdrLine",
          "alternateName": [
            "AddressLine",
            "AdrLine element",
            "address line ISO 20022"
          ],
          "description": "<AdrLine> (AddressLine) is the free-format text element inside the ISO 20022 <PstlAdr> block, carrying up to 70 characters per occurrence. Its cardinality defines the address format: up to 7 occurrences in the legacy unstructured format, capped at [0..2] in hybrid (CPMI harmonisation requirements — technical annex §0.31), and prohibited entirely in fully structured addresses.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/adrline",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/adrline",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — technical annex",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "AdrLine"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-twnnm-ctry",
    "slug": "twnnm-ctry",
    "path": "/glossary/twnnm-ctry",
    "source": "glossary/twnnm-ctry.html",
    "output": "glossary/twnnm-ctry.astro",
    "ogType": "article",
    "title": "TwnNm and Ctry — The Mandatory ISO 20022 Address Pair",
    "description": "TwnNm (max 35 chars) and Ctry (ISO 3166-1 alpha-2) are the two mandatory elements of every compliant ISO 20022 address from 15 November 2026, per CPMI harmonisation requirements — technical annex.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/twnnm-ctry#term",
          "name": "TwnNm and Ctry",
          "alternateName": [
            "Town Name and Country",
            "TwnNm element",
            "Ctry element"
          ],
          "description": "<TwnNm> (Town Name, max 35 characters) and <Ctry> (Country, an ISO 3166-1 alpha-2 code) are the two mandatory structured elements of every compliant ISO 20022 postal address from 15 November 2026. They are classified R — Required in the CPMI harmonised data model and together constitute the minimum-viable postal address.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/twnnm-ctry",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/twnnm-ctry",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — technical annex",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            },
            {
              "@type": "CreativeWork",
              "name": "EPC guidance document — Provision of Addresses under the EPC Payment Schemes, v2.1",
              "url": "https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-10/EPC153-22%20v2.1%20EPC%20guidance%20document%20-%20Provision%20of%20Addresses%20under%20the%20EPC%20Payment%20Schemes.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "European Payments Council"
              },
              "datePublished": "2025-10"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "TwnNm and Ctry"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-iso-3166-codes",
    "slug": "iso-3166-codes",
    "path": "/glossary/iso-3166-codes",
    "source": "glossary/iso-3166-codes.html",
    "output": "glossary/iso-3166-codes.astro",
    "ogType": "article",
    "title": "ISO 3166 Codes in ISO 20022 Addresses — Ctry Rules",
    "description": "Ctry must carry a two-letter ISO 3166-1 alpha-2 code ([A-Z]{2}); CtrySubDvsn uses ISO 3166-2 codes such as US-CA — enabling field-level sanctions screening.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/iso-3166-codes#term",
          "name": "ISO 3166 codes",
          "alternateName": [
            "ISO 3166-1 alpha-2",
            "ISO 3166-2",
            "country codes ISO 20022"
          ],
          "description": "ISO 3166 defines the country and subdivision codes used in ISO 20022 addresses: <Ctry> must carry a two-letter ISO 3166-1 alpha-2 code (exactly [A-Z]{2}), and <CtrySubDvsn>, where used, must carry an ISO 3166-2 subdivision code such as US-CA or GB-ENG under the CPMI harmonised model.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/iso-3166-codes",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/iso-3166-codes",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — technical annex",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "ISO 3166 codes"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-iso-20022",
    "slug": "iso-20022",
    "path": "/glossary/iso-20022",
    "source": "glossary/iso-20022.html",
    "output": "glossary/iso-20022.astro",
    "ogType": "article",
    "title": "What Is ISO 20022? — Definition for Payments",
    "description": "ISO 20022 is the open standard for financial messaging — pacs, pain, camt XML. From 15 November 2026 payment addresses must be structured or hybrid.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/iso-20022#term",
          "name": "ISO 20022",
          "alternateName": [
            "ISO 20022 standard",
            "MX messages"
          ],
          "description": "ISO 20022 is the open international standard for financial messaging, defining XML-based message types — pacs, pain, camt and others — with rich, structured data models. In payments it replaces the legacy SWIFT MT format, and from 15 November 2026 its postal addresses must be fully structured or hybrid in newly initiated cross-border payments.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/iso-20022",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/iso-20022",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "ISO 20022 message definitions catalogue",
              "url": "https://www.iso20022.org/iso-20022-message-definitions",
              "publisher": {
                "@type": "Organization",
                "name": "ISO 20022 Registration Authority"
              },
              "datePublished": "2026"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "ISO 20022"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-iso-20022-xml-schema",
    "slug": "iso-20022-xml-schema",
    "path": "/glossary/iso-20022-xml-schema",
    "source": "glossary/iso-20022-xml-schema.html",
    "output": "glossary/iso-20022-xml-schema.astro",
    "ogType": "article",
    "title": "ISO 20022 XML Schema for Postal Addresses",
    "description": "The XSD behind ISO 20022 addresses: TwnNm max 35 chars, StrtNm 70, BldgNb 16, PstCd 16, Ctry as [A-Z]{2}, AdrLine 70 with format-dependent cardinality.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/iso-20022-xml-schema#term",
          "name": "ISO 20022 XML schema (postal address)",
          "alternateName": [
            "ISO 20022 XSD",
            "postal address schema"
          ],
          "description": "The ISO 20022 XML schema (XSD) for postal addresses defines the <PstlAdr> container and its child elements with exact types and lengths: <TwnNm> up to 35 characters, <StrtNm> 70, <BldgNb> 16, <PstCd> 16, <Ctry> as [A-Z]{2}, and <AdrLine> at 70 characters per occurrence with format-dependent cardinality.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/iso-20022-xml-schema",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/iso-20022-xml-schema",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — technical annex",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            },
            {
              "@type": "CreativeWork",
              "name": "ISO 20022 message definitions catalogue",
              "url": "https://www.iso20022.org/iso-20022-message-definitions",
              "publisher": {
                "@type": "Organization",
                "name": "ISO 20022 Registration Authority"
              },
              "datePublished": "2026"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "ISO 20022 XML schema (postal address)"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-pacs-008",
    "slug": "pacs-008",
    "path": "/glossary/pacs-008",
    "source": "glossary/pacs-008.html",
    "output": "glossary/pacs-008.astro",
    "ogType": "article",
    "title": "pacs.008 — Definition, Version, Address Rules",
    "description": "pacs.008 (FIToFICustomerCreditTransfer) carries customer credit transfers between FIs — the MX successor to MT 103. CBPR+ production version: pacs.008.001.08.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/pacs-008#term",
          "name": "pacs.008",
          "alternateName": [
            "pacs.008.001.08",
            "FIToFICustomerCreditTransfer"
          ],
          "description": "pacs.008 (FIToFICustomerCreditTransfer) is the ISO 20022 message that carries a customer credit transfer between financial institutions — the MX successor to the MT 103. The current CBPR+ production version is pacs.008.001.08, and from 15 November 2026 its <PstlAdr> blocks must be fully structured or hybrid.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/pacs-008",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/pacs-008",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "ISO 20022 message definitions catalogue",
              "url": "https://www.iso20022.org/iso-20022-message-definitions",
              "publisher": {
                "@type": "Organization",
                "name": "ISO 20022 Registration Authority"
              },
              "datePublished": "2026"
            },
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — updated report",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "pacs.008"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-pain-001",
    "slug": "pain-001",
    "path": "/glossary/pain-001",
    "source": "glossary/pain-001.html",
    "output": "glossary/pain-001.astro",
    "ogType": "article",
    "title": "pain.001 — Definition, Version, Address Rules",
    "description": "pain.001 (CustomerCreditTransferInitiation) is the corporate payment-initiation message; production version pain.001.001.09. Hybrid caps AdrLine at 2 lines.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/pain-001#term",
          "name": "pain.001",
          "alternateName": [
            "pain.001.001.09",
            "CustomerCreditTransferInitiation"
          ],
          "description": "pain.001 (CustomerCreditTransferInitiation) is the ISO 20022 message a corporate uses to instruct its bank to execute credit transfers; the current production version is pain.001.001.09. In hybrid format its <AdrLine> is capped at two occurrences — versions 3 and 9 allow up to 7 lines only in the legacy unstructured format, which ends on 15 November 2026.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/pain-001",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/pain-001",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — technical annex",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            },
            {
              "@type": "CreativeWork",
              "name": "ISO 20022 — Removal of unstructured address",
              "url": "https://www.swift.com/standards/iso-20022/removal-unstructured-address",
              "publisher": {
                "@type": "Organization",
                "name": "Swift"
              },
              "datePublished": "2026"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "pain.001"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-camt-messages",
    "slug": "camt-messages",
    "path": "/glossary/camt-messages",
    "source": "glossary/camt-messages.html",
    "output": "glossary/camt-messages.astro",
    "ogType": "article",
    "title": "camt Messages — Definitions and Address Rules",
    "description": "The camt family covers ISO 20022 exception and investigation messages — camt.056 recalls, camt.029 resolutions — with a special R-transaction address rule.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/camt-messages#term",
          "name": "camt messages",
          "alternateName": [
            "camt.056",
            "camt.029",
            "cash management messages"
          ],
          "description": "The camt family (Cash Management) covers ISO 20022 exception, investigation and reporting messages. In the address context the key members are camt.056 (FI-to-FI Payment Cancellation Request), camt.029 (Resolution of Investigation) and the camt.110/camt.111 investigation pair — R-transaction messages that reference the parties of an original payment.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/camt-messages",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/camt-messages",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Hybrid Postal Address, Version 1.12",
              "url": "https://www.swift.com/sites/default/files/files/pmpg-hybrid-postal-address-v1.12-05mar2026.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "Payments Market Practice Group (PMPG)"
              },
              "datePublished": "2026-03-05"
            },
            {
              "@type": "CreativeWork",
              "name": "ISO 20022 message definitions catalogue",
              "url": "https://www.iso20022.org/iso-20022-message-definitions",
              "publisher": {
                "@type": "Organization",
                "name": "ISO 20022 Registration Authority"
              },
              "datePublished": "2026"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "camt messages"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-mt103-mx-mapping",
    "slug": "mt103-mx-mapping",
    "path": "/glossary/mt103-mx-mapping",
    "source": "glossary/mt103-mx-mapping.html",
    "output": "glossary/mt103-mx-mapping.astro",
    "ogType": "article",
    "title": "MT 103 to MX Address Mapping — Option F and D",
    "description": "Converting party addresses between SWIFT MT and ISO 20022: end parties map via Option F, agents via Option D; MT 101 needs structured 50F/59F sub-fields.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/mt103-mx-mapping#term",
          "name": "MT 103 to MX address mapping",
          "alternateName": [
            "MT to MX mapping",
            "Option F",
            "MT 103 addresses"
          ],
          "description": "MT-to-MX address mapping is the rule set for converting party addresses between the legacy SWIFT MT format and ISO 20022. End-party addresses (Debtor, Creditor) map to MT fields using Option F; agent addresses use Option D. In MT 101 ingestion, the structured Option F sub-fields (50F, 59F) must carry Town Name and Country — free-text Option K is not acceptable as the sole carrier.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/mt103-mx-mapping",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/mt103-mx-mapping",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Hybrid Postal Address, Version 1.12",
              "url": "https://www.swift.com/sites/default/files/files/pmpg-hybrid-postal-address-v1.12-05mar2026.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "Payments Market Practice Group (PMPG)"
              },
              "datePublished": "2026-03-05"
            },
            {
              "@type": "CreativeWork",
              "name": "ISO 20022 — Removal of unstructured address",
              "url": "https://www.swift.com/standards/iso-20022/removal-unstructured-address",
              "publisher": {
                "@type": "Organization",
                "name": "Swift"
              },
              "datePublished": "2026"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "MT 103 to MX address mapping"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-cbpr-plus",
    "slug": "cbpr-plus",
    "path": "/glossary/cbpr-plus",
    "source": "glossary/cbpr-plus.html",
    "output": "glossary/cbpr-plus.astro",
    "ogType": "article",
    "title": "CBPR+ — Definition, Scope, Standards Releases",
    "description": "CBPR+ is the SWIFT usage guideline for cross-border ISO 20022 payments, evolving via annual November Standards Releases. SR 2026 removes unstructured addresses.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/cbpr-plus#term",
          "name": "CBPR+",
          "alternateName": [
            "Cross-Border Payments and Reporting Plus",
            "CBPR+ guidelines"
          ],
          "description": "CBPR+ (Cross-Border Payments and Reporting Plus) is the SWIFT usage guideline that defines how ISO 20022 messages are populated for cross-border payments on the SWIFT network. It evolves through annual November Standards Releases; SR 2026 (15 November 2026) removes the fully unstructured postal address from the accepted profile for newly initiated payments.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/cbpr-plus",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/cbpr-plus",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Fostering ISO 20022 harmonisation — follow-up report",
              "url": "https://www.bis.org/cpmi/pietf/iso20022_2026.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Payments Interoperability and Extension (PIE) taskforce"
              },
              "datePublished": "2026-02"
            },
            {
              "@type": "CreativeWork",
              "name": "ISO 20022 — Removal of unstructured address",
              "url": "https://www.swift.com/standards/iso-20022/removal-unstructured-address",
              "publisher": {
                "@type": "Organization",
                "name": "Swift"
              },
              "datePublished": "2026"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "CBPR+"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-hvps-plus",
    "slug": "hvps-plus",
    "path": "/glossary/hvps-plus",
    "source": "glossary/hvps-plus.html",
    "output": "glossary/hvps-plus.astro",
    "ogType": "article",
    "title": "HVPS+ — Definition, Scope, Alignment Status",
    "description": "HVPS+ defines the common ISO 20022 profile for major RTGS systems — T2, Fedwire, CHAPS, BoJ-Net. Status: Scheduled — unstructured removal at November 2026.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/hvps-plus#term",
          "name": "HVPS+",
          "alternateName": [
            "High-Value Payments Plus",
            "HVPS+ profile"
          ],
          "description": "HVPS+ (High-Value Payments Plus) is the market practice group and usage guideline defining a common ISO 20022 profile for the world’s major RTGS systems — T2, Fedwire, CHAPS, BoJ-Net, RITS, Lynx and others. At the BIS PIE taskforce, Fostering ISO 20022 harmonisation snapshot its status is \"Scheduled\": hybrid is implemented, with unstructured removal set for the November 2026 cutover.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/hvps-plus",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/hvps-plus",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Fostering ISO 20022 harmonisation — follow-up report",
              "url": "https://www.bis.org/cpmi/pietf/iso20022_2026.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Payments Interoperability and Extension (PIE) taskforce"
              },
              "datePublished": "2026-02"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "HVPS+"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-sepa-sct-addresses",
    "slug": "sepa-sct-addresses",
    "path": "/glossary/sepa-sct-addresses",
    "source": "glossary/sepa-sct-addresses.html",
    "output": "glossary/sepa-sct-addresses.astro",
    "ogType": "article",
    "title": "SEPA Structured Addresses — SCT Rules and Dates",
    "description": "EPC rulebooks made Ctry mandatory in SCT from November 2025; TwnNm follows at the November 2026 cutover, when only structured and hybrid formats are allowed.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/sepa-sct-addresses#term",
          "name": "SEPA structured addresses",
          "alternateName": [
            "SEPA structured address",
            "SCT address requirements"
          ],
          "description": "SEPA structured address rules are set by the EPC rulebooks for SCT, SCT Inst, SDD and OCT Inst. <Ctry> has been mandatory in EPC SCT since November 2025; <TwnNm> becomes mandatory at the November 2026 cutover, from which only structured and hybrid formats are allowed in both the Customer-to-PSP and Inter-PSP spaces.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/sepa-sct-addresses",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/sepa-sct-addresses",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "EPC guidance document — Provision of Addresses under the EPC Payment Schemes, v2.1",
              "url": "https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-10/EPC153-22%20v2.1%20EPC%20guidance%20document%20-%20Provision%20of%20Addresses%20under%20the%20EPC%20Payment%20Schemes.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "European Payments Council"
              },
              "datePublished": "2025-10"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "SEPA structured addresses"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-epc-153-22",
    "slug": "epc-153-22",
    "path": "/glossary/epc-153-22",
    "source": "glossary/epc-153-22.html",
    "output": "glossary/epc-153-22.astro",
    "ogType": "article",
    "title": "EPC 153-22 — The EPC Address Guidance Explained",
    "description": "EPC 153-22 is the EPC guidance on providing addresses under the SEPA schemes — v2.1 (October 2025) codifies formats and the 15 November 2026 cutover alignment.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/epc-153-22#term",
          "name": "EPC 153-22",
          "alternateName": [
            "EPC153-22",
            "EPC guidance document addresses"
          ],
          "description": "EPC 153-22 is the European Payments Council guidance document \"Provision of Addresses under the EPC Payment Schemes\". Now at v2.1 (October 2025), it defines when payer and payee addresses are required in SEPA payments, codifies the structured and hybrid formats, and records the cutover alignment to 15 November 2026.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/epc-153-22",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/epc-153-22",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "EPC guidance document — Provision of Addresses under the EPC Payment Schemes, v2.1",
              "url": "https://www.europeanpaymentscouncil.eu/sites/default/files/kb/file/2025-10/EPC153-22%20v2.1%20EPC%20guidance%20document%20-%20Provision%20of%20Addresses%20under%20the%20EPC%20Payment%20Schemes.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "European Payments Council"
              },
              "datePublished": "2025-10"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "EPC 153-22"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-cutover2026",
    "slug": "cutover2026",
    "path": "/glossary/cutover2026",
    "source": "glossary/cutover2026.html",
    "output": "glossary/cutover2026.astro",
    "ogType": "article",
    "title": "CUTOVER2026 Keyword — Usage, Prohibitions, Expiry",
    "description": "CUTOVER2026 is the literal TwnNm keyword bridging in-flight transactions across the 15 November 2026 cutover. Prohibited for new payments; expires ~3 months.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/cutover2026#term",
          "name": "CUTOVER2026 keyword",
          "alternateName": [
            "CUTOVER2026",
            "cutover bridging keyword"
          ],
          "description": "CUTOVER2026 is a literal keyword placed in <TwnNm> as a last-resort bridge for return messages and warehoused payments that straddle the 15 November 2026 cutover. Prohibited in newly initiated payments (PMPG Hybrid Postal Address v1.12 §0.311), it expires approximately three months post-cutover, after which Best-Effort Structuring is the only permitted handling.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/cutover2026",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/cutover2026",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Hybrid Postal Address, Version 1.12",
              "url": "https://www.swift.com/sites/default/files/files/pmpg-hybrid-postal-address-v1.12-05mar2026.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "Payments Market Practice Group (PMPG)"
              },
              "datePublished": "2026-03-05"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "CUTOVER2026 keyword"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-best-effort-structuring",
    "slug": "best-effort-structuring",
    "path": "/glossary/best-effort-structuring",
    "source": "glossary/best-effort-structuring.html",
    "output": "glossary/best-effort-structuring.astro",
    "ogType": "article",
    "title": "Best-Effort Structuring — The PMPG Hybrid Postal Address v1.12 §38 Rule",
    "description": "Best-Effort Structuring is the primary transitional rule: extract TwnNm and Ctry from pre-cutover content where reliable, residual into up to two AdrLine.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/best-effort-structuring#term",
          "name": "Best-Effort Structuring",
          "alternateName": [
            "best effort structuring rule",
            "PMPG Hybrid Postal Address v1.12 §38"
          ],
          "description": "Best-Effort Structuring is the primary transitional rule for pre-cutover content processed after 15 November 2026: institutions SHALL extract <TwnNm> and <Ctry> from the original unstructured address where reliably derivable and place residual content in up to two <AdrLine> elements. The CUTOVER2026 keyword is the exception of last resort where extraction fails.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/best-effort-structuring",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/best-effort-structuring",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Hybrid Postal Address, Version 1.12",
              "url": "https://www.swift.com/sites/default/files/files/pmpg-hybrid-postal-address-v1.12-05mar2026.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "Payments Market Practice Group (PMPG)"
              },
              "datePublished": "2026-03-05"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Best-Effort Structuring"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-fatf-recommendation-16",
    "slug": "fatf-recommendation-16",
    "path": "/glossary/fatf-recommendation-16",
    "source": "glossary/fatf-recommendation-16.html",
    "output": "glossary/fatf-recommendation-16.astro",
    "ogType": "article",
    "title": "FATF Recommendation 16 — Address Requirements",
    "description": "The revised FATF R16 (Travel Rule) requires originator name and full address, beneficiary name plus town and country, for transfers above EUR/USD 1,000.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/fatf-recommendation-16#term",
          "name": "FATF Recommendation 16",
          "alternateName": [
            "FATF R16",
            "Travel Rule",
            "Recommendation 16 revised"
          ],
          "description": "FATF Recommendation 16 (Revised) — the \"Travel Rule\" — sets the information that must accompany wire transfers above EUR/USD 1,000: the originator’s name and full address, and the beneficiary’s name with at minimum Town Name and Country. Industry guidance is expected end-2026, with full implementation due by end-2030.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/fatf-recommendation-16",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/fatf-recommendation-16",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — updated report",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            },
            {
              "@type": "CreativeWork",
              "name": "Regulation (EU) 2023/1113 on information accompanying transfers of funds",
              "url": "https://eur-lex.europa.eu/eli/reg/2023/1113/oj",
              "publisher": {
                "@type": "Organization",
                "name": "European Union"
              },
              "datePublished": "2023-05-31"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "FATF Recommendation 16"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-address-resolution",
    "slug": "address-resolution",
    "path": "/glossary/address-resolution",
    "source": "glossary/address-resolution.html",
    "output": "glossary/address-resolution.astro",
    "ogType": "article",
    "title": "Address Resolution — Definition vs Postal Validation",
    "description": "Address resolution classifies, validates, corrects and renders addresses into compliant ISO 20022 structures — deterministic, unlike postal validation or LLMs.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/address-resolution#term",
          "name": "Address resolution",
          "alternateName": [
            "address resolution service",
            "RETE network address resolution",
            "payment address resolution"
          ],
          "description": "Address resolution is the payment-grade discipline of classifying, validating, correcting and rendering postal addresses into compliant ISO 20022 structures — distinct from postal validation, which merely confirms deliverability. Deterministic engines built on RETE-style rule networks produce identical output for identical input, a prerequisite for sanctions screening and audit.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/address-resolution",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/address-resolution",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Hybrid Postal Address, Version 1.12",
              "url": "https://www.swift.com/sites/default/files/files/pmpg-hybrid-postal-address-v1.12-05mar2026.pdf",
              "publisher": {
                "@type": "Organization",
                "name": "Payments Market Practice Group (PMPG)"
              },
              "datePublished": "2026-03-05"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Address resolution"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  },
  {
    "key": "glossary-straight-through-processing",
    "slug": "straight-through-processing",
    "path": "/glossary/straight-through-processing",
    "source": "glossary/straight-through-processing.html",
    "output": "glossary/straight-through-processing.astro",
    "ogType": "article",
    "title": "Straight-Through Processing (STP) — Definition",
    "description": "STP is automated payment processing without manual intervention. Cross-border baselines sit near 40%; ioNova ARS reaches ~98% automatic, >99% with Workbench.",
    "structuredData": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "DefinedTermSet",
          "@id": "https://ionova.ai/glossary#termset",
          "name": "ioNova ISO 20022 Address Glossary",
          "url": "https://ionova.ai/glossary",
          "description": "Authoritative glossary of postal-address, ISO 20022 and payment-compliance terms used across the ioNova Address Intelligence product line."
        },
        {
          "@type": "DefinedTerm",
          "@id": "https://ionova.ai/glossary/straight-through-processing#term",
          "name": "Straight-through processing (STP)",
          "alternateName": [
            "STP",
            "STP rate"
          ],
          "description": "Straight-through processing (STP) is the automated handling of a payment from initiation to settlement without manual intervention. Unstructured addresses are a leading STP killer; structured addresses enable reliable parsing, validation and screening. Industry cross-border STP baselines sit near 40%, while ioNova ARS achieves ~98% automatically and >99% with the Exceptions Workbench.",
          "inDefinedTermSet": "https://ionova.ai/glossary#termset",
          "url": "https://ionova.ai/glossary/straight-through-processing",
          "subjectOf": {
            "@type": "WebPage",
            "@id": "https://ionova.ai/glossary/straight-through-processing",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": [
                ".answer-block"
              ]
            }
          },
          "citation": [
            {
              "@type": "CreativeWork",
              "name": "Harmonised ISO 20022 data requirements for enhancing cross-border payments — updated report",
              "url": "https://www.bis.org/cpmi/publ/d230.htm",
              "publisher": {
                "@type": "Organization",
                "name": "BIS Committee on Payments and Market Infrastructures (CPMI)"
              },
              "datePublished": "2026-02-26"
            }
          ]
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://ionova.ai/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Glossary",
              "item": "https://ionova.ai/glossary"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Straight-through processing (STP)"
            }
          ]
        },
        {
          "@type": "Organization",
          "@id": "https://ionova.ai/#organization",
          "name": "ioNova",
          "url": "https://ionova.ai/",
          "logo": "https://ionova.ai/assets/logo.png",
          "sameAs": [
            "https://www.linkedin.com/company/ionova"
          ]
        }
      ]
    }
  }
] satisfies ReferencePageMeta[];

export const glossaryTermPageMap = Object.fromEntries(
  glossaryTermPages.map((page) => [page.slug, page]),
) as Record<string, ReferencePageMeta>;
