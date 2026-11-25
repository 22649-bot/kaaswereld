import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Cheese } from "@/data/cheeses";
import { FavButton, Tag } from "./CheeseCard";

export function CheeseDialog({ cheese, onClose }: { cheese: Cheese | null; onClose: () => void }) {
  return (
    <Dialog open={!!cheese} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-3xl border-border bg-card p-0">
        {cheese && (
          <>
            <div className="relative aspect-[16/9] bg-muted">
              <img src={cheese.image} alt={cheese.name} className="h-full w-full object-cover" />
              <FavButton id={cheese.id} className="absolute bottom-3 right-3" />
            </div>
            <div className="space-y-5 p-6 pt-2">
              <div>
                <DialogTitle className="font-display text-3xl text-brown">{cheese.name}</DialogTitle>
                <DialogDescription className="mt-1">{cheese.country} · {cheese.milk}</DialogDescription>
              </div>
              <div className="flex flex-wrap gap-1.5"><Tag>{cheese.structure}</Tag><Tag>{cheese.strength}</Tag><Tag>{cheese.type}</Tag></div>
              <p className="leading-relaxed">{cheese.description}</p>
              <dl className="grid gap-3 sm:grid-cols-2">
                {[["👅 Smaak", cheese.taste], ["🧱 Structuur", cheese.structure], ["⏳ Rijptijd", cheese.ripening], ["🍇 Lekker met", cheese.pairing]].map(([k, v]) => (
                  <div key={k} className="rounded-2xl bg-muted p-3">
                    <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{k}</dt>
                    <dd className="mt-1 text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="rounded-2xl bg-cheese p-4 text-primary-foreground">
                <p className="font-bold">💡 Wist je dat?</p>
                <p className="mt-1 text-sm">{cheese.fact}</p>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
