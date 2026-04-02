import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { BorderBeamButton } from "./ui/border-beam-button";
import courseEstetica from "@/assets/course-estetica.jpg";
import courseCirurgia from "@/assets/course-cirurgia.jpg";
import courseTricologia from "@/assets/course-tricologia.jpg";
import heroImg from "@/assets/hero-derma.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const courses = [
  {
    title: "Dermatologia Estética Semanal",
    description: (
      <>
        <p>Este fellow, <strong className="text-foreground">ÚNICO em Belo Horizonte</strong>, tem duração de 6 meses e é composto por aulas teóricas baseadas em muita ciência e um hands on intenso, com muitos pacientes e tudo acompanhado de professores referência na área e com muita experiência.</p>
        <p>Ele ensina toda dermatologia estética, do básico ao avançado, do mais antigo (e que funciona até hoje) até as últimas novidades! Mas vai muito além: ele mostra a realidade de um consultório, da avaliação, indicação e resultado dos procedimentos que o aluno fez!</p>
        <p>Ensina a lidar com várias queixas, insatisfações, intercorrências, vendas e até precificar os procedimentos! O aluno acompanha seu paciente durante todo o tratamento! Realiza o procedimento e avalia o resultado!</p>
        <p>Além disso, a prática semanal dá uma segurança maior e mais rápida para que o aluno já consiga realizar seus atendimentos particulares.</p>
      </>
    ),
    image: courseEstetica,
    tag: "Intensivo",
  },
  {
    title: "Dermatologia Estética Mensal",
    description: (
      <>
        <p>Este fellow tem duração de 6 meses e ocorre em <strong className="text-foreground">um final de semana por mês (3 dias inteiros)</strong>.</p>
        <p>Ele ensina toda dermatologia estética, do básico ao avançado, do mais antigo (e que funciona até hoje) até as últimas novidades! Ele mostra a realidade de um consultório, da avaliação, indicação e resultado dos procedimentos que você fez!</p>
        <p>Ensina a lidar com várias queixas, insatisfações, intercorrências, vendas e até precificar os procedimentos!</p>
        <p>Conta com aula teórica baseada em artigos científicos e literatura atualizada e muito hands on!! Tudo acompanhado por professores qualificados e que são referência na área!</p>
        <p>O aluno termina o curso tendo muita segurança para atender seus pacientes!! Torne-se uma referência na estética! E saiba como se diferenciar nesse mercado tão concorrido!</p>
      </>
    ),
    image: heroImg,
    tag: "Completo",
  },
  {
    title: "Cirurgia Dermatológica",
    description: (
      <>
        <p>Ensinar e formar cirurgiões dermatológicos, com aulas teóricas e práticas, abordando vários tumores e pequenas cirurgias estéticas.</p>
        <p>Este curso é para você que deseja alavancar sua carreira e se destacar no mercado de trabalho, após dominar os principais procedimentos dentro da cirurgia dermatológica.</p>
        <p>Hands-On supervisionado por especialistas da área de cirurgia dermatológica, colocando em prática todo conhecimento obtido nas aulas teóricas.</p>
        <p>Esse fellow, <strong className="text-foreground">ÚNICO em Belo Horizonte</strong>, tem duração de 6 meses e ocorre um final de semana por mês (2 dias inteiros).</p>
      </>
    ),
    image: courseCirurgia,
    tag: "Prático",
  },
  {
    title: "Tricologia",
    description: (
      <>
        <p>Curso especializado em diagnóstico e tratamento de doenças capilares. Abrange tricoscopia, tratamentos clínicos e procedimentos como microagulhamento capilar e mesoterapia.</p>
      </>
    ),
    image: courseTricologia,
    tag: "Especialização",
  },
];

interface ParallaxCourseProps {
  course: { title: string; description: React.ReactNode; image: string; tag: string };
  index: number;
  total: number;
  reversed: boolean;
}

const ParallaxCourse = ({ course, index, total, reversed }: ParallaxCourseProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Image moves slower (parallax)
  const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-50, 50]);
  // Zoom in as you scroll down
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // Text moves faster
  const textY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [60, -60]);

  const imageCol = (
    <motion.div
      className="relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5]"
      style={{ y: imageY }}
    >
      <motion.img
        src={course.image}
        alt={course.title}
        className="w-full h-full object-cover"
        loading="lazy"
        width={700}
        height={875}
        style={{ scale: imageScale }}
      />
      <span className="absolute top-5 left-5 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.2em] uppercase rounded-full bg-card/90 text-foreground backdrop-blur-sm border border-border/30">
        {course.tag}
      </span>
    </motion.div>
  );

  const textCol = (
    <motion.div
      ref={textRef}
      className="flex flex-col justify-center py-8 md:py-0"
      style={{ y: textY }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-5">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <h3 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] xl:text-5xl mb-6 leading-[1.15] tracking-tight text-foreground">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-10 max-w-md">
          {course.description}
        </p>
        <BorderBeamButton as="a" href="#contato">
          ACESSE O PROGRAMA
        </BorderBeamButton>
      </motion.div>
    </motion.div>
  );

  return (
    <div ref={containerRef} className="py-16 md:py-24 lg:py-32">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          {reversed && !isMobile ? (
            <>
              {textCol}
              {imageCol}
            </>
          ) : (
            <>
              {imageCol}
              {textCol}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CoursesSection = () => (
  <section id="cursos" className="py-24 md:py-32 lg:py-40">
    <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
      <AnimatedSection className="text-center mb-8 lg:mb-16">
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

    {courses.map((course, i) => (
      <ParallaxCourse
        key={course.title}
        course={course}
        index={i}
        total={courses.length}
        reversed={i % 2 !== 0}
      />
    ))}
  </section>
);

export default CoursesSection;
