"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Project } from "@/data/projects";
import { defaultTransition, fadeUp } from "@/lib/motion";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      variants={fadeUp}
      transition={defaultTransition}
      className="group flex flex-col"
    >
      <div className="on-dark relative aspect-square overflow-hidden bg-surface-dark">
        {imgError ? (
          <div className="flex h-full w-full flex-col justify-between p-6 text-white/70">
            <span className="font-mono-label text-white/40">{number}</span>
            <span className="text-4xl font-semibold tracking-tight text-white/90">
              {project.title}
            </span>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            onError={() => setImgError(true)}
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col border-b border-border bg-surface px-5 py-6">
        <p className="mb-2 font-mono-label text-muted-light">{number}</p>
        <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground md:text-xl">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>
        <p className="mb-5 font-mono-label text-muted-light">
          {project.tags.join(" · ")}
        </p>
        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-auto flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-label text-foreground transition-colors hover:text-muted"
              >
                <Code2 size={14} aria-hidden />
                Code
                <span className="sr-only">for {project.title}</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono-label text-foreground transition-colors hover:text-muted"
              >
                <ExternalLink size={14} aria-hidden />
                Live
                <span className="sr-only">demo of {project.title}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
