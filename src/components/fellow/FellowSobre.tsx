import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

type Highlight = { label: string; value: string; sub: string };

type FellowSobreProps = {
  eyebrow?: string;
  title: string;
  description: string;
  benefits?: string[];
  highlights?: Highlight[];
};

const FellowSobre = ({
  eyebrow = "Sobre o Curso",
  title,
  description,
  benefits = [],
  highlights = [],
}: FellowSobreProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-20 lg:py-28">
      <div ref={ref} className="container-narrow">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-[#7A7168]"
        >
          {eyebrow}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-5 max-w-3xl text-center font-heading text-3xl font-bold leading-snug tracking-tight text-[#1A1A1A] sm:text-4xl"
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-neutral-500 lg:text-lg"
        >
          {description}
        </motion.p>

        {benefits.length > 0 && (
          <ul className="mx-auto mt-12 max-w-3xl space-y-4">
            {benefits.map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#7A7168]" />
                <span className="text-sm leading-relaxed text-neutral-600 md:text-base">
                  {text}
                </span>
              </motion.li>
            ))}
          </ul>
        )}

        {highlights.length > 0 && (
          <div className="mt-16 grid grid-cols-1 gap-12 border-t border-neutral-100 pt-16 md:grid-cols-3 md:gap-8">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                className="text-center"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                  {item.label}
                </p>
                <p className="mt-3 font-heading text-3xl font-bold text-[#1A1A1A] sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-neutral-400">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FellowSobre;
