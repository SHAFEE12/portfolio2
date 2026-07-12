// import EasterEggOverlay from "./components/EasterEgg/EasterEggOverlay";
// import Header from './components/layout/Header.jsx';
// import Footer from './components/layout/Footer.jsx';
// import IntroSection from './components/layout/IntroSection.jsx';
// import AboutSection from './components/layout/AboutSection.jsx';
// import SkillsSection from './components/layout/SkillsSection.jsx';
// import CredentialsSection from './components/layout/CredentialsSection.jsx';
// import PortfolioSection from './components/portfolio/PortfolioSection.jsx';
// import ProfileIconRail from './components/layout/ProfileIconRail.jsx';

// export default function App() {
//   return (
//     <>
//       <ProfileIconRail />
//       <Header />
//       <main>
//         <IntroSection />
//         <AboutSection />
//         <SkillsSection />
//         <PortfolioSection />
//         <CredentialsSection />
//       </main>
//       <Footer />
//      <EasterEggOverlay />
//     </>
//   );
// }










import { useEffect, useRef } from "react";
import gsap from "gsap";

import useEasterEgg from "./hooks/useEasterEgg";

import {
  startEasterEggTimeline,
  playTimeline,
} from "./animations/easterEggTimeline";

// import EasterEggOverlay from "./components/EasterEgg/EasterEggOverlay";

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


//   useEffect(() => {
//   if (!isActive) return;

//   console.log("🔥 Easter Egg Started");

//   gsap.to(".ai-section", {
//   opacity: 0,
//   y: 40,
//   duration: 0.4,
// });

//   gsap.to(".footer-section", {
//     opacity: 0,
//     y: 80,
//     duration: 0.7,
//     ease: "power2.out",
//   });

// }, [isActive]);

// useEffect(() => {
//   if (!isActive) return;

//   console.log("🎬 Starting Timeline");

//   const tl = gsap.timeline();

//   timelineRef.current = tl;

//   // Step 1 - Close AI Window
//   tl.to(".ai-section", {
//     opacity: 0,
//     y: 40,
//     duration: 0.45,
//     ease: "power2.out",
//   });

//   // Step 2 - Footer disappears
// tl.to(".footer-section", {
//   opacity: 0,
//   y: 80,
//   duration: 0.5,
//   ease: "power2.out",
// });

//   // Wait after AI closes
//   tl.to({}, { duration: 0.25 });

// }, [isActive]);


// useEffect(() => {
//   console.log("App useEffect:", isActive);

//   if (!isActive) return;

//   console.log("🎬 Timeline Started");

//   const tl = gsap.timeline();

//   tl.to(".ai-section", {
//     opacity: 0,
//     y: 40,
//     duration: 0.5,
//     ease: "power2.out",
//     onStart: () => console.log("AI Animation Started"),
//     onComplete: () => console.log("AI Animation Completed"),
//   });

// }, [isActive]);

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

      {/* <EasterEggOverlay /> */}
    </>
  );
}