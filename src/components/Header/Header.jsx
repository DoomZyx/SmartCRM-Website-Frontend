import React, { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import Navigation from "../Navigation/Navigation";
import HeaderActions from "./HeaderActions/HeaderActions";
import "./Header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="header-container">
        <div className="header-content">
          <Logo />
          <Navigation />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
