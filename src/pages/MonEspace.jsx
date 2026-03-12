import React from "react";
import { CreditCard } from "lucide-react";
import { PageContainer, Hero, Section } from "../components";
import RestaurateurProfilForm from "../components/RestaurateurProfil/RestaurateurProfilForm";
import { useAuth } from "../hooks/useAuth";
import { usePricingData } from "../hooks/usePricingData";
import "./MonEspace.scss";

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
          <h2 className="mon-espace-form-title">
            Informations de l&apos;établissement
          </h2>
          <RestaurateurProfilForm />
        </div>
      </Section>
    </PageContainer>
  );
};

export default MonEspace;
