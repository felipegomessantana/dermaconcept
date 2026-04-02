import { useRef, useCallback, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import img1 from "@/assets/estrutura/estrutura-recepcao.jpg";
import img2 from "@/assets/estrutura/estrutura-cafe.jpg";
import img3 from "@/assets/estrutura/estrutura-bar.jpg";
import img4 from "@/assets/estrutura/estrutura-lounge.jpg";
import img5 from "@/assets/estrutura/estrutura-lobby.jpg";
import img6 from "@/assets/estrutura/estrutura-varanda.jpg";
import img7 from "@/assets/estrutura/estrutura-recepcao2.jpg";
import img8 from "@/assets/estrutura/estrutura-sala-aula.jpg";
import img9 from "@/assets/estrutura/estrutura-procedimentos.jpg";
import img10 from "@/assets/estrutura/estrutura-procedimentos2.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const NossaEstruturaSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplayPlugin.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxPrev = () =>
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  const lightboxNext = () =>
    setLightboxIndex((prev) => (prev + 1) % images.length);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen]);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Infraestrutura
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Nossa Estrutura
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base lg:text-lg">
            Ambientes modernos e sofisticados, projetados para proporcionar a melhor experiência em ensino e prática clínica.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4 lg:-ml-6">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 lg:pl-6 min-w-0"
                >
                  <div
                    className="overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={src}
                      alt={`Estrutura da clínica ${i + 1}`}
                      className="aspect-video w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Slide anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/70 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white/90 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próximo slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/70 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white/90 transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
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
                  ? "w-6 bg-[hsl(var(--primary))]"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl w-[95vw] p-0 border-none bg-black/95 overflow-hidden [&>button]:text-white [&>button]:hover:opacity-100">
          <div className="relative flex items-center justify-center min-h-[50vh]">
            <img
              src={images[lightboxIndex]}
              alt={`Estrutura da clínica ${lightboxIndex + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain"
            />

            {/* Lightbox arrows */}
            <button
              onClick={lightboxPrev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={lightboxNext}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>

            {/* Counter */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {lightboxIndex + 1} / {images.length}
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NossaEstruturaSection;
