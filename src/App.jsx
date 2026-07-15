
import { useEffect, useRef } from "react";
import gsap from "gsap";

import useEasterEgg from "./hooks/useEasterEgg";

import {
  startEasterEggTimeline,
  playTimeline,
} from "./animations/easterEggTimeline";


import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import IntroSection from "./components/layout/IntroSection.jsx";
import AboutSection from "./components/layout/AboutSection.jsx";
import SkillsSection from "./components/layout/SkillsSection.jsx";
import CredentialsSection from "./components/layout/CredentialsSection.jsx";
import PortfolioSection from "./components/portfolio/PortfolioSection.jsx";
import ProfileIconRail from "./components/layout/ProfileIconRail.jsx";

export default function App() {

  const { isActive } = useEasterEgg();

useEffect(() => {

  console.log("🔥 Warming Backend...");

  fetch(`${import.meta.env.VITE_API_URL}/api/health`)
    .catch(() => {});

  fetch(`${import.meta.env.VITE_API_URL}/api/leetcode`)
    .catch(() => {});

}, []);

useEffect(() => {

    if(!isActive) return;

    console.log("🎬 Starting Master Timeline");

    startEasterEggTimeline();

    playTimeline();

},[isActive]);
  return (
    <>
      <div className="profile-section">
        <ProfileIconRail />
      </div>

      <div className="header-section">
        <Header />
      </div>

      <main className="main-section">

        <div className="intro-section">
          <IntroSection />
        </div>

        <div className="about-section">
          <AboutSection />
        </div>

        <div className="skills-section">
          <SkillsSection />
        </div>

        <div className="portfolio-section">
          <PortfolioSection />
        </div>

        <div className="credentials-section">
          <CredentialsSection />
        </div>

      </main>

      <div className="footer-section">
        <Footer />
      </div>

   
    </>
  );
}