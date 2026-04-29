import { CheckCircle2 } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";
import labiosAntes from "@/assets/acido-hialuronico/labios-antes.webp";
import labiosDepois from "@/assets/acido-hialuronico/labios-depois.webp";
import olheirasAntes from "@/assets/acido-hialuronico/olheiras-antes.webp";
import olheirasDepois from "@/assets/acido-hialuronico/olheiras-depois.webp";
import macasAntes from "@/assets/acido-hialuronico/macas-antes.webp";
import macasDepois from "@/assets/acido-hialuronico/macas-depois.webp";

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
    { label: "Lábios" },
    { label: "Olheiras" },
    { label: "Bigode chinês (sulco nasogeniano)" },
    { label: "Linhas de marionete" },
    { label: "Maçãs do rosto" },
    { label: "Mandíbula" },
    { label: "Queixo" },
    { label: "Nariz (rinomodelação)" },
    { label: "Têmporas" },
    { label: "Mãos" },
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
