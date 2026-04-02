import { Zap, Sparkles, Eye, Shield, Target } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "Jato de Plasma",
  subtitle: "Regeneração e blefaroplastia sem cirurgia.",
  intro: (
    <>
      <p>O jato de plasma é uma tecnologia inovadora que utiliza energia ionizada para promover a regeneração tecidual e a retração da pele. É especialmente indicado para blefaroplastia não cirúrgica — o tratamento do excesso de pele nas pálpebras sem a necessidade de cortes.</p>
      <p>O procedimento estimula a produção de colágeno e elastina, promovendo um efeito lifting natural e progressivo. Além das pálpebras, o jato de plasma é eficaz no tratamento de rugas finas, cicatrizes e lesões benignas da pele.</p>
      <p>Na Derma Concept Academy, o jato de plasma é aplicado com técnica precisa e segura, em um ambiente controlado e por profissionais altamente capacitados.</p>
    </>
  ),
  benefitsTitle: "Indicações do Tratamento",
  benefits: [
    { icon: Eye, text: "Blefaroplastia não cirúrgica: tratamento do excesso de pele nas pálpebras." },
    { icon: Zap, text: "Regeneração tecidual e retração da pele com energia ionizada." },
    { icon: Sparkles, text: "Estímulo à produção de colágeno e elastina para efeito lifting." },
    { icon: Target, text: "Tratamento de rugas finas, cicatrizes e lesões benignas." },
    { icon: Shield, text: "Procedimento minimamente invasivo com recuperação rápida." },
  ],
  areas: [
    { label: "Pálpebras" },
    { label: "Rosto" },
    { label: "Pescoço" },
    { label: "Colo" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Tecnologia avançada para resultados que antes só eram possíveis com cirurgia. Rejuvenescimento real, seguro e com olhar especializado.",
  },
};

export default function JatoDePlasma() {
  return <ProcedurePageLayout data={data} />;
}
