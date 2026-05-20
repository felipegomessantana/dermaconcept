import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { BorderBeamButton } from "./ui/border-beam-button";
import courseEstetica from "@/assets/course-estetica.jpg?w=480;768;1000&responsive";
import courseCirurgia from "@/assets/course-cirurgia.jpg?w=480;768;1000&responsive";

import heroImg from "@/assets/hero-derma.jpg?w=480;768;1000&responsive";

import { useIsMobile } from "@/hooks/use-mobile";

const taupe = "#7A7168";

interface BenefitItem {
  text: string;
}

interface CourseData {
  title: string;
  intro: React.ReactNode;
  benefits: BenefitItem[];
  callout: string;
  image: import("./ui/responsive-image").PictureSource;
  tag: string;
}

const courses: CourseData[] = [
  {
    title: "Dermatologia Estética Semanal",
    intro: (
      <p>
        Este fellow, <span className="font-semibold text-foreground">ÚNICO em Belo Horizonte</span>, tem duração de 6 meses e é composto por aulas teóricas baseadas em muita ciência e um hands on intenso, com muitos pacientes e tudo acompanhado de professores referência na área e com muita experiência.
      </p>
    ),
    benefits: [
      { text: "Ensina toda dermatologia estética, do básico ao avançado, do mais antigo (e que funciona até hoje) até as últimas novidades! Mas vai muito além: ele mostra a realidade de um consultório, da avaliação, indicação e resultado dos procedimentos que o aluno fez!" },
      { text: "Ensina a lidar com várias queixas, insatisfações, intercorrências, vendas e até precificar os procedimentos! O aluno acompanha seu paciente durante todo o tratamento! Realiza o procedimento e avalia o resultado!" },
    ],
    callout: "A prática semanal dá uma segurança maior e mais rápida para que o aluno já consiga realizar seus atendimentos particulares.",
    image: courseEstetica,
    tag: "Intensivo",
  },
  {
    title: "Dermatologia Estética Mensal",
    intro: (
      <p>
        Este fellow tem duração de 6 meses e ocorre em <span className="font-semibold text-foreground">um final de semana por mês (3 dias inteiros)</span>.
      </p>
    ),
    benefits: [
      { text: "Ensina toda dermatologia estética, do básico ao avançado, do mais antigo (e que funciona até hoje) até as últimas novidades! Mostra a realidade de um consultório, da avaliação, indicação e resultado dos procedimentos que você fez!" },
      { text: "Ensina a lidar com várias queixas, insatisfações, intercorrências, vendas e até precificar os procedimentos!" },
      { text: "Conta com aula teórica baseada em artigos científicos e literatura atualizada e muito hands on!! Tudo acompanhado por professores qualificados e que são referência na área!" },
    ],
    callout: "O aluno termina o curso tendo muita segurança para atender seus pacientes!! Torne-se uma referência na estética! E saiba como se diferenciar nesse mercado tão concorrido!",
    image: heroImg,
    tag: "Completo",
  },
  {
    title: "Cirurgia Dermatológica",
    intro: (
      <p>
        Ensinar e formar cirurgiões dermatológicos, com aulas teóricas e práticas, abordando vários tumores e pequenas cirurgias estéticas.
      </p>
    ),
    benefits: [
      { text: "Este curso é para você que deseja alavancar sua carreira e se destacar no mercado de trabalho, após dominar os principais procedimentos dentro da cirurgia dermatológica." },
      { text: "Hands-On supervisionado por especialistas da área de cirurgia dermatológica, colocando em prática todo conhecimento obtido nas aulas teóricas." },
    ],
    callout: "Esse fellow, ÚNICO em Belo Horizonte, tem duração de 6 meses e ocorre um final de semana por mês (2 dias inteiros).",
    image: courseCirurgia,
    tag: "Prático",
  },
];

const BenefitsList = ({ benefits }: { benefits: BenefitItem[] }) => (
  <ul className="space-y-3">
    {benefits.map((b, i) => (
      <li key={i} className="flex items-start gap-3">
        <CheckCircle2
          size={18}
          className="mt-0.5 shrink-0"
          style={{ color: taupe }}
        />
        <span className="text-[13px] md:text-sm leading-relaxed text-muted-foreground">
          {b.text}
        </span>
      </li>
    ))}
  </ul>
);

const CalloutBox = ({ text }: { text: string }) => (
  <div
    className="rounded-lg px-5 py-4 border-l-[3px]"
    style={{ backgroundColor: "#F8F5F1", borderLeftColor: taupe }}
  >
    <div className="flex items-start gap-3">
      <Sparkles size={16} className="mt-0.5 shrink-0" style={{ color: taupe }} />
      <p className="text-[13px] md:text-sm leading-relaxed font-medium text-foreground">
        {text}
      </p>
    </div>
  </div>
);

interface ParallaxCourseProps {
  course: CourseData;
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

  const imageY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [-50, 50]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
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

        {/* Structured description */}
        <div className="space-y-5 mb-10 max-w-lg">
          {/* Intro paragraph */}
          <div className="text-[13px] md:text-sm leading-relaxed text-muted-foreground">
            {course.intro}
          </div>

          {/* Benefits list */}
          {course.benefits.length > 0 && (
            <BenefitsList benefits={course.benefits} />
          )}

          {/* Callout box */}
          {course.callout && <CalloutBox text={course.callout} />}
        </div>

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
