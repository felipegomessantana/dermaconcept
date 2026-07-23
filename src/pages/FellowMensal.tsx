import { CalendarDays, CalendarClock, Clock, MapPin, Sparkles, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FellowHero from "@/components/fellow/FellowHero";
import FellowSobre from "@/components/fellow/FellowSobre";
import FellowCTA from "@/components/fellow/FellowCTA";

const FellowMensal = () => (
  <>
    <Header />
    <main>
      <FellowHero
        title={
          <>
            Fellow Mensal de{" "}
            <span className="italic">Cosmiatria</span>
          </>
        }
        description="Este fellow tem duração de 6 meses e ocorre em um final de semana por mês (3 dias inteiros). Ensina toda a dermatologia estética, do básico ao avançado, com aula teórica baseada em ciência e muito hands-on."
        meta="Vagas limitadas · 1 final de semana por mês"
        infoItems={[
          { label: "Duração", value: "6 meses", icon: CalendarDays },
          { label: "Formato", value: "1 fim de semana / mês", icon: CalendarClock },
          { label: "Carga", value: "3 dias inteiros", icon: Clock },
          { label: "Público", value: "Médicos", icon: Users },
          { label: "Local", value: "Belo Horizonte", icon: MapPin },
          { label: "Diferencial", value: "Teoria + hands-on intensivo", icon: Sparkles },
        ]}
      />
      <FellowSobre
        title="Formação completa, mês a mês"
        description="Mostra a realidade de um consultório: avaliação, indicação e resultado dos procedimentos. O aluno termina o curso com muita segurança para atender e se diferenciar no mercado."
        benefits={[
          "Ensina toda dermatologia estética, do básico ao avançado, do clássico ao que há de mais atual.",
          "Ensina a lidar com queixas, insatisfações, intercorrências, vendas e precificação.",
          "Aula teórica baseada em artigos científicos e literatura atualizada, com muito hands-on supervisionado.",
        ]}
        highlights={[
          { label: "Duração", value: "6 meses", sub: "Mensal" },
          { label: "Encontro", value: "3 dias", sub: "por mês" },
          { label: "Local", value: "BH", sub: "Derma Concept" },
        ]}
      />
      <FellowCTA />
    </main>
    <Footer />
  </>
);

export default FellowMensal;
