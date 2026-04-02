import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Index from "./pages/Index.tsx";
import Index2 from "./pages/Index2.tsx";
import Contato from "./pages/Contato.tsx";
import FellowSemanal from "./pages/FellowSemanal.tsx";
import MentoriaIndividual from "./pages/MentoriaIndividual.tsx";
import QuemSomos from "./pages/QuemSomos.tsx";
import NotFound from "./pages/NotFound.tsx";

import PreenchimentoAcidoHialuronico from "./pages/paciente-modelo/PreenchimentoAcidoHialuronico.tsx";
import ToxinaBotulinica from "./pages/paciente-modelo/ToxinaBotulinica.tsx";
import YouseLaserPrime from "./pages/paciente-modelo/YouseLaserPrime.tsx";
import LinearZ from "./pages/paciente-modelo/LinearZ.tsx";
import Liftera from "./pages/paciente-modelo/Liftera.tsx";
import EthereaMX from "./pages/paciente-modelo/EthereaMX.tsx";
import JatoDePlasma from "./pages/paciente-modelo/JatoDePlasma.tsx";
import MesojectGun from "./pages/paciente-modelo/MesojectGun.tsx";
import BioestimuladoresColageno from "./pages/paciente-modelo/BioestimuladoresColageno.tsx";
import PeelingQuimico from "./pages/paciente-modelo/PeelingQuimico.tsx";
import FiosDePDO from "./pages/paciente-modelo/FiosDePDO.tsx";
import Intradermoterapia from "./pages/paciente-modelo/Intradermoterapia.tsx";
import Microagulhamento from "./pages/paciente-modelo/Microagulhamento.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v2" element={<Index2 />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/dermatologia-estetica-semanal" element={<FellowSemanal />} />
          <Route path="/mentoria-individual" element={<MentoriaIndividual />} />
          <Route path="/quem-somos" element={<QuemSomos />} />

          {/* Paciente Modelo */}
          <Route path="/paciente-modelo/preenchimento-acido-hialuronico" element={<PreenchimentoAcidoHialuronico />} />
          <Route path="/paciente-modelo/toxina-botulinica" element={<ToxinaBotulinica />} />
          <Route path="/paciente-modelo/youse-laser-prime" element={<YouseLaserPrime />} />
          <Route path="/paciente-modelo/linear-z" element={<LinearZ />} />
          <Route path="/paciente-modelo/liftera" element={<Liftera />} />
          <Route path="/paciente-modelo/etherea-mx" element={<EthereaMX />} />
          <Route path="/paciente-modelo/jato-de-plasma" element={<JatoDePlasma />} />
          <Route path="/paciente-modelo/mesoject-gun" element={<MesojectGun />} />
          <Route path="/paciente-modelo/bioestimuladores-colageno" element={<BioestimuladoresColageno />} />
          <Route path="/paciente-modelo/peeling-quimico" element={<PeelingQuimico />} />
          <Route path="/paciente-modelo/fios-de-pdo" element={<FiosDePDO />} />
          <Route path="/paciente-modelo/intradermoterapia" element={<Intradermoterapia />} />
          <Route path="/paciente-modelo/microagulhamento" element={<Microagulhamento />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
