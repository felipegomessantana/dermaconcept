import { useRef, useCallback, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
  { name: "Dra. Especialista 5", role: "Dermatologia Estética", image: teamMember5 },
  { name: "Dra. Especialista 6", role: "Bioestimuladores & Toxina", image: teamMember6 },
];

const TeamCard = ({ member }: { member: (typeof teamMembers)[0] }) => (
  <div className="group min-w-0">
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
      {/* Decorative SVG line */}
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

        {/* Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 lg:-ml-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4 lg:pl-6 min-w-0"
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
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
    </section>
  );
};

export default EquipeSection;
