import { motion } from 'framer-motion';

/**
 * A visual section label that sits on the container border. The semantic
 * heading remains in each section's content so its description can stay the
 * accessible section name.
 */
export default function SectionTitle({ children, className = '' }) {
  return (
    <motion.p
      aria-hidden="true"
      className={`section-title ${className}`.trim()}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.p>
  );
}
