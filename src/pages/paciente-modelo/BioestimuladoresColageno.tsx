import { Sparkles, Heart, Hand, Layers, Shield } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";
import rostoAntes from "@/assets/bioestimuladores/rosto-antes.webp";
import rostoDepois from "@/assets/bioestimuladores/rosto-depois.webp";
import pescocoAntes from "@/assets/bioestimuladores/pescoco-antes.webp";
import pescocoDepois from "@/assets/bioestimuladores/pescoco-depois.webp";
import bracoAntes from "@/assets/bioestimuladores/braco-antes.webp";
import bracoDepois from "@/assets/bioestimuladores/braco-depois.webp";
import maosAntes from "@/assets/bioestimuladores/maos-antes.webp";
import maosDepois from "@/assets/bioestimuladores/maos-depois.webp";
import coloAntes from "@/assets/bioestimuladores/colo-antes.webp";
import coloDepois from "@/assets/bioestimuladores/colo-depois.webp";
import barrigaAntes from "@/assets/bioestimuladores/barriga-antes.webp";
import barrigaDepois from "@/assets/bioestimuladores/barriga-depois.webp";

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
  beforeAfter: [
    { before: rostoAntes, after: rostoDepois, label: "Rosto" },
    { before: pescocoAntes, after: pescocoDepois, label: "Pescoço" },
    { before: bracoAntes, after: bracoDepois, label: "Braço" },
    { before: maosAntes, after: maosDepois, label: "Mãos" },
    { before: coloAntes, after: coloDepois, label: "Colo" },
    { before: barrigaAntes, after: barrigaDepois, label: "Barriga" },
  ],
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
