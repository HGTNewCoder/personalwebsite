"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { BrushStroke } from "@/components/ui/BrushStroke";
import { InkText } from "@/components/ui/InkText";
import { InkTrail } from "@/components/ui/InkTrail";
import { InkWash } from "@/components/ui/InkWash";
import { Seal } from "@/components/ui/Seal";
import { resume } from "@/data/resume";
import { defaultTransition, fadeUp } from "@/lib/motion";

/** Each hero element settles in on its own beat, after the name is written. */
const settle = (delay: number) => ({
  variants: fadeUp,
  initial: "hidden",
  animate: "visible",
  transition: { ...defaultTransition, delay },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // As you scroll away, the hero dissolves like ink into water.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.7], [0, 12]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-svh flex-col overflow-hidden bg-background"
    >
      <InkWash />
      <InkTrail />

      <motion.div
        style={{ y, opacity, filter }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-20"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-7">
            <motion.p {...settle(0.1)} className="mb-6 font-mono-label text-muted">
              {resume.title}
            </motion.p>
            <div className="flex items-end gap-4 md:gap-6">
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                <InkText text={resume.name} trigger="mount" delay={0.25} />
              </h1>
              <Seal
                trigger="mount"
                delay={1.9}
                className="mb-1 h-11 w-11 md:mb-2 md:h-14 md:w-14 lg:h-16 lg:w-16"
              />
            </div>
            <BrushStroke
              trigger="mount"
              delay={0.95}
              duration={1}
              className="mt-5 h-4 w-full max-w-md text-foreground md:h-6 md:max-w-xl"
            />
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            <motion.p
              {...settle(1.25)}
              className="max-w-md text-base leading-relaxed text-muted md:text-lg"
            >
              {resume.tagline}
            </motion.p>
            <motion.div {...settle(1.4)} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-foreground px-6 py-3 font-mono-label text-background transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-foreground/40 px-6 py-3 font-mono-label text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.a
        {...settle(1.7)}
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 right-6 z-10 flex h-12 w-12 items-center justify-center border border-foreground/25 text-muted transition-colors hover:border-foreground/60 hover:text-foreground md:right-10"
      >
        <ArrowDown size={16} aria-hidden />
      </motion.a>
    </section>
  );
}
