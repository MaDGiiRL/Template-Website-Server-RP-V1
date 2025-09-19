import { Crown, Landmark, Code as CodeIcon, ShieldCheck } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import Card from "./ui/Card";

export default function Staff() {
  const members = [
    {
      name: "MaDGiiRL",
      role: "Owner",
      img: "https://i.imgur.com/Mgi1O49.png",
      icon: Crown,
    },
    {
      name: "People",
      role: "Founder",
      img: "https://i.imgur.com/t5htSsN.png",
      icon: Landmark,
    },
    {
      name: "People",
      role: "Developer",
      img: "https://i.imgur.com/U1u5Hgp.png",
      icon: CodeIcon,
    },
    {
      name: "People",
      role: "Resp. Staff",
      img: "https://i.imgur.com/W1pzWAS.png",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="relative">
      <div className="blob blob-a3 w-[18vw] h-[18vw] rounded-full -z-10 -top-8 left-0" />
      <SectionTitle>Il nostro Staff</SectionTitle>
      <p className="mt-4 text-white/80 leading-relaxed">
        Un team che lavora con passione per qualità, sicurezza e innovazione.
        Ogni ruolo è fondamentale per mantenere viva la magia del server.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map((m, i) => {
          const Icon = m.icon;
          return (
            <Card
              key={i}
              className="p-5 transition flex flex-col items-center text-center hover-glow"
            >
              <div className="relative">
                <div className="overflow-hidden rounded-full border-4 border-accent2 w-32 h-32">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span
                  className="absolute inset-0 rounded-full"
                  style={{ boxShadow: "0 0 60px 10px rgba(165,124,0,0.15)" }}
                  aria-hidden="true"
                />
              </div>
              <div className="mt-4 flex flex-col items-center gap-1">
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <div className="flex items-center gap-2 text-sm text-accent2">
                  <Icon className="w-4 h-4" />
                  <span>{m.role}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
