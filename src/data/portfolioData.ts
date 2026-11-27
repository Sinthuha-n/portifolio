export interface PlanoraCaseStudy {
  problem: string;
  teamContext: string;
  myContributions: string[];
  technicalDecision: string;
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  roleHighlight: string;
  description: string;
  featureHighlights: string[];
  tech: string[];
  isFeaturedWide?: boolean;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: PlanoraCaseStudy;
}

export interface Article {
  title: string;
  publication: string;
  url: string;
  readTime: string;
  description: string;
  tags: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  summary: string;
  image: string;
  issuerUrl?: string;
  verificationUrl?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CicdDetails {
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
    email: string;
    github: string;
    linkedin: string;
    medium: string;
    resumeUrl?: string;
    portrait: string;
    portraitAlt: string;
  };
  cicd?: CicdDetails;
  projects: Project[];
  writing: Article[];
  skills: SkillCategory[];
  certificates: Certificate[];
  about: {
    heading: string;
    bioParagraphs: string[];
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sinthuha Nadesan",
    heroHeadline: "BSc (Hons) IT Undergraduate • University of Moratuwa",
    heroIntro:
      "I’m an IT undergraduate at the University of Moratuwa. I build full-stack web applications and offline-capable mobile apps.",
    targetRoles: "Open to internships in Software Engineering, DevOps, and Mobile Development.",
    university: "University of Moratuwa",
    degree: "BSc (Hons) in Information Technology",
    location: "Sri Lanka",
    status: "Seeking SWE / DevOps / Mobile Internships",
    email: "nadasinthu09@gmail.com",
    github: "https://github.com/Sinthuha-n",
    linkedin: "https://www.linkedin.com/in/sinthuha-nadesan-16nn11",
    medium: "https://medium.com/@sinthuhanadesan",
    resumeUrl: "", // Current resume PDF link; kept hidden until active PDF URL is provided
    portrait: "/images/portrait.jpg",
    portraitAlt: "Portrait of Sinthuha Nadesan",
  },

