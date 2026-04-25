// Portfolio data and constants
export const PORTFOLIO_DATA = {
  personal: {
    name: "Bambang Solehudin",
    role: "Frontend Developer",
    bio: "Crafting beautiful, performant web applications with modern React and Next.js. Passionate about clean code and great user experiences.",
    email: "karirs.bambang@gmail.com",
    location: "Indonesia",
    resumeUrl: "/resume.pdf",
  },
  
  aboutSections: [
    {
      title: "About Me",
      content: `Frontend Developer with 3+ years of experience building scalable applications using React, Next.js,
        TypeScript, Vue.js, and React Native. Experienced in developing data-driven dashboards,
        interactive map-based applications, and role-based workflow systems. Skilled in state
        management, API integration, and performance optimization within Agile development
        environments. Passionate about building maintainable frontend architectures and delivering high-
        quality user experiences.`,
    },
    {
      title: "My Approach",
      content: "I believe in balance—between functionality and design, performance and features, simplicity and elegance. Every project is an opportunity to learn something new and create something meaningful. I'm always curious about the latest web technologies and best practices.",
    },
  ],

  skills: {
    frontend: ["React", "Next.js", "Vue.js", "React Native", "TypeScript", "TailwindCSS"],
    styling: ["TailwindCSS", "Bootstrap", "CSS3", "SCSS", "Styled Components"],
    stateManagement: ["Redux", "Context API", "Vuex", "Pinia"],
    tools: ["Git", "Figma", "VS Code", "Vite", "ClickUp", "Jira"],
    backend: ["Node.js", "Express.js", "Laravel", "MySQL", "MongoDB"],
    other: ["RESTful APIs", "AI-assisted Development", "Performance Optimization", "Component Architecture"],
  },

  social: {
    github: "https://github.com/Bambangsolehudin",
    linkedin: "https://www.linkedin.com/in/bambang-solehudin/",
  },

  experience: [
    {
      role: "Frontend Developer",
      company: "CODE.ID",
      duration: "May 2025 - Present",
      description: "Building Next.js applications for client recruitment platform. Implementing responsive features and optimizing performance.",
    },
    {
      role: "Frontend Developer",
      company: "JUKE SOLUTION",
      duration: "May 2024 - April 2025",
      description: "Developed React Native features for mobile app. Collaborated with cross-functional teams using Agile methodologies.",
    },
    {
      role: "Web Developer",
      company: "SARIRASA GROUP",
      duration: "Dec 2022 - May 2024",
      description: "Built web applications with Vue.js and Express.js. Improved system stability and maintained code quality.",
    },
  ],
};

