import { Sun, Sparkles, Target, Palette, Shield } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

import equipamento from "@/assets/etherea-mx/equipamento.webp";
import skinRejuvAntes from "@/assets/youlaser-prime/skin-rejuvenation-antes.webp";
import skinRejuvDepois from "@/assets/youlaser-prime/skin-rejuvenation-depois.webp";
import benignAntes from "@/assets/youlaser-prime/benign-pigmented-lesions-antes.webp";
import benignDepois from "@/assets/youlaser-prime/benign-pigmented-lesions-depois.webp";
import skinResurfAntes from "@/assets/youlaser-prime/skin-resurfacing-antes.webp";
import skinResurfDepois from "@/assets/youlaser-prime/skin-resurfacing-depois.webp";
import striaeAntes from "@/assets/youlaser-prime/striae-antes.webp";
import striaeDepois from "@/assets/youlaser-prime/striae-depois.webp";
import acneScarsAntes from "@/assets/youlaser-prime/acne-scars-antes.webp";
import acneScarsDepois from "@/assets/youlaser-prime/acne-scars-depois.webp";
import vascularAntes from "@/assets/youlaser-prime/vascular-lesions-antes.webp";
import vascularDepois from "@/assets/youlaser-prime/vascular-lesions-depois.webp";
import tattooAntes from "@/assets/youlaser-prime/tattoo-removal-antes.webp";
import tattooDepois from "@/assets/youlaser-prime/tattoo-removal-depois.webp";
import hairAntes from "@/assets/youlaser-prime/hair-removal-antes.webp";
import hairDepois from "@/assets/youlaser-prime/hair-removal-depois.webp";
import acneAntes from "@/assets/youlaser-prime/acne-antes.webp";
import acneDepois from "@/assets/youlaser-prime/acne-depois.webp";
import onychoAntes from "@/assets/youlaser-prime/onychomycosis-antes.webp";
import onychoDepois from "@/assets/youlaser-prime/onychomycosis-depois.webp";

const data: ProcedurePageData = {
  title: (<>ETHEREA MX<br /><span className="block">Tecnologia Avançada para Pigmentos, Manchas e Vasos</span></>),
  subtitle: "Tecnologia avançada para pigmentos, manchas e vasos.",
  intro: (
    <>
      <p>O Etherea MX é uma plataforma multifuncional que reúne diversas tecnologias em um único equipamento, incluindo o módulo Acroma para tratamento de pigmentos e a Luz Intensa Pulsada (IPL) para manchas e vasos.</p>
      <p>Com o módulo Acroma, é possível tratar melasma, manchas solares e hiperpigmentações pós-inflamatórias com precisão e segurança. A IPL, por sua vez, é indicada para lesões vasculares, rosácea e fotoenvelhecimento.</p>
      <p>Na Derma Concept Academy, utilizamos o Etherea MX com protocolos personalizados, combinando diferentes módulos para um resultado completo e eficaz no tratamento de manchas e alterações de pigmentação.</p>
    </>
  ),
  beforeAfterGroups: [
    [
      { before: skinRejuvAntes, after: skinRejuvDepois, label: "Skin Rejuvenation" },
      { before: benignAntes, after: benignDepois, label: "Benign Pigmented Lesions" },
      { before: skinResurfAntes, after: skinResurfDepois, label: "Skin Resurfacing" },
      { before: striaeAntes, after: striaeDepois, label: "Striae" },
      { before: acneScarsAntes, after: acneScarsDepois, label: "Acne Scars" },
      { before: vascularAntes, after: vascularDepois, label: "Vascular Lesions" },
    ],
    [
      { before: tattooAntes, after: tattooDepois, label: "Tattoo Removal" },
      { before: hairAntes, after: hairDepois, label: "Hair Removal" },
      { before: acneAntes, after: acneDepois, label: "Acne" },
      { before: onychoAntes, after: onychoDepois, label: "Onychomycosis" },
    ],
  ],
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
