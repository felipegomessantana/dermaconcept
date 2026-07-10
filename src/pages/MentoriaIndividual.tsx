import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, TrendingUp, ShieldCheck, Briefcase, Stethoscope } from "lucide-react";
import { BorderBeamButton } from "@/components/ui/border-beam-button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

/* ───── 1. Hero ───── */

const HeroSection = () => (
  <section className="relative bg-[#F8F5F1] pt-32 pb-20 lg:pt-40 lg:pb-28">
    <div className="mx-auto max-w-4xl px-6 text-center lg:px-16">
      <motion.span
        {...fadeUp(0.05)}
        className="mb-5 inline-block text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]"
      >
        Mentoria 1 a 1
      </motion.span>
      <motion.h1
        {...fadeUp(0.15)}
        className="font-heading text-3xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[3.2rem]"
      >
        O domínio técnico que separa os médicos medianos{" "}
        <span className="italic font-normal">da elite dermatológica.</span>
      </motion.h1>
      <motion.p
        {...fadeUp(0.3)}
        className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-neutral-500 lg:text-lg"
      >
        Uma mentoria 1 a 1 projetada exclusivamente para médicos que desejam
        dominar procedimentos complexos, resolver intercorrências com segurança
        e escalar o ticket médio do consultório.
      </motion.p>
      <motion.div {...fadeUp(0.45)} className="mt-10">
        <a
          href="https://wa.me/5531982449473"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-[#1A1A1A] px-10 py-4 text-sm font-medium tracking-widest uppercase text-white shadow-sm transition-all duration-300 hover:bg-[#333]"
        >
          Aplicar para a Mentoria
        </a>
      </motion.div>
    </div>
  </section>
);

/* ───── 2. Problema / Agitação ───── */

const pains = [
  {
    title: "Insegurança em Casos Complexos",
    text: "Medo de intercorrências e falta de suporte na hora da decisão clínica.",
  },
  {
    title: "Estagnação Financeira",
    text: "Dificuldade de cobrar o preço justo e vender combos de alto valor.",
  },
  {
    title: "Protocolos Ultrapassados",
    text: "Falta de atualização prática nas tecnologias e injetáveis que o mercado premium exige.",
  },
];

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#2C2722] py-24 lg:py-32">
      <div ref={ref} className="container-narrow">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#B8A99A]"
        >
          A realidade
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-5 max-w-3xl text-center font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          A teoria dos congressos não resolve a realidade do seu consultório.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-8"
            >
              <h3 className="font-heading text-lg font-bold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── 3. Solução — Bento Grid ───── */

const solutions = [
  { icon: Target, title: "Diagnóstico 360º", desc: "Avaliação de lacunas técnicas, fluxos, protocolos e portfólio." },
  { icon: TrendingUp, title: "Plano de Evolução", desc: "Trilha personalizada com metas e milestones claros." },
  { icon: ShieldCheck, title: "Casos Guiados", desc: "Discussão de casos reais, tomada de decisão e manejo de intercorrências." },
  { icon: Stethoscope, title: "Suporte Prático", desc: "Shadowing na Academy ou in loco por agenda." },
  { icon: Briefcase, title: "Negócio & Posicionamento", desc: "Precificação, montagem de combos, comunicação ética." },
];

const SolutionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#F8F5F1] py-24 lg:py-32">
      <div ref={ref} className="container-narrow">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]"
        >
          O que entregamos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-5 text-center font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl"
        >
          Mentoria que transforma prática clínica
        </motion.h2>

        {/* Bento grid: 3 top + 2 bottom centred */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                className={`rounded-2xl border border-neutral-200/60 bg-white p-8 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.04)] ${
                  i >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
                }`}
              >
                <Icon size={22} strokeWidth={1.6} className="text-[#9A8D7F]" />
                <h3 className="mt-4 font-heading text-lg font-bold text-[#1A1A1A]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ───── 4. Formatos — Cards ───── */

const formatCards = [
  {
    name: "Mentoria Online 1:1",
    tagline: "Ideal para discussão de casos e gestão",
    details: ["Sessões de 60-90 min", "Flexibilidade de horário", "Gravação disponível"],
    featured: false,
  },
  {
    name: "Shadowing Presencial",
    tagline: "Imersão total na Academy",
    details: ["Acompanhe a rotina real", "Procedimentos de alta complexidade", "Meio período ou dia inteiro"],
    featured: true,
  },
  {
    name: "In Loco",
    tagline: "O mentor no seu consultório",
    details: ["Ajuste de operação", "Supervisão personalizada", "Consulte disponibilidade"],
    featured: false,
  },
];

const FormatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-24 lg:py-32">
      <div ref={ref} className="container-narrow">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]"
        >
          Formatos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-5 text-center font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl"
        >
          Escolha o formato ideal
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {formatCards.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className={`relative rounded-2xl border p-8 transition-shadow duration-300 hover:shadow-lg ${
                c.featured
                  ? "border-[#7A7168]/30 bg-[#F8F5F1] shadow-md"
                  : "border-neutral-200/60 bg-white shadow-[0_4px_24px_-6px_rgba(0,0,0,0.04)]"
              }`}
            >
              {c.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-[#7A7168] px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                  Premium
                </span>
              )}
              <h3 className="font-heading text-xl font-bold text-[#1A1A1A]">{c.name}</h3>
              <p className="mt-2 text-sm text-neutral-500">{c.tagline}</p>
              <ul className="mt-6 flex flex-col gap-2.5">
                {c.details.map((d) => (
                  <li key={d} className="text-sm text-neutral-500">
                    <span className="mr-2 text-[#9A8D7F]">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ───── 5. CTA Final ───── */

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-[#F8F5F1] py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-3xl px-6 text-center lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]"
        >
          Vagas estritamente limitadas pela agenda clínica
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-heading text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl"
        >
          Vagas estritamente limitadas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-neutral-500"
        >
          Por ser um acompanhamento lado a lado, aceitamos poucos mentorados por
          semestre. Clique abaixo para passar pela triagem da nossa coordenação.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex justify-center"
        >
          <BorderBeamButton as="a" href="https://wa.me/5531982449473">
            Falar com a Coordenação no WhatsApp
          </BorderBeamButton>
        </motion.div>
      </div>
    </section>
  );
};

/* ───── Page ───── */

const MentoriaIndividual = () => (
  <div className="min-h-screen bg-[#F8F5F1]">
    <Header />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <FormatsSection />
    <CTASection />
    <Footer />
  </div>
);

export default MentoriaIndividual;
