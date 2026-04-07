import { Zap, Sparkles, Shield, Target, Star } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

import equipFull from "@/assets/youlaser-prime/equipamento-full.webp";
import equipDetalhe from "@/assets/youlaser-prime/equipamento-detalhe.webp";
import antes from "@/assets/youlaser-prime/antes.webp";
import depois from "@/assets/youlaser-prime/depois.webp";
import rinofimaAntes from "@/assets/youlaser-prime/rinofima-antes.webp";
import rinofimaDepois from "@/assets/youlaser-prime/rinofima-depois.webp";

const data: ProcedurePageData = {
  title: (<>YOULASER PRIME<br /><span className="block">Laser CO2 Híbrido Exclusivo</span></>),
  subtitle: "A Ferrari dos lasers CO2. Tecnologia híbrida exclusiva em BH.",
  intro: (
    <>
      <p>O YouLaser Prime é um laser de CO2 fracionado de última geração, considerado referência mundial em rejuvenescimento e resurfacing. Sua tecnologia híbrida combina modos ablativo e não ablativo em uma única sessão, permitindo resultados superiores com recuperação mais rápida.</p>
      <p>Exclusivo em Belo Horizonte na Derma Concept Academy, este equipamento é ideal para tratamentos de cicatrizes de acne, rugas profundas, flacidez e irregularidades de textura da pele.</p>
      <p>O laser atua estimulando a produção de colágeno em profundidade, promovendo uma remodelação completa da pele. Os parâmetros são ajustados individualmente para cada paciente, garantindo segurança e máxima eficácia.</p>
    </>
  ),
  equipmentImages: [equipFull, equipDetalhe],
  beforeAfter: [
    { before: antes, after: depois, label: "Cicatriz de acne" },
    { before: rinofimaAntes, after: rinofimaDepois, label: "Rinofima" },
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
    { label: "Rosto", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=530&fit=crop" },
    { label: "Pescoço", image: "https://images.unsplash.com/photo-1594824476967-48c8b964cc90?w=400&h=530&fit=crop" },
    { label: "Colo", image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=530&fit=crop" },
    { label: "Mãos", image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=530&fit=crop" },
    { label: "Corpo", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=530&fit=crop" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Tecnologia de ponta operada por profissionais com formação avançada. Cada sessão é planejada com precisão para entregar o melhor resultado possível com máxima segurança.",
  },
};

export default function YouseLaserPrime() {
  return <ProcedurePageLayout data={data} />;
}
