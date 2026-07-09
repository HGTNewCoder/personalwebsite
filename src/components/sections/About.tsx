import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { resume } from "@/data/resume";

export function About() {
  return (
    <Section id="about" label="About">
      <AnimatedSection delay={0.1}>
        <p className="max-w-3xl text-xl leading-relaxed text-muted md:text-2xl md:leading-relaxed lg:text-3xl lg:leading-snug">
          {resume.about}
        </p>
      </AnimatedSection>
    </Section>
  );
}
