import { ShieldCheck, Coins, Users as UsersIcon } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

const photo4 = "https://i.imgur.com/qv07Yal.png";

export default function About() {
  const features = [
    {
      title: "Whitelist & Sicurezza",
      desc: "Ogni ingresso viene controllato con cura.",
      icon: ShieldCheck,
    },
    {
      title: "Economia Bilanciata",
      desc: "Carriere, business, mercati e quest realistici e progressivi.",
      icon: Coins,
    },
    {
      title: "Eventi & Fazioni",
      desc: "Gang, corporazioni legali e storyline ufficiali.",
      icon: UsersIcon,
    },
  ];

  return (
    <section id="about" className="relative section container mx-auto px-6">
      <div className="blob blob-a3 w-[26vw] h-[26vw] rounded-full -z-10 top-10 right-0" />

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl lg:h-[500px] gradient-border-pro gradient-surface float-slow">
          <img
            src={photo4}
            alt="Community FiveM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
        </div>

        <div className="flex flex-col justify-center space-y-6 lg:col-span-1 fade-up">
          <SectionTitle badge="Community First">Chi siamo</SectionTitle>
          <p className="text-white/80 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="text-white/70 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Card
                key={i}
                className="p-6 transition flex items-start gap-4 hover:shadow-glow"
              >
                <Icon className="w-8 h-8 text-accent2 flex-shrink-0 float-slow" />
                <div>
                  <h3 className="font-semibold text-accent2 text-lg">
                    {f.title}
                  </h3>
                  <p className="text-white/70 mt-2 leading-relaxed">{f.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
