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
        title="Nos "
        gradientText="Services"
        description="Découvrez notre suite complète d'outils CRM et d'intelligence artificielle conçus pour révolutionner votre relation client."
      />

      <Section variant="alt">
        <SectionHeader
          title="CRM "
          gradientText="Intelligent"
          description="Un CRM moderne et puissant pour gérer efficacement vos clients, prospects et opportunités de vente."
        />
        <FeaturesGrid features={crmFeatures} columns={4} />
      </Section>

      <Section>
        <SectionHeader
          title="Chatbot "
          gradientText="IA"
          description="Automatisez vos conversations client avec notre intelligence artificielle conversationnelle de pointe."
        />
        <FeaturesGrid features={aiFeatures} columns={4} variant="alt" />
      </Section>

      {/* <Section variant="alt">
        <SectionHeader
          title="Intégrations "
          gradientText="Flexibles"
          description="Connectez SmartCRM à vos outils existants et accédez à vos données depuis n'importe où."
        />
        <FeaturesGrid features={integrations} columns={3} />
      </Section> */}

      <CTASection
        title="Prêt à découvrir nos "
        gradientText="services"
        description="Demandez-nous une démonstration et découvrez comment nous pouvons transformer votre business."
        primaryButton="Demander une démonstation"
      />
    </PageContainer> 
  );
};

export default Services;
