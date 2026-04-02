import { Sparkles, Heart, Hand, Layers, Shield } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: (<>BIOESTIMULADORES<br /><span className="block">de Colágeno</span></>),
  subtitle: "Foco não é volume — é qualidade.",
  intro: (
    <>
      <p>Os bioestimuladores de colágeno são substâncias injetáveis que estimulam o organismo a produzir novo colágeno, melhorando a firmeza, a elasticidade e a qualidade da pele de forma gradual e natural.</p>
      <p>Diferente dos preenchimentos, que adicionam volume imediato, os bioestimuladores trabalham a longo prazo, promovendo uma melhora progressiva da textura e da sustentação da pele. O resultado é uma pele mais firme, viçosa e com aspecto saudável.</p>
      <p>Na Derma Concept Academy, os bioestimuladores são aplicados com técnica precisa e planejamento individualizado, respeitando a anatomia e as necessidades de cada paciente.</p>
    </>
  ),
  benefitsTitle: "O que tratamos",
  benefits: [
    { icon: Sparkles, text: "Estímulo à produção de colágeno para melhora da firmeza e elasticidade." },
    { icon: Layers, text: "Melhora progressiva da textura e qualidade da pele." },
    { icon: Heart, text: "Resultado natural e duradouro, sem aspecto artificial." },
    { icon: Shield, text: "Planejamento individualizado para cada anatomia e necessidade." },
    { icon: Hand, text: "Rejuvenescimento das mãos, pescoço e colo com naturalidade." },
  ],
  areas: [
    { label: "Rosto" },
    { label: "Pescoço" },
    { label: "Colo" },
    { label: "Mãos" },
    { label: "Braços" },
    { label: "Abdômen" },
    { label: "Glúteos" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Qualidade de pele é o novo rejuvenescimento. Com bioestimuladores, devolvemos ao seu corpo a capacidade de produzir colágeno — de forma natural, gradual e sofisticada.",
  },
};

export default function BioestimuladoresColageno() {
  return <ProcedurePageLayout data={data} />;
}
