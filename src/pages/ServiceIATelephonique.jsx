import React from "react";
import { PageContainer, Hero, Section, SectionHeader, CTASection } from "../components";

const ServiceIATelephonique = () => {
  return (
    <PageContainer className="service-page">
      <Hero
        title="IA "
        gradientText="Téléphonique"
        description="Intelligence artificielle pour automatiser vos appels téléphoniques. Analyse intelligente avec GPT et gestion complète avec Twilio."
      />

      <Section>
        <SectionHeader
          title="Gestion des appels avec Twilio"
          description="Automatisation et suivi des appels téléphoniques"
        />
        <div className="legal-content">
          <h3>Appels téléphoniques automatisés</h3>
          <p>Intégration complète avec Twilio pour automatiser vos appels sortants et gérer les appels entrants avec une qualité professionnelle.</p>
          
          <h3>Suivi en temps réel</h3>
          <ul>
            <li>Statut des appels en direct</li>
            <li>Durée et qualité de connexion</li>
            <li>Gestion des tentatives d'appel</li>
            <li>Historique complet des communications</li>
          </ul>
          
          <h3>Gestion des statuts d'appel</h3>
          <p>Système de statuts avancé : Nouveau, En cours, Terminé, Annulé, avec possibilité de transfert vers un humain si nécessaire.</p>
        </div>
      </Section>

      <Section variant="alt">
        <SectionHeader
          title="Analyse intelligente avec GPT"
          description="Traitement du langage naturel et extraction de données"
        />
        <div className="legal-content">
          <h3>Analyse du contenu des appels</h3>
          <p>Analyse automatique du contenu des conversations avec GPT pour extraire les informations clés et qualifier les prospects.</p>
          
          <h3>Traitement du langage naturel</h3>
          <ul>
            <li>Compréhension du contexte de la conversation</li>
            <li>Détection de l'intention du client</li>
            <li>Analyse du sentiment et de la satisfaction</li>
            <li>Identification des points d'intérêt</li>
          </ul>
          
          <h3>Qualification automatique</h3>
          <p>Qualification automatique des prospects basée sur le contenu de la conversation et les réponses données.</p>
          
          <h3>Extraction de données</h3>
          <p>Extraction automatique des informations importantes : coordonnées, besoins, budget, délais, etc.</p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Interface d'administration"
          description="Gestion et monitoring de vos appels"
        />
        <div className="legal-content">
          <h3>Authentification sécurisée</h3>
          <p>Système d'authentification JWT avec gestion des rôles et permissions pour sécuriser l'accès à l'interface d'administration.</p>
          
          <h3>Monitoring système</h3>
          <ul>
            <li>Tableau de bord en temps réel</li>
            <li>Statistiques d'appels détaillées</li>
            <li>Alertes et notifications</li>
            <li>Gestion des erreurs et incidents</li>
          </ul>
          
          <h3>Export des données</h3>
          <p>Export des données d'appels et analyses dans différents formats pour intégration avec vos outils existants.</p>
        </div>
      </Section>

      <CTASection
        title="Automatisez vos "
        gradientText="appels téléphoniques"
        description="Découvrez comment notre IA téléphonique peut transformer votre processus de vente et améliorer votre productivité."
        primaryButton="Demander une démonstration"
        secondaryButton="Parler à un expert"
      />
    </PageContainer>
  );
};

export default ServiceIATelephonique; 