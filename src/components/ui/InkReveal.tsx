"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { inkEase } from "@/lib/motion";

interface InkRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Where the ink drop lands, as a CSS position. */
  origin?: string;
}

const HIDDEN = -20;
const SHOWN = 110;

/** Reveals content as if a drop of ink spreads across the paper. */
export function InkReveal({
  children,
  className = "",
  delay = 0,
  origin = "30% 70%",
}: InkRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const radius = useMotionValue(HIDDEN);
  const mask = useTransform(
    radius,
    (r) => `radial-gradient(circle at ${origin}, #000 ${r}%, transparent ${r + 20}%)`
  );

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      radius.set(SHOWN);
      return;
    }
    const controls = animate(radius, SHOWN, { duration: 1.8, delay, ease: inkEase });
    return () => controls.stop();
  }, [inView, reduceMotion, radius, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      {children}
    </motion.div>
  );
}
