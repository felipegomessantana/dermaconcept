import { motion } from "framer-motion";
import heroImg from "@/assets/hero-team.webp";
import heroMobileImg from "@/assets/hero-mobile.webp";
import { useIsMobile } from "@/hooks/use-mobile";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const HeroSectionClassic = () => {
  const isMobile = useIsMobile();
  const bgImage = isMobile ? heroMobileImg : heroImg;

  return (
    <section id="inicio" className="relative min-h-[100svh] overflow-hidden bg-foreground">
      {/* Static background */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat sm:bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-end px-6 pb-16 pt-24 text-center sm:px-10 lg:px-14 xl:px-20">
        <motion.p
          {...fadeUp(0.1)}
          className="mb-5 text-[11px] font-medium tracking-[0.35em] uppercase text-primary-foreground/60"
        >
          Derma Concept Academy
        </motion.p>

        <motion.h1
          {...fadeUp(0.3)}
          className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-primary-foreground sm:text-4xl lg:text-[3.4rem] xl:text-[4.2rem]"
        >
          APRENDA, PRATIQUE, IMPACTE.
        </motion.h1>

        <motion.p
          {...fadeUp(0.5)}
          className="mt-6 max-w-lg font-heading text-lg italic leading-relaxed text-primary-foreground/70 lg:text-xl"
        >
          Dermatologia que Transforma Carreiras e Pessoas.
        </motion.p>

        <motion.div {...fadeUp(0.7)} className="mt-10">
          <a
            href="#cursos"
            className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-primary-foreground/90 transition-all duration-300 hover:bg-primary-foreground/15 hover:border-primary-foreground/40"
          >
            Conheça os cursos ↓
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.9)}
          className="mt-14 w-full max-w-md grid grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8"
        >
          {[
            { value: "15+", label: "Anos de Experiência" },
            { value: "47+", label: "Turmas Formadas" },
            { value: "9", label: "Cursos Especializados" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading text-2xl font-extrabold text-primary-foreground lg:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-[10px] font-medium tracking-wider uppercase text-primary-foreground/50">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionClassic;
