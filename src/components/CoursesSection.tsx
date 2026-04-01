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

      <div className="flex flex-col gap-20 lg:gap-28">
        {courses.map((course, i) => (
          <AnimatedSection key={course.title} delay={i * 0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={600}
                  height={450}
                />
                <span className="absolute top-4 left-4 px-3 py-1 text-[11px] font-medium tracking-[0.2em] uppercase rounded-full bg-card/90 text-foreground backdrop-blur-sm border border-border/30">
                  {course.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">
                  {String(i + 1).padStart(2, "0")} / {String(courses.length).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-5 leading-tight tracking-tight text-foreground">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                  {course.description}
                </p>
                <div>
                  <BorderBeamButton as="a" href="#contato">
                    ACESSE O PROGRAMA
                  </BorderBeamButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
