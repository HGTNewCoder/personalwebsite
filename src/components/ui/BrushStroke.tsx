"use client";

import { motion } from "framer-motion";
import { useId } from "react";

interface BrushStrokeProps {
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: "mount" | "view";
}

/** Tapered stroke: pressed head on the left, thinning dry tail on the right. */
const STROKE_SHAPE =
  "M8 21 C 7 11, 20 6, 42 8 C 180 13, 400 9, 594 15 C 596 17, 594 19, 590 19 C 420 21, 200 29, 44 31 C 20 32, 9 29, 8 21 Z";

/** Path the "brush" travels along; animating it reveals the shape left to right. */
const BRUSH_PATH = "M0 20 C 150 14, 400 14, 600 18";

/** A brush stroke that paints itself on. Color follows `currentColor`. */
export function BrushStroke({
  className = "",
  delay = 0,
  duration = 1.1,
  trigger = "view",
}: BrushStrokeProps) {
  const id = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: { once: true, amount: 0.6 } };

  return (
    <motion.svg
      viewBox="0 0 600 40"
      preserveAspectRatio="none"
      aria-hidden
      className={`block ${className}`}
      initial="hidden"
      {...triggerProps}
    >
      <defs>
        <filter id={`rough-${id}`} x="-5%" y="-40%" width="110%" height="180%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.02 0.45"
            numOctaves="2"
            seed="4"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" />
        </filter>
        <mask id={`reveal-${id}`} maskUnits="userSpaceOnUse" x="0" y="0" width="600" height="40">
          <motion.path
            d={BRUSH_PATH}
            fill="none"
            stroke="white"
            strokeWidth="48"
            strokeLinecap="round"
            variants={{
              hidden: { pathLength: 0 },
              visible: {
                pathLength: 1,
                transition: { duration, delay, ease: [0.65, 0, 0.35, 1] },
              },
            }}
          />
        </mask>
      </defs>
      <path
        d={STROKE_SHAPE}
        fill="currentColor"
        filter={`url(#rough-${id})`}
        mask={`url(#reveal-${id})`}
      />
    </motion.svg>
  );
}
