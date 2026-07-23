import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BorderBeamButton } from "@/components/ui/border-beam-button";

const FellowCTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-3xl px-6 text-center lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]"
        >
          Garanta agora mesmo seu aprimoramento profissional
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-heading text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl"
        >
          Vagas Limitadas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-neutral-500"
        >
          (31) 98244-9473. Clique no botão abaixo para falar conosco via WhatsApp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex justify-center"
        >
          <BorderBeamButton as="a" href="https://wa.me/5531982449473">
            Falar no WhatsApp
          </BorderBeamButton>
        </motion.div>
      </div>
    </section>
  );
};

export default FellowCTA;
