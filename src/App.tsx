import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Lending from "./pages/Lending";
import Contact from "./pages/Contact";
import WebinarRegistration from "./pages/WebinarRegistration";
import News from "./pages/News";
import Leadership from "./pages/Leadership";
import GaryBechtel from "./pages/GaryBechtel";
import PaulCleary from "./pages/PaulCleary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/lending" element={<Lending />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/webinar" element={<WebinarRegistration />} />
          <Route path="/news" element={<News />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/leadership/gary-bechtel" element={<GaryBechtel />} />
          <Route path="/leadership/paul-cleary" element={<PaulCleary />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
