import AnimatedSection from "./AnimatedSection";
import { BorderBeamButton } from "./ui/border-beam-button";
import heroImg from "@/assets/hero-derma.jpg";

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "47+", label: "Turmas Formadas" },
  { value: "9", label: "Cursos Especializados" },
];

const HeroSection = () => (
  <section id="inicio" className="relative min-h-screen flex items-center pt-20">
    <div className="container-narrow w-full px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <AnimatedSection className="order-2 lg:order-1">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Derma Concept Academy
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            APRENDA, PRATIQUE, IMPACTE.
          </h1>
          <p className="text-xl md:text-2xl font-heading italic text-muted-foreground mb-10 leading-relaxed">
            Dermatologia que Transforma Carreiras e Pessoas.
          </p>
          <BorderBeamButton as="a" href="#contato">
            Quero saber mais
          </BorderBeamButton>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading">{stat.value}</p>
                <p className="text-xs tracking-wider uppercase text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Image */}
        <AnimatedSection className="order-1 lg:order-2" delay={0.2}>
          <div className="aspect-[4/5] overflow-hidden rounded">
            <img
              src={heroImg}
              alt="Procedimento estético de alta qualidade"
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default HeroSection;
