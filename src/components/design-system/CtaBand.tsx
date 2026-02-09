import type { ReactNode } from 'react';

interface CtaBandProps {
  headline: ReactNode;
  sub?: string;
  children?: ReactNode;
}

export function CtaBand({ headline, sub, children }: CtaBandProps) {
  return (
    <div className="cta-band">
      <div className="cta-hl">{headline}</div>
      {sub && <div className="cta-sub">{sub}</div>}
      {children && <div className="cta-btns">{children}</div>}
    </div>
  );
}
