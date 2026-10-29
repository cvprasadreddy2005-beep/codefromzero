// CODE FROM ZERO - COMPLETE JAVASCRIPT TUTORIALS CURRICULUM
// 16 Comprehensive Modules covering beginner syntax, DOM, Async/Await, Web APIs & 13 projects
import { TutorialLesson } from '../types';

export interface JavaScriptModuleInfo {
  number: number;
  title: string;
  lessonCount: number;
  startLessonId: string;
  description: string;
}

export const JAVASCRIPT_MODULES: JavaScriptModuleInfo[] = [
  { number: 1, title: "JavaScript Introduction", lessonCount: 11, startLessonId: "js-mod1-1", description: "What JS is, history, applications, engines (V8), ECMAScript, and how code runs." },
  { number: 2, title: "Setup and First Program", lessonCount: 10, startLessonId: "js-mod2-1", description: "<script> tags, browser console, running in Node.js, strict mode, and comments." },
  { number: 3, title: "Variables and Data Types", lessonCount: 20, startLessonId: "js-mod3-1", description: "let vs const vs var, scope, primitives, objects, typeof, and equality (=== vs ==)." },
  { number: 4, title: "Operators and Conditions", lessonCount: 14, startLessonId: "js-mod4-1", description: "Arithmetic, comparison, logical, ternary, nullish coalescing (??), and optional chaining (?.)." },
  { number: 5, title: "Loops", lessonCount: 11, startLessonId: "js-mod5-1", description: "for, while, do-while, for...of, for...in, break, continue, and array iterations." },
  { number: 6, title: "Functions", lessonCount: 15, startLessonId: "js-mod6-1", description: "Declarations, arrow functions, closures, callbacks, higher-order functions, and 'this'." },
  { number: 7, title: "Arrays", lessonCount: 24, startLessonId: "js-mod7-1", description: "map, filter, reduce, slice, splice, find, push/pop, destructuring, and spread syntax." },
  { number: 8, title: "Objects", lessonCount: 20, startLessonId: "js-mod8-1", description: "Object literals, properties, methods, destructuring, Object.entries(), prototypes, and classes." },
  { number: 9, title: "Strings and Numbers", lessonCount: 14, startLessonId: "js-mod9-1", description: "Template literals, string methods, Math object, random numbers, Date, and regex." },
  { number: 10, title: "DOM Manipulation", lessonCount: 22, startLessonId: "js-mod10-1", description: "Selecting elements, changing HTML/CSS, classList, creating elements, and event listeners." },
  { number: 11, title: "Events and Forms", lessonCount: 10, startLessonId: "js-mod11-1", description: "Click, keyboard, input, submit, preventDefault(), FormData, and validation." },
  { number: 12, title: "Asynchronous JavaScript", lessonCount: 19, startLessonId: "js-mod12-1", description: "Event loop, callbacks, Promises, async/await, fetch() HTTP requests, and error handling." },
  { number: 13, title: "Modern JavaScript (ES6+)", lessonCount: 18, startLessonId: "js-mod13-1", description: "ES Modules (import/export), classes, inheritance, Maps, Sets, and private fields (#)." },
  { number: 14, title: "Browser Storage & Web APIs", lessonCount: 10, startLessonId: "js-mod14-1", description: "localStorage, sessionStorage, JSON serialization, and Clipboard API." },
  { number: 15, title: "JavaScript Debugging & Testing", lessonCount: 10, startLessonId: "js-mod15-1", description: "DevTools, console.table, breakpoints, error types, and unit testing basics." },
  { number: 16, title: "JavaScript Practical Projects", lessonCount: 13, startLessonId: "js-mod16-1", description: "13 Complete interactive projects: To-do List, Calculator, Weather App, and Quiz." }
];

