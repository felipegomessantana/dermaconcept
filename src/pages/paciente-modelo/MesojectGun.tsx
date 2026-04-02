import { Syringe, Sparkles, Target, Droplets, Shield } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "Mesoject Gun",
  subtitle: "Intradermoterapia de alta precisão e entrega de ativos.",
  intro: (
    <>
      <p>A Mesoject Gun é um dispositivo de intradermoterapia que permite a entrega precisa de ativos diretamente na pele, em profundidade e velocidade controladas. Ela garante uma distribuição uniforme dos produtos, potencializando os resultados do tratamento.</p>
      <p>Indicada para protocolos de rejuvenescimento, hidratação profunda, clareamento e tratamento capilar, a Mesoject Gun proporciona uma experiência mais confortável do que as técnicas manuais tradicionais.</p>
      <p>Na Derma Concept Academy, utilizamos a Mesoject Gun com protocolos personalizados e ativos de alta qualidade, garantindo eficácia e segurança em cada sessão.</p>
    </>
  ),
  benefitsTitle: "Benefícios da Tecnologia",
  benefits: [
    { icon: Target, text: "Entrega de ativos em profundidade e velocidade controladas com alta precisão." },
    { icon: Droplets, text: "Distribuição uniforme dos produtos para resultados mais homogêneos." },
    { icon: Sparkles, text: "Protocolos de rejuvenescimento, hidratação profunda e clareamento." },
    { icon: Syringe, text: "Mais confortável que técnicas manuais tradicionais de intradermoterapia." },
    { icon: Shield, text: "Ativos de alta qualidade selecionados para cada tipo de pele e necessidade." },
  ],
  areas: [
    { label: "Rosto" },
    { label: "Pescoço" },
    { label: "Couro cabeludo" },
    { label: "Corpo" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Tecnologia de precisão para uma entrega de ativos eficaz e confortável. Cada protocolo é desenhado especificamente para as necessidades da sua pele.",
  },
};

export default function MesojectGun() {
  return <ProcedurePageLayout data={data} />;
}
