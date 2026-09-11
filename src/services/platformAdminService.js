import { apiBaseUrl } from "./apiBase";

const API_BASE_URL = apiBaseUrl();

async function platformRequest(path, options = {}) {
  if (!API_BASE_URL) throw new Error("API non configurée.");
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {}),
    },
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || data.message || "Requête refusée");
  }
  return data;
}

export function fetchPlatformTenants(status) {
  const query = status ? `?status=${encodeURIComponent(status)}` : "";
  return platformRequest(`/api/platform/tenants${query}`);
}

export function assignPlatformPhone(tenantId, { phoneNumber, phoneNumberSid }) {
  return platformRequest(`/api/platform/tenants/${tenantId}/assign-phone`, {
    method: "POST",
    body: JSON.stringify({ phoneNumber, phoneNumberSid }),
  });
}

export function activatePlatformTenant(tenantId) {
  return platformRequest(`/api/platform/tenants/${tenantId}/activate`, {
    method: "POST",
  });
}
