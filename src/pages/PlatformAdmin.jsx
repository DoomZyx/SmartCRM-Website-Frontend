import React, { useEffect, useState } from "react";
import { PageContainer, Hero, Section } from "../components";
import { useAuth } from "../hooks/useAuth";
import { usePlatformAdmin } from "../hooks/usePlatformAdmin";
import "./PlatformAdmin.scss";

const STATUS_LABELS = {
  pending_payment: "Paiement",
  pending_compliance: "Conformité",
  active: "Actif",
  suspended: "Suspendu",
};

function parsePhoneInput(value) {
  const trimmed = String(value || "").trim();
  if (/^PN[a-f0-9]{32}$/i.test(trimmed)) {
    return { phoneNumberSid: trimmed };
  }
  return { phoneNumber: trimmed };
}

const PlatformAdmin = () => {
  const { user, isInitialized } = useAuth();
  const { tenants, isLoading, error, busyId, loadTenants, assignPhone, activateTenant } =
    usePlatformAdmin();
  const [statusFilter, setStatusFilter] = useState("");
  const [phoneDrafts, setPhoneDrafts] = useState({});
  const [rowError, setRowError] = useState({});

  useEffect(() => {
    if (user?.isPlatformAdmin) {
      loadTenants(statusFilter || undefined);
    }
  }, [user?.isPlatformAdmin, statusFilter, loadTenants]);

  if (isInitialized && !user?.isPlatformAdmin) {
    return (
      <PageContainer>
        <Hero
          title="Onboarding"
          gradientText="plateforme"
          description="Cette page est réservée au compte plateforme."
        />
      </PageContainer>
    );
  }

  const handleAssign = async (tenantId) => {
    setRowError((current) => ({ ...current, [tenantId]: null }));
    try {
      await assignPhone(tenantId, parsePhoneInput(phoneDrafts[tenantId]));
      setPhoneDrafts((current) => ({ ...current, [tenantId]: "" }));
    } catch (err) {
      setRowError((current) => ({ ...current, [tenantId]: err.message }));
    }
  };

  const handleActivate = async (tenantId) => {
    setRowError((current) => ({ ...current, [tenantId]: null }));
    try {
      await activateTenant(tenantId);
    } catch (err) {
      setRowError((current) => ({ ...current, [tenantId]: err.message }));
    }
  };

  return (
    <PageContainer>
      <Hero
        title="Onboarding"
        gradientText="plateforme"
        description="Attribuez un numéro Twilio au webhook vocal du restaurant. Chaque slug isole les appels et les données."
      />
      <Section variant="alt">
        <div className="platform-admin">
          <div className="platform-admin-toolbar">
            <label htmlFor="platform-status-filter">Statut</label>
            <select
              id="platform-status-filter"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
            >
              <option value="">Tous</option>
              <option value="pending_compliance">Conformité</option>
              <option value="pending_payment">Paiement</option>
              <option value="active">Actif</option>
              <option value="suspended">Suspendu</option>
            </select>
          </div>

          {error && (
            <p className="platform-admin-error" role="alert">
              {error}
            </p>
          )}
          {isLoading && <p className="platform-admin-empty">Chargement...</p>}
          {!isLoading && tenants.length === 0 && (
            <p className="platform-admin-empty">Aucun établissement.</p>
          )}

          <ul className="platform-admin-list">
            {tenants.map((tenant) => (
              <li key={tenant.id} className="platform-admin-card">
                <div className="platform-admin-card-head">
                  <h2>{tenant.businessName || tenant.name}</h2>
                  <span className="platform-admin-status">
                    {STATUS_LABELS[tenant.status] || tenant.status}
                  </span>
                </div>
                <dl className="platform-admin-meta">
                  <div>
                    <dt>Slug</dt>
                    <dd>{tenant.slug}</dd>
                  </div>
                  <div>
                    <dt>Propriétaire</dt>
                    <dd>{tenant.ownerEmail}</dd>
                  </div>
                  <div>
                    <dt>Offre</dt>
                    <dd>{tenant.planName || tenant.planSlug || "—"}</dd>
                  </div>
                  <div>
                    <dt>Provisioning</dt>
                    <dd>{tenant.provisioningState || "—"}</dd>
                  </div>
                  <div>
                    <dt>Téléphone établissement</dt>
                    <dd>{tenant.restaurantPhone || "—"}</dd>
                  </div>
                  <div>
                    <dt>Numéro Twilio</dt>
                    <dd>{tenant.phoneNumber || "Non attribué"}</dd>
                  </div>
                  <div className="platform-admin-webhook">
                    <dt>Webhook vocal</dt>
                    <dd>
                      {tenant.voiceWebhookUrl ||
                        "Hôte vocal manquant (VOICE_GATEWAY_PUBLIC_HOST)"}
                    </dd>
                  </div>
                </dl>
                {tenant.phoneNumber && tenant.status !== "active" && (
                  <p className="platform-admin-empty">
                    Le numéro est enregistré. Activez l&apos;établissement pour
                    que Twilio accepte les appels sur ce slug.
                  </p>
                )}

                <div className="platform-admin-actions">
                  <label htmlFor={`phone-${tenant.id}`}>
                    Numéro E.164 ou SID Twilio
                  </label>
                  <div className="platform-admin-assign">
                    <input
                      id={`phone-${tenant.id}`}
                      type="text"
                      value={phoneDrafts[tenant.id] || ""}
                      onChange={(event) =>
                        setPhoneDrafts((current) => ({
                          ...current,
                          [tenant.id]: event.target.value,
                        }))
                      }
                      placeholder="+33123456789"
                      disabled={busyId === tenant.id}
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      disabled={busyId === tenant.id || !phoneDrafts[tenant.id]}
                      onClick={() => handleAssign(tenant.id)}
                    >
                      {busyId === tenant.id ? "Attribution..." : "Attribuer"}
                    </button>
                    {tenant.status !== "active" && (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        disabled={busyId === tenant.id}
                        onClick={() => handleActivate(tenant.id)}
                      >
                        Activer
                      </button>
                    )}
                  </div>
                  {rowError[tenant.id] && (
                    <p className="platform-admin-error" role="alert">
                      {rowError[tenant.id]}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </PageContainer>
  );
};

export default PlatformAdmin;
