import { Sparkles, ArrowUp, Target, Shield, Layers } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "Linear Z & Liftera",
  subtitle: "Ultrassom micro e macrofocado para lifting e contorno facial.",
  intro: (
    <>
      <p>O Linear Z e o Liftera são tecnologias de ultrassom focado de alta intensidade (HIFU) que promovem lifting e contorno facial sem cirurgia. Atuam em diferentes profundidades da pele, estimulando a contração e a produção de novo colágeno.</p>
      <p>O ultrassom microfocado age nas camadas mais superficiais, melhorando a firmeza e a textura. Já o macrofocado atinge camadas profundas, promovendo um efeito lifting visível e duradouro.</p>
      <p>Na Derma Concept Academy, combinamos as duas tecnologias de forma estratégica para um resultado completo de rejuvenescimento e redefinição dos contornos faciais.</p>
    </>
  ),
  benefitsTitle: "Benefícios do Tratamento",
  benefits: [
    { icon: ArrowUp, text: "Efeito lifting não cirúrgico com resultados progressivos e naturais." },
    { icon: Target, text: "Atuação em múltiplas profundidades para tratamento completo." },
    { icon: Layers, text: "Combinação de ultrassom micro e macrofocado em uma única sessão." },
    { icon: Shield, text: "Procedimento seguro, sem cortes e com mínimo downtime." },
    { icon: Sparkles, text: "Estímulo à neocolagênese para resultados que melhoram ao longo do tempo." },
  ],
  areas: [
    { label: "Rosto" },
    { label: "Papada" },
    { label: "Pescoço" },
    { label: "Mandíbula" },
    { label: "Sobrancelhas" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Lifting sem bisturi, com tecnologia de última geração e acompanhamento especializado. A firmeza e os contornos que você deseja, com a segurança que você merece.",
  },
};

export default function LinearZLiftera() {
  return <ProcedurePageLayout data={data} />;
}
