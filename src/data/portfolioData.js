/**
 * ============================================================
 *  PORTFOLIO DATA — SINGLE SOURCE OF TRUTH
 *  Edit this file to update any information on the portfolio.
 *  All sections pull data from here.
 * ============================================================
 */

// ─── PERSONAL INFO ────────────────────────────────────────────
export const personal = {
  name: "Suresh Reddy T",
  title: "Python Full Stack Developer",
  subtitle: "Python AI Developer",
  tagline: "Building scalable web applications, REST APIs, and AI-powered solutions using Python and modern technologies.",
  availability: "Open to Opportunities",

  // ✏️ Update with your actual contact details
  email: "sureshrt.ui@gmail.com",           // Replace with preferred recruiter email
  phone: "+91 8985458690",                   // Replace or remove if not comfortable sharing
  location: "India",

  // ✏️ Update with your actual social URLs
  github: "https://github.com/Suresh-5610",
  linkedin: "https://www.linkedin.com/in/suresh-reddy-thappeta-a00a76137/",

  // Resume path (lives in public/assets/)
  resumePath: "./assets/Suresh_Reddy_T_Resume.pdf",
  resumeFilename: "Suresh_Reddy_T_Resume.pdf",
};

// ─── ABOUT ME ─────────────────────────────────────────────────
export const about = {
  summary: `I'm a Python-focused software developer with hands-on experience building backend systems, 
  RESTful APIs, and full-stack web applications. I work primarily with Python, FastAPI, Django, and Django 
  REST Framework on the backend, paired with React.js and JavaScript on the frontend.

  Beyond web development, I've worked on AI and GenAI integrations — including building RAG (Retrieval-Augmented 
  Generation) pipelines with LLMs, implementing vector database search, and integrating OpenAI APIs into production 
  workflows. I'm comfortable working with cloud infrastructure on Azure and AWS, containerizing services with 
  Docker, and following Git-based collaboration workflows.

  I'm looking for roles where I can contribute to impactful backend or full-stack projects, and continue 
  growing in the Python and AI/ML space.`,

  pillars: [
    {
      icon: "Server",
      title: "Backend & API Engineering",
      description: "Building RESTful APIs, authentication flows (JWT, OAuth2), background tasks, and scalable server-side logic with FastAPI and Django.",
    },
    {
      icon: "Brain",
      title: "AI & LLM Integration",
      description: "Designing RAG pipelines, integrating LLMs (OpenAI API), implementing vector search, and building AI-powered application features.",
    },
    {
      icon: "Layout",
      title: "Full-Stack Development",
      description: "End-to-end feature delivery from database schema to React.js UI — including responsive design, state management, and API integration.",
    },
    {
      icon: "Cloud",
      title: "Cloud & DevOps",
      description: "Deploying and configuring services on Azure and AWS, containerizing applications with Docker, and maintaining clean Git workflows.",
    },
  ],
};

