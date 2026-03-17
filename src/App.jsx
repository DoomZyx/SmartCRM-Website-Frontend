import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/Shared/CookieBanner/CookieBanner";
import ScrollToTop from "./components/Shared/ScrollToTop/ScrollToTop";
import DemoModal from "./components/Shared/DemoModal/DemoModal";
import LoginModal from "./components/Shared/LoginModal/LoginModal";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { DemoModalProvider, useDemoModal } from "./contexts/DemoModalContext";
import { LoginModalProvider, useLoginModal } from "./contexts/LoginModalContext";
import { AuthProvider } from "./contexts/AuthContext";
import { AnimationProvider } from "./components/Shared/AnimationProvider/AnimationProvider";
import ErrorBoundary from "./components/Shared/ErrorBoundary/ErrorBoundary";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import AuthCallback from "./pages/AuthCallback";
import MonEspace from "./pages/MonEspace";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import ServiceIATelephonique from "./pages/ServiceIATelephonique";
import FonctionnalitesPrevues from "./pages/FonctionnalitesPrevues";
import Onboarding from "./pages/Onboarding";

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

/** /login : ouvre la modale de connexion avec intent (planId, from) puis redirige vers /. */
function LoginRedirect() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { openLoginModal } = useLoginModal();

  useEffect(() => {
    const planIdParam = searchParams.get("planId");
    const planId = planIdParam ? parseInt(planIdParam, 10) : undefined;
    openLoginModal({
      planId: Number.isInteger(planId) ? planId : undefined,
      from: location.state?.from,
    });
    navigate("/", { replace: true });
  }, [location.state?.from, searchParams, openLoginModal, navigate]);

  return null;
}

function AppContent() {
  const { isDemoModalOpen, closeDemoModal } = useDemoModal();
  const { isLoginModalOpen, closeLoginModal } = useLoginModal();

  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
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
        <Route path="/login" element={<LoginRedirect />} />
        <Route
          path="api/auth/google"
          element={<Navigate to="/login" replace />}
        />
        <Route path="api/auth/callback" element={<AuthCallback />} />
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
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
      <CookieBanner />
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <AnimationProvider>
          <AuthProvider>
            <DemoModalProvider>
              <LoginModalProvider>
                <AppContent />
              </LoginModalProvider>
            </DemoModalProvider>
          </AuthProvider>
        </AnimationProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
