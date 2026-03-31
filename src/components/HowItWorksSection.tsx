import { BookOpen, Hand, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: BookOpen,
    title: "Cursos teóricos com conteúdo atualizado",
    description:
      "Aulas ministradas por especialistas com vasta experiência clínica e acadêmica. Conteúdo baseado em evidências científicas e nas mais recentes atualizações da dermatologia.",
  },
  {
    icon: Hand,
    title: "Mãos na massa com supervisão direta",
    description:
      "Prática intensiva em procedimentos reais, com acompanhamento individualizado. Cada aluno tem a oportunidade de executar técnicas sob orientação de preceptores qualificados.",
  },
  {
    icon: Users,
    title: "Aplicação em pacientes reais",
    description:
      "Atendimento supervisionado a pacientes reais, proporcionando uma experiência clínica autêntica. Isso garante que o aluno saia preparado para atuar com segurança e confiança.",
  },
];

const HowItWorksSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <AnimatedSection className="text-center mb-20">
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Metodologia
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl">Como funciona?</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
        {steps.map((step, i) => (
          <AnimatedSection key={step.title} delay={i * 0.15}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center border border-border rounded-full">
                <step.icon size={28} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg md:text-xl mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
