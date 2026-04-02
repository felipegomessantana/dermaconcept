import { Sparkles, Target, Layers, Shield, Palette } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: (<>MICROAGULHAMENTO<br /><span className="block">Cicatrizes, Linhas Finas e Textura</span></>),
  subtitle: "Cicatrizes de acne, linhas finas e textura.",
  intro: (
    <>
      <p>O microagulhamento é um procedimento que utiliza microagulhas para criar microperfurações controladas na pele, estimulando os processos naturais de cicatrização e remodelação. Isso resulta em aumento da produção de colágeno e elastina, melhorando significativamente a textura e a firmeza da pele.</p>
      <p>É especialmente eficaz no tratamento de cicatrizes de acne, linhas finas, poros dilatados e irregularidades de textura. Quando associado a ativos como fatores de crescimento ou vitaminas, os resultados são potencializados.</p>
      <p>Na Derma Concept Academy, o microagulhamento é realizado com equipamentos de última geração e protocolos personalizados para cada tipo de pele e necessidade.</p>
    </>
  ),
  benefitsTitle: "Benefícios do Tratamento",
  benefits: [
    { icon: Target, text: "Tratamento eficaz de cicatrizes de acne e marcas na pele." },
    { icon: Sparkles, text: "Estímulo à produção de colágeno e elastina para rejuvenescimento." },
    { icon: Layers, text: "Melhora da textura, poros dilatados e linhas finas." },
    { icon: Palette, text: "Potencializado com ativos como fatores de crescimento e vitaminas." },
    { icon: Shield, text: "Equipamentos de última geração com protocolos individualizados." },
  ],
  areas: [
    { label: "Rosto" },
    { label: "Pescoço" },
    { label: "Colo" },
    { label: "Costas" },
    { label: "Corpo" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Renovação profunda e natural. O microagulhamento ativa os processos de regeneração da sua própria pele para resultados progressivos e duradouros.",
  },
};

export default function Microagulhamento() {
  return <ProcedurePageLayout data={data} />;
}
