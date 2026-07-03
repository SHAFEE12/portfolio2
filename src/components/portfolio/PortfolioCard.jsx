// import { forwardRef } from 'react';
// import { motion } from 'framer-motion';
// import AnimatedButton from '../ui/AnimatedButton.jsx';

// const PortfolioCard = forwardRef(function PortfolioCard({ project, className = '', style, ...props }, ref) {
//   return (
//     <motion.article
//       ref={ref}
//       className={`portfolio-card ${className}`.trim()}
//       style={style}
//       {...props}
//     >
//       <div className="project-content">
//         <p className="project-category">{project.category}</p>
//         <h3>{project.title}</h3>
//         <p>{project.description}</p>
//         <p className="project-stack">{project.stack}</p>
//         <AnimatedButton href={project.image}>View Project</AnimatedButton>
//       </div>
//       <figure className="project-media">
//         <img src={project.image} alt={project.alt} loading="lazy" />
//       </figure>
//     </motion.article>
//   );
// });

// export default PortfolioCard;






























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
          <AnimatedButton href={project.image}>
            View Project
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