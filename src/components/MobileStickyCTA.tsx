import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, GraduationCap } from "lucide-react";

const taupe = "#7A7168";

const MobileStickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      // show after first viewport, hide near footer
      setVisible(y > window.innerHeight * 0.7 && y < max - 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-border bg-white/95 backdrop-blur-md"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        >
          <div className="grid grid-cols-2 gap-2 p-3">
            <a
              href="#paciente-modelo"
              onClick={handleClick("paciente-modelo")}
              className="flex items-center justify-center gap-2 rounded-xl px-3 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-white"
              style={{ backgroundColor: taupe }}
            >
              <Sparkles size={14} />
              Paciente Modelo
            </a>
            <a
              href="#cursos"
              onClick={handleClick("cursos")}
              className="flex items-center justify-center gap-2 rounded-xl border border-foreground/80 px-3 py-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-foreground"
            >
              <GraduationCap size={14} />
              Cursos
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;
