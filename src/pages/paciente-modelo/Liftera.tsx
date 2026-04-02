import { ArrowUp, Target, Layers, Sparkles } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "LIFTERA 2 – ULTRASSOM MICROFOCADO",
  subtitle: "Sofisticação é tratar profundamente sem parecer tratado.",
  intro: (
    <>
      <p>O Liftera 2 é um ultrassom microfocado que atua nas camadas mais profundas da pele, promovendo efeito lifting sem cirurgia e com resultados naturais. A tecnologia estimula a produção de colágeno e promove retração dos tecidos, melhorando a sustentação da pele e redefinindo o contorno facial.</p>
    </>
  ),
  benefitsTitle: "O que você pode esperar",
  benefits: [
    { icon: ArrowUp, text: "Efeito lifting sem cirurgia" },
    { icon: Layers, text: "Melhora da flacidez facial" },
    { icon: Target, text: "Definição de contorno" },
    { icon: Sparkles, text: "Pele mais firme e estruturada" },
  ],
  areas: [
    { label: "Face" },
    { label: "Papada" },
    { label: "Sobrancelhas (efeito lifting)" },
    { label: "Pescoço" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    items: [
      "Planejamento individualizado",
      "Aplicação médica especializada",
      "Protocolos combinados para máxima performance",
    ],
  },
  closingTitle: "O VERDADEIRO LUXO É A NATURALIDADE.",
  closingText: "Agende sua avaliação e descubra como elevar seu padrão de cuidado com a pele. Vagas limitadas.",
};

export default function Liftera() {
  return <ProcedurePageLayout data={data} />;
}
