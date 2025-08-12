import React from "react";

// Composants
import {
  PageContainer,
  Hero,
  Section,
  SectionHeader,
  PricingGrid,
  FeaturesGrid,
  FAQGrid,
  CTASection,
} from "../components";

// Hooks
import { usePricingData } from "../hooks/usePricingData";

const Pricing = () => {
  const { plans, addons, faqs } = usePricingData();

  return (
    <PageContainer>
      <Hero
        title="Tarifs "
        gradientText="Transparents"
        description="Choisissez le plan qui correspond le mieux à vos besoins. Tous nos plans incluent une démonstration gratuite."
      />

      <Section variant="alt">
        <PricingGrid plans={plans} />
      </Section>

      <Section>
        <SectionHeader
          title="Modules "
          gradientText="Complémentaires"
          description="Personnalisez votre expérience avec nos modules additionnels."
        />
        <FeaturesGrid features={addons} columns={4} />
      </Section>

      <Section variant="alt">
        <SectionHeader
          title="Questions "
          gradientText="Fréquentes"
          description="Tout ce que vous devez savoir sur nos tarifs et plans."
        />
        <FAQGrid faqs={faqs} />
      </Section>

      <CTASection
        title="Prêt à "
        gradientText="commencer"
        description="Demandez-nous une démonstration et découvrez comment nous pouvons transformer votre business.
"
        primaryButton="Demander une démonstation"
        secondaryButton="Parler à un expert"
      />
    </PageContainer>
  );
};

export default Pricing;
