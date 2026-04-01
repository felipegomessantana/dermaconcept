import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import heroImg from "@/assets/hero-team.webp";
import heroMobileImg from "@/assets/hero-mobile.webp";
import { useIsMobile } from "@/hooks/use-mobile";

/* ── animation helpers ── */
const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      delay: 0.6 + i * 0.04,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const stats = [
  { value: 15, suffix: "+", label: "Anos de Experiência" },
  { value: 47, suffix: "+", label: "Turmas Formadas" },
  { value: 9, suffix: "", label: "Cursos Especializados" },
];

/* ── animated counter ── */
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

/* ── animated headline ── */
function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.h1
      className="font-heading text-3xl font-extrabold leading-[1.08] tracking-tight text-primary-foreground sm:text-4xl lg:text-[3.4rem] xl:text-[4.2rem]"
      style={{ perspective: 600 }}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block mr-[0.3em]">
          {word.split("").map((char, ci) => {
            const globalIndex = words.slice(0, wi).join("").length + ci;
            return (
              <motion.span
                key={ci}
                custom={globalIndex}
                variants={letterVariants}
                className="inline-block"
                style={{ transformOrigin: "bottom" }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.h1>
  );
}

/* ── main section ── */
const HeroSection = () => {
  const isMobile = useIsMobile();
  const bgImage = isMobile ? heroMobileImg : heroImg;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image shifts down as user scrolls
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Content fades out on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100svh] overflow-hidden bg-black"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat sm:bg-center will-change-transform"
        style={{
          backgroundImage: `url(${bgImage})`,
          y: bgY,
        }}
      />

      {/* Gradient overlay — only behind text at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-end px-6 pb-14 pt-24 text-center sm:px-10 lg:px-14 xl:px-20"
      >
        {/* Overline with animated line */}
        <motion.div
          {...fadeUp(0.1)}
          className="mb-5 flex items-center gap-3"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block h-px w-10 bg-white/40 origin-left"
          />
          <span className="text-[11px] font-medium tracking-[0.35em] uppercase text-white/60">
            Derma Concept Academy
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden sm:block h-px w-10 bg-primary-foreground/40 origin-right"
          />
        </motion.div>

        {/* Animated headline */}
        <AnimatedHeadline text="APRENDA, PRATIQUE, IMPACTE." />

        {/* Subtitle */}
        <motion.p
          {...fadeUp(1.4)}
          className="mt-6 max-w-lg font-heading text-lg italic leading-relaxed text-primary-foreground/70 lg:text-xl"
        >
          Dermatologia que Transforma Carreiras e Pessoas.
        </motion.p>


        {/* Stats */}
        <motion.div
          {...fadeUp(1.8)}
          className="mt-14 w-full max-w-md grid grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-2xl font-extrabold text-primary-foreground lg:text-3xl">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[10px] font-medium tracking-wider uppercase text-primary-foreground/50">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-primary-foreground/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
