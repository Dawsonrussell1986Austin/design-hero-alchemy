import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Lending from "./pages/Lending";
import Investments from "./pages/Investments";
import Offerings from "./pages/Offerings";
import Contact from "./pages/Contact";
import WebinarRegistration from "./pages/WebinarRegistration";
import News from "./pages/News";
import Leadership from "./pages/Leadership";
import GaryBechtel from "./pages/GaryBechtel";
import PaulCleary from "./pages/PaulCleary";
import RaymondDavis from "./pages/RaymondDavis";
import MatthewWebster from "./pages/MatthewWebster";
import RobertKaplan from "./pages/RobertKaplan";
import ThomasMcGovern from "./pages/ThomasMcGovern";
import BrookScardina from "./pages/BrookScardina";
import CoreBridge from "./pages/CoreBridge";
import CorePlusBridge from "./pages/CorePlusBridge";
import OpportunisticBridge from "./pages/OpportunisticBridge";
import ParticipatingBridge from "./pages/ParticipatingBridge";
import Transactions from "./pages/Transactions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/lending" element={<Lending />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webinar" element={<WebinarRegistration />} />
        <Route path="/news" element={<News />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/leadership/gary-bechtel" element={<GaryBechtel />} />
        <Route path="/leadership/paul-cleary" element={<PaulCleary />} />
        <Route path="/leadership/raymond-davis" element={<RaymondDavis />} />
        <Route path="/leadership/matthew-webster" element={<MatthewWebster />} />
        <Route path="/leadership/robert-kaplan" element={<RobertKaplan />} />
        <Route path="/leadership/thomas-mcgovern" element={<ThomasMcGovern />} />
        <Route path="/leadership/brook-scardina" element={<BrookScardina />} />
        <Route path="/lending/core-bridge" element={<CoreBridge />} />
        <Route path="/lending/core-plus-bridge" element={<CorePlusBridge />} />
        <Route path="/lending/opportunistic-bridge" element={<OpportunisticBridge />} />
        <Route path="/lending/participating-bridge" element={<ParticipatingBridge />} />
        <Route path="/transactions" element={<Transactions />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
