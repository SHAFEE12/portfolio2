import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/motion.js';
import { profile } from '../../data/profile.js';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
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
