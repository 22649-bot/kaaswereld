import { Link } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useFavorites } from "@/lib/favorites";
import { CheeseWedge } from "./CheeseDecor";

const links = [
  { to: "/", label: "Home" },
  { to: "/kazen", label: "Alle kazen" },
  { to: "/weetjes", label: "Kaasweetjes" },
  { to: "/quiz", label: "Kaasquiz" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const favs = useFavorites();
  const cls = "rounded-full px-4 py-2 font-semibold text-secondary-foreground transition-colors hover:bg-secondary";
  const active = { className: "bg-primary text-primary-foreground hover:bg-primary" };
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-brown">
          <CheeseWedge className="w-9" /> Kaaswereld
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={cls} activeProps={active} activeOptions={{ exact: true }}>
              {l.label}
            </Link>
          ))}
          <Link to="/favorieten" className={`${cls} flex items-center gap-1.5`} activeProps={active}>
            <Heart className="h-4 w-4" /> Favorieten
            {favs.length > 0 && <span className="rounded-full bg-brown px-2 text-xs text-brown-foreground">{favs.length}</span>}
          </Link>
        </div>
        <button className="rounded-full p-2 hover:bg-secondary md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="flex flex-col gap-1 border-t border-border px-4 pb-4 pt-2 md:hidden">
          {[...links, { to: "/favorieten", label: `Favorieten (${favs.length})` } as const].map((l) => (
            <Link key={l.to} to={l.to} className={cls} activeProps={active} activeOptions={{ exact: true }} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-10 text-center text-muted-foreground">
        <CheeseWedge className="w-10" />
        <p className="font-display text-lg text-brown">De Wereld van Kaas</p>
        <p className="text-sm">Een interactieve encyclopedie vol romige, pittige en verrassende kazen.</p>
      </div>
    </footer>
  );
}
