const S = { stroke: "var(--brown)", strokeWidth: 2, strokeLinejoin: "round" as const, strokeLinecap: "round" as const };
const Y = "var(--primary)", C = "var(--secondary)", A = "var(--accent)";
type P = { className?: string };
const W = ({ className = "w-9", children }: P & { children: React.ReactNode }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">{children}</svg>
);
export const IconMilk = (p: P) => <W {...p}><path d="M22 10h20v8l6 10v26H16V28l6-10z" fill={C} {...S}/><path d="M16 36h32v18H16z" fill={Y} {...S}/><circle cx="28" cy="44" r="3" fill={A}/><circle cx="38" cy="48" r="2" fill={A}/></W>;
export const IconHoles = (p: P) => <W {...p}><rect x="8" y="14" width="48" height="38" rx="8" fill={Y} {...S}/><circle cx="22" cy="28" r="6" fill={A} {...S}/><circle cx="42" cy="24" r="4" fill={A} {...S}/><circle cx="38" cy="40" r="7" fill={A} {...S}/><circle cx="18" cy="43" r="3" fill={A}/></W>;
export const IconAncient = (p: P) => <W {...p}><path d="M8 54 L32 10 L56 54 Z" fill={C} {...S}/><path d="M18 54 L32 30 L46 54 Z" fill={Y} {...S}/><circle cx="32" cy="45" r="3" fill={A}/></W>;
export const IconSmell = (p: P) => <W {...p}><path d="M8 50 L50 34 L50 56 Q28 60 8 56 Z" fill={Y} {...S}/><circle cx="24" cy="51" r="2.5" fill={A}/><path d="M20 30q-4-5 0-10t0-10M32 28q-4-5 0-10t0-10M44 26q-4-5 0-10t0-10" fill="none" {...S}/></W>;
export const IconClock = (p: P) => <W {...p}><circle cx="32" cy="34" r="22" fill={Y} {...S}/><circle cx="20" cy="42" r="3" fill={A}/><circle cx="44" cy="24" r="2.5" fill={A}/><path d="M32 20v14l9 6" fill="none" {...S} strokeWidth={3}/></W>;
export const IconCrystal = (p: P) => <W {...p}><path d="M6 46 L58 24 L58 52 Q32 58 6 52 Z" fill={Y} {...S}/><path d="M24 44l3-5 3 5-3 5zM40 38l2.5-4 2.5 4-2.5 4zM48 46l2-3 2 3-2 3z" fill={C} {...S} strokeWidth={1.5}/><path d="M18 14l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill={C} {...S} strokeWidth={1.5}/></W>;
export const IconMany = (p: P) => <W {...p}><rect x="6" y="30" width="22" height="22" rx="5" fill={Y} {...S}/><path d="M32 52 L58 40 L58 54 Q45 57 32 54 Z" fill={Y} {...S}/><circle cx="36" cy="22" r="13" fill={C} {...S}/><circle cx="14" cy="38" r="2.5" fill={A}/><circle cx="48" cy="49" r="2" fill={A}/><circle cx="33" cy="19" r="3" fill={A}/></W>;
export const IconEat = (p: P) => <W {...p}><ellipse cx="32" cy="46" rx="24" ry="8" fill={C} {...S}/><path d="M14 42 L48 28 L48 44 Q31 48 14 44 Z" fill={Y} {...S}/><circle cx="34" cy="40" r="2.5" fill={A}/><path d="M54 10v20M50 10v8q0 4 4 4t4-4v-8" fill="none" {...S}/></W>;
export const IconAnimal = (p: P) => <W {...p}><ellipse cx="32" cy="36" rx="18" ry="16" fill={C} {...S}/><path d="M14 26l-6-6M50 26l6-6" {...S}/><ellipse cx="32" cy="44" rx="10" ry="7" fill={Y} {...S}/><circle cx="24" cy="30" r="2.5" fill="var(--brown)"/><circle cx="40" cy="30" r="2.5" fill="var(--brown)"/><circle cx="28" cy="44" r="1.5" fill="var(--brown)"/><circle cx="36" cy="44" r="1.5" fill="var(--brown)"/></W>;
