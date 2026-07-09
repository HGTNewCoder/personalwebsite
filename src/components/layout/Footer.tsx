import { navLinks, resume } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <h2 className="text-3xl font-semibold leading-[0.95] tracking-[-0.02em] text-foreground md:text-4xl lg:text-5xl">
              {resume.name}
            </h2>
            <p className="mt-6 font-mono-label text-muted">
              © {new Date().getFullYear()} {resume.name}. All rights reserved.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-6 font-mono-label text-muted-light">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono-label text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mb-6 font-mono-label text-muted-light">Connect</p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${resume.contact.email}`}
                  className="font-mono-label text-muted transition-colors hover:text-foreground"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={resume.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-label text-muted transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={resume.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-label text-muted transition-colors hover:text-foreground"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
