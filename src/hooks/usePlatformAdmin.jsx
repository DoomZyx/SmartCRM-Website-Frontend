import { useCallback, useState } from "react";
import {
  activatePlatformTenant,
  assignPlatformPhone,
  fetchPlatformTenants,
} from "../services/platformAdminService";

export function usePlatformAdmin() {
  const [tenants, setTenants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [busyId, setBusyId] = useState(null);

  const loadTenants = useCallback(async (status) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchPlatformTenants(status);
      setTenants(data.tenants || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const assignPhone = async (tenantId, payload) => {
    setBusyId(tenantId);
    setError(null);
    try {
      const data = await assignPlatformPhone(tenantId, payload);
      setTenants((current) =>
        current.map((item) => (item.id === tenantId ? data.tenant : item))
      );
      return data.tenant;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setBusyId(null);
    }
  };

  const activateTenant = async (tenantId) => {
    setBusyId(tenantId);
    setError(null);
    try {
      const data = await activatePlatformTenant(tenantId);
      setTenants((current) =>
        current.map((item) => (item.id === tenantId ? data.tenant : item))
      );
      return data.tenant;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setBusyId(null);
    }
  };

  return {
    tenants,
    isLoading,
    error,
    busyId,
    loadTenants,
    assignPhone,
    activateTenant,
  };
}
