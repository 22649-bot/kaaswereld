import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import hero from "@/assets/hero-kaasplank.jpg";
import { cheeses, categorieen, categorieLabel, type Cheese } from "@/data/cheeses";
import { CheeseCard } from "@/components/CheeseCard";
import { CheeseDialog } from "@/components/CheeseDialog";
import { CheeseWedge } from "@/components/CheeseDecor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "De Wereld van Kaas – ontdek 45 kazen uit de hele wereld" },
      { name: "description", content: "Ontdek de lekkerste kazen van over de hele wereld: van romige brie tot pittige blauwe kaas, met weetjes, quiz en favorieten." },
      { property: "og:title", content: "De Wereld van Kaas" },
      { property: "og:description", content: "Een interactieve encyclopedie over kaas met 45 kazen, weetjes en een quiz." },
    ],
  }),
  component: Index,
});

const uitgelicht = ["brie", "parmesan", "roquefort", "gouda"];

function Index() {
  const [open, setOpen] = useState<Cheese | null>(null);
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:py-24 lg:grid-cols-2">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-bold text-brown shadow-soft">
              <CheeseWedge className="w-5" /> {cheeses.length} kazen · {categorieen.length} regio's
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] text-brown md:text-7xl">
              DE WERELD VAN KAAS
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ontdek de lekkerste kazen van over de hele wereld. Van romige brie tot pittige blauwe kaas: er valt ontzettend veel te ontdekken!
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/kazen" className="rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift">
                Ontdek alle kazen
              </Link>
              <Link to="/weetjes" className="rounded-full border-2 border-brown px-7 py-3.5 font-bold text-brown transition-all hover:-translate-y-0.5 hover:bg-brown hover:text-brown-foreground">
                Leer meer over kaas
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Verschillende soorten kaas op een houten kaasplank" width={1600} height={1008} className="rounded-[2rem] shadow-lift" />
            <div className="absolute -bottom-6 -left-4 w-20 animate-spin-slow md:w-24"><CheeseWedge /></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-brown md:text-4xl">Kies een kaasland</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categorieen.map((c) => (
            <Link key={c} to="/kazen" search={{ land: c }} className="rounded-3xl border border-border bg-card p-5 text-center font-bold text-brown shadow-soft transition-all hover:-translate-y-1 hover:bg-secondary">
                            <span className="block">{c}</span>
              <span className="mt-1 block text-xs font-semibold text-muted-foreground">{cheeses.filter((x) => x.category === c).length} kazen</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-brown md:text-4xl">Uitgelichte kazen</h2>
          <Link to="/kazen" className="font-bold text-brown underline-offset-4 hover:underline">Bekijk alle {cheeses.length} →</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cheeses.filter((c) => uitgelicht.includes(c.id)).map((c) => (
            <CheeseCard key={c.id} cheese={c} onOpen={() => setOpen(c)} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 rounded-[2rem] bg-cheese p-8 text-primary-foreground shadow-lift md:grid-cols-2 md:p-12">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Hoeveel weet jij van kaas?</h2>
            <p className="mt-3">Test je kennis met tien vragen, van Parmezaan tot feta.</p>
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            <Link to="/quiz" className="rounded-full bg-brown px-7 py-3.5 font-bold text-brown-foreground transition-transform hover:-translate-y-0.5">Start de quiz</Link>
          </div>
        </div>
      </section>
      <CheeseDialog cheese={open} onClose={() => setOpen(null)} />
    </>
  );
}
