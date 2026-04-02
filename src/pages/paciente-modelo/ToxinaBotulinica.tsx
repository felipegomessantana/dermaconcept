import { CheckCircle2 } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "Toxina Botulínica",
  subtitle: "Suavidade não é ausência de expressão. É controle, equilíbrio e sofisticação.",
  intro: (
    <>
      <p>A toxina botulínica é um dos tratamentos mais consagrados da dermatologia estética para suavizar linhas de expressão e prevenir o envelhecimento da pele, mantendo a naturalidade dos movimentos.</p>
      <p>Ela atua relaxando de forma controlada a musculatura responsável pelas rugas dinâmicas — aquelas que aparecem ao sorrir, franzir a testa ou expressar emoções.</p>
      <p>Na Derma Concept, a aplicação é realizada com precisão e planejamento individualizado, preservando a identidade do seu rosto e proporcionando um resultado leve, elegante e natural.</p>
    </>
  ),
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
    { label: "Testa" },
    { label: "Glabela (entre as sobrancelhas)" },
    { label: "Pés de galinha (região dos olhos)" },
    { label: "Sobrancelhas (efeito lifting)" },
    { label: "Nariz (linhas do \"bunny lines\")" },
    { label: "Queixo (aspecto de casca de laranja)" },
    { label: "Pescoço (bandas platismais)" },
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
