import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/weetjes")({
  head: () => ({
    meta: [
      { title: "Kaasweetjes – De Wereld van Kaas" },
      { name: "description", content: "Hoe wordt kaas gemaakt, waarom heeft kaas gaten en wat is de oudste kaas? Leuke weetjes over kaas." },
      { property: "og:title", content: "Kaasweetjes" },
      { property: "og:description", content: "Bijzondere en leuke weetjes over kaas." },
    ],
  }),
  component: Weetjes,
});

const weetjes = [
  { icon: "🥛", title: "Hoe wordt kaas eigenlijk gemaakt?", text: "Melk wordt verwarmd en er gaat stremsel en zuursel bij. Daardoor stolt de melk tot wrongel en wei. De wrongel wordt gesneden, in een vorm geperst, in pekel gelegd en daarna gerijpt. Zo simpel – en toch zijn er duizenden soorten!" },
  { icon: "🕳️", title: "Waarom heeft sommige kaas gaten?", text: "Bij kazen als Emmentaler en Maasdammer maken propionzuurbacteriën koolzuurgas. Dat gas kan niet weg en vormt bubbels: de gaten. Onderzoekers ontdekten dat kleine hooideeltjes in de melk helpen om gaten te laten ontstaan." },
  { icon: "🏺", title: "Wat is de oudste kaassoort?", text: "In een Egyptisch graf werd kaas van ruim 3200 jaar oud gevonden. In China vond men zelfs kaas van 3600 jaar oud bij mummies. Feta en Pecorino behoren tot de oudste kazen die nu nog gemaakt worden." },
  { icon: "👃", title: "Waarom ruikt sommige kaas zo sterk?", text: "Kazen met een gewassen korst, zoals Époisses en Munster, worden ingewreven met zout water of alcohol. Daarop groeien bacteriën die stoffen maken die op zweetvoeten lijken. De smaak is vaak veel milder dan de geur!" },
  { icon: "⏳", title: "Hoe lang kan kaas rijpen?", text: "Verse kaas eet je binnen een paar dagen, maar harde kazen kunnen jaren rijpen. Sommige Parmezaan en oude Gouda rijpen 3 tot 5 jaar. Hoe langer, hoe meer vocht verdwijnt en hoe intenser de smaak." },
  { icon: "✨", title: "Wat zijn die knapperige kristallen?", text: "De witte puntjes in oude kaas zijn geen zout, maar tyrosine-kristallen: eiwitbouwstenen die tijdens het lange rijpen samenklonteren. Een teken van een goed gerijpte kaas!" },
  { icon: "🌍", title: "Hoeveel kaassoorten bestaan er?", text: "Er bestaan wereldwijd meer dan 1800 verschillende kaassoorten. Frankrijk alleen heeft er al meer dan 1000 – de Franse president De Gaulle grapte ooit dat het lastig is om een land met zoveel kazen te besturen." },
  { icon: "🧀", title: "Wie eet de meeste kaas?", text: "Denen, IJslanders en Fransen eten de meeste kaas: zo'n 25 tot 28 kilo per persoon per jaar. Nederlanders eten ongeveer 21 kilo, en Nederland is een van de grootste kaasexporteurs ter wereld." },
  { icon: "🐐", title: "Welke dieren geven kaasmelk?", text: "Meestal koeien, geiten, schapen en buffels. Maar er bestaat ook kaas van rendieren, kamelen, jakken en zelfs ezels! Ezelkaas uit Servië is een van de duurste kazen ter wereld." },
];

function Weetjes() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-4xl font-extrabold text-brown md:text-5xl">Kaasweetjes</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">Alles wat je altijd al wilde weten over kaas – en nog een beetje meer.</p>

      <ol className="mt-10 grid gap-3 rounded-3xl bg-cheese p-6 text-primary-foreground shadow-lift sm:grid-cols-2 md:grid-cols-5 md:p-8">
        {["🥛 Melk", "🧪 Stremsel", "🔪 Wrongel snijden", "🧂 Pekelbad", "⏳ Rijpen"].map((s, i) => (
          <li key={s} className="rounded-2xl bg-card/40 p-4 text-center font-bold">
            <span className="block text-xs uppercase opacity-80">Stap {i + 1}</span>{s}
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {weetjes.map((w, i) => (
          <article key={w.title} className="animate-rise rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift" style={{ animationDelay: `${i * 60}ms` }}>
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-3xl">{w.icon}</div>
            <h2 className="mt-4 text-xl font-bold text-brown">{w.title}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{w.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/quiz" className="rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-soft hover:-translate-y-0.5">Test je kennis in de quiz →</Link>
      </div>
    </div>
  );
}
