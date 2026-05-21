import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-derma.webp";
import logoWatermark from "@/assets/logo-derma-watermark.webp";

const footerLinks = {
  formacao: {
    title: "Formação",
    items: [
      { label: "Dermatologia Estética", href: "/#cursos" },
      { label: "Cirurgia Dermatológica", href: "/#cursos" },
      { label: "Mentoria Individual", href: "/#cursos" },
    ],
  },
  institucional: {
    title: "Institucional",
    items: [
      { label: "Sobre a Academia", href: "/#sobre" },
      { label: "Fellows", href: "/#cursos" },
      { label: "Seja um Paciente Modelo", href: "/#contato" },
    ],
  },
  suporte: {
    title: "Suporte",
    items: [
      { label: "Contato", href: "/#contato" },
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
};

const Footer = () => (
  <footer className="relative bg-[#F8F5F1]">
    {/* Main content */}
    <div className="relative z-10 mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-10">
        {/* Column 1 — Identity */}
        <div className="flex flex-col gap-5">
          <img
            src={logo}
            alt="Derma Concept Academy"
            className="h-14 w-auto self-start"
          />
          <p className="text-sm leading-relaxed text-neutral-500">
            A Derma Concept Academy é um centro de excelência em formação médica
            na área de dermatologia, unindo teoria de alto nível a prática
            intensiva.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: MessageCircle, label: "WhatsApp", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-all duration-200 hover:border-neutral-500 hover:text-neutral-800"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <p className="mt-auto text-xs text-neutral-400">
            Todos os direitos reservados.
          </p>
        </div>

        {/* Columns 2-4 — Link groups */}
        {Object.values(footerLinks).map((group) => (
          <div key={group.title}>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#7A7168]">
              {group.title}
            </p>
            <nav className="flex flex-col gap-3">
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </div>

    {/* Large logo — full, below content */}
    <div className="px-6 pb-6 lg:px-16">
      <img
        src={logoWatermark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none mx-auto block w-[95%] max-w-none select-none opacity-40"
      />
    </div>
  </footer>
);

export default Footer;
