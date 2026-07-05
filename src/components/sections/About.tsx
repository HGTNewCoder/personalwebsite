import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { resume } from "@/data/resume";

export function About() {
  return (
    <Section id="about" title="About">
      <AnimatedSection delay={0.1}>
        <p className="text-lg leading-relaxed text-muted">{resume.about}</p>
      </AnimatedSection>
    </Section>
  );
}
