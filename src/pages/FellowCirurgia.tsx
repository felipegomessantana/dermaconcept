import { CalendarDays, CalendarClock, Clock, MapPin, Sparkles, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FellowHero from "@/components/fellow/FellowHero";
import FellowSobre from "@/components/fellow/FellowSobre";
import FellowCTA from "@/components/fellow/FellowCTA";

const FellowCirurgia = () => (
  <>
    <Header />
    <main>
      <FellowHero
        title={
          <>
            Fellow de{" "}
            <span className="italic">Cirurgia Dermatológica</span>
          </>
        }
        description="Programa único em Belo Horizonte para formar cirurgiões dermatológicos, com aulas teóricas e práticas abordando tumores e pequenas cirurgias estéticas. Duração de 6 meses, em um final de semana por mês (2 dias inteiros)."
        meta="Vagas limitadas · Único em Belo Horizonte"
        infoItems={[
          { label: "Duração", value: "6 meses", icon: CalendarDays },
          { label: "Formato", value: "1 fim de semana / mês", icon: CalendarClock },
          { label: "Carga", value: "2 dias inteiros", icon: Clock },
          { label: "Público", value: "Médicos", icon: Users },
          { label: "Local", value: "Belo Horizonte", icon: MapPin },
          { label: "Diferencial", value: "Único em BH", icon: Sparkles },
        ]}
      />
      <FellowSobre
        title="Prática supervisionada em cirurgia dermatológica"
        description="Para quem deseja alavancar a carreira e se destacar no mercado após dominar os principais procedimentos da cirurgia dermatológica."
        benefits={[
          "Aulas teóricas e práticas abordando tumores e pequenas cirurgias estéticas.",
          "Hands-on supervisionado por especialistas da área de cirurgia dermatológica.",
          "Coloque em prática o conhecimento obtido nas aulas teóricas com acompanhamento próximo.",
        ]}
        highlights={[
          { label: "Duração", value: "6 meses", sub: "Mensal" },
          { label: "Encontro", value: "2 dias", sub: "por mês" },
          { label: "Diferencial", value: "Único", sub: "em Belo Horizonte" },
        ]}
      />
      <FellowCTA />
    </main>
    <Footer />
  </>
);

export default FellowCirurgia;
