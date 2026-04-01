import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import aboutImg from "@/assets/about-clinic.jpg";

const AboutSection = () => (
  <section id="sobre" className="py-24 md:py-32 lg:py-40 bg-[#F8F5F1]">
    <div className="mx-auto max-w-7xl px-6 lg:px-20">
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-24 items-center">
        {/* Text */}
        <AnimatedSection>
          <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#9b9287] mb-5">
            Quem Somos
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-[#2C2926] mb-10">
            Sobre a Derma Concept Academy
          </h2>

          <div className="space-y-7 text-[#6b6560] leading-loose text-[15px] lg:text-base">
            <p>
              A Derma Concept Academy é um centro de excelência em formação médica na área de
              dermatologia, unindo teoria de alto nível a prática intensiva em ambiente moderno e
              seguro. Localizada em Belo Horizonte, a Academy oferece cursos exclusivos para médicos,
              fellows avançados e imersões hands-on com tecnologias de ponta, garantindo aprendizado
              completo e atualizado.
            </p>
            <p>
              Com infraestrutura premium, consultórios equipados e turmas reduzidas, a Derma Concept
              Academy proporciona atenção personalizada e experiências reais com pacientes modelo,
              permitindo que cada participante desenvolva habilidades práticas sob supervisão de
              especialistas renomados. Além de capacitar médicos, a Derma Concept Academy apoia a
              comunidade oferecendo procedimentos estéticos a preço de custo e procedimentos cirúrgicos
              gratuitos para pacientes modelo. A clínica também disponibiliza consultórios para locação,
              fortalecendo o ecossistema dermatológico da região.
            </p>
            <p>
              Nosso compromisso é formar profissionais altamente qualificados e contribuir para o avanço
              da dermatologia, sempre com inovação, ética e excelência.
            </p>
          </div>
        </AnimatedSection>

        {/* Image */}
        <AnimatedSection delay={0.2}>
          <div className="overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]">
            <img
              src={aboutImg}
              alt="Infraestrutura premium da Derma Concept Academy em Belo Horizonte"
              className="w-full h-full object-cover aspect-[4/5]"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
