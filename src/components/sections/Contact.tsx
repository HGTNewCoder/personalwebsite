import { Code2, Link, Mail } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { resume } from "@/data/resume";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${resume.contact.email}`,
    icon: Mail,
    display: resume.contact.email,
  },
  {
    label: "LinkedIn",
    href: resume.contact.linkedin,
    icon: Link,
    display: "LinkedIn",
  },
  {
    label: "GitHub",
    href: resume.contact.github,
    icon: Code2,
    display: "GitHub",
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <AnimatedSection delay={0.1}>
        <p className="mb-8 text-lg text-muted">
          Interested in working together? Feel free to reach out.
        </p>
        <ul className="space-y-4">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                className="group inline-flex items-center gap-3 text-foreground transition-colors hover:text-accent"
              >
                <link.icon
                  size={18}
                  className="text-muted transition-colors group-hover:text-accent"
                />
                <span>{link.display}</span>
              </a>
            </li>
          ))}
        </ul>
      </AnimatedSection>
      <footer className="mt-24 border-t border-border pt-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {resume.name}. Built with Next.js.
      </footer>
    </Section>
  );
}
