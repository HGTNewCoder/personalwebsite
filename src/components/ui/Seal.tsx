"use client";

import { motion } from "framer-motion";
import { useId } from "react";

interface SealProps {
  className?: string;
  text?: string;
  delay?: number;
  trigger?: "mount" | "view";
}

/** A red name seal that "stamps" down with a springy press. */
export function Seal({ className = "", text = "HGT", delay = 0, trigger = "view" }: SealProps) {
  const id = `seal-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const stamped = { opacity: 1, scale: 1, rotate: -4 };
  const triggerProps =
    trigger === "mount"
      ? { animate: stamped }
      : { whileInView: stamped, viewport: { once: true, amount: 0.8 } };

  return (
    <motion.svg
      viewBox="0 0 64 64"
      aria-hidden
      className={`block shrink-0 ${className}`}
      initial={{ opacity: 0, scale: 1.8, rotate: -14 }}
      {...triggerProps}
      transition={{ type: "spring", stiffness: 520, damping: 20, mass: 0.8, delay }}
    >
      <defs>
        <filter id={id} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" />
        </filter>
      </defs>
      <g filter={`url(#${id})`}>
        <rect x="4" y="4" width="56" height="56" rx="4" style={{ fill: "var(--seal)" }} />
        <rect
          x="9"
          y="9"
          width="46"
          height="46"
          rx="2"
          fill="none"
          strokeWidth="1.5"
          style={{ stroke: "var(--background)" }}
        />
        <text
          x="32"
          y="37.5"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          letterSpacing="1.5"
          style={{ fill: "var(--background)", fontFamily: "var(--font-display)" }}
        >
          {text}
        </text>
      </g>
    </motion.svg>
  );
}
