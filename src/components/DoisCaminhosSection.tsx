import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";

const taupe = "#7A7168";

const cards = [
  {
    eyebrow: "Para quem busca cuidado",
    title: "Seja Paciente Modelo",
    description:
      "Procedimentos dermatológicos conduzidos por médicos especialistas, com condições especiais para quem participa do nosso programa de pacientes modelo.",
    cta: "Ver procedimentos",
    href: "#paciente-modelo",
    icon: Sparkles,
    primary: true,
  },
  {
    eyebrow: "Para quem quer aprender",
    title: "Quero ser Aluno",
    description:
      "Fellows, Workshops e Mentorias para médicos que buscam excelência em dermatologia estética e cirúrgica, com hands-on real e supervisão de referência.",
    cta: "Ver cursos",
    href: "#cursos",
    icon: GraduationCap,
    primary: false,
  },
];

const DoisCaminhosSection = () => {
  return (
    <section id="caminhos" className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Dois caminhos
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-foreground">
            Como podemos te receber hoje?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={card.href}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-8 md:p-10 lg:p-12 transition-all duration-500 hover:-translate-y-1 ${
                    card.primary
                      ? "border-transparent text-white"
                      : "border-border bg-card text-foreground hover:border-foreground/20"
                  }`}
                  style={
                    card.primary
                      ? { backgroundColor: taupe }
                      : undefined
                  }
                >
                  <div>
                    <div className="mb-8 flex items-center gap-3">
                      <Icon
                        size={20}
                        className={card.primary ? "text-white/80" : ""}
                        style={!card.primary ? { color: taupe } : undefined}
                      />
                      <span
                        className={`text-[11px] tracking-[0.3em] uppercase ${
                          card.primary ? "text-white/70" : "text-muted-foreground"
                        }`}
                      >
                        {card.eyebrow}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.1] mb-5">
                      {card.title}
                    </h3>

                    <p
                      className={`text-sm md:text-base leading-relaxed max-w-md ${
                        card.primary ? "text-white/85" : "text-muted-foreground"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div
                    className={`mt-10 flex items-center gap-2 text-sm font-medium tracking-[0.2em] uppercase ${
                      card.primary ? "text-white" : "text-foreground"
                    }`}
                  >
                    <span>{card.cta}</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DoisCaminhosSection;
