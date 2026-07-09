import { ReactNode } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface SectionProps {
  id: string;
  label: string;
  title?: string;
  children: ReactNode;
  wide?: boolean;
  dark?: boolean;
}

export function Section({
  id,
  label,
  title,
  children,
  wide = false,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 md:py-32 lg:py-40 ${
        dark ? "on-dark bg-surface-dark text-white" : "bg-background"
      }`}
    >
      <div
        className={`mx-auto px-6 md:px-10 ${
          wide ? "max-w-7xl" : "max-w-5xl"
        }`}
      >
        <AnimatedSection>
          <p
            className={`mb-6 font-mono-label ${
              dark ? "text-white/50" : "text-muted"
            }`}
          >
            {label}
          </p>
          {title && (
            <h2
              className={`mb-16 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-4xl lg:text-5xl xl:text-6xl ${
                dark ? "text-white" : "text-foreground"
              }`}
            >
              {title}
            </h2>
          )}
        </AnimatedSection>
        {children}
      </div>
    </section>
  );
}
