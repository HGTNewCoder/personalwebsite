export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
}

export interface Resume {
  name: string;
  title: string;
  tagline: string;
  about: string;
  experience: Experience[];
  skills: Skills;
  contact: Contact;
}

export const resume: Resume = {
  name: "Your Name",
  title: "Software Developer",
  tagline: "Building thoughtful software with clean code and clear design.",
  about:
    "I'm a software developer passionate about creating useful, well-crafted applications. I enjoy working across the stack — from designing intuitive interfaces to building reliable backends. I'm always learning and looking for opportunities to solve meaningful problems.",
  experience: [
    {
      company: "Company Name",
      role: "Software Developer",
      period: "2023 — Present",
      highlights: [
        "Built and maintained web applications serving thousands of users.",
        "Collaborated with cross-functional teams to deliver features on schedule.",
        "Improved application performance and code quality through refactoring.",
      ],
    },
    {
      company: "Previous Company",
      role: "Junior Developer",
      period: "2021 — 2023",
      highlights: [
        "Developed new features for the company's main product.",
        "Participated in code reviews and agile development processes.",
        "Contributed to documentation and onboarding materials.",
      ],
    },
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "SQL"],
    frameworks: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    tools: ["Git", "Docker", "VS Code", "Figma"],
  },
  contact: {
    email: "you@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/HGTNewCoder",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
