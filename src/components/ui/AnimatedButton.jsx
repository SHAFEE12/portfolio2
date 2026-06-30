import { motion } from 'framer-motion';
import { primaryEase } from '../../utils/motion.js';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference.js';

export default function AnimatedButton({ href, children = 'View Project' }) {
  const prefersReducedMotion = useReducedMotionPreference();

  return (
    <motion.a
      className="animated-button"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${children} in a new tab`}
      whileHover={prefersReducedMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.45, ease: primaryEase }}
    >
      <span className="button-text-mask" aria-hidden="true">
        <span className="button-text-track">
          <span>{children}</span>
          <span>{children}</span>
        </span>
      </span>
      <span className="sr-only">{children}</span>
    </motion.a>
  );
}
