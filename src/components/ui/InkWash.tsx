"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "left-[-12%] top-[-18%] h-[60vmax] w-[60vmax]",
    x: [0, 50, -20, 0],
    y: [0, 30, 15, 0],
    duration: 30,
  },
  {
    className: "right-[-18%] top-[15%] h-[45vmax] w-[45vmax]",
    x: [0, -40, 25, 0],
    y: [0, -25, 30, 0],
    duration: 36,
  },
  {
    className: "bottom-[-30%] left-[28%] h-[42vmax] w-[55vmax]",
    x: [0, 30, -35, 0],
    y: [0, -30, 10, 0],
    duration: 42,
  },
];

/** Slowly drifting ink-wash blooms behind the hero. */
export function InkWash() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute bg-foreground/[0.06] blur-3xl ${b.className}`}
          style={{ borderRadius: "42% 58% 63% 37% / 45% 40% 60% 55%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: b.x, y: b.y, rotate: [0, 10, -6, 0] }}
          transition={{
            opacity: { duration: 2.5, delay: 0.3 * i },
            default: { duration: b.duration, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      ))}
    </div>
  );
}
