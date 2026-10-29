import { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    difficulty: "Beginner",
    category: "Frontend Web",
    description: "Design and build your own developer portfolio website showcasing your skills, bio, projects, and contact links.",
    requiredTech: ["HTML5", "CSS3 / Tailwind", "JavaScript", "Responsive Design"],
    skillsLearned: ["Semantic HTML structure", "Flexbox & Grid layouts", "Mobile responsive CSS", "Accessible navigation", "Hosting with GitHub Pages or Vercel"],
    objectives: [
      "Create a modern hero section with your headline and headshot.",
      "Display project cards with live demo and GitHub links.",
      "Build a contact form and social media links.",
      "Achieve 100% responsive layout across mobile and desktop."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "HTML Skeleton & Semantic Structure",
        detail: "Create an index.html with <header>, <nav>, <main>, <section id='projects'>, and <footer>.",
        codeSnippet: "<header class='nav-bar'>\n  <a href='#'>Your Name</a>\n  <nav>\n    <a href='#about'>About</a>\n    <a href='#projects'>Projects</a>\n    <a href='#contact'>Contact</a>\n  </nav>\n</header>"
      },
      {
        stepNumber: 2,
        title: "Styling with Tailwind or Modern CSS",
        detail: "Apply a cohesive color palette, modern typography, and responsive grid for project cards.",
        codeSnippet: ".project-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}"
      },
      {
        stepNumber: 3,
        title: "Interactivity & Smooth Scrolling",
        detail: "Add smooth scroll navigation and a mobile hamburger menu toggle using JavaScript.",
        codeSnippet: "document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n  anchor.addEventListener('click', function(e) {\n    e.preventDefault();\n    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });\n  });\n});"
      },
      {
        stepNumber: 4,
        title: "Deploy to Production",
        detail: "Push your code to GitHub and enable GitHub Pages or deploy with a single click to Vercel."
      }
    ],
    relatedTutorials: ["html-1", "html-2", "css-1", "css-2"],
    relatedRoadmaps: ["frontend-developer", "fullstack-developer"]
  },
  {
    id: "interactive-calculator",
    title: "Modern Interactive Calculator",
    difficulty: "Beginner",
    category: "Frontend Web",
    description: "Build a sleek mathematical calculator supporting basic arithmetic, decimals, clear, and keyboard input.",
    requiredTech: ["HTML5", "CSS3 Grid", "JavaScript (ES6)"],
    skillsLearned: ["CSS Grid for button layouts", "DOM event listeners", "State management in vanilla JS", "Error handling (division by zero)"],
    objectives: [
      "Create a responsive grid keypad with numbers and operations.",
      "Handle sequential operations (addition, subtraction, multiplication, division).",
      "Support keyboard key-presses for numbers and operators.",
      "Handle edge cases cleanly without crashing."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "HTML Keypad Layout",
        detail: "Use a display area and a grid of button elements for numbers 0-9 and operators (+, -, *, /)."
      },
      {
        stepNumber: 2,
        title: "CSS Grid Styling",
        detail: "Style the calculator with subtle shadows, rounded buttons, and hover transitions."
      },
      {
        stepNumber: 3,
        title: "Evaluation Logic",
        detail: "Track previous value, current input, and chosen operator without relying on dangerous eval().",
        codeSnippet: "function compute(a, b, op) {\n  switch(op) {\n    case '+': return a + b;\n    case '-': return a - b;\n    case '*': return a * b;\n    case '/': return b === 0 ? 'Error' : a / b;\n    default: return b;\n  }\n}"
      }
    ],
    relatedTutorials: ["javascript-1", "css-1"],
    relatedRoadmaps: ["frontend-developer"]
  },
  {
    id: "todo-list-app",
    title: "To-Do List & Task Manager",
    difficulty: "Beginner",
    category: "Frontend Web",
    description: "A productivity task management application with task creation, editing, category filtering, and localStorage persistence.",
    requiredTech: ["HTML5", "CSS3", "JavaScript (ES6)", "Web Storage API"],
    skillsLearned: ["DOM manipulation", "localStorage persistence", "Array filter and map methods", "Form submission and validation"],
    objectives: [
      "Allow adding new tasks with deadlines.",
      "Mark tasks as completed with strikethrough styling.",
      "Filter tasks by All, Active, and Completed.",
      "Persist tasks across browser refreshes using localStorage."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Create Task Data Model",
        detail: "Represent tasks as JavaScript objects: { id, text, completed, createdAt }."
      },
      {
        stepNumber: 2,
        title: "Render Tasks Dynamically",
        detail: "Write a render function that maps over tasks and inserts HTML elements into the DOM."
      },
      {
        stepNumber: 3,
        title: "Sync with LocalStorage",
        detail: "Save task list to localStorage whenever tasks are added, toggled, or deleted.",
        codeSnippet: "function saveTasks(tasks) {\n  localStorage.setItem('cfz_tasks', JSON.stringify(tasks));\n}"
      }
    ],
    relatedTutorials: ["javascript-1", "javascript-2"],
    relatedRoadmaps: ["frontend-developer", "fullstack-developer"]
  },
  {
    id: "quiz-application",
    title: "Interactive Quiz Application",
    difficulty: "Intermediate",
    category: "Frontend / Full-Stack",
    description: "An interactive coding quiz app with timers, score tracking, explanations, and a results summary screen.",
    requiredTech: ["JavaScript / TypeScript", "React or Vanilla JS", "CSS Animations"],
    skillsLearned: ["State machines and question progression", "Timers using setInterval", "Calculating percentages and feedback", "User engagement design"],
    objectives: [
      "Load questions dynamically from a JSON data source.",
      "Provide an animated countdown timer for each question.",
      "Show instant answer feedback with explanation cards.",
      "Display a final score certificate with review option."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Quiz State Machine",
        detail: "Manage currentQuestionIndex, selectedAnswers, score, and timer state."
      },
      {
        stepNumber: 2,
        title: "Timer Countdown",
        detail: "Implement an interval timer that auto-submits when time runs out."
      },
      {
        stepNumber: 3,
        title: "Score Breakdown",
        detail: "Render a completion dashboard showing correct answers and recommendations."
      }
    ],
    relatedTutorials: ["javascript-2", "css-2"],
    relatedRoadmaps: ["frontend-developer"]
  },
  {
    id: "weather-application",
    title: "Real-Time Weather Application",
    difficulty: "Intermediate",
    category: "Web APIs & Frontend",
    description: "Fetch live global weather forecasts by city name or geolocation, displaying humidity, wind speed, and 5-day forecasts.",
    requiredTech: ["JavaScript / React", "OpenWeather / WeatherAPI", "Fetch API & Async/Await"],
    skillsLearned: ["Third-party REST API integration", "Asynchronous data fetching", "Error handling for invalid city names", "Loading skeletons and weather iconography"],
    objectives: [
      "Search weather conditions by city name.",
      "Display temperature, weather conditions, wind, and humidity.",
      "Show a 5-day weather forecast.",
      "Handle geolocation API to automatically detect user's city."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "API Setup & Key Management",
        detail: "Register a free API key and test query endpoints in Postman or fetch."
      },
      {
        stepNumber: 2,
        title: "Async Data Fetching",
        detail: "Write an async function to retrieve weather data and handle network errors gracefully.",
        codeSnippet: "async function fetchWeather(city) {\n  try {\n    const res = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}`);\n    if (!res.ok) throw new Error('City not found');\n    return await res.json();\n  } catch (err) {\n    console.error(err);\n  }\n}"
      },
      {
        stepNumber: 3,
        title: "Visual Cards & Icons",
        detail: "Render weather metrics with responsive cards, dynamic weather icons, and Celsius/Fahrenheit toggle."
      }
    ],
    relatedTutorials: ["javascript-1", "javascript-2"],
    relatedRoadmaps: ["frontend-developer", "fullstack-developer"]
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    difficulty: "Intermediate",
    category: "Backend / Full-Stack",
    description: "A database-driven application to track student profiles, enrollments, courses, attendance, and GPA metrics.",
    requiredTech: ["Python (FastAPI / Flask) or Node.js", "PostgreSQL / SQLite", "REST API", "SQLAlchemy or Prisma"],
    skillsLearned: ["Relational schema design", "CRUD API endpoints", "Database migrations & joins", "Data validation"],
    objectives: [
      "Create relational tables for Students, Courses, and Enrollments.",
      "Implement REST endpoints to add, view, update, and remove students.",
      "Calculate student GPA dynamically from grades.",
      "Filter students by grade, course, or enrollment status."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Relational Database Design",
        detail: "Create normalized tables with primary keys and foreign key constraints.",
        codeSnippet: "CREATE TABLE students (\n  id SERIAL PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(100) UNIQUE NOT NULL,\n  enrolled_date DATE DEFAULT CURRENT_DATE\n);"
      },
      {
        stepNumber: 2,
        title: "RESTful API Implementation",
        detail: "Write GET, POST, PUT, DELETE routes with schema validation and error responses."
      },
      {
        stepNumber: 3,
        title: "Frontend Dashboard Integration",
        detail: "Connect a clean UI table allowing teachers to search, sort, and add student records."
      }
    ],
    relatedTutorials: ["sql-1", "python-1"],
    relatedRoadmaps: ["backend-developer", "fullstack-developer"]
  },
  {
    id: "expense-tracker",
    title: "Full-Featured Expense Tracker",
    difficulty: "Intermediate",
    category: "Full-Stack Web",
    description: "Track personal finances with budget limits, income vs expenses, category breakdowns, and visual spending charts.",
    requiredTech: ["React / TypeScript", "Chart.js / Recharts", "Tailwind CSS", "Node.js or LocalStorage"],
    skillsLearned: ["Financial calculations & rounding", "Data visualization with charts", "Category breakdown aggregations", "Exporting data to CSV"],
    objectives: [
      "Log transactions with date, amount, category, and notes.",
      "Display real-time balance, total income, and total expenses.",
      "Render spending category breakdown via doughnut/pie charts.",
      "Set monthly budget warnings when exceeding limits."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Transaction State & Forms",
        detail: "Create input forms with category dropdowns (Food, Housing, Tech, Entertainment)."
      },
      {
        stepNumber: 2,
        title: "Aggregations & Calculations",
        detail: "Compute running balances and category totals using array reduce methods."
      },
      {
        stepNumber: 3,
        title: "Chart Visualization",
        detail: "Render spending breakdowns using interactive SVG charts with tooltips and export options."
      }
    ],
    relatedTutorials: ["javascript-2", "css-2"],
    relatedRoadmaps: ["frontend-developer", "fullstack-developer", "data-analyst"]
  },
  {
    id: "coding-practice-platform",
    title: "Interactive Coding Practice Application",
    difficulty: "Advanced",
    category: "Full-Stack Web",
    description: "Build an interactive coding platform with a code editor, question filters, hints, solution reveal, and progress analytics.",
    requiredTech: ["React", "TypeScript", "Tailwind CSS", "CodeMirror / Monaco", "LocalStorage & REST API"],
    skillsLearned: ["Code editor integration", "Complex multi-filter state management", "Progress tracking algorithms", "Bookmark and completion persistence"],
    objectives: [
      "Render a rich catalog of programming questions across categories and difficulties.",
      "Provide an interactive code editor with syntax highlighting.",
      "Implement step-by-step hint reveals and solution explanations.",
      "Calculate category-wise completion percentages and streak metrics."
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Question Bank Architecture",
        detail: "Model curated question objects with difficulty, tags, starter code, and test cases."
      },
      {
        stepNumber: 2,
        title: "Filter and Search Engine",
        detail: "Implement instant client-side fuzzy searching and combined multi-criteria filters."
      },
      {
        stepNumber: 3,
        title: "Progress Dashboard",
        detail: "Track completed IDs and bookmarks in persistent storage with analytics graphs."
      }
    ],
    relatedTutorials: ["javascript-1", "javascript-2", "html-2"],
    relatedRoadmaps: ["fullstack-developer", "frontend-developer"]
  }
];
