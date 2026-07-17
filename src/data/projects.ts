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
    title: "Minecraft Server Agent",
    description:
      "An AI-powered Minecraft server manager that turns natural-language requests into orchestrated plugin installs, verification, and rollbacks — currently a live preview of the product I'm building.",
    image: "/projects/minecraft_server_agent.png",
    tags: ["AI Agents", "Python", "TypeScript", "FastAPI"],
    githubUrl: "https://github.com/HGTNewCoder/MCAgent",
    liveUrl: "https://mc-agent-ecru.vercel.app/",
  },
  {
    title: "Vietnamese Lunar New Year",
    description:
      "A week-long Tet celebration featuring a Vietnamese Calligraphy workshop I introduced to the school, which drew participation from about 80% of students and teachers.",
    image: "/projects/vietnamese_lunar_new_year.png",
    tags: ["Non-Technical"],
    githubUrl: null,
    liveUrl: "https://drive.google.com/drive/u/0/folders/1uh1aBXc25kzYCoHGv3LCatIRniBQ5Del",
  },
  {
    title: "Live Healthy",
    description:
      "A minimal Flask web application designed for looking up local health and nutrition information based on the user's location.",
    image: "/projects/live_healthy.png",
    tags: ["LLMs", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/HGTNewCoder/LiveHealthy",
    liveUrl: "https://nutrition-llms.onrender.com/",
  },
  {
    title: "Deforestation Detection",
    description:
      "A computer vision project that detects deforestation in satellite imagery using the U-Net model.",
    image: "/projects/deforestation_detection.png",
    tags: ["Computer Vision", "Segmentation", "Satellite Imagery Analysis"],
    githubUrl: "https://github.com/HGTNewCoder/deforest_detection",
    liveUrl: null,
  },
  {
    title: "Metadata Extraction System for Research Papers",
    description:
      "A Python script designed for bibliography extraction from research papers.",
    image: "/projects/grobid2.png",
    tags: ["Machine Learning", "NLP", "Bibliography Extraction"],
    githubUrl: "https://github.com/HGTNewCoder/grobid2",
    liveUrl: null,
  },
  {
    title: "OmniVox",
    description:
      "An assistive communication software platform developed in Python for Raspberry Pi 4 and 5 device.",
    image: "/projects/omnivox.png",
    tags: ["Python", "Raspberry Pi", "Assistive Technology"],
    githubUrl: "https://github.com/HGTNewCoder/OmniVox",
    liveUrl: null,
  },
  {
    title: "Prom Proposal",
    description:
      "A simple, static single-page website hosted on GitHub Pages, created as a digital prom proposal for the 2026 Prom at my high school.",
    image: "/projects/prom_proposal.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/HGTNewCoder/PromProposalProject",
    liveUrl: "https://hgtnewcoder.github.io/PromProposalProject/",
  },
];
