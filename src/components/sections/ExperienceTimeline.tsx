"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/layout/Section";
import { resume } from "@/data/resume";
import {
  defaultTransition,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  // The ink line is painted down the timeline as you scroll.
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <Section id="experience" label="Experience" title="Where I've built.">
      <motion.div
        ref={ref}
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <div aria-hidden className="absolute bottom-0 left-[6px] top-0 w-px bg-border" />
        <motion.div
          aria-hidden
          style={{ scaleY }}
          className="absolute bottom-0 left-[5px] top-0 w-[3px] origin-top rounded-full bg-foreground"
        />

        {resume.experience.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            variants={fadeUp}
            transition={defaultTransition}
            className="relative grid gap-6 border-t border-border py-12 pl-10 md:grid-cols-12 md:gap-8 md:pl-14"
          >
            <motion.span
              aria-hidden
              className="absolute left-0 top-[50px] h-[15px] w-[15px] bg-foreground"
              style={{ borderRadius: "46% 54% 50% 50% / 56% 44% 56% 44%" }}
              variants={{
                hidden: { scale: 0 },
                visible: {
                  scale: 1,
                  transition: { type: "spring", stiffness: 420, damping: 14, delay: 0.35 },
                },
              }}
            />
            <div className="md:col-span-3">
              <p className="font-mono-label text-muted-light">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-mono-label text-muted">{job.period}</p>
            </div>
            <div className="md:col-span-9">
              <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                  {job.role}
                </h3>
                <span className="font-mono-label text-muted">{job.company}</span>
              </div>
              <ul className="space-y-3">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-base leading-relaxed text-muted md:text-lg"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
