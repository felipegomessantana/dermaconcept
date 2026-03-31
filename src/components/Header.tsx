import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, Sparkles, Clock, Scissors, FlaskConical, Phone, Mail, MapPin, Users, Award, BookOpen } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo-derma.webp";

/* ───────────── Tab data ───────────── */

const TABS = [
  {
    title: "Cursos",
    Component: CursosContent,
  },
  {
    title: "Sobre a Academia",
    Component: SobreContent,
  },
  {
    title: "Contato",
    Component: ContatoContent,
  },
].map((t, idx) => ({ ...t, id: idx + 1 }));

/* ───────────── Dropdown contents ───────────── */

function CursosContent() {
  const cursos = [
    {
      icon: Sparkles,
      title: "Dermatologia Estética Semanal",
      desc: "Imersão intensiva de uma semana em procedimentos estéticos.",
      href: "#cursos",
    },
    {
      icon: Clock,
      title: "Dermatologia Estética Mensal",
      desc: "Formação completa ao longo de um mês em harmonização facial.",
      href: "#cursos",
    },
    {
      icon: Scissors,
      title: "Cirurgia Dermatológica Mensal",
      desc: "Técnicas cirúrgicas com pacientes reais e supervisão.",
      href: "#cursos",
    },
    {
      icon: FlaskConical,
      title: "Tricologia",
      desc: "Diagnóstico e tratamento de doenças capilares.",
      href: "#cursos",
    },
  ];

  return (
    <div className="w-[520px] lg:w-[600px]">
      <div className="grid grid-cols-2 gap-1">
        {cursos.map((c) => (
          <a
            key={c.title}
            href={c.href}
            className="group flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-accent"
          >
            <c.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-medium text-foreground group-hover:text-brand transition-colors">
                {c.title}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
      <a
        href="#cursos"
        className="mt-3 flex items-center gap-1 border-t border-border pt-3 text-xs font-medium text-brand hover:text-foreground transition-colors"
      >
        <span>Ver todos os cursos</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

function SobreContent() {
  const items = [
    { icon: Award, title: "Nossa História", desc: "Excelência em ensino dermatológico.", href: "#sobre" },
    { icon: Users, title: "Corpo Docente", desc: "Especialistas reconhecidos na área.", href: "#sobre" },
    { icon: BookOpen, title: "Metodologia", desc: "Prática supervisionada com pacientes reais.", href: "#sobre" },
  ];

  return (
    <div className="w-[380px]">
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group flex items-start gap-3 rounded-md p-3 transition-colors hover:bg-accent"
          >
            <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            <div>
              <p className="text-sm font-medium text-foreground group-hover:text-brand transition-colors">
                {item.title}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function ContatoContent() {
  const items = [
    { icon: Phone, label: "Telefone", value: "+55 (11) 0000-0000", href: "#contato" },
    { icon: Mail, label: "Email", value: "contato@dermaconcept.com.br", href: "#contato" },
    { icon: MapPin, label: "Localização", value: "São Paulo, SP", href: "#contato" },
  ];

  return (
    <div className="w-[320px]">
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex items-center gap-3 rounded-md p-3 transition-colors hover:bg-accent"
          >
            <item.icon className="h-5 w-5 shrink-0 text-brand" />
            <div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

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
}) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-sm transition-colors ${
        selected === tab
          ? "bg-accent text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <span>{children}</span>
      <ChevronDown
        className={`h-3.5 w-3.5 transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Nub = ({ selected }: { selected: number | null }) => {
  const [nubLeft, setNubLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const contentRect = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentRect.left;
      setNubLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 50%, 0 100%)" }}
      animate={{ left: nubLeft }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-border bg-card"
    />
  );
};

const Content = ({
  selected,
  dir,
}: {
  selected: number;
  dir: "l" | "r" | null;
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="absolute left-0 top-[calc(100%_+_20px)] rounded-xl border border-border bg-card p-4 shadow-xl"
    >
      <Bridge />
      <Nub selected={selected} />
      <AnimatePresence mode="wait">
        {TABS.map((t) => {
          return selected === t.id ? (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: dir === "l" ? 100 : dir === "r" ? -100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir === "l" ? -100 : dir === "r" ? 100 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <t.Component />
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

/* ───────────── Desktop Tabs wrapper ───────────── */

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
      {TABS.map((t) => (
        <Tab
          key={t.id}
          selected={selected}
          handleSetSelected={handleSetSelected}
          tab={t.id}
        >
          {t.title}
        </Tab>
      ))}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

/* ───────────── Mobile nav links ───────────── */

const mobileLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

/* ───────────── Header ───────────── */

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow flex items-center justify-between px-6 py-4 lg:px-20">
        <a href="#inicio">
          <img src={logo} alt="Derma Concept Academy" className="h-10 md:h-12" />
        </a>

        {/* Desktop nav — shifting dropdown */}
        <div className="hidden md:flex items-center gap-6">
          <DesktopNav />
          <a
            href="#inicio"
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Início
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-6 flex flex-col gap-4">
          {mobileLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
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
