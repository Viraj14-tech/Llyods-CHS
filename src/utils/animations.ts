// ==========================================
// MOTION TOKENS
// ==========================================

export const EASE_PRIMARY: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DUR = {
  FAST: 0.2,
  STD: 0.6,
  EDITORIAL: 0.8,
  IMAGE: 1.0,
};

// Viewport settings to prevent re-triggering and computation
export const VIEWPORT_OFFSET = { once: true, margin: '-10%' };
export const VIEWPORT_EARLY = { once: true, margin: '-5%' };

// ==========================================
// SHARED VARIANTS (Base Building Blocks)
// ==========================================
// Note: Complex, section-specific staggers and delays are defined 
// inside their respective components for bespoke art direction.

export const sectionLabel = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: DUR.STD, ease: 'easeOut' as const } }
};

export const ruleDraw = {
  initial: { scaleX: 0 },
  whileInView: { 
    scaleX: 1, 
    transition: { duration: DUR.EDITORIAL, ease: EASE_PRIMARY } 
  }
};

export const ruleDrawY = {
  initial: { scaleY: 0 },
  whileInView: { 
    scaleY: 1, 
    transition: { duration: DUR.EDITORIAL, ease: EASE_PRIMARY } 
  }
};

export const clipRevealRight = {
  initial: { clipPath: 'inset(0 100% 0 0)' },
  whileInView: { 
    clipPath: 'inset(0 0% 0 0)', 
    transition: { duration: DUR.EDITORIAL, ease: EASE_PRIMARY } 
  }
};

export const clipRevealLeft = {
  initial: { clipPath: 'inset(0 0 0 100%)' },
  whileInView: { 
    clipPath: 'inset(0 0 0 0%)', 
    transition: { duration: DUR.EDITORIAL, ease: EASE_PRIMARY } 
  }
};

export const clipRevealBottom = {
  initial: { clipPath: 'inset(100% 0 0 0)' },
  whileInView: { 
    clipPath: 'inset(0% 0 0 0)', 
    transition: { duration: DUR.EDITORIAL, ease: EASE_PRIMARY } 
  }
};

// ==========================================
// ACCESSIBILITY FALLBACKS
// ==========================================

export const reduceMotionFade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { duration: DUR.FAST } },
  animate: { opacity: 1, transition: { duration: DUR.FAST } }
};

export const reduceMotionStaggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  animate: { transition: { staggerChildren: 0.1 } }
};
