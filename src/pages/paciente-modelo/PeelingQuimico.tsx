import { Sparkles, Sun, Palette, Layers, Shield, Heart } from "lucide-react";
import { areaImages } from "@/assets/areas";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";
import rostoAntes from "@/assets/peeling-quimico/rosto-antes.webp?w=480;768;1200&responsive";
import rostoDepois from "@/assets/peeling-quimico/rosto-depois.webp?w=480;768;1200&responsive";
import maosAntes from "@/assets/peeling-quimico/maos-antes.webp?w=480;768;1200&responsive";
import maosDepois from "@/assets/peeling-quimico/maos-depois.webp?w=480;768;1200&responsive";
import coloAntes from "@/assets/peeling-quimico/colo-antes.webp?w=480;768;1200&responsive";
import coloDepois from "@/assets/peeling-quimico/colo-depois.webp?w=480;768;1200&responsive";

const data: ProcedurePageData = {
  title: (<>PEELING QUÍMICO<br /><span className="block">Renovação Celular, Clareamento e Textura</span></>),
  subtitle: "Renovação celular, clareamento e textura.",
  intro: (
    <>
      <p>O peeling químico é um procedimento que utiliza substâncias ácidas para promover a renovação celular controlada. Ao remover as camadas superficiais da pele, estimula a regeneração e a formação de uma pele nova, mais uniforme e luminosa.</p>
      <p>Existem peelings de diferentes profundidades — superficiais, médios e profundos — cada um indicado para tipos específicos de alterações cutâneas. O peeling pode tratar manchas, cicatrizes de acne, rugas finas, poros dilatados e irregularidades de textura.</p>
      <p>Na Derma Concept Academy, cada protocolo de peeling é selecionado e aplicado de forma individualizada, considerando o tipo de pele, a sensibilidade e os objetivos do paciente.</p>
    </>
  ),
  beforeAfter: [
    { before: rostoAntes, after: rostoDepois, label: "Rosto" },
    { before: maosAntes, after: maosDepois, label: "Mãos" },
    { before: coloAntes, after: coloDepois, label: "Colo" },
  ],
  benefitsTitle: "Benefícios do Tratamento",
  benefits: [
    { icon: Sparkles, text: "Renovação celular para uma pele mais luminosa e uniforme." },
    { icon: Sun, text: "Clareamento de manchas solares, melasma e hiperpigmentações." },
    { icon: Layers, text: "Melhora da textura, poros dilatados e irregularidades." },
    { icon: Palette, text: "Tratamento de cicatrizes de acne e rugas finas." },
    { icon: Shield, text: "Protocolos individualizados para cada tipo de pele." },
  ],
  areas: [
    { label: "Rosto", image: areaImages.rosto },
    { label: "Pescoço", image: areaImages.pescoco },
    { label: "Colo", image: areaImages.colo },
    { label: "Mãos", image: areaImages.maos },
    { label: "Braços", image: areaImages.bracos },
    { label: "Costas", image: areaImages.costas },
    { label: "Íntimo feminino", icon: Heart },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Renovação profunda com ciência e segurança. Cada peeling é uma oportunidade de revelar uma pele mais saudável, iluminada e rejuvenescida.",
  },
};

export default function PeelingQuimico() {
  return <ProcedurePageLayout data={data} />;
}
