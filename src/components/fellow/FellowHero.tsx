import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export type FellowInfoItem = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export type FellowHeroProps = {
  badge?: string;
  title: React.ReactNode;
  description: string;
  meta?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  infoItems: FellowInfoItem[];
};

const FellowHero = ({
  badge = "Exclusivo para Médicos",
  title,
  description,
  meta = "Vagas limitadas",
  primaryCta = { label: "Quero me Inscrever", href: "https://wa.me/5531982449473" },
  secondaryCta,
  infoItems,
}: FellowHeroProps) => (
  <section className="relative bg-[#F8F5F1] pt-28 pb-16 lg:pt-32 lg:pb-20">
    <div className="container-narrow">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <motion.span
            {...fadeUp(0.1)}
            className="mb-6 inline-block w-fit rounded-full border border-[#B8A99A]/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7A7168]"
          >
            {badge}
          </motion.span>

          <motion.h1
            {...fadeUp(0.25)}
            className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-[3.5rem]"
          >
            {title}
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="mt-8 max-w-lg text-base leading-relaxed text-neutral-500 lg:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            {...fadeUp(0.55)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={primaryCta.href}
              target={primaryCta.href.startsWith("http") ? "_blank" : undefined}
              rel={primaryCta.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center rounded-xl bg-[#1A1A1A] px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-white shadow-sm transition-all duration-300 hover:bg-[#333]"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-[#B8A99A]/50 px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-[#7A7168] transition-all duration-300 hover:border-[#7A7168] hover:text-[#1A1A1A]"
              >
                {secondaryCta.label}
              </a>
            )}
          </motion.div>

          <motion.p
            {...fadeUp(0.7)}
            className="mt-8 text-xs tracking-wide text-neutral-400"
          >
            {meta}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-neutral-200/60 bg-white p-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] lg:p-12"
        >
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7A7168]">
            Informações Principais
          </p>

          <div className="flex flex-col gap-6">
            {infoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                    <Icon size={15} strokeWidth={1.8} className="text-[#9A8D7F]" />
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-widest text-neutral-400">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-base font-medium text-[#1A1A1A]">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FellowHero;
