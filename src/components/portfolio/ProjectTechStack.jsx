import { technologyIcons } from '../../data/technologyIcons.js';

export default function ProjectTechStack({ technologies }) {
  return (
    <ul className="project-tech-list" aria-label="Technologies used">
      {technologies.map((technology) => (
        <li key={technology} title={technology}>
          <img src={technologyIcons[technology]} alt="" loading="lazy" />
          <span className="sr-only">{technology}</span>
        </li>
      ))}
    </ul>
  );
}
