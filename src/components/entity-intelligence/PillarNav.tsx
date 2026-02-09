interface PillarNavProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const pillars = [
  { page: 'evidence', label: 'Evidence-First AI' },
  { page: 'overlay', label: 'Overlay-First' },
  { page: 'autonomy', label: 'Progressive Autonomy' },
  { page: 'cascade', label: 'Cascade Intelligence' },
  { page: 'governance', label: 'Governance' },
];

export function PillarNav({ activePage, onNavigate }: PillarNavProps) {
  return (
    <div className="pillar-nav">
      {pillars.map((p) => (
        <a
          key={p.page}
          className={activePage === p.page ? 'cur' : ''}
          onClick={() => onNavigate(p.page)}
          style={{ cursor: 'pointer' }}
        >
          {p.label}
        </a>
      ))}
    </div>
  );
}
