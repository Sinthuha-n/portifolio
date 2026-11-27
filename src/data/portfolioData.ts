export interface PlanoraCaseStudy {
  problem: string;
  teamContext: string;
  myContributions: string[];
  technicalDecision: string;
  techStack: string[];
}

export interface ProjectImage {
  url: string;
  label: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  roleHighlight: string;
  description: string;
  oneLiner?: string;
  myContribution?: string;
  isTeamProject?: boolean;
  repoLabel?: string;
  featureHighlights: string[];
  tech: string[];
  isFeaturedWide?: boolean;
  imageUrl?: string;
  gallery?: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: PlanoraCaseStudy;
}

export interface Article {
  title: string;
  publication: string;
  url: string;
  readTime: string;
  date?: string;
  author?: string;
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
  tiedWork: string;
  summary: string;
  items: string[];
}

export interface CicdDetails {
  configured: boolean;
  summary: string;
  trigger?: string;
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
    resumeUrl: "/documents/Sinthuha_Nadesan_SoftwareEngineering_Intern_CV.pdf",
    portrait: "/images/portrait.jpg",
    portraitAlt: "Portrait of Sinthuha Nadesan",
  },

  cicd: {
    configured: true,
    summary:
      "Automated continuous integration pipelines configured with GitHub Actions across full-stack and mobile projects, enforcing automated backend/frontend test execution, secret hygiene, type validation, and production bundle builds.",
    trigger: "Pushes and pull requests to main (with PR concurrency cancellation)",
    checks: [
      "Backend (Java 21): ./mvnw test -Dspring.profiles.active=test & ./mvnw package",
      "Frontend (Node 20): npm ci, ESLint, TypeScript tsc -b, & Vitest",
      "Security Hygiene: Automated verification preventing tracked secrets or .env files",
      "Production Optimization: Optimized bundle compile verification with Vite",
    ],
    workflowPath: ".github/workflows/ci.yml",
    workflowUrl: "https://medium.com/@sinthuhanadesan/what-happens-after-you-push-code-the-ci-cd-journey-9130bdbd01e9",
  },

  projects: [
    {
      id: "planora",
      title: "Planora",
      subtitle: "Full-Stack Project Management Workspace",
      category: "Agile Workspace",
      roleHighlight: "Kanban Board Module Lead, Backlog & Timeline",
      isTeamProject: true,
      repoLabel: "Team repository",
      oneLiner: "A collaborative Agile workspace combining Kanban execution, backlog prioritization, and milestone roadmap planning.",
      myContribution: "I built drag-and-drop for the Kanban board and contributed to Backlog and Timeline.",
      description:
        "A collaborative project management workspace modeled after real-world agile engineering flows. Developed in a 5-student team in collaboration with Axzell Innovations, where I took direct module ownership of the interactive drag-and-drop Kanban execution layer and contributed to sprint Backlog grooming and milestone Timeline progress tracking.",
      featureHighlights: [
        "Architected smooth drag-and-drop task card interactions across Kanban columns with reactive state synchronization",
        "Contributed to core planning workflows including sprint Backlog prioritization and milestone Timeline scheduling",
        "Engineered modular React component architecture optimized for fast re-renders during rapid state changes",
      ],
      caseStudy: {
        problem:
          "Student and startup engineering teams face fragmented communication and siloed planning tools when tracking iterative agile sprints. Planora was developed in collaboration with Axzell Innovations as an integrated workspace unifying agile sprint Backlog grooming, interactive Kanban execution, and timeline dependency tracking.",
        teamContext:
          "Collaborative 5-student engineering team with Axzell Innovations. I served as the frontend state and interaction lead for the Kanban execution layer while coordinating with teammates on backend API contracts, PostgreSQL schemas, and WebSocket channels.",
        myContributions: [
          "Sole ownership of the interactive drag-and-drop Kanban board (frontend/web/app/(project)/kanban/ and KanbanController.java), implementing custom column creation, status color coding, and Work-In-Progress (WIP) limit enforcement.",
          "Co-developed the sprint Backlog view for queueing unscheduled user stories and reordering sprint backlog items via /reorder and /kanban/move.",
          "Contributed to the date-based Timeline (Gantt-style) roadmap view for milestone scheduling, drag-to-reschedule, and lightweight PATCH /{taskId}/dates updates.",
          "Integrated project Figma design URL embedding in workspace settings and top navigation.",
        ],
        technicalDecision:
          "To guarantee 60fps drag-and-drop interactions across mouse and touch, I architected an optimistic client-side UI update strategy with automated snapshot rollback on failure. When cards or columns move, the client updates state immediately before dispatching background REST updates. For multi-user concurrency, task entities are protected with Hibernate's @Version optimistic locking to reject stale conflicting writes with HTTP 409 Conflict rather than silently clobbering updates. Furthermore, every successful mutation broadcasts across a STOMP WebSocket channel (/topic/project/{id}/tasks), allowing all connected team members' boards to synchronize in real time without polling or manual refreshes.",
        techStack: [
          "Spring Boot 3",
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "PostgreSQL",
          "STOMP WebSockets",
          "JPA / Hibernate",
          "Figma Integration",
        ],
      },
      tech: [
        "React",
        "TypeScript",
        "Spring Boot 3",
        "PostgreSQL",
        "STOMP WebSockets",
        "Tailwind CSS",
        "Drag & Drop Engine",
      ],
      isFeaturedWide: true,
      imageUrl: "/images/projects/planora-kanban.jpg",
      gallery: [
        {
          url: "/images/projects/planora-kanban.jpg",
          label: "Kanban Board",
          caption: "Interactive drag-and-drop task columns with optimistic state sync",
        },
        {
          url: "/images/projects/planora-timeline.jpg",
          label: "Sprint Timeline",
          caption: "Milestone roadmap view with sprint scheduling and date dependencies",
        },
      ],
      githubUrl: "https://github.com/axzellinnovations/project_management_app",
      liveUrl: "",
    },
    {
      id: "checkinn",
      title: "CheckINN",
      subtitle: "Full-Stack Hotel Booking Application",
      category: "Full-Stack Web App",
      roleHighlight: "End-to-End Room Booking Flow, Spring Boot REST & PostgreSQL Flyway",
      isTeamProject: false,
      repoLabel: "Repository",
      oneLiner: "A full-stack hotel booking platform with real-time room availability, transactional reservations, and automated confirmation emails.",
      myContribution: "I built the end-to-end room booking flow, Spring Boot REST endpoints, and Flyway PostgreSQL migrations.",
      description:
        "A full-stack hotel booking platform featuring multi-criteria room discovery, real-time availability checking, and end-to-end reservation processing. Built with a responsive React frontend and a Spring Boot backend with Flyway-managed PostgreSQL migrations and automated GitHub Actions CI.",
      featureHighlights: [
        "Frontend (React + TypeScript + Vite): Room search filtering by date range & guest count, responsive reservation forms, and booking history management.",
        "Backend (Spring Boot 3 + Java 21): REST controllers for room availability and booking creation with transactional double-booking prevention.",
        "Event-Driven Notifications: Asynchronous booking confirmation listeners (BookingEmailListener, BookingConfirmedEvent) for decoupling workflows.",
        "Database & DevOps: Flyway versioned migrations (V1-V5) across PostgreSQL and H2 test profiles, validated via automated GitHub Actions CI.",
      ],
      tech: [
        "React",
        "TypeScript",
        "Spring Boot 3",
        "PostgreSQL",
        "Flyway",
        "GitHub Actions CI",
        "Tailwind CSS",
      ],
      isFeaturedWide: false,
      imageUrl: "/images/projects/checkinn-landing.jpg",
      gallery: [
        {
          url: "/images/projects/checkinn-landing.jpg",
          label: "Discovery Landing",
          caption: "CheckINN luxury room discovery landing page",
        },
        {
          url: "/images/projects/checkinn-auth.jpg",
          label: "Guest Access",
          caption: "Guest registration and reservation account portal",
        },
      ],
      githubUrl: "https://github.com/Sinthuha-n/CheckInn",
      liveUrl: "",
    },
    {
      id: "page-bloom",
      title: "Page-Bloom",
      subtitle: "Offline-First Tablet & Mobile Interactive Vector Coloring Studio",
      category: "Mobile Application",
      roleHighlight: "React Native / Expo SDK, SVG Closed-Path Canvas & SQLite Autosave",
      isTeamProject: false,
      repoLabel: "Repository",
      oneLiner: "An offline-first mobile coloring studio designed for iPad, Android tablets, and phones with vector SVG region filling.",
      myContribution: "I built the offline vector SVG canvas, tap-to-color engine, undo/redo history stack, and SQLite autosave.",
      description:
        "A tablet-first, offline coloring studio designed for iPad, Android tablets, and phones. Combines an interactive SVG canvas with closed vector regions, an instant undo/redo action stack, and real-time SQLite autosave for a distraction-free offline experience.",
      featureHighlights: [
        "Offline Coloring: Tablet-first SVG vector canvas with closed path regions (Z command) enabling instant, precision tap-to-color fills without requiring an internet connection.",
        "Undo / Redo Stack: In-memory action history stack tracking individual region transitions, allowing users to step backward and forward effortlessly without visual stutter.",
        "SQLite Autosave: Automatic local persistence using expo-sqlite that continuously saves artwork versions, palettes, and page progress, restoring work instantly on launch.",
        "Themed Collections & Export: Complete multi-page book catalog ('Trinco Beach Days') with clean PNG/SVG and multi-page custom book PDF exports.",
      ],
      tech: [
        "React Native",
        "Expo SDK",
        "SQLite Autosave",
        "SVG Vector Canvas",
        "Undo / Redo Stack",
        "TypeScript",
      ],
      isFeaturedWide: false,
      imageUrl: "/images/projects/page-bloom-tablet.png",
      gallery: [
        {
          url: "/images/projects/page-bloom-tablet.png",
          label: "Tablet Studio",
          caption: "Tablet-first vector canvas with tap-to-color regions",
        },
        {
          url: "/images/projects/page-bloom-phone.png",
          label: "Mobile View",
          caption: "Responsive phone coloring experience with SQLite autosave",
        },
      ],
      githubUrl: "https://github.com/Sinthuha-n/Page-Bloom",
      liveUrl: "",
    },
  ],

  writing: [
    {
      title: "What Happens After You Push Code? The CI/CD Journey.",
      publication: "Medium",
      url: "https://medium.com/@sinthuhanadesan/what-happens-after-you-push-code-the-ci-cd-journey-9130bdbd01e9",
      readTime: "4 min read",
      date: "Oct 2024",
      author: "Sinthuha Nadesan",
      description:
        "A comprehensive engineering breakdown detailing how Continuous Integration and Continuous Delivery/Deployment (CI/CD) pipelines automate testing, linting, type safety, and release gates from commit to production.",
      tags: ["CI/CD", "DevOps", "Automation", "GitHub Actions"],
    },
    {
      title: "Why Version Control Is the Backbone of Software Development?",
      publication: "LinkIT Intecs",
      url: "https://medium.com/linkit-intecs/why-version-control-is-the-backbone-of-software-development-8ef3e09fb90a",
      readTime: "4 min read",
      date: "Sep 2024",
      author: "Sinthuha Nadesan",
      description:
        "A practical breakdown of version control fundamentals, Git branching strategies, and why team discipline in commits and pull requests forms the bedrock of reliable software delivery.",
      tags: ["Git", "Version Control", "Engineering Practices"],
    },
    {
      title: "Social Media: Behind the Screen",
      publication: "Medium",
      url: "https://medium.com/@sinthuhanadesan/social-media-behind-the-screen-f8f443c20ccd",
      readTime: "4 min read",
      date: "Aug 2024",
      author: "Sinthuha Nadesan",
      description:
        "Reflections on digital habits, the architecture of online engagement, and how aspiring software engineers can build mindful, intentional boundaries with digital products.",
      tags: ["Tech Culture", "Mindful Tech", "Perspectives"],
    },
  ],

  skills: [
    {
      category: "Software Engineering",
      tiedWork: "Planora & CheckINN",
      summary:
        "Full-stack web applications, optimistic drag-and-drop state machines, and relational booking APIs with transactional guarantees.",
      items: [
        "React",
        "TypeScript",
        "Java / Spring Boot",
        "PostgreSQL",
        "REST APIs",
        "Tailwind CSS",
      ],
    },
    {
      category: "Mobile Development",
      tiedWork: "Page-Bloom",
      summary:
        "Touch-first tablet and mobile apps, closed vector SVG canvases, instant undo/redo action stacks, and local SQLite persistence.",
      items: [
        "React Native",
        "Expo SDK",
        "SQLite Autosave",
        "SVG Vector Canvas",
        "State History Stack",
        "TypeScript",
      ],
    },
    {
      category: "Build & Delivery",
      tiedWork: "CheckINN & Page-Bloom CI",
      summary:
        "Automated GitHub Actions delivery pipelines, secret leakage prevention, Flyway database migrations, and release verification.",
      items: [
        "GitHub Actions CI/CD",
        "Flyway Migrations",
        "Git Branching",
        "Vite",
        "ESLint & Vitest",
        "Maven",
      ],
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
      "I’m a BSc (Hons) Information Technology undergraduate at the University of Moratuwa. I build web and mobile applications—ranging from collaborative agile workspaces with interactive drag-and-drop boards to full-stack transactional reservation systems and offline-first mobile coloring studios.",
      "My development focus centers on clean component architectures, robust backend REST APIs with relational databases, and automated delivery pipelines. I am actively seeking internship opportunities in Software Engineering, DevOps, and Mobile Development where I can contribute to production systems and learn alongside engineering teams.",
    ],
  },
};
