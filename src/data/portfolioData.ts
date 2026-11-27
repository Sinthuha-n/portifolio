export interface Project {
  id: string;
  title: string;
  category: string;
  roleHighlight: string;
  description: string;
  featureHighlights: string[];
  tech: string[];
  isFeaturedWide?: boolean;
  /** Optional screenshot path or URL. When empty, a polished text-based layout is rendered */
  imageUrl?: string;
  /** Optional GitHub repository link. Rendered only when non-empty */
  githubUrl?: string;
  /** Optional Live preview link. Rendered only when non-empty */
  liveUrl?: string;
}

export interface CicdDetails {
  /** Set to true only when a verified CI/CD workflow file is configured in the repository. When false, kept out of the published UI. */
  configured: boolean;
  summary: string;
  checks: string[];
  workflowPath?: string;
  workflowUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    heroHeadline: string;
    heroIntro: string;
    targetRoles: string;
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
  cicd?: CicdDetails;
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
    heroHeadline: "IT Undergraduate at University of Moratuwa",
    heroIntro: "I build web and mobile apps.",
    targetRoles: "Seeking internships in Software Engineering, DevOps, and Mobile Development.",
    university: "University of Moratuwa",
    degree: "BSc (Hons) in Information Technology",
    location: "Sri Lanka",
    status: "Available for Internships",
    // Leave empty strings until real verified URLs are supplied
    email: "",
    github: "",
    linkedin: "",
    resumeUrl: "",
  },

  /**
   * CI/CD Configuration Details:
   * Maintained here for easy editing. Kept out of the published UI since no verified
   * workflow file has been committed to the repository yet.
   */
  cicd: {
    configured: false, // Change to true once .github/workflows/ci.yml is in place
    summary:
      "Continuous integration pipeline running automated linting, strict TypeScript type validation, and production bundle builds on pull requests and pushes.",
    checks: [
      "ESLint code quality & React best-practice checks",
      "TypeScript compiler typecheck (tsc -b)",
      "Vite optimized production bundle compilation",
    ],
    workflowPath: ".github/workflows/ci.yml",
    workflowUrl: "",
  },

  projects: [
    {
      id: "planora",
      title: "Planora",
      category: "Project Management Platform",
      roleHighlight: "Drag-and-Drop Kanban Board, Backlog & Timeline",
      description:
        "I built the drag-and-drop Kanban board and contributed to the Backlog and Timeline.",
      featureHighlights: [
        "Architected smooth drag-and-drop task card interactions across Kanban columns with reactive state synchronization",
        "Contributed to core planning workflows including Backlog grooming and milestone Timeline tracking",
        "Engineered modular React component architecture optimized for fast re-renders during state updates",
      ],
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Drag & Drop",
        "State Management",
        "REST APIs",
      ],
      isFeaturedWide: true,
      imageUrl: "", // Place verified screenshot in public/ (e.g. '/images/planora.png') when ready
      githubUrl: "", // Add verified repo URL when ready
      liveUrl: "",   // Add verified live demo URL when ready
    },
    {
      id: "checkinn",
      title: "CheckINN",
      category: "Full-Stack Web Application",
      roleHighlight: "Full-Stack Architecture & Booking System",
      description:
        "A hotel booking project built with React, TypeScript, Spring Boot, and PostgreSQL.",
      featureHighlights: [
        "Engineered full-stack reservation flow connecting typed React UI with Spring Boot REST services",
        "Designed relational database schema in PostgreSQL with transactional guarantees for room availability",
        "Implemented robust data validation and clean separation between controller, service, and persistence layers",
      ],
      tech: [
        "React",
        "TypeScript",
        "Spring Boot",
        "PostgreSQL",
        "REST APIs",
        "Tailwind CSS",
      ],
      isFeaturedWide: false,
      imageUrl: "", // Place verified screenshot when ready
      githubUrl: "", // Add verified repo URL when ready
      liveUrl: "",   // Add verified live demo URL when ready
    },
    {
      id: "page-bloom",
      title: "Page-Bloom",
      category: "Offline-First Canvas & Mobile App",
      roleHighlight: "Offline Editing, Undo/Redo & Local Autosave",
      description:
        "An offline-capable coloring app with tappable regions, undo and redo, and local autosave.",
      featureHighlights: [
        "Built responsive interactive canvas enabling precision region-based tap-to-color fills",
        "Implemented custom undo/redo state history stack for seamless coloring state reversal",
        "Engineered resilient local autosave to guarantee artwork persistence across offline sessions",
      ],
      tech: [
        "React / TypeScript",
        "Canvas / SVG",
        "Undo / Redo Stack",
        "Local Autosave (IndexedDB/Storage)",
        "Mobile-Ready",
      ],
      isFeaturedWide: false,
      imageUrl: "", // Place verified screenshot when ready
      githubUrl: "", // Add verified repo URL when ready
      liveUrl: "",   // Add verified live demo URL when ready
    },
  ],

  about: {
    heading: "About Me",
    bioParagraphs: [
      "I’m an Information Technology undergraduate at the University of Moratuwa with a deep interest in building performant web and mobile applications.",
      "My development experience ranges from architecting responsive frontend interfaces with drag-and-drop state machines to building reliable backend APIs with Spring Boot and PostgreSQL, as well as designing offline-first client storage.",
      "I am actively seeking internship opportunities in Software Engineering, DevOps, and Mobile Development where I can contribute to mission-critical systems, write clean, well-tested code, and continue expanding my engineering skillset.",
    ],
    skills: [
      {
        category: "Languages & Core",
        items: ["TypeScript", "JavaScript", "Java", "SQL", "HTML5", "CSS3 / Modern CSS"],
      },
      {
        category: "Frameworks & Libraries",
        items: ["React", "Spring Boot", "Tailwind CSS", "Node.js", "Vite"],
      },
      {
        category: "Databases & DevOps Tools",
        items: ["PostgreSQL", "Git / GitHub", "REST APIs", "CI/CD Workflows", "Responsive Design"],
      },
    ],
  },
};
