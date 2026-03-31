import { Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo-derma.webp";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 px-6 py-16 lg:px-20">
    <div className="container-narrow">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Logo & tagline */}
        <div>
          <img src={logo} alt="Derma Concept Academy" className="h-10 brightness-200 mb-4" />
          <p className="text-sm leading-relaxed">
            Dermatologia que Transforma Carreiras e Pessoas.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-4">
            Navegação
          </p>
          <nav className="flex flex-col gap-2">
            {["Início", "Sobre", "Cursos", "Depoimentos", "Contato"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="text-sm hover:text-primary-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/40 mb-4">
            Redes Sociais
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Instagram">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="Facebook">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Derma Concept Academy. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
