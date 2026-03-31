import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo-derma.webp";

/* ───────────── Dropdown link item ───────────── */

const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-black"
  >
    {children}
  </a>
);

/* ───────────── Tab content components ───────────── */

function FellowsContent() {
  const items = [
    "Dermatologia Estética Semanal",
    "Dermatologia Estética Mensal",
    "Cirurgia Dermatológica",
  ];

  return (
    <div className="w-[280px]">
      <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        Fellows
      </p>
      <div className="flex flex-col">
        {items.map((item) => (
          <DropdownLink key={item} href="#cursos">{item}</DropdownLink>
        ))}
      </div>
    </div>
  );
}

function WorkshopsContent() {
  const items = [
    "Toxina Botulínica",
    "Preenchimento com Ácido Hialurônico + Bloqueio",
    "Preenchimento com Ácido Hialurônico Avançado + Ultrassom de Pelo Guiado",
    "Bioestimuladores de Colágeno",
    "Rejuvenescimento Íntimo",
    "Peeling Médico",
    "IPCA",
    "Mentoria Individual",
  ];

  return (
    <div className="w-[520px]">
      <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        Workshops
      </p>
      <div className="grid grid-cols-2 gap-x-4">
        {items.map((item) => (
          <DropdownLink key={item} href="#cursos">{item}</DropdownLink>
        ))}
      </div>
    </div>
  );
}

function PacienteModeloContent() {
  const esteticos = [
    "Preenchimento com Ácido Hialurônico",
    "Bioestimuladores de Colágeno",
    "Toxina Botulínica",
    "Liftera",
    "Microagulhamento",
    "Intradermoterapia",
    "Peeling Químico",
    "Fio de PDO",
    "IPCA",
    "Rejuvenescimento Íntimo",
  ];

  const extras = ["Dermatologia Clínica", "Dermatologia Cirúrgica"];

  return (
    <div className="w-[600px]">
      {/* Procedimentos Estéticos */}
      <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        Procedimentos Estéticos
      </p>
      <div className="grid grid-cols-2 gap-x-4">
        {esteticos.map((item) => (
          <DropdownLink key={item} href="#contato">{item}</DropdownLink>
        ))}
      </div>

      {/* Seção secundária */}
      <div className="mt-3 rounded-lg bg-gray-50 p-3">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
          Especialidades
        </p>
        {extras.map((item) => (
          <a
            key={item}
            href="#contato"
            className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 transition-all duration-200 hover:translate-x-1 hover:text-black"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

/* ───────────── Tab data ───────────── */

const TABS = [
  { title: "Fellows", Component: FellowsContent },
  { title: "Workshops", Component: WorkshopsContent },
  { title: "Seja Um Paciente Modelo", Component: PacienteModeloContent },
].map((t, idx) => ({ ...t, id: idx + 1 }));

/* ───────────── Shifting dropdown pieces ───────────── */

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected,
}: {
  children: React.ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => (
  <button
    id={`shift-tab-${tab}`}
    onMouseEnter={() => handleSetSelected(tab)}
    onClick={() => handleSetSelected(tab)}
    className={`flex items-center gap-1 px-3 py-1.5 text-sm transition-colors duration-200 ${
      selected === tab
        ? "text-black"
        : "text-gray-500 hover:text-gray-800"
    }`}
  >
    <span>{children}</span>
    <ChevronDown
      className={`h-3.5 w-3.5 transition-transform duration-200 ${
        selected === tab ? "rotate-180" : ""
      }`}
    />
  </button>
);

const StaticLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => (
  <a
    href={href}
    className={`px-3 py-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-800 ${className}`}
  >
    {children}
  </a>
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [nubLeft, setNubLeft] = useState(0);

  useEffect(() => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");
      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const contentRect = overlayContent.getBoundingClientRect();
      setNubLeft(tabRect.left + tabRect.width / 2 - contentRect.left);
    }
  }, [selected]);

  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0 100%)" }}
      animate={{ left: nubLeft }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-gray-100 bg-white"
    />
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Content = ({ selected, dir }: { selected: number; dir: "l" | "r" | null }) => (
  <motion.div
    id="overlay-content"
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 8 }}
    className="absolute left-0 top-[calc(100%_+_20px)] rounded-xl border border-gray-100 bg-white p-4 shadow-2xl shadow-black/[0.08]"
  >
    <Bridge />
    <Nub selected={selected} />
    <AnimatePresence mode="wait">
      {TABS.map((t) =>
        selected === t.id ? (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir === "l" ? -100 : dir === "r" ? 100 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <t.Component />
          </motion.div>
        ) : undefined,
      )}
    </AnimatePresence>
  </motion.div>
);

/* ───────────── Desktop Nav ───────────── */

const DesktopNav = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<"l" | "r" | null>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }
    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit items-center gap-1"
    >
      <StaticLink href="#inicio">Página Inicial</StaticLink>

      {TABS.map((t) => (
        <Tab key={t.id} selected={selected} handleSetSelected={handleSetSelected} tab={t.id}>
          {t.title}
        </Tab>
      ))}

      <a
        href="#contato"
        className="ml-2 rounded-[12px] border border-gray-800 px-5 py-1.5 text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-gray-800 hover:text-white"
      >
        Contato
      </a>

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

/* ───────────── Mobile nav ───────────── */

const mobileLinks = [
  { label: "Página Inicial", href: "#inicio" },
  { label: "Fellows", href: "#cursos" },
  { label: "Workshops", href: "#cursos" },
  { label: "Seja Um Paciente Modelo", href: "#contato" },
  { label: "Contatos", href: "#contato" },
];

/* ───────────── Header ───────────── */

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="container-narrow flex items-center justify-between px-6 py-4 lg:px-20">
        <a href="#inicio">
          <img src={logo} alt="Derma Concept Academy" className="h-14 md:h-16" />
        </a>

        <div className="hidden lg:flex items-center">
          <DesktopNav />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-800"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-gray-100 bg-white px-6 py-6 flex flex-col gap-4">
          {mobileLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-gray-500 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
