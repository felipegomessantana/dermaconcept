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

const CoursesSection = () => (
  <section id="cursos" className="section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-20">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Formação
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">Nossos Cursos</h2>
      </AnimatedSection>

      <div className="space-y-24">
        {courses.map((course, i) => (
          <AnimatedSection key={course.title} delay={0.1}>
            <div
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="text-2xl md:text-3xl mb-6">{course.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {course.description}
                </p>
                <a
                  href="#contato"
                  className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded"
                >
                  {course.cta}
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
