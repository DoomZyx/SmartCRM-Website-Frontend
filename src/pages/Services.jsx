import React from "react";

// Composants
import {
  PageContainer,
  Hero,
  Section,
  SectionHeader,
  FeaturesGrid,
  CTASection,
} from "../components";

// Hooks
import { useServicesData } from "../hooks/useServicesData";

const Services = () => {
  const { crmFeatures, aiFeatures, integrations } = useServicesData();

  return (
    <PageContainer>
      <Hero
        title="Une solution "
        gradientText="pour les restaurateurs"
        description="Accueil téléphonique 24/7 par l'IA, carte personnalisable, récupération du CA perdu. Conçu pour la restauration et la restauration rapide."
      />

      <Section variant="alt">
        <SectionHeader
          title="Carte, réservations et "
          gradientText="commandes"
          description="Personnalisez votre carte et laissez l'IA gérer réservations et commandes."
        />
        <FeaturesGrid features={crmFeatures} columns={4} />
      </Section>

      <Section>
        <SectionHeader
          title="IA vocale "
          gradientText="spécialisée restauration"
          description="Plus d'appels manqués. Une IA entraînée sur le cas d'usage des restaurants, pas un outil générique."
        />
        <FeaturesGrid features={aiFeatures} columns={4} variant="alt" />
      </Section>

      <Section variant="alt">
        <SectionHeader
          title="Pourquoi nous, pas "
          gradientText="les autres"
          description="Contrairement à ElevenLabs, Ringover ou Vapi : spécialisation restauration, carte dédiée, CA générée, imprévus du quotidien."
        />
        <FeaturesGrid features={integrations} columns={3} />
      </Section>

      <CTASection
        title="Prêt à récupérer le CA "
        gradientText="des appels manqués"
        description="Demandez une démonstration et testez avec un abonnement dès 60€/mois."
        primaryButton="Demander une démonstration"
      />
    </PageContainer> 
  );
};

export default Services;
