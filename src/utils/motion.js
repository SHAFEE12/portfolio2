export const primaryEase = [0.22, 1, 0.36, 1];

export const defaultTransition = {
  duration: 0.8,
  ease: primaryEase
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition
  }
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08
    }
  }
};

export const revealItem = {
  hidden: {
    opacity: 0,
    y: 28
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition
  }
};

export const cardEntrance = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: defaultTransition
  }
};
