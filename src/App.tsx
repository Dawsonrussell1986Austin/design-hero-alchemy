import React from 'react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Lending from "./pages/Lending";
import BridgeLoans from "./pages/BridgeLoans";
import FhaHudLoans from "./pages/FhaHudLoans";
import CoreBridgeTerms from "./pages/CoreBridgeTerms";
import Hud241aTerms from "./pages/Hud241aTerms";
import Hud232223a7Terms from "./pages/Hud232223a7Terms";
import Hud232223fTerms from "./pages/Hud232223fTerms"; 
import Hud232221d4Terms from "./pages/Hud232221d4Terms";
import Hud221Terms from "./pages/Hud221Terms";
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
import BlogPhiladelphiaMidrise from "./pages/BlogPhiladelphiaMidrise";
import BlogAtlantaAcquisition from "./pages/BlogAtlantaAcquisition";
import BlogAtlantaFinancing from "./pages/BlogAtlantaFinancing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclosures from "./pages/Disclosures";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/lending" element={<Lending />} />
        <Route path="/lending/bridge" element={<BridgeLoans />} />
        <Route path="/lending/fha-hud" element={<FhaHudLoans />} />
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
        <Route path="/lending/bridge/core-bridge" element={<CoreBridgeTerms />} />
        <Route path="/lending/fha-hud/hud-241a" element={<Hud241aTerms />} />
        <Route path="/lending/fha-hud/hud-232-223a7" element={<Hud232223a7Terms />} />
        <Route path="/lending/fha-hud/hud-232-223f" element={<Hud232223fTerms />} />
        <Route path="/lending/fha-hud/hud-232-221" element={<Hud232221d4Terms />} />
        <Route path="/lending/fha-hud/hud-221" element={<Hud221Terms />} />
        <Route path="/lending/bridge/core-plus-bridge" element={<CorePlusBridge />} />
        <Route path="/lending/bridge/opportunistic-bridge" element={<OpportunisticBridge />} />
        <Route path="/lending/bridge/participating-bridge" element={<ParticipatingBridge />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/news/philadelphia-midrise" element={<BlogPhiladelphiaMidrise />} />
        <Route path="/news/atlanta-acquisition-loan" element={<BlogAtlantaAcquisition />} />
        <Route path="/news/atlanta-financing" element={<BlogAtlantaFinancing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclosures" element={<Disclosures />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;