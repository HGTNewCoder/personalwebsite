import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const defaultTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
};

export const viewportOnce = {
  once: true,
  amount: 0.15,
};
