import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

export default function NavBar() {
  const links = [
    { href: "#about", label: "Chi siamo" },
    { href: "#regolamento", label: "Regolamento" },
    { href: "#sponsor", label: "Sponsor" },
    { href: "#staff", label: "Staff" },
    { href: "#diventa-staff", label: "Diventa Staff" },
  ];

  const [active, setActive] = useState(() => window.location.hash || "#about");

  useEffect(() => {
    const onHash = () => setActive(window.location.hash || "#about");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="glass gradient-border-pro gradient-surface container mx-auto mt-4 px-6 py-3 md:py-4 rounded-2xl flex items-center justify-between shadow-lg">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-black/20 overflow-hidden">
            <img
              src={logo}
              alt="GTA V Roleplay Logo"
              className="w-8 h-8 object-contain"
              loading="eager"
              decoding="async"
            />
          </span>
          <span className="hidden sm:inline font-bold tracking-wide text-lg">
            <span className="bg-gradient-to-r from-accent2 via-accent4 to-accent1 bg-clip-text text-transparent">
              GTA V Roleplay
            </span>
          </span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-4">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`nav-link text-sm ${
                    isActive ? "is-active text-accent2" : ""
                  }`}
                >
                  {l.label}
                  <span className="underline-soft" />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a href="#diventa-staff" className="btn btn-gold text-sm shadow-md">
          Entra nello Staff
          <span className="trail" />
        </a>
      </nav>
    </header>
  );
}
