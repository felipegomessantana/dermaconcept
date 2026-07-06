import { CheckCircle2, Heart } from "lucide-react";
import { areaImages } from "@/assets/areas";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";
import labiosAntes from "@/assets/acido-hialuronico/labios-antes.webp?w=480;768;1200&responsive";
import labiosDepois from "@/assets/acido-hialuronico/labios-depois.webp?w=480;768;1200&responsive";
import olheirasAntes from "@/assets/acido-hialuronico/olheiras-antes.webp?w=480;768;1200&responsive";
import olheirasDepois from "@/assets/acido-hialuronico/olheiras-depois.webp?w=480;768;1200&responsive";
import macasAntes from "@/assets/acido-hialuronico/macas-antes.webp?w=480;768;1200&responsive";
import macasDepois from "@/assets/acido-hialuronico/macas-depois.webp?w=480;768;1200&responsive";
import bigodeChinesAntes from "@/assets/acido-hialuronico/bigode-chines-antes.webp?w=480;768;1200&responsive";
import bigodeChinesDepois from "@/assets/acido-hialuronico/bigode-chines-depois.webp?w=480;768;1200&responsive";

const data: ProcedurePageData = {
  title: (<>PREENCHIMENTO<br /><span className="block">com Ácido Hialurônico</span></>),
  subtitle: "Beleza não é transformação. É refinamento.",
  intro: (
    <>
      <p>O preenchimento com ácido hialurônico é um procedimento de alta precisão que valoriza traços, restaura volumes e realça a sua beleza de forma elegante e natural.</p>
      <p>Com o tempo, o rosto perde sustentação, contorno e viço. O ácido hialurônico — uma substância naturalmente presente no organismo — permite devolver esses elementos com equilíbrio, respeitando a individualidade de cada paciente.</p>
      <p>Na Derma Concept, cada aplicação é pensada como um projeto exclusivo: técnica, ciência e olhar estético apurado para resultados sofisticados, harmônicos e absolutamente naturais.</p>
    </>
  ),
  beforeAfter: [
    { before: labiosAntes, after: labiosDepois, label: "Lábios" },
    { before: olheirasAntes, after: olheirasDepois, label: "Olheiras" },
    { before: macasAntes, after: macasDepois, label: "Maçãs do Rosto" },
    { before: bigodeChinesAntes, after: bigodeChinesDepois, label: "Bigode Chinês" },
  ],
  benefitsTitle: "O que podemos transformar com naturalidade",
  benefits: [
    { icon: CheckCircle2, text: "Suavização de rugas e marcas de expressão" },
    { icon: CheckCircle2, text: "Reposição de volume facial" },
    { icon: CheckCircle2, text: "Definição de contornos (mandíbula, queixo e maçãs do rosto)" },
    { icon: CheckCircle2, text: "Lábios mais estruturados e elegantes" },
    { icon: CheckCircle2, text: "Correção de assimetrias" },
    { icon: CheckCircle2, text: "Rejuvenescimento global com aspecto leve e descansado" },
  ],
  areasTitle: "Áreas Tratadas",
  areas: [
    { label: "Lábios", image: areaImages.labios },
    { label: "Olheiras", image: areaImages.olheiras },
    { label: "Bigode chinês (sulco nasogeniano)", image: areaImages.bigodeChines },
    { label: "Linhas de marionete", image: areaImages.marionete },
    { label: "Maçãs do rosto", image: areaImages.macas },
    { label: "Mandíbula", image: areaImages.mandibula },
    { label: "Queixo", image: areaImages.queixo },
    { label: "Nariz (rinomodelação)", image: areaImages.nariz },
    { label: "Têmporas", image: areaImages.temporas },
    { label: "Glúteos", image: areaImages.gluteos },
    { label: "Preenchimento íntimo", icon: Heart },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Aqui, cada detalhe importa.",
    items: [
      "Procedimentos realizados por médicos experientes",
      "Supervisão dermatológica especializada",
      "Planejamento facial individualizado",
      "Técnicas avançadas para máxima segurança",
      "Estrutura moderna e tecnologias de ponta",
    ],
  },
  closingTitle: "Seu rosto, na sua melhor versão.",
  closingText: "Resultados naturais não acontecem por acaso. Eles são construídos com conhecimento, técnica e senso estético refinado. Agende sua avaliação e descubra como realçar sua beleza com sofisticação e segurança. Vagas limitadas para atendimento personalizado.",
};

export default function PreenchimentoAcidoHialuronico() {
  return <ProcedurePageLayout data={data} />;
}
