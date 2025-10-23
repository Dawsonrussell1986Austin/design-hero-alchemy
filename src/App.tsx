import React from 'react'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import HomepageDraft from "./pages/HomepageDraft";
import HomepageDraft2 from "./pages/HomepageDraft2";
import About from "./pages/About";
import Lending from "./pages/Lending";
import Investments from "./pages/Investments";
import BlogIndianapolisFinancing from "./pages/BlogIndianapolisFinancing";
import BlogExtensionNovember from "./pages/BlogExtensionNovember";
import BlogDallasDealSheet from "./pages/BlogDallasDealSheet";
import BlogExtensionOctober from "./pages/BlogExtensionOctober";
import BlogExtensionSeptember from "./pages/BlogExtensionSeptember";
import BlogExtensionJuly from "./pages/BlogExtensionJuly";
import Transactions from "./pages/Transactions";
import Investing from "./pages/Investing";
import BridgeLoans from "./pages/BridgeLoans";
import CoreBridge from "./pages/CoreBridge";
import CorePlusBridge from "./pages/CorePlusBridge";
import OpportunisticBridge from "./pages/OpportunisticBridge";
import ParticipatingBridge from "./pages/ParticipatingBridge";
import FhaHudLoans from "./pages/FhaHudLoans";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Disclosures from "./pages/Disclosures";
import Disclaimer from "./pages/Disclaimer";
import News from "./pages/News";
import WebinarRegistration from "./pages/WebinarRegistration";
import NotFound from "./pages/NotFound";
import Investors from "./pages/Investors";
import InvestorEducation from "./pages/InvestorEducation";
import Media from "./pages/Media";
import RobertKaplan from "./pages/RobertKaplan";
import BrookScardina from "./pages/BrookScardina";
import ThomasMcGovern from "./pages/ThomasMcGovern";
import MatthewWebster from "./pages/MatthewWebster";
import GaryBechtel from "./pages/GaryBechtel";
import PaulCleary from "./pages/PaulCleary";
import KevinKennedy from "./pages/KevinKennedy";
import RaymondDavis from "./pages/RaymondDavis";
import CoreBridgeTerms from "./pages/CoreBridgeTerms";
import Hud221Terms from "./pages/Hud221Terms";
import Hud232221d4Terms from "./pages/Hud232221d4Terms";
import Hud232223a7Terms from "./pages/Hud232223a7Terms";
import Hud232223fTerms from "./pages/Hud232223fTerms";
import Hud241aTerms from "./pages/Hud241aTerms";
import BlogAtlantaAcquisition from "./pages/BlogAtlantaAcquisition";
import BlogAtlantaFinancing from "./pages/BlogAtlantaFinancing";
import BlogPhiladelphiaMidrise from "./pages/BlogPhiladelphiaMidrise";
import OurSubsidiaries from "./pages/OurSubsidiaries";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/homepage-draft" element={<HomepageDraft />} />
        <Route path="/homepage-draft-2" element={<HomepageDraft2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/lending" element={<Lending />} />
        <Route path="/lending/bridge" element={<BridgeLoans />} />
        <Route path="/lending/fha-hud" element={<FhaHudLoans />} />
        <Route path="/whyoak" element={<Investments />} />
        <Route path="/investing" element={<Investing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webinar-registration" element={<WebinarRegistration />} />
        <Route path="/news" element={<News />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/subsidiaries" element={<OurSubsidiaries />} />
        <Route path="/leadership/gary-bechtel" element={<GaryBechtel />} />
        <Route path="/leadership/paul-cleary" element={<PaulCleary />} />
        <Route path="/leadership/kevin-kennedy" element={<KevinKennedy />} />
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
        <Route path="/news/indianapolis-financing" element={<BlogIndianapolisFinancing />} />
        <Route path="/news/extension-november-2024" element={<BlogExtensionNovember />} />
        <Route path="/news/dallas-deal-sheet" element={<BlogDallasDealSheet />} />
        <Route path="/news/extension-october-2024" element={<BlogExtensionOctober />} />
        <Route path="/news/extension-september-2024" element={<BlogExtensionSeptember />} />
        <Route path="/news/extension-july-2024" element={<BlogExtensionJuly />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclosures" element={<Disclosures />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/investor-education" element={<InvestorEducation />} />
        <Route path="/media" element={<Media />} />
        <Route path="/thank-you" element={<ThankYou />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;