import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/Shared/CookieBanner/CookieBanner";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import DemoModal from "./components/Shared/DemoModal/DemoModal";
import { DemoModalProvider, useDemoModal } from "./contexts/DemoModalContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ServiceIATelephonique from "./pages/ServiceIATelephonique";
import ServiceCRMIntegre from "./pages/ServiceCRMIntegre";
import ServiceIntegrationsAPI from "./pages/ServiceIntegrationsAPI";
import FonctionnalitesPrevues from "./pages/FonctionnalitesPrevues";

function AppContent() {
  const { isDemoModalOpen, closeDemoModal } = useDemoModal();

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route
          path="/politique-confidentialite"
          element={<PolitiqueConfidentialite />}
        />
        <Route
          path="/service-ia-telephonique"
          element={<ServiceIATelephonique />}
        />
        <Route path="/service-crm-integre" element={<ServiceCRMIntegre />} />
        <Route
          path="/service-integrations-api"
          element={<ServiceIntegrationsAPI />}
        />
        <Route
          path="/fonctionnalites-prevues"
          element={<FonctionnalitesPrevues />}
        />
      </Routes>
      <Footer />
      <CookieBanner />
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <DemoModalProvider>
        <AppContent />
      </DemoModalProvider>
    </Router>
  );
}

export default App;
