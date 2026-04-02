import { ArrowUp, Target, Layers, Shield, Sparkles } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: (<>LINEAR Z<br /><span className="block">Ultrassom Micro e Macrofocado</span></>),
  subtitle: "Tecnologia não é tendência. É posicionamento.",
  intro: (
    <>
      <p>O Linear Z representa uma nova geração de ultrassom micro e macrofocado, capaz de tratar flacidez e gordura localizada com precisão, sem cortes e sem tempo de recuperação. Atuando em diferentes profundidades da pele, ele promove contração imediata e estímulo progressivo de colágeno, além de atuar na redução de gordura — entregando contorno, firmeza e definição facial e corporal.</p>
    </>
  ),
  benefitsTitle: "O que você pode esperar",
  benefits: [
    { icon: ArrowUp, text: "Efeito lifting progressivo e natural" },
    { icon: Layers, text: "Redução da flacidez" },
    { icon: Target, text: "Melhora do contorno facial" },
    { icon: Sparkles, text: "Estímulo intenso de colágeno" },
    { icon: Shield, text: "Redução de gordura localizada (efeito adipogênico controlado)" },
  ],
  areas: [
    { label: "Face completa" },
    { label: "Papada" },
    { label: "Mandíbula" },
    { label: "Pescoço" },
    { label: "Abdômen" },
    { label: "Flancos" },
  ],
  callout: {
    title: "Por que escolher o Linear Z na Derma Concept",
    items: [
      "Tecnologia sul-coreana de última geração",
      "Protocolos personalizados",
      "Procedimento realizado por médicos",
      "Associação com outras tecnologias para potencializar resultados",
    ],
  },
  closingTitle: "RESULTADO NÃO É SOBRE EXAGERO. É SOBRE PRECISÃO.",
  closingText: "Agende sua avaliação e descubra como redefinir contornos com tecnologia de ponta. Vagas limitadas para protocolos personalizados.",
};

export default function LinearZ() {
  return <ProcedurePageLayout data={data} />;
}
