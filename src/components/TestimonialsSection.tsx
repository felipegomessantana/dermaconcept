import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const topRow = [
  {
    name: "Dra. Ana Carolina",
    text: "A Derma Concept Academy transformou minha carreira. O curso de Dermatologia Estética me deu a confiança e a habilidade para oferecer procedimentos de altíssima qualidade aos meus pacientes.",
    initials: "AC",
  },
  {
    name: "Dr. Marcos Vinícius",
    text: "A experiência prática com pacientes reais foi o grande diferencial. Saí do curso preparado para atuar com segurança. A equipe de preceptores é excepcional e muito atenciosa.",
    initials: "MV",
  },
  {
    name: "Dra. Juliana Santos",
    text: "O curso de Tricologia superou todas as minhas expectativas. O conteúdo é atualizado, a estrutura é impecável e a prática supervisionada me deu uma segurança que nenhum outro curso havia proporcionado.",
    initials: "JS",
  },
  {
    name: "Dra. Beatriz Lima",
    text: "A qualidade do ensino é incomparável. Cada módulo foi cuidadosamente planejado para nos preparar para os desafios reais da dermatologia. Recomendo de olhos fechados!",
    initials: "BL",
  },
  {
    name: "Dr. Rafael Mendes",
    text: "O curso de Cirurgia Dermatológica foi divisor de águas na minha formação. A prática com pacientes reais sob supervisão qualificada me deu uma segurança imensa.",
    initials: "RM",
  },
];

const bottomRow = [
  {
    name: "Dra. Camila Ferreira",
    text: "Fiz o curso mensal de Dermatologia Estética e foi a melhor decisão da minha carreira. A didática dos professores é excelente e a infraestrutura da academia é de primeiro mundo.",
    initials: "CF",
  },
  {
    name: "Dr. Lucas Almeida",
    text: "O que diferencia a Derma Concept é a seriedade e o compromisso com a formação prática. Você realmente sai preparado para atender com excelência.",
    initials: "LA",
  },
  {
    name: "Dra. Fernanda Costa",
    text: "A imersão em Tricologia mudou completamente minha prática clínica. Aprendi técnicas que aplico diariamente com resultados surpreendentes para meus pacientes.",
    initials: "FC",
  },
  {
    name: "Dr. Pedro Henrique",
    text: "Ambiente acolhedor, professores brilhantes e uma metodologia que realmente funciona. A Derma Concept Academy é referência em educação dermatológica.",
    initials: "PH",
  },
  {
    name: "Dra. Isabela Rocha",
    text: "Já fiz diversos cursos na área, mas nenhum se compara à experiência da Derma Concept. O nível de prática e acompanhamento é extraordinário.",
    initials: "IR",
  },
];

interface TestimonialCardProps {
  name: string;
  text: string;
  initials: string;
}

const TestimonialCard = ({ name, text, initials }: TestimonialCardProps) => (
  <div className="flex-shrink-0 w-[380px] bg-card rounded-2xl p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.06)] border border-border/30">
    <Quote size={22} className="text-brand mb-5" strokeWidth={1} />
    <p className="text-muted-foreground leading-relaxed italic text-sm mb-7">
      "{text}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-xs font-body tracking-wider text-muted-foreground">
        {initials}
      </div>
      <p className="font-heading text-sm">{name}</p>
    </div>
  </div>
);

interface MarqueeRowProps {
  items: TestimonialCardProps[];
  direction?: "left" | "right";
}

const MarqueeRow = ({ items, direction = "left" }: MarqueeRowProps) => {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="group relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

      <div
        className={`flex gap-6 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => (
  <section id="depoimentos" className="section-padding overflow-hidden">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-16">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Experiências
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          Depoimentos de alunos
        </h2>
      </AnimatedSection>
    </div>

    <div className="space-y-6">
      <MarqueeRow items={topRow} direction="left" />
      <MarqueeRow items={bottomRow} direction="right" />
    </div>
  </section>
);

export default TestimonialsSection;
