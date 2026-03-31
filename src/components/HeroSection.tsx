import { Instagram, Search, Menu, Plus } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-procedure.jpg";
import deviceImg from "@/assets/hero-device-vertical.jpg";
import teamImg from "@/assets/team-photo.webp";
import logo from "@/assets/logo-derma.webp";

/* ───────── Social sidebar icons ───────── */

const socials = [
  { label: "Ig", icon: Instagram, href: "https://www.instagram.com/dermaconcept_academy" },
];

const socialLetters = [
  { label: "Pr", href: "#" },
  { label: "Tw", href: "#" },
  { label: "Fb", href: "#" },
];

/* ───────── Fade-in helper ───────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

/* ───────── Component ───────── */

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-screen bg-[#FAF9F7] overflow-hidden"
  >
    {/* ── Top bar (search + hamburger) ── */}
    <div className="absolute right-6 top-6 z-30 flex items-center gap-5 lg:right-10 lg:top-8">
      <button aria-label="Pesquisar" className="text-[#7A7168] hover:text-[#5a544d] transition-colors">
        <Search size={20} strokeWidth={1.5} />
      </button>
      <button aria-label="Menu" className="text-[#7A7168] hover:text-[#5a544d] transition-colors">
        <Menu size={22} strokeWidth={1.5} />
      </button>
    </div>

    <div className="flex min-h-screen">
      {/* ════════════ LEFT SIDEBAR ════════════ */}
      <motion.aside
        {...fadeUp(0)}
        className="hidden lg:flex w-[72px] shrink-0 flex-col items-center justify-between border-r border-[#e8e4df] bg-[#2C2926] py-8"
      >
        {/* Logo mark */}
        <div className="flex flex-col items-center gap-6">
          <img
            src={logo}
            alt="Derma Concept Academy"
            className="w-10 opacity-90 brightness-200"
          />
          <div className="h-px w-6 bg-[#5a544d]" />
        </div>

        {/* Social icons */}
        <div className="flex flex-col items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b8b0a5] transition-colors hover:text-white"
              aria-label={s.label}
            >
              <s.icon size={16} strokeWidth={1.5} />
            </a>
          ))}
          {socialLetters.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-[10px] font-medium tracking-wider text-[#b8b0a5] transition-colors hover:text-white"
            >
              {s.label}
            </a>
          ))}
          <div className="mt-2 h-16 w-px bg-[#5a544d]" />
        </div>

        {/* Spacer */}
        <div />
      </motion.aside>

      {/* ════════════ MAIN CONTENT ════════════ */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* ── CENTER COLUMN: Title ── */}
        <div className="flex flex-1 flex-col justify-center px-8 py-20 lg:px-16 lg:py-0">
          <motion.p
            {...fadeUp(0.15)}
            className="mb-4 text-[11px] font-medium tracking-[0.35em] uppercase text-[#9b9287]"
          >
            Derma Concept Academy
          </motion.p>

          <motion.h1
            {...fadeUp(0.25)}
            className="font-sans text-4xl font-extrabold leading-[1.08] tracking-tight text-[#2C2926] sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem]"
          >
            APRENDA,
            <br />
            PRATIQUE,
            <br />
            IMPACTE.
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-6 max-w-md text-right font-heading text-lg italic leading-relaxed text-[#7A7168] lg:text-xl"
          >
            Dermatologia que Transforma
            <br className="hidden sm:block" /> Carreiras e Pessoas.
          </motion.p>

          {/* Stats */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-[#e0dbd5] pt-8"
          >
            {[
              { value: "15+", label: "Anos de Experiência" },
              { value: "47+", label: "Turmas Formadas" },
              { value: "9", label: "Cursos Especializados" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-[#2C2926] lg:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-medium tracking-wider uppercase text-[#9b9287]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Images + Profile ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="relative flex w-full flex-col gap-4 p-4 lg:w-[48%] lg:flex-row lg:gap-5 lg:p-6 xl:w-[46%]"
        >
          {/* Main large image */}
          <div className="relative flex-1 overflow-hidden rounded-2xl">
            <img
              src={heroImg}
              alt="Equipamento de ultrassom em clínica de dermatologia avançada"
              className="h-full w-full object-cover"
              width={1024}
              height={768}
            />
            {/* Floating "+" icon */}
            <button
              className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#2C2926]/80 text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
              aria-label="Ver mais"
            >
              <Plus size={18} strokeWidth={2} />
            </button>
          </div>

          {/* Right sub-column */}
          <div className="flex w-full flex-row gap-4 lg:w-[38%] lg:flex-col lg:gap-5">
            {/* Vertical device image */}
            <div className="flex-1 overflow-hidden rounded-2xl">
              <img
                src={deviceImg}
                alt="Dispositivo de dermatologia em clínica premium"
                className="h-full w-full object-cover"
                loading="lazy"
                width={640}
                height={960}
              />
            </div>

            {/* Co-founder profile card */}
            <div className="flex flex-1 flex-col items-center justify-center rounded-2xl bg-[#f0ece7] p-5">
              <div className="mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-[#d4cdc4] shadow-md lg:h-24 lg:w-24">
                <img
                  src={teamImg}
                  alt="Equipe Derma Concept Academy"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-center text-xs font-bold tracking-wide uppercase text-[#2C2926]">
                Equipe Fundadora
              </p>
              <p className="mt-1 text-center text-[10px] leading-snug text-[#7A7168]">
                Lead Co-founders of
                <br />
                Derma Concept Academy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