  cicd: {
    configured: false, // Kept out of the published UI until verified in repository
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
      subtitle: "Full-Stack Project Management Workspace",
      category: "Lead Feature • Agile Workspace",
      roleHighlight: "Drag-and-Drop Kanban Board Lead, Backlog & Timeline",
      description:
        "A collaborative project management workspace modeled after real-world agile engineering flows. Built as a team project where I took primary ownership of the interactive drag-and-drop Kanban board and contributed directly to sprint Backlog grooming and milestone Timeline progress tracking.",
      featureHighlights: [
        "Architected smooth drag-and-drop task card interactions across Kanban columns with reactive state synchronization",
        "Contributed to core planning workflows including Backlog prioritization and milestone Timeline scheduling",
        "Engineered modular React component architecture optimized for fast re-renders during rapid state changes",
      ],
      caseStudy: {
        problem:
          "Student and startup engineering teams frequently struggle with fragmented coordination across disconnected chat threads, spreadsheets, and issue trackers. Planora consolidates agile sprint planning, active board execution, status visibility, and milestone deadlines into one integrated application.",
        teamContext:
          "Collaborative engineering project. I served as the frontend state and interaction lead for the Kanban execution layer while coordinating with teammates on backend API contracts and shared data schemas.",
        myContributions: [
          "Sole ownership of the drag-and-drop Kanban board implementation, handling column status transitions, card reordering, and drop target styling.",
          "Co-developed the sprint Backlog view for queueing upcoming user stories and assigning initial estimates.",
          "Contributed to the Timeline roadmap view to track task dependencies and milestone completion against calendar targets.",
          "Established predictable component props contracts and optimistic client-side state transformations.",
        ],
        technicalDecision:
          "Rather than blocking UI interactions on asynchronous backend requests, I implemented an optimistic client-side state update strategy with a normalized column-to-task index map. When a card is dragged, the UI updates its column and order index immediately. The state engine then dispatches the update to the Spring Boot REST API in the background. If a network disruption occurs, the board rolls back seamlessly to the snapshot with an accessible error notification. This keeps the drag interaction buttery smooth at 60fps across touch and mouse input.",
        techStack: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Spring Boot",
          "PostgreSQL",
          "REST APIs",
          "Drag & Drop Engine",
        ],
      },
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Spring Boot",
        "PostgreSQL",
        "Drag & Drop",
        "REST APIs",
      ],
      isFeaturedWide: true,
      imageUrl: "", // Wide Kanban screenshot when supplied
      githubUrl: "https://github.com/Sinthuha-n",
      liveUrl: "",
    },
    {
      id: "checkinn",
      title: "CheckINN",
      subtitle: "Full-Stack Hotel Booking Application",
      category: "Full-Stack Web Application",
      roleHighlight: "Room Discovery, Reservation Workflow & REST API",
      description:
        "A comprehensive hotel discovery and room reservation platform. Built with a responsive React and TypeScript frontend, robust Spring Boot RESTful services, and a PostgreSQL database enforcing relational constraints for transactional room availability.",
      featureHighlights: [
        "Engineered end-to-end reservation flow connecting typed React UI with Spring Boot REST services",
        "Designed relational database schema in PostgreSQL with transactional guarantees for room availability",
        "Implemented robust input validation, status filters, and clean separation between controller, service, and persistence layers",
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
      githubUrl: "https://github.com/Sinthuha-n/SpringBoot",
      liveUrl: "",
    },
    {
      id: "page-bloom",
      title: "Page-Bloom",
      subtitle: "Offline-First Interactive Vector Coloring App",
      category: "Mobile Application",
      roleHighlight: "React Native / Expo, Offline Canvas & SQLite",
      description:
        "An offline-capable mobile coloring application designed for tablet and mobile screens. Features responsive touch region-based coloring, a reliable multi-step undo and redo history stack, and automated local autosave powered by SQLite for continuous offline work.",
      featureHighlights: [
        "Built with React Native and Expo for smooth cross-platform touch interactions and responsive layouts",
        "Implemented SVG vector canvas enabling precision region-based tap-to-color fills",
        "Engineered custom undo/redo state history stack for instant coloring rollback and redo",
        "Integrated local SQLite persistence to autosave user progress seamlessly without requiring an internet connection",
      ],
      tech: [
        "React Native",
        "Expo",
        "SQLite Autosave",
        "SVG Canvas",
        "Undo / Redo Stack",
        "TypeScript",
      ],
      isFeaturedWide: false,
      imageUrl: "", // Place verified tablet screenshot when ready
      githubUrl: "https://github.com/Sinthuha-n",
      liveUrl: "",
    },
  ],

  writing: [
    {
      title: "Why Version Control Is the Backbone of Software Development?",
      publication: "LinkIT Intecs",
      url: "https://medium.com/linkit-intecs/why-version-control-is-the-backbone-of-software-development-8ef3e09fb90a",
      readTime: "4 min read",
      description:
        "A practical breakdown of version control fundamentals, Git branching strategies, and why team discipline in commits and pull requests forms the bedrock of reliable software delivery.",
      tags: ["Git", "Version Control", "Engineering Practices"],
    },
    {
      title: "When Code Gets a Vibe: Is AI About to Steal Your Keyboard?",
      publication: "Medium",
      url: "https://medium.com/@sinthuhanadesan/when-code-gets-a-vibe-is-ai-about-to-steal-your-keyboard-25cd83f596bc",
      readTime: "3 min read",
      description:
        "Examining how modern AI tools and assistive coding enhance engineer productivity, and why core system thinking, problem solving, and architecture remain uniquely human skills.",
      tags: ["AI in Tech", "Developer Workflow", "Software Careers"],
    },
    {
      title: "Social Media: Behind the Screen",
      publication: "Medium",
      url: "https://medium.com/@sinthuhanadesan/social-media-behind-the-screen-f8f443c20ccd",
      readTime: "4 min read",
      description:
        "Reflections on digital habits, the architecture of online engagement, and how aspiring software engineers can build mindful, intentional boundaries with digital products.",
      tags: ["Tech Culture", "Mindful Tech", "Perspectives"],
    },
  ],

  skills: [
    {
      category: "Languages & Core",
      items: ["TypeScript", "JavaScript", "Java", "SQL", "HTML5", "Modern CSS"],
    },
    {
      category: "Frameworks & Frontend",
      items: ["React", "React Native", "Tailwind CSS", "Vite", "Expo"],
    },
    {
      category: "Backend & Databases",
      items: ["Spring Boot", "PostgreSQL", "REST APIs", "SQLite", "Node.js"],
    },
    {
      category: "DevOps & Engineering Workflow",
      items: ["Git", "GitHub", "Postman", "CI/CD Workflows", "Agile Practices"],
    },
  ],

  certificates: [
    {
      id: "frontend-web-dev",
      title: "Frontend Web Development",
      issuer: "University of Moratuwa",
      date: "Dec 2024",
      summary: "Responsive interfaces and web application structure.",
      image: "/images/certificates/Frontend Web Development - University of Moratuwa.jpeg",
      issuerUrl: "https://uom.lk",
      verificationUrl: "", // Only shown when verified issuer verification URL is supplied
    },
    {
      id: "sql-career-track",
      title: "SQL Career Track",
      issuer: "DataCamp",
      date: "Jan 2025",
      summary: "Relational querying, schema thinking, and data problem solving.",
      image: "/images/certificates/SQL Career Track - DataCamp.jpeg",
      issuerUrl: "https://www.datacamp.com",
      verificationUrl: "",
    },
    {
      id: "hackerrank-sql",
      title: "HackerRank SQL",
      issuer: "HackerRank",
      date: "Feb 2025",
      summary: "SQL fundamentals validated through practical challenges.",
      image: "/images/certificates/HackerRank SQL.jpeg",
      issuerUrl: "https://www.hackerrank.com",
      verificationUrl: "",
    },
    {
      id: "software-engineering-essentials",
      title: "Software Engineering Essentials",
      issuer: "IBM Skills Network",
      date: "Apr 2025",
      summary: "Core software engineering practices and professional foundations.",
      image: "/images/certificates/software Engineering essential.jpeg",
      issuerUrl: "https://skills.yourlearning.ibm.com",
      verificationUrl: "",
    },
    {
      id: "postman-api-fundamentals",
      title: "Postman API Fundamentals",
      issuer: "Postman",
      date: "Sep 2025",
      summary: "REST API testing, requests, collections, and integration workflow.",
      image: "/images/certificates/Postman API Fundamental - Postman.jpeg",
      issuerUrl: "https://www.postman.com",
      verificationUrl: "",
    },
    {
      id: "aws-ai-practitioner",
      title: "AWS AI Practitioner Challenge",
      issuer: "Udacity",
      date: "Jun 2026",
      summary: "AI practitioner foundations with AWS-aligned learning.",
      image: "/images/certificates/AWS AI Practitioner Challenge - Udacity.jpeg",
      issuerUrl: "https://www.udacity.com",
      verificationUrl: "",
    },
  ],

  about: {
    heading: "About Me",
    bioParagraphs: [
      "I’m an Information Technology undergraduate at the University of Moratuwa with a deep interest in software engineering, backend systems, and responsive mobile architecture.",
      "My development journey has been defined by hands-on engineering: from building responsive Kanban boards with optimistic drag-and-drop state to engineering full-stack booking platforms with Spring Boot and PostgreSQL, and architecting offline-first mobile canvas apps with React Native and SQLite.",
      "Beyond building projects, I believe in clear communication and shared learning. I actively write about version control best practices and engineering workflows on Medium, publish articles with LinkIT Intecs, and continuously refine my database and API design fundamentals.",
      "I am actively seeking internship opportunities in Software Engineering, DevOps, and Mobile Development where I can contribute clean, maintainable code to production systems and learn alongside senior engineers.",
    ],
  },
};
