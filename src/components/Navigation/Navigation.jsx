import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navigation.scss";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Nos Services", path: "/services" },
    { name: "À Propos", path: "/about" },
    { name: "Tarifs", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navigation">
      {/* Navigation Desktop */}
      <div className="nav-desktop">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-link ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu de navigation"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <div className="mobile-nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`mobile-nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 