// ─── TECHNICAL SKILLS ─────────────────────────────────────────
export const skillGroups = [
  {
    category: "Programming",
    icon: "Code2",
    color: "#38bdf8",
    skills: ["Python", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "#818cf8",
    skills: ["FastAPI", "Django", "Django REST Framework", "REST APIs", "JWT Auth", "OAuth2"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    color: "#34d399",
    skills: ["React.js", "Redux", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#fb923c",
    skills: ["PostgreSQL", "MySQL", "Vector Databases"],
  },
  {
    category: "AI / GenAI",
    icon: "Brain",
    color: "#f472b6",
    skills: ["Machine Learning", "LLMs", "RAG", "Generative AI", "OpenAI API", "Prompt Engineering"],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    color: "#a78bfa",
    skills: ["Microsoft Azure", "AWS", "Docker", "CI/CD", "GitHub Actions"],
  },
  {
    category: "Tools & Practices",
    icon: "Wrench",
    color: "#fbbf24",
    skills: ["Git", "GitHub", "Postman", "Agile / Scrum", "REST API Testing"],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "AI-Powered Document Q&A System",
    category: "AI & LLM",
    categoryColor: "#f472b6",
    problem: "Enable users to query large documents using natural language instead of manual search.",
    description:
      "Built a RAG-based system where users upload documents (PDF, DOCX) and ask questions in natural language. Documents are chunked, embedded, and stored in a vector database. A FastAPI backend orchestrates retrieval and feeds context to an LLM to generate accurate, grounded answers.",
    tech: ["Python", "FastAPI", "LLM", "RAG", "Vector DB", "OpenAI API", "PostgreSQL"],
    features: [
      "Document upload, chunking & embedding pipeline",
      "Vector similarity search for context retrieval",
      "LLM-powered natural language answer generation",
      "REST API with async endpoints",
      "Source citation in responses",
    ],
    github: "https://github.com/Suresh-5610",
    demo: null,
    highlight: true,
  },
  {
    id: 2,
    title: "Expense Tracker REST API",
    category: "Backend & APIs",
    categoryColor: "#818cf8",
    problem: "Provide developers with a clean, well-documented REST API for personal finance tracking.",
    description:
      "A production-ready REST API for expense management. Features JWT authentication, expense categorization, budget tracking, monthly reporting, and full Swagger/OpenAPI documentation. Built with FastAPI and PostgreSQL.",
    tech: ["Python", "FastAPI", "PostgreSQL", "JWT", "REST API", "Swagger/OpenAPI"],
    features: [
      "JWT-based authentication & user management",
      "CRUD operations with input validation",
      "Expense categorization and tagging",
      "Monthly & category-wise reporting",
      "Full Swagger UI documentation",
    ],
    github: "https://github.com/Suresh-5610",
    demo: null,
    highlight: false,
  },
  {
    id: 3,
    title: "Employee Management System",
    category: "Full Stack",
    categoryColor: "#34d399",
    problem: "Centralize HR data management with role-based access and a modern frontend interface.",
    description:
      "A full-stack employee management application with Django REST Framework backend and React.js frontend. Supports employee CRUD, department management, role-based access control, search/filtering, and analytics dashboard.",
    tech: ["Python", "Django", "Django REST Framework", "React.js", "PostgreSQL", "JWT"],
    features: [
      "Employee CRUD with search and filtering",
      "Role-based access control (Admin/HR/Employee)",
      "Department and designation management",
      "Responsive React.js dashboard UI",
      "RESTful API with DRF serializers",
    ],
    github: "https://github.com/Suresh-5610",
    demo: null,
    highlight: false,
  },
  {
    id: 4,
    title: "Figma-to-WordPress Automation Engine",
    category: "Full Stack",
    categoryColor: "#34d399",
    problem: "Eliminate manual effort in converting Figma design files to deployable WordPress templates.",
    description:
      "An automation pipeline that takes Figma design exports and automatically generates WordPress-compatible HTML/CSS/PHP templates. Integrated OpenAI API for AI-assisted code review and optimization. Handles Figma API authentication via OAuth2.",
    tech: ["Python", "FastAPI", "Figma API", "OAuth2", "OpenAI API", "WordPress", "BeautifulSoup4"],
    features: [
      "Figma API integration with OAuth2 authentication",
      "Automated HTML/CSS/PHP code generation",
      "AI-powered code review & optimization",
      "CSS conflict detection and cleanup",
      "Batch processing of design components",
    ],
    github: "https://github.com/Suresh-5610",
    demo: null,
    highlight: false,
  },
  {
    id: 5,
    title: "AI-Powered SEO Audit Automation Platform",
    category: "AI & LLM",
    categoryColor: "#f472b6",
    problem: "Manual SEO audits couldn't scale to tens of thousands of monthly orders while staying accurate and cost-trackable.",
    description:
      "Developed and deployed a production AI-powered SEO audit automation platform at Vsplash Tech Labs. Built a RAG (FAISS) pipeline to extract, chunk, and embed PDF content for semantic search, with hybrid retrieval surfacing relevant SEO guidelines to boost LLM response accuracy. Automated AI workflows built with LangChain and LangGraph analyze SEO issues, retrieve audit context, select tools/APIs, and generate recommendations. MLflow (via Docker) tracks LLM observability — latency, token usage, and execution cost — with logs persisted to MongoDB, while Redis powers async background processing and AWS S3 stores generated audit reports at scale.",
    tech: ["Python", "FastAPI", "GenAI", "LLM", "RAG", "FAISS", "LangChain", "LangGraph", "Docker", "MLflow", "Redis", "AWS S3", "MySQL", "Nginx", "CI/CD"],
    features: [
      "RAG (FAISS) pipeline: PDF extraction, chunking, embeddings & vector search",
      "Hybrid retrieval for SEO guidelines and contextual audit data",
      "Automated AI workflows with LangChain/LangGraph for SEO analysis & recommendations",
      "MLflow-based LLM observability: latency, token usage & cost tracking (logs in MongoDB)",
      "Async/background processing with Redis for large-scale audit operations",
      "AWS S3 storage for pre-audit and post-audit reports",
      "Processes 20,000+ audit orders/month, ~240,000+ orders delivered",
    ],
    github: "https://github.com/Suresh-5610",
    demo: null,
    highlight: true,
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────
// ✏️ Update dates, responsibilities, and achievements with accurate details
export const experience = [
  {
    id: 1,
    company: "Vsplash Tech Labs",
    role: "Python Developer",                   // ✏️ Update exact role title
    period: "— Present",                         // ✏️ Update start date
    location: "India",                           // ✏️ Update location
    type: "Full-time",
    current: true,
    responsibilities: [
      "Built and maintained REST APIs using FastAPI and Django REST Framework for client web applications.",
      "Developed an AI-powered document processing pipeline using RAG and LLM integrations.",
      "Automated Figma-to-WordPress template generation using Python and the Figma API.",
      "Implemented JWT authentication, OAuth2 flows, and role-based access control.",
      "Collaborated with frontend teams to integrate React.js UIs with Python backends.",
      "Wrote unit tests, API documentation (Swagger/OpenAPI), and participated in code reviews.",
    ],
    tech: ["Python", "FastAPI", "Django", "DRF", "React.js", "PostgreSQL", "OpenAI API", "Docker"],
  },
  {
    id: 2,
    company: "Integra Consultant",
    role: "Python / Full Stack Developer",       // ✏️ Update exact role title
    period: "— ",                                // ✏️ Update period
    location: "India",
    type: "Full-time",
    current: false,
    responsibilities: [
      "Developed backend services and REST APIs for client projects using Python and FastAPI.",
      "Worked on database design, query optimization, and ORM integrations with PostgreSQL.",
      "Built responsive frontend components using React.js and JavaScript.",
      "Participated in Agile sprints, daily stand-ups, and delivery planning.",
    ],
    tech: ["Python", "FastAPI", "React.js", "PostgreSQL", "JavaScript", "REST APIs"],
  },
  {
    id: 3,
    company: "Nevexa Digital",
    role: "Frontend / Python Developer",         // ✏️ Update exact role title
    period: "— ",                                // ✏️ Update period
    location: "India",
    type: "Full-time",
    current: false,
    responsibilities: [
      "Developed and maintained web applications using Python backend and JavaScript/React frontend.",
      "Implemented responsive UI components aligned with client design requirements.",
      "Supported API integration between frontend applications and backend services.",
    ],
    tech: ["Python", "JavaScript", "React.js", "HTML5", "CSS3", "REST APIs"],
  },
];

// ─── EDUCATION ────────────────────────────────────────────────
// ✏️ Update graduation year and CGPA/percentage if desired
export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics & Communication Engineering (ECE)",
    institution: "Srinivasa Institute of Technology & Sciences",
    university: "JNTU Anantapur",
    period: "— ",           // ✏️ Update graduation year
    location: "Andhra Pradesh, India",
    grade: "",              // ✏️ Optionally add CGPA or percentage
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────
// ✏️ Add your real certifications here
export const certifications = [
  {
    name: "AWS Certified Developer",            // ✏️ Replace with your actual cert
    issuer: "Amazon Web Services",
    year: "",                                    // ✏️ Add year
    credentialUrl: "",                           // ✏️ Add URL
    placeholder: true,                           // Remove this flag once you add a real cert
  },
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "",
    credentialUrl: "",
    placeholder: true,
  },
  {
    name: "Python Professional Certification",
    issuer: "",                                  // ✏️ Add issuer
    year: "",
    credentialUrl: "",
    placeholder: true,
  },
];
