import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/motion.js';
import { profile } from '../../data/profile.js';

const footerLinks = [
  { label: 'project', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' }
];

const socialLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin }
];

export default function Footer() {
  return (
    <footer className="site-footer container" id="contact">
      <motion.div
        className="footer-panel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
      >



         <div className="footer-main">


{/* 
<div class="container1">
  <header class="header1">
    <div class="header-left"> <p className="section-label">Contact </p></div>
    <div class="header-right"><a  href={`mailto:${profile.email}`}>
            {profile.email}
          </a></div>
  </header>

  <main class="main-content1">
       <h2>Thanks for visiting my portfolio.</h2>
  </main>

  <footer class="footer1">
    <div class="footer-row-top"><a className="project-links" href="https://www.ummeedfoundationofindia.org/"   target="_blank" rel="noopener noreferrer"> 
                 ummeedfoundationofindia.org</a></div>
    <div class="footer-row-bottom"><a className="project-links" href="https://www.ummeedfoundationofindia.org/"   target="_blank" rel="noopener noreferrer"> 
                 ummeedfoundationofindia.org</a></div>
  </footer>
</div> */}











          <p className="section-label">Contact <span><a className="email-pill" href={`mailto:${profile.email}`}>
            {profile.email}
          </a></span></p>
          <h2>Thanks for visiting my portfolio.</h2>
          <div className="footer-divider" aria-hidden="true" />
        {/* <a className="project-links" href="https://www.ummeedfoundationofindia.org/"   target="_blank" rel="noopener noreferrer"> 
                 ummeedfoundationofindia.org</a> */}
       {/* <a className="project-links" href="https://www.ummeedfoundationofindia.org/"   target="_blank" rel="noopener noreferrer"> 
                 ummeedfoundationofindia.org</a>  */}

        </div> 

        








        <div className="footer-bottom">
          <p>&copy; 2026 {profile.name}</p>
          <nav aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="social-links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
