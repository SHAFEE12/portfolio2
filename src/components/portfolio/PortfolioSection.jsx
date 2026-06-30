import PortfolioStack from './PortfolioStack.jsx';
import { projects } from '../../data/projects.js';

export default function PortfolioSection() {
  return (
    <section className="portfolio-section" id="work" aria-labelledby="work-title">
      <div className="container portfolio-heading">
        <p className="section-label">Projects</p>
        <h2 id="work-title">Selected work across full-stack, frontend, NGO, and portfolio systems.</h2>
      </div>
      <PortfolioStack projects={projects} />
    </section>
  );
}
