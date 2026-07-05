import { ReactNode } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  wide?: boolean;
}

export function Section({ id, title, children, wide = false }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-24 md:py-32">
      <div
        className={`mx-auto px-6 ${wide ? "max-w-5xl" : "max-w-3xl"}`}
      >
        <AnimatedSection>
          <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-muted">
            {title}
          </h2>
        </AnimatedSection>
        {children}
      </div>
    </section>
  );
}
