import PortfolioStack from './PortfolioStack.jsx';
import { projects } from '../../data/projects.js';
import SectionTitle from '../ui/SectionTitle.jsx';

export default function PortfolioSection() {
  return (
    <section className="content-section container portfolio-section" id="work" aria-labelledby="work-title">
      <SectionTitle>Projects</SectionTitle>
      <div className="portfolio-heading">
        <h2 id="work-title">Selected work across full-stack, frontend, NGO, and portfolio systems.</h2>
      </div>
      <PortfolioStack projects={projects} />
    </section>
  );
}
