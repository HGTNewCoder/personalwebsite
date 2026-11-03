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
    title: "OmniVox",
    description:
      "An assistive communication software platform developed in Python for Raspberry Pi 4 and 5 device.",
    image: "/projects/omnivox.png",
    tags: ["Python", "Raspberry Pi", "Assistive Technology"],
    githubUrl: "https://github.com/HGTNewCoder/OmniVox",
    liveUrl: null,
  },
  {
    title: "Chinese Personal Learning App",
    description:
      "A personal app I built while studying Mandarin to memorize how characters are written, stroke by stroke, with reminders that keep my daily study habit on track.",
    image: "/projects/chinese_learning_app.png",
    tags: ["Personal Project", "Language Learning"],
    githubUrl: "https://github.com/HGTNewCoder/chineseLearningApp",
    liveUrl: "https://chinese-learning-app-brown.vercel.app",
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
    title: "Minecraft Server Agent",
    description:
      "An AI-powered Minecraft server manager that turns natural-language requests into orchestrated plugin installs, verification, and rollbacks — currently a live preview of the product I'm building.",
    image: "/projects/minecraft_server_agent.png",
    tags: ["AI Agents", "Python", "TypeScript", "FastAPI"],
    githubUrl: "https://github.com/HGTNewCoder/MCAgent",
    liveUrl: "https://mc-agent-ecru.vercel.app/",
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
    title: "Metadata Extraction System for Research Papers",
    description:
      "A Python script designed for bibliography extraction from research papers.",
    image: "/projects/grobid2.png",
    tags: ["Machine Learning", "NLP", "Bibliography Extraction"],
    githubUrl: "https://github.com/HGTNewCoder/grobid2",
    liveUrl: null,
  },
];
