import { Quote } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
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
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="section-padding">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-20">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Experiências
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">
          Depoimentos de alunos
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <div className="bg-card p-8 lg:p-10 rounded border border-border/50 h-full flex flex-col">
              <Quote size={24} className="text-brand mb-6" strokeWidth={1} />
              <p className="text-muted-foreground leading-relaxed flex-1 italic mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-sm font-body tracking-wider text-muted-foreground">
                  {t.initials}
                </div>
                <p className="font-heading text-sm">{t.name}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
