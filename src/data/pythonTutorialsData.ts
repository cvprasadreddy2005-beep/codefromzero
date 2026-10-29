// CODE FROM ZERO - COMPLETE PYTHON TUTORIALS CURRICULUM
// 25 Comprehensive Modules, 30 Projects, 24 Interview Categories, and Interactive Runner
import { TutorialLesson } from '../types';
import { PYTHON_MODULES_6_TO_13_LESSONS } from './pythonLessonsModules6to13';
import { PYTHON_MODULES_15_TO_24_LESSONS } from './pythonLessonsModules15to24';
import { EXTENDED_PYTHON_INTERVIEW_PREP, EXTENDED_PYTHON_PORTFOLIO_PROJECTS } from './pythonExtendedInterviewAndProjects';

export interface PythonModuleInfo {
  number: number;
  title: string;
  lessonCount: number;
  startLessonId: string;
  description: string;
}

export interface PythonInterviewCategory {
  id: string;
  title: string;
  description: string;
  questions: {
    question: string;
    answer: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    codeExample?: string;
  }[];
}

export interface PythonProjectItem {
  id: string;
  number: number;
  title: string;
  tier: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  objective: string;
  requiredKnowledge: string[];
  features: string[];
  code: string;
  expectedOutput: string;
  testingInstructions: string;
  commonErrorsAndFixes: string;
  possibleImprovements: string;
}

export interface PythonRoadmapStage {
  stage: number;
  title: string;
  level: string;
  description: string;
  topics: string[];
  careerRelevance?: string;
}

export interface PythonPlaygroundTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  code: string;
  expectedOutput: string;
}

export const PYTHON_MODULES: PythonModuleInfo[] = [
  { number: 1, title: "Introduction to Python", lessonCount: 16, startLessonId: "py-mod1-1", description: "What Python is, history, features, advantages, Windows/macOS/Linux setup, VS Code, interpreter, and first program." },
  { number: 2, title: "Variables and Data Types", lessonCount: 17, startLessonId: "py-mod2-1", description: "int, float, complex, bool, str, list, tuple, set, dict, None, type casting, mutability, and dynamic typing." },
  { number: 3, title: "Input, Output, and Operators", lessonCount: 13, startLessonId: "py-mod3-1", description: "print(), input(), f-strings, arithmetic, comparison, logical, bitwise, membership, and identity operators." },
  { number: 4, title: "Conditional Statements", lessonCount: 9, startLessonId: "py-mod4-1", description: "if, if-else, if-elif-else, nested if, conditional expressions, truthy/falsy, and match-case decision making." },
  { number: 5, title: "Loops", lessonCount: 16, startLessonId: "py-mod5-1", description: "while loop, for loop, range(), nested loops, break, continue, pass, else in loops, and pattern printing." },
  { number: 6, title: "Strings", lessonCount: 24, startLessonId: "py-mod6-1", description: "Indexing, slicing, immutability, concatenation, string methods (strip, split, join, replace), and palindrome tests." },
  { number: 7, title: "Lists", lessonCount: 26, startLessonId: "py-mod7-1", description: "Indexing, slicing, append, insert, pop, remove, sort, shallow vs deep copy, comprehensions, and unpacking." },
  { number: 8, title: "Tuples, Sets, and Dictionaries", lessonCount: 30, startLessonId: "py-mod8-1", description: "Immutable tuples, unique hash sets, dictionary key-value mapping, comprehensions, and frequency counting." },
  { number: 9, title: "Functions", lessonCount: 24, startLessonId: "py-mod9-1", description: "def, *args, **kwargs, default parameters, return, global/nonlocal scope, lambda, recursion, and docstrings." },
  { number: 10, title: "Comprehensions and Functional Programming", lessonCount: 12, startLessonId: "py-mod10-1", description: "List/dict/set comprehensions, generator expressions, map(), filter(), reduce(), zip(), and enumerate()." },
  { number: 11, title: "Modules, Packages, and Libraries", lessonCount: 22, startLessonId: "py-mod11-1", description: "Custom modules, import statements, __name__ == '__main__', math, random, datetime, pip, and virtual environments." },
  { number: 12, title: "Exception Handling", lessonCount: 13, startLessonId: "py-mod12-1", description: "try, except, else, finally, raise, custom exception classes, assertions, and defensive code quality." },
  { number: 13, title: "File Handling", lessonCount: 14, startLessonId: "py-mod13-1", description: "open(), with context managers, modes r/w/a/x, seek(), CSV files, JSON files, and directory management." },
  { number: 14, title: "Object-Oriented Programming (OOP)", lessonCount: 28, startLessonId: "py-mod14-1", description: "Classes, objects, __init__, self, inheritance, polymorphism, encapsulation, abstraction, and dunder methods." },
  { number: 15, title: "Advanced Python", lessonCount: 21, startLessonId: "py-mod15-1", description: "Iterators, generators (yield), decorators, context managers, regex (re), GIL, type hints, and structural matching." },
  { number: 16, title: "Databases and SQL with Python", lessonCount: 15, startLessonId: "py-mod16-1", description: "SQLite, PostgreSQL, MySQL, CRUD queries, parameterized SQL, transactions, and injection security." },
  { number: 17, title: "APIs and Web Requests", lessonCount: 15, startLessonId: "py-mod17-1", description: "REST APIs, HTTP methods, JSON serialization, requests library, FastAPI, Flask, and error handling." },
  { number: 18, title: "Multithreading, Multiprocessing, and Async", lessonCount: 10, startLessonId: "py-mod18-1", description: "Concurrency vs parallelism, threading module, multiprocessing module, asyncio, event loops, and async/await." },
  { number: 19, title: "Testing, Debugging, and Code Quality", lessonCount: 15, startLessonId: "py-mod19-1", description: "Tracebacks, VS Code debugger, logging, unittest, pytest, assertions, code formatting, and PEP 8 standards." },
  { number: 20, title: "Data Structures and Algorithms with Python", lessonCount: 27, startLessonId: "py-mod20-1", description: "Big O notation, stacks, queues, linked lists, hash maps, binary search, sorting algorithms, trees, and graphs." },
  { number: 21, title: "Python for Data Analysis", lessonCount: 20, startLessonId: "py-mod21-1", description: "NumPy ndarrays, Pandas Series & DataFrames, data cleaning, filtering, grouping, and Matplotlib charts." },
  { number: 22, title: "Python for AI and Machine Learning", lessonCount: 15, startLessonId: "py-mod22-1", description: "Scikit-learn, training/testing splits, supervised vs unsupervised learning, regression, classification, and neural nets." },
  { number: 23, title: "Python Web Development", lessonCount: 14, startLessonId: "py-mod23-1", description: "FastAPI endpoints, Flask routing, request/response cycle, Jinja templates, DB integration, and deployment." },
  { number: 24, title: "Automation and Scripting", lessonCount: 13, startLessonId: "py-mod24-1", description: "Automating file operations, Excel/CSV manipulation, Beautiful Soup web scraping, scheduling, and CLI flags." },
  { number: 25, title: "Python Practical Projects (30 Projects)", lessonCount: 30, startLessonId: "py-mod25-1", description: "30 guided beginner to advanced portfolio projects from Calculator and Quiz to AI Q&A Application." }
];

