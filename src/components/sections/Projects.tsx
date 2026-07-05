"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const grid = (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );

  if (shouldReduceMotion) {
    return (
      <Section id="projects" title="Projects" wide>
        {grid}
      </Section>
    );
  }

  return (
    <Section id="projects" title="Projects" wide>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-8 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </Section>
  );
}
