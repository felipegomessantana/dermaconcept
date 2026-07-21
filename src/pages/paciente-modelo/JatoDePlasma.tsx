import { CheckCircle2 } from "lucide-react";
import { areaImages } from "@/assets/areas";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: (<>JATO DE PLASMA<br /><span className="block">Tecnologia Avançada para Regeneração da Pele</span></>),
  subtitle: "Alta tecnologia não é apenas inovação. É precisão aplicada à estética.",
  intro: (
    <>
      <p>O jato de plasma é uma tecnologia avançada que promove a regeneração da pele através de microdescargas controladas, estimulando a contração imediata dos tecidos e a produção de colágeno.</p>
      <p>Sem cortes e com abordagem minimamente invasiva, o procedimento é ideal para tratar flacidez, rugas e excesso de pele, especialmente em áreas delicadas.</p>
      <p>Na Derma Concept, o jato de plasma é aplicado com planejamento individualizado, garantindo resultados naturais, seguros e sofisticados.</p>
    </>
  ),
  benefitsTitle: "O que você pode esperar",
  benefits: [
    { icon: CheckCircle2, text: "Efeito lifting imediato e progressivo" },
    { icon: CheckCircle2, text: "Redução de excesso de pele" },
    { icon: CheckCircle2, text: "Suavização de rugas finas" },
    { icon: CheckCircle2, text: "Estímulo intenso de colágeno" },
    { icon: CheckCircle2, text: "Melhora da firmeza e textura da pele" },
  ],
  extraSections: [
    {
      title: "Principais Indicações",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#7A7168" }} />
            <span>Flacidez de pálpebras (blefaroplastia sem cirurgia)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#7A7168" }} />
            <span>Rugas periorais (código de barras)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#7A7168" }} />
            <span>Linhas finas</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#7A7168" }} />
            <span>Flacidez leve a moderada</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Por que o Jato de Plasma se destaca",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#7A7168" }} />
            <span>Tecnologia minimamente invasiva</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#7A7168" }} />
            <span>Resultados visíveis já nas primeiras sessões</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#7A7168" }} />
            <span>Alternativa a procedimentos cirúrgicos em casos selecionados</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#7A7168" }} />
            <span>Alta precisão em áreas delicadas</span>
          </li>
        </ul>
      ),
    },
  ],
  areasTitle: "Áreas Mais Tratadas",
  areas: [
    { label: "Pálpebras superiores e inferiores", image: areaImages.palpebras },
    { label: "Região dos olhos", image: areaImages.regiaoOlhos },
    { label: "Ao redor dos lábios", image: areaImages.aoRedorLabios },
    {
      label: "Face",
      imageSrc: "/paciente-modelo/jato-de-plasma/face.webp",
      alt: "Jato de plasma na face",
    },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    items: [
      "Avaliação individualizada",
      "Procedimentos realizados por médicos",
      "Protocolos personalizados",
      "Ambiente premium e acompanhamento especializado",
    ],
  },
  closingTitle: "O verdadeiro luxo é rejuvenescer com naturalidade e tecnologia.",
  closingText: "Agende sua avaliação e descubra como tratar flacidez e rugas com precisão e sofisticação. Vagas limitadas para protocolos personalizados.",
};

export default function JatoDePlasma() {
  return <ProcedurePageLayout data={data} />;
}
