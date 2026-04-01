import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import teamPhoto from "@/assets/team-photo.webp";
import aboutClinic from "@/assets/about-clinic.jpg";

const team = [
  {
    name: "Dr. João Silva",
    role: "Diretor Clínico",
    specialty: "Dermatologia Estética",
    image: teamPhoto,
  },
  {
    name: "Dra. Maria Santos",
    role: "Coordenadora Acadêmica",
    specialty: "Cirurgia Dermatológica",
    image: aboutClinic,
  },
  {
    name: "Dr. Carlos Oliveira",
    role: "Professor Titular",
    specialty: "Tricologia",
    image: teamPhoto,
  },
  {
    name: "Dra. Ana Costa",
    role: "Professora Convidada",
    specialty: "Bioestimuladores & Toxina",
    image: aboutClinic,
  },
];

const MemberCard = ({
  member,
  index,
}: {
  member: (typeof team)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      {/* Photo */}
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-5">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Info */}
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-1">
        {member.specialty}
      </p>
      <h3 className="font-serif text-lg md:text-xl text-foreground mb-0.5">
        {member.name}
      </h3>
      <p className="text-sm text-muted-foreground">{member.role}</p>
    </motion.div>
  );
};

const EquipeSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Nossa Equipe
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Corpo Docente
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base lg:text-lg">
            Profissionais com vasta experiência clínica e acadêmica, dedicados a formar médicos de excelência.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
