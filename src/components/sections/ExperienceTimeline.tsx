"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { resume } from "@/data/resume";
import {
  defaultTransition,
  fadeUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

export function ExperienceTimeline() {
  return (
    <Section id="experience" label="Experience" title="Where I've built.">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {resume.experience.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            variants={fadeUp}
            transition={defaultTransition}
            className="grid gap-6 border-t border-border py-12 md:grid-cols-12 md:gap-8"
          >
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
