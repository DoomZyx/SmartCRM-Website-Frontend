import React from "react";
import { useDemoModal } from "../../../contexts/DemoModalContext";
import "./HeaderActions.scss";

const HeaderActions = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <div className="header-actions">
      <button className="btn btn-primary" onClick={openDemoModal}>
        Demander une démo
      </button>
    </div>
  );
};

export default HeaderActions;
