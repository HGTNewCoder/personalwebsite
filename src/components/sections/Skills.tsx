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

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="Tools and foundations." dark>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-16 md:grid-cols-2 md:gap-12"
      >
        {resume.skills.categories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={fadeUp}
            transition={defaultTransition}
            className="border-t border-white/20 pt-12"
          >
            <p className="mb-8 font-mono-label text-white/60">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mb-10 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {category.title}
            </h3>
            <div className="space-y-8">
              {category.groups.map((group) => (
                <div key={`${category.title}-${group.label}`}>
                  <p className="mb-4 font-mono-label text-white/60">
                    {group.label}
                  </p>
                  <p className="text-base leading-relaxed text-white/80 md:text-lg">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
