import AnimatedSection from "./AnimatedSection";

const courses = [
  {
    title: "Dermatologia Estética Semanal",
    description:
      "Curso intensivo de uma semana com foco em procedimentos estéticos como toxina botulínica, preenchimentos, bioestimuladores e tecnologias.",
    image: "/pagina-inicial/dermatologia-estetica-semanal.jpeg",
    tag: "Intensivo",
    href: "/dermatologia-estetica-semanal",
  },
  {
    title: "Dermatologia Estética Mensal",
    description:
      "Formação completa ao longo de um mês, com módulos aprofundados em harmonização facial, protocolos combinados e acompanhamento de pacientes.",
    image: "/pagina-inicial/dermatologia-estetica-mensal.webp",
    tag: "Completo",
    href: "/#cursos",
  },
  {
    title: "Cirurgia Dermatológica Mensal",
    description:
      "Curso prático e teórico com foco em técnicas cirúrgicas dermatológicas: biópsias, exéreses, retalhos, enxertos e cirurgia micrográfica de Mohs.",
    image: "/pagina-inicial/cirurgia-dermatologica.webp",
    tag: "Prático",
    href: "/#cursos",
  },
];

const CoursesSectionClassic = () => (
  <section id="cursos" className="py-24 md:py-32 lg:py-40">
    <div className="container-narrow">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {courses.map((course, i) => (
          <AnimatedSection key={course.title} delay={i * 0.1}>
            <div className="flex flex-col overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-[#F8F5F1]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={600}
                  height={400}
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase rounded-full bg-card/90 text-foreground backdrop-blur-sm border border-border/30">
                  {course.tag}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl mb-3 leading-tight tracking-tight text-foreground">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {course.description}
                </p>
                <a
                  href={course.href}
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-foreground hover:text-primary transition-colors duration-300"
                >
                  ACESSE O PROGRAMA →
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSectionClassic;
