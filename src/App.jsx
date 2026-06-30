import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import IntroSection from './components/layout/IntroSection.jsx';
import AboutSection from './components/layout/AboutSection.jsx';
import SkillsSection from './components/layout/SkillsSection.jsx';
import CredentialsSection from './components/layout/CredentialsSection.jsx';
import PortfolioSection from './components/portfolio/PortfolioSection.jsx';
import ProfileIconRail from './components/layout/ProfileIconRail.jsx';

export default function App() {
  return (
    <>
      <ProfileIconRail />
      <Header />
      <main>
        <IntroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <CredentialsSection />
      </main>
      <Footer />
    </>
  );
}
