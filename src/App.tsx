import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Index2 from "./pages/Index2.tsx";
import Contato from "./pages/Contato.tsx";
import FellowSemanal from "./pages/FellowSemanal.tsx";
import MentoriaIndividual from "./pages/MentoriaIndividual.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v2" element={<Index2 />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/dermatologia-estetica-semanal" element={<FellowSemanal />} />
          <Route path="/mentoria-individual" element={<MentoriaIndividual />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
