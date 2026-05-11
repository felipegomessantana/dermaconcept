import { useRef, useCallback, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Instagram, Linkedin, GraduationCap, Sparkles, Compass } from "lucide-react";

import teamMember1 from "@/assets/team-member-1.webp";
import teamMember2 from "@/assets/team-member-2.webp";
import teamMember3 from "@/assets/team-member-3.webp";
import teamMember4 from "@/assets/team-member-4.webp";
import teamMember5 from "@/assets/team-member-5.webp";
import teamMember6 from "@/assets/team-member-6.webp";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  specialties: string[];
  bio: string[];
  formation?: string[];
  purpose?: string;
  curiosities?: string | string[];
  credentials?: string;
  social?: { instagram?: string; linkedin?: string; lattes?: string };
};

const teamMembers: TeamMember[] = [
  {
    name: "Dra. Especialista 1",
    role: "Dermatologia · Cirurgia Dermatológica",
    image: teamMember1,
    specialties: ["Cirurgia Dermatológica", "Cosmiatria", "Laser"],
    bio: [],
    formation: [
      "Formada na turma de 2009 da faculdade de Medicina de Teresópolis - RJ",
      "Especialista pela Sociedade Brasileira de Dermatologia e de Cirurgia Dermatológica",
      "Certificada no Curso de aperfeiçoamento em Cirurgia Dermatológica , Cosmiatria e Laser pela Sociedade brasileira Dermatológica",
    ],
    purpose: "Acolhimento e segurança são os propósitos com meu paciente.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Dra. Especialista 2",
    role: "Cirurgia Dermatológica",
    image: teamMember2,
    credentials: "CRM 00000 / RQE 0000",
    specialties: ["Cirurgia Dermatológica", "Oncologia Cutânea", "Reconstrução"],
    bio: ["Adicione aqui a biografia completa da médica."],
    social: { instagram: "#" },
  },
  {
    name: "Dr. Paulo Henrique Pimentel",
    role: "Dermatologia Clínica, Cirúrgica e Estética",
    image: teamMember3,
    credentials: "CRM-MG: 57.394",
    specialties: ["Dermatologia Clínica", "Dermatologia Cirúrgica", "Dermatologia Estética", "Preceptoria"],
    bio: [
      "Médico com atuação em dermatologia clínica, cirúrgica e estética, com formação complementar em procedimentos avançados e tecnologias dermatológicas. Atua também como preceptor e professor em programas de pós-graduação, com foco em ensino prático baseado em evidência e desenvolvimento de raciocínio clínico aplicado.",
    ],
    purpose:
      "Transformar a dermatologia por meio de um cuidado ético, técnico e acessível, formando profissionais mais preparados e seguros para a prática clínica.",
    curiosities: [
      "Apaixonado por ensino e formação de novos especialistas",
      "Valoriza atendimento humanizado e individualizado",
      "Tem grande interesse em inovação e tecnologia aplicada à dermatologia",
    ],
    social: { instagram: "#" },
  },
  {
    name: "Dr. Leonardo Almeida",
    role: "Dermatologia",
    image: teamMember4,
    specialties: ["Oncologia Cutânea", "Cirurgia Dermatológica", "Cosmiatria", "Transplante Capilar"],
    bio: [],
    formation: [
      "Médico pela Universidade Federal de Minas Gerais (UFMG)",
      "Residência Médica em Dermatologia HC-UFMG",
      "Fellow em Oncologia Cutânea e Cirurgia Dermatológica HC-UFMG",
      "Fellow em Cosmiatria na Santa Casa do RJ",
      "Membro titular SBD",
    ],
    purpose:
      "Prezo por exercer uma dermatologia completa com excelência técnica e sensibilidade, promovendo resultados que respeitam a individualidade e elevam a qualidade de vida de cada paciente",
    curiosities:
      "Sou fascinado por viagens, experiências e culturas diferentes - sempre arrumo uma desculpa para uma viagem. Meu maior medo é ficar careca e, por isso, me aprofundei nos estudos dos cabelos e no transplante capilar.",
    social: { instagram: "#", linkedin: "#" },
  },
  {
    name: "Dra. Karolina Lavagnoli Colombo",
    role: "Dermatologia",
    image: teamMember5,
    credentials: "CRM MG 62755 · RQE 55681",
    specialties: ["Dermatologia Clínica", "Dermatologia Estética", "Preceptoria"],
    bio: [],
    formation: [
      "Formada em Medicina na Santa Casa de Misericórdia de Vitória-ES.",
      "Pós-graduação em Dermatologia pelo Instituto Superior de Medicina (ISMD) de Belo Horizonte.",
      "Membro Titular da Sociedade Brasileira de Dermatologia (SBD).",
      "Quase 10 anos de atuação como preceptora em pós-graduação de Dermatologia.",
    ],
    purpose:
      "Promover beleza com ciência e sutileza ao meu paciente! “Elegância é recusa!” Coco Chanel",
    curiosities:
      "Sou muito família, sou esposa, mãe do Benjamin e do meu golden Chico 🐶; apaixonada por viagens e conhecer novas culturas; adoro esportes! Joguei handebol durante todo ensino fundamental, médio e faculdade! No momento me descobrindo e encantada com o tênis!",
    social: { instagram: "#" },
  },
  {
    name: "Dra. Especialista 6",
    role: "Bioestimuladores & Toxina",
    image: teamMember6,
    credentials: "CRM 00000 / RQE 0000",
    specialties: ["Bioestimuladores", "Toxina Botulínica", "Fios de PDO"],
    bio: ["Adicione aqui a biografia completa da médica."],
    social: { instagram: "#" },
  },
];

