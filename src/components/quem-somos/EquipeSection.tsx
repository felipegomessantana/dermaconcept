import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import teamMember1 from "@/assets/team-member-1.webp";
import teamMember2 from "@/assets/team-member-2.webp";
import teamMember3 from "@/assets/team-member-3.webp";
import teamMember4 from "@/assets/team-member-4.webp";
import teamMember5 from "@/assets/team-member-5.webp";
import teamMember6 from "@/assets/team-member-6.webp";

const teamMembers = [
  { name: "Dra. Especialista 1", role: "Dermatologia Estética", image: teamMember1 },
  { name: "Dra. Especialista 2", role: "Cirurgia Dermatológica", image: teamMember2 },
  { name: "Dr. Especialista 3", role: "Dermatologia Clínica", image: teamMember3 },
  { name: "Dr. Leonardo Alves", role: "Dermatologia Avançada", image: teamMember4 },
  { name: "Dra. Especialista 5", role: "Tricologia", image: teamMember5 },
  { name: "Dra. Especialista 6", role: "Bioestimuladores & Toxina", image: teamMember6 },
];

const TeamCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
  <div className="flex-shrink-0 w-[280px] md:w-[320px] group">
    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <h3 className="font-serif text-lg text-foreground mb-0.5">{member.name}</h3>
    <p className="text-sm text-muted-foreground">{member.role}</p>
  </div>
);

const EquipeSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const doubled = [...teamMembers, ...teamMembers];

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-secondary/30 overflow-hidden relative">
      {/* Decorative SVG line */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
      >
        <path
          d="M0 300 Q360 100 720 300 T1440 300"
          fill="none"
          stroke="#7A7168"
          strokeWidth="2"
        />
        <path
          d="M0 350 Q360 150 720 350 T1440 350"
          fill="none"
          stroke="#7A7168"
          strokeWidth="1.5"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#7A7168]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Corpo Clínico e Docente
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base lg:text-lg">
            Conheça os especialistas renomados por trás da excelência da Derma Concept Academy.
          </p>
        </motion.div>
      </div>

      {/* Marquee carousel */}
      <div className="relative">
        <div
          className="flex gap-8 marquee-strip"
          style={{ width: "max-content" }}
        >
          {doubled.map((member, i) => (
            <TeamCard key={`${member.name}-${i}`} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipeSection;
