export interface Vraag { vraag: string; opties: string[]; antwoord: number; uitleg: string }

export const vragen: Vraag[] = [
  { vraag: "Uit welk land komt Parmesan?", opties: ["Frankrijk", "Italië", "Spanje", "Zwitserland"], antwoord: 1, uitleg: "Parmigiano Reggiano komt uit de streek rond Parma in Italië." },
  { vraag: "Welke kaas staat bekend om zijn blauwe aderen?", opties: ["Brie", "Gouda", "Roquefort", "Mozzarella"], antwoord: 2, uitleg: "Roquefort is een blauwschimmelkaas die rijpt in Franse grotten." },
  { vraag: "Van welke melk wordt traditionele feta gemaakt?", opties: ["Koemelk", "Buffelmelk", "Schapenmelk", "Kamelenmelk"], antwoord: 2, uitleg: "Feta wordt van schapenmelk gemaakt, soms met wat geitenmelk." },
  { vraag: "Welke Nederlandse kaas heeft vaak grote gaten?", opties: ["Maasdammer", "Edammer", "Nagelkaas", "Kernhem"], antwoord: 0, uitleg: "Maasdammer heeft grote gaten door koolzuurgas van bacteriën." },
  { vraag: "Welke kaas smelt niet als je hem grilt?", opties: ["Cheddar", "Halloumi", "Raclette", "Gruyère"], antwoord: 1, uitleg: "Halloumi heeft een hoog smeltpunt en is perfect voor de grill." },
  { vraag: "Welke kaas is de basis van tiramisu?", opties: ["Ricotta", "Mascarpone", "Burrata", "Feta"], antwoord: 1, uitleg: "Mascarpone is een romige Italiaanse kaas en de ster van tiramisu." },
  { vraag: "Wat betekent 'racler', waar raclette naar vernoemd is?", opties: ["Smelten", "Bakken", "Schrapen", "Snijden"], antwoord: 2, uitleg: "De gesmolten kaas wordt van het wiel geschraapt." },
  { vraag: "Met welk kruid wordt Leidse kaas gemaakt?", opties: ["Komijn", "Basilicum", "Dille", "Peper"], antwoord: 0, uitleg: "Leidse kaas, of komijnekaas, zit vol komijnzaad." },
  { vraag: "Waar mag echte Roquefort alleen rijpen?", opties: ["In kelders in Parijs", "In grotten bij Roquefort-sur-Soulzon", "In de Alpen", "Op zee"], antwoord: 1, uitleg: "Alleen de natuurlijke grotten van Roquefort-sur-Soulzon zijn toegestaan." },
  { vraag: "Welke kaas schaaf je met een girolle tot rozetjes?", opties: ["Emmentaler", "Appenzeller", "Tête de Moine", "Comté"], antwoord: 2, uitleg: "Tête de Moine schaaf je in dunne krullen met een girolle." },
];

export function eindboodschap(score: number, totaal: number) {
  const p = score / totaal;
  if (p === 1) return { titel: "Grote Kaaskaas! 🏆", tekst: "Alles goed! Jij bent een echte kaasmeester." };
  if (p >= 0.7) return { titel: "Echte kaaskenner! 🧀", tekst: "Indrukwekkend, je weet ontzettend veel over kaas." };
  if (p >= 0.4) return { titel: "Lekker bezig! 😋", tekst: "Een mooie score. Nog een paar weetjes en je bent een expert." };
  return { titel: "Jonge kaas 🐣", tekst: "Je staat nog aan het begin van je kaasreis. Lees de weetjes en probeer het opnieuw!" };
}
