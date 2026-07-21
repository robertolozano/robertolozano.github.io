import { HeroData, SocialLink, NavLink, Experience, Education } from "@/types";

export const heroData: HeroData = {
  name: "Roberto Lozano Jr.",
  title: "Full Stack Developer",
  tagline:
    "I build React-based production systems, and the agentic workflows that ship them faster.",
  description:
    "3+ years of professional experience building full-stack web applications with React, Node.js, and PostgreSQL. MS in Computer Science with graduate research in NLP and machine learning.",
  image: "gradpic.jpg",
  availability: "Open to new opportunities",
};

export const contactEmail = "iamrobertolozano@gmail.com";
export const resumeUrl = "/Roberto_Lozano.pdf";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/robertolozano",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/r-lozano/",
  },
];

export const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Experience",
    href: "/#experience",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "About",
    href: "/about",
  },
];

export const experiences: Experience[] = [
  {
    id: "intrasync",
    role: "Software Developer",
    company: "IntraSync Industrial",
    employmentType: "Contract",
    location: "Remote",
    dateRange: "Dec 2025 - Jul 2026",
    highlights: [
      "Built and maintained a full-stack web portal managing the end-to-end construction panel pipeline spanning estimating, production, inventory, shipping, and accounting.",
      "Implemented WebSocket-based real-time features to keep data in sync across concurrent user sessions.",
      "Managed deployment infrastructure with Docker and Portainer, maintaining containerized API and web service builds on Azure DevOps.",
      "Built custom Claude Code subagents with defined roles, tool scopes, and isolated context windows for code review, test authoring, and codebase exploration.",
      "Ran parallel agents across independent workstreams on isolated git worktrees and verified UI changes through Playwright browser automation, reviewing all generated code before merge.",
      "Collaborated directly with clients to gather requirements, surface edge cases, and iterate on features from real-world feedback.",
    ],
    techStack: [
      "React",
      "FeathersJS",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Docker",
      "Portainer",
      "Azure DevOps",
      "Claude Code",
      "Playwright",
    ],
  },
  {
    id: "walters-wolf",
    role: "Full Stack Software Developer",
    company: "Walters & Wolf",
    location: "Fremont, CA",
    dateRange: "Aug 2021 - Feb 2024",
    highlights: [
      "Led development of React-based internal web tools, independently managing front-end systems while contributing to PostgreSQL schema changes and API routing.",
      "Built and maintained shared component libraries, improving reusability across teams and reducing developer onboarding time.",
      "Introduced Storybook documentation for React component libraries and implemented Jest unit tests, improving code quality and team efficiency.",
      "Led stakeholder communications, gathered feedback, and delivered prioritized updates to keep tools aligned with business needs.",
      "Collaborated on Azure DevOps CI/CD workflows, ensuring reliable deployment pipelines and version control integrity.",
    ],
    techStack: [
      "React",
      "JavaScript",
      "MobX",
      "Node.js",
      "PostgreSQL",
      "Storybook",
      "Jest",
      "Azure DevOps",
    ],
  },
];

export const education: Education[] = [
  {
    id: "scu",
    degree: "Master of Science in Computer Science and Engineering",
    school: "Santa Clara University",
    dateRange: "Sep 2023 - Jun 2025",
    logo: "SantaClaraSeal.jpg",
    // Fallback if the seal is ever removed.
    monogram: "SCU",
    description:
      "Graduate coursework concentrated in machine learning, NLP, and information retrieval, alongside systems and cloud architecture. Research projects covered word embeddings, recommendation systems, and sentiment analysis.",
    coursework: [
      "Natural Language Processing",
      "Deep Learning",
      "Machine Learning",
      "Artificial Intelligence",
      "Pattern Recognition and Data Mining",
      "Web Search and Information Retrieval",
      "Advanced Web Programming",
      "Design and Analysis of Algorithms",
      "Operating Systems",
      "Computer Architecture",
      "Solutions Architecture and the Cloud",
      "Product Management",
    ],
  },
  {
    id: "ucdavis",
    degree: "Bachelor of Science in Computer Science",
    school: "University of California, Davis",
    dateRange: "Sep 2016 - Jun 2021",
    logo: "512px-The_University_of_California_Davis.svg.png",
    description:
      "Broad CS foundation across algorithms, systems, databases, and networks, with upper-division electives in machine learning, computational linguistics, and web programming. Interactive media design coursework produced the first projects I shipped publicly.",
    // Ordered by relevance — the homepage card previews the first five.
    coursework: [
      "Web Programming",
      "Machine Learning",
      "Database Systems",
      "Software Engineering",
      "Computational Linguistics",
      "Algorithm Design and Analysis",
      "Data Structures and Programming",
      "Theory of Computation",
      "Computer Networks",
      "Computer Security",
      "Operating Systems",
      "Probability and Statistical Modeling for CS",
      "Interactive Media II",
    ],
  },
];

export const skills = {
  languages: [
    "JavaScript / TypeScript",
    "Python",
    "C / C++",
    "Swift",
    "HTML / CSS",
  ],
  frameworks: [
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "Express",
    "FeathersJS",
    "MobX",
    "PyTorch",
    "TensorFlow",
  ],
  tools: [
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Portainer",
    "Azure DevOps",
    "Git / GitHub",
    "Storybook",
    "Jest",
    "Playwright",
    "Claude Code",
    "Figma",
  ],
  concepts: [
    "Full Stack Development",
    "Agentic Development Workflows",
    "Natural Language Processing",
    "Machine Learning",
    "WebSockets & Real-Time Systems",
    "RESTful APIs",
    "Database Design",
    "CI/CD",
  ],
};

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "Gates Millennium Scholar",
];
