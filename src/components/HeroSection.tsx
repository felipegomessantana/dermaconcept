import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import heroImg from "@/assets/hero-team.webp";
import { BorderBeamButton } from "@/components/ui/border-beam-button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const stats = [
  { value: 15, suffix: "+", label: "Anos de Experiência" },
  { value: 47, suffix: "+", label: "Turmas Formadas" },
  { value: 9, suffix: "", label: "Cursos Especializados" },
];

function AnimatedNumber({ value, suffix, duration = 1.8 }: { value: number; suffix: string; duration?: number }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration]);

  return <span ref={ref}>{display}{suffix}</span>;
}

const HeroSection = () => (
  <section
    id="inicio"
    className="relative min-h-[85vh] bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroImg})` }}
  >
    {/* Gradient overlay — transparent top, black bottom */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

    <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-end px-6 pb-12 pt-16 text-center sm:px-10 lg:px-14 xl:px-20">
      <motion.p
        {...fadeUp(0.1)}
        className="mb-4 text-[11px] font-medium tracking-[0.35em] uppercase text-white/60"
      >
        Derma Concept Academy
      </motion.p>

      <motion.h1
        {...fadeUp(0.2)}
        className="whitespace-nowrap font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem] xl:text-[4rem]"
      >
        APRENDA, PRATIQUE, IMPACTE.
      </motion.h1>

      <motion.p
        {...fadeUp(0.35)}
        className="mt-6 font-heading text-lg italic leading-relaxed text-white/80 lg:text-xl"
      >
        Dermatologia que Transforma Carreiras e Pessoas.
      </motion.p>

      <motion.div {...fadeUp(0.45)} className="mt-10">
        <BorderBeamButton as="a" href="#cursos" className="shadow-sm">
          Quero Saber Mais
        </BorderBeamButton>
      </motion.div>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.55)}
        className="mt-14 grid grid-cols-3 gap-6 border-t border-white/20 pt-8"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-2xl font-extrabold text-white lg:text-3xl">
              <AnimatedNumber value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-[10px] font-medium tracking-wider uppercase text-white/60">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
