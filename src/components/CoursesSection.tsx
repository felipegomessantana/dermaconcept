import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import courseEstetica from "@/assets/course-estetica.jpg";
import courseCirurgia from "@/assets/course-cirurgia.jpg";
import courseTricologia from "@/assets/course-tricologia.jpg";
import heroImg from "@/assets/hero-derma.jpg";

const courses = [
  {
    title: "Dermatologia Estética Semanal",
    description:
      "Curso intensivo de uma semana com foco em procedimentos estéticos como toxina botulínica, preenchimentos, bioestimuladores e tecnologias. Ideal para quem busca uma imersão rápida e prática na área.",
    image: courseEstetica,
    cta: "ACESSE O PROGRAMA",
  },
  {
    title: "Dermatologia Estética Mensal",
    description:
      "Formação completa ao longo de um mês, com módulos aprofundados em harmonização facial, protocolos combinados, intercorrências e acompanhamento de pacientes. Perfeito para uma formação robusta e detalhada.",
    image: heroImg,
    cta: "ACESSE O PROGRAMA",
  },
  {
    title: "Cirurgia Dermatológica Mensal",
    description:
      "Curso prático e teórico com foco em técnicas cirúrgicas dermatológicas: biópsias, exéreses, retalhos, enxertos e cirurgia micrográfica de Mohs. Aulas com pacientes reais e supervisão especializada.",
    image: courseCirurgia,
    cta: "ACESSE O PROGRAMA",
  },
  {
    title: "Tricologia",
    description:
      "Curso especializado em diagnóstico e tratamento de doenças capilares. Abrange tricoscopia, tratamentos clínicos e procedimentos como microagulhamento capilar e mesoterapia. Para quem quer se tornar referência na área.",
    image: courseTricologia,
    cta: "Quero saber mais sobre este curso",
  },
];

const CARD_TOP_OFFSET = 80; // px from top
const CARD_STACK_GAP = 16; // px between stacked cards

interface StickyCardProps {
  course: (typeof courses)[number];
  index: number;
  total: number;
}

const StickyCard = ({ course, index, total }: StickyCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Scale down slightly as the next card comes over this one
  const isLast = index === total - 1;
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isLast ? [1, 1, 1] : [1, 1, 0.95]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isLast ? [1, 1, 1] : [1, 1, 0.6]
  );

  const topValue = CARD_TOP_OFFSET + index * CARD_STACK_GAP;

  return (
    <div
      ref={cardRef}
      className="h-[85vh] lg:h-[80vh]"
      style={{ marginBottom: index < total - 1 ? 0 : undefined }}
    >
      <motion.div
        style={{ scale, opacity, top: topValue }}
        className="sticky z-[1] bg-card rounded-2xl border border-border/40 overflow-hidden shadow-[0_4px_30px_-8px_rgba(0,0,0,0.08)] will-change-transform"
      >
        {/* Desktop: two-column layout, Mobile: stacked */}
        <div className="grid lg:grid-cols-2 min-h-[70vh] lg:min-h-[65vh]">
          {/* Image */}
          <div className={`${index % 2 === 1 ? "lg:order-2" : ""} overflow-hidden`}>
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 lg:h-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>

          {/* Content */}
          <div
            className={`${
              index % 2 === 1 ? "lg:order-1" : ""
            } flex flex-col justify-center px-8 py-10 lg:px-16 lg:py-20`}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-tight">
              {course.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
              {course.description}
            </p>
            <a
              href="#contato"
              className="inline-block self-start border border-primary text-primary px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded"
            >
              {course.cta}
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CoursesSection = () => (
  <section id="cursos" className="pt-20 md:pt-28 lg:pt-32 pb-8">
    <div className="container-narrow px-6 lg:px-20">
      <AnimatedSection className="text-center mb-16 lg:mb-20">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Formação
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">Nossos Cursos</h2>
      </AnimatedSection>
    </div>

    <div className="px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
      {courses.map((course, i) => (
        <StickyCard key={course.title} course={course} index={i} total={courses.length} />
      ))}
    </div>
  </section>
);

export default CoursesSection;
