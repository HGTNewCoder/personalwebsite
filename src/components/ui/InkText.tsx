"use client";

import { motion, Variants } from "framer-motion";
import { Fragment } from "react";
import { inkEase, viewportOnce } from "@/lib/motion";

interface InkTextProps {
  text: string;
  className?: string;
  delay?: number;
  /** "mount" animates on load (hero), "view" when scrolled into view. */
  trigger?: "mount" | "view";
}

const word: Variants = {
  hidden: { opacity: 0, y: "0.3em", filter: "blur(14px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: inkEase },
  },
};

/** Word-by-word reveal where each word soaks in like ink on paper. */
export function InkText({ text, className = "", delay = 0, trigger = "view" }: InkTextProps) {
  const words = text.split(" ");
  const triggerProps =
    trigger === "mount"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: viewportOnce };

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        initial="hidden"
        {...triggerProps}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: delay } },
        }}
      >
        {words.map((w, i) => (
          <Fragment key={`${w}-${i}`}>
            <motion.span className="inline-block" variants={word}>
              {w}
            </motion.span>
            {i < words.length - 1 && " "}
          </Fragment>
        ))}
      </motion.span>
    </span>
  );
}
