import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import {
  cheeses, categorieen, categorieLabel, melksoorten, structuren, smaken, kaassoorten,
  type Categorie, type Cheese,
} from "@/data/cheeses";
import { CheeseCard } from "@/components/CheeseCard";
import { CheeseDialog } from "@/components/CheeseDialog";

export const Route = createFileRoute("/kazen")({
  validateSearch: (s: Record<string, unknown>): { land?: Categorie } =>
    categorieen.includes(s["land"] as Categorie) ? { land: s["land"] as Categorie } : {},
  head: () => ({
    meta: [
      { title: "Alle kazen – De Wereld van Kaas" },
      { name: "description", content: "Zoek en filter 45 kazen op land, melksoort, structuur, smaak en kaassoort." },
      { property: "og:title", content: "Alle kazen – De Wereld van Kaas" },
      { property: "og:description", content: "Van Gouda tot Oaxaca: bekijk de complete kaascollectie." },
    ],
  }),
  component: KazenPage,
});

const landen = [...new Set(cheeses.map((c) => c.country))].sort();

function Chips<T extends string>({ label, options, value, onChange }: { label: string; options: readonly T[]; value: T | ""; onChange: (v: T | "") => void }) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => (
          <button key={o} onClick={() => onChange(value === o ? "" : o)}
            className={`rounded-full border px-3 py-1 text-sm font-semibold transition-colors ${value === o ? "border-brown bg-brown text-brown-foreground" : "border-border bg-card hover:bg-secondary"}`}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function KazenPage() {
  const { land } = Route.useSearch();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Categorie | "">(land ?? "");
  const [country, setCountry] = useState("");
  const [milk, setMilk] = useState<(typeof melksoorten)[number] | "">("");
  const [struct, setStruct] = useState<(typeof structuren)[number] | "">("");
  const [taste, setTaste] = useState<(typeof smaken)[number] | "">("");
  const [type, setType] = useState<(typeof kaassoorten)[number] | "">("");
  const [open, setOpen] = useState<Cheese | null>(null);

  const list = useMemo(() => cheeses.filter((c) =>
    c.name.toLowerCase().includes(q.trim().toLowerCase()) &&
    (!cat || c.category === cat) && (!country || c.country === country) &&
    (!milk || c.milk === milk) && (!struct || c.structure === struct) &&
    (!taste || c.strength === taste) && (!type || c.type === type)
  ), [q, cat, country, milk, struct, taste, type]);

  const active = [q, cat, country, milk, struct, taste, type].some(Boolean);
  const reset = () => { setQ(""); setCat(""); setCountry(""); setMilk(""); setStruct(""); setTaste(""); setType(""); };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-brown md:text-5xl">Alle kazen</h1>
      <p className="mt-2 text-muted-foreground">Klik op een kaas voor meer informatie, of op het hartje om hem te bewaren.</p>

      <div className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-5 shadow-soft md:p-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Zoek een kaas op naam…"
            className="w-full rounded-full border border-input bg-background py-3 pl-12 pr-4 text-base outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <Chips label="Regio" options={categorieen} value={cat} onChange={setCat} />
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">Land van herkomst</p>
            <select value={country} onChange={(e) => setCountry(e.target.value)} className="w-full rounded-full border border-input bg-background px-4 py-2 font-semibold">
              <option value="">Alle landen</option>
              {landen.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          <Chips label="Soort melk" options={melksoorten} value={milk} onChange={setMilk} />
          <Chips label="Structuur" options={structuren} value={struct} onChange={setStruct} />
          <Chips label="Smaak" options={smaken} value={taste} onChange={setTaste} />
          <Chips label="Kaassoort" options={kaassoorten} value={type} onChange={setType} />
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4 text-sm">
          <span className="font-bold text-brown">{list.length} {list.length === 1 ? "kaas" : "kazen"} gevonden</span>
          {active && <button onClick={reset} className="flex items-center gap-1 font-semibold text-muted-foreground hover:text-foreground"><X className="h-4 w-4" />Wis filters</button>}
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-center text-lg text-muted-foreground">🧀 Geen kazen gevonden. Probeer een andere zoekterm of filter.</p>
      ) : active ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((c) => <CheeseCard key={c.id} cheese={c} onOpen={() => setOpen(c)} />)}
        </div>
      ) : (
        categorieen.map((g) => (
          <section key={g} className="mt-14">
            <h2 className="text-3xl font-bold text-brown">{categorieLabel[g]}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.filter((c) => c.category === g).map((c) => <CheeseCard key={c.id} cheese={c} onOpen={() => setOpen(c)} />)}
            </div>
          </section>
        ))
      )}
      <CheeseDialog cheese={open} onClose={() => setOpen(null)} />
    </div>
  );
}
