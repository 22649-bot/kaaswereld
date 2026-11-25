import { Heart, MapPin, Milk } from "lucide-react";
import type { Cheese } from "@/data/cheeses";
import { toggleFavorite, useFavorites } from "@/lib/favorites";

export function FavButton({ id, className = "" }: { id: string; className?: string }) {
  const favs = useFavorites();
  const on = favs.includes(id);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite(id);
      }}
      aria-label={on ? "Verwijder uit favorieten" : "Voeg toe aan favorieten"}
      aria-pressed={on}
      className={`grid h-10 w-10 place-items-center rounded-full bg-card/90 shadow-soft transition-transform hover:scale-110 ${className}`}
    >
      <Heart className={`h-5 w-5 ${on ? "fill-destructive text-destructive" : "text-brown"}`} />
    </button>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">{children}</span>;
}

export function CheeseCard({ cheese, onOpen }: { cheese: Cheese; onOpen: () => void }) {
  return (
    <article
      onClick={onOpen}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      tabIndex={0}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img src={cheese.image} alt={cheese.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <FavButton id={cheese.id} className="absolute right-3 top-3" />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold ${cheese.strength === "Sterk" ? "bg-brown text-brown-foreground" : "bg-primary text-primary-foreground"}`}>
          {cheese.strength}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-2xl font-bold text-brown">{cheese.name}</h3>
          <div className="mt-1 flex flex-wrap gap-x-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{cheese.country}</span>
            <span className="flex items-center gap-1"><Milk className="h-3.5 w-3.5" />{cheese.milk}</span>
          </div>
        </div>
        <p className="text-sm"><b>Smaak:</b> {cheese.taste}</p>
        <div className="flex flex-wrap gap-1.5"><Tag>{cheese.structure}</Tag><Tag>{cheese.type}</Tag></div>
        <p className="mt-auto rounded-2xl bg-muted p-3 text-sm text-muted-foreground">💡 {cheese.fact}</p>
      </div>
    </article>
  );
}
