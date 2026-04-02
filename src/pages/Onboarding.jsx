import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PageContainer, Hero, Section } from "../components";
import { useAuth } from "../hooks/useAuth";
import { useCheckout } from "../hooks/useCheckout";
import "./Onboarding.scss";

const Onboarding = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const planIdParam = searchParams.get("planId");
  const planId = planIdParam ? parseInt(planIdParam, 10) : null;
  const hasPlanId = Number.isInteger(planId);

  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createCheckoutSession } = useCheckout();
  const email = user?.email || "";

  const handleGoToSpace = () => {
    navigate("/mon-espace");
  };

  const handleContinueToCheckout = async () => {
    setError(null);
    setIsSubmitting(true);
    try {
      await createCheckoutSession(planId);
    } catch (err) {
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (hasPlanId) {
    return (
      <PageContainer>
        <Hero
          title="Avant le paiement"
          gradientText="mySmartCRM"
          description="Vérifiez votre adresse e-mail, puis poursuivez vers le paiement sécurisé."
        />
        <Section variant="alt">
          <div className="onboarding-card">
            <h2 className="onboarding-title">Paiement</h2>
            <p className="onboarding-text">
              Votre adresse e-mail sera l&apos;identifiant principal pour
              accéder à l&apos;application.
            </p>
            <div className="onboarding-form">
              <div className="onboarding-form-group">
                <label htmlFor="onboarding-email">Adresse e-mail</label>
                <input
                  type="email"
                  id="onboarding-email"
                  value={email}
                  readOnly
                  className="onboarding-input-readonly"
                  aria-readonly="true"
                />
              </div>
              {error && (
                <p className="onboarding-form-error" role="alert">
                  {error}
                </p>
              )}
              <button
                type="button"
                className="btn btn-primary onboarding-button"
                disabled={isSubmitting}
                onClick={handleContinueToCheckout}
              >
                {isSubmitting
                  ? "Redirection vers le paiement..."
                  : "Continuer vers le paiement"}
              </button>
            </div>
          </div>
        </Section>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Hero
        title="Bienvenue sur "
        gradientText="mySmartCRM"
        description="Nous allons utiliser votre compte comme base de votre accès à l'application."
      />
      <Section variant="alt">
        <div className="onboarding-card">
          <h2 className="onboarding-title">Vos identifiants d&apos;accès</h2>
          <p className="onboarding-text">
            Vous êtes connecté avec l&apos;adresse&nbsp;:
          </p>
          <p className="onboarding-email">{email || "votre adresse e-mail"}</p>
          <p className="onboarding-text">
            Lorsque vous achèterez un abonnement, cette adresse e-mail sera
            utilisée comme identifiant principal pour accéder à
            l&apos;application mySmartCRM.
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
