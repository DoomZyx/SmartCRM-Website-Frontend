import React from "react";
import { PageContainer, Hero, Section, SectionHeader, CTASection } from "../components";

const ServiceIATelephonique = () => {
  return (
    <PageContainer className="service-page">
      <Hero
        title="IA téléphonique "
        gradientText="pour la restauration"
        description="Révolutionnez l'accueil téléphonique de votre restaurant. Une IA conversationnelle branchée sur une application web, 24/7, pour récupérer le CA perdu des appels manqués."
      />

      <Section>
        <SectionHeader
          title="Plus d'appels manqués"
          description="Disponibilité 24h/24 et 7j/7 pour ne plus perdre une commande ou une réservation"
        />
        <div className="legal-content">
          <h3>Accueil téléphonique assuré en permanence</h3>
          <p>En coup de feu ou en dehors des heures d'ouverture, l'IA répond à chaque appel. Plus besoin de décrocher entre deux plats : l'assistant vocal prend les commandes et les réservations à votre place.</p>

          <h3>Solution dédiée aux restaurateurs</h3>
          <ul>
            <li>IA entraînée sur le cas d'usage des restaurants</li>
            <li>Compréhension des besoins et contraintes du métier</li>
            <li>Ce que les outils génériques (ElevenLabs, Ringover, Vapi) ne proposent pas</li>
          </ul>
        </div>
      </Section>

      <Section variant="alt">
        <SectionHeader
          title="Carte et menus personnalisables"
          description="L'IA a accès à votre carte pour répondre avec précision"
        />
        <div className="legal-content">
          <h3>Interface pensée pour la restauration</h3>
          <p>L'architecture et l'interface sont conçues pour personnaliser au maximum la carte : composition des sandwichs, plats, suppléments. L'assistant vocal connaît vos menus et peut renseigner les clients comme un membre de l'équipe.</p>

          <h3>Réservations et commandes</h3>
          <ul>
            <li>Prise de réservations via l'IA ou manuellement dans l'interface</li>
            <li>Commandes enregistrées dans l'interface</li>
            <li>Gestion des imprévus du quotidien : chaise haute, accueil des personnes en mobilité réduite</li>
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="CA générée et abonnement mensuel"
          description="Mesurez l'impact et testez à moindre coût"
        />
        <div className="legal-content">
          <h3>Chiffre d'affaires généré par l'assistant</h3>
          <p>Le tableau de bord calcule le CA généré par l'assistant vocal intelligent (commandes et réservations prises). Vous visualisez concrètement le retour sur investissement.</p>

          <h3>Abonnement avec minutes incluses</h3>
          <ul>
            <li>Durée d'appel limitée dans le mois selon la formule choisie</li>
            <li>Formule d'essai à petit budget (dès 60€/mois) pour tester sans s'engager</li>
            <li>Plusieurs paliers selon votre volume d'appels</li>
          </ul>
        </div>
      </Section>

      <CTASection
        title="Récupérez le CA "
        gradientText="des appels manqués"
        description="Demandez une démonstration et découvrez comment l'IA téléphonique peut transformer l'accueil de votre restaurant."
        primaryButton="Demander une démonstration"
        secondaryButton="Parler à un expert"
      />
    </PageContainer>
  );
};

export default ServiceIATelephonique;
