import { useState, type ReactNode } from 'react';

interface FaqItem {
  q: string;
  a: ReactNode;
}

interface FaqAccordionProps {
  items: FaqItem[];
  schemaOrg?: boolean;
}

export function FaqAccordion({ items, schemaOrg = false }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const wrapperProps = schemaOrg
    ? { itemScope: true, itemType: 'https://schema.org/FAQPage' }
    : {};

  return (
    <div className="faq-list" {...wrapperProps}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const itemProps = schemaOrg
          ? { itemScope: true, itemProp: 'mainEntity', itemType: 'https://schema.org/Question' }
          : {};
        return (
          <div key={i} className={`faq-item ${isOpen ? 'open' : ''}`} {...itemProps}>
            <div className="faq-q" onClick={() => toggle(i)}>
              <span {...(schemaOrg ? { itemProp: 'name' } : {})}>{item.q}</span>
              <svg className="faq-chevron" viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div
              className="faq-a"
              style={{ maxHeight: isOpen ? '600px' : '0px' }}
              {...(schemaOrg ? { itemScope: true, itemProp: 'acceptedAnswer', itemType: 'https://schema.org/Answer' } : {})}
            >
              <div className="faq-a-inner" {...(schemaOrg ? { itemProp: 'text' } : {})}>
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
