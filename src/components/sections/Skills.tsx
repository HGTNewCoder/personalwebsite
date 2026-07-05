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

const skillGroups = [
  { label: "Languages", items: resume.skills.languages },
  { label: "Frameworks", items: resume.skills.frameworks },
  { label: "Tools", items: resume.skills.tools },
];

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const content = (
    <div className="space-y-8">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <h3 className="mb-3 text-sm font-medium text-foreground">
            {group.label}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  if (shouldReduceMotion) {
    return (
      <Section id="skills" title="Skills">
        {content}
      </Section>
    );
  }

  return (
    <Section id="skills" title="Skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="space-y-8"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.label}
            variants={fadeUp}
            transition={defaultTransition}
          >
            <h3 className="mb-3 text-sm font-medium text-foreground">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
