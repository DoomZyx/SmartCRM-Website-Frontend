import React from "react";
import { PageContainer, Hero, Section, SectionHeader, CTASection } from "../components";

const ServiceIntegrationsAPI = () => {
  return (
    <PageContainer className="service-page">
      <Hero
        title="Intégrations "
        gradientText="API"
        description="API REST complète pour intégrer SmartCRM à vos outils existants. Monitoring, tests automatisés et documentation technique."
      />

      <Section variant="alt">
        <SectionHeader
          title="Tarification des appels"
          description="Prix transparents et prévisibles"
        />
        <div className="legal-content">
          <h3>Prix de base</h3>
          <div className="feature-highlight">
            <h4>Exemple concret : Appel de 6 minutes</h4>
            <p>
              Un appel téléphonique de 6 minutes avec conseils et prise de rendez-vous 
              coûte <strong>0,86€</strong> (tarif particulier).
            </p>
          </div>
          
          <h3>Facteurs de coût</h3>
          <ul>
            <li><strong>Durée de l'appel</strong> : Facturation à la minute</li>
            <li><strong>Utilisation de l'IA</strong> : Analyse GPT en temps réel</li>
            <li><strong>Stockage des données</strong> : Sauvegarde dans MongoDB</li>
            <li><strong>Infrastructure</strong> : Serveurs et maintenance</li>
          </ul>
          
          <h3>Tarifs commerciaux</h3>
          <p>
            Les tarifs commerciaux pour les entreprises seront définis selon le volume 
            d'appels et les fonctionnalités spécifiques requises.
          </p>
          
          <h3>Optimisation des coûts</h3>
          <ul>
            <li>Appels ciblés et qualifiés</li>
            <li>Automatisation des tâches répétitives</li>
            <li>Réduction du temps de qualification</li>
            <li>Amélioration du taux de conversion</li>
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="API REST complète"
          description="Services API intégrés et endpoints disponibles"
        />
        <div className="legal-content">
          <h3>Services API intégrés</h3>
          <p>API REST complète permettant d'intégrer SmartCRM à vos systèmes existants avec authentification sécurisée et documentation détaillée.</p>
          
          <h3>Endpoints disponibles</h3>
          <ul>
            <li>Gestion des appels (GET, POST, PUT, DELETE)</li>
            <li>Gestion des contacts et clients</li>
            <li>Récupération des métriques et statistiques</li>
            <li>Export des données d'appels</li>
            <li>Gestion des utilisateurs et permissions</li>
          </ul>
          
          <h3>Authentification sécurisée</h3>
          <p>Système d'authentification JWT avec gestion des tokens, permissions granulaires et sécurité renforcée pour protéger vos données.</p>
        </div>
      </Section>

      <Section variant="alt">
        <SectionHeader
          title="Monitoring et performance"
          description="Surveillance en temps réel et métriques"
        />
        <div className="legal-content">
          <h3>Monitoring en temps réel</h3>
          <p>Surveillance continue des performances de l'API avec alertes automatiques en cas de problème ou de dégradation des performances.</p>
          
          <h3>Métriques de performance</h3>
          <ul>
            <li>Temps de réponse des endpoints</li>
            <li>Taux de succès des requêtes</li>
            <li>Utilisation des ressources</li>
            <li>Nombre de requêtes par minute</li>
          </ul>
          
          <h3>Limites de taux</h3>
          <p>Système de rate limiting configurable pour éviter la surcharge et assurer une performance optimale pour tous les utilisateurs.</p>
          
          <h3>Logs et historique</h3>
          <p>Journalisation complète de toutes les requêtes API avec horodatage, utilisateur et détails de la requête pour le debugging et l'audit.</p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Tests et configuration"
          description="Tests automatisés et configuration avancée"
        />
        <div className="legal-content">
          <h3>Tests API automatisés</h3>
          <p>Suite de tests automatisés pour valider le bon fonctionnement de tous les endpoints et détecter les régressions automatiquement.</p>
          
          <h3>Configuration avancée</h3>
          <ul>
            <li>Paramètres de sécurité personnalisables</li>
            <li>Configuration des webhooks</li>
            <li>Gestion des environnements (dev, staging, prod)</li>
            <li>Paramètres de performance</li>
          </ul>
          
          <h3>Sécurité et validation</h3>
          <p>Validation stricte des données d'entrée, protection contre les injections, et conformité aux standards de sécurité les plus élevés.</p>
          
          <h3>Documentation technique</h3>
          <p>Documentation complète de l'API avec exemples de code, spécifications OpenAPI et guides d'intégration pour faciliter l'implémentation.</p>
        </div>
      </Section>

      <CTASection
        title="Intégrez SmartCRM à vos "
        gradientText="outils"
        description="Découvrez comment notre API REST peut s'intégrer à votre écosystème existant et automatiser vos processus métier."
        primaryButton="Demander une démonstration"
        secondaryButton="Parler à un expert"
      />
    </PageContainer>
  );
};

export default ServiceIntegrationsAPI; 