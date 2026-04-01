import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FellowSemanalHero from "@/components/fellow-semanal/HeroSection";
import FellowSemanalSobre from "@/components/fellow-semanal/SobreSection";
import FellowSemanalCronograma from "@/components/fellow-semanal/CronogramaSection";
import FellowSemanalCTA from "@/components/fellow-semanal/CTASection";

const FellowSemanal = () => (
  <>
    <Header />
    <main>
      <FellowSemanalHero />
      <FellowSemanalSobre />
      <FellowSemanalCronograma />
      <FellowSemanalCTA />
    </main>
    <Footer />
  </>
);

export default FellowSemanal;
