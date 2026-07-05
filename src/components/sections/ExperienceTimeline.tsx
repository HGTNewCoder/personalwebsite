"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { resume } from "@/data/resume";
import {
  defaultTransition,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

export function ExperienceTimeline() {
  const shouldReduceMotion = useReducedMotion();

  const timeline = (
    <ol className="relative space-y-12 border-l border-border pl-8">
      {resume.experience.map((job) => (
        <li key={`${job.company}-${job.period}`} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
          <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-semibold text-foreground">{job.role}</h3>
            <span className="text-sm text-muted">{job.company}</span>
          </div>
          <p className="mb-4 text-sm text-muted">{job.period}</p>
          <ul className="space-y-2">
            {job.highlights.map((highlight) => (
              <li
                key={highlight}
                className="text-muted before:mr-2 before:text-accent before:content-['•']"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );

  if (shouldReduceMotion) {
    return (
      <Section id="experience" title="Experience">
        {timeline}
      </Section>
    );
  }

  return (
    <Section id="experience" title="Experience">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <ol className="relative space-y-12 border-l border-border pl-8">
          {resume.experience.map((job) => (
            <motion.li
              key={`${job.company}-${job.period}`}
              variants={fadeUp}
              transition={defaultTransition}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-semibold text-foreground">{job.role}</h3>
                <span className="text-sm text-muted">{job.company}</span>
              </div>
              <p className="mb-4 text-sm text-muted">{job.period}</p>
              <ul className="space-y-2">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-muted before:mr-2 before:text-accent before:content-['•']"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </Section>
  );
}
