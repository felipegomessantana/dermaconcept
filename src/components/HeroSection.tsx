import { motion } from "framer-motion";
import heroImg from "@/assets/hero-procedure.jpg";
import { BorderBeamButton } from "@/components/ui/border-beam-button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "47+", label: "Turmas Formadas" },
  { value: "9", label: "Cursos Especializados" },
];

const HeroSection = () => (
  <section id="inicio" className="flex min-h-screen flex-col lg:flex-row">
    {/* ── LEFT: Text ── */}
    <div className="flex flex-1 flex-col justify-center bg-[hsl(var(--warm-bg))] px-8 py-20 sm:px-12 lg:px-16 xl:px-24 lg:py-0">
      <motion.p
        {...fadeUp(0.1)}
        className="mb-4 text-[11px] font-medium tracking-[0.35em] uppercase text-muted-foreground"
      >
        Derma Concept Academy
      </motion.p>

      <motion.h1
        {...fadeUp(0.2)}
        className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem] xl:text-[4rem]"
      >
        APRENDA,
        <br />
        PRATIQUE,
        <br />
        IMPACTE.
      </motion.h1>

      <motion.p
        {...fadeUp(0.35)}
        className="mt-6 max-w-md font-heading text-lg italic leading-relaxed text-muted-foreground lg:text-xl"
      >
        Dermatologia que Transforma
        <br className="hidden sm:block" /> Carreiras e Pessoas.
      </motion.p>

      <motion.div {...fadeUp(0.45)} className="mt-10">
        <BorderBeamButton
          as="a"
          href="#cursos"
          className="shadow-sm"
        >
          Quero Saber Mais
        </BorderBeamButton>
      </motion.div>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.55)}
        className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-2xl font-extrabold text-foreground lg:text-3xl">
              {s.value}
            </p>
            <p className="mt-1 text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>

    {/* ── RIGHT: Image ── */}
    <motion.div
      {...fadeUp(0.25)}
      className="h-[50vh] w-full lg:h-auto lg:w-[50%] xl:w-[48%]"
    >
      <img
        src={heroImg}
        alt="Procedimento de dermatologia avançada na Derma Concept Academy"
        className="h-full w-full object-cover"
        width={1200}
        height={900}
      />
    </motion.div>
  </section>
);

export default HeroSection;
