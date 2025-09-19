import {
  Gamepad2,
  ScrollText,
  UserPlus,
  Heart,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="container mx-auto px-4">
        <div className="card overflow-hidden gradient-border-pro gradient-surface">
          {/* Accent top bar */}
          <div
            className="h-1 w-full"
            style={{
              background:
                "linear-gradient(90deg, #A57C00, #BF6C06, #730A26, #700A39)",
            }}
          />

          <div className="px-6 py-8 md:px-10 md:py-10">
            {/* Brand + quick actions */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-black/20 overflow-hidden">
                  {/* logo o icona */}
                  <img
                    src={logo}
                    alt="GTA V RP"
                    className="w-7 h-7 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">GTA V RP Server</h3>
                  <p className="text-sm text-white/60">
                    Powered by FiveM — Community italiana
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  className="btn btn-rose text-sm inline-flex items-center gap-2"
                  href="#regolamento"
                >
                  <ScrollText className="w-4 h-4" />
                  <span className="relative z-10">Regole</span>
                  <span className="trail" />
                </a>
                <a
                  className="btn btn-gold text-sm inline-flex items-center gap-2"
                  href="#diventa-staff"
                >
                  <UserPlus className="w-4 h-4" />
                  <span className="relative z-10">Candidati</span>
                  <span className="trail" />
                </a>
              </div>
            </div>

            {/* Meta info row */}
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent2" />
                <span>Server EU — latency ottimizzata</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent2" />
                <span>Eventi settimanali & supporto rapido</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-accent2" />
                <span>Unisciti al nostro Discord</span>
              </div>
            </div>

            <hr className="my-6 border-white/10" />

            <p className="text-xs text-white/60 text-center flex items-center justify-center gap-2">
              Developed with <Heart className="w-3.5 h-3.5 text-accent2" /> by{" "}
              <a href="https://www.instagram.com/madgiirl99">
                <span className="text-accent2 font-medium">MaDGiiRL</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
