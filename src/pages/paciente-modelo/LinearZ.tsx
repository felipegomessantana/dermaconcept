import { ArrowUp, Target, Layers, Shield, Sparkles } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";
import fatAntes from "@/assets/linear-z/fat-proliferation-antes.webp";
import fatDepois from "@/assets/linear-z/fat-proliferation-depois.webp";
import fatRedAntes from "@/assets/linear-z/fat-prolif-reduction-antes.webp";
import fatRedDepois from "@/assets/linear-z/fat-prolif-reduction-depois.webp";

const data: ProcedurePageData = {
  title: (<>LINEAR Z<br /><span className="block">Ultrassom Micro e Macrofocado</span></>),
  subtitle: "Tecnologia não é tendência. É posicionamento.",
  intro: (
    <>
      <p>O Linear Z representa uma nova geração de ultrassom micro e macrofocado, capaz de tratar flacidez e gordura localizada com precisão, sem cortes e sem tempo de recuperação. Atuando em diferentes profundidades da pele, ele promove contração imediata e estímulo progressivo de colágeno, além de atuar na redução de gordura — entregando contorno, firmeza e definição facial e corporal.</p>
    </>
  ),
  beforeAfter: [
    { before: fatAntes, after: fatDepois, label: "Fat Proliferation / Tightening / Skin Texture" },
    { before: fatRedAntes, after: fatRedDepois, label: "Fat Proliferation + Fat Reduction + Tightening" },
  ],
  benefitsTitle: "O que você pode esperar",
  benefits: [
    { icon: ArrowUp, text: "Efeito lifting progressivo e natural" },
    { icon: Layers, text: "Redução da flacidez" },
    { icon: Target, text: "Melhora do contorno facial" },
    { icon: Sparkles, text: "Estímulo intenso de colágeno" },
    { icon: Shield, text: (
      <>
        Estímulo de gordura localizada (Efeito Adipogênico Controlado)
        <br />
        <span className="text-sm text-gray-500">🔜 Amplamente utilizado para estimular a formação de gordura em áreas da face que sofreram perda de volume, especialmente após o uso de canetas emagrecedoras.</span>
      </>
    ) },
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
