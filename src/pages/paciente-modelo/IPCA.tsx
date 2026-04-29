import { Sparkles, Target, Layers, Shield, Palette } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";
import face1Antes from "@/assets/ipca/face-1-antes.webp";
import face1Depois from "@/assets/ipca/face-1-depois.webp";
import face2Antes from "@/assets/ipca/face-2-antes.webp";
import face2Depois from "@/assets/ipca/face-2-depois.webp";
import face3Antes from "@/assets/ipca/face-3-antes.webp";
import face3Depois from "@/assets/ipca/face-3-depois.webp";
import face4Antes from "@/assets/ipca/face-4-antes.webp";
import face4Depois from "@/assets/ipca/face-4-depois.webp";
import face5Antes from "@/assets/ipca/face-5-antes.webp";
import face5Depois from "@/assets/ipca/face-5-depois.webp";

const data: ProcedurePageData = {
  title: (<>IPCA<br /><span className="block">Indução Percutânea de Colágeno por Agulhas</span></>),
  subtitle: "Reestruturação profunda da pele, com tecnologia e precisão.",
  intro: (
    <>
      <p>A IPCA — Indução Percutânea de Colágeno por Agulhas — é um procedimento dermatológico avançado que utiliza microagulhas para promover microlesões controladas na pele, ativando o processo natural de regeneração e estimulando a produção intensa de colágeno e elastina.</p>
      <p>Diferente do microagulhamento estético tradicional, a IPCA é realizada em profundidade médica, com protocolos clínicos e equipamentos específicos, permitindo o tratamento de condições mais complexas como cicatrizes profundas de acne, estrias, flacidez e remodelação de áreas com perda de qualidade de pele.</p>
      <p>Na Derma Concept, a IPCA é conduzida com técnica precisa e planejamento individualizado, garantindo resultados consistentes, naturais e progressivos.</p>
    </>
  ),
  beforeAfter: [
    { before: face1Antes, after: face1Depois, label: "Cicatrizes de Acne" },
    { before: face2Antes, after: face2Depois, label: "Cicatrizes de Acne" },
    { before: face3Antes, after: face3Depois, label: "Cicatrizes de Acne" },
    { before: face4Antes, after: face4Depois, label: "Manchas e Textura" },
    { before: face5Antes, after: face5Depois, label: "Poros e Textura" },
  ],
  benefitsTitle: "O que tratamos com IPCA",
  benefits: [
    { icon: Target, text: "Cicatrizes de acne profundas e atróficas" },
    { icon: Sparkles, text: "Estímulo intenso de colágeno e elastina" },
    { icon: Layers, text: "Melhora de textura, poros dilatados e qualidade da pele" },
    { icon: Palette, text: "Tratamento de estrias e marcas cicatriciais" },
    { icon: Shield, text: "Reestruturação da pele com flacidez leve a moderada" },
  ],
  areasTitle: "Áreas Tratadas",
  areas: [
    { label: "Rosto" },
    { label: "Pescoço" },
    { label: "Colo" },
    { label: "Abdômen" },
    { label: "Coxas" },
    { label: "Glúteos" },
    { label: "Braços" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Aqui, cada detalhe importa.",
    items: [
      "Procedimento realizado por médicos experientes",
      "Supervisão dermatológica especializada",
      "Protocolos clínicos individualizados",
      "Tecnologia avançada e segurança máxima",
      "Estrutura moderna para o seu conforto",
    ],
  },
  closingTitle: "Pele renovada, do interior para fora.",
  closingText: "A IPCA reativa o que a sua pele faz de melhor: se reconstruir. Agende sua avaliação e descubra como devolver firmeza, textura e qualidade à sua pele com ciência e sofisticação. Vagas limitadas para atendimento personalizado.",
};

export default function IPCA() {
  return <ProcedurePageLayout data={data} />;
}
