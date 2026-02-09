interface HeroBadgeProps {
  text: string;
}

export function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <div className="hero-badge">
      <span className="pulse-dot" />
      <span style={{ position: 'relative', zIndex: 1 }}>{text}</span>
    </div>
  );
}
