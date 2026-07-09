export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SkillCategory {
  title: string;
  groups: SkillGroup[];
}

export interface Skills {
  categories: SkillCategory[];
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
  name: "Thinh Gia Ha",
  title: "AI Engineer",
  tagline: "Building thoughtful AI solutions with clean code and clear design.",
  about:
    "I'm an AI engineer passionate about creating useful, well-crafted AI solutions. I enjoy working across the stack — from designing intuitive interfaces to building reliable backends. I'm always learning and looking for opportunities to solve meaningful problems.",
  experience: [
    {
      company: "Beaver Works Summer Institute @ MIT",
      role: "Leader, OmniVox Project for CRE[AT]E Challenge",
      period: "Oct 2025 — Apr 2026",
      highlights: [
        "Built an Augmentative and Alternative Communication device for a patient with speech impairment.",
        "Developed the backend using the PyQt6 framework on a Raspberry Pi 5.",
        "Secured a $500 project grant from school administration.",
      ],
    },
    {
      company: "Beaver Works Summer Institute @ MIT",
      role: "Student, Remote Sensing for Disaster Response",
      period: "Jul 2025 — Aug 2025",
      highlights: [
        "Visualized hurricane path data with Pandas and Matplotlib, and optimized evacuation routes with Dijkstra's algorithm.",
        "Applied U-Net and DeepLabV3 for semantic segmentation to detect illegal logging in Sentinel-1 SAR imagery of Kalimantan, Indonesia.",
        "Model achieved 0.82 accuracy and 0.69 precision; results published in the International Journal of Advanced Research (IJAC).",
      ],
    },
  ],
  skills: {
    categories: [
      {
        title: "Software Engineer & Cloud Engineer",
        groups: [
          {
            label: "Programming Languages",
            items: ["C++", "Python", "Java"],
          },
          {
            label: "Cloud Computing",
            items: ["Google Cloud Platform (Vertex AI and Compute Engine), Microsoft Azure (Foundry)"],
          },
        ],
      },
      {
        title: "Data Science & AI",
        groups: [
          {
            label: "Libraries",
            items: [
              "Scikit-Learn",
              "NumPy",
              "Pandas",
              "PyTorch",
              "NLTK",
              "Hugging Face Transformers",
              "OpenCV",
              "Seaborn",
              "LangChain",
            ],
          },
          {
            label: "Mathematics Foundation",
            items: [
              "Linear Algebra",
              "Statistics",
              "Multivariable Calculus",
              "Convex Optimization",
              "Graph Theory",
            ],
          },
        ],
      },
    ],
  },
  contact: {
    email: "tgh26@fsu.edu",
    linkedin: "https://linkedin.com/in/hgtnewcoder",
    github: "https://github.com/HGTNewCoder",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];
