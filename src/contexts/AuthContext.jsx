import React, { createContext, useState, useEffect, useCallback } from "react";
import { getCurrentUser, logoutApi } from "../services/authService";

export const AuthContext = createContext(null);

const STORAGE_KEY_USER = "smartcrm_user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const isAuthenticated = !!user;

  const setAuth = useCallback((userData) => {
    setUser(userData);
    try {
      if (userData) {
        localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(userData));
      } else {
        localStorage.removeItem(STORAGE_KEY_USER);
      }
    } catch (e) {}
  }, []);

  const logout = useCallback(async () => {
    await logoutApi();
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY_USER);
    } catch (e) {}
  }, []);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      const storedUser = (() => {
        try {
          const raw = localStorage.getItem(STORAGE_KEY_USER);
          return raw ? JSON.parse(raw) : null;
        } catch {
          return null;
        }
      })();

      const apiUser = await getCurrentUser();
      if (cancelled) return;
      if (apiUser) {
        setUser(apiUser);
        try {
          localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(apiUser));
        } catch (e) {}
      } else {
        setUser(null);
        try {
          localStorage.removeItem(STORAGE_KEY_USER);
        } catch (e) {}
      }
      setIsInitialized(true);
    };

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  const value = {
    user,
    isAuthenticated,
    isInitialized,
    setAuth,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
