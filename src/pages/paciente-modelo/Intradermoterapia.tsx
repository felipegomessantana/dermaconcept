import { Syringe, Sparkles, Droplets, Target, Shield } from "lucide-react";
import { areaImages } from "@/assets/areas";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: (<>INTRADERMOTERAPIA<br /><span className="block">Entrega Direta de Ativos para Resultados Potencializados</span></>),
  subtitle: "Entrega direta de ativos para resultados potencializados.",
  intro: (
    <>
      <p>A intradermoterapia é uma técnica que consiste na aplicação de substâncias ativas diretamente na pele, através de microinjeções. Essa entrega direta permite que os ativos atuem exatamente onde são necessários, potencializando os resultados do tratamento.</p>
      <p>A técnica é versátil e pode ser utilizada para tratamentos capilares — estimulando o crescimento e fortalecimento dos fios — e corporais, como redução de gordura localizada, celulite e flacidez.</p>
      <p>Na Derma Concept Academy, os protocolos de intradermoterapia são personalizados com coquetéis de ativos selecionados para cada necessidade específica do paciente.</p>
    </>
  ),
  benefitsTitle: "Benefícios do Tratamento",
  benefits: [
    { icon: Syringe, text: "Entrega direta de ativos na derme para máxima eficácia." },
    { icon: Droplets, text: "Tratamento capilar: estímulo ao crescimento e fortalecimento dos fios." },
    { icon: Target, text: "Tratamento corporal: redução de gordura localizada, celulite e flacidez." },
    { icon: Sparkles, text: "Coquetéis de ativos personalizados para cada necessidade." },
    { icon: Shield, text: "Procedimento seguro com resultados progressivos e visíveis." },
  ],
  areas: [
    { label: "Couro cabeludo", image: areaImages.couroCabeludo },
    { label: "Face", image: areaImages.face },
    { label: "Abdômen", image: areaImages.abdomen },
    { label: "Flancos", image: areaImages.flancos },
    { label: "Culotes", image: areaImages.coxas },
    { label: "Coxas", image: areaImages.coxas },
    { label: "Dorso", image: areaImages.costas },
    { label: "Braços", image: areaImages.bracos },
    { label: "Glúteos", image: areaImages.gluteos },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Ativos que chegam onde precisam chegar. Cada protocolo é desenhado com precisão para entregar resultados reais — seja para os fios ou para o corpo.",
  },
};

export default function Intradermoterapia() {
  return <ProcedurePageLayout data={data} />;
}
