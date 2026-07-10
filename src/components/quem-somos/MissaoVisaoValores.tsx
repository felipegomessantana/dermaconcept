import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    label: "Missão",
    title: "Transformar a formação médica em dermatologia",
    text: "Proporcionar uma experiência educacional imersiva e prática, capacitando médicos com as habilidades e o conhecimento necessários para se destacarem na dermatologia moderna.",
  },
  {
    icon: Eye,
    label: "Visão",
    title: "Ser referência nacional em ensino dermatológico",
    text: "Consolidar-nos como a principal academia de formação em dermatologia do Brasil, reconhecida pela excelência do corpo docente, inovação metodológica e resultados dos nossos alunos.",
  },
  {
    icon: Heart,
    label: "Valores",
    title: "Ética, excelência e compromisso com o paciente",
    text: "Guiamos cada decisão pela ética profissional, pelo compromisso com a segurança do paciente e pela busca constante de atualização científica e técnica.",
  },
];

const PillarCard = ({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl border border-transparent bg-card p-8 md:p-10 transition-shadow duration-300 hover:shadow-md shadow-sm"
    >
      {/* Icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
        <pillar.icon size={22} strokeWidth={1.5} className="text-foreground" />
      </div>

      {/* Label */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-3">
        {pillar.label}
      </p>

      {/* Title */}
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-snug">
        {pillar.title}
      </h3>

      {/* Text */}
      <p className="text-sm leading-relaxed text-muted-foreground">
        {pillar.text}
      </p>

      {/* Subtle index */}
      <span className="absolute top-6 right-8 text-6xl font-serif font-bold text-border/40 select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
};

const MissaoVisaoValores = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="container-narrow">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nossos Pilares
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            O que nos move
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base lg:text-lg">
            Cada decisão é guiada por princípios que colocam o ensino de qualidade e a segurança do paciente em primeiro lugar.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.label} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissaoVisaoValores;
