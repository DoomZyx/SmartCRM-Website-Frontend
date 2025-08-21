import React from "react";
import { PageContainer, Hero, Section, SectionHeader, CTASection } from "../components";

const ServiceCRMIntegre = () => {
  return (
    <PageContainer className="service-page">
      <Hero
        title="CRM "
        gradientText="Intégré"
        description="CRM Analytics complet avec base de données MongoDB. Gestion des appels, suivi client et métriques de performance en temps réel."
      />

      <Section variant="alt">
        <SectionHeader
          title="Analytics et métriques"
          description="Tableaux de bord et KPIs en temps réel"
        />
        <div className="legal-content">
          <h3>KPIs en temps réel</h3>
          <p>Indicateurs de performance clés mis à jour en temps réel : nombre d'appels, durée moyenne, taux de conversion, satisfaction client.</p>
          
          <h3>Statistiques détaillées</h3>
          <p>Rapports détaillés sur l'activité téléphonique avec filtres avancés et export de données pour analyses externes.</p>
          
          <h3>Métriques de performance</h3>
          <p>Suivi des métriques clés : temps de réponse, taux de résolution, satisfaction client et ROI des campagnes téléphoniques.</p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Gestion des appels et suivi client"
          description="Interface complète de gestion"
        />
        <div className="legal-content">
          <h3>Liste des appels</h3>
          <ul>
            <li>Vue d'ensemble de tous les appels</li>
            <li>Filtres et recherche avancée</li>
            <li>Statuts d'appel en temps réel</li>
            <li>Historique complet des interactions</li>
          </ul>
          
          <h3>Suivi client intégré</h3>
          <p>Fiche client complète avec toutes les interactions téléphoniques, données extraites par GPT et historique des communications.</p>
          
          <h3>Interface responsive</h3>
          <p>Interface adaptée à tous les écrans avec navigation intuitive et accès rapide aux fonctionnalités principales.</p>
          
          <h3>Recherche globale</h3>
          <p>Recherche instantanée dans tous vos contacts, appels et données pour retrouver rapidement les informations nécessaires.</p>
        </div>
      </Section>

      <CTASection
        title="Découvrez notre "
        gradientText="CRM Analytics"
        description="Testez notre CRM intégré avec MongoDB et découvrez comment il peut améliorer votre gestion client et vos analyses d'appels."
        primaryButton="Demander une démonstration"
        secondaryButton="Parler à un expert"
      />
    </PageContainer>
  );
};

export default ServiceCRMIntegre; 