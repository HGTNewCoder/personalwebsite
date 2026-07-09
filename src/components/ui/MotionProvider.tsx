"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

/**
 * Applies reduced-motion behavior globally. With `reducedMotion="user"`,
 * framer-motion automatically skips transform/layout animations for users
 * who request reduced motion, so individual components no longer need to
 * branch on `useReducedMotion`.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
