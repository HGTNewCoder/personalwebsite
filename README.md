# Personal Website

A clean, minimal CV/resume website built with Next.js, Tailwind CSS, and Framer Motion. Single-page layout with project gallery, scroll animations, and editable content files.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Editing Your Content

All content lives in two data files — no need to hunt through components.

### Resume (`src/data/resume.ts`)

Update your personal info, bio, work experience, skills, and contact links:

- `name`, `title`, `tagline` — shown in the hero section
- `about` — bio paragraph
- `experience[]` — company, role, period, and bullet highlights
- `skills` — grouped by category (e.g. Software Engineer & Web Development, Data Science & AI) with labeled subgroups
- `contact` — email, LinkedIn, and GitHub URLs



### Projects (`src/data/projects.ts`)

Add or edit project entries:

```ts
{
  title: "My Project",
  description: "What you built and why it matters.",
  image: "/projects/my-screenshot.jpg",
  tags: ["React", "Node.js"],
  githubUrl: "https://github.com/you/repo",
  liveUrl: "https://myproject.com", // or null
}
```



### Project Photos

1. Add your screenshots to `public/projects/`
2. Update the `image` field in `projects.ts` to match the filename

Placeholder SVGs are included (`placeholder-1.svg` through `placeholder-4.svg`). Replace them with `.jpg` or `.png` files and update the paths in `projects.ts`.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, stagger, hover effects
- **Lucide React** — icons



## Deploy



### Vercel (recommended)

1. Push this repo to GitHub
2. Import the project at [vercel.com](https://vercel.com)
3. Deploy — no extra configuration needed



### GitHub Pages (static export)

Add `output: "export"` cto `next.config.ts`, then build and deploy the `out/` folder.

## Project Structure

```
src/
├── app/              # Layout, page, global styles
├── components/
│   ├── layout/       # Navbar, Section wrapper
│   ├── sections/     # Hero, About, Experience, Skills, Projects, Contact
│   └── ui/           # AnimatedSection
├── data/             # resume.ts, projects.ts (edit these!)
└── lib/              # Animation utilities
public/
└── projects/         # Project images
```



## Scripts


| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |


