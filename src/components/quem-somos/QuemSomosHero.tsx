import { motion } from "framer-motion";
import heroTeam from "@/assets/hero-team.webp";

const QuemSomosHero = () => (
  <section className="relative min-h-[85vh] flex items-end overflow-hidden pt-24">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroTeam}
        alt="Equipe Derma Concept Academy"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pb-20 md:pb-28 w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm tracking-[0.3em] uppercase text-white/70 mb-5"
      >
        Quem Somos
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6 max-w-3xl"
      >
        Formando a próxima geração da dermatologia
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl"
      >
        A Derma Concept Academy nasceu da paixão por ensinar e da busca incansável
        pela excelência em dermatologia clínica, estética e cirúrgica.
      </motion.p>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 -mx-6 lg:-mx-16 overflow-hidden"
      >
        <div
          className="flex gap-8 whitespace-nowrap animate-marquee-left"
          style={{ width: "max-content" }}
        >
          {[...Array(2)].map((_, dupeIdx) => (
            <div key={dupeIdx} className="flex gap-8">
              {[
                "Excelência Clínica",
                "Prática Intensiva",
                "Corpo Docente Especializado",
                "Pacientes Reais",
                "Formação Completa",
                "Inovação Constante",
              ].map((text) => (
                <span
                  key={`${dupeIdx}-${text}`}
                  className="text-xs tracking-[0.25em] uppercase text-white/40 flex items-center gap-8"
                >
                  {text}
                  <span className="inline-block h-1 w-1 rounded-full bg-white/30" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default QuemSomosHero;
