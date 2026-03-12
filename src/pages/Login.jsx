import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { loginWithGoogle, getGoogleLoginUrl } from "../services/authService";
import { PageContainer, Hero, Section } from "../components";
import "./Login.scss";

const Login = () => {
  const { isAuthenticated, isInitialized } = useAuth();
  const navigate = useNavigate();
  const loginUrl = getGoogleLoginUrl();

  useEffect(() => {
    if (isInitialized && isAuthenticated) {
      navigate("/mon-espace", { replace: true });
    }
  }, [isInitialized, isAuthenticated, navigate]);

  const handleGoogleLogin = () => {
    if (loginUrl) {
      loginWithGoogle();
    }
  };

  if (!isInitialized) return null;

  return (
    <PageContainer>
      <Hero
        title="Connexion "
        gradientText="restaurateur"
        description="Connectez-vous avec votre compte Google pour accéder à votre espace et gérer les informations de votre établissement."
      />
      <Section variant="alt">
        <div className="login-card">
          <p className="login-info">
            L&apos;authentification Google permet un accès sécurisé à votre
            espace mySmartCRM sans créer de mot de passe.
          </p>
          <button
            type="button"
            className="btn btn-primary login-google-btn"
            onClick={handleGoogleLogin}
            disabled={!loginUrl}
          >
            <GoogleIcon />
            {loginUrl
              ? "Se connecter avec Google"
              : "Configuration API en cours"}
          </button>
          {!loginUrl && (
            <p className="login-hint">
              Définissez VITE_API_BASE_URL dans un fichier .env pour activer la
              connexion.
            </p>
          )}
        </div>
      </Section>
    </PageContainer>
  );
};

function GoogleIcon() {
  return (
    <svg
      className="google-icon"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default Login;
