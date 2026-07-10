import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const taupe = "#7A7168";

const esteticos = [
  { label: "Preenchimento com Ácido Hialurônico", href: "/paciente-modelo/preenchimento-acido-hialuronico" },
  { label: "Toxina Botulínica", href: "/paciente-modelo/toxina-botulinica" },
  { label: "Bioestimuladores de Colágeno", href: "/paciente-modelo/bioestimuladores-colageno" },
  { label: "Fios de PDO", href: "/paciente-modelo/fios-de-pdo" },
  { label: "Peeling Químico", href: "/paciente-modelo/peeling-quimico" },
  { label: "Intradermoterapia", href: "/paciente-modelo/intradermoterapia" },
  { label: "Microagulhamento", href: "/paciente-modelo/microagulhamento" },
  { label: "Rejuvenescimento Íntimo", href: "/paciente-modelo/rejuvenescimento-intimo" },
  { label: "IPCA", href: "/paciente-modelo/ipca" },
];

const tecnologias = [
  { label: "YouLaser Prime (Laser CO2)", href: "/paciente-modelo/youse-laser-prime" },
  { label: "Etherea MX", href: "/paciente-modelo/etherea-mx" },
  { label: "Linear Z", href: "/paciente-modelo/linear-z" },
  { label: "Jato de Plasma", href: "/paciente-modelo/jato-de-plasma" },
  { label: "Mesoject Gun", href: "/paciente-modelo/mesoject-gun" },
];

const ProcedureItem = ({ label, href, index }: { label: string; href: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
  >
    <Link
      to={href}
      className="group flex items-center justify-between gap-4 border-b border-border/70 py-4 transition-colors hover:border-foreground/40"
    >
      <span className="font-serif text-base md:text-lg text-foreground transition-colors group-hover:text-foreground">
        {label}
      </span>
      <ArrowUpRight
        size={18}
        className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        style={{ color: taupe }}
      />
    </Link>
  </motion.div>
);

const PacienteModeloSection = () => {
  return (
    <section
      id="paciente-modelo"
      className="py-24 md:py-32 lg:py-40"
      style={{ backgroundColor: "#F8F5F1" }}
    >
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12 lg:mb-20">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Programa de Pacientes Modelo
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-5 leading-[1.15]">
            Procedimentos com nossos especialistas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base lg:text-lg leading-relaxed">
            Participe do nosso programa e tenha acesso a procedimentos dermatológicos
            estéticos e tecnologias de ponta, conduzidos com supervisão médica
            especializada.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Dermatologia Estética
            </p>
            <div>
              {esteticos.map((p, i) => (
                <ProcedureItem key={p.label} {...p} index={i} />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Tecnologias
            </p>
            <div>
              {tecnologias.map((p, i) => (
                <ProcedureItem key={p.label} {...p} index={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contato"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-medium tracking-[0.2em] uppercase text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{ backgroundColor: taupe }}
          >
            Quero ser paciente modelo
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PacienteModeloSection;
