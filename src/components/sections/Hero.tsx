"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { resume } from "@/data/resume";
import { defaultTransition, fadeUp } from "@/lib/motion";

function HeroContent({ animated }: { animated: boolean }) {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const Wrapper = animated ? motion.div : "div";
  const Item = animated ? motion.div : "div";
  const itemProps = animated
    ? { variants: fadeUp, transition: defaultTransition }
    : {};

  const inner = (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 pt-24">
      <Item {...itemProps}>
        <p className="mb-4 text-sm font-medium text-accent">{resume.title}</p>
      </Item>
      <Item {...itemProps}>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          {resume.name}
        </h1>
      </Item>
      <Item {...itemProps}>
        <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted">
          {resume.tagline}
        </p>
      </Item>
      <Item {...itemProps}>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={scrollToProjects}
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            View Projects
          </button>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </div>
      </Item>
      <Item {...itemProps}>
        <button
          onClick={scrollToAbout}
          className="mt-24 flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={16} className="animate-bounce" />
          Scroll
        </button>
      </Item>
    </div>
  );

  if (!animated) {
    return inner;
  }

  return (
    <Wrapper
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {inner}
    </Wrapper>
  );
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="hero">
      <HeroContent animated={!shouldReduceMotion} />
    </section>
  );
}
