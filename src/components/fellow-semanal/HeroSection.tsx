import { motion } from "framer-motion";
import { CalendarDays, Clock, CalendarClock, Users, MapPin, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const infoItems = [
  { label: "Duração", value: "6 meses", icon: CalendarDays },
  { label: "Carga horária", value: "96 horas", icon: Clock },
  { label: "Frequência", value: "4h por semana", icon: CalendarClock },
  { label: "Turmas", value: "Manhã ou Tarde", icon: Users },
  { label: "Local", value: "Belo Horizonte", icon: MapPin },
  { label: "Diferencial", value: "Acompanhamento de resultados reais", icon: Sparkles },
];

const FellowSemanalHero = () => (
  <section className="relative min-h-screen bg-[#F8F5F1] pt-28 pb-20 lg:pt-36 lg:pb-28">
    <div className="container-narrow">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Left — Text */}
        <div className="flex flex-col justify-center">
          <motion.span
            {...fadeUp(0.1)}
            className="mb-6 inline-block w-fit rounded-full border border-[#B8A99A]/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7A7168]"
          >
            Exclusivo para Médicos
          </motion.span>

          <motion.h1
            {...fadeUp(0.25)}
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[3.5rem]"
          >
            Fellow Semanal de{" "}
            <span className="italic">Cosmiatria</span> 2026
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-8 max-w-lg text-base leading-relaxed text-neutral-500 lg:text-lg"
          >
            Um programa único em Belo Horizonte que ensina toda a dermatologia
            estética, do básico ao avançado. A prática semanal proporciona muito
            mais segurança e permite acompanhar o paciente durante todo o
            tratamento, garantindo uma formação completa e diferenciada.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp(0.55)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://wa.me/5531982449473"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-[#1A1A1A] px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-white transition-all duration-300 hover:bg-[#333] shadow-sm"
            >
              Quero me Inscrever
            </a>
            <a
              href="#cronograma"
              className="inline-flex items-center justify-center rounded-xl border border-[#B8A99A]/50 px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-[#7A7168] transition-all duration-300 hover:border-[#7A7168] hover:text-[#1A1A1A]"
            >
              Ver cronograma
            </a>
          </motion.div>

          <motion.p
            {...fadeUp(0.7)}
            className="mt-8 text-xs tracking-wide text-neutral-400"
          >
            Vagas limitadas · Início: Fevereiro/2026
          </motion.p>
        </div>

        {/* Right — Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-neutral-200/60 bg-white p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] lg:p-12"
        >
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7A7168]">
            Informações Principais
          </p>

          <div className="flex flex-col gap-6">
            {infoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                    <Icon size={15} strokeWidth={1.8} className="text-[#9A8D7F]" />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-base font-medium text-[#1A1A1A]">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FellowSemanalHero;
