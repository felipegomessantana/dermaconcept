import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImg from "@/assets/hero-team.webp?w=768;1200;1920&responsive";
import heroMobileImg from "@/assets/hero-mobile.webp?w=480;768&responsive";

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

/* ── animated headline ── */
function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.h1
      className="font-heading text-2xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl sm:whitespace-nowrap lg:text-[3.4rem] xl:text-[4rem]"
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
  const bg = isMobile ? heroMobileImg : heroImg;
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
      {/* Parallax responsive background (AVIF/WebP + srcset) */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <picture>
          {Object.entries(bg.sources).map(([mime, srcSet]) => (
            <source key={mime} type={mime} srcSet={srcSet} sizes="100vw" />
          ))}
          <img
            src={bg.img.src}
            width={bg.img.w}
            height={bg.img.h}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="sync"
            // @ts-expect-error - fetchpriority is a valid HTML5 attr
            fetchpriority="high"
            className="h-full w-full object-cover object-[center_top] sm:object-center"
          />
        </picture>
      </motion.div>

      {/* Gradient overlay — from middle to bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-black/85 to-black lg:via-black/65 lg:to-black/80" />


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
            className="hidden sm:block h-px w-10 bg-white/40 origin-right"
          />
        </motion.div>

        {/* Animated headline */}
        <AnimatedHeadline text="APRENDA, PRATIQUE, IMPACTE." />

        {/* Subtitle */}
        <motion.p
          {...fadeUp(1.4)}
          className="mt-6 font-heading text-lg italic leading-relaxed text-white/80 lg:text-xl"
        >
          Dermatologia que Transforma Carreiras e Pessoas.
        </motion.p>

        {/* Dual CTAs */}
        <motion.div
          {...fadeUp(1.6)}
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-xl sm:flex-row sm:justify-center"
        >
          <a
            href="#paciente-modelo"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("paciente-modelo")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ backgroundColor: "#7A7168" }}
          >
            Seja Paciente Modelo
          </a>
          <a
            href="#cursos"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("cursos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full border border-white/70 px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
          >
            Quero ser Aluno
          </a>
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
          className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
