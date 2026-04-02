import { Droplets, Sparkles, Heart, Eye, Smile, Hand } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "Preenchimento com Ácido Hialurônico",
  subtitle: "Beleza não é transformação. É refinamento.",
  intro: (
    <>
      <p>O preenchimento com ácido hialurônico é um dos procedimentos mais procurados da dermatologia estética moderna. Ele permite restaurar volumes perdidos com o envelhecimento, suavizar sulcos e linhas, e devolver ao rosto uma aparência descansada e natural.</p>
      <p>Na Derma Concept Academy, o procedimento é realizado com técnicas avançadas de aplicação, respeitando a anatomia facial individual de cada paciente. O objetivo nunca é transformar — é revelar a melhor versão de cada rosto, com equilíbrio, proporção e naturalidade.</p>
      <p>Os produtos utilizados são de alta qualidade, com tecnologia de reticulação que garante durabilidade e segurança. Cada sessão é planejada de forma individualizada, considerando as necessidades específicas e os desejos do paciente.</p>
    </>
  ),
  benefitsTitle: "O que transformamos",
  benefits: [
    { icon: Sparkles, text: "Suavização de rugas estáticas e linhas de expressão." },
    { icon: Droplets, text: "Reposição de volume facial perdido com o envelhecimento." },
    { icon: Heart, text: "Contornos faciais mais definidos e harmônicos." },
    { icon: Smile, text: "Lábios com volume natural e contorno delicado." },
    { icon: Eye, text: "Correção de olheiras profundas e aspecto cansado." },
    { icon: Hand, text: "Rejuvenescimento das mãos com reposição de volume." },
  ],
  areasTitle: "Áreas de Aplicação",
  areas: [
    { label: "Lábios" },
    { label: "Olheiras" },
    { label: "Bigode chinês" },
    { label: "Marionete" },
    { label: "Maçãs do rosto" },
    { label: "Mandíbula" },
    { label: "Queixo" },
    { label: "Nariz" },
    { label: "Têmporas" },
    { label: "Mãos" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Cada procedimento é realizado por profissionais altamente qualificados, em um ambiente que une ciência, técnica e acolhimento. Aqui, seu rosto é tratado com a atenção e o cuidado que merece.",
  },
};

export default function PreenchimentoAcidoHialuronico() {
  return <ProcedurePageLayout data={data} />;
}
