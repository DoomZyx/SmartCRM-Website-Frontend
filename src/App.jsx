import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import DemoModal from "./components/Shared/DemoModal/DemoModal";
import { DemoModalProvider, useDemoModal } from "./contexts/DemoModalContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

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
      </Routes>
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
