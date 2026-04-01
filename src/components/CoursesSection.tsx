import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { BorderBeamButton } from "./ui/border-beam-button";
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
    tag: "Intensivo",
  },
  {
    title: "Dermatologia Estética Mensal",
    description:
      "Formação completa ao longo de um mês, com módulos aprofundados em harmonização facial, protocolos combinados, intercorrências e acompanhamento de pacientes. Perfeito para uma formação robusta e detalhada.",
    image: heroImg,
    tag: "Completo",
  },
  {
    title: "Cirurgia Dermatológica Mensal",
    description:
      "Curso prático e teórico com foco em técnicas cirúrgicas dermatológicas: biópsias, exéreses, retalhos, enxertos e cirurgia micrográfica de Mohs. Aulas com pacientes reais e supervisão especializada.",
    image: courseCirurgia,
    tag: "Prático",
  },
  {
    title: "Tricologia",
    description:
      "Curso especializado em diagnóstico e tratamento de doenças capilares. Abrange tricoscopia, tratamentos clínicos e procedimentos como microagulhamento capilar e mesoterapia.",
    image: courseTricologia,
    tag: "Especialização",
  },
];

interface TextParallaxBlockProps {
  course: (typeof courses)[0];
  index: number;
  total: number;
}

const TextParallaxBlock = ({ course, index, total }: TextParallaxBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0.2, 0.5], ["80px", "0px"]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <div ref={containerRef} className="relative min-h-[120vh]">
      {/* Sticky image background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover scale-110"
            loading="lazy"
          />
        </motion.div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />

        {/* Content overlay */}
        <motion.div
          className="absolute inset-0 flex items-end pb-20 md:pb-28 lg:pb-32"
          style={{ y: textY, opacity: textOpacity }}
        >
          <div className="max-w-[1300px] mx-auto px-6 lg:px-16 w-full">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase rounded-full bg-card/90 text-foreground backdrop-blur-sm border border-border/30">
                  {course.tag}
                </span>
                <span className="text-sm tracking-[0.2em] uppercase text-background/60">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-5 leading-tight tracking-tight text-background">
                {course.title}
              </h3>
              <p className="text-background/70 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                {course.description}
              </p>
              <BorderBeamButton as="a" href="#contato">
                ACESSE O PROGRAMA
              </BorderBeamButton>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const CoursesSection = () => (
  <section id="cursos">
    <div className="py-24 md:py-32 lg:py-40">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
        <AnimatedSection className="text-center mb-16 lg:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Formação
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Nossos Cursos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base lg:text-lg">
            Programas exclusivos para médicos que buscam excelência em dermatologia
          </p>
        </AnimatedSection>
      </div>
    </div>

    {courses.map((course, i) => (
      <TextParallaxBlock
        key={course.title}
        course={course}
        index={i}
        total={courses.length}
      />
    ))}
  </section>
);

export default CoursesSection;
