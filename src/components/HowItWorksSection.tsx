import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { BookOpen, Hand, Users } from "lucide-react";

/* ───── Data ───── */

const blocks = [
  {
    imgUrl: "/pagina-inicial/cursos-teoricos.webp",
    subheading: "Metodologia",
    heading: "Cursos teóricos",
    icon: BookOpen,
    contentTitle: "Cursos teóricos com conteúdo atualizado",
    contentText:
      "Aulas ministradas por especialistas com vasta experiência clínica e acadêmica. Conteúdo baseado em evidências científicas e nas mais recentes atualizações da dermatologia.",
  },
  {
    imgUrl: "/pagina-inicial/maos-na-massa.webp",
    subheading: "Prática",
    heading: "Mãos na massa",
    icon: Hand,
    contentTitle: "Mãos na massa com supervisão direta",
    contentText:
      "Prática intensiva em procedimentos reais, com acompanhamento individualizado. Cada aluno tem a oportunidade de executar técnicas sob orientação de preceptores qualificados.",
  },
  {
    imgUrl: "/pagina-inicial/pacientes-reais.webp",
    subheading: "Realidade",
    heading: "Pacientes reais",
    icon: Users,
    contentTitle: "Aplicação em pacientes reais",
    contentText:
      "Atendimento supervisionado a pacientes reais, proporcionando uma experiência clínica autêntica. Isso garante que o aluno saia preparado para atuar com segurança e confiança.",
  },
];

/* ───── Sub-components ───── */

const IMG_PADDING = 12;

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={targetRef}
      className="sticky top-0 z-0 h-[33vh] overflow-hidden container-narrow"
      style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}
    >
      <motion.div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
        }}
        className="h-full w-full rounded-3xl"
      >
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 rounded-3xl bg-neutral-950/70"
        />
      </motion.div>
    </div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }}
      className="absolute left-0 top-0 flex h-[33vh] w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/60 md:mb-4 md:text-sm">
        {subheading}
      </p>
      <p className="text-center font-heading text-4xl font-bold md:text-7xl">
        {heading}
      </p>
    </motion.div>
  );
};

const ExampleContent = ({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="container-narrow grid grid-cols-1 gap-8 pb-24 pt-12 md:grid-cols-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="col-span-1 flex items-start gap-3 md:col-span-4"
      >
        <Icon size={22} strokeWidth={1.6} className="mt-1 flex-shrink-0 text-[#9A8D7F]" />
        <h3 className="font-heading text-xl font-bold text-[#1A1A1A] lg:text-2xl">{title}</h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="col-span-1 md:col-span-8"
      >
        <p className="text-base leading-relaxed text-gray-600 lg:text-lg">{text}</p>
      </motion.div>
    </div>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}) => (
  <div>
    <div className="relative h-[50vh]">
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy subheading={subheading} heading={heading} />
    </div>
    {children}
  </div>
);

/* ───── Main section ───── */

const HowItWorksSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section id="metodologia">
      {/* Section header */}
      <div ref={headerRef} className="bg-[#FAF8F5] py-20 text-center lg:py-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]"
        >
          Metodologia
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl"
        >
          Como funciona?
        </motion.h2>
      </div>

      {/* Parallax blocks */}
      <div className="bg-[#FAF8F5]">
        {blocks.map((b) => (
          <TextParallaxContent
            key={b.heading}
            imgUrl={b.imgUrl}
            subheading={b.subheading}
            heading={b.heading}
          >
            <ExampleContent icon={b.icon} title={b.contentTitle} text={b.contentText} />
          </TextParallaxContent>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
