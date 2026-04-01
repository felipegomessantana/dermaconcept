import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";
import { BorderBeamButton } from "./ui/border-beam-button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const deliverables = [
  { term: "Diagnóstico 360º", desc: "avaliação de lacunas técnicas, fluxos, protocolos e portfólio." },
  { term: "Plano de evolução", desc: "trilha personalizada com metas e milestones." },
  { term: "Casos guiados", desc: "discussão de casos reais, tomada de decisão e manejo de intercorrências." },
  { term: "Suporte prático", desc: "shadowing na Academy ou in loco (consultório do médico) por agenda." },
  { term: "Negócio & posicionamento", desc: "precificação, montagem de combos, comunicação ética." },
];

const formats = [
  "1:1 online (sessões de 60-90min)",
  "Presencial na Academy (meio período ou dia inteiro)",
  "In loco (consulte disponibilidade)",
];

const MentoriaSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-24 lg:py-32">
      {/* Subtle organic background lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mentoria-lines" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M0 60 Q30 40 60 60 T120 60" fill="none" stroke="#8B7D6B" strokeWidth="1" />
              <path d="M0 90 Q30 70 60 90 T120 90" fill="none" stroke="#8B7D6B" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mentoria-lines)" />
        </svg>
      </div>

      <div ref={ref} className="container-narrow relative z-10 px-6 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left — Video placeholder (1/3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[9/16] w-full max-w-[280px] cursor-pointer overflow-hidden rounded-2xl bg-black shadow-lg lg:mx-0"
            onClick={() => {
              if (videoRef.current) {
                if (playing) {
                  videoRef.current.pause();
                } else {
                  videoRef.current.play();
                }
                setPlaying(!playing);
              }
            }}
          >
            <video
              ref={videoRef}
              src="https://dermaconcept.com.br/wp-content/uploads/2025/10/SaveClip.App_AQNIAHYmeSPzW7Rx6AxWPRnG39Oxf1oYikqvQVM86WnNyAfTl4F9LRJHJmomejY0OaBfFnr5teCmI3j_t9-Q4r9ER7M_Xu9wHq3eZp0.mp4"
              className="h-full w-full object-cover"
              loop
              muted
              playsInline
              preload="metadata"
            />

            {/* Play button overlay */}
            {!playing && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-300 hover:scale-110">
                  <Play size={24} className="ml-1 text-white/90" fill="currentColor" />
                </div>
              </div>
            )}

            {/* Bottom label */}
            {!playing && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-4 pt-10">
                <p className="text-[10px] font-medium uppercase tracking-widest text-white/60">
                  Mentoria em ação
                </p>
              </div>
            )}
          </motion.div>

          {/* Right — Content (2/3) */}
          <div className="lg:col-span-2">
            <motion.h2
              {...fadeUp(0.1)}
              animate={inView ? fadeUp(0.1).animate : {}}
              className="font-heading text-3xl font-bold leading-tight tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-[2.75rem]"
            >
              Mentoria Clínica &amp; Cirúrgica{" "}
              <span className="italic font-normal">sob Medida</span>
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              animate={inView ? fadeUp(0.2).animate : {}}
              className="mt-5 max-w-xl text-base leading-relaxed text-neutral-500 lg:text-lg"
            >
              Acelere seus resultados com um plano individual, foco nos seus
              casos, na sua estrutura e no seu momento de carreira.
            </motion.p>

            {/* O que entregamos */}
            <motion.div
              {...fadeUp(0.3)}
              animate={inView ? fadeUp(0.3).animate : {}}
              className="mt-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7A7168]">
                O que entregamos
              </p>
              <div className="mt-5 flex flex-col gap-3.5">
                {deliverables.map((d) => (
                  <p key={d.term} className="text-sm leading-relaxed text-neutral-500 lg:text-[15px]">
                    <span className="font-semibold text-[#1A1A1A]">{d.term}:</span>{" "}
                    {d.desc}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Formatos */}
            <motion.div
              {...fadeUp(0.4)}
              animate={inView ? fadeUp(0.4).animate : {}}
              className="mt-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7A7168]">
                Formatos
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {formats.map((f) => (
                  <p key={f} className="text-sm text-neutral-500 lg:text-[15px]">{f}</p>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              {...fadeUp(0.5)}
              animate={inView ? fadeUp(0.5).animate : {}}
              className="mt-10"
            >
              <BorderBeamButton as="a" href="/mentoria-individual">
                Quero uma mentoria sob medida
              </BorderBeamButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoriaSection;
