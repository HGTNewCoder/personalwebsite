export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "A full-stack web application for managing tasks and team collaboration. Features real-time updates and an intuitive dashboard.",
    image: "/projects/placeholder-1.svg",
    tags: ["React", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com/HGTNewCoder",
    liveUrl: null,
  },
  {
    title: "Project Beta",
    description:
      "An API service that processes and analyzes data streams. Built for reliability with automated testing and CI/CD.",
    image: "/projects/placeholder-2.svg",
    tags: ["Python", "FastAPI", "Docker"],
    githubUrl: "https://github.com/HGTNewCoder",
    liveUrl: null,
  },
  {
    title: "Project Gamma",
    description:
      "A responsive portfolio and content site with optimized performance and accessible design patterns.",
    image: "/projects/placeholder-3.svg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/HGTNewCoder",
    liveUrl: null,
  },
  {
    title: "Project Delta",
    description:
      "A mobile-friendly tool for tracking personal goals and habits, with data visualization and export features.",
    image: "/projects/placeholder-4.svg",
    tags: ["React", "Chart.js", "Firebase"],
    githubUrl: "https://github.com/HGTNewCoder",
    liveUrl: null,
  },
];