export const PYTHON_TUTORIAL_LESSONS: TutorialLesson[] = [
  // MODULE 1: Introduction to Python
  {
    id: "py-mod1-1",
    title: "1. What Is Python? Features, History & Your First Program",
    section: "Module 1: Introduction to Python",
    moduleNumber: 1,
    moduleTitle: "Introduction to Python",
    difficulty: "Beginner",
    duration: "8 min",
    keyConcepts: ["Python", "Interpreted Language", "Guido van Rossum", "print()", "Syntax"],
    meaning: "Python is an easy-to-learn, human-readable programming language that allows you to tell a computer what to do using clean, English-like commands.",
    definition: "Python is an interpreted, dynamically-typed, high-level, general-purpose programming language created by Guido van Rossum in 1991, emphasizing developer productivity and readable code.",
    whyUseIt: "Beginners choose Python because its syntax avoids confusing brackets and semicolons. Tech giants (Google, Netflix, NASA, Spotify) use it for web applications, automation, data science, and artificial intelligence.",
    introduction: "Welcome to Code From Zero's Python Tutorials! You don't need any prior background in math or computer science. Python allows you to write real, useful software on your very first day.",
    simpleExplanation: "Think of Python as an English interpreter for your computer. You write simple instructions in plain English, and the Python interpreter translates them into CPU machine language instantly.",
    syntax: "# Print output to the screen:\nprint(\"Hello, Code From Zero!\")",
    codeExample: "# Lesson 1: Our First Python Program\nuser_name = \"Alex\"\nplatform = \"Code From Zero\"\nquestions_available = 2480\n\nprint(f\"Hello, {user_name}!\")\nprint(f\"Welcome to {platform}.\")\nprint(f\"Ready to solve {questions_available} practice problems!\")",
    codeExplanation: [
      "user_name = \"Alex\": Creates a variable named 'user_name' holding the string 'Alex'.",
      "platform = \"Code From Zero\": Stores the educational website name in a variable.",
      "questions_available = 2480: Stores an integer representing practice questions.",
      "print(f\"...\"): Formatted string (f-string) that inserts variable values inside curly braces { } directly into output."
    ],
    expectedOutput: "Hello, Alex!\nWelcome to Code From Zero.\nReady to solve 2480 practice problems!",
    multipleExamples: [
      {
        title: "Basic Example",
        description: "Direct string output and simple arithmetic",
        code: "print(\"Python is fun and easy!\")\nprint(10 + 25 * 2)",
        output: "Python is fun and easy!\n60"
      },
      {
        title: "Practical Example",
        description: "Student study score summary using f-strings",
        code: "student = \"Priya\"\ncompleted = 45\ntotal = 100\npct = (completed / total) * 100\nprint(f\"Student: {student}\")\nprint(f\"Progress: {completed}/{total} ({pct:.0f}%)\")",
        output: "Student: Priya\nProgress: 45/100 (45%)"
      },
      {
        title: "Real-World Example",
        description: "Simulating a Cloud API status response",
        code: "api_status = {\"service\": \"Code From Zero Auth\", \"code\": 200, \"status\": \"ACTIVE\"}\nprint(f\"[{api_status['code']}] {api_status['service']}: {api_status['status']}\")",
        output: "[200] Code From Zero Auth: ACTIVE"
      }
    ],
    commonMistakes: [
      "Writing 'Print()' with a capital 'P'. Python is strictly case-sensitive; built-in functions must be lowercase: print().",
      "Forgetting quotation marks around text strings, causing a NameError.",
      "Mixing tabs and spaces for indentation."
    ],
    interviewQuestions: [
      {
        question: "1. What are the key features of Python?",
        answer: "Python is: (1) Easy to read and learn with English-like syntax, (2) Interpreted (no manual compilation step required), (3) Dynamically-typed, (4) Cross-platform (runs on Windows, macOS, Linux), (5) Batteries-included with a rich standard library, and (6) Multi-paradigm (supports procedural, OOP, and functional code).",
        level: "Beginner",
        codeExample: "# Python code is concise and expressive\nprint('Python is multi-paradigm')"
      },
      {
        question: "2. What is the difference between interpreted and compiled languages?",
        answer: "Compiled languages (like C/C++) convert entire source code into native machine code (.exe) before execution. Interpreted languages (like Python) translate and execute source code line-by-line via a virtual machine (PVM) and intermediate bytecode (.pyc), enabling instant iteration and platform independence.",
        level: "Beginner"
      },
      {
        question: "3. What is PEP 8 in Python?",
        answer: "PEP 8 is the official Python Enhancement Proposal that defines style conventions for writing readable Python code (e.g., 4 spaces per indentation level, snake_case for functions/variables, PascalCase for classes, max line length of 79 characters).",
        level: "Beginner"
      },
      {
        question: "4. What is the difference between Python 2 and Python 3?",
        answer: "Python 3 (released in 2008) is the modern, unicode-by-default version of Python. Key changes include print being a function print() rather than a statement, integer division returning a float (5/2 = 2.5), and ranges returning iterators instead of lists. Python 2 reached end-of-life in 2020.",
        level: "Intermediate"
      },
      {
        question: "5. How does Python manage memory?",
        answer: "Python uses a private heap containing all objects and data structures. The Python Memory Manager handles allocation, while a combination of reference counting and a cyclic Garbage Collector (GC) automatically frees memory when an object's reference count drops to zero.",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Create a Personalized Introduction",
        difficulty: "Beginner",
        task: "Create two variables: your name and your desired software engineering role. Print a sentence combining them.",
        hint: "Use f'My name is {name} and I am learning to be a {role}.'",
        solution: "name = \"Ravi\"\nrole = \"Python Full-Stack Developer\"\nprint(f\"My name is {name} and I am learning to be a {role}.\")"
      },
      {
        title: "Exercise 2: Simple Area Calculation",
        difficulty: "Beginner",
        task: "Define length = 12 and width = 8. Calculate and print the rectangle's area.",
        hint: "area = length * width",
        solution: "length = 12\nwidth = 8\narea = length * width\nprint(f\"Rectangle Area: {area} sq units\")"
      },
      {
        title: "Exercise 3: Age in Days",
        difficulty: "Beginner",
        task: "Store an age in years (e.g. 21). Approximate the number of days lived (age * 365) and print the result.",
        hint: "days = age * 365",
        solution: "age = 21\ndays = age * 365\nprint(f\"{age} years is approximately {days:,} days!\")"
      },
      {
        title: "Exercise 4: Multi-line Welcome Card",
        difficulty: "Intermediate",
        task: "Use a triple-quoted string to output a formatted 3-line terminal welcome banner.",
        hint: "Use ''' or \"\"\"",
        solution: "banner = \"\"\"\n============================\n  WELCOME TO CODE FROM ZERO\n============================\"\"\"\nprint(banner)"
      },
      {
        title: "Exercise 5: Variable Swapping",
        difficulty: "Intermediate",
        task: "Create two variables a = 5 and b = 10. Swap their values in Python using a single line without a temporary variable.",
        hint: "Use tuple unpacking: a, b = b, a",
        solution: "a = 5\nb = 10\na, b = b, a\nprint(f\"a = {a}, b = {b}\")"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Currency Converter Simulator",
        description: "Given amount_usd = 75 and exchange_rate_inr = 86.5, calculate and print the total in INR formatted to 2 decimal places.",
        hint: "total = amount_usd * exchange_rate_inr",
        solution: "amount_usd = 75\nexchange_rate = 86.50\ntotal_inr = amount_usd * exchange_rate\nprint(f\"${amount_usd} USD = ₹{total_inr:.2f} INR\")"
      },
      {
        title: "Challenge 2: Coding Streak Message",
        description: "Format a message showing user study streak days, questions completed, and remaining questions to reach the 300 milestone.",
        hint: "remaining = 300 - completed",
        solution: "user = \"Ananya\"\nstreak_days = 5\ncompleted = 68\nremaining = 300 - completed\nprint(f\"Awesome job, {user}! {streak_days} days active streak. {remaining} more problems to hit the 300 club!\")"
      }
    ],
    quiz: [
      {
        question: "Which keyword or function is used to output text to the console in Python 3?",
        options: ["echo()", "console.log()", "print()", "System.out.println()"],
        correctAnswer: 2,
        explanation: "print() is the built-in standard output function in Python 3."
      },
      {
        question: "What character begins a single-line comment in Python?",
        options: ["//", "#", "/*", "--"],
        correctAnswer: 1,
        explanation: "In Python, comments start with the hash symbol (#) and extend to the end of the line."
      }
    ],
    summary: "Python is an accessible, powerful interpreted language created by Guido van Rossum. It uses print() for output, variables without explicit type declarations, and clean indentation for structure.",
    relatedLessons: ["py-mod2-1", "py-mod3-1"]
  },

  // MODULE 2: Variables and Data Types
  {
    id: "py-mod2-1",
    title: "2. Variables, Dynamic Typing & All Python Data Types",
    section: "Module 2: Variables and Data Types",
    moduleNumber: 2,
    moduleTitle: "Variables and Data Types",
    difficulty: "Beginner",
    duration: "10 min",
    keyConcepts: ["Variables", "int", "float", "str", "bool", "list", "dict", "type()", "Mutability"],
    meaning: "A variable is a labeled memory container that holds a value. A data type tells Python what kind of value it is (numbers, words, true/false, or collections).",
    definition: "Python is dynamically and strongly typed. You do not declare variable types; the interpreter infers the type at runtime based on the assigned object.",
    whyUseIt: "Variables allow programs to store, retrieve, modify, and calculate information dynamically as users interact with the application.",
    introduction: "In this lesson, you will master all built-in Python data types: integers, floats, booleans, strings, lists, tuples, sets, dictionaries, and None.",
    simpleExplanation: "Think of a variable as a labeled storage box in your room. The label on the box is the variable name, and the item inside is the value. You can change what's inside anytime.",
    syntax: "# Variable declaration and type checking:\nx = 42                 # Integer\nprice = 99.95          # Float\nname = \"CodeFromZero\"  # String\nis_active = True       # Boolean\nprint(type(x))         # Output: <class 'int'>",
    codeExample: "# Demonstration of Python's Core Data Types\nage = 22                         # int\ngpa = 3.85                       # float\nstudent_name = \"Pooja Reddy\"     # str\nis_enrolled = True               # bool\nskills = [\"Python\", \"SQL\", \"C\"] # list (mutable)\ngrades = (95, 88, 92)            # tuple (immutable)\nunique_ids = {101, 102, 103}     # set (unique items)\nprofile = {\"city\": \"Kadapa\", \"pin\": \"516003\"} # dict (key-value)\nmanager = None                   # NoneType\n\nprint(f\"Student: {student_name} | Type: {type(student_name).__name__}\")\nprint(f\"GPA: {gpa} | Type: {type(gpa).__name__}\")\nprint(f\"Skills: {skills} | Count: {len(skills)}\")\nprint(f\"Profile Address: {profile['city']}-{profile['pin']}\")",
    codeExplanation: [
      "age = 22: Assigns an integer object to 'age'.",
      "student_name = '...': Assigns a string literal to 'student_name'.",
      "skills = [...]: Creates a list, an ordered and mutable collection.",
      "profile = {...}: Creates a dictionary mapping keys to values.",
      "type(x).__name__: Returns the human-readable name of the object's class."
    ],
    expectedOutput: "Student: Pooja Reddy | Type: str\nGPA: 3.85 | Type: float\nSkills: ['Python', 'SQL', 'C'] | Count: 3\nProfile Address: Kadapa-516003",
    multipleExamples: [
      {
        title: "Basic Type Casting",
        description: "Explicit conversion between strings, ints, and floats",
        code: "str_num = \"450\"\nint_val = int(str_num)\nfloat_val = float(str_num)\nprint(int_val + 50)\nprint(float_val)",
        output: "500\n450.0"
      },
      {
        title: "Practical Mutability",
        description: "Demonstrating how lists can be changed in-place while strings cannot",
        code: "my_list = [10, 20, 30]\nmy_list[0] = 99  # Mutable: item changed in place\nprint(\"Modified List:\", my_list)\n\ntext = \"Hello\"\n# text[0] = 'J' -> Raises TypeError (strings are immutable!)\nnew_text = \"J\" + text[1:]\nprint(\"New String:\", new_text)",
        output: "Modified List: [99, 20, 30]\nNew String: Jello"
      },
      {
        title: "Real-World User Profile",
        description: "Representing an e-commerce shopping cart with multiple types",
        code: "cart = {\n    \"user\": \"cvprasad\",\n    \"items\": [\"Python Guide\", \"Mechanical Keyboard\"],\n    \"total\": 129.50,\n    \"is_delivered\": False\n}\nprint(f\"Order for {cart['user']}: {len(cart['items'])} items, Total: ${cart['total']:.2f}\")",
        output: "Order for cvprasad: 2 items, Total: $129.50"
      }
    ],
    commonMistakes: [
      "Attempting to concatenate a string and a number without type casting: print('Age: ' + 25) raises a TypeError. Use an f-string: print(f'Age: {25}').",
      "Using Python reserved keywords (such as class, def, return, for) as variable names.",
      "Assuming tuples are mutable like lists."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between mutable and immutable data types in Python?",
        answer: "Mutable objects can have their content modified in-place after creation without changing their memory address (e.g., list, dict, set). Immutable objects cannot be changed once created (e.g., int, float, str, tuple, frozenset). Any operation modifying an immutable object creates a brand-new object in memory.",
        level: "Beginner",
        codeExample: "# List is mutable\na = [1, 2]\na.append(3) # Same memory id\n# String is immutable\ns = 'hi'\ns = s + '!' # Creates new string object"
      },
      {
        question: "2. Is Python statically typed or dynamically typed?",
        answer: "Python is dynamically typed: variable types are bound to values (objects) at runtime, not to variable names at compile time. It is also strongly typed: Python does not perform unexpected automatic type coercion (e.g., '5' + 5 causes a TypeError).",
        level: "Beginner"
      },
      {
        question: "3. What is the difference between is and == in Python?",
        answer: "'==' checks for equality of value (whether two objects have the same content). 'is' checks for identity (whether both variables point to the exact same memory location in RAM).",
        level: "Intermediate",
        codeExample: "x = [1, 2, 3]\ny = [1, 2, 3]\nprint(x == y) # True (same values)\nprint(x is y) # False (distinct memory allocations)"
      },
      {
        question: "4. What does the 'None' keyword represent?",
        answer: "'None' is a singleton object of type NoneType in Python that represents the absence of a value, similar to null in other programming languages. Functions without an explicit return statement return None by default.",
        level: "Beginner"
      },
      {
        question: "5. How does Python's small integer caching work?",
        answer: "To optimize memory and speed, CPython pre-allocates an internal array of integer objects for numbers between -5 and 256. Any integer created within this range references the exact same singleton object in memory.",
        level: "Advanced",
        codeExample: "a = 256\nb = 256\nprint(a is b) # True due to integer caching"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Type Detective",
        difficulty: "Beginner",
        task: "Create 4 variables with different data types: an integer, a float, a string, and a boolean. Print each variable alongside its type.",
        hint: "Use print(val, type(val))",
        solution: "a = 100\nb = 3.14159\nc = \"Code From Zero\"\nd = True\nfor item in [a, b, c, d]:\n    print(f\"{item} -> {type(item).__name__}\")"
      },
      {
        title: "Exercise 2: Type Conversion Math",
        difficulty: "Beginner",
        task: "Given price_str = '49.99' and discount_int = 10, calculate the discounted price as a float.",
        hint: "float(price_str) - discount_int",
        solution: "price_str = '49.99'\ndiscount_int = 10\nfinal_price = float(price_str) - discount_int\nprint(f\"Final Price: ${final_price:.2f}\")"
      },
      {
        title: "Exercise 3: String to List of Characters",
        difficulty: "Beginner",
        task: "Convert the string 'PYTHON' into a list of individual letters and print the list.",
        hint: "list('PYTHON')",
        solution: "letters = list('PYTHON')\nprint(\"Character list:\", letters)"
      },
      {
        title: "Exercise 4: Dictionary Data Card",
        difficulty: "Intermediate",
        task: "Create a dictionary for a programming book with keys: 'title', 'pages', 'rating', and 'topics' (a list). Print the second topic.",
        hint: "book['topics'][1]",
        solution: "book = {\n    'title': 'Python From Zero',\n    'pages': 420,\n    'rating': 4.9,\n    'topics': ['Syntax', 'OOP', 'Async']\n}\nprint(f\"Second topic: {book['topics'][1]}\")"
      },
      {
        title: "Exercise 5: Tuple Immutability Verification",
        difficulty: "Intermediate",
        task: "Create a tuple coords = (12.9716, 77.5946). Write a try-except block that tries to change coords[0] and catches the TypeError gracefully.",
        hint: "try: coords[0] = 0 except TypeError: print('Tuples cannot be changed!')",
        solution: "coords = (12.9716, 77.5946)\ntry:\n    coords[0] = 0.0\nexcept TypeError as e:\n    print(f\"Caught expected error: {e}\")"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Clean Data Type Formatter",
        description: "Given raw_input = '  $1,250.75  ', strip the whitespace and dollar sign, remove the comma, convert it to a float, and calculate a 15% bonus.",
        hint: "Use .strip(), .replace('$', '').replace(',', '') and float()",
        solution: "raw_input = '  $1,250.75  '\ncleaned = raw_input.strip().replace('$', '').replace(',', '')\namount = float(cleaned)\nbonus = amount * 0.15\ntotal = amount + bonus\nprint(f\"Base: ${amount:.2f} | Bonus: ${bonus:.2f} | Total: ${total:.2f}\")"
      },
      {
        title: "Challenge 2: Deep Copy vs Shallow Copy Test",
        description: "Demonstrate that modifying a nested list inside a shallow copy affects the original, while a deep copy preserves the original.",
        hint: "import copy; copy.copy vs copy.deepcopy",
        solution: "import copy\noriginal = [[1, 2], [3, 4]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\n\noriginal[0][0] = 999\nprint(f\"Original: {original}\")\nprint(f\"Shallow affected: {shallow[0][0] == 999}\")\nprint(f\"Deep protected: {deep[0][0] == 1}\")"
      }
    ],
    quiz: [
      {
        question: "Which of the following data types in Python is MUTABLE?",
        options: ["tuple", "string", "list", "integer"],
        correctAnswer: 2,
        explanation: "Lists are mutable; you can append, remove, or modify items in-place."
      },
      {
        question: "What is the result of type(3.14)?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'double'>", "<class 'number'>"],
        correctAnswer: 1,
        explanation: "Python numbers with decimals are instances of the float class."
      }
    ],
    summary: "Python features rich primitive and collection data types. Mutability defines whether values can be updated in-place. type() inspects the class of any object.",
    relatedLessons: ["py-mod1-1", "py-mod3-1", "py-mod7-1"]
  },

  // MODULE 3: Input, Output, and Operators
  {
    id: "py-mod3-1",
    title: "3. User Input, Output Formatting & All Python Operators",
    section: "Module 3: Input, Output, and Operators",
    moduleNumber: 3,
    moduleTitle: "Input, Output, and Operators",
    difficulty: "Beginner",
    duration: "11 min",
    keyConcepts: ["input()", "print()", "f-strings", "Arithmetic Operators", "Comparison Operators", "Logical Operators"],
    meaning: "Input is receiving data from the user. Output is showing results. Operators are symbols (+, -, ==, and, or) that perform calculations and logical decisions.",
    definition: "Operators in Python are special symbols that carry out arithmetic computation, value comparison, logical combination, assignment, bitwise manipulation, or identity checking on operands.",
    whyUseIt: "Every interactive software application takes user input, processes it using arithmetic or logic, and displays the result to the user.",
    introduction: "In this lesson, you will learn how to capture user input with input(), format text outputs elegantly using modern f-strings, and perform calculations using all Python operators.",
    simpleExplanation: "An operator is like a mathematical tool: the '+' operator acts like an addition calculator, '==' acts like a judge checking if two things are equal, and 'and' acts like a strict security guard requiring two conditions to both be met.",
    syntax: "# Arithmetic:\na, b = 10, 3\nprint(a + b)   # 13 (Addition)\nprint(a // b)  # 3 (Floor division)\nprint(a % b)   # 1 (Modulo / remainder)\nprint(a ** b)  # 1000 (Exponentiation)\n\n# Logical:\nprint(a > 5 and b < 5) # True",
    codeExample: "# Complete Calculator Demonstration\nnum1 = 20\nnum2 = 6\n\nprint(\"=== Arithmetic Operations ===\")\nprint(f\"{num1} + {num2} = {num1 + num2}\")\nprint(f\"{num1} - {num2} = {num1 - num2}\")\nprint(f\"{num1} * {num2} = {num1 * num2}\")\nprint(f\"{num1} / {num2} = {num1 / num2:.2f} (True Division)\")\nprint(f\"{num1} // {num2} = {num1 // num2} (Floor Division)\")\nprint(f\"{num1} % {num2} = {num1 % num2} (Remainder/Modulo)\")\nprint(f\"{num1} ** 2 = {num1 ** 2} (Square)\")\n\nprint(\"\\n=== Logical & Membership ===\")\nskills = [\"Python\", \"JavaScript\", \"SQL\"]\nprint(f\"Is Python in skills? {'Python' in skills}\")\nprint(f\"Eligible check: {(num1 > 18 and 'Python' in skills)}\")",
    codeExplanation: [
      "num1 / num2: True division; always returns a float in Python 3 (e.g. 3.33).",
      "num1 // num2: Floor division; discards decimals and rounds down to the nearest integer.",
      "num1 % num2: Modulo operator; calculates the remainder of integer division.",
      "num1 ** 2: Exponent operator; raises num1 to the power of 2.",
      "'Python' in skills: Membership operator checking if the element exists in the collection."
    ],
    expectedOutput: "=== Arithmetic Operations ===\n20 + 6 = 26\n20 - 6 = 14\n20 * 6 = 120\n20 / 6 = 3.33 (True Division)\n20 // 6 = 3 (Floor Division)\n20 % 6 = 2 (Remainder/Modulo)\n20 ** 2 = 400 (Square)\n\n=== Logical & Membership ===\nIs Python in skills? True\nEligible check: True",
    multipleExamples: [
      {
        title: "Floor Division vs True Division",
        description: "Understanding exact division vs truncated integer division",
        code: "print(7 / 2)   # 3.5\nprint(7 // 2)  # 3\nprint(-7 // 2) # -4 (rounds toward negative infinity!)",
        output: "3.5\n3\n-4"
      },
      {
        title: "Logical Short-Circuit Evaluation",
        description: "How 'and' & 'or' evaluate lazily in Python",
        code: "a = 0\nb = 25\n# In 'a and b', if a is falsy (0), Python returns 0 without evaluating b\nresult = a and b\nprint(\"Result of (0 and 25):\", result)\n# In 'a or b', if a is falsy, Python returns b\nresult2 = a or b\nprint(\"Result of (0 or 25):\", result2)",
        output: "Result of (0 and 25): 0\nResult of (0 or 25): 25"
      },
      {
        title: "Real-World Discount Calculator",
        description: "Calculating final bill with tax and discount using assignment operators",
        code: "bill = 250.0\ndiscount_pct = 0.10 # 10%\ntax_pct = 0.08      # 8%\n\nbill -= bill * discount_pct  # Apply discount\nbill += bill * tax_pct       # Apply tax\nprint(f\"Final payable amount: ${bill:.2f}\")",
        output: "Final payable amount: $243.00"
      }
    ],
    commonMistakes: [
      "Forgetting that input() always returns a string, so input() + input() will concatenate text ('10' + '20' = '1020') instead of adding numbers. Always wrap with int() or float().",
      "Confusing '=' (assignment) with '==' (equality check).",
      "Assuming '^' is exponentiation in Python; '^' is actually the bitwise XOR operator! Use '**' for powers."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between '/' and '//' in Python?",
        answer: "'/' performs float division and always returns a floating-point number (e.g. 10 / 2 returns 5.0). '//' performs floor division, rounding down to the nearest integer toward negative infinity (e.g. 7 // 2 returns 3, and -7 // 2 returns -4).",
        level: "Beginner",
        codeExample: "print(10 / 2)  # 5.0\nprint(10 // 2) # 5"
      },
      {
        question: "2. How does short-circuit evaluation work with logical operators in Python?",
        answer: "In an 'and' expression, if the first operand is False (or falsy), the remaining operands are not evaluated and the falsy value is returned immediately. In an 'or' expression, if the first operand is True (or truthy), evaluation stops and the truthy value is returned immediately.",
        level: "Intermediate"
      },
      {
        question: "3. What are the identity operators in Python?",
        answer: "The identity operators are 'is' and 'is not'. They evaluate whether two operands refer to the exact same memory object (identical memory address via id()), unlike '==' which checks for equivalence of values.",
        level: "Beginner"
      },
      {
        question: "4. What is the Walrus operator (:=) introduced in Python 3.8?",
        answer: "The Walrus operator (:=), formally known as the assignment expression operator, allows you to assign values to variables inside an expression (such as in an if condition or while loop) simultaneously while evaluating the expression.",
        level: "Intermediate",
        codeExample: "if (n := len('CodeFromZero')) > 10:\n    print(f'Length is {n}')"
      },
      {
        question: "5. What is operator precedence in Python?",
        answer: "Operator precedence determines the order in which Python evaluates operators. Exponentiation (**) has the highest precedence, followed by unary operators, multiplication/division/modulo (*, /, //, %), addition/subtraction (+, -), comparisons, and logical operators (not, and, or). Parentheses () override precedence.",
        level: "Beginner"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Simple Interest Calculator",
        difficulty: "Beginner",
        task: "Define principal = 5000, rate = 5.5, and time_years = 3. Calculate Simple Interest: SI = (P * R * T) / 100.",
        hint: "si = (principal * rate * time_years) / 100",
        solution: "p = 5000\nr = 5.5\nt = 3\nsi = (p * r * t) / 100\nprint(f\"Simple Interest: ${si:.2f}\")"
      },
      {
        title: "Exercise 2: BMI Calculator",
        difficulty: "Beginner",
        task: "Given weight_kg = 70 and height_m = 1.75, calculate BMI = weight / (height ** 2).",
        hint: "bmi = weight_kg / (height_m ** 2)",
        solution: "weight = 70\nheight = 1.75\nbmi = weight / (height ** 2)\nprint(f\"Body Mass Index (BMI): {bmi:.1f}\")"
      },
      {
        title: "Exercise 3: Even or Odd using Modulo",
        difficulty: "Beginner",
        task: "Write a line of code using % that checks if a number n = 47 is even or odd.",
        hint: "n % 2 == 0",
        solution: "n = 47\nis_even = (n % 2 == 0)\nprint(f\"Is {n} even? {is_even}\")"
      },
      {
        title: "Exercise 4: F-String Table Formatting",
        difficulty: "Intermediate",
        task: "Print a two-column alignment table with header 'ITEM' and 'PRICE' formatted with width 15 and 8.",
        hint: "Use f'{item:<15}{price:>8.2f}'",
        solution: "print(f\"{'ITEM':<15}{'PRICE':>8}\")\nprint(\"-\" * 23)\nprint(f\"{'Laptop':<15}{'$899.00':>8}\")\nprint(f\"{'Mouse':<15}{'$25.50':>8}\")"
      },
      {
        title: "Exercise 5: Bitwise Shift Exploration",
        difficulty: "Intermediate",
        task: "Show that shifting 5 left by 1 (5 << 1) multiplies by 2, and shifting right by 1 (16 >> 1) divides by 2.",
        hint: "Use 5 << 1 and 16 >> 1",
        solution: "print(\"5 << 1 =\", 5 << 1)   # 10\nprint(\"16 >> 1 =\", 16 >> 1) # 8"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Time Seconds Breakdown",
        description: "Given total_seconds = 7384, convert it into hours, minutes, and remaining seconds using floor division (//) and modulo (%).",
        hint: "hours = total // 3600; rem = total % 3600; minutes = rem // 60; secs = rem % 60",
        solution: "total_seconds = 7384\nhours = total_seconds // 3600\nrem = total_seconds % 3600\nminutes = rem // 60\nseconds = rem % 60\nprint(f\"{total_seconds} seconds = {hours}h {minutes}m {seconds}s\")"
      },
      {
        title: "Challenge 2: Leap Year Predicate",
        description: "A year is leap if (divisible by 4 and not 100) OR (divisible by 400). Test year = 2024 and year = 1900 with this single boolean expression.",
        hint: "(year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)",
        solution: "for year in [2024, 1900, 2000]:\n    is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)\n    print(f\"Year {year} is leap? {is_leap}\")"
      }
    ],
    quiz: [
      {
        question: "What is the output of 17 // 4 in Python?",
        options: ["4.25", "4", "5", "1"],
        correctAnswer: 1,
        explanation: "The floor division operator (//) divides and drops the fractional part, returning 4."
      },
      {
        question: "Which operator checks if a key exists inside a Python dictionary?",
        options: ["has", "exists", "in", "contains"],
        correctAnswer: 2,
        explanation: "The 'in' membership operator checks if a key exists in a dictionary."
      }
    ],
    summary: "Python provides arithmetic, comparison, logical, membership, and identity operators. input() captures strings, while f-strings offer high-performance, readable formatting.",
    relatedLessons: ["py-mod2-1", "py-mod4-1"]
  },

  // MODULE 4: Conditional Statements
  {
    id: "py-mod4-1",
    title: "4. Decision Making: if, elif, else & match-case",
    section: "Module 4: Conditional Statements",
    moduleNumber: 4,
    moduleTitle: "Conditional Statements",
    difficulty: "Beginner",
    duration: "10 min",
    keyConcepts: ["if", "elif", "else", "match-case", "Indentation", "Decision Making", "Ternary"],
    meaning: "Conditional statements allow your program to make decisions: 'IF this condition is true, execute this code; ELSE execute something else.'",
    definition: "Conditional statements control the execution flow of a Python script based on boolean expressions evaluated at runtime.",
    whyUseIt: "Every program requires branching logic: checking passwords, granting login access, grading marks, determining discounts, and validating user permissions.",
    introduction: "In this lesson, you will master Python's control flow structures: the if statement, the if-else pair, the elif ladder, nested conditions, ternary expressions, and the modern match-case statement.",
    simpleExplanation: "Think of an if-statement like a traffic light: if the light is green, your car proceeds; if the light is red, your car stops; otherwise, if yellow, you proceed with caution.",
    syntax: "score = 85\n\nif score >= 90:\n    grade = \"A\"\nelif score >= 80:\n    grade = \"B\"\nelse:\n    grade = \"C\"\n\nprint(f\"Grade: {grade}\")",
    codeExample: "# Complete Student Grading & Discount System\nmarks = 88\nattendance_pct = 92\nis_scholarship_eligible = False\n\nif marks >= 90 and attendance_pct >= 85:\n    status = \"Distinction with Honors\"\n    is_scholarship_eligible = True\nelif marks >= 75:\n    status = \"First Class\"\nelif marks >= 50:\n    status = \"Second Class\"\nelse:\n    status = \"Needs Improvement\"\n\n# Python Ternary Expression (Inline if-else):\nscholarship_text = \"Granted\" if is_scholarship_eligible else \"Standard Tier\"\n\nprint(f\"Marks: {marks} | Result: {status}\")\nprint(f\"Scholarship Status: {scholarship_text}\")",
    codeExplanation: [
      "if marks >= 90 and ...: Tests compound condition using the logical 'and'.",
      "elif marks >= 75: Evaluated only if preceding 'if' evaluated to False.",
      "else: Fallback block executed if no previous conditions matched.",
      "'Granted' if ... else '...': Concise single-line ternary operator."
    ],
    expectedOutput: "Marks: 88 | Result: First Class\nScholarship Status: Standard Tier",
    multipleExamples: [
      {
        title: "Basic Number Sign Checker",
        description: "Checking whether a number is positive, negative, or zero",
        code: "num = -15\nif num > 0:\n    print(f\"{num} is positive\")\nelif num < 0:\n    print(f\"{num} is negative\")\nelse:\n    print(\"Number is zero\")",
        output: "-15 is negative"
      },
      {
        title: "Match-Case Statement (Python 3.10+)",
        description: "Structural pattern matching replacing lengthy switch ladders",
        code: "http_code = 404\nmatch http_code:\n    case 200:\n        msg = \"OK: Request succeeded\"\n    case 401:\n        msg = \"Unauthorized: Login required\"\n    case 404:\n        msg = \"Not Found: Resource does not exist\"\n    case 500:\n        msg = \"Server Error: Internal issue\"\n    case _:\n        msg = \"Unknown HTTP status code\"\nprint(f\"HTTP {http_code}: {msg}\")",
        output: "HTTP 404: Not Found: Resource does not exist"
      },
      {
        title: "Real-World E-commerce Discount",
        description: "Tiered discount calculation based on cart value and membership status",
        code: "cart_total = 150.0\nis_pro_member = True\n\nif cart_total > 200 or is_pro_member:\n    discount = 0.20 # 20%\nelif cart_total > 100:\n    discount = 0.10 # 10%\nelse:\n    discount = 0.0\n\nfinal_bill = cart_total * (1 - discount)\nprint(f\"Subtotal: ${cart_total:.2f} | Discount: {discount*100:.0f}% | Payable: ${final_bill:.2f}\")",
        output: "Subtotal: $150.00 | Discount: 20% | Payable: $120.00"
      }
    ],
    commonMistakes: [
      "Forgetting the colon (:) at the end of if, elif, and else statements.",
      "Inconsistent indentation within blocks (mixing tabs and 4 spaces), causing IndentationError.",
      "Writing redundant code like 'if is_active == True:' instead of the clean idiomatic 'if is_active:'."
    ],
    interviewQuestions: [
      {
        question: "1. What are truthy and falsy values in Python?",
        answer: "In Python, every object has a boolean context. Falsy values evaluate to False in conditional checks: False, None, 0, 0.0, empty collections ('', [], (), {}, set()). Everything else evaluates to Truthy.",
        level: "Beginner",
        codeExample: "items = []\nif not items:\n    print('Empty list is falsy!')"
      },
      {
        question: "2. How does the match-case statement differ from if-elif ladders?",
        answer: "Introduced in Python 3.10 (PEP 634), match-case provides structural pattern matching. It can match values, unpack sequences and mappings, bind variables, and apply guard clauses (case x if x > 0), offering much cleaner syntax than nested elif ladders.",
        level: "Intermediate"
      },
      {
        question: "3. What is the syntax for a ternary conditional operator in Python?",
        answer: "The syntax is: 'value_if_true if condition else value_if_false'. Unlike C-family languages that use 'condition ? x : y', Python's inline if-else is written in natural English order.",
        level: "Beginner"
      },
      {
        question: "4. What is the 'dangling else' problem and how does Python avoid it?",
        answer: "In languages with curly braces, an ambiguous 'else' can be attached to the wrong nested 'if'. Python strictly eliminates this through enforced indentation: an 'else' belongs to whichever 'if' has matching indentation level.",
        level: "Intermediate"
      },
      {
        question: "5. Can you have an else block without an if in Python?",
        answer: "Yes! In Python, 'else' blocks can also be attached to 'for' loops, 'while' loops, and 'try' blocks. In loops, the else block runs only if the loop terminates normally without encountering a 'break' statement.",
        level: "Advanced"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Voting Eligibility Checker",
        difficulty: "Beginner",
        task: "Define age = 17. Check if age >= 18; print 'Eligible to vote' or 'Not eligible yet'.",
        hint: "Use if age >= 18: ... else: ...",
        solution: "age = 17\nif age >= 18:\n    print(\"Eligible to vote\")\nelse:\n    print(f\"Not eligible. Come back in {18 - age} year(s)!\")"
      },
      {
        title: "Exercise 2: Largest of Three Numbers",
        difficulty: "Beginner",
        task: "Given a = 45, b = 78, c = 32, find and print the largest number using if-elif-else logic.",
        hint: "if a >= b and a >= c: ...",
        solution: "a, b, c = 45, 78, 32\nif a >= b and a >= c:\n    largest = a\nelif b >= a and b >= c:\n    largest = b\nelse:\n    largest = c\nprint(f\"Largest value is: {largest}\")"
      },
      {
        title: "Exercise 3: Password Strength Checker",
        difficulty: "Intermediate",
        task: "Check password = 'CodeFromZero2026!'. If len >= 8 and any digit and any uppercase letter, mark Strong; otherwise Moderate/Weak.",
        hint: "len(pwd) >= 8 and any(c.isupper() for c in pwd)",
        solution: "pwd = 'CodeFromZero2026!'\nif len(pwd) >= 8 and any(c.isdigit() for c in pwd) and any(c.isupper() for c in pwd):\n    print(\"Password Strength: STRONG\")\nelse:\n    print(\"Password Strength: WEAK\")"
      },
      {
        title: "Exercise 4: Traffic Signal Action",
        difficulty: "Beginner",
        task: "Use match-case with signal = 'GREEN' to print 'GO', 'YELLOW' for 'SLOW', 'RED' for 'STOP'.",
        hint: "match signal.upper(): case 'RED': ...",
        solution: "signal = 'GREEN'\nmatch signal.upper():\n    case 'RED':\n        print('STOP')\n    case 'YELLOW':\n        print('SLOW DOWN')\n    case 'GREEN':\n        print('GO')\n    case _:\n        print('INVALID SIGNAL')"
      },
      {
        title: "Exercise 5: Inline Admission Discount",
        difficulty: "Intermediate",
        task: "Use a ternary operator to set ticket_price to $15 if is_student is True, else $25.",
        hint: "15 if is_student else 25",
        solution: "is_student = True\nprice = 15 if is_student else 25\nprint(f\"Admission Ticket: ${price}\")"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Tax Slabs Calculator",
        description: "Given income = 65000: income <= 20000 pays 0%; next 30000 pays 10%; remainder above 50000 pays 20%. Calculate total tax.",
        hint: "Calculate step by step in slabs",
        solution: "income = 65000\ntax = 0.0\nif income > 50000:\n    tax += (income - 50000) * 0.20\n    tax += 30000 * 0.10\nelif income > 20000:\n    tax += (income - 20000) * 0.10\nprint(f\"Income: ${income:,} | Total Tax: ${tax:,.2f}\")"
      },
      {
        title: "Challenge 2: Quadrant Finder",
        description: "Given coordinates x = -5, y = 12, determine whether the point lies in Quadrant I, II, III, IV, or on an axis.",
        hint: "x > 0 and y > 0 is Q1; x < 0 and y > 0 is Q2",
        solution: "x, y = -5, 12\nif x > 0 and y > 0:\n    quad = \"Quadrant I\"\nelif x < 0 and y > 0:\n    quad = \"Quadrant II\"\nelif x < 0 and y < 0:\n    quad = \"Quadrant III\"\nelif x > 0 and y < 0:\n    quad = \"Quadrant IV\"\nelse:\n    quad = \"On Axis / Origin\"\nprint(f\"Point ({x}, {y}) lies in {quad}\")"
      }
    ],
    quiz: [
      {
        question: "Which keyword is used for 'else if' conditions in Python?",
        options: ["else if", "elseif", "elif", "case"],
        correctAnswer: 2,
        explanation: "Python uses 'elif' as the keyword for additional conditional branches."
      },
      {
        question: "What value does an empty dictionary {} evaluate to in a boolean check?",
        options: ["True", "False", "None", "Error"],
        correctAnswer: 1,
        explanation: "Empty collections in Python are falsy and evaluate to False."
      }
    ],
    summary: "Decision making in Python relies on if, elif, and else with strict indentation. Match-case handles pattern matching, and ternary expressions provide inline assignment.",
    relatedLessons: ["py-mod3-1", "py-mod5-1"]
  },

  // MODULE 5: Loops
  {
    id: "py-mod5-1",
    title: "5. Iteration Mastery: for Loops, while Loops & Pattern Printing",
    section: "Module 5: Loops",
    moduleNumber: 5,
    moduleTitle: "Loops",
    difficulty: "Beginner",
    duration: "12 min",
    keyConcepts: ["for loop", "while loop", "range()", "break", "continue", "pass", "Patterns"],
    meaning: "A loop repeats a block of code multiple times automatically until a specified condition is satisfied.",
    definition: "Python provides two main looping statements: 'for' loops (iterating over sequences like range, list, or string) and 'while' loops (repeating while a condition remains True).",
    whyUseIt: "Loops automate repetitive work: printing lists of items, calculating sums, processing millions of database records, and running games.",
    introduction: "In this lesson, you will master for loops, while loops, range() generation, break and continue flow alterations, and classic interview pattern programs.",
    simpleExplanation: "If someone asked you to count from 1 to 100, you wouldn't write 100 print statements; you would use a loop that automatically counts step-by-step.",
    syntax: "# for loop with range(start, stop, step):\nfor i in range(1, 6):\n    print(f\"Step {i}\")\n\n# while loop:\ncount = 3\nwhile count > 0:\n    print(count)\n    count -= 1",
    codeExample: "# Complete Loops & Patterns Demonstration\nprint(\"=== Multiplication Table for 7 ===\")\nfor i in range(1, 11):\n    print(f\"7 x {i:2d} = {7 * i:2d}\")\n\nprint(\"\\n=== Right Triangle Star Pattern ===\")\nrows = 5\nfor i in range(1, rows + 1):\n    print(\"* \" * i)\n\nprint(\"\\n=== Break and Continue in While Loop ===\")\nnum = 0\nwhile num < 10:\n    num += 1\n    if num == 3:\n        continue # Skip printing 3\n    if num == 7:\n        break    # Stop loop at 7\n    print(num, end=\" \")\nprint()",
    codeExplanation: [
      "range(1, 11): Generates integers from 1 up to (but excluding) 11.",
      "'* ' * i: Uses Python's string repetition operator to print i stars in one line.",
      "continue: Immediately skips the rest of the current iteration and jumps to the next cycle.",
      "break: Terminates the loop prematurely and jumps to the next statement outside the loop."
    ],
    expectedOutput: "=== Multiplication Table for 7 ===\n7 x  1 =  7\n7 x  2 = 14\n7 x  3 = 21\n7 x  4 = 28\n7 x  5 = 35\n7 x  6 = 42\n7 x  7 = 49\n7 x  8 = 56\n7 x  9 = 63\n7 x 10 = 70\n\n=== Right Triangle Star Pattern ===\n* \n* * \n* * * \n* * * * \n* * * * * \n\n=== Break and Continue in While Loop ===\n1 2 4 5 6 ",
    multipleExamples: [
      {
        title: "Summing Numbers with range()",
        description: "Accumulating a sum of integers from 1 to 100",
        code: "total = 0\nfor i in range(1, 101):\n    total += i\nprint(f\"Sum from 1 to 100 is: {total}\")",
        output: "Sum from 1 to 100 is: 5050"
      },
      {
        title: "Loop Else Clause",
        description: "Executing code only when a loop finishes without breaking",
        code: "for item in [2, 4, 6, 8]:\n    if item % 2 != 0:\n        print(\"Found odd number!\")\n        break\nelse:\n    print(\"All numbers in collection are even!\")",
        output: "All numbers in collection are even!"
      },
      {
        title: "Real-World Retry Loop Simulator",
        description: "Simulating network retries with exponential backoff",
        code: "import time\nretries = 3\nfor attempt in range(1, retries + 1):\n    print(f\"Connecting to server (Attempt {attempt}/{retries})...\")\n    if attempt == 2:\n        print(\"Connection established successfully!\")\n        break",
        output: "Connecting to server (Attempt 1/3)...\nConnecting to server (Attempt 2/3)...\nConnection established successfully!"
      }
    ],
    commonMistakes: [
      "Forgetting to increment the loop counter inside a while loop, causing an infinite loop that freezes the terminal.",
      "Forgetting that range(1, 5) generates [1, 2, 3, 4] and stops BEFORE 5.",
      "Confusing 'break' (exits loop) with 'continue' (skips to next iteration)."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between range(5), range(1, 5), and range(1, 10, 2)?",
        answer: "range(5) generates [0, 1, 2, 3, 4] (defaults start to 0). range(1, 5) generates [1, 2, 3, 4] with start=1 and stop=5. range(1, 10, 2) generates [1, 3, 5, 7, 9] using a step interval of 2.",
        level: "Beginner"
      },
      {
        question: "2. How does the 'else' block work with loops in Python?",
        answer: "A loop's 'else' block runs when the loop completes all its iterations naturally. If the loop is terminated early via a 'break' statement, the 'else' block is completely skipped.",
        level: "Intermediate"
      },
      {
        question: "3. What is the 'pass' statement in Python?",
        answer: "'pass' is a null statement in Python. It serves as a placeholder where a statement is syntactically required (e.g. inside an empty function, class, or loop) but no code needs to be executed.",
        level: "Beginner",
        codeExample: "for i in range(10):\n    pass # Code to be written later"
      },
      {
        question: "4. What is the time complexity of looping through an N-element list?",
        answer: "Looping through an N-element list has a time complexity of O(N) (linear time). A nested loop over two N-element lists has a time complexity of O(N^2) (quadratic time).",
        level: "Intermediate"
      },
      {
        question: "5. How does enumerate() improve loop readability in Python?",
        answer: "enumerate() returns both the current index and the item during iteration as a tuple (index, item), eliminating the need for manual counter variables.",
        level: "Beginner",
        codeExample: "fruits = ['Apple', 'Banana']\nfor idx, item in enumerate(fruits):\n    print(idx, item)"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Factorial with While Loop",
        difficulty: "Beginner",
        task: "Compute 5! (5 * 4 * 3 * 2 * 1) using a while loop and print the result.",
        hint: "fact = 1; while n > 1: fact *= n; n -= 1",
        solution: "n = 5\nfact = 1\ncurr = n\nwhile curr > 1:\n    fact *= curr\n    curr -= 1\nprint(f\"{n}! = {fact}\")"
      },
      {
        title: "Exercise 2: Fibonacci Sequence Generator",
        difficulty: "Intermediate",
        task: "Generate and print the first 8 numbers of the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13.",
        hint: "a, b = 0, 1; in loop: a, b = b, a + b",
        solution: "a, b = 0, 1\nfib = []\nfor _ in range(8):\n    fib.append(a)\n    a, b = b, a + b\nprint(\"Fibonacci:\", fib)"
      },
      {
        title: "Exercise 3: Counting Vowels in Text",
        difficulty: "Beginner",
        task: "Loop through text = 'Code From Zero' and count how many vowels (a, e, i, o, u) appear.",
        hint: "if char.lower() in 'aeiou': count += 1",
        solution: "text = 'Code From Zero'\ncount = sum(1 for c in text if c.lower() in 'aeiou')\nprint(f\"Vowels in '{text}': {count}\")"
      },
      {
        title: "Exercise 4: Pyramid Pattern",
        difficulty: "Intermediate",
        task: "Print a centered pyramid of stars of height 4.",
        hint: "Use print(' ' * (rows - i) + '* ' * i)",
        solution: "rows = 4\nfor i in range(1, rows + 1):\n    print(' ' * (rows - i) + '* ' * i)"
      },
      {
        title: "Exercise 5: Finding Prime Numbers",
        difficulty: "Intermediate",
        task: "Find all prime numbers between 2 and 25 using nested loops and the loop else block.",
        hint: "for d in range(2, int(num**0.5)+1): if num % d == 0: break else: primes.append(num)",
        solution: "primes = []\nfor num in range(2, 26):\n    for d in range(2, int(num**0.5) + 1):\n        if num % d == 0:\n            break\n    else:\n        primes.append(num)\nprint(\"Primes 2-25:\", primes)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Inverted Number Triangle",
        description: "Print an inverted number triangle from 5 down to 1 (Row 1: 5 4 3 2 1, Row 2: 4 3 2 1, etc.).",
        hint: "Outer loop i from 5 down to 1",
        solution: "for i in range(5, 0, -1):\n    for j in range(i, 0, -1):\n        print(j, end=\" \")\n    print()"
      },
      {
        title: "Challenge 2: Palindrome Number Checker",
        description: "Check if integer 12321 is a palindrome using only arithmetic while loop operations without converting it to a string.",
        hint: "rev = 0; while temp: rev = rev * 10 + temp % 10; temp //= 10",
        solution: "orig = 12321\ntemp = orig\nrev = 0\nwhile temp > 0:\n    rev = (rev * 10) + (temp % 10)\n    temp //= 10\nprint(f\"{orig} is palindrome? {orig == rev}\")"
      }
    ],
    quiz: [
      {
        question: "How many times does 'for i in range(1, 10, 3):' execute?",
        options: ["3 times (1, 4, 7)", "4 times (1, 4, 7, 10)", "10 times", "2 times"],
        correctAnswer: 0,
        explanation: "The values generated are 1, 4, and 7 (10 is excluded because the stop value is exclusive). It runs 3 times."
      },
      {
        question: "What does the 'continue' keyword do in a loop?",
        options: [
          "Terminates the loop completely",
          "Skips the rest of the current iteration and jumps to the next",
          "Restarts the entire loop from the beginning",
          "Pauses program execution for 1 second"
        ],
        correctAnswer: 1,
        explanation: "'continue' terminates only the current cycle and proceeds with the next iteration."
      }
    ],
    summary: "Loops repeat actions efficiently. 'for' iterates over finite sequences, 'while' iterates based on conditions. 'break' and 'continue' give full control over loop flow.",
    relatedLessons: ["py-mod4-1", "py-mod6-1"]
  },

  // MODULES 6 TO 13 (Strings, Lists, Tuples/Sets/Dicts, Functions, Comprehensions, Modules, Exceptions, Files)
  ...PYTHON_MODULES_6_TO_13_LESSONS,

  // MODULE 14: Object-Oriented Programming (OOP)
  {
    id: "py-mod14-1",
    title: "14. Object-Oriented Programming: Classes, Objects, __init__ & self",
    section: "Module 14: Object-Oriented Programming (OOP)",
    moduleNumber: 14,
    moduleTitle: "Object-Oriented Programming (OOP)",
    difficulty: "Intermediate",
    duration: "13 min",
    keyConcepts: ["class", "Object", "__init__ Constructor", "self", "Methods", "Encapsulation"],
    meaning: "Object-Oriented Programming (OOP) is a programming paradigm that organizes code around 'objects'—custom data models that bundle data (attributes) and behavior (methods) together.",
    definition: "A `class` is a blueprint for creating objects. An `object` is an instance of a class. The `__init__` method initializes the object's attributes upon creation, and `self` refers to the specific instance being operated on.",
    whyUseIt: "OOP models complex real-world entities (like BankAccount, User, VideoPlayer) in a structured, reusable, and maintainable way.",
    introduction: "In this lesson, you will learn the foundational concepts of OOP in Python: defining classes, instantiating objects, using instance variables, and writing methods.",
    simpleExplanation: "A class is like an architectural blueprint for a house. An object is the actual house built from that blueprint. You can build 50 houses (objects) from one blueprint (class).",
    syntax: "class Student:\n    def __init__(self, name, track):\n        self.name = name          # Attribute\n        self.track = track\n\n    def introduce(self):          # Method\n        return f\"{self.name} studying {self.track}\"",
    codeExample: "# Real-World OOP Example: Bank Account Model\nclass BankAccount:\n    def __init__(self, account_holder, initial_balance=0.0):\n        self.holder = account_holder\n        self._balance = max(0.0, float(initial_balance))\n        self._transactions = []\n\n    def deposit(self, amount):\n        if amount <= 0:\n            return False\n        self._balance += amount\n        self._transactions.append(f\"Deposit: +${amount:.2f}\")\n        return True\n\n    def withdraw(self, amount):\n        if 0 < amount <= self._balance:\n            self._balance -= amount\n            self._transactions.append(f\"Withdrawal: -${amount:.2f}\")\n            return True\n        return False\n\n    def get_statement(self):\n        return {\n            \"holder\": self.holder,\n            \"balance\": round(self._balance, 2),\n            \"history\": self._transactions\n        }\n\n# Instantiate and operate on account\nacc = BankAccount(\"Sarah Jenkins\", 150.0)\nacc.deposit(50.0)\nacc.withdraw(30.0)\n\nstatement = acc.get_statement()\nprint(f\"Account Holder: {statement['holder']}\")\nprint(f\"Current Balance: ${statement['balance']}\")\nprint(\"Recent Activity:\", statement['history'])",
    codeExplanation: [
      "class BankAccount:: Declares the class blueprint.",
      "def __init__(self, ...): The constructor method executed whenever BankAccount(...) is instantiated.",
      "self._balance = ...: Instance variable unique to each created account instance.",
      "def deposit(self, amount): Method operating on the instance's state via 'self'.",
      "acc = BankAccount(...): Instantiates a new object in memory."
    ],
    expectedOutput: "Account Holder: Sarah Jenkins\nCurrent Balance: $170.0\nRecent Activity: ['Deposit: +$50.00', 'Withdrawal: -$30.00']",
    multipleExamples: [
      {
        title: "Basic Class Creation",
        description: "Defining attributes and a simple display method",
        code: "class Car:\n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n    def drive(self):\n        return f\"{self.make} {self.model} is moving!\"\n\nc = Car(\"Tesla\", \"Model 3\")\nprint(c.drive())",
        output: "Tesla Model 3 is moving!"
      },
      {
        title: "Class Attribute vs Instance Attribute",
        description: "Shared state across instances vs unique individual state",
        code: "class Employee:\n    company = \"Code From Zero\" # Class variable\n    def __init__(self, name):\n        self.name = name       # Instance variable\n\ne1 = Employee(\"Alice\")\ne2 = Employee(\"Bob\")\nprint(e1.name, \"at\", e1.company)\nprint(e2.name, \"at\", e2.company)",
        output: "Alice at Code From Zero\nBob at Code From Zero"
      },
      {
        title: "Inheritance in Action",
        description: "Extending a base class with a specialized child class using super()",
        code: "class User:\n    def __init__(self, name, email):\n        self.name = name\n        self.email = email\n    def get_role(self):\n        return \"Standard User\"\n\nclass Admin(User):\n    def get_role(self):\n        return \"Super Administrator\"\n\nu = User(\"Sam\", \"sam@test.com\")\na = Admin(\"Dev\", \"dev@test.com\")\nprint(u.name, \":\", u.get_role())\nprint(a.name, \":\", a.get_role())",
        output: "Sam : Standard User\nDev : Super Administrator"
      }
    ],
    commonMistakes: [
      "Forgetting to include 'self' as the first parameter of instance methods.",
      "Modifying class attributes when intending to modify instance attributes, accidentally sharing state across all instances."
    ],
    interviewQuestions: [
      {
        question: "1. What is the purpose of the 'self' parameter in Python class methods?",
        answer: "'self' represents the instance of the class currently executing the method, allowing access to instance attributes and other methods.",
        level: "Beginner"
      },
      {
        question: "2. What are the four main pillars of OOP in Python?",
        answer: "The 4 pillars are: (1) Encapsulation (bundling data and methods, hiding internal state), (2) Inheritance (reusing and extending functionality from parent classes), (3) Polymorphism (common interface for distinct types), and (4) Abstraction (hiding implementation complexity using abstract base classes).",
        level: "Intermediate"
      },
      {
        question: "3. What is the difference between @classmethod and @staticmethod?",
        answer: "@classmethod receives the class object ('cls') as its first parameter and can access or modify class state. @staticmethod receives neither 'self' nor 'cls', behaving like a plain utility function scoped inside the class namespace.",
        level: "Intermediate"
      },
      {
        question: "4. What are dunder (double underscore) magic methods?",
        answer: "Dunder methods (like __init__, __str__, __repr__, __len__, __eq__) are special methods that Python automatically invokes in response to built-in operations (e.g. len(obj) calls obj.__len__(), print(obj) calls obj.__str__()).",
        level: "Intermediate"
      },
      {
        question: "5. How does Python handle Multiple Inheritance and the Diamond Problem?",
        answer: "Python supports multiple inheritance using the C3 Superclass Linearization algorithm, known as the Method Resolution Order (MRO). You can inspect the MRO of any class using ClassName.__mro__.",
        level: "Advanced"
      }
    ],
    practiceExercises: [
      {
        title: "Coding Learner Profile Class",
        difficulty: "Intermediate",
        task: "Create a Learner class with name, language, and completed_lessons list. Add a complete_lesson(id) method.",
        hint: "self.completed = []",
        solution: "class Learner:\n    def __init__(self, name, language):\n        self.name = name\n        self.language = language\n        self.completed = []\n    def complete_lesson(self, lesson_id):\n        if lesson_id not in self.completed:\n            self.completed.append(lesson_id)\n\ns = Learner('Maya', 'Python')\ns.complete_lesson('py-1')\nprint(s.name, s.completed)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Shopping Cart Class",
        description: "Implement a ShoppingCart class with methods add_item(name, price), remove_item(name), and calculate_total() including a 5% tax.",
        hint: "self.items = []",
        solution: "class ShoppingCart:\n    def __init__(self):\n        self.items = {}\n    def add_item(self, name, price):\n        self.items[name] = float(price)\n    def get_total(self):\n        subtotal = sum(self.items.values())\n        return subtotal * 1.05\n\nc = ShoppingCart()\nc.add_item('Book', 20)\nc.add_item('Pen', 5)\nprint(f'Total: ${c.get_total():.2f}')"
      }
    ],
    quiz: [
      {
        question: "What is the purpose of the 'self' parameter in Python class methods?",
        options: [
          "It refers to the current instance of the class",
          "It is a built-in keyword that imports standard library modules",
          "It allocates heap memory for global variables",
          "It destroys the object when finished"
        ],
        correctAnswer: 0,
        explanation: "'self' represents the instance of the class currently executing the method, allowing access to instance attributes and other methods."
      }
    ],
    summary: "Classes package state and behavior. The __init__ method initializes attributes, and self represents the current instance.",
    relatedLessons: ["py-mod1-1", "py-mod25-1"]
  },

  // MODULES 15 TO 24 (Advanced, DB/SQL, APIs, Async/Threading, Testing, DSA, Data Analysis, AI/ML, Web, Automation)
  ...PYTHON_MODULES_15_TO_24_LESSONS,

  // MODULE 25: Python Projects
  {
    id: "py-mod25-1",
    title: "25. Guided Project: CLI Expense Tracker & Financial Analyzer",
    section: "Module 25: Python Practical Projects",
    moduleNumber: 25,
    moduleTitle: "Python Practical Projects",
    difficulty: "Intermediate",
    duration: "18 min",
    isProject: true,
    keyConcepts: ["Full CLI App", "OOP", "File Persistence", "Error Handling"],
    meaning: "A complete, functional portfolio project that integrates data collections, functions, object-oriented programming, and file handling into a real application.",
    definition: "An interactive command-line application that records financial transactions, tracks categories, validates budget constraints, and calculates account analytics.",
    whyUseIt: "Building end-to-end projects is the single most effective way to cement coding concepts and build an impressive developer portfolio.",
    introduction: "In this guided project, you will build a production-grade Expense Tracker and Budget Analyzer from scratch.",
    simpleExplanation: "Instead of writing isolated 5-line exercises, you are now connecting all your skills to build a tool you can actually use in daily life.",
    syntax: "# Run project from terminal:\npython3 expense_tracker.py",
    codeExample: "# COMPLETE PROJECT: Clean Python Expense Tracker\nimport json\nfrom datetime import date\n\nclass ExpenseTracker:\n    def __init__(self, owner):\n        self.owner = owner\n        self.expenses = []\n\n    def add_expense(self, title, amount, category):\n        if amount <= 0:\n            raise ValueError(\"Amount must be positive\")\n        record = {\n            \"id\": len(self.expenses) + 1,\n            \"title\": title,\n            \"amount\": float(amount),\n            \"category\": category,\n            \"date\": str(date.today())\n        }\n        self.expenses.append(record)\n        return record\n\n    def get_total_spending(self):\n        return sum(e[\"amount\"] for e in self.expenses)\n\n    def spending_by_category(self):\n        summary = {}\n        for e in self.expenses:\n            cat = e[\"category\"]\n            summary[cat] = summary.get(cat, 0.0) + e[\"amount\"]\n        return summary\n\n# Initialize and seed sample transactions\ntracker = ExpenseTracker(\"Sam\")\ntracker.add_expense(\"Python Mastery Book\", 34.99, \"Education\")\ntracker.add_expense(\"Coffee & Snacks\", 8.50, \"Food\")\ntracker.add_expense(\"Cloud Server Hosting\", 15.00, \"Tech\")\ntracker.add_expense(\"Algorithms Course\", 49.99, \"Education\")\n\nprint(f\"=== Financial Summary for {tracker.owner} ===\")\nprint(f\"Total Spending: ${tracker.get_total_spending():.2f}\")\nprint(\"\\nSpending by Category:\")\nfor cat, amount in tracker.spending_by_category().items():\n    pct = (amount / tracker.get_total_spending()) * 100\n    print(f\"  • {cat}: ${amount:.2f} ({pct:.1f}%)\")",
    codeExplanation: [
      "class ExpenseTracker: OOP container managing transaction state.",
      "add_expense(...): Validates positive values and attaches dates.",
      "sum(e['amount'] for e in self.expenses): Generator expression calculating the sum cleanly.",
      "spending_by_category(): Aggregates totals per category using dictionary lookups."
    ],
    expectedOutput: "=== Financial Summary for Sam ===\nTotal Spending: $108.48\n\nSpending by Category:\n  • Education: $84.98 (78.3%)\n  • Food: $8.50 (7.8%)\n  • Tech: $15.00 (13.8%)",
    multipleExamples: [
      {
        title: "Basic Calculator Project",
        description: "Simple arithmetic CLI calculator function",
        code: "def calculate(a, b, op):\n    if op == '+': return a + b\n    if op == '-': return a - b\n    if op == '*': return a * b\n    if op == '/': return a / b if b != 0 else 'Error: Div by zero'\n    return 'Invalid operator'\n\nprint(calculate(10, 5, '+'))\nprint(calculate(10, 5, '*'))",
        output: "15\n50"
      },
      {
        title: "Student Grade Management",
        description: "Dictionary-based student record manager",
        code: "students = {'Amit': 92, 'Sara': 78, 'Priya': 85}\naverage = sum(students.values()) / len(students)\nprint(f'Class average: {average:.1f}')",
        output: "Class average: 85.0"
      },
      {
        title: "Production File Logger",
        description: "Formatting timestamps and writing transaction records",
        code: "import datetime\nlog = f\"[{datetime.datetime.now().strftime('%H:%M:%S')}] User auth success\"\nprint(log)",
        output: "[12:00:00] User auth success"
      }
    ],
    commonMistakes: [
      "Storing currency as raw floating point without rounding, leading to precision artifacts like $108.48000000000002. Always round to 2 decimals or use the Decimal module."
    ],
    interviewQuestions: [
      {
        question: "1. Why is json.dump() commonly used for CLI application data persistence?",
        answer: "JSON is a standard, lightweight text format easily serialized by Python's built-in json module, human-readable, and cross-platform compatible.",
        level: "Beginner"
      },
      {
        question: "2. How would you handle file errors when saving an expense tracker file?",
        answer: "Wrap the file operation in a try-except block handling FileNotFoundError and PermissionError with a fallback error message.",
        level: "Intermediate"
      },
      {
        question: "3. What is the advantage of using generators like sum(e['amount'] for e in expenses)?",
        answer: "Generators evaluate items lazily one at a time without creating an entire temporary intermediate list in memory, saving RAM for large datasets.",
        level: "Advanced"
      },
      {
        question: "4. How can you make the ExpenseTracker class iterable?",
        answer: "Implement the __iter__() dunder method that yields each expense record in self.expenses.",
        level: "Advanced"
      },
      {
        question: "5. How do you ensure float precision safety in financial software?",
        answer: "Use Python's built-in 'decimal.Decimal' module instead of standard float, which prevents IEEE 754 floating-point rounding errors.",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Challenge: Add Monthly Budget Limit",
        difficulty: "Intermediate",
        task: "Add a method set_budget(category, limit) that warns the user if spending in that category exceeds the limit.",
        hint: "Compare spending_by_category().get(cat, 0) against budget",
        solution: "def check_budget(self, category, limit):\n    spent = self.spending_by_category().get(category, 0.0)\n    return spent <= limit"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Export Expenses to CSV",
        description: "Write an export_csv(filename) method that saves all expenses in comma-separated format.",
        hint: "Open with 'w' and write header then lines",
        solution: "def export_csv(tracker, filename):\n    lines = ['id,title,amount,category,date']\n    for e in tracker.expenses:\n        lines.append(f\"{e['id']},{e['title']},{e['amount']},{e['category']},{e['date']}\")\n    return '\\n'.join(lines)"
      }
    ],
    quiz: [
      {
        question: "Why is json.dump() commonly used for CLI application data persistence?",
        options: [
          "It saves structured dictionaries and lists to human-readable text files",
          "It compiles Python into machine code",
          "It automatically encrypts the hard drive",
          "It communicates with foreign operating systems"
        ],
        correctAnswer: 0,
        explanation: "JSON is a standard, lightweight text format easily serialized by Python's built-in json module."
      }
    ],
    summary: "This portfolio project demonstrates modular class design, list/dictionary comprehensions, and data aggregation in modern Python.",
    relatedLessons: ["py-mod14-1", "py-mod1-1"]
  }
];

