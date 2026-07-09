"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/data/projects";
import { staggerContainer, viewportOnce } from "@/lib/motion";

export function Projects() {
  return (
    <Section id="projects" label="Projects" title="Selected work." wide>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid gap-6 sm:grid-cols-2 lg:gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </Section>
  );
}
