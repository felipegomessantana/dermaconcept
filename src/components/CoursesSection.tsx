import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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

interface CourseBlockProps {
  course: (typeof courses)[number];
  index: number;
  total: number;
}

const CourseBlock = ({ course, index, total }: CourseBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isReversed = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: image moves slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  // Zoom: image scales up as user scrolls through
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.12, 1.25]);
  // Text moves slightly faster
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  // Fade-in for text
  const textInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24 items-center ${
        index < total - 1 ? "mb-24 md:mb-32 lg:mb-40" : ""
      }`}
    >
      {/* Image */}
      <div className={`${isReversed ? "lg:order-2" : ""} overflow-hidden rounded-2xl`}>
        <motion.div
          style={{
            y: typeof window !== "undefined" && window.innerWidth >= 1024 ? imageY : 0,
            scale: typeof window !== "undefined" && window.innerWidth >= 1024 ? imageScale : 1,
          }}
          className="will-change-transform"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover rounded-2xl"
            loading="lazy"
            width={800}
            height={1000}
          />
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        style={{ y: typeof window !== "undefined" && window.innerWidth >= 1024 ? textY : 0 }}
        className={`${isReversed ? "lg:order-1" : ""} will-change-transform`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-[1.15] tracking-tight">
            {course.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-10 max-w-lg">
            {course.description}
          </p>
          <a
            href="#contato"
            className="inline-block border border-foreground/80 text-foreground px-8 py-3.5 text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-all duration-300 rounded-sm"
          >
            {course.cta}
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

const CoursesSection = () => (
  <section id="cursos" className="py-24 md:py-32 lg:py-40">
    <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
      <AnimatedSection className="text-center mb-20 lg:mb-28">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Formação
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Nossos Cursos</h2>
      </AnimatedSection>

      {courses.map((course, i) => (
        <CourseBlock key={course.title} course={course} index={i} total={courses.length} />
      ))}
    </div>
  </section>
);

export default CoursesSection;
