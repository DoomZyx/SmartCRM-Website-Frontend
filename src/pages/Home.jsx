import React from "react";

// Composants
import { HomeHero, HomeFeatures, HomeCTA } from "../components";

const Home = () => {
  return (
    <div className="home">
      <HomeHero />
      <HomeFeatures />
      <HomeCTA />
    </div>
  );
};

export default Home;
