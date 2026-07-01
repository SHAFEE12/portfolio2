import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile.js';
import { fadeUp } from '../../utils/motion.js';
import profileImage from '../../assets/shafee.png';

const resumeUrl = 'https://drive.google.com/file/d/18nMOv8Rd8j-XRghDTa5eWjQa_AUjBhUi/view?usp=sharing';
const resumePreviewUrl = 'https://drive.google.com/file/d/18nMOv8Rd8j-XRghDTa5eWjQa_AUjBhUi/preview';
const resumeDownloadUrl = 'https://drive.google.com/uc?export=download&id=18nMOv8Rd8j-XRghDTa5eWjQa_AUjBhUi';

function OpenIcon() {
  return (
    <svg aria-hidden="true" className="resume-action-icon" viewBox="0 0 24 24" fill="none">
      <path d="M14 5h5v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M19 5l-9 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M12 6H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

export default function IntroSection() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (!isResumeOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsResumeOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isResumeOpen]);

  return (
    <section className="intro-section container" id="top" aria-labelledby="intro-title">
      <motion.div
        className="intro-panel"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="intro-copy">
          {/* <p className="section-label">{profile.location}</p> */}
          <h1 id="intro-title">
            Shafee<span className="intro-name-suffix">'s</span>{' '}
            <span className="intro-name-portfolio">Portfolio</span>
          </h1>
          <p className="hero-role">
            <span className="desktop-role">{profile.role}</span>
            <span className="mobile-role">Full Stack Developer | DSA | B.Tech CSE</span>
          </p>
          <p className="hero-summary">
            Computer Science Engineering student building modern MERN applications,
            practicing DSA, and shaping useful web products with calm, responsive
            interfaces.
          </p>
          <div className="hero-actions">
            <button className="primary-link" type="button" onClick={() => setIsResumeOpen(true)}>
              Resume
            </button>
            <a className="secondary-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portfolio summary">
          <figure className="hero-image">
            {/* <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
              alt="Development workspace with laptop and code"
              loading="lazy"
            /> */}
            <img
              src={profileImage}
              alt="Shafee Ahmad"
              loading="lazy"
            />
          </figure>
          <div className="hero-stat hero-stat-one">
            {/* <span>2023 - 2027</span> */}
            <strong>MERN + DSA</strong>
          </div>
          <div className="hero-stat hero-stat-two">
            {/* <span>Focus</span> */}
            <strong>Interview Ready</strong>
          </div>
        </div>
      </motion.div>

      {isResumeOpen && (
        <div className="resume-modal" role="dialog" aria-modal="true" aria-label="Resume preview">
          <button className="resume-backdrop" type="button" aria-label="Close resume preview" onClick={() => setIsResumeOpen(false)} />
          <div className="resume-dialog">
            <div className="resume-frame-wrap">
              <iframe className="resume-frame" src={resumePreviewUrl} title="Resume preview" loading="lazy" />
            </div>
            <div className="resume-actions">
              <a className="resume-action" href={resumeDownloadUrl} target="_blank" rel="noreferrer">
                Download
              </a>
              <a className="resume-action resume-icon-action" href={resumeUrl} target="_blank" rel="noreferrer" aria-label="Open resume in browser">
                <OpenIcon />
              </a>
              <button className="resume-action" type="button" onClick={() => setIsResumeOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}