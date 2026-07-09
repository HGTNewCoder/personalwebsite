import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { resume } from "@/data/resume";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${resume.contact.email}`,
    display: resume.contact.email,
  },
  {
    label: "LinkedIn",
    href: resume.contact.linkedin,
    display: "LinkedIn",
  },
  {
    label: "GitHub",
    href: resume.contact.github,
    display: "GitHub",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's build something meaningful."
    >
      <AnimatedSection delay={0.1}>
        <p className="mb-12 max-w-xl text-lg text-muted md:text-xl">
          Interested in working together? Feel free to reach out.
        </p>
        <ul className="space-y-6">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-baseline gap-6 border-t border-border py-6 transition-colors hover:text-muted"
              >
                <span className="w-24 shrink-0 font-mono-label text-muted-light">
                  {link.label}
                </span>
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-muted md:text-xl">
                  {link.display}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </AnimatedSection>
    </Section>
  );
}
