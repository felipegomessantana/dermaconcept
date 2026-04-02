import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { BorderBeamButton } from "./ui/border-beam-button";
import aboutRecepcao from "@/assets/about-recepcao.jpg";
import aboutSalaAula from "@/assets/about-sala-aula.jpg";
import aboutSalaProcedimentos from "@/assets/about-sala-procedimentos.jpg";

const slides = [
  { src: aboutRecepcao, alt: "Recepção premium da Derma Concept Academy" },
  { src: aboutSalaAula, alt: "Sala de aula da Derma Concept Academy" },
  { src: aboutSalaProcedimentos, alt: "Sala de procedimentos da Derma Concept Academy" },
];

const AboutSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
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

            <Link to="/quem-somos" className="mt-8 inline-block">
              <BorderBeamButton as="a">
                Conheça Nossa História
              </BorderBeamButton>
            </Link>
          </AnimatedSection>

          {/* Image Slider */}
          <AnimatedSection delay={0.2}>
            <div className="relative overflow-hidden rounded-2xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[4/5]">
                {slides.map((slide, i) => (
                  <img
                    key={i}
                    src={slide.src}
                    alt={slide.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      i === current ? "opacity-100" : "opacity-0"
                    }`}
                    loading={i === 0 ? "eager" : "lazy"}
                    width={1280}
                    height={720}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm text-[#2C2926] hover:bg-white transition-colors"
                aria-label="Imagem anterior"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/70 backdrop-blur-sm text-[#2C2926] hover:bg-white transition-colors"
                aria-label="Próxima imagem"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-white" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Ir para imagem ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
