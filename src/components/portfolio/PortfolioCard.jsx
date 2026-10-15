
import { forwardRef } from 'react';
import AnimatedButton from '../ui/AnimatedButton.jsx';
import ProjectTechStack from './ProjectTechStack.jsx';

const PortfolioCard = forwardRef(function PortfolioCard(
  { project, className = '', style, ...props },
  ref
) {
  return (
    <article
      ref={ref}
      className={`portfolio-card ${className}`.trim()}
      style={style}
      {...props}
    >
      <div className="project-content">
        <div className="project-actions">
          <AnimatedButton href={project.link}>
            live
          </AnimatedButton>
          {project.githubUrl && (
            <AnimatedButton href={project.githubUrl}>
              GitHub
            </AnimatedButton>
          )}
        </div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ProjectTechStack technologies={project.technologies} />
      </div>

      <figure className="project-media">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
        />
      </figure>
    </article>
  );
});

export default PortfolioCard;
