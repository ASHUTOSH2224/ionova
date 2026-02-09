import type { ReactNode } from 'react';

interface SectionBlockProps {
  label?: string;
  title: string;
  desc?: string;
  children: ReactNode;
  className?: string;
}

export function SectionBlock({ label, title, desc, children, className = '' }: SectionBlockProps) {
  return (
    <div className={`section ${className}`}>
      <div className="container">
        <div className="section-header">
          {label && <div className="section-label">{label}</div>}
          <div className="section-title">{title}</div>
          {desc && <div className="section-desc">{desc}</div>}
        </div>
        {children}
      </div>
    </div>
  );
}
