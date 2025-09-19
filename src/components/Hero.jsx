import Button from "./ui/Button";

const heroImg =
  "https://i.imgur.com/EyT9GAq.png";
export default function Hero() {
  return (
    <section
      className="relative h-[100svh] min-h-[700px] flex items-center hero-overlay overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/70 to-primary/95" />
      <div className="blob blob-a2 w-[40vw] h-[40vw] rounded-full -top-20 -left-20" />
      <div className="blob blob-a1 w-[35vw] h-[35vw] rounded-full -bottom-16 -right-16" />

      <div className="relative container mx-auto px-6">
        <div className="max-w-3xl space-y-6 fade-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Vivi Los Santos come non mai con <span className="gradient-text">Roleplay</span> su FiveM
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Quest articolate, economia bilanciata, eventi settimanali e una community pronta ad accoglierti. Ogni dettaglio è pensato per realismo, sicurezza e divertimento.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button as="a" href="#about" variant="gold" className="text-base shadow-md">
              Scopri la nostra Visione
            </Button>
            <Button as="a" href="#regolamento" variant="rose" className="text-base">
              Leggi le Regole
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}