import { Tutorial } from '../types';
import { HTML_TUTORIAL_LESSONS, HTML_MODULES } from './htmlTutorialsData';
import { JAVA_TUTORIAL_LESSONS, JAVA_MODULES } from './javaTutorialsData';
import { PYTHON_TUTORIAL_LESSONS, PYTHON_MODULES } from './pythonTutorialsData';
import { JAVASCRIPT_TUTORIAL_LESSONS, JAVASCRIPT_MODULES } from './javascriptTutorialsData';
import { SQL_TUTORIAL_LESSONS, SQL_MODULES } from './sqlTutorialsData';
import { C_TUTORIAL_LESSONS, C_MODULES } from './cTutorialsData';
import { CPP_TUTORIAL_LESSONS, CPP_MODULES } from './cppTutorialsData';
import { GIT_TUTORIAL_LESSONS, GIT_MODULES } from './gitTutorialsData';
import {
  C_INTERVIEW_CATEGORIES,
  C_PORTFOLIO_PROJECTS,
  C_ROADMAP_STAGES,
  C_OUTPUT_PREDICTIONS,
  C_DEBUGGING_CHALLENGES,
  C_PLAYGROUND_TEMPLATES
} from './cInterviewAndProjects';

export {
  HTML_MODULES,
  JAVA_MODULES,
  PYTHON_MODULES,
  JAVASCRIPT_MODULES,
  SQL_MODULES,
  C_MODULES,
  CPP_MODULES,
  GIT_MODULES,
  C_INTERVIEW_CATEGORIES,
  C_PORTFOLIO_PROJECTS,
  C_ROADMAP_STAGES,
  C_OUTPUT_PREDICTIONS,
  C_DEBUGGING_CHALLENGES,
  C_PLAYGROUND_TEMPLATES
};

export const TUTORIALS_DATA: Tutorial[] = [
  // 1. PYTHON TUTORIALS (25 Modules, Beginner to Advanced & 30 Projects)
  {
    id: "python",
    name: "Python",
    language: "Python",
    tagline: "The world's most versatile, readable language for scripting, web backend, and AI. 25 comprehensive modules, syntax breakdown, runnable code, and 30 portfolio projects.",
    lessons: PYTHON_TUTORIAL_LESSONS
  },

  // 2. JAVASCRIPT TUTORIALS (16 Modules, DOM, Async/Await, Web APIs & 13 Projects)
  {
    id: "javascript",
    name: "JavaScript",
    language: "JavaScript",
    tagline: "The core language of the interactive web and Node.js. 16 modules covering modern ES6+, DOM manipulation, async/await, API integration, and 13 projects.",
    lessons: JAVASCRIPT_TUTORIAL_LESSONS
  },

  // 3. SQL & DATABASES TUTORIALS (15 Modules, RDBMS, Queries, Joins & 10 Projects)
  {
    id: "sql",
    name: "SQL & Databases",
    language: "SQL",
    tagline: "Master relational databases, schema design, CRUD queries, analytical joins, normalization, transactions, and indexing across 15 structured modules.",
    lessons: SQL_TUTORIAL_LESSONS
  },

  // 4. C PROGRAMMING TUTORIALS (45 Modules, Beginner to Advanced, 10 Real Projects, Interview Prep & 60-Day Roadmap)
  {
    id: "c",
    name: "C Programming",
    language: "C",
    tagline: "The complete C masterclass from beginner to advanced. 45 syllabus modules, direct memory control, pointer arithmetic, 10 complete real-world projects, interview prep, 60-day roadmap, output prediction, and interactive compilation.",
    lessons: C_TUTORIAL_LESSONS
  },

  // 5. C++ PROGRAMMING TUTORIALS (34 Modules, Modern C++17/20, OOP, STL, 20 Projects & Interview Prep)
  {
    id: "cpp",
    name: "C++ Programming",
    language: "C++",
    tagline: "Code From Zero — Learn C++ From Beginner to Advanced. Your C++ Programming Journey Starts Here. 34 comprehensive syllabus modules, modern C++17/C++20, 20 portfolio projects, interview question bank, algorithm practice, and interactive sandbox.",
    lessons: CPP_TUTORIAL_LESSONS
  },

  // 6. GIT & GITHUB TUTORIALS (12 Modules, Branching, PRs, Security & 10 Projects)
  {
    id: "git",
    name: "Git & GitHub",
    language: "Git",
    tagline: "Industry-standard version control and cloud collaboration. 12 modules covering terminal commands, branching, merge conflict resolution, PRs, and secret security.",
    lessons: GIT_TUTORIAL_LESSONS
  },

  // 7. JAVA MASTERCLASS TUTORIAL (32 Modules, 664 Lessons + 20 Projects)
  {
    id: "java",
    name: "Java",
    language: "Java",
    tagline: "The complete, beginner-to-advanced Java masterclass with 32 modules, 664 in-depth lessons, runnable programs, quizzes, OOP, DSA, and 20 real-world projects.",
    lessons: JAVA_TUTORIAL_LESSONS
  },

  // 8. HTML5 MASTERCLASS TUTORIAL (20 Modules, 356 Lessons + 22 Projects)
  {
    id: "html",
    name: "HTML5",
    language: "HTML",
    tagline: "The complete, beginner-to-advanced HTML masterclass with 20 modules, 356 interactive lessons, quizzes, playgrounds, and 22 guided real-world projects.",
    lessons: HTML_TUTORIAL_LESSONS
  }
];

// Helper mapping for modules by tutorial ID
export const TUTORIAL_MODULES_MAP: Record<string, any[]> = {
  python: PYTHON_MODULES,
  javascript: JAVASCRIPT_MODULES,
  sql: SQL_MODULES,
  'sql-databases': SQL_MODULES,
  c: C_MODULES,
  cpp: CPP_MODULES,
  'c-cpp': CPP_MODULES,
  git: GIT_MODULES,
  'git-github': GIT_MODULES,
  java: JAVA_MODULES,
  html: HTML_MODULES
};
