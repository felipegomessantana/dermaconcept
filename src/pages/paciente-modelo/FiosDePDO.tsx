import { ArrowUp, Sparkles, Shield, Layers, Heart } from "lucide-react";
import { areaImages } from "@/assets/areas";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: (<>FIOS DE PDO<br /><span className="block">Sustentação com Leveza e Efeito Lifting</span></>),
  subtitle: "Sustentação com leveza e efeito lifting.",
  intro: (
    <>
      <p>Os fios de PDO (polidioxanona) são fios absorvíveis inseridos na pele para promover sustentação, lifting e estímulo à produção de colágeno. Eles oferecem um efeito lifting imediato e progressivo, com resultados que melhoram ao longo das semanas.</p>
      <p>Existem diferentes tipos de fios — lisos, espiculados e cogidos — cada um com indicações específicas. Os fios lisos estimulam colágeno, enquanto os espiculados promovem tração e reposicionamento dos tecidos.</p>
      <p>Na Derma Concept Academy, a técnica de aplicação dos fios de PDO é precisa e individualizada, respeitando a anatomia facial e os vetores de tração naturais para um resultado harmonioso e duradouro.</p>
    </>
  ),
  benefitsTitle: "Benefícios do Tratamento",
  benefits: [
    { icon: ArrowUp, text: "Efeito lifting imediato com melhora progressiva ao longo do tempo." },
    { icon: Sparkles, text: "Estímulo à neocolagênese para firmeza e qualidade da pele." },
    { icon: Layers, text: "Diferentes tipos de fios para cada necessidade e região." },
    { icon: Heart, text: "Resultado natural — sustentação com leveza, sem aspecto artificial." },
    { icon: Shield, text: "Fios absorvíveis e biocompatíveis com alto perfil de segurança." },
  ],
  areas: [
    { label: "Rosto", image: areaImages.rosto },
    { label: "Pescoço", image: areaImages.pescoco },
    { label: "Papada", image: areaImages.papada },
    { label: "Colo", image: areaImages.colo },
    { label: "Abdômen", image: areaImages.abdomen },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Lifting sem cirurgia, com fios que sustentam e rejuvenescem ao mesmo tempo. Tecnologia absorvível que trabalha com o seu corpo para resultados naturais e elegantes.",
  },
};

export default function FiosDePDO() {
  return <ProcedurePageLayout data={data} />;
}
