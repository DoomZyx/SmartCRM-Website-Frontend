import React from "react";
import { Link } from "react-router-dom";
import { useDemoModal } from "../../../contexts/DemoModalContext";
import { useAuth } from "../../../hooks/useAuth";
import "./HeaderActions.scss";

const HeaderActions = () => {
  const { openDemoModal } = useDemoModal();
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="header-actions">
      {isAuthenticated ? (
        <>
          <Link to="/mon-espace" className="btn btn-secondary header-link-btn">
            Mon espace
          </Link>
          <button
            type="button"
            className="btn btn-ghost-header"
            onClick={logout}
          >
            Déconnexion
          </button>
        </>
      ) : (
        <Link to="/login" className="btn btn-secondary header-link-btn">
          Se connecter
        </Link>
      )}
      <button className="btn btn-primary" onClick={openDemoModal}>
        Demander une démo
      </button>
    </div>
  );
};

export default HeaderActions;
