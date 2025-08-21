import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <div className="logo-icon">
        <span>S</span>
      </div>
      <span className="logo-text">mySmartCRM</span>
    </Link>
  );
};

export default Logo; 