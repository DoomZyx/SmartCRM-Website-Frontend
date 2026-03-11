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
        gradientText="transparents"
        description="Abonnement mensuel avec minutes d'appel incluses. Testez avec L'Echauffement dès 60€/mois, ou choisissez le volume adapté à votre activité."
      />

      <Section variant="alt">
        <PricingGrid plans={plans} />
      </Section>

      {addons.length > 0 && (
        <Section>
          <SectionHeader
            title="Modules "
            gradientText="Complémentaires"
            description="Personnalisez votre expérience avec nos modules additionnels."
          />
          <FeaturesGrid features={addons} columns={4} />
        </Section>
      )}

      <Section variant="alt">
        <SectionHeader
          title="Questions "
          gradientText="fréquentes"
          description="Tout ce que vous devez savoir sur les abonnements et les minutes incluses."
        />
        <FAQGrid faqs={faqs} />
      </Section>

      <CTASection
        title="Prêt à "
        gradientText="récupérer le CA perdu"
        description="Demandez une démonstration et testez l'accueil téléphonique 24/7 dès 60€/mois."
        primaryButton="Demander une démonstration"
        secondaryButton="Parler à un expert"
      />
    </PageContainer>
  );
};

export default Pricing;
