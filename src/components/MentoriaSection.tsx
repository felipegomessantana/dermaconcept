import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Users, Building2, MapPin } from "lucide-react";
import { BorderBeamButton } from "./ui/border-beam-button";

const taupe = "#7A7168";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const formats = [
  { icon: Building2, text: "Presencial na Academy (Período integral ou meio período)" },
  { icon: MapPin, text: "In loco (consulte disponibilidade)" },
];

const MentoriaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-24 lg:py-32">
      {/* Subtle organic background lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mentoria-lines" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 60 Q30 40 60 60 T120 60" fill="none" stroke="#8B7D6B" strokeWidth="1" />
              <path d="M0 90 Q30 70 60 90 T120 90" fill="none" stroke="#8B7D6B" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mentoria-lines)" />
        </svg>
      </div>

      <div ref={ref} className="container-narrow relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[2/3] w-full max-w-[420px] overflow-hidden rounded-2xl bg-[#F8F5F1] shadow-lg lg:mx-0 lg:max-w-none"
          >
            <img
              src="/pagina-inicial/mentoria.webp"
              alt="Mentoria Individual — Derma Concept Academy"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Right — Content */}
          <div>
            <motion.h2
              {...fadeUp(0.1)}
              animate={inView ? fadeUp(0.1).animate : {}}
              className="font-heading text-3xl font-bold leading-tight tracking-tight text-[hsl(var(--foreground))] sm:text-4xl lg:text-[2.75rem]"
            >
              Mentoria em Dermatologia Estética{" "}
              <span className="italic font-normal">&amp; Cirurgia Dermatológica</span>
            </motion.h2>

            {/* Intro paragraphs */}
            <motion.div
              {...fadeUp(0.2)}
              animate={inView ? fadeUp(0.2).animate : {}}
              className="mt-6 max-w-xl space-y-4"
            >
              <p className="text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
                O aluno que busca aperfeiçoar suas técnicas ou aprender algo novo, esse é o curso ideal!
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
                Totalmente personalizado para suprir a necessidade do aluno e com um professor altamente qualificado e experiente ao seu lado, podendo ter ou não aula teórica!
              </p>
            </motion.div>

            {/* Callout: Duration & capacity */}
            <motion.div
              {...fadeUp(0.3)}
              animate={inView ? fadeUp(0.3).animate : {}}
              className="mt-8"
            >
              <div
                className="inline-flex items-center gap-6 rounded-xl px-6 py-4 border"
                style={{ backgroundColor: "#F8F5F1", borderColor: "hsl(35, 10%, 85%)" }}
              >
                <div className="flex items-center gap-2.5">
                  <Clock size={18} style={{ color: taupe }} />
                  <span className="text-sm font-semibold text-foreground">8 horas</span>
                </div>
                <div className="h-5 w-px bg-border" />
                <div className="flex items-center gap-2.5">
                  <Users size={18} style={{ color: taupe }} />
                  <span className="text-sm font-semibold text-foreground">No máximo 2 alunos</span>
                </div>
              </div>
            </motion.div>

            {/* Formatos */}
            <motion.div
              {...fadeUp(0.4)}
              animate={inView ? fadeUp(0.4).animate : {}}
              className="mt-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: taupe }}>
                Formatos
              </p>
              <div className="mt-5 flex flex-col gap-4">
                {formats.map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#F8F5F1" }}
                    >
                      <f.icon size={16} style={{ color: taupe }} />
                    </div>
                    <span className="text-sm text-muted-foreground lg:text-[15px]">{f.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              {...fadeUp(0.5)}
              animate={inView ? fadeUp(0.5).animate : {}}
              className="mt-10"
            >
              <BorderBeamButton as="a" href="/mentoria-individual">
                Quero uma mentoria sob medida
              </BorderBeamButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSection;
