import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/Shared/CookieBanner/CookieBanner";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import DemoModal from "./components/Shared/DemoModal/DemoModal";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { DemoModalProvider, useDemoModal } from "./contexts/DemoModalContext";
import { AuthProvider } from "./contexts/AuthContext";
import { AnimationProvider } from "./components/Shared/AnimationProvider/AnimationProvider";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AuthCallback from "./pages/AuthCallback";
import MonEspace from "./pages/MonEspace";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ServiceIATelephonique from "./pages/ServiceIATelephonique";
import FonctionnalitesPrevues from "./pages/FonctionnalitesPrevues";

/** Redirige vers le callback backend si Google a renvoyé l'utilisateur sur le frontend (mauvaise config redirect URI). */
function GoogleCallbackRedirect() {
  const apiBase = import.meta.env.VITE_API_BASE_URL || "";
  useEffect(() => {
    if (apiBase) {
      window.location.href = `${apiBase}/api/auth/google/callback${window.location.search}`;
    }
  }, [apiBase]);
  return <div>Redirection...</div>;
}

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
        <Route
          path="/fonctionnalites-prevues"
          element={<FonctionnalitesPrevues />}
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="api/auth/google"
          element={<Navigate to="/login" replace />}
        />
        <Route path="api/auth/callback" element={<AuthCallback />} />
        {/* Si Google redirige vers le frontend par erreur, renvoyer vers le backend avec le code */}
        <Route
          path="/api/auth/google/callback"
          element={<GoogleCallbackRedirect />}
        />
        <Route
          path="/mon-espace"
          element={
            <ProtectedRoute>
              <MonEspace />
            </ProtectedRoute>
          }
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
      <AnimationProvider>
        <AuthProvider>
          <DemoModalProvider>
            <AppContent />
          </DemoModalProvider>
        </AuthProvider>
      </AnimationProvider>
    </Router>
  );
}

export default App;
