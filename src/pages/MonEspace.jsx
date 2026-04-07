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
  const dossierPending =
    Boolean(user?.planId) &&
    !user?.smartcrmInstanceId &&
    Boolean(user?.twilioDocsSubmittedAt);
  const needsDossier =
    Boolean(user?.planId) &&
    !user?.smartcrmInstanceId &&
    !user?.twilioDocsSubmittedAt;

  return (
    <PageContainer>
      <Hero
        title="Mon "
        gradientText="espace"
        description="Consultez votre abonnement, transmettez les pièces pour Twilio et les coordonnées de votre restaurant. L&apos;accès à l&apos;application sera activé après traitement manuel par notre équipe."
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
                  Application mySmartFood
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

          {needsDossier && (
            <div className="mon-espace-instance-required">
              <LayoutDashboard className="mon-espace-instance-required-icon" />
              <div className="mon-espace-instance-required-content">
                <h3 className="mon-espace-instance-required-title">
                  Dossier Twilio et coordonnées
                </h3>
                <p className="mon-espace-instance-required-desc">
                  Joignez le KBIS (ou équivalent), la pièce d&apos;identité du
                  dirigeant recto et verso, une preuve d&apos;adresse de
                  l&apos;établissement (moins de 3 mois), et décrivez l&apos;usage
                  prévu du numéro. Formats : PDF ou image. Après validation vous
                  recevrez un e-mail : le lien vers l&apos;app sera disponible
                  ici.
                </p>
              </div>
            </div>
          )}

          {dossierPending && (
            <div className="mon-espace-instance-required">
              <LayoutDashboard className="mon-espace-instance-required-icon" />
              <div className="mon-espace-instance-required-content">
                <h3 className="mon-espace-instance-required-title">
                  Dossier en cours de traitement
                </h3>
                <p className="mon-espace-instance-required-desc">
                  Nous avons bien reçu vos documents. Notre équipe finalise la
                  configuration Twilio et votre instance. Vous recevrez un
                  e-mail dès que l&apos;application sera accessible depuis cet
                  espace (délai indicatif : 14 jours ouvrés maximum). Vous
                  pouvez toujours mettre à jour vos coordonnées ci-dessous.
                </p>
              </div>
            </div>
          )}

          <h2 className="mon-espace-form-title">
            Informations de l&apos;établissement
          </h2>
          <p className="mon-espace-form-intro">
            Ces données sont nécessaires pour l&apos;achat du numéro Twilio et
            la configuration de votre restaurant. Elles seront synchronisées
            avec votre application une fois celle-ci activée.
          </p>
          <RestaurateurProfilForm />
        </div>
      </Section>
    </PageContainer>
  );
};

export default MonEspace;
