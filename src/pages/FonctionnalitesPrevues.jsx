import React from "react";
import { PageContainer, Hero, Section, SectionHeader, CTASection } from "../components";

const FonctionnalitesPrevues = () => {
  return (
    <PageContainer className="service-page">
      <Hero
        title="Fonctionnalités "
        gradientText="Prévues"
        description="Découvrez les fonctionnalités que nous développons pour faire évoluer SmartCRM selon vos besoins"
      />

      <Section>
        <SectionHeader
          title="Notre approche de développement"
          description="Développement itératif et transparent"
        />
        <div className="legal-content">
          <h3>Développement itératif</h3>
          <p>
            Nous développons SmartCRM de manière itérative, en ajoutant progressivement les fonctionnalités 
            les plus demandées par nos clients. Cette approche nous permet de rester agile et de répondre 
            rapidement aux besoins du marché.
          </p>
          
          <h3>Transparence totale</h3>
          <p>
            Nous croyons en la transparence. Cette page vous présente toutes les fonctionnalités que nous 
            prévoyons d'ajouter, avec une estimation réaliste des délais et des priorités.
          </p>
          
          <h3>Feedback client</h3>
          <p>
            Vos retours et suggestions influencent directement notre roadmap de développement. 
            Nous écoutons nos clients pour prioriser les fonctionnalités qui apportent le plus de valeur.
          </p>
        </div>
      </Section>

      <Section variant="alt">
        <SectionHeader
          title="Fonctionnalités en développement"
          description="Fonctionnalités actuellement en cours de développement"
        />
        <div className="legal-content">
          <h3>API documentée</h3>
          <p>
            Documentation complète de l'API REST avec exemples de code, spécifications OpenAPI 
            et guides d'intégration détaillés pour faciliter l'implémentation.
          </p>
          
          <h3>Gestion complète des contacts</h3>
          <p>
            L'IA pourra reconnaître un client lors d'un nouvel appel et récupérer automatiquement 
            ses données et informations renseignées lors des appels précédents.
          </p>
          
          <h3>Intégrations Calendly</h3>
          <p>
            Intégration directe avec Calendly pour la prise de rendez-vous automatique 
            et la synchronisation des disponibilités.
          </p>
          
          <h3>Intégrations Slack / Teams</h3>
          <p>
            Notifications et alertes automatiques dans vos outils de communication 
            d'équipe pour un suivi en temps réel.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Fonctionnalités prévues"
          description="Fonctionnalités planifiées pour les prochaines versions"
        />
        <div className="legal-content">
          <h3>Automatisation avancée</h3>
          <ul>
            <li>Création automatique de contacts depuis les appels</li>
            <li>Envoi automatique d'emails de suivi</li>
            <li>Rappels et notifications intelligentes</li>
            <li>Qualification automatique des prospects</li>
          </ul>
          
          <h3>Intégrations CRM</h3>
          <p>
            Intégrations avec les CRM populaires comme Salesforce et HubSpot 
            pour synchroniser automatiquement les données clients.
          </p>
          
          <h3>Fonctionnalités avancées</h3>
          <ul>
            <li>Analytics prédictifs et insights avancés</li>
            <li>Tableaux de bord personnalisables</li>
            <li>Workflows automatisés complexes</li>
            <li>Rapports avancés et exports personnalisés</li>
          </ul>
        </div>
      </Section>

      <Section variant="alt">
        <SectionHeader
          title="Important à noter"
          description="Informations importantes sur notre développement"
        />
        <div className="legal-content">
          <h3>Évolution progressive</h3>
          <p>
            Ces fonctionnalités seront ajoutées progressivement à mesure que notre entreprise évolue. 
            Les délais peuvent varier selon les priorités business et les retours clients.
          </p>
          
          <h3>Priorités flexibles</h3>
          <p>
            L'ordre de développement peut être modifié en fonction des demandes clients 
            et des opportunités du marché. Nous restons flexibles pour répondre aux besoins.
          </p>
          
          <h3>Communication transparente</h3>
          <p>
            Nous vous tiendrons informés des avancées et des modifications de la roadmap 
            via notre newsletter et les mises à jour du produit.
          </p>
        </div>
      </Section>

      <CTASection
        title="Participez à l'évolution de "
        gradientText="SmartCRM"
        description="Votre feedback est précieux ! Partagez vos suggestions et participez à façonner l'avenir de SmartCRM."
        primaryButton="Demander une démonstration"
        secondaryButton="Parler à un expert"
      />
    </PageContainer>
  );
};

export default FonctionnalitesPrevues; 