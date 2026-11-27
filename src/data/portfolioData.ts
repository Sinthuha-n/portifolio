export interface Project {
  id: string;
  title: string;
  roleHighlight?: string;
  description: string;
  tech: string[];
  isFeaturedWide?: boolean;
  /** Optional screenshot path or URL. When empty, a clean text-based layout is rendered */
  imageUrl?: string;
  /** Optional GitHub repository link. Rendered only when non-empty */
  githubUrl?: string;
  /** Optional Live preview link. Rendered only when non-empty */
  liveUrl?: string;
  category: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    heroHeadline: string;
    heroIntro: string;
    university: string;
    degree: string;
    location: string;
    status: string;
    // Optional social links - supply URLs when ready
    email?: string;
    github?: string;
    linkedin?: string;
    resumeUrl?: string;
  };
  projects: Project[];
  about: {
    heading: string;
    bioParagraphs: string[];
    skills: {
      category: string;
      items: string[];
    }[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sinthuha Nadesan",
    heroHeadline: "Software Engineering Intern Candidate",
    heroIntro:
      "I’m an IT undergraduate at the University of Moratuwa. I build web and mobile apps, from drag-and-drop project boards to offline coloring tools.",
    university: "University of Moratuwa",
    degree: "BSc (Hons) in Information Technology",
    location: "Sri Lanka",
    status: "Seeking SWE Internship Opportunities",
    // Leave empty strings until real URLs are ready
    email: "",
    github: "",
    linkedin: "",
    resumeUrl: "",
  },

  projects: [
    {
      id: "planora",
      title: "Planora",
      category: "Project Management Platform",
      roleHighlight: "Kanban Board & Core Agile Modules",
      description:
        "I built the drag-and-drop Kanban board and contributed to the Backlog and Timeline.",
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Drag & Drop",
        "State Management",
        "REST APIs",
      ],
      isFeaturedWide: true,
      imageUrl: "", // Add screenshot path (e.g., "/images/planora.png") when available
      githubUrl: "", // Add repository link when ready
      liveUrl: "",   // Add deployment link when ready
    },
    {
      id: "checkinn",
      title: "CheckINN",
      category: "Full-Stack Web Application",
      description:
        "A hotel booking project built with React, TypeScript, Spring Boot, and PostgreSQL.",
      tech: [
        "React",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "RESTful Services",
        "Tailwind CSS",
      ],
      isFeaturedWide: false,
      imageUrl: "", // Add screenshot path when available
      githubUrl: "", // Add repository link when ready
      liveUrl: "",   // Add deployment link when ready
    },
    {
      id: "page-bloom",
      title: "Page-Bloom",
      category: "Interactive Canvas & Mobile",
      description:
        "An offline-capable coloring app with tappable regions, undo and redo, and local autosave.",
      tech: [
        "React / TypeScript",
        "Offline Storage (IndexedDB/Local)",
        "SVG Vector Canvas",
        "History Management (Undo/Redo)",
      ],
      isFeaturedWide: false,
      imageUrl: "", // Add screenshot path when available
      githubUrl: "", // Add repository link when ready
      liveUrl: "",   // Add deployment link when ready
    },
  ],

  about: {
    heading: "About Me",
    bioParagraphs: [
      "I'm an Information Technology undergraduate at the University of Moratuwa with a passion for architecting clean, responsive, and resilient software.",
      "My development focus spans modern frontend interfaces, full-stack application development, and interactive tools. I enjoy taking ideas from low-level state design to refined user interactions—whether crafting fluid drag-and-drop Kanban workflows or reliable offline-first state systems.",
      "Currently looking for a Software Engineering Internship where I can collaborate with talented engineering teams, contribute reliable code to production systems, and continue growing as an engineer.",
    ],
    skills: [
      {
        category: "Languages & Core",
        items: ["TypeScript", "JavaScript", "Java", "SQL", "HTML5", "CSS3 / Modern Layouts"],
      },
      {
        category: "Frameworks & Libraries",
        items: ["React", "Spring Boot", "Tailwind CSS", "Node.js", "Vite"],
      },
      {
        category: "Databases & Tools",
        items: ["PostgreSQL", "Git / GitHub", "REST APIs", "Postman", "Responsive Design"],
      },
    ],
  },
};
