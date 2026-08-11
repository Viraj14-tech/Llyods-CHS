import type { Variants } from 'framer-motion';

export const navbarReveal: Variants = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const heroEyebrow: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.1 } }
};

export const heroHeadingContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.09 } }
};

export const heroHeadingLine: Variants = {
  initial: { y: "105%" },
  animate: { y: "0%", transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } }
};

export const heroBody: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] } }
};

export const heroCTA: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export const heroImageReveal: Variants = {
  initial: { clipPath: 'inset(0 0 100% 0)', scale: 1.04 },
  animate: { clipPath: 'inset(0 0 0% 0)', scale: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }
};

export const sectionHeading: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export const sectionLabel: Variants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: 0.6 } }
};

export const ruleDraw: Variants = {
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerContainer: Variants = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export const staggerColumn: Variants = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerRow: Variants = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export const locationMapReveal: Variants = {
  initial: { clipPath: 'inset(100% 0 0 0)' },
  whileInView: { clipPath: 'inset(0% 0 0 0)', transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};
