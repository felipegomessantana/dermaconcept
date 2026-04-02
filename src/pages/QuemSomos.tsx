import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuemSomosHero from "@/components/quem-somos/QuemSomosHero";
import NossaHistoriaSection from "@/components/quem-somos/NossaHistoriaSection";
import MissaoVisaoValores from "@/components/quem-somos/MissaoVisaoValores";
import NossaEstruturaSection from "@/components/quem-somos/NossaEstruturaSection";
import EquipeSection from "@/components/quem-somos/EquipeSection";

const QuemSomos = () => (
  <>
    <Header />
    <QuemSomosHero />
    <NossaHistoriaSection />
    <MissaoVisaoValores />
    <NossaEstruturaSection />
    <EquipeSection />
    <Footer />
  </>
);

export default QuemSomos;
