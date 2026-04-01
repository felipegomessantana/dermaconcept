import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NossaHistoriaSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-24 bg-[#F8F5F1]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-6 lg:px-16"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
          Nossa História
        </p>
        <div className="columns-1 md:columns-2 gap-10 text-base md:text-lg leading-relaxed text-muted-foreground">
          <p className="mb-6">
            A Derma Concept Academy é um centro de excelência em formação médica
            na área de dermatologia, unindo teoria de alto nível a prática
            intensiva em ambiente moderno e seguro. Localizada em Belo Horizonte,
            a Academy oferece cursos exclusivos para médicos, fellows avançados e
            imersões hands-on com tecnologias de ponta.
          </p>
          <p>
            Com infraestrutura premium, consultórios equipados e turmas
            reduzidas, proporcionamos atenção personalizada e experiências reais
            com pacientes modelo, permitindo que cada participante desenvolva
            habilidades práticas sob supervisão de especialistas renomados.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default NossaHistoriaSection;
