import { ArrowUp, Target, Layers, Shield, Sparkles } from "lucide-react";
import { areaImages } from "@/assets/areas";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";
import equipFull from "@/assets/linear-z/equipamento-full.webp?w=480;768;1200&responsive";
import equipDetalhe from "@/assets/linear-z/equipamento-detalhe.webp?w=480;768;1200&responsive";
import fatAntes from "@/assets/linear-z/fat-proliferation-antes.webp?w=480;768;1200&responsive";
import fatDepois from "@/assets/linear-z/fat-proliferation-depois.webp?w=480;768;1200&responsive";
import fatRedAntes from "@/assets/linear-z/fat-prolif-reduction-antes.webp?w=480;768;1200&responsive";
import fatRedDepois from "@/assets/linear-z/fat-prolif-reduction-depois.webp?w=480;768;1200&responsive";
import fatTightAntes from "@/assets/linear-z/fat-prolif-tightening-antes.webp?w=480;768;1200&responsive";
import fatTightDepois from "@/assets/linear-z/fat-prolif-tightening-depois.webp?w=480;768;1200&responsive";
import fatEyeAntes from "@/assets/linear-z/fat-prolif-undereye-antes.webp?w=480;768;1200&responsive";
import fatEyeDepois from "@/assets/linear-z/fat-prolif-undereye-depois.webp?w=480;768;1200&responsive";
import fatRedTightAntes from "@/assets/linear-z/fat-reduction-tightening-antes.webp?w=480;768;1200&responsive";
import fatRedTightDepois from "@/assets/linear-z/fat-reduction-tightening-depois.webp?w=480;768;1200&responsive";
import fatReductionAntes from "@/assets/linear-z/fat-reduction-antes.webp?w=480;768;1200&responsive";
import fatReductionDepois from "@/assets/linear-z/fat-reduction-depois.webp?w=480;768;1200&responsive";
import fatHplAntes from "@/assets/linear-z/fat-reduction-hpl-antes.webp?w=480;768;1200&responsive";
import fatHplDepois from "@/assets/linear-z/fat-reduction-hpl-depois.webp?w=480;768;1200&responsive";

const data: ProcedurePageData = {
  title: (<>LINEAR Z<br /><span className="block">Ultrassom Micro e Macrofocado</span></>),
  subtitle: "Tecnologia não é tendência. É posicionamento.",
  intro: (
    <>
      <p>O Linear Z representa uma nova geração de ultrassom micro e macrofocado, capaz de tratar flacidez e gordura localizada com precisão, sem cortes e sem tempo de recuperação.</p>
      <div className="my-6 border-l-4 pl-5 py-3 rounded-r-lg" style={{ borderColor: '#7A7168', backgroundColor: 'rgba(122, 113, 104, 0.06)' }}>
        <p className="font-serif text-lg md:text-xl text-gray-900 italic leading-relaxed">Atuando em diferentes profundidades da pele, ele promove contração imediata e estímulo progressivo de colágeno, além de atuar na redução de gordura — entregando contorno, firmeza e definição facial e corporal.</p>
      </div>
    </>
  ),
  equipmentImages: [equipFull, equipDetalhe],
  beforeAfter: [
    { before: fatAntes, after: fatDepois, label: "Fat Proliferation / Tightening / Skin Texture" },
    { before: fatRedAntes, after: fatRedDepois, label: "Fat Proliferation + Fat Reduction + Tightening" },
    { before: fatTightAntes, after: fatTightDepois, label: "Fat Proliferation + Tightening" },
    { before: fatEyeAntes, after: fatEyeDepois, label: "Fat Proliferation – Under Eye" },
    { before: fatRedTightAntes, after: fatRedTightDepois, label: "Fat Reduction + Tightening" },
    { before: fatReductionAntes, after: fatReductionDepois, label: "Fat Reduction" },
    { before: fatHplAntes, after: fatHplDepois, label: "Fat Reduction + HPL" },
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
    { label: "Face completa", image: areaImages.face },
    { label: "Papada", image: areaImages.papada },
    { label: "Mandíbula", image: areaImages.mandibula },
    { label: "Pescoço", image: areaImages.pescoco },
    { label: "Abdômen", image: areaImages.abdomen },
    { label: "Flancos", image: areaImages.flancos },
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
