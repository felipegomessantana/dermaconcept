import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface Lesson {
  tag: string;
  description: string;
}

interface ScheduleMonth {
  month: string;
  topic: string;
  lessons: Lesson[];
}

const schedule: ScheduleMonth[] = [
  {
    month: "Fevereiro",
    topic: "Anatomia, Toxina e Bioestimuladores",
    lessons: [
      { tag: "Aula 01 - Teoria", description: "Anatomia, avaliação global da face e Toxina botulínica básica/avançada." },
      { tag: "Aula 02 - Prática", description: "Toxina botulínica." },
      { tag: "Aula 03 - Teoria", description: "Bioestimuladores de colágeno injetáveis." },
      { tag: "Aula 04 - Prática", description: "Bioestimuladores de colágeno injetáveis." },
    ],
  },
  {
    month: "Março",
    topic: "Ácido Hialurônico e Medicina Regenerativa",
    lessons: [
      { tag: "Aula 01 - Teoria", description: "Preenchimento com ácido hialurônico facial." },
      { tag: "Aula 02 - Prática", description: "Preenchimento com ácido hialurônico facial." },
      { tag: "Aula 03 - Teoria + Prática", description: "Ácido hialurônico não reticulado (Profhilo/Saypha) e Medicina Regenerativa (PDRN e Exossomas)." },
      { tag: "Aula 04 - Prática", description: "Mix: Toxina + Bioestimuladores + Preenchimento + Regeneradores." },
    ],
  },
  {
    month: "Abril",
    topic: "Peelings e Cicatriz de Acne",
    lessons: [
      { tag: "Aula 01 - Teoria", description: "Peelings médicos." },
      { tag: "Aula 02 - Prática", description: "Peelings médicos." },
      { tag: "Aula 03 - Teoria", description: "Tratamento de cicatriz de acne - IPCA." },
      { tag: "Aula 04 - Prática", description: "Tratamento de cicatriz de acne - IPCA." },
    ],
  },
  {
    month: "Maio",
    topic: "Fios e Corporal",
    lessons: [
      { tag: "Aula 01 - Teoria + Prática", description: "Microagulhamento, MMP, Dermapen, Emptiers e Mesoterapia." },
      { tag: "Aula 03 - Teoria + Prática", description: "Fios PDO (liso e tração)." },
      { tag: "Aula 04 - Teoria + Prática", description: "Tratamentos corporais (tecnologias e injetáveis)." },
    ],
  },
  {
    month: "Junho",
    topic: "Tecnologias e Ultrassom",
    lessons: [
      { tag: "Aula 01 - Teoria", description: "Dermocosméticos." },
      { tag: "Aula 02 - Prática", description: "Mix de todos os procedimentos." },
      { tag: "Aula 03 - Teoria + Prática", description: "Tecnologias (Laser CO2, Etherea, Mesojectgun, Jato de Plasma)." },
      { tag: "Aula 04 - Teoria + Prática", description: "Ácido hialurônico avançado guiado por ultrassom dermatológico." },
    ],
  },
  {
    month: "Julho",
    topic: "Íntimo, Gestão e Encerramento",
    lessons: [
      { tag: "Aula 01 - Teoria + Prática", description: "Rejuvenescimento íntimo (laser e injetáveis)." },
      { tag: "Aula 02 - Teoria", description: "Gestão de consultório." },
      { tag: "Aula 03 - Prática", description: "Mix de todos os procedimentos." },
      { tag: "Aula 04 - Teoria", description: "Complicações de injetáveis + Entrega de certificados." },
    ],
  },
];

const AccordionItem = ({
  item,
  index,
  open,
  onToggle,
}: {
  item: ScheduleMonth;
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
        <span className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-400 transition-colors duration-200">
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
            <div className="pb-8 pl-0 lg:pl-8">
              <div className="flex flex-col gap-4">
                {item.lessons.map((lesson, li) => (
                  <div key={li} className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-2">
                    <span className="text-sm font-medium text-[#7A7168] lg:text-[15px]">
                      {lesson.tag}:
                    </span>
                    <span className="text-sm leading-relaxed text-neutral-500 lg:text-[15px]">
                      {lesson.description}
                    </span>
                  </div>
                ))}
              </div>
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
