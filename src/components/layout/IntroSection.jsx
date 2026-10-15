import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { profile } from '../../data/profile.js';
import { fadeUp } from '../../utils/motion.js';
import profileImage from '../../assets/shafee.png';
import { registerHeroVideo } from "../../utils/videoController";

import useEasterEgg from "../../hooks/useEasterEgg";
import secretVideo from "../../assets/videos/secret.mp4";

import { reverseTimeline } from "../../animations/easterEggTimeline";

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

  const handleVideoEnd = () => {
    reverseTimeline(() => stopEasterEgg());
  };

    const { isActive, stopEasterEgg } = useEasterEgg();
    const videoRef = useRef(null);
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



  useEffect(() => {
    if (videoRef.current) {
        registerHeroVideo(videoRef.current);
    
    }
}, []);

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
            Shafee's
            <span className="intro-name-portfolio">Portfolio</span>
          </h1>
          <p className="hero-role">
            <span className="desktop-role">{profile.role}</span>
            <span className="mobile-role">Full Stack Developer | DSA | B.Tech CSE</span>
          </p>
          <p className="hero-summary">
            Full-Stack Developer | MERN Stack | AI-Powered Web Products | React, Node.js, Express.js & MongoDB | JavaScript, Java & C++ | REST APIs | System Design | Data Structures & Algorithms | Product Engineering

          </p>
          <nav className="hero-social-links" aria-label="Professional profiles">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.24 3.35.95.1-.74.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.17.92-.26 1.9-.38 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.48 3.16-1.17 3.16-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.79.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" /></svg>
            </a>
            <a href="https://leetcode.com/u/shafee12/" target="_blank" rel="noreferrer" aria-label="LeetCode">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.5 4.5 7 12l7.5 7.5M10 12h8M16.5 7.5 19 5" /></svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.33 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.55V8.98h3.56v11.47ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" /></svg>
            </a>
          </nav>
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
           {/* <figure className="hero-image">
           
            <img
              src={profileImage}
              alt="Shafee Ahmad"
              loading="lazy"
            />
          </figure>  */}

            
          <figure className="hero-image">

  <img
    src={profileImage}
    alt="Shafee Ahmad"
    loading="lazy"
    className={`hero-photo ${isActive ? "hero-hidden" : ""}`}
  />


  
  <video
  ref={videoRef}
  className={`hero-secret-video ${isActive ? "hero-video-show" : ""}`}
  playsInline
  preload="auto"
  onEnded={handleVideoEnd}
>
  

    <source
      src={secretVideo}
      type="video/mp4"
    />
  </video>

</figure>
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
