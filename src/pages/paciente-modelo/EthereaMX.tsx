import { Sun, Sparkles, Target, Palette, Shield } from "lucide-react";
import { areaImages } from "@/assets/areas";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

import equipamento from "@/assets/etherea-mx/equipamento.webp?w=480;768;1200&responsive";
import skinRejuvAntes from "@/assets/youlaser-prime/skin-rejuvenation-antes.webp?w=480;768;1200&responsive";
import skinRejuvDepois from "@/assets/youlaser-prime/skin-rejuvenation-depois.webp?w=480;768;1200&responsive";
import benignAntes from "@/assets/youlaser-prime/benign-pigmented-lesions-antes.webp?w=480;768;1200&responsive";
import benignDepois from "@/assets/youlaser-prime/benign-pigmented-lesions-depois.webp?w=480;768;1200&responsive";
import skinResurfAntes from "@/assets/youlaser-prime/skin-resurfacing-antes.webp?w=480;768;1200&responsive";
import skinResurfDepois from "@/assets/youlaser-prime/skin-resurfacing-depois.webp?w=480;768;1200&responsive";
import striaeAntes from "@/assets/youlaser-prime/striae-antes.webp?w=480;768;1200&responsive";
import striaeDepois from "@/assets/youlaser-prime/striae-depois.webp?w=480;768;1200&responsive";
import acneScarsAntes from "@/assets/youlaser-prime/acne-scars-antes.webp?w=480;768;1200&responsive";
import acneScarsDepois from "@/assets/youlaser-prime/acne-scars-depois.webp?w=480;768;1200&responsive";
import vascularAntes from "@/assets/youlaser-prime/vascular-lesions-antes.webp?w=480;768;1200&responsive";
import vascularDepois from "@/assets/youlaser-prime/vascular-lesions-depois.webp?w=480;768;1200&responsive";
import tattooAntes from "@/assets/youlaser-prime/tattoo-removal-antes.webp?w=480;768;1200&responsive";
import tattooDepois from "@/assets/youlaser-prime/tattoo-removal-depois.webp?w=480;768;1200&responsive";
import hairAntes from "@/assets/youlaser-prime/hair-removal-antes.webp?w=480;768;1200&responsive";
import hairDepois from "@/assets/youlaser-prime/hair-removal-depois.webp?w=480;768;1200&responsive";
import acneAntes from "@/assets/youlaser-prime/acne-antes.webp?w=480;768;1200&responsive";
import acneDepois from "@/assets/youlaser-prime/acne-depois.webp?w=480;768;1200&responsive";
import onychoAntes from "@/assets/youlaser-prime/onychomycosis-antes.webp?w=480;768;1200&responsive";
import onychoDepois from "@/assets/youlaser-prime/onychomycosis-depois.webp?w=480;768;1200&responsive";

const areaImage = (file: string) => `/paciente-modelo/etherea-mx/${file}`;

const data: ProcedurePageData = {
  title: (<>ETHEREA MX<br /><span className="block">Tecnologia Avançada para Pigmentos, Manchas e Vasos</span></>),
  subtitle: "Tecnologia avançada para pigmentos, manchas e vasos.",
  intro: (
    <>
      <p>O Etherea MX é uma plataforma multifuncional que reúne diversas tecnologias em um único equipamento, incluindo o módulo Acroma para tratamento de pigmentos e a Luz Intensa Pulsada (IPL) para manchas e vasos.</p>
      <div className="my-6 border-l-4 pl-5 py-3 rounded-r-lg" style={{ borderColor: '#7A7168', backgroundColor: 'rgba(122, 113, 104, 0.06)' }}>
        <p className="font-serif text-lg md:text-xl text-gray-900 italic leading-relaxed">Com o módulo Acroma, é possível tratar melasma, manchas solares e hiperpigmentações pós-inflamatórias com precisão e segurança. A IPL, por sua vez, é indicada para lesões vasculares, rosácea e fotoenvelhecimento.</p>
      </div>
      <p>Na Derma Concept Academy, utilizamos o Etherea MX com protocolos personalizados, combinando diferentes módulos para um resultado completo e eficaz no tratamento de manchas e alterações de pigmentação.</p>
    </>
  ),
  equipmentImages: [equipamento],
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
    { label: "Rosto", imageSrc: areaImage("rosto.webp"), alt: "Etherea MX no rosto" },
    { label: "Pescoço", imageSrc: areaImage("pescoco.webp"), alt: "Etherea MX no pescoço" },
    { label: "Colo", imageSrc: areaImage("colo.webp"), alt: "Etherea MX no colo" },
    { label: "Mãos", imageSrc: areaImage("maos.webp"), alt: "Etherea MX nas mãos" },
    { label: "Corpo", image: areaImages.corpo, alt: "Etherea MX no corpo" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Tecnologia de ponta para um tratamento completo e personalizado de manchas e alterações pigmentares. Sua pele tratada com ciência e precisão.",
  },
};

export default function EthereaMX() {
  return <ProcedurePageLayout data={data} />;
}
