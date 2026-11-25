import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { vragen, eindboodschap } from "@/data/quiz";
import { CheeseWedge } from "@/components/CheeseDecor";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Kaasquiz – De Wereld van Kaas" },
      { name: "description", content: "Hoeveel weet jij van kaas? Doe de kaasquiz met 10 vragen." },
      { property: "og:title", content: "Kaasquiz" },
      { property: "og:description", content: "Tien vragen over kaas. Ben jij een echte kaaskenner?" },
    ],
  }),
  component: Quiz,
});

function Quiz() {
  const [i, setI] = useState(0);
  const [keuze, setKeuze] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [klaar, setKlaar] = useState(false);
  const v = vragen[i]!;

  const kies = (k: number) => {
    if (keuze !== null) return;
    setKeuze(k);
    if (k === v.antwoord) setScore((s) => s + 1);
  };
  const volgende = () => {
    if (i + 1 >= vragen.length) setKlaar(true);
    else { setI(i + 1); setKeuze(null); }
  };
  const opnieuw = () => { setI(0); setKeuze(null); setScore(0); setKlaar(false); };

  if (klaar) {
    const e = eindboodschap(score, vragen.length);
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <div className="animate-rise rounded-[2rem] border border-border bg-card p-10 shadow-lift">
          <CheeseWedge className="mx-auto w-24 animate-spin-slow" />
          <p className="mt-6 text-6xl font-extrabold text-brown font-display">{score}/{vragen.length}</p>
          <h1 className="mt-4 text-3xl font-bold text-brown">{e.titel}</h1>
          <p className="mt-2 text-muted-foreground">{e.tekst}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={opnieuw} className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5">Opnieuw spelen</button>
            <Link to="/weetjes" className="rounded-full border-2 border-brown px-6 py-3 font-bold text-brown hover:bg-brown hover:text-brown-foreground">Lees de weetjes</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold text-brown md:text-5xl">Kaasquiz</h1>
      <div className="mt-8 flex items-center justify-between text-sm font-bold text-muted-foreground">
        <span>Vraag {i + 1} van {vragen.length}</span><span>Score: {score}</span>
      </div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-cheese transition-all duration-500" style={{ width: `${((i + (keuze !== null ? 1 : 0)) / vragen.length) * 100}%` }} />
      </div>
      <div key={i} className="mt-6 animate-rise rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-8">
        <h2 className="text-2xl font-bold text-brown">{v.vraag}</h2>
        <div className="mt-6 grid gap-3">
          {v.opties.map((o, k) => {
            const goed = keuze !== null && k === v.antwoord;
            const fout = keuze === k && k !== v.antwoord;
            return (
              <button key={o} onClick={() => kies(k)} disabled={keuze !== null}
                className={`flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left font-semibold transition-all ${goed ? "border-success bg-success text-success-foreground" : fout ? "border-destructive bg-destructive text-destructive-foreground" : "border-border bg-background hover:-translate-y-0.5 hover:border-primary disabled:hover:translate-y-0"}`}>
                {o}
                {goed && <Check className="h-5 w-5" />}
                {fout && <X className="h-5 w-5" />}
              </button>
            );
          })}
        </div>
        {keuze !== null && (
          <div className="mt-6 animate-rise">
            <p className={`font-bold ${keuze === v.antwoord ? "text-success" : "text-destructive"}`}>
              {keuze === v.antwoord ? "Goed zo!" : "Helaas, fout."}
            </p>
            <p className="mt-1 text-muted-foreground">{v.uitleg}</p>
            <button onClick={volgende} className="mt-5 rounded-full bg-brown px-6 py-3 font-bold text-brown-foreground hover:-translate-y-0.5">
              {i + 1 >= vragen.length ? "Bekijk je score" : "Volgende vraag →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
