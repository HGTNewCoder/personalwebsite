"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, resume } from "@/data/resume";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const onHero = activeSection === "hero";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...navLinks.map((link) => link.href.slice(1))];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const lightNav = onHero && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "on-dark bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10"
      >
        <a
          href="#hero"
          className={`font-mono-label transition-colors ${
            lightNav ? "text-white hover:text-white/70" : "text-foreground hover:text-muted"
          }`}
        >
          {resume.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`font-mono-label transition-colors ${
                    lightNav
                      ? isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className={`hidden rounded-full px-5 py-2.5 font-mono-label transition-all md:inline-flex ${
              lightNav
                ? "bg-white text-surface-dark hover:bg-white/90"
                : "bg-surface-dark text-white hover:bg-foreground/85"
            }`}
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className={`font-mono-label lg:hidden ${
              lightNav ? "text-white" : "text-foreground"
            }`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-6 md:px-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block w-full py-3 font-mono-label transition-colors ${
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex rounded-full bg-surface-dark px-5 py-2.5 font-mono-label text-white"
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