// SECTION 5: DEDICATED PYTHON INTERVIEW PREPARATION (24 COMPLETE CATEGORIES)
export const PYTHON_INTERVIEW_PREP: PythonInterviewCategory[] = EXTENDED_PYTHON_INTERVIEW_PREP;

// SECTION 8: 5-STAGE PYTHON ROADMAP
export const PYTHON_ROADMAP_STAGES: PythonRoadmapStage[] = [
  {
    stage: 1,
    title: "Stage 1: Python Fundamentals",
    level: "Beginner",
    description: "Master installation, VS Code, basic syntax, variables, data types, operators, input/output, and basic conditions.",
    topics: ["Python Setup", "print() & input()", "Variables & Dynamic Types", "Arithmetic & Comparisons", "if-elif-else logic"]
  },
  {
    stage: 2,
    title: "Stage 2: Core Data Structures & Loops",
    level: "Beginner to Intermediate",
    description: "Iterate with while and for loops, master strings, lists, tuples, sets, dictionaries, and functional comprehensions.",
    topics: ["for and while loops", "String methods & slicing", "List manipulation", "Dictionaries & Sets", "List Comprehensions"]
  },
  {
    stage: 3,
    title: "Stage 3: Functions, Modules & Files",
    level: "Intermediate",
    description: "Write modular code using functions, *args/**kwargs, exception handling, file I/O, custom packages, and virtual environments.",
    topics: ["Functions & Lambda", "Exception Handling (try-except)", "File I/O (CSV/JSON)", "Modules & pip", "Virtual Environments"]
  },
  {
    stage: 4,
    title: "Stage 4: Advanced OOP & Architecture",
    level: "Advanced",
    description: "Object-oriented design, inheritance, dunder methods, generators (yield), decorators, context managers, and concurrency.",
    topics: ["Classes & Objects", "Inheritance & Polymorphism", "Decorators & Generators", "Async/Await & Threading", "Unit Testing (pytest)"]
  },
  {
    stage: 5,
    title: "Stage 5: Choose Your Career Path",
    level: "Professional",
    description: "Specialize in one of five in-demand industry tracks with production tools and frameworks.",
    topics: [
      "Track A: Backend Web Dev (FastAPI, Flask, PostgreSQL, Docker)",
      "Track B: Data Analysis & Science (NumPy, Pandas, Matplotlib, SQL)",
      "Track C: AI & Machine Learning (Scikit-learn, PyTorch, Neural Nets)",
      "Track D: Automation & Scripting (Beautiful Soup, Selenium, Cron)",
      "Track E: Software Engineer in Test (pytest, CI/CD, Mocking)"
    ],
    careerRelevance: "Choose your specialization based on your target job role."
  }
];

