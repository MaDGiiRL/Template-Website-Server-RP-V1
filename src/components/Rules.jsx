import { useMemo, useState } from "react";
import {
  ShieldCheck,
  Radio,
  AlertTriangle,
  Gavel, // ✅ sostituisce Handcuffs
  Ban,
} from "lucide-react";

const CATEGORIES = [
  {
    key: "generali",
    label: "Generali",
    sections: [
      {
        id: "rispetto-rp",
        title: "Rispetto & RP",
        icon: ShieldCheck,
        items: [
          "Mantieni sempre il personaggio (IC) e separa la vita reale dal gioco.",
          "Evita metagaming, powergaming, VDM/RDM: sono comportamenti che rovinano l’esperienza di tutti.",
          "Ricorda che l’obiettivo è creare storie credibili, non cercare la vittoria a tutti i costi.",
        ],
      },
      {
        id: "safe-zones",
        title: "Safe Zones",
        icon: AlertTriangle,
        items: [
          "Niente sparatorie, rapine o atti ostili all’interno delle zone sicure.",
          "Le safe zone includono ospedale, stazione di polizia, job center e altre aree designate.",
          "Sono spazi pensati per garantire un punto di incontro e protezione per i giocatori.",
        ],
      },
    ],
  },
  {
    key: "comunicazioni",
    label: "Comunicazioni",
    sections: [
      {
        id: "radio-voce",
        title: "Radio & Voce",
        icon: Radio,
        items: [
          "Usa canali radio e voce solo in-character; le comunicazioni devono rispettare la coerenza RP.",
          "Le informazioni raccolte fuori dal gioco non possono essere utilizzate in gioco.",
          "Niente soundboard o disturbi intenzionali: mantenere chiarezza e rispetto è fondamentale.",
        ],
      },
      {
        id: "chat",
        title: "Chat & OOC",
        icon: Ban,
        items: [
          "La chat OOC è limitata a chiarimenti rapidi, mai per disturbare o spammare.",
          "Ogni disputa o dubbio va aperta tramite ticket allo staff, non in chat pubblica.",
          "Rispetta sempre gli altri: linguaggio volgare e offensivo non è tollerato.",
        ],
      },
    ],
  },
  {
    key: "crime",
    label: "Crime & Police",
    sections: [
      {
        id: "escalation",
        title: "Escalation & Ostaggi",
        icon: Gavel, // ✅ qui usiamo Gavel
        items: [
          "Ogni azione criminale deve avere una progressione credibile, non si può passare subito alla violenza estrema.",
          "Gli ostaggi devono essere trattati con coerenza RP: niente abusi o usi irrealistici.",
          "Ricorda che la polizia e gli EMS sono giocatori come te: rispettane i tempi e le decisioni.",
        ],
      },
      {
        id: "vdm-rdm",
        title: "VDM/RDM",
        icon: Ban,
        items: [
          "VDM: è vietato investire intenzionalmente i giocatori senza motivo RP valido.",
          "RDM: è vietato uccidere senza giustificazione coerente con la scena.",
          "Questi comportamenti portano a sanzioni immediate da parte dello staff.",
        ],
      },
    ],
  },
];

const scrollToAnchor = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function Rules() {
  const [active, setActive] = useState("generali");
  const current = useMemo(
    () => CATEGORIES.find((c) => c.key === active) ?? CATEGORIES[0],
    [active]
  );

  return (
    <div id="regolamento">
      <h2 className="h-section">Regolamento</h2>
      <p className="mt-3 text-white/80 leading-relaxed">
        Il regolamento è pensato per garantire un’esperienza di gioco
        equilibrata, divertente e rispettosa per tutti. Ogni regola ha lo scopo
        di mantenere la coerenza del roleplay e tutelare la community. Qui trovi
        una sintesi delle principali norme divise per categoria; consulta sempre
        il documento completo sul nostro Discord per tutti i dettagli.
      </p>

      {/* TABS principali */}
      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => {
          const isActive = c.key === active;
          return (
            <button
              key={c.key}
              className={[
                "btn text-sm",
                isActive
                  ? "btn-primary"
                  : "border-white/15 hover:border-accent2/50",
              ].join(" ")}
              onClick={() => setActive(c.key)}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {/* Layout con sidebar */}
      <div className="mt-8 grid md:grid-cols-[250px_1fr] gap-6">
        {/* Sidebar sottocategorie */}
        <aside className="card p-4 h-fit sticky top-24">
          <nav className="flex flex-col gap-2">
            {current.sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToAnchor(s.id)}
                className="flex items-center gap-2 text-left px-3 py-2 rounded-lg border border-white/10 hover:border-accent2/60 hover:text-accent2 text-sm transition"
              >
                {s.icon && <s.icon className="w-4 h-4 text-accent2" />}
                {s.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Contenuto regole */}
        <div className="space-y-6">
          {current.sections.map((sct) => {
            const Icon = sct.icon;
            return (
              <article key={sct.id} id={sct.id} className="card">
                <header className="px-5 py-4 border-b border-white/10 flex items-center gap-2">
                  {Icon && <Icon className="w-6 h-6 text-accent2" />}
                  <h3 className="font-medium">{sct.title}</h3>
                </header>
                <ul className="px-5 py-4 space-y-3 text-white/80">
                  {sct.items.map((txt, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-1 text-accent2">•</span>
                      <span className="text-sm leading-relaxed">{txt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
