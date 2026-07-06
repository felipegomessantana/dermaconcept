import { CheckCircle2, Heart, Brain, Droplets, Footprints } from "lucide-react";
import { areaImages } from "@/assets/areas";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";
import toxinaAntes from "@/assets/toxina-botulinica/antes.webp?w=480;768;1200&responsive";
import toxinaDepois from "@/assets/toxina-botulinica/depois.webp?w=480;768;1200&responsive";
import peGalinhaAntes from "@/assets/toxina-botulinica/pe-galinha-antes.webp?w=480;768;1200&responsive";
import peGalinhaDepois from "@/assets/toxina-botulinica/pe-galinha-depois.webp?w=480;768;1200&responsive";
import tercoSuperiorAntes from "@/assets/toxina-botulinica/terco-superior-antes.webp?w=480;768;1200&responsive";
import tercoSuperiorDepois from "@/assets/toxina-botulinica/terco-superior-depois.webp?w=480;768;1200&responsive";

const data: ProcedurePageData = {
  title: (<>TOXINA BOTULÍNICA<br /><span className="block">Suavidade, Controle e Sofisticação</span></>),
  subtitle: "Suavidade não é ausência de expressão. É controle, equilíbrio e sofisticação.",
  intro: (
    <>
      <p>A toxina botulínica é um dos tratamentos mais consagrados da dermatologia estética para suavizar linhas de expressão e prevenir o envelhecimento da pele, mantendo a naturalidade dos movimentos.</p>
      <p>Ela atua relaxando de forma controlada a musculatura responsável pelas rugas dinâmicas — aquelas que aparecem ao sorrir, franzir a testa ou expressar emoções.</p>
      <p>Na Derma Concept, a aplicação é realizada com precisão e planejamento individualizado, preservando a identidade do seu rosto e proporcionando um resultado leve, elegante e natural.</p>
    </>
  ),
  beforeAfter: [
    { before: toxinaAntes, after: toxinaDepois, label: "Glabela" },
    { before: peGalinhaAntes, after: peGalinhaDepois, label: "Pé de Galinha" },
    { before: tercoSuperiorAntes, after: tercoSuperiorDepois, label: "Terço Superior" },
  ],
  benefitsTitle: "O que podemos transformar com naturalidade",
  benefits: [
    { icon: CheckCircle2, text: "Suavização de rugas de expressão" },
    { icon: CheckCircle2, text: "Prevenção do envelhecimento precoce" },
    { icon: CheckCircle2, text: "Redução de marcas na testa e entre as sobrancelhas" },
    { icon: CheckCircle2, text: "Abertura do olhar e efeito lifting sutil" },
    { icon: CheckCircle2, text: "Correção de assimetrias faciais" },
    { icon: CheckCircle2, text: "Melhora do aspecto cansado ou tenso" },
  ],
  areasTitle: "Áreas Tratadas",
  areas: [
    { label: "Testa", image: areaImages.testa },
    { label: "Glabela (entre as sobrancelhas)", image: areaImages.glabela },
    { label: "Pés de galinha (região dos olhos)", image: areaImages.peGalinha },
    { label: "Sobrancelhas (efeito lifting)", image: areaImages.sobrancelhas },
    { label: "Nariz (linhas do \"bunny lines\")", image: areaImages.nariz },
    { label: "Queixo (aspecto de casca de laranja)", image: areaImages.queixo },
    { label: "Pescoço (bandas platismais)", image: areaImages.pescoco },
    { label: "Mandíbula", image: areaImages.mandibula },
    { label: "Terço inferior da face", image: areaImages.face },
    { label: "Enxaqueca", icon: Brain },
    { label: "Hiperidrose axilar — axilas", icon: Droplets },
    { label: "Hiperidrose palmar — mãos", image: areaImages.maos },
    { label: "Hiperidrose plantar — pés", icon: Footprints },
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
  closingText: "A naturalidade é o verdadeiro luxo. Resultados sofisticados são construídos com técnica, conhecimento e senso estético apurado. Agende sua avaliação e descubra como suavizar suas expressões com elegância e segurança. Vagas limitadas para atendimento personalizado.",
};

export default function ToxinaBotulinica() {
  return <ProcedurePageLayout data={data} />;
}
