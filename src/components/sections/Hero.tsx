"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { resume } from "@/data/resume";
import { defaultTransition, fadeUp } from "@/lib/motion";

const item = { variants: fadeUp, transition: defaultTransition };

export function Hero() {
  return (
    <section
      id="hero"
      className="on-dark relative flex min-h-svh flex-col bg-surface-dark"
    >
      <div
        aria-hidden
        className="hero-grid absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a]"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-20"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <motion.p {...item} className="mb-6 font-mono-label text-white/60">
              {resume.title}
            </motion.p>
            <motion.h1
              {...item}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {resume.name}
            </motion.h1>
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <motion.p
              {...item}
              className="max-w-md text-base leading-relaxed text-white/70 md:text-lg"
            >
              {resume.tagline}
            </motion.p>
            <motion.div {...item} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 font-mono-label text-surface-dark transition-opacity hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/40 px-6 py-3 font-mono-label text-white transition-colors hover:border-white/70 hover:bg-white/5"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 right-6 flex h-12 w-12 items-center justify-center border border-white/25 text-white/70 transition-colors hover:border-white/50 hover:text-white md:right-10"
      >
        <ArrowDown size={16} aria-hidden />
      </a>
    </section>
  );
}
