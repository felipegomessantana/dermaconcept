import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, type LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BorderBeamButton } from "@/components/ui/border-beam-button";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export interface ProcedureBenefit {
  icon: LucideIcon;
  text: React.ReactNode;
}

export interface ProcedureArea {
  label: string;
  icon?: LucideIcon;
}

export interface ProcedurePageData {
  title: React.ReactNode;
  subtitle: string;
  intro: React.ReactNode;
  equipmentImages?: string[];
  beforeAfter?: { before: string; after: string; label?: string }[];
  benefits?: ProcedureBenefit[];
  benefitsTitle?: string;
  areas?: ProcedureArea[];
  areasTitle?: string;
  indications?: { category: string; items: string[] }[];
  callout?: { title: string; text?: string; items?: string[] };
  extraSections?: { title: string; content: React.ReactNode }[];
  closingTitle?: string;
  closingText?: string;
}

const TAUPE = "#7A7168";

function EquipmentSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(next, 3500);
    return () => clearInterval(interval);
  }, [next, images.length]);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-[3/4]">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Equipamento"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6" : "w-2 opacity-50"}`}
              style={{ backgroundColor: TAUPE }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProcedurePageLayout({ data }: { data: ProcedurePageData }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#FAF8F5]">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <motion.p
            {...fadeUp(0)}
            className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
            style={{ color: TAUPE }}
          >
            Seja um Paciente Modelo
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight"
          >
            {data.title}
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 text-lg md:text-xl italic text-gray-500 leading-relaxed"
          >
            {data.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Intro + Equipment Slider */}
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl mx-auto px-6">
          <div className={`grid gap-10 ${data.equipmentImages && data.equipmentImages.length > 0 ? "grid-cols-1 md:grid-cols-2 items-center" : "grid-cols-1 max-w-3xl mx-auto"}`}>
            <motion.div
              {...fadeUp(0.1)}
              className="text-base md:text-lg text-gray-600 leading-relaxed space-y-4"
            >
              {data.intro}
            </motion.div>
            {data.equipmentImages && data.equipmentImages.length > 0 && (
              <motion.div {...fadeUp(0.2)}>
                <EquipmentSlider images={data.equipmentImages} />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Before & After */}
      {data.beforeAfter && data.beforeAfter.length > 0 && (
        <section className="py-16 md:py-20 bg-[#FAF8F5]">
          <div className="container max-w-3xl mx-auto px-6">
            <motion.h2
              {...fadeUp(0)}
              className="font-serif text-2xl md:text-3xl text-gray-900 mb-10 text-center"
            >
              Resultados Reais
            </motion.h2>
            <div className="space-y-8">
              {data.beforeAfter.map((pair, i) => (
                <motion.div key={i} {...fadeUp(0.1 * i)}>
                  {pair.label && (
                    <p className="text-sm font-medium text-gray-500 mb-3 text-center">{pair.label}</p>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="overflow-hidden rounded-xl shadow-sm">
                        <img src={pair.before} alt="Antes" className="w-full h-auto object-cover" />
                      </div>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-widest" style={{ color: TAUPE }}>Antes</p>
                    </div>
                    <div className="text-center">
                      <div className="overflow-hidden rounded-xl shadow-sm">
                        <img src={pair.after} alt="Depois" className="w-full h-auto object-cover" />
                      </div>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-widest" style={{ color: TAUPE }}>Depois</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {data.benefits && data.benefits.length > 0 && (
        <section className="py-16 md:py-20 bg-[#FAF8F5]">
          <div className="container max-w-3xl mx-auto px-6">
            <motion.h2
              {...fadeUp(0)}
              className="font-serif text-2xl md:text-3xl text-gray-900 mb-10"
            >
              {data.benefitsTitle || "O que transformamos"}
            </motion.h2>
            <div className="space-y-5">
              {data.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.05 * i)}
                  className="flex items-start gap-4"
                >
                  <b.icon className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: TAUPE }} />
                  <p className="text-gray-700 leading-relaxed">{b.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Indications */}
      {data.indications && data.indications.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container max-w-5xl mx-auto px-6">
            <motion.h2
              {...fadeUp(0)}
              className="font-serif text-2xl md:text-3xl text-gray-900 mb-10 text-center"
            >
              Indicações
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.indications.map((cat, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.1 * i)}
                  className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden"
                >
                  <div className="h-1" style={{ backgroundColor: TAUPE }} />
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-gray-900 mb-4">{cat.category}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: TAUPE }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Areas */}
      {data.areas && data.areas.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container max-w-3xl mx-auto px-6">
            <motion.h2
              {...fadeUp(0)}
              className="font-serif text-2xl md:text-3xl text-gray-900 mb-10"
            >
              {data.areasTitle || "Áreas de Aplicação"}
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {data.areas.map((a, i) => (
                <motion.div
                  key={i}
                  {...fadeUp(0.04 * i)}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm"
                >
                  {a.icon ? (
                    <a.icon className="h-4 w-4 flex-shrink-0" style={{ color: TAUPE }} />
                  ) : (
                    <Sparkles className="h-4 w-4 flex-shrink-0" style={{ color: TAUPE }} />
                  )}
                  <span className="text-sm text-gray-700">{a.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Extra Sections */}
      {data.extraSections?.map((section, i) => (
        <section key={i} className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-[#FAF8F5]" : ""}`}>
          <div className="container max-w-3xl mx-auto px-6">
            <motion.h2
              {...fadeUp(0)}
              className="font-serif text-2xl md:text-3xl text-gray-900 mb-8"
            >
              {section.title}
            </motion.h2>
            <motion.div {...fadeUp(0.1)} className="text-gray-600 leading-relaxed space-y-4">
              {section.content}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Callout */}
      {data.callout && (
        <section className="py-16 md:py-20 bg-[#FAF8F5]">
          <div className="container max-w-3xl mx-auto px-6">
            <motion.div
              {...fadeUp(0)}
              className="rounded-2xl border-l-4 bg-white p-8 md:p-10 shadow-sm"
              style={{ borderColor: TAUPE }}
            >
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 mb-4">
                {data.callout.title}
              </h3>
              {data.callout.text && (
                <p className="text-gray-600 leading-relaxed mb-4">{data.callout.text}</p>
              )}
              {data.callout.items && (
                <ul className="space-y-3">
                  {data.callout.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" style={{ color: TAUPE }} />
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            {...fadeUp(0)}
            className="font-serif text-2xl md:text-3xl text-gray-900 mb-4"
          >
            {data.closingTitle || "Dê o primeiro passo"}
          </motion.h2>
          <motion.p
            {...fadeUp(0.1)}
            className="text-gray-500 mb-8 max-w-lg mx-auto leading-relaxed"
          >
            {data.closingText || "Agende sua avaliação com nossos especialistas e descubra o melhor tratamento para você."}
          </motion.p>
          <motion.div {...fadeUp(0.2)}>
            <BorderBeamButton
              as="a"
              href="https://wa.me/5531982449473"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende sua avaliação
            </BorderBeamButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
