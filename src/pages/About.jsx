import React from "react";

// Composants
import {
  PageContainer,
  Hero,
  Section,
  SectionHeader,
  StorySection,
  TeamCard,
  MissionSection,
  CTASection,
} from "../components";

// Hooks
import { useAboutData } from "../hooks/useAboutData";

const About = () => {
  const { storyData, teamMembers, missionData } = useAboutData();

  return (
    <PageContainer>
      <Hero
        title="À propos de "
        gradientText="mySmartCRM"
        description="Découvrez l'histoire, l'équipe et la mission qui font de SmartCRM le partenaire de confiance pour votre transformation digitale."
      />

      <Section variant="alt">
        <StorySection
          title={storyData.title}
          gradientText={storyData.gradientText}
          paragraphs={storyData.paragraphs}
          stats={storyData.stats}
        />
      </Section>

      <Section>
        <SectionHeader
          title="Notre "
          gradientText="Équipe"
        />
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} delay={index * 0.1} />
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <MissionSection
          title={missionData.title}
          gradientText={missionData.gradientText}
          description={missionData.description}
          buttonText={missionData.buttonText}
        />
      </Section>

      <CTASection
        title="Prêt à nous "
        gradientText="rejoindre"
        description="Rejoignez des milliers d'entreprises qui font confiance à SmartCRM pour leur transformation digitale."
        primaryButton="Demander une démonstation"
        secondaryButton="Parler à un expert"
      />
    </PageContainer>
  );
};

export default About;
