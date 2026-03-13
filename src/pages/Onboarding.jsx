import React from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, Hero, Section } from "../components";
import { useAuth } from "../hooks/useAuth";
import "./Onboarding.scss";

const Onboarding = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const email = user?.email || "votre adresse e-mail";

  const handleGoToSpace = () => {
    navigate("/mon-espace");
  };

  return (
    <PageContainer>
      <Hero
        title="Bienvenue sur "
        gradientText="mySmartCRM"
        description="Nous allons utiliser votre compte Google comme base de votre accès à l'application."
      />
      <Section variant="alt">
        <div className="onboarding-card">
          <h2 className="onboarding-title">Vos identifiants d&apos;accès</h2>
          <p className="onboarding-text">
            Vous êtes connecté avec l&apos;adresse&nbsp;:
          </p>
          <p className="onboarding-email">{email}</p>
          <p className="onboarding-text">
            Lorsque vous achèterez un abonnement, cette adresse e-mail sera
            utilisée comme identifiant principal pour accéder à l&apos;application
            mySmartCRM.
          </p>
          <p className="onboarding-text">
            Vous choisirez ensuite un mot de passe dédié à l&apos;application.{" "}
            Conservez bien cette adresse e-mail : elle servira pour tous vos
            futurs accès à votre espace mySmartCRM.
          </p>
          <button
            type="button"
            className="btn btn-primary onboarding-button"
            onClick={handleGoToSpace}
          >
            Continuer vers mon espace
          </button>
        </div>
      </Section>
    </PageContainer>
  );
};

export default Onboarding;

