import { Zap, Sparkles, Shield, Target, Star } from "lucide-react";
import ProcedurePageLayout, { type ProcedurePageData } from "@/components/procedure/ProcedurePageLayout";

const data: ProcedurePageData = {
  title: "Youse Laser Prime",
  subtitle: "A Ferrari dos lasers CO2. Tecnologia híbrida exclusiva em BH.",
  intro: (
    <>
      <p>O Youse Laser Prime é um laser de CO2 fracionado de última geração, considerado referência mundial em rejuvenescimento e resurfacing. Sua tecnologia híbrida combina modos ablativo e não ablativo em uma única sessão, permitindo resultados superiores com recuperação mais rápida.</p>
      <p>Exclusivo em Belo Horizonte na Derma Concept Academy, este equipamento é ideal para tratamentos de cicatrizes de acne, rugas profundas, flacidez e irregularidades de textura da pele.</p>
      <p>O laser atua estimulando a produção de colágeno em profundidade, promovendo uma remodelação completa da pele. Os parâmetros são ajustados individualmente para cada paciente, garantindo segurança e máxima eficácia.</p>
    </>
  ),
  benefitsTitle: "Diferenciais da Tecnologia",
  benefits: [
    { icon: Zap, text: "Tecnologia híbrida: combina modo ablativo e não ablativo em uma única sessão." },
    { icon: Star, text: "Considerado a 'Ferrari dos lasers CO2' pela potência e precisão." },
    { icon: Target, text: "Tratamento de cicatrizes de acne, rugas profundas e irregularidades de textura." },
    { icon: Shield, text: "Recuperação mais rápida em comparação com lasers CO2 convencionais." },
    { icon: Sparkles, text: "Exclusivo em Belo Horizonte — disponível apenas na Derma Concept Academy." },
  ],
  areas: [
    { label: "Rosto" },
    { label: "Pescoço" },
    { label: "Colo" },
    { label: "Mãos" },
    { label: "Corpo" },
  ],
  callout: {
    title: "A Experiência Derma Concept",
    text: "Tecnologia de ponta operada por profissionais com formação avançada. Cada sessão é planejada com precisão para entregar o melhor resultado possível com máxima segurança.",
  },
};

export default function YouseLaserPrime() {
  return <ProcedurePageLayout data={data} />;
}
