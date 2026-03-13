import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PageContainer, Hero, Section } from "../components";
import { useAuth } from "../hooks/useAuth";
import { useCheckout } from "../hooks/useCheckout";
import { setPasswordApi } from "../services/authService";
import "./Onboarding.scss";

const Onboarding = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const planIdParam = searchParams.get("planId");
  const planId = planIdParam ? parseInt(planIdParam, 10) : null;
  const hasPlanId = Number.isInteger(planId);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createCheckoutSession } = useCheckout();
  const email = user?.email || "";

  const handleGoToSpace = () => {
    navigate("/mon-espace");
  };

  const handleSubmitCheckout = async (e) => {
    e.preventDefault();
    setError(null);
    const p = (password || "").trim();
    const cp = (confirmPassword || "").trim();
    if (p.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    if (p !== cp) {
      setError("Les deux mots de passe ne correspondent pas.");
      return;
    }
    setIsSubmitting(true);
    try {
      await setPasswordApi(p);
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
          description="Confirmez votre adresse e-mail et définissez un mot de passe pour accéder à l'application pour pouvoir y accéder en tant qu'administrateur."
        />
        <Section variant="alt">
          <div className="onboarding-card">
            <h2 className="onboarding-title">Adresse e-mail et mot de passe</h2>
            <p className="onboarding-text">
              Votre adresse e-mail sera l&apos;identifiant principal pour
              accéder à l&apos;application. Choisissez un mot de passe d&apos;au
              moins 8 caractères.
            </p>
            <form onSubmit={handleSubmitCheckout} className="onboarding-form">
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
              <div className="onboarding-form-group">
                <label htmlFor="onboarding-password">Mot de passe</label>
                <input
                  type="password"
                  id="onboarding-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Minimum 8 caractères"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="onboarding-form-group">
                <label htmlFor="onboarding-confirm">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  id="onboarding-confirm"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirmer le mot de passe"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  disabled={isSubmitting}
                />
              </div>
              {error && (
                <p className="onboarding-form-error" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                className="btn btn-primary onboarding-button"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Redirection vers le paiement..."
                  : "Continuer vers le paiement"}
              </button>
            </form>
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
            l&apos;application mySmartCRM. Vous pourrez définir un mot de passe
            juste avant le paiement.
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
