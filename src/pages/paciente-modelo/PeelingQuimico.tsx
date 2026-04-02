import { Sparkles, Sun, Palette, Layers, Shield } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "Peeling Químico",
  subtitle: "Renovação celular, clareamento e textura.",
  intro: (
    <>
      <p>O peeling químico é um procedimento que utiliza substâncias ácidas para promover a renovação celular controlada. Ao remover as camadas superficiais da pele, estimula a regeneração e a formação de uma pele nova, mais uniforme e luminosa.</p>
      <p>Existem peelings de diferentes profundidades — superficiais, médios e profundos — cada um indicado para tipos específicos de alterações cutâneas. O peeling pode tratar manchas, cicatrizes de acne, rugas finas, poros dilatados e irregularidades de textura.</p>
      <p>Na Derma Concept Academy, cada protocolo de peeling é selecionado e aplicado de forma individualizada, considerando o tipo de pele, a sensibilidade e os objetivos do paciente.</p>
    </>
  ),
  benefitsTitle: "Benefícios do Tratamento",
  benefits: [
    { icon: Sparkles, text: "Renovação celular para uma pele mais luminosa e uniforme." },
    { icon: Sun, text: "Clareamento de manchas solares, melasma e hiperpigmentações." },
    { icon: Layers, text: "Melhora da textura, poros dilatados e irregularidades." },
    { icon: Palette, text: "Tratamento de cicatrizes de acne e rugas finas." },
    { icon: Shield, text: "Protocolos individualizados para cada tipo de pele." },
  ],
  areas: [
    { label: "Rosto" },
    { label: "Pescoço" },
    { label: "Colo" },
    { label: "Mãos" },
    { label: "Costas" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Renovação profunda com ciência e segurança. Cada peeling é uma oportunidade de revelar uma pele mais saudável, iluminada e rejuvenescida.",
  },
};

export default function PeelingQuimico() {
  return <ProcedurePageLayout data={data} />;
}
