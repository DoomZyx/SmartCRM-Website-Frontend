import React from "react";
import { CreditCard, LayoutDashboard } from "lucide-react";
import { PageContainer, Hero, Section } from "../components";
import RestaurateurProfilForm from "../components/RestaurateurProfil/RestaurateurProfilForm";
import { useAuth } from "../hooks/useAuth";
import { usePricingData } from "../hooks/usePricingData";
import "./MonEspace.scss";

const APP_URL = import.meta.env.VITE_APP_URL || "/app/";

const MonEspace = () => {
  const { user } = useAuth();
  const { plans } = usePricingData();

  const subscriptionPlan = user?.planId
    ? plans.find((p) => p.id === user.planId)
    : null;
  const subscriptionLabel = subscriptionPlan
    ? subscriptionPlan.name
    : user?.subscriptionPlan || null;
  const displaySubscription = subscriptionLabel || "Aucun abonnement actif";
  const hasAppAccess = Boolean(user?.smartcrmInstanceId);

  return (
    <PageContainer>
      <Hero
        title="Mon "
        gradientText="espace"
        description="Complétez les informations de votre établissement pour personnaliser votre expérience mySmartCRM."
      />
      <Section variant="alt">
        <div className="mon-espace-form-wrapper">
          <div className="mon-espace-subscription">
            <CreditCard className="mon-espace-subscription-icon" />
            <div>
              <h3 className="mon-espace-subscription-title">
                Votre abonnement
              </h3>
              <p className="mon-espace-subscription-value">
                {displaySubscription}
              </p>
            </div>
          </div>

          {hasAppAccess && (
            <div className="mon-espace-app-access">
              <LayoutDashboard className="mon-espace-app-access-icon" />
              <div className="mon-espace-app-access-content">
                <h3 className="mon-espace-app-access-title">
                  Application mySmartCRM
                </h3>
                <p className="mon-espace-app-access-desc">
                  Accédez à votre tableau de bord, commandes et réservations.
                </p>
                <a
                  href={APP_URL}
                  className="mon-espace-app-access-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir l&apos;application
                </a>
              </div>
            </div>
          )}

          <h2 className="mon-espace-form-title">
            Informations de l&apos;établissement
          </h2>
          <p className="mon-espace-form-intro">
            Ces informations (personnelles et restaurant) sont obligatoires. Elles sont transmises à votre instance pour que l&apos;application mySmartCRM et l&apos;IA téléphonique fonctionnent correctement avec vos données.
          </p>
          <RestaurateurProfilForm />
        </div>
      </Section>
    </PageContainer>
  );
};

export default MonEspace;
