import { Variants } from "framer-motion";

/** Brush-like ease: quick attack, long soft release. */
export const inkEase = [0.22, 1, 0.36, 1] as const;

/** Content "settles" like wet ink: arrives slightly blurred and sharpens. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const defaultTransition = {
  duration: 0.9,
  ease: inkEase,
};

export const viewportOnce = {
  once: true,
  amount: 0.15,
};
