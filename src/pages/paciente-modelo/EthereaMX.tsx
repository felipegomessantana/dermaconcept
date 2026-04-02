import { Sun, Sparkles, Target, Palette, Shield } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "Etherea MX",
  subtitle: "Tecnologia avançada para pigmentos, manchas e vasos.",
  intro: (
    <>
      <p>O Etherea MX é uma plataforma multifuncional que reúne diversas tecnologias em um único equipamento, incluindo o módulo Acroma para tratamento de pigmentos e a Luz Intensa Pulsada (IPL) para manchas e vasos.</p>
      <p>Com o módulo Acroma, é possível tratar melasma, manchas solares e hiperpigmentações pós-inflamatórias com precisão e segurança. A IPL, por sua vez, é indicada para lesões vasculares, rosácea e fotoenvelhecimento.</p>
      <p>Na Derma Concept Academy, utilizamos o Etherea MX com protocolos personalizados, combinando diferentes módulos para um resultado completo e eficaz no tratamento de manchas e alterações de pigmentação.</p>
    </>
  ),
  benefitsTitle: "Diferenciais da Tecnologia",
  benefits: [
    { icon: Palette, text: "Módulo Acroma: tratamento preciso de melasma e hiperpigmentações." },
    { icon: Sun, text: "IPL: luz intensa pulsada para manchas solares, vasos e rosácea." },
    { icon: Target, text: "Plataforma multifuncional com múltiplos módulos em um único equipamento." },
    { icon: Shield, text: "Protocolos personalizados para cada tipo de pele e necessidade." },
    { icon: Sparkles, text: "Resultados visíveis com mínimo downtime e alta segurança." },
  ],
  areas: [
    { label: "Rosto" },
    { label: "Pescoço" },
    { label: "Colo" },
    { label: "Mãos" },
    { label: "Corpo" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Tecnologia de ponta para um tratamento completo e personalizado de manchas e alterações pigmentares. Sua pele tratada com ciência e precisão.",
  },
};

export default function EthereaMX() {
  return <ProcedurePageLayout data={data} />;
}
