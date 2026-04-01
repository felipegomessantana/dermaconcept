import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    tag: "Intensivo",
  },
  {
    title: "Dermatologia Estética Mensal",
    description:
      "Formação completa ao longo de um mês, com módulos aprofundados em harmonização facial, protocolos combinados, intercorrências e acompanhamento de pacientes. Perfeito para uma formação robusta e detalhada.",
    image: heroImg,
    cta: "ACESSE O PROGRAMA",
    tag: "Completo",
  },
  {
    title: "Cirurgia Dermatológica Mensal",
    description:
      "Curso prático e teórico com foco em técnicas cirúrgicas dermatológicas: biópsias, exéreses, retalhos, enxertos e cirurgia micrográfica de Mohs. Aulas com pacientes reais e supervisão especializada.",
    image: courseCirurgia,
    cta: "ACESSE O PROGRAMA",
    tag: "Prático",
  },
  {
    title: "Tricologia",
    description:
      "Curso especializado em diagnóstico e tratamento de doenças capilares. Abrange tricoscopia, tratamentos clínicos e procedimentos como microagulhamento capilar e mesoterapia. Para quem quer se tornar referência na área.",
    image: courseTricologia,
    cta: "Quero saber mais sobre este curso",
    tag: "Especialização",
  },
];

interface CourseCardProps {
  course: (typeof courses)[number];
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      {/* Image container with overlay */}
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
        <motion.img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
          width={600}
          height={400}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

        {/* Tag badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase rounded-full bg-card/90 text-foreground backdrop-blur-sm border border-border/30">
          {course.tag}
        </span>

        {/* Floating number */}
        <span className="absolute bottom-4 right-4 font-serif text-5xl font-bold text-primary-foreground/20 group-hover:text-primary-foreground/40 transition-colors duration-500 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-8">
        <h3 className="font-serif text-xl md:text-2xl mb-3 leading-tight tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
          {course.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
          {course.description}
        </p>

        {/* CTA with animated arrow */}
        <div className="mt-auto">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-foreground group-hover:text-primary transition-colors duration-300"
          >
            <span>{course.cta}</span>
            <motion.span
              className="inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              →
            </motion.span>
          </a>

          {/* Animated underline */}
          <div className="h-px mt-2 bg-border overflow-hidden">
            <div className="h-full w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesSection = () => (
  <section id="cursos" className="py-24 md:py-32 lg:py-40">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {courses.map((course, i) => (
          <CourseCard key={course.title} course={course} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
