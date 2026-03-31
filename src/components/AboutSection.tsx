import AnimatedSection from "./AnimatedSection";
import aboutImg from "@/assets/about-clinic.jpg";

const AboutSection = () => (
  <section id="sobre" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="aspect-square overflow-hidden rounded">
            <img
              src={aboutImg}
              alt="Ambiente da Derma Concept Academy"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Quem Somos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
            Sobre a Academia
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              A Derma Concept Academy é um centro de excelência em educação dermatológica, 
              dedicado a formar profissionais de alto nível na área de dermatologia estética, 
              cirurgia dermatológica e tricologia.
            </p>
            <p>
              Com mais de 15 anos de experiência, nossa missão é proporcionar um ensino prático, 
              imersivo e de qualidade, onde o aluno aprende fazendo — com supervisão direta de 
              especialistas renomados e atendimento a pacientes reais.
            </p>
            <p>
              Nossos cursos são projetados para médicos que desejam se destacar no mercado, 
              oferecendo uma formação completa que une teoria de ponta com prática intensiva, 
              em um ambiente de aprendizado acolhedor e profissional.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
