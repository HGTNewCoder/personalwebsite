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

function SkillsContent({ animated }: { animated: boolean }) {
  const CategoryWrapper = animated ? motion.div : "div";
  const categoryProps = animated
    ? { variants: fadeUp, transition: defaultTransition }
    : {};

  return (
    <div className="space-y-12">
      {resume.skills.categories.map((category) => (
        <CategoryWrapper
          key={category.title}
          {...categoryProps}
          className="space-y-6"
        >
          <h3 className="text-base font-semibold text-foreground">
            {category.title}
          </h3>
          <div className="space-y-5 pl-0 sm:pl-2">
            {category.groups.map((group) => (
              <div key={`${category.title}-${group.label}`}>
                <p className="mb-2 text-sm font-medium text-muted">
                  {group.label}
                </p>
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
        </CategoryWrapper>
      ))}
    </div>
  );
}

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <Section id="skills" title="Core Skills">
        <SkillsContent animated={false} />
      </Section>
    );
  }

  return (
    <Section id="skills" title="Core Skills">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <SkillsContent animated />
      </motion.div>
    </Section>
  );
}
