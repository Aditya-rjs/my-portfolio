// ============================================================
// lib/data.ts — Single source of truth for all portfolio data
// ============================================================

export const siteConfig = {
  name: "Aditya Raj Singh",
  title: "Software Engineer | Full Stack Developer",
  description:
    "Final-year CSE student at LNJPIT Chapra. Building scalable web applications, AI-powered solutions, and impactful software products.",
  tagline:
    "Building scalable web applications, AI-powered solutions, and impactful software products.",
  url: "https://adityarajsingh.dev",
  email: "aditya.rjs003@gmail.com",
  phone: "+91 8582084779",
  github: "https://github.com/Aditya-rjs",
  linkedin: "https://www.linkedin.com/in/aditya-raj-singh-5ab5bb259",
  location: "Bihar, India",
  college: "Loknayak Jai Prakash Institute of Technology (LNJPIT), Chapra",
  degree: "B.Tech in Computer Science Engineering",
  graduationYear: "2026",
  cgpa: "7.0",
  resumeFile: "/Aditya_Raj_Singh_Resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Achievements", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["C++", "Python", "JavaScript", "C"],
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend Development",
    icon: "Server",
    skills: ["Flask", "REST APIs"],
  },
  {
    title: "Machine Learning & AI",
    icon: "Brain",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "SHAP",
      "Pandas",
      "NumPy",
      "Explainable AI (XAI)",
      "Intrusion Detection Systems",
    ],
  },
  {
    title: "Core Computer Science",
    icon: "Cpu",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Database",
    icon: "Database",
    skills: ["SQLite"],
  },
  {
    title: "Currently Learning",
    icon: "Rocket",
    skills: ["Node.js", "Express.js", "MongoDB"],
  },
];

export const experiences = [
  {
    company: "Invigo Infotech",
    role: "Web Development Intern",
    duration: "Dec 2025 – Jan 2026",
    type: "Internship",
    highlights: [
      "Developed responsive web applications using HTML5, CSS3, JavaScript, Flexbox, and CSS Grid.",
      "Built dynamic user interfaces using DOM manipulation and form validation.",
      "Utilized Git/GitHub, npm, and browser developer tools.",
      "Applied responsive design and cross-browser compatibility principles.",
    ],
  },
  {
    company: "Polytropic Services",
    role: "Frontend Developer Intern",
    duration: "May 2025 – Jun 2025",
    type: "Internship",
    highlights: [
      "Developed responsive frontend applications using React ecosystem fundamentals.",
      "Built reusable UI components and interactive dashboards.",
      "Worked with Git workflows and collaborative development practices.",
      "Improved responsiveness and maintainability of frontend systems.",
    ],
  },
];

export const projects = [
  {
    id: "ids",
    title: "Explainable AI Intrusion Detection System",
    shortDescription:
      "A full-stack AI-powered network intrusion detection platform with SHAP-based explainability and real-time threat monitoring dashboard.",
    description:
      "Developed a production-grade Explainable AI-based Intrusion Detection System combining machine learning with full-stack web engineering. The platform detects network anomalies using ensemble ML models and provides transparent, human-readable explanations for each prediction via SHAP visualizations—bridging the gap between model performance and interpretability.",
    technologies: ["Python", "Flask", "React.js", "XGBoost", "Random Forest", "SHAP", "SQLite", "REST APIs"],
    image: "/images/ids-dashboard.png",
    github: "https://github.com/Aditya-rjs/explainable-ai-intrusion-detection-system",
    live: "https://explainable-ai-intrusion-detection.vercel.app",
    featured: true,
    liveStatus: null,
    features: [
      "ML models using XGBoost and Random Forest achieving high detection accuracy",
      "SHAP-based Explainable AI for transparent, human-readable prediction reasoning",
      "React dashboard for real-time threat monitoring and network analytics",
      "Flask REST API backend with SQLite data persistence layer",
      "Model evaluation via Precision, Recall, F1-Score, and ROC-AUC metrics",
    ],
  },
  {
    id: "pms",
    title: "Placement Management System",
    shortDescription:
      "A full-stack campus placement workflow management platform with role-based authentication, RESTful APIs, and recruitment analytics dashboards.",
    description:
      "Built a comprehensive placement management platform designed for college placement cells. The system streamlines the end-to-end placement process—from student registration and company onboarding to application tracking and result management—with role-based access for administrators, students, and recruiters.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs"],
    image: "/images/placement-dashboard.png",
    github: null,
    live: null,
    liveStatus: "under-development",
    featured: true,
    features: [
      "Role-based authentication and authorization (Admin, Student, Recruiter)",
      "Full-stack RESTful API architecture with Express.js and MongoDB",
      "Placement tracking dashboard with recruitment analytics and statistics",
      "Company and student profile management modules",
      "Application pipeline with real-time status tracking system",
    ],
  },
];

export const leadershipRoles = [
  {
    title: "Training & Placement Coordinator",
    organization: "LNJPIT Chapra",
    icon: "Users",
    highlights: [
      "Coordinated placement activities between students and recruiters.",
      "Managed placement communications and student registrations.",
      "Assisted during recruitment drives and campus placement events.",
      "Demonstrated leadership, organization, and communication skills.",
    ],
  },
  {
    title: "Event Organiser",
    organization: "Aagaaz & UMANG",
    icon: "Calendar",
    highlights: [
      "Organized inter-college sports events attended by multiple institutions.",
      "Coordinated event logistics and participant registration management.",
      "Worked with cross-functional teams to execute large-scale events successfully.",
    ],
  },
];

export const achievements = [
  {
    title: "Blind Coding Hackathon Runner-Up",
    subtitle: "2× College-Level Competition",
    description:
      "Secured 2nd position in college-level Blind Coding Hackathon competitions twice, demonstrating problem-solving speed and algorithmic thinking under pressure.",
    icon: "Trophy",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
  },
  {
    title: "Golden Boot Award",
    subtitle: "Zonal Football League",
    description:
      "Awarded as the highest goal scorer in the zonal football league, showcasing leadership, teamwork, and competitive excellence beyond technical domains.",
    icon: "Award",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
  },
];

export const resumeStats = [
  { label: "Internships", value: "2", icon: "Briefcase" },
  { label: "Major Projects", value: "2+", icon: "FolderOpen" },
  { label: "Leadership Roles", value: "2", icon: "Users" },
  { label: "CGPA", value: "7.0", icon: "GraduationCap" },
];
