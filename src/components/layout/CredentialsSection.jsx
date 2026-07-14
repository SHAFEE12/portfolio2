import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile.js';
import { revealItem, staggerContainer } from '../../utils/motion.js';

export default function CredentialsSection() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState(null);
  const featuredCertificate = profile.certificates[0];

  useEffect(() => {
    if (!isGalleryOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsGalleryOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen]);

  return (
    <section className="content-section container credentials-section" id="education" aria-labelledby="education-title">
      <motion.div
        className="credential-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        variants={staggerContainer}
      >
        <div>
          <p className="section-label">Education</p>
          <motion.article className="info-card education-card" variants={revealItem}>
            <h2 id="education-title">{profile.education.degree}</h2>
            <p>{profile.education.institute}</p>
            <span>{profile.education.years}</span>
          </motion.article>
        </div>

        <div>
          <p className="section-label">Certificate Gallery</p>
          <motion.article className="info-card certificate-card" variants={revealItem}>
            <button className="certificate-preview" type="button" onClick={() => setIsGalleryOpen(true)}>
              <img src={featuredCertificate.image} alt={featuredCertificate.alt} loading="lazy" />
              <span>
                <strong>{featuredCertificate.title}</strong>
                {/* <small>{featuredCertificate.description}</small> */}
                <p>click to preview</p>
              </span>
            </button>
          </motion.article>
        </div>
 
        {/* <motion.article className="info-card goals-card" variants={revealItem}>
           <p className="section-label">Goals</p>
          <ul>
            {profile.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul> 
        </motion.article>  */}
      </motion.div>

      {isGalleryOpen && (
        <div className="certificate-modal" role="dialog" aria-modal="true" aria-label="Certificate gallery">
          <button className="certificate-backdrop" type="button" aria-label="Close certificate gallery" onClick={() => setIsGalleryOpen(false)} />
          <div className="certificate-dialog">
            <div className="certificate-dialog-header">
              <h3>Certificate Gallery</h3>
              <button type="button" onClick={() => setIsGalleryOpen(false)}>Close</button>
            </div>
            <div className="certificate-gallery-grid">
              {profile.certificates.map((certificate, index) => (
                <article
                  className={`certificate-gallery-item ${selectedCertificateIndex === index ? 'selected' : ''}`}
                  key={certificate.title}
                >
                  <button
                    type="button"
                    className="certificate-gallery-image"
                    aria-label={`View ${certificate.title}`}
                    onClick={() => setSelectedCertificateIndex(selectedCertificateIndex === index ? null : index)}
                  >
                    <img src={certificate.image} alt={certificate.alt} loading="lazy" />
                  </button>
                  <div>
                    <h4>{certificate.title}</h4>
                    <p>{certificate.description}</p>
                    <a href={certificate.driveUrl} target="_blank" rel="noreferrer">
                      View certificate
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <div className="dashed-line"></div> */}
    </section>
  );
}