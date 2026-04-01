import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-derma.webp";

/* ───────────── Dropdown link item ───────────── */

const DropdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    to={href}
    className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-black"
  >
    {children}
  </Link>
);

/* ───────────── Tab content components ───────────── */

function FellowsContent() {
  const items = [
    { label: "Dermatologia Estética Semanal", href: "/dermatologia-estetica-semanal" },
    { label: "Dermatologia Estética Mensal", href: "#cursos" },
    { label: "Cirurgia Dermatológica", href: "#cursos" },
  ];

  return (
    <div className="w-[280px]">
      <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        Fellows
      </p>
      <div className="flex flex-col">
        {items.map((item) => (
          <DropdownLink key={item.label} href={item.href}>{item.label}</DropdownLink>
        ))}
      </div>
    </div>
  );
}

function WorkshopsContent() {
  const items = [
    { label: "Toxina Botulínica", href: "#cursos" },
    { label: "Preenchimento com Ácido Hialurônico + Bloqueio", href: "#cursos" },
    { label: "Preenchimento com Ácido Hialurônico Avançado + Ultrassom de Pelo Guiado", href: "#cursos" },
    { label: "Bioestimuladores de Colágeno", href: "#cursos" },
    { label: "Rejuvenescimento Íntimo", href: "#cursos" },
    { label: "Peeling Médico", href: "#cursos" },
    { label: "IPCA", href: "#cursos" },
    { label: "Mentoria Individual", href: "/mentoria-individual" },
  ];

  return (
    <div className="w-[520px]">
      <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        Workshops
      </p>
      <div className="grid grid-cols-2 gap-x-4">
        {items.map((item) => (
          <DropdownLink key={item.label} href={item.href}>{item.label}</DropdownLink>
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

function PaginaInicialContent() {
  return (
    <div className="w-[240px]">
      <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        Página Inicial
      </p>
      <div className="flex flex-col">
        <a href="/" className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-black">
          Versão Atual
        </a>
        <a href="/v2" className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-black">
          Versão Clássica
        </a>
      </div>
    </div>
  );
}

const TABS = [
  { title: "Página Inicial", Component: PaginaInicialContent },
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
  <Link
    to={href}
    className={`px-3 py-1.5 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-800 ${className}`}
  >
    {children}
  </Link>
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
      {/* Página Inicial is now a tab dropdown */}

      {TABS.map((t) => (
        <Tab key={t.id} selected={selected} handleSetSelected={handleSetSelected} tab={t.id}>
          {t.title}
        </Tab>
      ))}

      <Link
        to="/contato"
        className="ml-2 rounded-[12px] border border-gray-800 px-5 py-1.5 text-sm font-medium text-gray-800 transition-all duration-200 hover:bg-gray-800 hover:text-white"
      >
        Contato
      </Link>

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

/* ───────────── Mobile nav ───────────── */

const MobileSubmenu = ({
  title,
  items,
  open,
  onToggle,
  onNavigate,
}: {
  title: string;
  items: { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) => (
  <div className="border-b border-gray-100/80 last:border-0">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold uppercase tracking-[0.2em] text-gray-800 transition-colors hover:text-black"
    >
      {title}
      <ChevronDown
        className={`h-4 w-4 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      />
    </button>
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-4 pl-4 flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={onNavigate}
                className="rounded-lg px-3 py-2.5 text-sm text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const mobileMenuSections = [
  {
    title: "Página Inicial",
    items: [
      { label: "Versão Atual", href: "/" },
      { label: "Versão Clássica", href: "/v2" },
    ],
  },
  {
    title: "Fellows",
    items: [
      { label: "Dermatologia Estética Semanal", href: "/dermatologia-estetica-semanal" },
      { label: "Dermatologia Estética Mensal", href: "#cursos" },
      { label: "Cirurgia Dermatológica", href: "#cursos" },
    ],
  },
  {
    title: "Workshops",
    items: [
      { label: "Toxina Botulínica", href: "#cursos" },
      { label: "Preenchimento com Ácido Hialurônico + Bloqueio", href: "#cursos" },
      { label: "Preenchimento Avançado + Ultrassom", href: "#cursos" },
      { label: "Bioestimuladores de Colágeno", href: "#cursos" },
      { label: "Rejuvenescimento Íntimo", href: "#cursos" },
      { label: "Peeling Médico", href: "#cursos" },
      { label: "IPCA", href: "#cursos" },
      { label: "Mentoria Individual", href: "/mentoria-individual" },
    ],
  },
  {
    title: "Seja Um Paciente Modelo",
    items: [
      { label: "Preenchimento com Ácido Hialurônico", href: "#contato" },
      { label: "Bioestimuladores de Colágeno", href: "#contato" },
      { label: "Toxina Botulínica", href: "#contato" },
      { label: "Liftera", href: "#contato" },
      { label: "Microagulhamento", href: "#contato" },
      { label: "Intradermoterapia", href: "#contato" },
      { label: "Peeling Químico", href: "#contato" },
      { label: "Fio de PDO", href: "#contato" },
      { label: "Dermatologia Clínica", href: "#contato" },
      { label: "Dermatologia Cirúrgica", href: "#contato" },
    ],
  },
];

/* ───────────── Header ───────────── */

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const handleClose = () => {
    setOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="container-narrow flex items-center justify-between px-6 py-4 lg:px-20">
        <a href="/" className="cursor-pointer">
          <img src={logo} alt="Derma Concept Academy" className="h-14 md:h-16" />
        </a>

        <div className="hidden lg:flex items-center">
          <DesktopNav />
        </div>

        <button
          onClick={() => { setOpen(!open); setOpenSubmenu(null); }}
          className="lg:hidden text-gray-800"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-6 py-4">
              {/* Accordion sections (includes Página Inicial) */}
              {mobileMenuSections.map((section, idx) => (
                <MobileSubmenu
                  key={section.title}
                  title={section.title}
                  items={section.items}
                  open={openSubmenu === idx}
                  onToggle={() => setOpenSubmenu(openSubmenu === idx ? null : idx)}
                  onNavigate={handleClose}
                />
              ))}

              {/* Contato CTA */}
              <div className="mt-6 pb-2">
                <a
                  href="#contato"
                  onClick={handleClose}
                  className="block w-full rounded-xl border-2 border-gray-800 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-gray-800 transition-all duration-200 hover:bg-gray-800 hover:text-white"
                >
                  Contato
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
