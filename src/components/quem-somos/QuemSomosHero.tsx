import { motion } from "framer-motion";

const QuemSomosHero = () => (
  <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#F8F5F1]">
    <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
      >
        Quem Somos
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] max-w-4xl mx-auto"
      >
        Formando a próxima geração da dermatologia
      </motion.h1>
    </div>
  </section>
);

export default QuemSomosHero;