// Projects Data - Frontend Projects from experience
export const projectsData = [
  {
    id: 8,
    title: "Soundbox App",
    image: "/portfolio/soundbox/soundbox01.png",
    gallery: ["/portfolio/soundbox/soundbox01.png", "/portfolio/soundbox/soundbox02.png"],
    date: "Code.Id (2025 - Present)",
    description: "Soundbox is an internal project designed to manage information processes (including devices, merchants, transactions, and etc) that are carried out through the soundbox device. This project is currently under development.",
    url: "",
    tech: ["ExpressJs", "MySQL", "NextJs", "TailwindCSS"],
    status: "In Development",
    category: "Internal Operations Platform",
    role: "Frontend Developer",
    overview:
      "A centralized operational dashboard for monitoring soundbox devices, merchants, transactions, and back-office workflows. The product focuses on keeping internal operations fast, traceable, and easy to manage at scale.",
    highlights: [
      "Structured dashboard flows for merchant and device administration.",
      "Responsive interface patterns for dense operational data.",
      "Clear transaction monitoring views for internal teams.",
    ],
    responsibilities: [
      "Implemented frontend views for internal operational workflows.",
      "Collaborated on data presentation patterns for transaction-heavy screens.",
      "Refined responsive layouts and component consistency in Next.js.",
    ],
  },
  {
    id: 7,
    title: "EMIS 4.0",
    image: "/portfolio/emis/1.jpg",
    gallery: ["/portfolio/emis/1.jpg", "/portfolio/emis/2.jpg"],
    date: "Juke Solution (2024 - 2025)",
    description: "The EMIS program, short for Education Management Information System, is an educational data management system developed by Kementrian Agama (Kemenag). EMIS provides an accurate, valid, and efficient system for managing student data, enabling a comprehensive understanding of each student's condition based on reliable information.",
    url: "https://emis.kemenag.go.id/",
    tech: ["Laravel", "MySQL", "React Native"],
    status: "Live Product",
    category: "Education Information System",
    role: "Frontend Developer",
    overview:
      "A national-scale education data system used to manage and validate student information. The product needs dependable interfaces, clear data handling, and user flows that support accuracy across large administrative processes.",
    highlights: [
      "Handled data-heavy workflows for educational records.",
      "Focused on clarity and reliability for administrative tasks.",
      "Built features in a collaborative delivery environment.",
    ],
    responsibilities: [
      "Developed frontend features used in the EMIS ecosystem.",
      "Supported usability for forms and information-heavy flows.",
      "Worked with the team to maintain stable product delivery.",
    ],
  },
  {
    id: 6,
    title: "BMOVIEINFO",
    image: "/portfolio/Bmovieinfo/Bmovie2.png",
    gallery: ["/portfolio/BmovieInfo/Bmovie2.png", "/portfolio/BmovieInfo/Bmovie.png"],
    date: "Personal Project - 2025",
    description: "Movie information web app built using the OMDb API for searching and viewing detailed movie data. Created as a personal learning project. No streaming functionality included.",
    url: "https://bmovieinfoapp.netlify.app/",
    tech: ["VueJS", "TailwindCSS"],
    status: "Personal Project",
    category: "Movie Discovery App",
    role: "Designer & Frontend Developer",
    overview:
      "A clean movie discovery experience powered by the OMDb API, built as a personal project to explore search UX, information hierarchy, and responsive interface design for entertainment content.",
    highlights: [
      "Fast movie search and detail exploration flow.",
      "Focused visual hierarchy for posters, metadata, and summaries.",
      "Responsive UI built as a compact learning product.",
    ],
    responsibilities: [
      "Designed and implemented the full frontend experience.",
      "Integrated external movie data from the OMDb API.",
      "Optimized the layout for quick browsing across devices.",
    ],
  },
  {
    id: 5,
    title: "LSP GETI",
    image: "/portfolio/lsp/lsp.jpg",
    gallery: ["/portfolio/lsp/lsp.jpg", "/portfolio/lsp/lsp2.jpg"],
    date: "ATT GROUP (2021 - 2022)",
    description: "This program was developed to support the needs of the Professional Certification Institution (LSP) and is conducted entirely online. Candidates are provided with written tests or practical assessments and are supervised by certified assessors.",
    url: "https://asesi.lsp.geti.id/",
    tech: ["Laravel", "NuxtJs", "Bootstrap", "MySQL"],
    status: "Live Product",
    category: "Certification Platform",
    role: "Frontend Developer",
    overview:
      "An online certification platform that supports assessments, candidate participation, and assessor supervision. The product balances workflow clarity with formal institutional requirements.",
    highlights: [
      "Supported end-to-end online certification flows.",
      "Designed for structured assessment and supervision tasks.",
      "Helped keep complex workflows accessible for users.",
    ],
    responsibilities: [
      "Built frontend features for participant and assessor flows.",
      "Contributed to responsive interfaces for certification modules.",
      "Worked on maintainable web UI using Nuxt-based architecture.",
    ],
  },
  {
    id: 4,
    title: "DistributionAPP V1.0",
    image: "/portfolio/distribusi/distribusi.jpg",
    gallery: ["/portfolio/distribusi/distribusi.jpg"],
    date: "Sarirasa Group (2023 - 2024)",
    description: "Program to manage product distribution transactions from Sarirasa Group warehouse to stores. Products are distributed based on specific orders from each store, including picking, SKB generation, and delivery documentation.",
    url: "",
    tech: ["ReactJS", "TailwindCSS", "MongoDb", "ExpressJs"],
    status: "Internal Product",
    category: "Warehouse Distribution System",
    role: "Web Developer",
    overview:
      "An internal distribution system for moving goods from warehouse to stores with traceable operational steps. The application centers around picking, shipping documents, and delivery visibility.",
    highlights: [
      "Streamlined order-based warehouse distribution workflows.",
      "Supported document generation and delivery tracking.",
      "Built for operational speed and repeated daily use.",
    ],
    responsibilities: [
      "Implemented internal workflow screens for distribution operations.",
      "Built data views tied to order fulfillment and documentation.",
      "Supported responsive layouts for real operational usage.",
    ],
  },
  {
    id: 3,
    title: "WEBOH V1.0",
    image: "/portfolio/weboh/weboh.jpg",
    gallery: ["/portfolio/weboh/weboh.jpg", "/portfolio/weboh/weboh2.jpg"],
    date: "Sarirasa Group (2022 - 2023)",
    description: "Program to manage product and sub-product data displayed in the POS menu for available brands under the Sarirasa Group. Handles product visibility, promotions, pricing, and related configurations.",
    url: "",
    tech: ["VueJS", "Bootstrap", "ExpressJs", "MongoDb"],
    status: "Internal Product",
    category: "POS Content Management",
    role: "Web Developer",
    overview:
      "A management system for controlling product visibility, pricing, promotions, and related menu configurations across multiple brands. The interface is built for quick editing and dependable control.",
    highlights: [
      "Managed multi-brand menu configuration workflows.",
      "Handled pricing, visibility, and promotional settings.",
      "Focused on admin efficiency for repeated updates.",
    ],
    responsibilities: [
      "Built management interfaces for product and sub-product control.",
      "Implemented configuration views tied to POS menu behavior.",
      "Maintained a practical UI for dense admin tasks.",
    ],
  },
  {
    id: 2,
    title: "ReceivingApp V1.0",
    image: "/portfolio/receiving/receiving.jpg",
    gallery: ["/portfolio/receiving/receiving.jpg", "/portfolio/receiving/receiving1.jpg"],
    date: "Sarirasa Group (2022 - 2023)",
    description: "Program for receiving goods transactions at Sarirasa Group Warehouse. Goods received are grouped into grades, weighed, QC tested, and processed into pack data for goods receipt.",
    url: "",
    tech: ["VueJS", "Bootstrap", "ExpressJs", "MongoDb"],
    status: "Internal Product",
    category: "Warehouse Receiving System",
    role: "Web Developer",
    overview:
      "A warehouse receiving application for logging incoming goods, grading, quality control, and pack processing. The design prioritizes structured data entry and visibility across receiving stages.",
    highlights: [
      "Supported grading, weighing, QC, and pack workflows.",
      "Optimized screens for warehouse transaction accuracy.",
      "Created admin flows for structured goods intake.",
    ],
    responsibilities: [
      "Developed frontend interfaces for receiving operations.",
      "Supported workflows for quality checks and pack preparation.",
      "Helped translate warehouse processes into usable digital flows.",
    ],
  },
];

