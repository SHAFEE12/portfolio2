
import { forwardRef } from 'react';
import AnimatedButton from '../ui/AnimatedButton.jsx';

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
          <AnimatedButton href={project.githubUrl}>
            GitHub
          </AnimatedButton>
        </div>

        <p className="project-category">{project.category}</p>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <p className="project-stack">{project.stack}</p>
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