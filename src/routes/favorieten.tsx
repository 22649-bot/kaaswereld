import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { cheeses, type Cheese } from "@/data/cheeses";
import { useFavorites } from "@/lib/favorites";
import { CheeseCard } from "@/components/CheeseCard";
import { CheeseDialog } from "@/components/CheeseDialog";
import { CheeseWedge } from "@/components/CheeseDecor";

export const Route = createFileRoute("/favorieten")({
  head: () => ({
    meta: [
      { title: "Mijn favoriete kazen – De Wereld van Kaas" },
      { name: "description", content: "Al je favoriete kazen op één plek." },
      { property: "og:title", content: "Mijn favoriete kazen" },
      { property: "og:description", content: "Bewaar je lievelingskazen met een hartje." },
    ],
  }),
  component: Favorieten,
});

function Favorieten() {
  const favs = useFavorites();
  const [open, setOpen] = useState<Cheese | null>(null);
  const list = cheeses.filter((c) => favs.includes(c.id));
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-brown md:text-5xl">Mijn favorieten ❤️</h1>
      <p className="mt-2 text-muted-foreground">{list.length} {list.length === 1 ? "kaas" : "kazen"} bewaard</p>
      {list.length === 0 ? (
        <div className="mx-auto mt-16 max-w-md rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
          <CheeseWedge className="mx-auto w-20" />
          <p className="mt-4 text-lg font-bold text-brown">Nog geen favoriete kazen</p>
          <p className="mt-1 text-muted-foreground">Klik op het hartje bij een kaas om hem hier te bewaren.</p>
          <Link to="/kazen" className="mt-6 inline-block rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5">Ontdek kazen</Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((c) => <CheeseCard key={c.id} cheese={c} onOpen={() => setOpen(c)} />)}
        </div>
      )}
      <CheeseDialog cheese={open} onClose={() => setOpen(null)} />
    </div>
  );
}