// Journey/Experience Timeline Data
export const journeyData = [
  {
    events: [
      {
        month: "May 2025 - Present",
        title: "CODE.ID - Frontend Developer",
        description: "Developed new features for applications using Next.js for client recruitment to enhance user experience and improve performance. Troubleshot & fixed bugs. Tested and optimized application performance.",
      },
      {
        month: "May 2024 - April 2025",
        title: "JUKE SOLUTION - Frontend Developer",
        description: "Built new features in React Native to improve app functionality and user experience. Resolved bugs to maintain smooth and stable performance. Worked in Agile teams ensuring timely delivery. Communicated with clients to deliver tailored solutions.",
      },
      {
        month: "Dec 2022 - May 2024",
        title: "SARIRASA GROUP - Web Developer",
        description: "Developed dynamic web apps using Vue.js and Express.js. Fixed bugs, improved system stability, and ensured code quality using Git. Collaborated in Agile teams and supported timely project delivery. Actively learned and kept up with web development trends.",
      },
    //   {
    //     month: "Oct 2021 - Nov 2022",
    //     title: "ATT GROUP - Junior Frontend Developer",
    //     description: "Developed responsive web applications using Vue.js and designed reusable, modular components. Optimized application performance and integrated RESTful APIs for seamless data communication. Created new features and conducted thorough debugging.",
    //   },
    ],
  },
];

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  verySlow: 1.5,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
