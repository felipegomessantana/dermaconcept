import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Clock, Users, Video, Building2, MapPin } from "lucide-react";
import { BorderBeamButton } from "./ui/border-beam-button";

const taupe = "#7A7168";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

const formats = [
  { icon: Video, text: "1:1 online (sessões de 60-90min)" },
  { icon: Building2, text: "Presencial na Academy (meio período ou dia inteiro)" },
  { icon: MapPin, text: "In loco (consulte disponibilidade)" },
];

const MentoriaSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef<HTMLDivElement>(null);
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
              className="font-heading text-3xl font-bold leading-tight tracking-tight text-[hsl(var(--foreground))] sm:text-4xl lg:text-[2.75rem]"
            >
              Mentoria em Dermatologia Estética{" "}
              <span className="italic font-normal">&amp; Cirurgia Dermatológica</span>
            </motion.h2>

            {/* Intro paragraphs */}
            <motion.div
              {...fadeUp(0.2)}
              animate={inView ? fadeUp(0.2).animate : {}}
              className="mt-6 max-w-xl space-y-4"
            >
              <p className="text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
                O aluno que busca aperfeiçoar suas técnicas ou aprender algo novo, esse é o curso ideal!
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground lg:text-[15px]">
                Totalmente personalizado para suprir a necessidade do aluno e com um professor altamente qualificado e experiente ao seu lado, podendo ter ou não aula teórica!
              </p>
            </motion.div>

            {/* Callout: Duration & capacity */}
            <motion.div
              {...fadeUp(0.3)}
              animate={inView ? fadeUp(0.3).animate : {}}
              className="mt-8"
            >
              <div
                className="inline-flex items-center gap-6 rounded-xl px-6 py-4 border"
                style={{ backgroundColor: "#F8F5F1", borderColor: "hsl(35, 10%, 85%)" }}
              >
                <div className="flex items-center gap-2.5">
                  <Clock size={18} style={{ color: taupe }} />
                  <span className="text-sm font-semibold text-foreground">8 horas</span>
                </div>
                <div className="h-5 w-px bg-border" />
                <div className="flex items-center gap-2.5">
                  <Users size={18} style={{ color: taupe }} />
                  <span className="text-sm font-semibold text-foreground">No máximo 2 alunos</span>
                </div>
              </div>
            </motion.div>

            {/* Formatos */}
            <motion.div
              {...fadeUp(0.4)}
              animate={inView ? fadeUp(0.4).animate : {}}
              className="mt-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: taupe }}>
                Formatos
              </p>
              <div className="mt-5 flex flex-col gap-4">
                {formats.map((f) => (
                  <div key={f.text} className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: "#F8F5F1" }}
                    >
                      <f.icon size={16} style={{ color: taupe }} />
                    </div>
                    <span className="text-sm text-muted-foreground lg:text-[15px]">{f.text}</span>
                  </div>
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
