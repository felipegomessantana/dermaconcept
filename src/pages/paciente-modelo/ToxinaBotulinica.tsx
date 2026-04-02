import { Sparkles, Eye, Smile, Target, Shield } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "Toxina Botulínica",
  subtitle: "Suavidade não é ausência de expressão. É controle, equilíbrio e sofisticação.",
  intro: (
    <>
      <p>A toxina botulínica é o procedimento estético mais realizado no mundo. Ela atua nas rugas dinâmicas — aquelas formadas pela contração muscular repetida — suavizando linhas de expressão e prevenindo o aprofundamento de marcas futuras.</p>
      <p>Na Derma Concept Academy, cada aplicação é precedida de uma avaliação detalhada da musculatura facial, garantindo um resultado harmonioso que preserva a expressividade natural do rosto.</p>
      <p>O planejamento é individualizado: levamos em conta a anatomia, o tipo de pele, os hábitos e os desejos de cada paciente. O resultado é um rosto descansado, natural e rejuvenescido — nunca congelado.</p>
    </>
  ),
  benefitsTitle: "O que tratamos",
  benefits: [
    { icon: Sparkles, text: "Suavização de rugas dinâmicas da testa, glabela e região periorbital." },
    { icon: Eye, text: "Elevação sutil das sobrancelhas para um olhar mais aberto e jovem." },
    { icon: Smile, text: "Correção do sorriso gengival e linhas ao redor da boca." },
    { icon: Target, text: "Tratamento da hiperidrose (suor excessivo) axilar e palmar." },
    { icon: Shield, text: "Prevenção do aprofundamento de linhas de expressão." },
  ],
  areasTitle: "Áreas de Aplicação",
  areas: [
    { label: "Testa" },
    { label: "Glabela" },
    { label: "Pés de galinha" },
    { label: "Sobrancelhas" },
    { label: "Nariz" },
    { label: "Queixo" },
    { label: "Pescoço" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Com técnica precisa e olhar atento, nossos especialistas garantem um resultado que respeita sua identidade facial. A beleza está nos detalhes — e é nos detalhes que fazemos a diferença.",
  },
};

export default function ToxinaBotulinica() {
  return <ProcedurePageLayout data={data} />;
}
