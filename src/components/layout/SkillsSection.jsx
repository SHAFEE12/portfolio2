import { motion } from 'framer-motion';
import { profile } from '../../data/profile.js';
import { revealItem, staggerContainer } from '../../utils/motion.js';

const techIconUrls = {
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  React: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  Vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'Express.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
  MongoDB: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
  Netlify: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg',
  Vercel: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg'
};

export default function SkillsSection() {
  return (
    <section className="content-section container" id="skills" aria-labelledby="skills-title">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={staggerContainer}
      >
        <motion.p className="section-label" variants={revealItem}>
          Skills
        </motion.p>
        <motion.h2 id="skills-title" variants={revealItem}>
          A practical stack for responsive products and real-world learning.
        </motion.h2>
      </motion.div>

      <motion.div
        className="skill-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {profile.skills.map((skillGroup) => (
          <motion.article className="skill-card" key={skillGroup.group} variants={revealItem}>
            <h3>{skillGroup.group}</h3>
            <div className="pill-list">
              {skillGroup.items.map((item) => (
                <span className="skill-pill" key={item}>
                  <img className="tech-icon" src={techIconUrls[item]} alt="" loading="lazy" />
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
