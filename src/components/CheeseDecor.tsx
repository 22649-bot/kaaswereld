export function CheeseWedge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M6 44 L58 22 L58 50 Q32 56 6 50 Z" fill="var(--primary)" stroke="var(--brown)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 44 L58 22 L44 14 Z" fill="var(--secondary)" stroke="var(--brown)" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="22" cy="46" r="3" fill="var(--accent)" />
      <circle cx="40" cy="40" r="4" fill="var(--accent)" />
      <circle cx="50" cy="46" r="2.4" fill="var(--accent)" />
    </svg>
  );
}

export function CheeseCube({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="6" fill="var(--primary)" stroke="var(--brown)" strokeWidth="1.5" />
      <circle cx="15" cy="16" r="3" fill="var(--accent)" />
      <circle cx="26" cy="25" r="2.5" fill="var(--accent)" />
    </svg>
  );
}

const cubes = [
  { top: "12%", left: "4%", size: "w-8", delay: "0s" },
  { top: "35%", left: "92%", size: "w-10", delay: "-4s" },
  { top: "62%", left: "8%", size: "w-6", delay: "-8s" },
  { top: "80%", left: "85%", size: "w-7", delay: "-12s" },
  { top: "50%", left: "48%", size: "w-5", delay: "-6s" },
];

export function FloatingCheese() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-30">
      {cubes.map((c, i) => (
        <div key={i} className={`absolute animate-drift ${c.size}`} style={{ top: c.top, left: c.left, animationDelay: c.delay }}>
          <CheeseCube />
        </div>
      ))}
      <div className="absolute right-[18%] top-[20%] w-12 animate-spin-slow">
        <CheeseWedge />
      </div>
    </div>
  );
}
