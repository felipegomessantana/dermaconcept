import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { label: "Duração", value: "6 meses", sub: "Semanal" },
  { label: "Carga Horária", value: "96 horas", sub: "totais" },
  { label: "Início / Término", value: "Fev/2026", sub: "a Jul/2026" },
];

const FellowSemanalSobre = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-16">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]"
        >
          Sobre o Curso
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-5 max-w-3xl text-center font-heading text-3xl font-bold leading-snug tracking-tight text-[#1A1A1A] sm:text-4xl"
        >
          Uma rotina real de consultório
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-neutral-500 lg:text-lg"
        >
          Você terá uma rotina real de consultório, aprendendo a manejar
          expectativas reais do paciente, conduzir procedimentos com segurança e
          acompanhar os resultados ao longo de todo o tratamento. A prática
          semanal garante evolução constante e confiança crescente.
        </motion.p>

        {/* Highlights Grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-neutral-100 pt-16 md:grid-cols-3 md:gap-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="text-center"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {item.label}
              </p>
              <p className="mt-3 font-heading text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-neutral-400">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FellowSemanalSobre;