const TeamCard = ({ member, onClick }: { member: TeamMember; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className="group min-w-0 text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A7168] rounded-2xl"
    aria-label={`Ver currículo de ${member.name}`}
  >
    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4">
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="absolute bottom-4 left-4 right-4 text-white text-xs tracking-[0.25em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        Ver currículo →
      </span>
    </div>
    <h3 className="font-serif text-lg text-foreground mb-0.5">{member.name}</h3>
    <p className="text-sm text-muted-foreground">{member.role}</p>
  </button>
);

const EquipeSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const autoplayPlugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 1 },
      },
    },
    [autoplayPlugin.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-secondary/30 overflow-hidden relative">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 600"
      >
        <path d="M0 300 Q360 100 720 300 T1440 300" fill="none" stroke="#7A7168" strokeWidth="2" />
        <path d="M0 350 Q360 150 720 350 T1440 350" fill="none" stroke="#7A7168" strokeWidth="1.5" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
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

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 lg:-ml-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4 lg:pl-6 min-w-0"
              >
                <TeamCard member={member} onClick={() => setActiveMember(member)} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 bg-[#7A7168]"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CV Modal */}
      <Dialog open={!!activeMember} onOpenChange={(open) => !open && setActiveMember(null)}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 overflow-hidden border-none bg-background">
          {activeMember && (
            <div className="grid md:grid-cols-[42%_58%] max-h-[90vh] overflow-y-auto">
              {/* Photo side */}
              <div className="relative bg-secondary/40 md:min-h-[560px]">
                <img
                  src={activeMember.image}
                  alt={activeMember.name}
                  className="h-64 md:h-full w-full object-cover"
                />
              </div>

              {/* Content side */}
              <div className="p-8 md:p-10 lg:p-12">
                <span className="text-xs tracking-[0.3em] uppercase text-[#7A7168]">
                  {activeMember.role}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-1">
                  {activeMember.name}
                </h3>
                {activeMember.credentials && (
                  <p className="text-xs text-muted-foreground tracking-wider">
                    {activeMember.credentials}
                  </p>
                )}

                <div className="h-px w-12 bg-[#7A7168] my-6" />

                {/* Bio */}
                {activeMember.bio.length > 0 && (
                  <div className="space-y-4 text-sm md:text-base text-foreground/80 leading-relaxed">
                    {activeMember.bio.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}

                {/* Specialties */}
                <div className="mt-2">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="h-4 w-4 text-[#7A7168]" />
                    <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                      Especialidades
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeMember.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded-full bg-[#7A7168]/10 text-[#7A7168] text-xs tracking-wide"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Formação */}
                {activeMember.formation && activeMember.formation.length > 0 && (
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="h-4 w-4 text-[#7A7168]" />
                      <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                        Formação
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {activeMember.formation.map((item) => (
                        <li
                          key={item}
                          className="relative pl-4 text-sm text-foreground/80 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-[#7A7168]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Propósito */}
                {activeMember.purpose && (
                  <div className="mt-8 border-l-2 border-[#7A7168] pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className="h-4 w-4 text-[#7A7168]" />
                      <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                        Propósito
                      </span>
                    </div>
                    <p className="font-serif italic text-base md:text-lg text-foreground/90 leading-relaxed">
                      {activeMember.purpose}
                    </p>
                  </div>
                )}

                {/* Curiosidades */}
                {activeMember.curiosities && (
                  <div className="mt-8">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-[#7A7168]" />
                      <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                        Curiosidades
                      </span>
                    </div>
                    {Array.isArray(activeMember.curiosities) ? (
                      <ul className="space-y-2">
                        {activeMember.curiosities.map((item) => (
                          <li
                            key={item}
                            className="relative pl-4 text-sm text-foreground/80 leading-relaxed before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-[#7A7168]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {activeMember.curiosities}
                      </p>
                    )}
                  </div>
                )}


                {/* Social */}
                {activeMember.social && (
                  <div className="mt-8 flex items-center gap-3">
                    {activeMember.social.instagram && (
                      <a
                        href={activeMember.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-[#7A7168] hover:text-white hover:border-[#7A7168] transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-4 w-4" />
                      </a>
                    )}
                    {activeMember.social.linkedin && (
                      <a
                        href={activeMember.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground/70 hover:bg-[#7A7168] hover:text-white hover:border-[#7A7168] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EquipeSection;
