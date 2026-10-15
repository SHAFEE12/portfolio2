import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/motion.js';
import { profile } from '../../data/profile.js';

const navItems = [
  {
    label: 'CareerOdyssey',
    href: 'https://careerodyssey.vercel.app/',
    target: '_blank',
  },
  { label: 'Project', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="site-header"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <nav className="glass-nav" aria-label="Main navigation">
        <a className="brand-link" href="#top" onClick={() => setIsMenuOpen(false)}>
          {profile.name}
        </a>

        <button
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="nav-links desktop-nav">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  );
}
