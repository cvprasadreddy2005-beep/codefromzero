import { Roadmap } from '../types';

export const ROADMAPS_DATA: Roadmap[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    category: "Web Development",
    difficulty: "Beginner",
    estimatedDuration: "6 Months (10-15 hrs/week)",
    careerDescription: "Build beautiful, interactive user interfaces for web applications that work smoothly across all devices.",
    requiredSkills: ["Semantic HTML5", "Modern CSS & Tailwind", "JavaScript (ES6+)", "React.js", "TypeScript", "Responsive Design", "Git & GitHub", "API Integration"],
    languagesAndTech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    tools: ["VS Code", "Chrome DevTools", "Git", "Figma", "npm / Vite", "Postman", "Vercel"],
    months: [
      {
        month: 1,
        title: "Web Foundations & Semantics",
        focus: "HTML5, CSS3, Box Model & Responsive Design",
        topics: [
          {
            id: "fe-m1-1",
            title: "HTML5 Semantics & Structure",
            description: "Learn document outline, forms, accessibility, and modern semantic elements.",
            skills: ["Semantic tags", "Form validation", "ARIA basics"],
            duration: "2 Weeks",
            practiceTasks: ["Build an accessible multi-page article", "Create a validated registration form"],
            miniProject: "Personal Profile Card with accessible markup"
          },
          {
            id: "fe-m1-2",
            title: "CSS Layouts: Flexbox & Grid",
            description: "Master modern 1D and 2D layout systems without hacks.",
            skills: ["Flexbox", "CSS Grid", "Media queries", "CSS variables"],
            duration: "2 Weeks",
            practiceTasks: ["Replicate responsive navigation bar", "Create auto-fitting card grid"],
            miniProject: "Responsive Product Landing Page"
          }
        ]
      },
      {
        month: 2,
        title: "JavaScript Fundamentals",
        focus: "Language basics, DOM manipulation, and browser events",
        topics: [
          {
            id: "fe-m2-1",
            title: "Core JavaScript Logic",
            description: "Variables, control flow, functions, arrays, objects, and higher-order methods.",
            skills: ["Data types", "Loops", "Array methods", "Scope"],
            duration: "2 Weeks",
            practiceTasks: ["Array filtering exercises", "Interactive number guessing game"],
            miniProject: "Dynamic Tip & Tax Calculator"
          },
          {
            id: "fe-m2-2",
            title: "DOM Manipulation & Event Handling",
            description: "Select elements, listen to user input, and dynamically modify CSS classes and HTML.",
            skills: ["DOM APIs", "Event delegation", "Form handling"],
            duration: "2 Weeks",
            practiceTasks: ["Accordion component", "Modal popup with keyboard ESC listener"],
            miniProject: "Interactive To-Do List with localStorage"
          }
        ]
      },
      {
        month: 3,
        title: "Asynchronous JavaScript & APIs",
        focus: "Fetch API, Promises, async/await, and error handling",
        topics: [
          {
            id: "fe-m3-1",
            title: "Promises, Async/Await & REST APIs",
            description: "Connect to third-party endpoints and parse JSON data asynchronously.",
            skills: ["Fetch API", "Promises", "Async/Await", "Error handling"],
            duration: "2 Weeks",
            practiceTasks: ["Weather data fetching", "Debounced search query"],
            miniProject: "Live Weather Forecast Dashboard"
          },
          {
            id: "fe-m3-2",
            title: "Git, GitHub & Modern Build Tools",
            description: "Version control branching, PR workflows, and Vite tooling.",
            skills: ["Git CLI", "GitHub workflows", "Vite build"],
            duration: "2 Weeks",
            practiceTasks: ["Create GitHub portfolio repo", "Resolve a simulated merge conflict"],
            miniProject: "GitHub User Finder Web App"
          }
        ]
      },
      {
        month: 4,
        title: "React.js Essentials",
        focus: "Components, Props, State, and Hooks",
        topics: [
          {
            id: "fe-m4-1",
            title: "React Components & State Management",
            description: "JSX, props, useState, useEffect, and component lifecycle.",
            skills: ["JSX", "useState", "useEffect", "Lifting state"],
            duration: "2 Weeks",
            practiceTasks: ["Counter app with step controls", "Dynamic filterable list"],
            miniProject: "Movie Search & Watchlist App"
          },
          {
            id: "fe-m4-2",
            title: "Custom Hooks & Context API",
            description: "Share global state without prop drilling and encapsulate reusable hook logic.",
            skills: ["useContext", "useRef", "Custom hooks"],
            duration: "2 Weeks",
            practiceTasks: ["Theme switcher with Context", "useDebounce custom hook"],
            miniProject: "E-Commerce Shopping Cart with persistent storage"
          }
        ]
      },
      {
        month: 5,
        title: "TypeScript & Production Styling",
        focus: "Type safety and Tailwind CSS",
        topics: [
          {
            id: "fe-m5-1",
            title: "TypeScript for React Developers",
            description: "Static typing for component props, events, state, and API models.",
            skills: ["Interfaces", "Generics", "Type unions", "Strict mode"],
            duration: "2 Weeks",
            practiceTasks: ["Refactor JS components to TS", "Typed API client"],
            miniProject: "Collaborative Kanban Board in TypeScript"
          },
          {
            id: "fe-m5-2",
            title: "Tailwind CSS & Component Libraries",
            description: "Utility-first design, dark mode, responsive variants, and accessible primitives.",
            skills: ["Tailwind", "Responsive classes", "Accessible modals"],
            duration: "2 Weeks",
            practiceTasks: ["Design SaaS dashboard cards", "Accessible dropdown menu"],
            miniProject: "Modern Analytics Dashboard UI"
          }
        ]
      },
      {
        month: 6,
        title: "Performance, Testing & Portfolio",
        focus: "Optimization, Vitest, and Capstone deployment",
        topics: [
          {
            id: "fe-m6-1",
            title: "Web Vitals & Performance Optimization",
            description: "Lazy loading, code splitting, image optimization, and Lighthouse audits.",
            skills: ["Core Web Vitals", "Lighthouse", "Lazy loading", "Memoization"],
            duration: "2 Weeks",
            practiceTasks: ["Optimize image assets", "Audit and achieve 95+ Lighthouse score"],
            miniProject: "High-Performance Developer Portfolio"
          },
          {
            id: "fe-m6-2",
            title: "Frontend Testing & Deployment",
            description: "Unit testing with Vitest/Testing Library, CI/CD with Vercel.",
            skills: ["Unit testing", "Integration testing", "Vercel CI/CD"],
            duration: "2 Weeks",
            practiceTasks: ["Write 10 unit tests for cart logic", "Setup continuous deployment"],
            miniProject: "Capstone: Full-Featured Web Application"
          }
        ]
      }
    ],
    finalProjects: [
      { name: "Developer Portfolio Website", description: "Blazing fast responsive personal website showcasing projects and resume.", tech: ["React", "TypeScript", "Tailwind"] },
      { name: "E-Commerce Storefront", description: "Feature-rich store with cart, filtering, search, and checkout flow.", tech: ["Next.js", "Stripe API", "Tailwind"] },
      { name: "Real-Time Collaboration Canvas", description: "Interactive whiteboard or Kanban board with instant updates.", tech: ["React", "TypeScript", "WebSockets"] }
    ],
    careerOpportunities: [
      { role: "Junior Frontend Developer", salaryRange: "$65,000 - $85,000", demand: "Very High" },
      { role: "React Web Developer", salaryRange: "$80,000 - $110,000", demand: "High" },
      { role: "UI/UX Engineer", salaryRange: "$75,000 - $105,000", demand: "Moderate" }
    ]
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    category: "Software Development",
    difficulty: "Intermediate",
    estimatedDuration: "6 Months (12-15 hrs/week)",
    careerDescription: "Design, build, and secure scalable server-side applications, REST/GraphQL APIs, databases, and microservices.",
    requiredSkills: ["Node.js / Express or Python / Django", "SQL & Relational Databases (PostgreSQL)", "NoSQL (MongoDB / Redis)", "RESTful API Design", "Authentication (JWT / OAuth)", "Docker & Containers", "System Architecture"],
    languagesAndTech: ["JavaScript / TypeScript", "Python / Go", "PostgreSQL", "Redis", "Docker", "Express", "Prisma / TypeORM"],
    tools: ["Postman", "pgAdmin", "Docker CLI", "Linux Terminal", "Git", "Jest / Vitest", "AWS / Cloud Run"],
    months: [
      {
        month: 1,
        title: "Server Runtimes & Node.js Core",
        focus: "Event loop, streams, file system, and Express.js",
        topics: [
          {
            id: "be-m1-1",
            title: "Node.js Architecture & CLI",
            description: "Non-blocking I/O, event loop, modules, file system, and buffer streams.",
            skills: ["Event loop", "fs module", "Path handling"],
            duration: "2 Weeks",
            practiceTasks: ["Build CLI file renamer", "Read and transform large CSV stream"],
            miniProject: "CLI Markdown Note-Taking Tool"
          },
          {
            id: "be-m1-2",
            title: "RESTful API Architecture with Express",
            description: "Routing, request validation, middleware, error handlers, and CORS.",
            skills: ["Express", "Middleware", "HTTP verbs", "Status codes"],
            duration: "2 Weeks",
            practiceTasks: ["Write logging middleware", "CRUD endpoints for bookstore"],
            miniProject: "Complete RESTful Recipe API"
          }
        ]
      },
      {
        month: 2,
        title: "Relational Databases & SQL",
        focus: "PostgreSQL, schema design, queries, and joins",
        topics: [
          {
            id: "be-m2-1",
            title: "Relational Modeling & PostgreSQL",
            description: "DDL, DML, foreign keys, normalization (1NF-3NF), and indexing.",
            skills: ["PostgreSQL", "SQL queries", "Joins", "Indexes"],
            duration: "2 Weeks",
            practiceTasks: ["Design e-commerce relational schema", "Write complex multi-table joins"],
            miniProject: "University Student Enrollment Database"
          },
          {
            id: "be-m2-2",
            title: "ORMs & Query Builders (Prisma / Drizzle)",
            description: "Type-safe database migrations, seeding, relationships, and transactions.",
            skills: ["Prisma", "Transactions", "Migrations", "Seeding"],
            duration: "2 Weeks",
            practiceTasks: ["Run schema migration", "Execute ACID database transaction"],
            miniProject: "Blogging Platform Backend with Prisma"
          }
        ]
      },
      {
        month: 3,
        title: "Authentication & Web Security",
        focus: "Password hashing, JWT, sessions, and security hardening",
        topics: [
          {
            id: "be-m3-1",
            title: "Secure Authentication & JWT",
            description: "Bcrypt salting, access & refresh token rotation, cookie flags.",
            skills: ["JWT", "Bcrypt", "HttpOnly cookies", "RBAC"],
            duration: "2 Weeks",
            practiceTasks: ["Implement password reset flow", "Role-based authorization middleware"],
            miniProject: "Multi-Role User Authentication Service"
          },
          {
            id: "be-m3-2",
            title: "API Security & OWASP Defense",
            description: "Rate limiting, CORS, input sanitization, SQL injection defense, and helmet.",
            skills: ["Rate limiting", "CSRF", "Input validation", "Helmet"],
            duration: "2 Weeks",
            practiceTasks: ["Sanitize user inputs against XSS", "Implement IP sliding rate limiter"],
            miniProject: "Hardened Financial Transaction Gateway"
          }
        ]
      },
      {
        month: 4,
        title: "Caching, NoSQL & Performance",
        focus: "Redis, MongoDB, and asynchronous messaging",
        topics: [
          {
            id: "be-m4-1",
            title: "In-Memory Caching with Redis",
            description: "Cache invalidation patterns, TTL, session stores, and pub/sub.",
            skills: ["Redis", "Cache-aside pattern", "Key expiration"],
            duration: "2 Weeks",
            practiceTasks: ["Cache database query results", "Implement distributed rate limiter"],
            miniProject: "High-Traffic News Feed with Redis Caching"
          },
          {
            id: "be-m4-2",
            title: "Document Stores with MongoDB",
            description: "Flexible schemas, aggregation pipelines, and indexing in NoSQL.",
            skills: ["MongoDB", "Mongoose", "Aggregation pipelines"],
            duration: "2 Weeks",
            practiceTasks: ["Build aggregation report", "Geospatial queries"],
            miniProject: "Location-Based Store Directory Service"
          }
        ]
      },
      {
        month: 5,
        title: "Testing, Docker & Microservices",
        focus: "Unit & integration testing, containerization",
        topics: [
          {
            id: "be-m5-1",
            title: "Automated Backend Testing",
            description: "Unit tests, integration tests with Supertest, test databases, and mocking.",
            skills: ["Jest / Vitest", "Supertest", "Mocking", "Coverage"],
            duration: "2 Weeks",
            practiceTasks: ["Write test suite with 80%+ coverage", "Test database rollback hooks"],
            miniProject: "Fully-Tested Payment Webhook Handler"
          },
          {
            id: "be-m5-2",
            title: "Docker & Container Orchestration",
            description: "Dockerfiles, multi-stage builds, docker-compose for multi-container apps.",
            skills: ["Docker", "Docker Compose", "Container networking"],
            duration: "2 Weeks",
            practiceTasks: ["Containerize Node.js + Postgres app", "Configure production Dockerfile"],
            miniProject: "Containerized Microservices Cluster"
          }
        ]
      },
      {
        month: 6,
        title: "System Design & Cloud Deployment",
        focus: "Scalability, load balancing, and production deployment",
        topics: [
          {
            id: "be-m6-1",
            title: "System Design Fundamentals",
            description: "Horizontal scaling, load balancers, database sharding, CAP theorem.",
            skills: ["Load balancing", "CAP theorem", "Message queues"],
            duration: "2 Weeks",
            practiceTasks: ["Design a URL shortener system", "Design a notification service"],
            miniProject: "Scalable URL Shortener with Analytics"
          },
          {
            id: "be-m6-2",
            title: "Cloud Deployment & CI/CD",
            description: "Deploying to cloud containers (Cloud Run / AWS), monitoring, and health checks.",
            skills: ["CI/CD pipelines", "Environment configs", "Logging"],
            duration: "2 Weeks",
            practiceTasks: ["Setup automated GitHub Actions pipeline", "Implement structured logging"],
            miniProject: "Capstone: Production Scalable Backend Service"
          }
        ]
      }
    ],
    finalProjects: [
      { name: "Scalable E-Commerce Backend API", description: "Secure API with JWT, cart, inventory locking, and Stripe webhooks.", tech: ["Node.js", "PostgreSQL", "Redis", "Docker"] },
      { name: "Real-Time Chat & Notification Microservice", description: "WebSocket-based service with rooms, message history, and push notifications.", tech: ["TypeScript", "WebSockets", "MongoDB"] },
      { name: "Cloud File Storage Service", description: "S3-compatible file upload, transformation, and access control service.", tech: ["Express", "Postgres", "AWS S3"] }
    ],
    careerOpportunities: [
      { role: "Junior Backend Developer", salaryRange: "$70,000 - $90,000", demand: "High" },
      { role: "Node.js / Python API Engineer", salaryRange: "$85,000 - $115,000", demand: "Very High" },
      { role: "Cloud Systems Developer", salaryRange: "$95,000 - $125,000", demand: "High" }
    ]
  },
  {
    id: "fullstack-developer",
    title: "Full-Stack Developer",
    category: "Software Development",
    difficulty: "Advanced",
    estimatedDuration: "9 Months (15 hrs/week)",
    careerDescription: "Master both client-side and server-side engineering, database modeling, cloud architecture, and end-to-end product delivery.",
    requiredSkills: ["Frontend (React/TypeScript/Tailwind)", "Backend (Node.js/Express)", "Databases (PostgreSQL & Redis)", "API Design & GraphQL/REST", "DevOps & Cloud Deployment", "Testing & Security"],
    languagesAndTech: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    tools: ["VS Code", "Git / GitHub", "Docker", "Postman", "Figma", "Cloud Run / Vercel"],
    months: [
      {
        month: 1,
        title: "Frontend Foundations",
        focus: "HTML5, CSS3, JavaScript ES6+",
        topics: [
          { id: "fs-1", title: "Modern Web Standards", description: "HTML5, Flexbox, Grid, ES6+ features.", skills: ["HTML5", "CSS3", "JavaScript"], duration: "4 Weeks", practiceTasks: ["Responsive landing page", "JavaScript DOM calculator"] }
        ]
      },
      {
        month: 2,
        title: "Modern React & Component Design",
        focus: "React, State Management, and Tailwind",
        topics: [
          { id: "fs-2", title: "React Architecture", description: "Hooks, Context, forms, and component composition.", skills: ["React", "Hooks", "Tailwind"], duration: "4 Weeks", practiceTasks: ["Filterable dashboard UI", "Multi-step form"] }
        ]
      },
      {
        month: 3,
        title: "Server & API Development",
        focus: "Node.js, Express, and REST APIs",
        topics: [
          { id: "fs-3", title: "Express Server Runtimes", description: "Routes, middleware, JSON parsing, error handling.", skills: ["Node.js", "Express", "REST"], duration: "4 Weeks", practiceTasks: ["Bookstore API", "JWT auth middleware"] }
        ]
      },
      {
        month: 4,
        title: "Database Modeling & Persistence",
        focus: "PostgreSQL, Prisma, and Redis",
        topics: [
          { id: "fs-4", title: "Relational Modeling", description: "PostgreSQL schemas, migrations, relations, and caching.", skills: ["PostgreSQL", "Prisma", "Redis"], duration: "4 Weeks", practiceTasks: ["Social media schema", "Cache query results in Redis"] }
        ]
      },
      {
        month: 5,
        title: "Full-Stack Integration (Next.js)",
        focus: "Server components, SSR, and API routes",
        topics: [
          { id: "fs-5", title: "Next.js App Router", description: "Server and client components, server actions, route handlers.", skills: ["Next.js", "SSR", "Server Actions"], duration: "4 Weeks", practiceTasks: ["SSR blog with dynamic routes", "Authenticated dashboard"] }
        ]
      },
      {
        month: 6,
        title: "Authentication, Payments & Security",
        focus: "OAuth, Stripe integration, and OWASP",
        topics: [
          { id: "fs-6", title: "Production Auth & Billing", description: "OAuth 2.0, Stripe webhook handling, CSRF defense.", skills: ["OAuth", "Stripe", "Security"], duration: "4 Weeks", practiceTasks: ["Google OAuth login", "Stripe subscription checkout"] }
        ]
      },
      {
        month: 7,
        title: "Real-Time Features & WebSockets",
        focus: "Socket.io, notifications, and live sync",
        topics: [
          { id: "fs-7", title: "Bi-directional Real-Time Communication", description: "WebSockets, pub/sub architecture, presence tracking.", skills: ["WebSockets", "Socket.io", "Real-time state"], duration: "4 Weeks", practiceTasks: ["Live chat room", "Real-time collaborative document"] }
        ]
      },
      {
        month: 8,
        title: "DevOps, Testing & Docker",
        focus: "Docker, CI/CD, and End-to-End Testing",
        topics: [
          { id: "fs-8", title: "Containers & Test Automation", description: "Dockerizing frontend/backend, Playwright E2E tests.", skills: ["Docker", "Playwright", "CI/CD"], duration: "4 Weeks", practiceTasks: ["Containerize fullstack app", "Write 5 E2E automated user tests"] }
        ]
      },
      {
        month: 9,
        title: "Capstone Project & Job Search",
        focus: "Production capstone launch and interview mastery",
        topics: [
          { id: "fs-9", title: "Full-Stack SaaS Capstone", description: "Build, launch, and polish a production-ready SaaS product.", skills: ["System architecture", "Production deployment", "STAR interviews"], duration: "4 Weeks", practiceTasks: ["Deploy to production", "Prepare tech portfolio"] }
        ]
      }
    ],
    finalProjects: [
      { name: "Full-Stack SaaS Task Management Platform", description: "Trello/Asana clone with teams, boards, payments, and real-time updates.", tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Stripe"] },
      { name: "Developer Community & Code Sharing Forum", description: "Interactive forum with syntax highlighting, voting, and real-time comments.", tech: ["React", "Node.js", "Redis", "Postgres"] }
    ],
    careerOpportunities: [
      { role: "Junior Full-Stack Engineer", salaryRange: "$75,000 - $95,000", demand: "Very High" },
      { role: "Full-Stack Web Developer", salaryRange: "$95,000 - $130,000", demand: "High" }
    ]
  },
  {
    id: "java-developer",
    title: "Java Developer",
    category: "Software Development",
    difficulty: "Intermediate",
    estimatedDuration: "6 Months (12 hrs/week)",
    careerDescription: "Develop robust enterprise applications, microservices, and backend architectures using the Java ecosystem.",
    requiredSkills: ["Java 17/21 Core", "OOP Principles & Design Patterns", "Spring Boot", "Spring Data JPA / Hibernate", "PostgreSQL / MySQL", "Microservices & REST", "Maven / Gradle"],
    languagesAndTech: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "Maven", "Docker"],
    tools: ["IntelliJ IDEA", "Postman", "pgAdmin", "Docker", "Git"],
    months: [
      {
        month: 1,
        title: "Java Core Foundations",
        focus: "Syntax, OOP, Collections Framework",
        topics: [
          { id: "jav-1", title: "OOP & Collections", description: "Classes, inheritance, polymorphism, ArrayList, HashMap.", skills: ["Java Core", "OOP", "Collections"], duration: "4 Weeks", practiceTasks: ["Bank Account Simulator", "Student Record Management"] }
        ]
      },
      {
        month: 2,
        title: "Modern Java & Concurrency",
        focus: "Lambdas, Streams API, Multi-threading",
        topics: [
          { id: "jav-2", title: "Streams & Multi-threading", description: "Functional programming, threads, synchronization, CompletableFuture.", skills: ["Streams", "Lambdas", "Threads"], duration: "4 Weeks", practiceTasks: ["Stream pipeline transformations", "Multi-threaded web scraper"] }
        ]
      },
      {
        month: 3,
        title: "Databases & JDBC / Hibernate",
        focus: "SQL, JDBC, ORM mapping",
        topics: [
          { id: "jav-3", title: "Persistence with Hibernate", description: "Entity mappings, JPA criteria, HQL queries, connection pooling.", skills: ["JPA", "Hibernate", "SQL"], duration: "4 Weeks", practiceTasks: ["Entity relationship mapping", "ACID transaction management"] }
        ]
      },
      {
        month: 4,
        title: "Spring Boot Essentials",
        focus: "Dependency Injection, Controllers, REST APIs",
        topics: [
          { id: "jav-4", title: "Spring Boot Framework", description: "IoC container, Spring MVC, REST controllers, DTO validation.", skills: ["Spring Boot", "REST APIs", "Validation"], duration: "4 Weeks", practiceTasks: ["Inventory Management API", "Custom exception handling"] }
        ]
      },
      {
        month: 5,
        title: "Spring Security & Microservices",
        focus: "JWT Auth, Microservices architecture",
        topics: [
          { id: "jav-5", title: "Security & Service Architecture", description: "Spring Security filter chains, JWT token auth, Eureka service registry.", skills: ["Spring Security", "JWT", "Microservices"], duration: "4 Weeks", practiceTasks: ["Secure user authentication service", "API Gateway routing"] }
        ]
      },
      {
        month: 6,
        title: "Testing, Docker & Production",
        focus: "JUnit 5, Mockito, and Docker deployment",
        topics: [
          { id: "jav-6", title: "Enterprise Testing & Containerization", description: "Unit tests with JUnit 5 & Mockito, Dockerizing Spring Boot apps.", skills: ["JUnit 5", "Mockito", "Docker"], duration: "4 Weeks", practiceTasks: ["80%+ unit test suite", "Dockerized deployment pipeline"] }
        ]
      }
    ],
    finalProjects: [
      { name: "Enterprise Banking Microservice", description: "Account management, transfers with ACID compliance, and JWT auth.", tech: ["Java 17", "Spring Boot", "PostgreSQL", "Docker"] },
      { name: "E-Commerce Order Management System", description: "Order processing, inventory reservation, and payment integration.", tech: ["Spring Boot", "Hibernate", "Kafka", "MySQL"] }
    ],
    careerOpportunities: [
      { role: "Junior Java Developer", salaryRange: "$70,000 - $90,000", demand: "High" },
      { role: "Spring Boot Backend Engineer", salaryRange: "$85,000 - $115,000", demand: "Very High" }
    ]
  },
  {
    id: "python-developer",
    title: "Python Developer",
    category: "Software Development",
    difficulty: "Beginner",
    estimatedDuration: "5 Months (10-12 hrs/week)",
    careerDescription: "Harness the versatility of Python for web development, automation scripts, data pipelines, and API services.",
    requiredSkills: ["Python 3 Core", "Data Structures & Comprehensions", "OOP & Decorators", "FastAPI / Django", "SQL & SQLAlchemy", "Asyncio & Scraping", "Git"],
    languagesAndTech: ["Python", "FastAPI", "Django", "PostgreSQL", "SQLAlchemy", "Docker"],
    tools: ["VS Code / PyCharm", "Postman", "Docker", "Git", "Jupyter Notebook"],
    months: [
      {
        month: 1,
        title: "Python Foundations",
        focus: "Syntax, data types, functions, modules",
        topics: [
          { id: "py-1", title: "Core Python Programming", description: "Control flow, lists, dicts, file I/O, error handling.", skills: ["Python 3", "Functions", "File I/O"], duration: "4 Weeks", practiceTasks: ["CLI Expense Calculator", "CSV data processor"] }
        ]
      },
      {
        month: 2,
        title: "Advanced Python & OOP",
        focus: "Classes, decorators, generators, context managers",
        topics: [
          { id: "py-2", title: "Pythonic Code & Metaprogramming", description: "OOP design, dunder methods, generators, decorators.", skills: ["OOP", "Decorators", "Generators"], duration: "4 Weeks", practiceTasks: ["Custom logging decorator", "Lazy data generator pipeline"] }
        ]
      },
      {
        month: 3,
        title: "FastAPI & Web APIs",
        focus: "Pydantic, async endpoints, OpenAPI docs",
        topics: [
          { id: "py-3", title: "Modern APIs with FastAPI", description: "Async endpoints, Pydantic validation, dependency injection.", skills: ["FastAPI", "Pydantic", "Async"], duration: "4 Weeks", practiceTasks: ["REST API for Task Management", "JWT authentication endpoint"] }
        ]
      },
      {
        month: 4,
        title: "Databases & Web Scraping",
        focus: "SQLAlchemy, Beautiful Soup, Playwright",
        topics: [
          { id: "py-4", title: "Persistence & Data Harvesting", description: "SQLAlchemy ORM, database migrations, web scraping.", skills: ["SQLAlchemy", "BeautifulSoup", "PostgreSQL"], duration: "4 Weeks", practiceTasks: ["Scrape job listings into database", "Database migration pipeline"] }
        ]
      },
      {
        month: 5,
        title: "Testing, Docker & Production",
        focus: "Pytest, Docker, and Cloud Deployment",
        topics: [
          { id: "py-5", title: "Packaging & Deployment", description: "Pytest unit tests, Docker containerization, CI/CD.", skills: ["Pytest", "Docker", "CI/CD"], duration: "4 Weeks", practiceTasks: ["Automated test suite", "Deploy container to Cloud Run"] }
        ]
      }
    ],
    finalProjects: [
      { name: "Automated Job Aggregator & Alert Bot", description: "Scrapes jobs, stores in PostgreSQL, and alerts via Discord/Telegram.", tech: ["Python", "FastAPI", "PostgreSQL", "Docker"] },
      { name: "Real-Time Content Management API", description: "Asynchronous REST API with auth, image uploads, and caching.", tech: ["FastAPI", "SQLAlchemy", "Redis", "Postgres"] }
    ],
    careerOpportunities: [
      { role: "Junior Python Developer", salaryRange: "$65,000 - $85,000", demand: "High" },
      { role: "Backend Python Engineer", salaryRange: "$80,000 - $110,000", demand: "High" }
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    category: "AI and Data",
    difficulty: "Beginner",
    estimatedDuration: "5 Months (10-12 hrs/week)",
    careerDescription: "Transform raw data into meaningful business insights, executive dashboards, and actionable visual reports.",
    requiredSkills: ["SQL (Advanced Aggregations & Joins)", "Excel / Spreadsheets", "Python (Pandas & NumPy)", "Data Visualization (Tableau / PowerBI / Matplotlib)", "Statistical Analysis"],
    languagesAndTech: ["SQL", "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    tools: ["Tableau", "Power BI", "Excel", "Jupyter Notebooks", "PostgreSQL"],
    months: [
      {
        month: 1,
        title: "SQL for Analytics",
        focus: "SELECT, aggregations, window functions",
        topics: [
          { id: "da-1", title: "Advanced SQL Queries", description: "Joins, GROUP BY, HAVING, CTEs, and window functions.", skills: ["SQL", "Aggregation", "Window Functions"], duration: "4 Weeks", practiceTasks: ["Customer churn query", "Monthly cohort retention analysis"] }
        ]
      },
      {
        month: 2,
        title: "Advanced Excel & Business Modeling",
        focus: "Pivot tables, VLOOKUP/XLOOKUP, formulas",
        topics: [
          { id: "da-2", title: "Spreadsheet Analytics", description: "Dynamic dashboards, financial functions, sensitivity analysis.", skills: ["Excel", "Pivot Tables", "Modeling"], duration: "4 Weeks", practiceTasks: ["Sales forecast model", "Executive KPI dashboard"] }
        ]
      },
      {
        month: 3,
        title: "Python for Data Analysis",
        focus: "Pandas, NumPy, and data wrangling",
        topics: [
          { id: "da-3", title: "Data Wrangling with Pandas", description: "Cleaning missing values, reshaping, merging, and time series.", skills: ["Pandas", "NumPy", "Data Cleaning"], duration: "4 Weeks", practiceTasks: ["Clean messy survey data", "Time series sales trend analysis"] }
        ]
      },
      {
        month: 4,
        title: "Exploratory Data Analysis & Visualization",
        focus: "Matplotlib, Seaborn, and storytelling",
        topics: [
          { id: "da-4", title: "Data Storytelling & Charts", description: "Distributions, correlations, heatmaps, interactive charts.", skills: ["Matplotlib", "Seaborn", "Storytelling"], duration: "4 Weeks", practiceTasks: ["Distribution and outlier analysis", "Customer demographic report"] }
        ]
      },
      {
        month: 5,
        title: "BI Dashboards & Portfolio",
        focus: "Tableau / Power BI dashboards and presentation",
        topics: [
          { id: "da-5", title: "BI Dashboard Development", description: "Interactive filters, KPI drill-downs, and portfolio case studies.", skills: ["Power BI", "Tableau", "Reporting"], duration: "4 Weeks", practiceTasks: ["Build executive retail dashboard", "Publish analysis case study"] }
        ]
      }
    ],
    finalProjects: [
      { name: "E-Commerce Customer Churn Analysis", description: "End-to-end analysis identifying churn drivers with actionable recommendations.", tech: ["Python", "Pandas", "SQL", "Power BI"] },
      { name: "Global COVID-19 / Public Health Dashboard", description: "Interactive map and tracking dashboard with automated metrics.", tech: ["Tableau", "SQL", "Excel"] }
    ],
    careerOpportunities: [
      { role: "Junior Data Analyst", salaryRange: "$60,000 - $80,000", demand: "Very High" },
      { role: "Business Intelligence Analyst", salaryRange: "$75,000 - $100,000", demand: "High" }
    ]
  },
  {
    id: "ai-ml-engineer",
    title: "AI & Machine Learning Engineer",
    category: "AI and Data",
    difficulty: "Advanced",
    estimatedDuration: "8 Months (15 hrs/week)",
    careerDescription: "Build, train, fine-tune, and deploy intelligent predictive models and generative AI systems at scale.",
    requiredSkills: ["Python & Scientific Stack", "Linear Algebra & Probability", "Classical ML (Scikit-Learn)", "Deep Learning (PyTorch / TensorFlow)", "NLP & Transformers", "LLMs, Prompt Engineering & RAG", "Model Deployment & MLOps"],
    languagesAndTech: ["Python", "PyTorch", "Scikit-Learn", "Hugging Face", "FastAPI", "Docker"],
    tools: ["Jupyter", "Google Colab", "MLflow", "Weights & Biases", "Docker", "Git"],
    months: [
      {
        month: 1,
        title: "Math Foundations & Python Stack",
        focus: "Linear algebra, calculus, NumPy, Pandas",
        topics: [
          { id: "ai-1", title: "Mathematics for ML", description: "Matrix operations, gradients, probability, statistics.", skills: ["NumPy", "Linear Algebra", "Calculus"], duration: "4 Weeks", practiceTasks: ["Implement matrix multiplication from scratch", "Gradient descent simulation"] }
        ]
      },
      {
        month: 2,
        title: "Classical Machine Learning",
        focus: "Supervised and unsupervised algorithms",
        topics: [
          { id: "ai-2", title: "Scikit-Learn Algorithms", description: "Linear/logistic regression, decision trees, random forests, clustering.", skills: ["Scikit-Learn", "Evaluation Metrics", "Cross-Validation"], duration: "4 Weeks", practiceTasks: ["House price prediction", "Credit risk classification"] }
        ]
      },
      {
        month: 3,
        title: "Deep Learning Foundations",
        focus: "Neural networks, backpropagation, PyTorch",
        topics: [
          { id: "ai-3", title: "PyTorch & Multi-Layer Perceptrons", description: "Tensors, autograd, loss functions, optimizers, activation functions.", skills: ["PyTorch", "Backpropagation", "Neural Networks"], duration: "4 Weeks", practiceTasks: ["Build MLP on MNIST from scratch", "Custom training loop"] }
        ]
      },
      {
        month: 4,
        title: "Computer Vision & CNNs",
        focus: "Convolutional networks, transfer learning",
        topics: [
          { id: "ai-4", title: "Vision Models", description: "CNN architectures, ResNet, data augmentation, object detection basics.", skills: ["CNNs", "Transfer Learning", "Torchvision"], duration: "4 Weeks", practiceTasks: ["Fine-tune ResNet on custom dataset", "Image classifier web demo"] }
        ]
      },
      {
        month: 5,
        title: "Natural Language Processing (NLP)",
        focus: "Tokenization, Embeddings, Attention, Transformers",
        topics: [
          { id: "ai-5", title: "Transformer Architectures", description: "Self-attention mechanism, BERT, GPT, Hugging Face transformers.", skills: ["Transformers", "Hugging Face", "Tokenization"], duration: "4 Weeks", practiceTasks: ["Sentiment analysis pipeline", "Text summarization model"] }
        ]
      },
      {
        month: 6,
        title: "Generative AI & LLM Systems",
        focus: "Prompt engineering, RAG, Vector DBs, LoRA",
        topics: [
          { id: "ai-6", title: "RAG & LLM Application Engineering", description: "Vector databases (Pinecone / Chroma), embeddings, RAG pipelines.", skills: ["RAG", "Embeddings", "LangChain / LlamaIndex"], duration: "4 Weeks", practiceTasks: ["Document Q&A RAG pipeline", "LoRA fine-tuning run"] }
        ]
      },
      {
        month: 7,
        title: "MLOps & Model Deployment",
        focus: "FastAPI, Docker, model monitoring, MLflow",
        topics: [
          { id: "ai-7", title: "Productionizing ML Models", description: "Packaging models into low-latency REST APIs, Docker, drift monitoring.", skills: ["FastAPI", "Docker", "MLflow", "Inference"], duration: "4 Weeks", practiceTasks: ["Serve PyTorch model via FastAPI", "Containerize inference pipeline"] }
        ]
      },
      {
        month: 8,
        title: "Capstone AI Product",
        focus: "End-to-end intelligent application",
        topics: [
          { id: "ai-8", title: "Capstone Delivery", description: "Design, train, evaluate, and deploy an end-to-end AI product.", skills: ["System design", "Deployment", "Documentation"], duration: "4 Weeks", practiceTasks: ["Deploy live AI application", "Write comprehensive technical report"] }
        ]
      }
    ],
    finalProjects: [
      { name: "Intelligent Document RAG Assistant", description: "Ask questions over private PDFs with source citations and embeddings.", tech: ["Python", "FastAPI", "ChromaDB", "Gemini API", "Docker"] },
      { name: "Real-Time Object Detection & Tracking", description: "Processes live video streams to detect and count objects with alerts.", tech: ["PyTorch", "YOLOv8", "OpenCV", "Python"] }
    ],
    careerOpportunities: [
      { role: "Junior Machine Learning Engineer", salaryRange: "$85,000 - $115,000", demand: "Very High" },
      { role: "AI Solutions Developer", salaryRange: "$95,000 - $135,000", demand: "Extremely High" }
    ]
  },
  {
    id: "cybersecurity-specialist",
    title: "Cybersecurity Specialist",
    category: "Cybersecurity and Cloud",
    difficulty: "Intermediate",
    estimatedDuration: "6 Months (12-15 hrs/week)",
    careerDescription: "Defend networks, applications, and cloud infrastructures against cyber threats, vulnerabilities, and attacks.",
    requiredSkills: ["Networking Protocols & Packet Analysis", "Linux System Administration", "Web Application Security (OWASP Top 10)", "Penetration Testing Tools", "Cryptography & PKI", "Security Operations & Incident Response"],
    languagesAndTech: ["Python", "Bash Scripting", "Linux / Kali", "Wireshark", "Burp Suite", "Nmap"],
    tools: ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "Splunk", "Docker"],
    months: [
      {
        month: 1,
        title: "Computer Networks & Linux Hardening",
        focus: "TCP/IP, Wireshark, Linux permissions, Bash",
        topics: [
          { id: "cs-1", title: "Network Analysis & Linux", description: "Packet sniffing, subnets, firewalls (iptables), file permissions.", skills: ["Wireshark", "Linux", "Networking"], duration: "4 Weeks", practiceTasks: ["Capture and inspect HTTP vs HTTPS packets", "Harden a Linux server with UFW"] }
        ]
      },
      {
        month: 2,
        title: "Applied Cryptography & Authentication",
        focus: "Symmetric/asymmetric encryption, hashing, PKI",
        topics: [
          { id: "cs-2", title: "Ciphers & Public Key Infrastructure", description: "AES, RSA, SHA-256, TLS certificates, SSH key management.", skills: ["Cryptography", "PKI", "TLS"], duration: "4 Weeks", practiceTasks: ["Generate and inspect SSL certificates", "Encrypt files using Python cryptography"] }
        ]
      },
      {
        month: 3,
        title: "Web Application Security (OWASP Top 10)",
        focus: "SQLi, XSS, CSRF, IDOR, SSRF",
        topics: [
          { id: "cs-3", title: "Web Vulnerability Hunting", description: "Exploiting and remediating the OWASP Top 10 web vulnerabilities.", skills: ["OWASP Top 10", "Burp Suite", "Code Auditing"], duration: "4 Weeks", practiceTasks: ["Exploit SQL injection on DVWA testbed", "Fix stored XSS and CSRF flaws"] }
        ]
      },
      {
        month: 4,
        title: "Security Operations & Monitoring (SOC)",
        focus: "SIEM, log analysis, intrusion detection",
        topics: [
          { id: "cs-4", title: "Threat Detection & Incident Response", description: "Log parsing, Snort IDS rules, analyzing attack artifacts in Splunk.", skills: ["SIEM", "Log Analysis", "Incident Response"], duration: "4 Weeks", practiceTasks: ["Write custom Snort detection rule", "Investigate simulated brute-force attack in logs"] }
        ]
      },
      {
        month: 5,
        title: "Penetration Testing & Ethical Hacking",
        focus: "Reconnaissance, vulnerability scanning, exploitation",
        topics: [
          { id: "cs-5", title: "Ethical Hacking Methodologies", description: "Reconnaissance with Nmap, vulnerability assessment, ethical reporting.", skills: ["Nmap", "Metasploit", "Reporting"], duration: "4 Weeks", practiceTasks: ["Complete 3 HackTheBox / TryHackMe machines", "Write a professional penetration test report"] }
        ]
      },
      {
        month: 6,
        title: "Cloud Security & DevSecOps",
        focus: "AWS IAM, Docker security, CI/CD security scanning",
        topics: [
          { id: "cs-6", title: "DevSecOps & Cloud Security", description: "Zero Trust, container security scanning (Trivy), secret management.", skills: ["Cloud Security", "DevSecOps", "Zero Trust"], duration: "4 Weeks", practiceTasks: ["Audit Docker container vulnerabilities", "Implement automated security scanner in CI/CD"] }
        ]
      }
    ],
    finalProjects: [
      { name: "Automated Vulnerability Scanner & Alert Pipeline", description: "Scans web endpoints for common misconfigurations and emails reports.", tech: ["Python", "Nmap", "Docker", "Bash"] },
      { name: "Comprehensive Web Application Security Audit", description: "Full white-box and black-box security audit report with proofs of concept and remediation code.", tech: ["Burp Suite", "OWASP ZAP", "Wireshark"] }
    ],
    careerOpportunities: [
      { role: "Junior SOC Analyst", salaryRange: "$65,000 - $85,000", demand: "Very High" },
      { role: "Information Security Analyst", salaryRange: "$80,000 - $110,000", demand: "Extremely High" },
      { role: "Junior Penetration Tester", salaryRange: "$75,000 - $100,000", demand: "High" }
    ]
  }
];
