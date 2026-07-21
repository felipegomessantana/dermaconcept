import { Zap, Sparkles, Shield, Target, Star } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

import equipFull from "@/assets/youlaser-prime/equipamento-full.webp?w=480;768;1200&responsive";
import equipDetalhe from "@/assets/youlaser-prime/equipamento-detalhe.webp?w=480;768;1200&responsive";
import antes from "@/assets/youlaser-prime/antes.webp?w=480;768;1200&responsive";
import depois from "@/assets/youlaser-prime/depois.webp?w=480;768;1200&responsive";
import rinofimaAntes from "@/assets/youlaser-prime/rinofima-antes.webp?w=480;768;1200&responsive";
import rinofimaDepois from "@/assets/youlaser-prime/rinofima-depois.webp?w=480;768;1200&responsive";
import rejuvAntes from "@/assets/youlaser-prime/rejuvenescimento-antes.webp?w=480;768;1200&responsive";
import rejuvDepois from "@/assets/youlaser-prime/rejuvenescimento-depois.webp?w=480;768;1200&responsive";
import areaCorpo from "@/assets/youlaser-prime/corpo.jpg?w=480;768;1200&responsive";

const areaImage = (file: string) => `/paciente-modelo/peeling-quimico/${file}`;

const data: ProcedurePageData = {
  title: (<>YOULASER PRIME<br /><span className="block">Laser CO2 Híbrido Exclusivo</span></>),
  subtitle: "A Ferrari dos lasers CO2. Tecnologia híbrida exclusiva em BH.",
  intro: (
    <>
      <p>O YouLaser Prime é um laser de CO2 fracionado de última geração, considerado referência mundial em rejuvenescimento e resurfacing. Sua tecnologia híbrida combina modos ablativo e não ablativo em uma única sessão, permitindo resultados superiores com recuperação mais rápida.</p>
      <div className="my-6 border-l-4 pl-5 py-3 rounded-r-lg" style={{ borderColor: '#7A7168', backgroundColor: 'rgba(122, 113, 104, 0.06)' }}>
        <p className="font-serif text-lg md:text-xl text-gray-900 italic leading-relaxed">Exclusivo em Belo Horizonte na Derma Concept Academy, este equipamento é ideal para tratamentos de cicatrizes de acne, rugas profundas, flacidez e irregularidades de textura da pele.</p>
      </div>
      <p>O laser atua estimulando a produção de colágeno em profundidade, promovendo uma remodelação completa da pele. Os parâmetros são ajustados individualmente para cada paciente, garantindo segurança e máxima eficácia.</p>
    </>
  ),
  equipmentImages: [equipFull, equipDetalhe],
  beforeAfter: [
    { before: antes, after: depois, label: "Cicatriz de acne" },
    { before: rinofimaAntes, after: rinofimaDepois, label: "Rinofima" },
    { before: rejuvAntes, after: rejuvDepois, label: "Rejuvenescimento" },
  ],
  benefitsTitle: "Diferenciais da Tecnologia",
  benefits: [
    { icon: Zap, text: "Tecnologia híbrida: combina modo ablativo e não ablativo em uma única sessão." },
    { icon: Star, text: "Considerado a 'Ferrari dos lasers CO2' pela potência e precisão." },
    { icon: Target, text: "Tratamento de cicatrizes de acne, rugas profundas e irregularidades de textura." },
    { icon: Shield, text: "Recuperação mais rápida em comparação com lasers CO2 convencionais." },
    { icon: Sparkles, text: "Exclusivo em Belo Horizonte — disponível apenas na Derma Concept Academy." },
  ],
  indications: [
    {
      category: "Dermatologia e cirurgia dermatológica",
      items: ["Ceratose", "Fibroma", "Siringoma", "Verrugas", "Rinofima", "Blefaroplastia", "Condiloma", "Molusco", "Granuloma piogênico", "Neurofibroma", "Lesões cutâneas sólidas"],
    },
    {
      category: "Rejuvenescimento",
      items: ["Rugas", "Flacidez da pele", "Discromia da pele", "Cicatrizes de acne", "Cicatrizes hipertróficas", "Cicatrizes atróficas", "Poros aumentados"],
    },
    {
      category: "Íntimo",
      items: ["Atrofia Vaginal", "Flacidez Vaginal", "Rejuvenescimento e remodelação vulvar", "Incontinência Urinária de Esforço (IUE)"],
    },
  ],
  areas: [
    { label: "Rosto", imageSrc: areaImage("rosto.webp"), alt: "YouLaser Prime no rosto" },
    { label: "Pescoço", imageSrc: areaImage("pescoco.webp"), alt: "YouLaser Prime no pescoço" },
    { label: "Colo", imageSrc: areaImage("colo.webp"), alt: "YouLaser Prime no colo" },
    { label: "Mãos", imageSrc: areaImage("maos.webp"), alt: "YouLaser Prime nas mãos" },
    { label: "Corpo", image: areaCorpo, alt: "YouLaser Prime no corpo" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Tecnologia de ponta operada por profissionais com formação avançada. Cada sessão é planejada com precisão para entregar o melhor resultado possível com máxima segurança.",
  },
};

export default function YouseLaserPrime() {
  return <ProcedurePageLayout data={data} />;
}