export const JAVASCRIPT_TUTORIAL_LESSONS: TutorialLesson[] = [
  // Module 1: Introduction
  {
    id: "js-mod1-1",
    title: "What is JavaScript & How Does It Power the Web?",
    section: "Module 1: JavaScript Introduction",
    moduleNumber: 1,
    moduleTitle: "JavaScript Introduction",
    difficulty: "Beginner",
    duration: "7 min",
    keyConcepts: ["JavaScript", "V8 Engine", "ECMAScript", "Client-Side vs Server-Side"],
    meaning: "JavaScript is the programming language that makes websites interactive, dynamic, and responsive to user actions.",
    definition: "JavaScript (JS) is a high-level, single-threaded, garbage-collected, dynamic, prototype-based language conforming to the ECMAScript standard specification.",
    whyUseIt: "While HTML provides structure and CSS provides styling, JavaScript provides behavior: handling clicks, fetching live data, validating forms, and animating UI elements.",
    introduction: "JavaScript is the language of the internet. It is built directly into every modern web browser (Chrome, Safari, Firefox, Edge) and runs on servers via Node.js.",
    simpleExplanation: "If a webpage were a human body: HTML is the skeleton, CSS is the skin and clothing, and JavaScript is the muscles and nervous system that allow it to move and react.",
    syntax: "// In modern JavaScript, you log messages with console.log:\nconsole.log(\"Hello from Code From Zero!\");",
    codeExample: "// Our First Interactive JavaScript Code\nconst platform = \"Code From Zero\";\nlet studentCount = 12500;\nconst isInteractive = true;\n\nconsole.log(`Welcome to ${platform}!`);\nconsole.log(`Active Learners: ${studentCount.toLocaleString()}`);\nconsole.log(`Interactive Features Enabled: ${isInteractive}`);",
    codeExplanation: [
      "const platform = '...': Declares a read-only variable whose reference cannot be reassigned.",
      "let studentCount = ...: Declares a block-scoped variable that can be updated over time.",
      "console.log(...): Built-in browser and Node.js function to print text to the developer console.",
      "`Welcome to ${platform}`: Template literal using backticks (`) and ${} for variable interpolation."
    ],
    expectedOutput: "Welcome to Code From Zero!\nActive Learners: 12,500\nInteractive Features Enabled: true",
    realWorldApplications: [
      "Web applications like Google Docs, Netflix, Spotify, and Twitter rely entirely on JavaScript for instant UI updates.",
      "Backend APIs and microservices running on Node.js, Express, and Next.js."
    ],
    commonMistakes: [
      "Confusing Java and JavaScript. Despite similar names, they are completely different languages with different runtimes, syntax, and origins.",
      "Using var instead of let and const in modern code, leading to variable hoisting bugs."
    ],
    practiceExercises: [
      {
        title: "Hello Profile",
        difficulty: "Beginner",
        task: "Create variables for your name and goal, and log an introductory sentence using template literals.",
        hint: "Use const name = '...'; console.log(`Hello, I am ${name}`)",
        solution: "const name = 'David';\nconst goal = 'Become a Full-Stack Engineer';\nconsole.log(`Hi! I am ${name} and my goal is to ${goal}.`);"
      }
    ],
    quiz: [
      {
        question: "What is the official standardized specification behind JavaScript called?",
        options: ["ECMAScript", "TypeScript", "ActionScript", "WebScript"],
        correctAnswer: 0,
        explanation: "ECMAScript (standardized by Ecma International in ECMA-262) is the official language specification implemented by JavaScript engines."
      }
    ],
    multipleExamples: [
      {
        title: "Basic Example",
        description: "Standard console output using console.log()",
        code: "// Basic console output\nconsole.log(\"Hello, Code From Zero!\");\nconsole.log(10 + 25);",
        output: "Hello, Code From Zero!\n35"
      },
      {
        title: "Practical Example",
        description: "Calculating dynamic values with string concatenation & interpolation",
        code: "const platform = \"Code From Zero\";\nconst lessonsCompleted = 12;\nconst totalLessons = 35;\nconst percent = Math.round((lessonsCompleted / totalLessons) * 100);\n\nconsole.log(`${platform} Student Progress: ${percent}% completed.`);",
        output: "Code From Zero Student Progress: 34% completed."
      },
      {
        title: "Real-World Example",
        description: "Browser environment detection and greeting based on current hour",
        code: "const currentHour = new Date().getHours();\nlet greeting = \"Good day\";\nif (currentHour < 12) greeting = \"Good morning\";\nelse if (currentHour < 18) greeting = \"Good afternoon\";\nelse greeting = \"Good evening\";\n\nconsole.log(`${greeting}! Ready to write clean JavaScript?`);",
        output: "Good morning! Ready to write clean JavaScript?"
      }
    ],
    interviewQuestions: [
      {
        question: "What is the difference between JavaScript and Java?",
        answer: "JavaScript is an interpreted, dynamically-typed scripting language primarily designed for web interactivity and event-driven backends (Node.js). Java is a statically-typed, compiled, class-based object-oriented language that runs on the JVM. They are completely unrelated languages created by different companies.",
        level: "Beginner",
        codeExample: "// JavaScript: Dynamic Typing\nlet x = 10;\nx = 'Code From Zero'; // Valid in JS\n\n// Java: Static Typing\n// int x = 10;\n// x = 'Code'; // Compilation error in Java"
      },
      {
        question: "Is JavaScript single-threaded or multi-threaded?",
        answer: "JavaScript is single-threaded, meaning it has only one call stack and executes one command at a time. Concurrency and non-blocking I/O are achieved via the Event Loop, Web APIs, and microtask/macrotask queues.",
        level: "Intermediate",
        codeExample: "console.log('1. First');\nsetTimeout(() => console.log('2. Timeout Callback'), 0);\nconsole.log('3. Last');\n// Output: 1. First -> 3. Last -> 2. Timeout Callback"
      },
      {
        question: "What is ECMAScript, and what is the relationship between ES6 and JavaScript?",
        answer: "ECMAScript (ECMA-262) is the official language standard and specification. JavaScript is an implementation of ECMAScript. ES6 (ECMAScript 2015) was a landmark release that introduced arrow functions, let/const, classes, modules, promises, and template literals.",
        level: "Beginner"
      },
      {
        question: "What is a JavaScript engine, and how does V8 work?",
        answer: "A JavaScript engine is a software program that executes JavaScript code. Google's V8 (used in Chrome and Node.js) compiles JavaScript source code directly into optimized native machine code using Just-In-Time (JIT) compilation with ignition (interpreter) and TurboFan (compiler).",
        level: "Intermediate"
      },
      {
        question: "What does 'client-side' vs 'server-side' JavaScript mean?",
        answer: "Client-side JavaScript executes inside the user's web browser, directly manipulating DOM elements, listening to mouse/keyboard events, and rendering UI. Server-side JavaScript runs on servers via runtime environments like Node.js or Deno to query databases, read files, and serve REST APIs.",
        level: "Beginner"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Student Welcome Card Generator",
        description: "Given student name 'Priya' and course 'Full-Stack JavaScript', create a formatted multi-line announcement string that displays the student's name in uppercase and welcoming them to Code From Zero.",
        hint: "Use .toUpperCase() and template literals (`)",
        solution: "const student = 'Priya';\nconst course = 'Full-Stack JavaScript';\nconst welcomeCard = `\n===============================\nWELCOME ${student.toUpperCase()}!\nEnrolled in: ${course}\nPlatform: Code From Zero\n===============================`;\nconsole.log(welcomeCard);"
      },
      {
        title: "Challenge 2: Execution Time Benchmark",
        description: "Write code that measures how many milliseconds it takes to run a loop summing numbers from 1 to 1,000,000 using console.time() or performance.now().",
        hint: "Use performance.now() before and after the loop.",
        solution: "const start = performance.now();\nlet sum = 0;\nfor (let i = 1; i <= 1000000; i++) sum += i;\nconst duration = (performance.now() - start).toFixed(2);\nconsole.log(`Sum: ${sum} computed in ${duration}ms`);"
      }
    ],
    summary: "JavaScript brings web pages to life. It runs in all browsers, follows ECMAScript standards, and powers both frontend and backend development.",
    relatedLessons: ["js-mod1-2", "js-mod2-1"]
  },

  // Module 3: Variables and Data Types
  {
    id: "js-mod3-1",
    title: "let, const, var, Primitives & Strict Equality (===)",
    section: "Module 3: Variables and Data Types",
    moduleNumber: 3,
    moduleTitle: "Variables and Data Types",
    difficulty: "Beginner",
    duration: "10 min",
    keyConcepts: ["let vs const", "Primitive Types", "typeof", "Strict Equality ==="],
    meaning: "Variables store data values in memory. Understanding types and scoping rules ensures predictable code behavior.",
    definition: "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null, plus the complex Object type. It supports block-scoped `let` and `const`.",
    whyUseIt: "Using `const` by default and `let` only when values must be reassigned prevents accidental variable overwrites and eliminates scope leaks.",
    introduction: "In this lesson, you will master variable declarations, inspect data types using `typeof`, and learn why modern JavaScript developers always use `===` instead of `==`.",
    simpleExplanation: "`const` is like writing in permanent ink—you cannot erase or reassign it. `let` is like writing in pencil—you can erase and write a new value.",
    syntax: "const appTitle = \"Code From Zero\";  // Cannot reassign\nlet userScore = 0;                  // Can reassign\nuserScore += 10;\n\n// Strict equality check\nif (userScore === 10) { ... }",
    codeExample: "# Comprehensive Variables & Types in JS\nconst courseName = \"Modern JavaScript\";\nlet completedLessons = 14;\nconst totalLessons = 35;\nconst isCertified = false;\nlet userNote; // undefined\nconst emptySlot = null;\n\n// Calculate progress\nconst progressRatio = completedLessons / totalLessons;\nconst progressPct = Math.round(progressRatio * 100);\n\nconsole.log(`Course: ${courseName} (type: ${typeof courseName})`);\nconsole.log(`Progress: ${progressPct}% (type: ${typeof progressPct})`);\nconsole.log(`Certified: ${isCertified} (type: ${typeof isCertified})`);\nconsole.log(`userNote is: ${userNote} (type: ${typeof userNote})`);\nconsole.log(`emptySlot is: ${emptySlot} (type: ${typeof emptySlot})`);\n\n// Strict vs Loose Equality\nconsole.log(\"5 === '5':\", 5 === '5'); // false (checks type and value)\nconsole.log(\"5 == '5':\", 5 == '5');   // true (coerces types - dangerous!)",
    codeExplanation: [
      "const courseName = '...': Read-only string reference.",
      "let userNote: Variables declared without a value automatically default to undefined.",
      "typeof emptySlot: Returns 'object' (a famous historical quirk in JavaScript).",
      "5 === '5': Strict equality operator compares both type (number vs string) and value without type coercion."
    ],
    expectedOutput: "Course: Modern JavaScript (type: string)\nProgress: 40% (type: number)\nCertified: false (type: boolean)\nuserNote is: undefined (type: undefined)\nemptySlot is: null (type: object)\n5 === '5': false\n5 == '5': true",
    realWorldApplications: [
      "Form validation, user role checks, and financial calculations where strict equality prevents subtle coercion bugs."
    ],
    commonMistakes: [
      "Using loose equality ==, which leads to strange coercion bugs like 0 == '' evaluating to true.",
      "Trying to reassign a const variable: const x = 5; x = 6; throws a TypeError."
    ],
    practiceExercises: [
      {
        title: "Type Checker Function",
        difficulty: "Beginner",
        task: "Write a function describeValue(val) that logs the value and its exact typeof string.",
        hint: "console.log(`Value: ${val}, Type: ${typeof val}`)",
        solution: "function describeValue(val) {\n  console.log(`Value: ${val}, Type: ${typeof val}`);\n}\ndescribeValue(42);\ndescribeValue('Hello');\ndescribeValue(true);"
      }
    ],
    quiz: [
      {
        question: "Why should developers prefer '===' over '==' in JavaScript?",
        options: [
          "'===' performs strict comparison without dangerous implicit type coercion",
          "'===' is faster because it only works with numbers",
          "'===' allows comparing HTML elements only",
          "'==' is deprecated and throws a syntax error in modern browsers"
        ],
        correctAnswer: 0,
        explanation: "The strict equality operator (===) checks both value and data type without attempting implicit type coercion, preventing unpredictable bugs."
      }
    ],
    multipleExamples: [
      {
        title: "Basic Example",
        description: "Declaring primitives and verifying types with typeof",
        code: "const pi = 3.14159;\nlet score = 100;\nconst user = 'Priya';\nconst isComplete = false;\n\nconsole.log(typeof pi);       // 'number'\nconsole.log(typeof user);     // 'string'\nconsole.log(typeof isComplete); // 'boolean'",
        output: "number\nstring\nboolean"
      },
      {
        title: "Practical Example",
        description: "Reassignment with let vs immutability with const for objects",
        code: "const cart = { items: ['Laptop'], total: 999 };\n// Properties of const objects CAN be modified:\ncart.total += 50;\ncart.items.push('Mouse');\n\n// But reassigning the whole variable is blocked:\n// cart = {}; // TypeError: Assignment to constant variable.\n\nconsole.log('Cart Items:', cart.items);\nconsole.log('Total Price:', cart.total);",
        output: "Cart Items: [ 'Laptop', 'Mouse' ]\nTotal Price: 1049"
      },
      {
        title: "Real-World Example",
        description: "Authentication token verification and strict role validation",
        code: "function verifyAccess(userRole, requiredRole) {\n  if (userRole === requiredRole) {\n    return 'Access Granted: Admin Control Center';\n  }\n  return 'Access Denied: Insufficient Role Permissions';\n}\n\nconsole.log(verifyAccess('admin', 'admin'));\nconsole.log(verifyAccess('guest', 'admin'));",
        output: "Access Granted: Admin Control Center\nAccess Denied: Insufficient Role Permissions"
      }
    ],
    interviewQuestions: [
      {
        question: "What are the fundamental differences between var, let, and const?",
        answer: "var is function-scoped (or globally scoped) and is hoisted with an initial value of undefined. let and const are block-scoped (confined to { }) and are hoisted into the Temporal Dead Zone (TDZ), throwing a ReferenceError if accessed before declaration. const must be initialized during declaration and cannot be reassigned.",
        level: "Beginner",
        codeExample: "function scopeCheck() {\n  if (true) {\n    var x = 10;\n    let y = 20;\n  }\n  console.log(x); // 10 (leaked from block)\n  // console.log(y); // ReferenceError: y is not defined\n}"
      },
      {
        question: "What is Variable Hoisting and what is the Temporal Dead Zone (TDZ)?",
        answer: "Hoisting is the JavaScript engine's compile-phase behavior of allocating memory for variable and function declarations before code execution. The Temporal Dead Zone is the period between entering the scope containing a let or const variable and its actual line of declaration.",
        level: "Intermediate",
        codeExample: "// console.log(a); // Cannot access 'a' before initialization (TDZ!)\nlet a = 5;\nconsole.log(a); // 5"
      },
      {
        question: "Why does typeof null return 'object'?",
        answer: "This is a historical bug in the initial version of JavaScript (1995). In the original implementation, values were represented with a type tag and a value; the type tag for objects was 0. Since null was represented as the NULL pointer (0x00 in most platforms), its type tag was 0, causing typeof to return 'object'. It cannot be fixed without breaking existing web applications.",
        level: "Intermediate",
        codeExample: "console.log(typeof null); // 'object'\nconsole.log(null === null); // true\nconsole.log(null === undefined); // false"
      },
      {
        question: "Explain the difference between primitive data types and reference types in memory.",
        answer: "Primitives (string, number, boolean, null, undefined, symbol, bigint) are immutable and stored directly in stack memory by value. Reference types (objects, arrays, functions) are stored in heap memory; variables only hold a memory reference (address pointer) on the call stack.",
        level: "Advanced",
        codeExample: "// Value copying (Stack)\nlet a = 10;\nlet b = a;\nb = 20;\nconsole.log(a); // 10\n\n// Reference copying (Heap)\nlet obj1 = { val: 10 };\nlet obj2 = obj1;\nobj2.val = 20;\nconsole.log(obj1.val); // 20 (both point to same memory address)"
      },
      {
        question: "What are Truthy and Falsy values in JavaScript?",
        answer: "In conditional contexts (like if statements), values are automatically coerced to booleans. There are exactly 8 falsy values in JavaScript: false, 0, -0, 0n (BigInt zero), '' (empty string), null, undefined, and NaN. Everything else (including empty arrays [] and empty objects {}) is truthy.",
        level: "Beginner",
        codeExample: "if ([]) console.log('Empty array is TRUTHY!');\nif ('') console.log('This will not run');\nif (0) console.log('0 is FALSY');"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Safe Type Validator",
        description: "Write a function exactType(val) that accurately returns 'null', 'array', 'object', 'number', 'string', 'boolean', 'undefined', or 'function' without the typeof null bug.",
        hint: "Check for null first, then Array.isArray(), then typeof.",
        solution: "function exactType(val) {\n  if (val === null) return 'null';\n  if (Array.isArray(val)) return 'array';\n  return typeof val;\n}\nconsole.log(exactType(null)); // 'null'\nconsole.log(exactType([1, 2])); // 'array'\nconsole.log(exactType({ a: 1 })); // 'object'"
      },
      {
        title: "Challenge 2: Primitive Value Swapper Without Third Variable",
        description: "Given let a = 15, b = 40, swap their values in one line using modern ES6 array destructuring.",
        hint: "Use [a, b] = [b, a];",
        solution: "let a = 15, b = 40;\n[a, b] = [b, a];\nconsole.log(`a: ${a}, b: ${b}`); // a: 40, b: 15"
      }
    ],
    summary: "Always default to 'const' for variables, use 'let' when values must mutate, avoid 'var', and use '===' for strict equality comparisons.",
    relatedLessons: ["js-mod1-1", "js-mod4-1"]
  },

  // Module 7: Arrays
  {
    id: "js-mod7-1",
    title: "Arrays: map(), filter(), reduce() & Modern Spread Syntax",
    section: "Module 7: Arrays",
    moduleNumber: 7,
    moduleTitle: "Arrays",
    difficulty: "Intermediate",
    duration: "12 min",
    keyConcepts: ["Array Methods", "map()", "filter()", "reduce()", "Spread Operator ..."],
    meaning: "An array is an ordered list of values. Functional array methods transform, filter, and summarize data cleanly without mutating original arrays.",
    definition: "JavaScript arrays are high-level list-like objects whose prototype provides methods for traversal and mutation operations (`.map()`, `.filter()`, `.reduce()`, `.find()`).",
    whyUseIt: "Modern JavaScript and UI libraries like React build user interfaces by mapping arrays of data directly into UI components.",
    introduction: "In this lesson, you will master the Holy Trinity of JavaScript array methods: `map()`, `filter()`, and `reduce()`, plus modern destructuring and spread syntax.",
    simpleExplanation: "Think of an assembly line: `filter()` removes defective products; `map()` paints each product blue; `reduce()` packs all the finished products into one shipping crate.",
    syntax: "// Functional Array Pipeline\nconst result = array\n  .filter(item => condition(item))\n  .map(item => transform(item));",
    codeExample: "# High-Performance Array Operations\nconst problems = [\n  { id: 101, title: \"Two Sum\", difficulty: \"Easy\", points: 10 },\n  { id: 102, title: \"Valid Anagram\", difficulty: \"Easy\", points: 15 },\n  { id: 201, title: \"LRU Cache\", difficulty: \"Hard\", points: 50 },\n  { id: 103, title: \"Merge Sort\", difficulty: \"Intermediate\", points: 25 },\n  { id: 202, title: \"Binary Search\", difficulty: \"Easy\", points: 15 }\n];\n\n// 1. Filter: Extract only Easy problems\nconst easyProblems = problems.filter(p => p.difficulty === \"Easy\");\n\n// 2. Map: Extract titles with point badges\nconst problemLabels = easyProblems.map(p => `${p.title} (+${p.points}pts)`);\n\n// 3. Reduce: Calculate total available points for all problems\nconst totalPoints = problems.reduce((acc, curr) => acc + curr.points, 0);\n\n// 4. Spread syntax to clone and add an item immutably\nconst updatedProblems = [\n  ...problems,\n  { id: 203, title: \"Graph BFS\", difficulty: \"Intermediate\", points: 30 }\n];\n\nconsole.log(\"=== Easy Problems ===\");\nconsole.log(problemLabels);\nconsole.log(`Total Points Available: ${totalPoints}`);\nconsole.log(`Original Count: ${problems.length} | Updated Count: ${updatedProblems.length}`);",
    codeExplanation: [
      "problems.filter(p => ...): Creates a new array containing only elements that return true for the predicate.",
      "easyProblems.map(p => ...): Transforms each object into a formatted string.",
      "problems.reduce((acc, curr) => acc + curr.points, 0): Accumulates point values into a single total, starting at 0.",
      "[...problems, { ... }]: Spread syntax creates a new array without mutating the original array."
    ],
    expectedOutput: "=== Easy Problems ===\n[ 'Two Sum (+10pts)', 'Valid Anagram (+15pts)', 'Binary Search (+15pts)' ]\nTotal Points Available: 115\nOriginal Count: 5 | Updated Count: 6",
    realWorldApplications: [
      "Rendering searchable product catalogs in e-commerce stores.",
      "Calculating shopping cart subtotals and applying voucher discounts."
    ],
    commonMistakes: [
      "Using forEach when you want to transform an array: forEach returns undefined; map returns a transformed array.",
      "Mutating the original array with methods like .sort() or .splice() without making a shallow copy first ([...arr].sort())."
    ],
    practiceExercises: [
      {
        title: "Filter and Sum Even Numbers",
        difficulty: "Intermediate",
        task: "Given an array of numbers [3, 8, 12, 5, 20, 7], filter out odd numbers and calculate the sum of the remaining evens.",
        hint: "arr.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0)",
        solution: "const nums = [3, 8, 12, 5, 20, 7];\nconst sumEvens = nums\n  .filter(n => n % 2 === 0)\n  .reduce((sum, n) => sum + n, 0);\nconsole.log('Sum of evens:', sumEvens);"
      }
    ],
    quiz: [
      {
        question: "What does array.map() return?",
        options: [
          "A brand new array containing the results of calling the function on every element",
          "The single accumulated value of the array",
          "A boolean indicating if at least one item matches",
          "undefined"
        ],
        correctAnswer: 0,
        explanation: "Array.prototype.map() creates and returns a new array populated with the results of calling the provided callback function on every element in the calling array."
      }
    ],
    summary: "Use .map() to transform arrays, .filter() to select items, .reduce() to accumulate values, and spread (...) to copy immutably.",
    relatedLessons: ["js-mod3-1", "js-mod8-1", "js-mod10-1"]
  },

  // Module 10: DOM Manipulation
  {
    id: "js-mod10-1",
    title: "DOM Manipulation: querySelector, Events & Dynamic HTML",
    section: "Module 10: DOM Manipulation",
    moduleNumber: 10,
    moduleTitle: "DOM Manipulation",
    difficulty: "Intermediate",
    duration: "11 min",
    keyConcepts: ["Document Object Model (DOM)", "querySelector", "addEventListener", "classList"],
    meaning: "The Document Object Model (DOM) is a tree-like representation of an HTML document that JavaScript can inspect, style, and modify in real-time.",
    definition: "DOM manipulation is using JavaScript APIs (`document.querySelector()`, `element.addEventListener()`, `element.classList.toggle()`) to dynamically read and update the browser document.",
    whyUseIt: "Every interactive button, modal window, dropdown menu, and form submission on the web is powered by DOM manipulation.",
    introduction: "In this lesson, you will learn how JavaScript connects to HTML: finding elements on the page, listening for user clicks, and updating the UI instantly.",
    simpleExplanation: "The DOM is like a remote control for your webpage: you can press buttons to change channels (text), adjust volume (styles), or turn things on and off (modals).",
    syntax: "// Select element and attach click listener\nconst btn = document.querySelector('#action-btn');\nbtn.addEventListener('click', (event) => {\n  // Handle event\n});",
    codeExample: "# DOM Interaction Blueprint (HTML + JavaScript)\n/*\nHTML Template:\n<div id=\"app\">\n  <h1 id=\"title\">Learning Code From Zero</h1>\n  <p id=\"counter\">Lessons Completed: 0</p>\n  <button id=\"increment-btn\">Complete Lesson ✓</button>\n</div>\n*/\n\n// JavaScript DOM Controller\nlet completedCount = 0;\nconst counterEl = document.querySelector(\"#counter\");\nconst incrementBtn = document.querySelector(\"#increment-btn\");\nconst titleEl = document.querySelector(\"#title\");\n\n// Event listener for user click\nincrementBtn.addEventListener(\"click\", () => {\n  completedCount++;\n  counterEl.textContent = `Lessons Completed: ${completedCount}`;\n  \n  if (completedCount >= 5) {\n    titleEl.textContent = \"Mastery Milestone Reached! 🌟\";\n    titleEl.style.color = \"#10b981\"; // Emerald green\n    incrementBtn.disabled = true;\n    incrementBtn.textContent = \"Course Complete!\";\n  }\n});",
    codeExplanation: [
      "document.querySelector('#counter'): Selects the HTML element matching the CSS selector '#counter'.",
      "addEventListener('click', () => { ... }): Registers a callback function that runs every time the user clicks the button.",
      "counterEl.textContent = ...: Safely updates the text content of the element without parsing raw HTML.",
      "incrementBtn.disabled = true: Updates the element's disabled property directly."
    ],
    expectedOutput: "[Browser UI Interaction]\nClick 1: Lessons Completed: 1\nClick 5: Title changes to 'Mastery Milestone Reached! 🌟', green text, button disables.",
    realWorldApplications: [
      "Building responsive navigation menus, modals, theme toggles, and live search filter boxes.",
      "Shopping cart updates where clicking 'Add to Cart' updates the cart badge and subtotal immediately."
    ],
    commonMistakes: [
      "Using element.innerHTML with unsanitized user inputs, which exposes the application to Cross-Site Scripting (XSS) vulnerabilities. Use .textContent instead.",
      "Running DOM queries before the HTML has finished loading (place scripts before </body> or use DOMContentLoaded)."
    ],
    practiceExercises: [
      {
        title: "Dark Mode Class Toggle",
        difficulty: "Intermediate",
        task: "Write JavaScript that selects a button with id 'theme-btn' and toggles the 'dark' class on document.body.",
        hint: "document.body.classList.toggle('dark')",
        solution: "const themeBtn = document.querySelector('#theme-btn');\nthemeBtn.addEventListener('click', () => {\n  document.body.classList.toggle('dark');\n});"
      }
    ],
    quiz: [
      {
        question: "Which method is the modern standard for listening to user interactions on a DOM element?",
        options: [
          "element.addEventListener('click', handler)",
          "element.attachListener('click')",
          "document.onClick(element)",
          "element.bind('click')"
        ],
        correctAnswer: 0,
        explanation: "addEventListener() is the W3C standard method for registering event handlers on DOM nodes."
      }
    ],
    summary: "Use document.querySelector to select elements, .addEventListener to listen for events, and .textContent / .classList to update the interface safely.",
    relatedLessons: ["js-mod7-1", "js-mod12-1"]
  },

  // Module 12: Asynchronous JavaScript
  {
    id: "js-mod12-1",
    title: "Asynchronous JavaScript: Promises, async/await & fetch()",
    section: "Module 12: Asynchronous JavaScript",
    moduleNumber: 12,
    moduleTitle: "Asynchronous JavaScript",
    difficulty: "Advanced",
    duration: "13 min",
    keyConcepts: ["Event Loop", "Promises", "async / await", "fetch() API", "try / catch"],
    meaning: "Asynchronous programming lets your program start a long-running task (like loading data from a server) and continue running without freezing the user interface.",
    definition: "JavaScript is single-threaded; it uses an Event Loop with a Call Stack, Microtask Queue, and Callback Queue to handle non-blocking asynchronous I/O via Promises and `async`/`await`.",
    whyUseIt: "Fetching data from a database or cloud API takes time (100ms - 2000ms). Asynchronous code ensures the UI remains silky smooth while data is being loaded.",
    introduction: "In this lesson, you will master Promises, modern `async`/`await` syntax, error handling with `try...catch`, and how to fetch JSON data from REST APIs using `fetch()`.",
    simpleExplanation: "Ordering food at a restaurant: you order at the counter, get a buzzer (a Promise), and sit with your friends (non-blocking). When your food is ready, the buzzer rings (resolve), and you eat.",
    syntax: "async function loadData() {\n  try {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n  } catch (err) {\n    console.error('Fetch failed:', err);\n  }\n}",
    codeExample: "# Real-World API Fetcher with async/await\nasync function fetchLearnerStats(username) {\n  console.log(`[1] Initiating fetch for user: ${username}...`);\n  \n  try {\n    // Simulate real network fetch with Promise delay\n    const profileData = await new Promise((resolve) => {\n      setTimeout(() => {\n        resolve({\n          user: username,\n          rank: \"Grandmaster Developer\",\n          streakDays: 14,\n          solvedQuestions: 340,\n          suitrateScore: 94.8\n        });\n      }, 500);\n    });\n\n    console.log(`[2] Profile received for ${profileData.user}!`);\n    console.log(`    Rank: ${profileData.rank}`);\n    console.log(`    Streak: ${profileData.streakDays} Days | Solved: ${profileData.solvedQuestions}`);\n    console.log(`    Suitrate: ${profileData.suitrateScore}%`);\n    return profileData;\n  } catch (error) {\n    console.error(\"Failed to load learner profile:\", error.message);\n  } finally {\n    console.log(\"[3] Request completed (cleanup performed).\");\n  }\n}\n\n// Trigger async execution\nfetchLearnerStats(\"alex_codes\");",
    codeExplanation: [
      "async function fetchLearnerStats(...): Declares a function that returns a Promise and permits the 'await' keyword inside.",
      "await new Promise(...): Pauses function execution until the asynchronous Promise resolves without blocking the main browser thread.",
      "try { ... } catch (error) { ... }: Gracefully catches network failures or server errors.",
      "finally: Always executes regardless of whether the fetch succeeded or threw an error."
    ],
    expectedOutput: "[1] Initiating fetch for user: alex_codes...\n[2] Profile received for alex_codes!\n    Rank: Grandmaster Developer\n    Streak: 14 Days | Solved: 340\n    Suitrate: 94.8%\n[3] Request completed (cleanup performed).",
    realWorldApplications: [
      "Loading live weather forecasts, stock prices, or social media feeds via REST and GraphQL APIs.",
      "Submitting user forms and saving profile changes to cloud databases."
    ],
    commonMistakes: [
      "Forgetting to 'await' the response.json() call: response.json() also returns a Promise!",
      "Forgetting to wrap 'await' calls inside a try...catch block, leading to unhandled promise rejections."
    ],
    practiceExercises: [
      {
        title: "Delay Helper Function",
        difficulty: "Intermediate",
        task: "Write an async sleep(ms) helper that waits for the specified number of milliseconds using setTimeout and Promise.",
        hint: "const sleep = ms => new Promise(res => setTimeout(res, ms));",
        solution: "const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));\nasync function demo() {\n  console.log('Starting...');\n  await sleep(1000);\n  console.log('1 second passed!');\n}\ndemo();"
      }
    ],
    quiz: [
      {
        question: "What does an 'async' function always return in JavaScript?",
        options: [
          "A Promise",
          "A Boolean",
          "A generator object",
          "undefined"
        ],
        correctAnswer: 0,
        explanation: "Functions declared with the async keyword always return a Promise. If the function returns a value, the Promise resolves with that value."
      }
    ],
    summary: "Use async/await with try/catch to write asynchronous code that reads sequentially like synchronous code without blocking the event loop.",
    relatedLessons: ["js-mod10-1", "js-mod16-1"]
  },

  // Module 16: JavaScript Projects
  {
    id: "js-mod16-1",
    title: "Project 1: Interactive Task & Coding Milestone Manager",
    section: "Module 16: JavaScript Practical Projects",
    moduleNumber: 16,
    moduleTitle: "JavaScript Practical Projects",
    difficulty: "Intermediate",
    duration: "20 min",
    isProject: true,
    keyConcepts: ["Full Interactive App", "DOM", "localStorage", "Event Handling"],
    meaning: "A complete interactive client-side web application combining DOM manipulation, form events, array transformations, and persistent browser storage.",
    definition: "An interactive task and coding milestone application that allows users to create tasks, filter by completion status, toggle complete, and persist state in `localStorage`.",
    whyUseIt: "Building complete client-side applications demonstrates mastery of DOM manipulation, asynchronous state management, and real-world frontend architecture.",
    introduction: "In this guided project, you will build an interactive Task and Coding Milestone Manager that saves your tasks directly into your browser's local storage.",
    simpleExplanation: "A to-do application is the 'Hello World' of full-scale frontend engineering: it tests creating, reading, updating, and deleting data (CRUD) directly on screen.",
    syntax: "// Run in browser environment with HTML container",
    codeExample: "# Complete JavaScript Milestone Manager\nclass MilestoneManager {\n  constructor(storageKey = \"cfz_milestones\") {\n    this.storageKey = storageKey;\n    this.tasks = this.load();\n  }\n\n  load() {\n    try {\n      const raw = localStorage.getItem(this.storageKey);\n      return raw ? JSON.parse(raw) : [];\n    } catch {\n      return [];\n    }\n  }\n\n  save() {\n    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));\n  }\n\n  addTask(title, priority = \"Normal\") {\n    if (!title.trim()) return null;\n    const task = {\n      id: Date.now(),\n      title: title.trim(),\n      priority,\n      completed: false,\n      createdAt: new Date().toISOString()\n    };\n    this.tasks.push(task);\n    this.save();\n    return task;\n  }\n\n  toggleTask(id) {\n    const task = this.tasks.find(t => t.id === id);\n    if (task) {\n      task.completed = !task.completed;\n      this.save();\n    }\n  }\n\n  getStats() {\n    const total = this.tasks.length;\n    const completed = this.tasks.filter(t => t.completed).length;\n    return {\n      total,\n      completed,\n      percentage: total > 0 ? Math.round((completed / total) * 100) : 0\n    };\n  }\n}\n\n// Simulate application workflow\nconst app = new MilestoneManager(\"demo_tasks\");\napp.addTask(\"Complete Module 1: JavaScript Basics\", \"High\");\napp.addTask(\"Solve 5 Practice Coding Questions\", \"High\");\napp.addTask(\"Build Interactive DOM Project\", \"Normal\");\n\n// Toggle first task complete\nif (app.tasks[0]) app.toggleTask(app.tasks[0].id);\n\nconst stats = app.getStats();\nconsole.log(`Total Milestones: ${stats.total}`);\nconsole.log(`Completed: ${stats.completed} (${stats.percentage}%)`);",
    codeExplanation: [
      "class MilestoneManager: Clean OOP structure separating business logic from UI rendering.",
      "load() and save(): Synchronizes state with browser localStorage using JSON.stringify/JSON.parse.",
      "toggleTask(id): Finds the target task by unique timestamp id and flips its completed boolean.",
      "getStats(): Computes completion statistics using array .filter()."
    ],
    expectedOutput: "Total Milestones: 3\nCompleted: 1 (33%)",
    realWorldApplications: [
      "Productivity applications like Trello, Todoist, and Notion.",
      "E-commerce persistent shopping carts and draft post editors."
    ],
    commonMistakes: [
      "Trying to store plain objects into localStorage without JSON.stringify(obj), which converts the object into the useless string '[object Object]'."
    ],
    practiceExercises: [
      {
        title: "Filter by Priority",
        difficulty: "Intermediate",
        task: "Add a method getTasksByPriority(priority) to the MilestoneManager class that returns matching tasks.",
        hint: "return this.tasks.filter(t => t.priority === priority);",
        solution: "getTasksByPriority(priority) {\n  return this.tasks.filter(t => t.priority === priority);\n}"
      }
    ],
    quiz: [
      {
        question: "Why must objects be passed through JSON.stringify before storing in localStorage?",
        options: [
          "localStorage only stores UTF-16 string key-value pairs",
          "JSON.stringify encrypts passwords automatically",
          "localStorage cannot store more than 10 characters",
          "It compiles JavaScript into bytecode"
        ],
        correctAnswer: 0,
        explanation: "The Web Storage API (localStorage and sessionStorage) only stores strings. Non-string data must be serialized to JSON text before storage."
      }
    ],
    summary: "This portfolio project demonstrates modular class design, local storage persistence, state transformations, and event-driven architecture.",
    relatedLessons: ["js-mod10-1", "js-mod12-1"]
  }
];
