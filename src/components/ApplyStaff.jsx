import { User, AtSign, Mail, FileText, Users } from "lucide-react";
import Button from "./ui/Button";
import Card from "./ui/Card";
import SectionTitle from "./ui/SectionTitle";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";

// importa la tua immagine (verifica il path)
import staffImg from "../assets/images/Photo 1.png";

export default function ApplyStaff() {
  return (
    <Card className="px-6 py-8 md:px-10 md:py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Colonna immagine + testo sotto */}
        <div className="space-y-6 order-1 lg:order-none">
          <div>
            <SectionTitle>Diventa Staff</SectionTitle>

            <p className="mt-3 text-white/80 leading-relaxed">
              Ami il roleplay e vuoi contribuire a far crescere la nostra{" "}
              <span className="text-accent2 font-medium">community</span>?
              Unisciti al nostro team: cerchiamo moderatori, game master e
              organizzatori di eventi che abbiano passione.
            </p>

            <ul className="mt-4 space-y-2 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent2" /> 18+ e conoscenza
                regole RP
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent2" /> Disponibilità minima
                3h/settimanali
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent2" /> Buona comunicazione e
                problem solving
              </li>
            </ul>
          </div>

          <figure className="relative overflow-hidden rounded-xl gradient-border-pro gradient-surface">
            <img
              src={staffImg}
              alt="Diventa parte dello staff"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </figure>
        </div>

        {/* Colonna form */}
        <div className="space-y-6 order-2 lg:order-none">
          <form className="grid gap-4 pt-2">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Nickname" icon={User} />
              <Input label="Discord" icon={AtSign} />
            </div>
            <Input label="Email" type="email" icon={Mail} />
            <Textarea
              label="Perché vuoi entrare nello staff?"
              icon={FileText}
            />
            <div className="flex gap-3 pt-2">
              <Button type="submit" variant="gold">
                Invia Candidatura
              </Button>
              <Button as="a" href="#" variant="outline">
                Apri Ticket Discord
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
}
