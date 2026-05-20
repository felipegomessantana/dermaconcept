import { Sparkles, Target, Layers, Shield, Palette } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";
import face1Antes from "@/assets/ipca/face-1-antes.webp?w=480;768;1200&responsive";
import face1Depois from "@/assets/ipca/face-1-depois.webp?w=480;768;1200&responsive";
import face2Antes from "@/assets/ipca/face-2-antes.webp?w=480;768;1200&responsive";
import face2Depois from "@/assets/ipca/face-2-depois.webp?w=480;768;1200&responsive";
import face3Antes from "@/assets/ipca/face-3-antes.webp?w=480;768;1200&responsive";
import face3Depois from "@/assets/ipca/face-3-depois.webp?w=480;768;1200&responsive";
import face4Antes from "@/assets/ipca/face-4-antes.webp?w=480;768;1200&responsive";
import face4Depois from "@/assets/ipca/face-4-depois.webp?w=480;768;1200&responsive";
import face5Antes from "@/assets/ipca/face-5-antes.webp?w=480;768;1200&responsive";
import face5Depois from "@/assets/ipca/face-5-depois.webp?w=480;768;1200&responsive";
import face6Antes from "@/assets/ipca/face-6-antes.webp?w=480;768;1200&responsive";
import face6Depois from "@/assets/ipca/face-6-depois.webp?w=480;768;1200&responsive";
import areaRosto from "@/assets/ipca/area-rosto.webp?w=480;768;1200&responsive";
import areaPescoco from "@/assets/ipca/area-pescoco.webp?w=480;768;1200&responsive";
import areaColo from "@/assets/ipca/area-colo.webp?w=480;768;1200&responsive";
import areaAbdomen from "@/assets/ipca/area-abdomen.webp?w=480;768;1200&responsive";
import areaCoxas from "@/assets/ipca/area-coxas.webp?w=480;768;1200&responsive";
import areaGluteos from "@/assets/ipca/area-gluteos.webp?w=480;768;1200&responsive";
import areaBracos from "@/assets/ipca/area-bracos.webp?w=480;768;1200&responsive";

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
    { before: face6Antes, after: face6Depois, label: "Cicatrizes de Acne" },
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
    { label: "Rosto", image: areaRosto },
    { label: "Pescoço", image: areaPescoco },
    { label: "Colo", image: areaColo },
    { label: "Abdômen", image: areaAbdomen },
    { label: "Coxas", image: areaCoxas },
    { label: "Glúteos", image: areaGluteos },
    { label: "Braços", image: areaBracos },
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
