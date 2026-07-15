import { motion } from 'framer-motion';
import { profile } from '../../data/profile.js';
import { revealItem, staggerContainer } from '../../utils/motion.js';

const aboutUnderlinePath =
  'M222.462 12.8345C177.074 10.0328 132.077 4.80881 86.6062 3.64623C60.4691 2.97796 -17.6945 1.02174 8.17755 4.79475C50.7028 10.9964 94.6534 10.7971 137.47 14.9675C154.059 16.5834 170.516 18.7493 187.021 21.0384C193.373 21.9193 198.334 23.4078 188.17 22.8432C142.806 20.323 97.6784 14.7225 52.3141 12.0141C47.4732 11.7251 33.1304 11.5843 37.7934 12.9165C54.8856 17.8 73.2224 19.7239 90.7081 22.433C111.764 25.6952 133.161 27.7326 154.042 32.0315C161.542 33.5757 171.588 34.0575 178.571 37.1999C190.929 42.7607 151.511 39.3406 137.962 39.0868C115.414 38.6643 92.8916 37.3627 70.3626 36.4616';

function AboutUnderline() {
  return (
    <motion.svg
      aria-hidden="true"
      className="about-underline"
      fill="none"
      viewBox="0 0 225 43"
      whileHover="hover"
    >
      <motion.path
        d={aboutUnderlinePath}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              bounce: 0.3
            }
          },
          hover: {
            pathLength: [0, 1],
            transition: {
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1]
            }
          }
        }}
      />
    </motion.svg>
  );
}

export default function AboutSection() {
  return (
    <section className="content-section container" id="about" aria-labelledby="about-title">
      <motion.div
        className="section-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        variants={staggerContainer}
      >
        <motion.div variants={revealItem}>
          <p className="section-label">About</p>
          <h2 id="about-title"> Built full-stack web applications, solved 80+ DSA problems.</h2>
          <AboutUnderline />
        </motion.div>
        <motion.div className="prose-card" variants={revealItem}>
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}