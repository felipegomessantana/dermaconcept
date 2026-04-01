import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const schedule = [
  { month: "Fevereiro", topic: "Anatomia, Toxina e Bioestimuladores" },
  { month: "Março", topic: "Ácido Hialurônico e Medicina Regenerativa" },
  { month: "Abril", topic: "Peelings e Cicatriz de Acne" },
  { month: "Maio", topic: "Tricologia, Fios e Corporal" },
  { month: "Junho", topic: "Tecnologias e Ultrassom" },
  { month: "Julho", topic: "Íntimo, Gestão e Encerramento" },
];

const AccordionItem = ({
  item,
  index,
  open,
  onToggle,
}: {
  item: (typeof schedule)[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-neutral-200"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left transition-colors duration-200 hover:opacity-80 lg:py-8"
      >
        <div className="flex items-baseline gap-4 lg:gap-8">
          <span className="font-heading text-lg font-bold text-[#1A1A1A] sm:text-xl lg:text-2xl">
            {item.month}
          </span>
          <span className="text-sm text-neutral-400 lg:text-base">
            {item.topic}
          </span>
        </div>
        <span className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-colors duration-200 group-hover:border-neutral-400">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-0 lg:pl-[calc(theme(spacing.8)+theme(fontSize.2xl))]">
              <p className="max-w-xl text-sm leading-relaxed text-neutral-500 lg:text-base">
                Neste módulo você estudará e praticará os temas de{" "}
                <span className="font-medium text-[#1A1A1A]">
                  {item.topic.toLowerCase()}
                </span>
                , com pacientes reais e supervisão direta dos preceptores.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FellowSemanalCronograma = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section id="cronograma" className="bg-[#F8F5F1] py-24 lg:py-32">
      <div ref={sectionRef} className="mx-auto max-w-4xl px-6 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]"
        >
          Cronograma de Aulas
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-5 text-center font-heading text-3xl font-bold tracking-tight text-[#1A1A1A] sm:text-4xl"
        >
          6 meses de imersão
        </motion.h2>

        <div className="mt-16">
          {schedule.map((item, i) => (
            <AccordionItem
              key={item.month}
              item={item}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FellowSemanalCronograma;