// 30 GUIDED PYTHON PORTFOLIO PROJECTS (ALL 30 PROJECTS IMPLEMENTED)
export const PYTHON_PORTFOLIO_PROJECTS: PythonProjectItem[] = EXTENDED_PYTHON_PORTFOLIO_PROJECTS;

// PLAYGROUND TEMPLATES FOR INTERACTIVE PYTHON CODE RUNNER
export const PYTHON_PLAYGROUND_TEMPLATES: PythonPlaygroundTemplate[] = [
  {
    id: "tmpl-hello",
    name: "1. Hello World & Profile",
    category: "Basics",
    description: "Introductory program printing formatted text and variable outputs.",
    code: `# Welcome to Code From Zero's Interactive Python Runner!
user_name = "Future Senior Engineer"
platform = "Code From Zero"
study_streak = 3

print("=" * 35)
print(f"  Welcome, {user_name}!")
print(f"  Platform: {platform}")
print(f"  Current Active Streak: {study_streak} Days 🔥")
print("=" * 35)

print("\\nReady to code Python from zero to advanced!")`,
    expectedOutput: `===================================
  Welcome, Future Senior Engineer!
  Platform: Code From Zero
  Current Active Streak: 3 Days 🔥
===================================

Ready to code Python from zero to advanced!`
  },
  {
    id: "tmpl-math",
    name: "2. Math & Currency Converter",
    category: "Operators",
    description: "Calculates exchange rates, discounts, and floating-point arithmetic.",
    code: `# Currency & Discount Calculator
item_name = "Complete Python Masterclass"
original_price_usd = 49.99
discount_percent = 20
exchange_rate_inr = 86.50

discount_amount = original_price_usd * (discount_percent / 100)
final_usd = original_price_usd - discount_amount
final_inr = final_usd * exchange_rate_inr

print(f"Item: {item_name}")
print(f"Original: USD {original_price_usd:.2f}")
print(f"Discount: -USD {discount_amount:.2f} ({discount_percent}%)")
print(f"Final USD: {final_usd:.2f}")
print(f"Final INR: ₹{final_inr:.2f}")`,
    expectedOutput: `Item: Complete Python Masterclass
Original: USD 49.99
Discount: -USD 10.00 (20%)
Final USD: 39.99
Final INR: ₹3459.31`
  },
  {
    id: "tmpl-dsa",
    name: "3. Algorithm: Binary Search",
    category: "DSA",
    description: "O(log N) Binary search algorithm on a sorted list.",
    code: `def binary_search(arr, target):
    left = 0
    right = len(arr) - 1
    steps = 0
    
    while left <= right:
        steps += 1
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid, steps
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
            
    return -1, steps

numbers = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
target = 23
idx, steps = binary_search(numbers, target)

print(f"Array: {numbers}")
print(f"Searching for target: {target}")
if idx != -1:
    print(f"Found {target} at index {idx} in only {steps} step(s)!")
else:
    print("Not found.")`,
    expectedOutput: `Array: [2, 5, 8, 12, 16, 23, 38, 56, 72, 91]
Searching for target: 23
Found 23 at index 5 in only 1 step(s)!`
  },
  {
    id: "tmpl-oop",
    name: "4. OOP: Bank Account Model",
    category: "Object-Oriented",
    description: "Encapsulation, state mutation, and balance validation.",
    code: `class BankAccount:
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self.balance = float(balance)
        self.history = []
        
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.history.append(f"+USD {amount:.2f} Deposit")
            print(f"Deposited USD {amount:.2f}. New Balance: USD {self.balance:.2f}")
            
    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            self.history.append(f"-USD {amount:.2f} Withdrawal")
            print(f"Withdrew USD {amount:.2f}. New Balance: USD {self.balance:.2f}")
        else:
            print(f"Insufficient funds for USD {amount:.2f} withdrawal!")

account = BankAccount("C V Prasad Reddy", 200.0)
account.deposit(50.0)
account.withdraw(120.0)
account.withdraw(500.0)
print(f"\\nStatement for {account.owner}:")
print("Transactions:", account.history)`,
    expectedOutput: `Deposited USD 50.00. New Balance: USD 250.00
Withdrew USD 120.00. New Balance: USD 130.00
Insufficient funds for USD 500.00 withdrawal!

Statement for C V Prasad Reddy:
Transactions: ['+USD 50.00 Deposit', '-USD 120.00 Withdrawal']`
  }
];
