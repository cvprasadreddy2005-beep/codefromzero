import { PythonInterviewCategory, PythonProjectItem } from './pythonTutorialsData';

// ALL 24 DEDICATED PYTHON INTERVIEW PREPARATION CATEGORIES
export const EXTENDED_PYTHON_INTERVIEW_PREP: PythonInterviewCategory[] = [
  {
    id: "fundamentals",
    title: "1. Python Fundamentals",
    description: "Core features, interpreted execution, bytecode, PVM, and PEP 8 conventions.",
    questions: [
      {
        question: "What is Python and why is it called an interpreted language?",
        answer: "Python is a high-level, dynamically-typed programming language. It is called interpreted because source code is compiled into intermediate bytecode (.pyc) and then executed line-by-line by the Python Virtual Machine (PVM), eliminating manual compilation steps.",
        level: "Beginner"
      },
      {
        question: "What are the key advantages and limitations of Python?",
        answer: "Advantages: Outstanding readability, massive standard library and third-party ecosystem (NumPy, PyTorch, FastAPI), rapid prototyping, cross-platform compatibility. Limitations: Slower raw CPU execution speed than compiled languages like C++/Rust, and GIL constraints for CPU-bound threads.",
        level: "Beginner"
      },
      {
        question: "What is PEP 8?",
        answer: "PEP 8 is Python's official Style Guide. Key rules include: 4 spaces per indentation level (never tabs), 79 character line limit, snake_case for functions/variables, UPPER_CASE for constants, and PascalCase for classes.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "variables-datatypes",
    title: "2. Variables and Data Types",
    description: "Primitives, collections, mutability, dynamic typing, and memory model.",
    questions: [
      {
        question: "What is the difference between mutable and immutable data types?",
        answer: "Mutable objects (lists, dicts, sets) can be modified in-place without changing their memory identity (id()). Immutable objects (int, float, str, tuple, frozenset) cannot be changed; modifying them creates a new object in memory.",
        level: "Beginner",
        codeExample: "x = [1, 2]\nx.append(3)  # Same memory id\ns = 'hello'\ns += '!'     # Creates new string object"
      },
      {
        question: "What is the difference between shallow copy and deep copy?",
        answer: "A shallow copy (copy.copy()) duplicates the outer container but keeps references to nested objects. A deep copy (copy.deepcopy()) recursively duplicates all nested structures, completely decoupling the duplicate from the original.",
        level: "Intermediate",
        codeExample: "import copy\nshallow = copy.copy(matrix)\ndeep = copy.deepcopy(matrix)"
      }
    ]
  },
  {
    id: "operators",
    title: "3. Operators & Expressions",
    description: "Arithmetic, boolean logic, bitwise operations, and the walrus operator.",
    questions: [
      {
        question: "What is the difference between '==' and 'is' in Python?",
        answer: "'==' checks for value equality (do two objects hold equal values?), whereas 'is' checks for identity (do two variables reference the exact same memory address?).",
        level: "Beginner",
        codeExample: "a = [1, 2]\nb = [1, 2]\nprint(a == b)  # True (same values)\nprint(a is b)  # False (distinct heap objects)"
      },
      {
        question: "What does the Walrus operator (:=) do?",
        answer: "Introduced in Python 3.8, the assignment expression operator (:=) assigns a value to a variable within an expression, reducing redundant calls in conditions and loops.",
        level: "Intermediate",
        codeExample: "while (line := input()) != 'exit':\n    print(f'Echo: {line}')"
      }
    ]
  },
  {
    id: "conditionals-loops",
    title: "4. Control Flow & Loops",
    description: "if/else, match-case, for/while loops, break/continue, and loop-else.",
    questions: [
      {
        question: "How does the 'else' clause in Python loops work?",
        answer: "A loop's 'else' block executes only when the loop completes naturally without hitting a 'break' statement. If 'break' terminates the loop, the 'else' block is bypassed.",
        level: "Intermediate",
        codeExample: "for n in [2, 3, 5]:\n    if n == 4: break\nelse:\n    print('Loop finished without break!')"
      },
      {
        question: "How does structural pattern matching (match-case) work?",
        answer: "Introduced in Python 3.10, match-case tests subject expressions against patterns, deconstructs sequence/mapping types, and supports guard conditions via 'if'.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "functions",
    title: "5. Functions & Lambdas",
    description: "Arguments, *args, **kwargs, decorators, closures, and scope.",
    questions: [
      {
        question: "What is the difference between *args and **kwargs?",
        answer: "*args passes variable positional arguments as a tuple. **kwargs passes variable keyword arguments as a dictionary.",
        level: "Beginner",
        codeExample: "def func(*args, **kwargs):\n    print('Positional:', args)\n    print('Keyword:', kwargs)"
      },
      {
        question: "Why should you never use mutable default arguments like def f(x=[])?",
        answer: "Default argument values are evaluated once when the function is defined, not every time it is called. A mutable list is shared across all function invocations, accumulating mutations.",
        level: "Intermediate",
        codeExample: "# Correct pattern:\ndef append_to(item, target=None):\n    if target is None:\n        target = []\n    target.append(item)\n    return target"
      }
    ]
  },
  {
    id: "oop",
    title: "6. Object-Oriented Programming (OOP)",
    description: "Classes, inheritance, polymorphism, encapsulation, super(), and dunders.",
    questions: [
      {
        question: "What are dunder methods in Python?",
        answer: "Dunder (double-underscore) methods like __init__, __str__, __repr__, __len__, and __getitem__ allow custom user classes to integrate seamlessly with Python built-in operations and operators.",
        level: "Intermediate"
      },
      {
        question: "What is the purpose of super() and how does MRO resolve method calls?",
        answer: "super() returns a proxy object delegating method calls to a parent or sibling class based on Method Resolution Order (MRO), calculated using the C3 linearization algorithm.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "advanced",
    title: "7. Advanced Python (Iterators, Generators, Decorators)",
    description: "yield, closures, custom decorators, and context managers.",
    questions: [
      {
        question: "How do generators save memory compared to lists?",
        answer: "A generator function uses 'yield' to produce items on demand lazily one at a time. It maintains state without allocating memory for an entire collection upfront, ideal for gigabyte-scale datasets.",
        level: "Intermediate",
        codeExample: "def gen_range(n):\n    for i in range(n):\n        yield i"
      },
      {
        question: "How do you write a custom context manager in Python?",
        answer: "Implement the __enter__() and __exit__() dunder methods on a class, or use the contextlib.contextmanager generator decorator.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "memory-concurrency",
    title: "8. Memory Management & Concurrency",
    description: "GIL, garbage collection, reference counting, and cyclic trash.",
    questions: [
      {
        question: "How does Python handle memory management and garbage collection?",
        answer: "Python uses reference counting as its primary mechanism: when an object's reference counter drops to 0, its memory is deallocated immediately. A generational cyclic garbage collector periodically detects and frees circular references.",
        level: "Advanced"
      },
      {
        question: "What is the Global Interpreter Lock (GIL)?",
        answer: "The GIL is a mutex in CPython ensuring only one native thread executes Python bytecode at any instant, making CPython thread-safe. For CPU-bound tasks, multiprocessing bypasses the GIL by spawning separate OS processes.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "file-io",
    title: "9. File I/O & Serialization",
    description: "open(), context managers, buffering, JSON, pickle, and CSV handling.",
    questions: [
      {
        question: "Why should you always open files using 'with open(...) as f:'?",
        answer: "The 'with' statement guarantees the file descriptor is cleanly closed immediately upon exiting the block, even if an unhandled exception or return statement occurs.",
        level: "Beginner"
      },
      {
        question: "What are the security concerns with the 'pickle' module?",
        answer: "'pickle' can execute arbitrary code during deserialization. Never unpickle untrusted data received over a network; prefer JSON, Protocol Buffers, or MessagePack.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "exception-handling",
    title: "10. Exception & Error Handling",
    description: "try, except, else, finally, raise, and custom exceptions.",
    questions: [
      {
        question: "What is the difference between 'except Exception:' and 'except:'?",
        answer: "'except Exception:' catches all standard application errors. Bare 'except:' also intercepts SystemExit, KeyboardInterrupt (Ctrl+C), and GeneratorExit, making graceful program termination difficult.",
        level: "Intermediate"
      },
      {
        question: "When does the 'finally' block execute?",
        answer: "The 'finally' block always executes under all conditions: whether an exception occurred, was caught, went uncaught, or even if 'return' was called inside try.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "data-structures",
    title: "11. Data Structures & Collections",
    description: "Lists, dicts, sets, deque, Counter, defaultdict, and namedtuple.",
    questions: [
      {
        question: "What is the average time complexity of lookups in a Python dictionary and set?",
        answer: "Average time complexity is O(1) constant time because dicts and sets are implemented as hash tables. Worst-case is O(n) under severe hash collisions.",
        level: "Intermediate"
      },
      {
        question: "When should you use collections.deque instead of a standard list?",
        answer: "Use deque when you need O(1) appends and pops from BOTH ends. Inserting or removing from the front (index 0) of a standard list is O(n) because all elements must shift.",
        level: "Intermediate",
        codeExample: "from collections import deque\nq = deque([1, 2, 3])\nq.appendleft(0)  # O(1) constant time\nq.pop()          # O(1) constant time"
      }
    ]
  },
  {
    id: "strings-regex",
    title: "12. Strings & Regular Expressions",
    description: "String slicing, immutability, formatting, and re module regex matching.",
    questions: [
      {
        question: "Why are Python strings immutable?",
        answer: "Immutability allows strings to be hashable (usable as dictionary keys and set elements), thread-safe, and memory-optimized through string interning.",
        level: "Beginner"
      },
      {
        question: "What is the difference between re.match(), re.search(), and re.findall()?",
        answer: "re.match() matches only at the very beginning of the string. re.search() scans the entire string for the first match. re.findall() returns all non-overlapping matches as a list.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "functional-programming",
    title: "13. Functional Programming & Comprehensions",
    description: "map, filter, reduce, list/dict comprehensions, and itertools.",
    questions: [
      {
        question: "Why are list comprehensions generally preferred over map() and filter() in Python?",
        answer: "List comprehensions are idiomatic, easier to read, support inline filtering and transformation simultaneously, and are optimized in CPython bytecode.",
        level: "Beginner",
        codeExample: "# List comprehension vs map/filter:\nevens_sq = [x**2 for x in range(10) if x % 2 == 0]"
      },
      {
        question: "How does functools.reduce() work?",
        answer: "reduce() applies a binary function cumulatively to iterable items from left to right, reducing the entire collection to a single aggregated value.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "modules-packages",
    title: "14. Modules, Packages & Virtual Environments",
    description: "import system, sys.path, __init__.py, venv, and wheel distribution.",
    questions: [
      {
        question: "What does 'if __name__ == \"__main__\":' do?",
        answer: "It checks whether the script is being executed directly from the terminal or imported as a module into another file. The enclosed code runs only when executed directly.",
        level: "Beginner"
      },
      {
        question: "Why are virtual environments (venv) critical in Python development?",
        answer: "Virtual environments isolate package dependencies per project, preventing version conflicts between different applications and protecting the system Python installation.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "testing-debugging",
    title: "15. Testing & Debugging (pytest, unittest)",
    description: "Unit testing, fixtures, mocking, test discovery, and pdb debugger.",
    questions: [
      {
        question: "Why has pytest largely replaced unittest in the Python community?",
        answer: "pytest uses clean native Python 'assert' statements instead of verbose self.assertEqual methods, provides powerful reusable fixtures, parameterized tests, and a vast plugin ecosystem.",
        level: "Intermediate"
      },
      {
        question: "What is mocking in automated testing?",
        answer: "Mocking (via unittest.mock.patch) replaces slow, volatile, or external components (like database calls, third-party APIs, or payment gateways) with controlled simulated objects during tests.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "web-development",
    title: "16. Web Development (FastAPI, Django, Flask)",
    description: "WSGI vs ASGI, REST design, middleware, serialization, and ORM.",
    questions: [
      {
        question: "What is the difference between WSGI and ASGI?",
        answer: "WSGI (Flask, traditional Django) is a synchronous specification handling one request per worker thread. ASGI (FastAPI, modern Django) supports asynchronous event loops, WebSockets, and high-concurrency non-blocking I/O.",
        level: "Advanced"
      },
      {
        question: "Why is FastAPI currently so popular for backend APIs?",
        answer: "FastAPI is built on Starlette and Pydantic, providing automatic request validation, automatic interactive OpenAPI/Swagger docs, high performance, and native async/await support.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "databases-orm",
    title: "17. Databases & ORM (SQLAlchemy, SQLite)",
    description: "Connection pooling, parameterized queries, migrations, and N+1 query problem.",
    questions: [
      {
        question: "How do you prevent SQL Injection in Python database queries?",
        answer: "Always use parameterized queries with query placeholders (?, %s, or :param) provided by DB-API adapters, never string formatting or f-strings.",
        level: "Beginner",
        codeExample: "# Safe parameterized query:\ncursor.execute('SELECT * FROM users WHERE email = ?', (user_email,))"
      },
      {
        question: "What is the N+1 query problem in ORMs and how do you resolve it?",
        answer: "The N+1 problem occurs when an ORM issues 1 query to fetch parent records and then N additional queries for each child relation. Fix it by using eager loading (joinedload/selectinload in SQLAlchemy or select_related/prefetch_related in Django).",
        level: "Advanced"
      }
    ]
  },
  {
    id: "async-programming",
    title: "18. Asynchronous Programming (asyncio)",
    description: "Event loops, coroutines, tasks, gather, and async context managers.",
    questions: [
      {
        question: "How does asyncio achieve concurrency without multi-threading?",
        answer: "asyncio uses a single-threaded cooperative event loop. When a coroutine awaits an I/O operation (like network or disk), it yields control back to the event loop, which switches to run other pending tasks.",
        level: "Advanced"
      },
      {
        question: "What is the difference between asyncio.gather() and asyncio.wait()?",
        answer: "asyncio.gather() runs multiple awaitables concurrently and returns results in matching order. asyncio.wait() offers lower-level control, yielding sets of (done, pending) tasks based on completion conditions.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "threading-multiprocessing",
    title: "19. Multithreading vs Multiprocessing",
    description: "Thread pools, process pools, IPC, memory sharing, and CPU vs I/O bound.",
    questions: [
      {
        question: "When should you use Multithreading vs Multiprocessing?",
        answer: "Use multithreading (or asyncio) for I/O-bound tasks (network requests, database reads) where threads spend most time waiting. Use multiprocessing for CPU-bound tasks (image processing, ML inference, mathematical computations) to utilize multiple physical CPU cores.",
        level: "Advanced"
      }
    ]
  },
  {
    id: "algorithms-bigo",
    title: "20. Algorithms & Big-O in Python",
    description: "Time and space complexity of built-in operations, sorting, and binary search.",
    questions: [
      {
        question: "What algorithm does Python's sorted() and list.sort() use?",
        answer: "Python uses Timsort, a hybrid sorting algorithm derived from merge sort and insertion sort. It has O(n log n) worst/average time and O(n) best time on partially sorted data.",
        level: "Intermediate"
      },
      {
        question: "What is the time complexity of 'in' operator across Python types?",
        answer: "List/Tuple: O(n) linear search. String: O(n) substring search. Set/Dict: O(1) average constant time hash lookup.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "data-analysis",
    title: "21. Data Analysis (NumPy & Pandas)",
    description: "Vectorization, broadcasting, DataFrames, indexing, and aggregation.",
    questions: [
      {
        question: "Why is NumPy array computation faster than Python lists?",
        answer: "NumPy arrays are stored in contiguous memory blocks with homogeneous types, enabling SIMD CPU vectorization and compiled C-level loops without Python type-checking overhead.",
        level: "Intermediate"
      },
      {
        question: "What is the difference between loc and iloc in Pandas?",
        answer: "loc is label-based indexing (using row/column names), whereas iloc is integer position-based indexing (0 to length-1).",
        level: "Beginner"
      }
    ]
  },
  {
    id: "machine-learning",
    title: "22. Machine Learning Foundations",
    description: "Model training, data preprocessing, train/test split, and evaluation metrics.",
    questions: [
      {
        question: "What is the purpose of train_test_split in machine learning?",
        answer: "It splits data into separate training and testing subsets to evaluate how well a trained model generalizes to unseen real-world data, detecting overfitting.",
        level: "Beginner"
      },
      {
        question: "What is the difference between Precision and Recall?",
        answer: "Precision measures of all predicted positives, how many were truly positive. Recall measures of all actual positives, how many the model correctly detected.",
        level: "Intermediate"
      }
    ]
  },
  {
    id: "scraping-automation",
    title: "23. Web Scraping & Automation",
    description: "BeautifulSoup, Selenium, headless browsers, robots.txt, and rate limiting.",
    questions: [
      {
        question: "When should you choose BeautifulSoup vs Selenium/Playwright?",
        answer: "Use BeautifulSoup for static HTML pages where content is returned directly by HTTP GET. Use Selenium or Playwright when pages require JavaScript execution to render content dynamically.",
        level: "Intermediate"
      },
      {
        question: "How do you scrape ethically?",
        answer: "Respect robots.txt, implement rate-limiting delays between requests, cache responses, identify requests with a custom User-Agent, and do not bypass paywalls or authentication without permission.",
        level: "Beginner"
      }
    ]
  },
  {
    id: "system-design",
    title: "24. System Design & Production Best Practices",
    description: "Dockerization, 12-factor apps, logging, environment configuration, and CI/CD.",
    questions: [
      {
        question: "What are the key best practices for deploying Python services to production?",
        answer: "1) Never hardcode credentials; load from environment variables. 2) Containerize with multi-stage Dockerfiles. 3) Use production ASGI/WSGI servers like Gunicorn or Uvicorn behind a reverse proxy (Nginx). 4) Implement structured JSON logging. 5) Run automated tests in CI/CD pipelines.",
        level: "Advanced"
      }
    ]
  }
];

// ALL 30 GUIDED PYTHON PORTFOLIO PROJECTS
export const EXTENDED_PYTHON_PORTFOLIO_PROJECTS: PythonProjectItem[] = [
  // BEGINNER TIER (1 - 10)
  {
    id: "proj-1",
    number: 1,
    title: "Hello World & Profile Generator",
    tier: "Beginner",
    duration: "10 min",
    objective: "Master basic console output, variable assignment, and f-string interpolation.",
    requiredKnowledge: ["print()", "Variables", "F-strings"],
    features: ["Interactive prompt", "Formatted border card", "Dynamic calculation"],
    code: `# Project 1: User Profile Generator
name = "Ravi"
role = "Python Developer"
experience_yrs = 2
streak_days = 15

print("=" * 35)
print(f"  DEVELOPER PROFILE: {name.upper()}")
print(f"  Target Role:       {role}")
print(f"  Experience:        {experience_yrs} Year(s)")
print(f"  Learning Streak:   {streak_days} Days 🔥")
print("=" * 35)`,
    expectedOutput: `===================================
  DEVELOPER PROFILE: RAVI
  Target Role:       Python Developer
  Experience:        2 Year(s)
  Learning Streak:   15 Days 🔥
===================================`,
    testingInstructions: "Run script and verify name is formatted in uppercase.",
    commonErrorsAndFixes: "Missing quotes around text strings causes NameError.",
    possibleImprovements: "Add dynamic input() prompts for user input."
  },
  {
    id: "proj-2",
    number: 2,
    title: "Simple CLI Calculator",
    tier: "Beginner",
    duration: "15 min",
    objective: "Implement basic arithmetic operations (+, -, *, /) with division by zero validation.",
    requiredKnowledge: ["Functions", "if-elif-else", "Float conversion"],
    features: ["Four arithmetic operations", "Zero division protection", "Formatted output"],
    code: `def calculate(a, b, op):
    if op == '+': return a + b
    if op == '-': return a - b
    if op == '*': return a * b
    if op == '/': return a / b if b != 0 else 'Error: Zero division'
    return 'Invalid operator'

print("15 + 4 =", calculate(15, 4, '+'))
print("20 / 0 =", calculate(20, 0, '/'))
print("12 * 8 =", calculate(12, 8, '*'))`,
    expectedOutput: `15 + 4 = 19
20 / 0 = Error: Zero division
12 * 8 = 96`,
    testingInstructions: "Test valid operations and test zero division.",
    commonErrorsAndFixes: "Dividing by zero raises ZeroDivisionError; guard with if b != 0.",
    possibleImprovements: "Add exponentiation (**) and modulo (%)."
  },
  {
    id: "proj-3",
    number: 3,
    title: "Number Guessing Game",
    tier: "Beginner",
    duration: "20 min",
    objective: "Use random numbers and while loops to implement a guessing game with higher/lower hints.",
    requiredKnowledge: ["random module", "while loops", "Comparison operators"],
    features: ["Random target generation", "Hint feedback", "Attempt counter"],
    code: `target = 42
guesses = [20, 50, 42]
for idx, g in enumerate(guesses, 1):
    if g == target:
        print(f"Attempt {idx}: Correct! {g} is the secret number.")
        break
    elif g < target:
        print(f"Attempt {idx}: {g} is too low!")
    else:
        print(f"Attempt {idx}: {g} is too high!")`,
    expectedOutput: `Attempt 1: 20 is too low!
Attempt 2: 50 is too high!
Attempt 3: Correct! 42 is the secret number.`,
    testingInstructions: "Simulate guesses below, above, and matching the target.",
    commonErrorsAndFixes: "Infinite loops occur if guess variable is not updated inside while.",
    possibleImprovements: "Add a maximum attempts limit."
  },
  {
    id: "proj-4",
    number: 4,
    title: "Even or Odd & Divisibility Checker",
    tier: "Beginner",
    duration: "10 min",
    objective: "Check numbers for parity and multi-factor divisibility using modulo arithmetic.",
    requiredKnowledge: ["Modulo (%) operator", "if-else"],
    features: ["Even/odd determination", "Divisibility by 3 & 5 check"],
    code: `def check_number(n):
    parity = "Even" if n % 2 == 0 else "Odd"
    div3 = n % 3 == 0
    div5 = n % 5 == 0
    return f"{n}: {parity} | Divisible by 3: {div3} | Divisible by 5: {div5}"

for num in [15, 22, 9]:
    print(check_number(num))`,
    expectedOutput: `15: Odd | Divisible by 3: True | Divisible by 5: True
22: Even | Divisible by 3: False | Divisible by 5: False
9: Odd | Divisible by 3: True | Divisible by 5: False`,
    testingInstructions: "Test with negative numbers and zero.",
    commonErrorsAndFixes: "0 is even (0 % 2 == 0).",
    possibleImprovements: "Check against a list of arbitrary divisors."
  },
  {
    id: "proj-5",
    number: 5,
    title: "Multiplication Table Generator",
    tier: "Beginner",
    duration: "12 min",
    objective: "Format a clean mathematical multiplication grid using nested loops and string padding.",
    requiredKnowledge: ["for loops", "range()", "f-string formatting"],
    features: ["Clean column alignment", "Configurable range"],
    code: `number = 7
print(f"Multiplication Table for {number}:")
for i in range(1, 11):
    print(f"{number:2d} x {i:2d} = {number * i:3d}")`,
    expectedOutput: `Multiplication Table for 7:
 7 x  1 =   7
 7 x  2 =  14
 7 x  3 =  21
 7 x  4 =  28
 7 x  5 =  35
 7 x  6 =  42
 7 x  7 =  49
 7 x  8 =  56
 7 x  9 =  63
 7 x 10 =  70`,
    testingInstructions: "Run with different multipliers.",
    commonErrorsAndFixes: "range(1, 10) stops at 9; use range(1, 11).",
    possibleImprovements: "Print a complete 10x10 matrix."
  },
  {
    id: "proj-6",
    number: 6,
    title: "Celsius to Fahrenheit & Unit Converter",
    tier: "Beginner",
    duration: "15 min",
    objective: "Convert between metric and imperial temperature scales with precision rounding.",
    requiredKnowledge: ["Arithmetic", "Functions", "Round function"],
    features: ["C to F conversion", "F to C conversion", "Absolute zero check"],
    code: `def c_to_f(c): return round((c * 9/5) + 32, 2)
def f_to_c(f): return round((f - 32) * 5/9, 2)

print("100°C in Fahrenheit:", c_to_f(100))
print("0°C in Fahrenheit:  ", c_to_f(0))
print("98.6°F in Celsius:  ", f_to_c(98.6))`,
    expectedOutput: `100°C in Fahrenheit: 212.0
0°C in Fahrenheit:   32.0
98.6°F in Celsius:   37.0`,
    testingInstructions: "Verify 100C converts to 212F.",
    commonErrorsAndFixes: "Integer division in older Python versions; use 9/5 float division.",
    possibleImprovements: "Add Kelvin support."
  },
  {
    id: "proj-7",
    number: 7,
    title: "Password Strength Checker",
    tier: "Beginner",
    duration: "18 min",
    objective: "Audit password complexity based on length, digits, uppercase, and special symbols.",
    requiredKnowledge: ["String methods", "any() generator", "Conditions"],
    features: ["Length validation", "Character diversity tests", "Score grading"],
    code: `def check_password_strength(pwd):
    length_ok = len(pwd) >= 8
    has_upper = any(c.isupper() for c in pwd)
    has_lower = any(c.islower() for c in pwd)
    has_digit = any(c.isdigit() for c in pwd)
    has_spec = any(c in "!@#$%^&*" for c in pwd)

    score = sum([length_ok, has_upper, has_lower, has_digit, has_spec])
    if score == 5: return "Strong"
    if score >= 3: return "Moderate"
    return "Weak"

print("Secret123! ->", check_password_strength("Secret123!"))
print("password   ->", check_password_strength("password"))`,
    expectedOutput: `Secret123! -> Strong
password   -> Weak`,
    testingInstructions: "Test with varied password combinations.",
    commonErrorsAndFixes: "Forgetting special character checks.",
    possibleImprovements: "Check against common leaked password lists."
  },
  {
    id: "proj-8",
    number: 8,
    title: "Rock, Paper, Scissors Game",
    tier: "Beginner",
    duration: "20 min",
    objective: "Simulate game logic with dictionary mapping and random opponent choices.",
    requiredKnowledge: ["Dictionaries", "Conditions", "Game loops"],
    features: ["Round evaluation", "Score tracking", "Win/loss/draw detection"],
    code: `rules = {"rock": "scissors", "scissors": "paper", "paper": "rock"}

def play_round(user, computer):
    if user == computer:
        return "Draw"
    elif rules[user] == computer:
        return "User Wins!"
    else:
        return "Computer Wins!"

print("User: rock vs Comp: scissors ->", play_round("rock", "scissors"))
print("User: paper vs Comp: scissors ->", play_round("paper", "scissors"))`,
    expectedOutput: `User: rock vs Comp: scissors -> User Wins!
User: paper vs Comp: scissors -> Computer Wins!`,
    testingInstructions: "Verify all 9 possible matchup outcomes.",
    commonErrorsAndFixes: "Mismatching lowercase inputs.",
    possibleImprovements: "Add best of 3 rounds tracker."
  },
  {
    id: "proj-9",
    number: 9,
    title: "Word and Character Counter",
    tier: "Beginner",
    duration: "15 min",
    objective: "Analyze text statistics: word count, letter count, spaces, and reading time.",
    requiredKnowledge: ["String split()", "len()", "Math"],
    features: ["Word count", "Character count with/without spaces", "Est. reading time"],
    code: `text = "Python is a powerful language used for web dev, data science, and AI."
words = text.split()
char_count = len(text)
char_no_space = len(text.replace(" ", ""))
wpm = 200
est_time_sec = round((len(words) / wpm) * 60, 2)

print(f"Total Words: {len(words)}")
print(f"Total Characters: {char_count}")
print(f"Characters (no spaces): {char_no_space}")
print(f"Est. Reading Time: {est_time_sec} seconds")`,
    expectedOutput: `Total Words: 12
Total Characters: 71
Characters (no spaces): 60
Est. Reading Time: 3.6 seconds`,
    testingInstructions: "Test with multi-paragraph text strings.",
    commonErrorsAndFixes: "Using split(' ') produces empty strings for multiple consecutive spaces; use split() without arguments.",
    possibleImprovements: "Calculate flesch reading ease score."
  },
  {
    id: "proj-10",
    number: 10,
    title: "Contact Book CLI",
    tier: "Beginner",
    duration: "25 min",
    objective: "Store, retrieve, update, and search contacts using a dictionary structure.",
    requiredKnowledge: ["Dictionaries", "CRUD pattern", "Searching"],
    features: ["Add contact", "Search by name", "List all", "Delete contact"],
    code: `contacts = {}

def add_contact(name, phone, email):
    contacts[name.lower()] = {"name": name, "phone": phone, "email": email}

add_contact("Priya Sharma", "9876543210", "priya@example.com")
add_contact("Alex Miller", "555-0199", "alex@example.com")

def find_contact(name):
    return contacts.get(name.lower(), "Contact not found.")

print("Lookup Priya:", find_contact("Priya"))
print("Total contacts:", len(contacts))`,
    expectedOutput: `Lookup Priya: {'name': 'Priya Sharma', 'phone': '9876543210', 'email': 'priya@example.com'}
Total contacts: 2`,
    testingInstructions: "Add contacts and test case-insensitive lookup.",
    commonErrorsAndFixes: "KeyError when looking up missing keys; use .get().",
    possibleImprovements: "Save contacts to a CSV file."
  },

  // INTERMEDIATE TIER (11 - 20)
  {
    id: "proj-11",
    number: 11,
    title: "Student Grade Management System",
    tier: "Intermediate",
    duration: "30 min",
    objective: "Calculate student averages, assign letter grades, and identify top performers.",
    requiredKnowledge: ["Lists of dictionaries", "Aggregation", "Sorting"],
    features: ["Score averaging", "Letter grade mapping", "Class rankings"],
    code: `students = [
    {"name": "Ananya", "scores": [95, 88, 92]},
    {"name": "David", "scores": [72, 68, 75]},
    {"name": "Zoe", "scores": [89, 91, 94]}
]

for s in students:
    avg = sum(s["scores"]) / len(s["scores"])
    s["avg"] = round(avg, 1)
    s["grade"] = "A" if avg >= 90 else "B" if avg >= 80 else "C"

ranked = sorted(students, key=lambda x: x["avg"], reverse=True)
for rank, st in enumerate(ranked, 1):
    print(f"#{rank} {st['name']}: Avg {st['avg']} ({st['grade']})")`,
    expectedOutput: `#1 Zoe: Avg 91.3 (A)
#2 Ananya: Avg 91.7 (A)
#3 David: Avg 71.7 (C)`,
    testingInstructions: "Verify average calculation and correct letter grade assignment.",
    commonErrorsAndFixes: "ZeroDivisionError if scores list is empty.",
    possibleImprovements: "Export grade card as PDF or text file."
  },
  {
    id: "proj-12",
    number: 12,
    title: "To-Do List Application with File Persistence (JSON)",
    tier: "Intermediate",
    duration: "30 min",
    objective: "Manage task lists with completion status and JSON serialization.",
    requiredKnowledge: ["json module", "List operations", "CRUD"],
    features: ["Add task", "Mark completed", "JSON serialization", "Filtering"],
    code: `import json

tasks = [
    {"id": 1, "title": "Complete Python Module 6", "done": True},
    {"id": 2, "title": "Build Portfolio Project", "done": False}
]

serialized = json.dumps(tasks, indent=2)
print("Persisted JSON:")
print(serialized)
pending = [t["title"] for t in tasks if not t["done"]]
print(f"Pending tasks ({len(pending)}):", pending)`,
    expectedOutput: `Persisted JSON:
[
  {
    "id": 1,
    "title": "Complete Python Module 6",
    "done": true
  },
  {
    "id": 2,
    "title": "Build Portfolio Project",
    "done": false
  }
]
Pending tasks (1): ['Build Portfolio Project']`,
    testingInstructions: "Add, complete, and dump tasks to JSON.",
    commonErrorsAndFixes: "JSON decode error on corrupt files; use try-except.",
    possibleImprovements: "Add due dates and priority tags."
  },
  {
    id: "proj-13",
    number: 13,
    title: "CLI Expense Tracker & Financial Analyzer",
    tier: "Intermediate",
    duration: "35 min",
    objective: "Build an object-oriented transaction manager with categories and spending breakdown.",
    requiredKnowledge: ["Classes", "Dictionaries", "Generators"],
    features: ["Add expense", "Category breakdown", "Total sum"],
    code: `class ExpenseTracker:
    def __init__(self):
        self.expenses = []

    def add(self, title, amount, category):
        self.expenses.append({"title": title, "amount": float(amount), "category": category})

    def total(self):
        return sum(e["amount"] for e in self.expenses)

    def by_category(self):
        breakdown = {}
        for e in self.expenses:
            breakdown[e["category"]] = breakdown.get(e["category"], 0.0) + e["amount"]
        return breakdown

t = ExpenseTracker()
t.add("Web Hosting", 29.99, "Tech")
t.add("Coffee", 4.50, "Food")
t.add("Python Book", 45.00, "Education")

print(f"Total: USD {t.total():.2f}")
for cat, amt in t.by_category().items():
    print(f"  • {cat}: USD {amt:.2f}")`,
    expectedOutput: `Total: USD 79.49
  • Tech: USD 29.99
  • Food: USD 4.50
  • Education: USD 45.00`,
    testingInstructions: "Add expenses across different categories and verify total.",
    commonErrorsAndFixes: "Float precision issues; round output to 2 decimals.",
    possibleImprovements: "Save monthly budgets."
  },
  {
    id: "proj-14",
    number: 14,
    title: "Bank Account Simulation (OOP & Transactions)",
    tier: "Intermediate",
    duration: "35 min",
    objective: "Implement encapsulation, deposit/withdrawal validation, and audit logs.",
    requiredKnowledge: ["OOP", "Private attributes", "Exceptions"],
    features: ["Deposit & withdraw", "Overdraft protection", "Transaction ledger"],
    code: `class BankAccount:
    def __init__(self, owner, balance=0.0):
        self.owner = owner
        self._balance = max(0.0, float(balance))
        self.ledger = []

    def deposit(self, amt):
        if amt > 0:
            self._balance += amt
            self.ledger.append(f"+USD {amt:.2f} Deposit")

    def withdraw(self, amt):
        if 0 < amt <= self._balance:
            self._balance -= amt
            self.ledger.append(f"-USD {amt:.2f} Withdrawal")
            return True
        return False

acc = BankAccount("Elena", 100.0)
acc.deposit(50.0)
acc.withdraw(30.0)
print(f"Balance: USD {acc._balance:.2f}")
print("Transactions:", acc.ledger)`,
    expectedOutput: `Balance: $120.00
Transactions: ['+$50.00 Deposit', '-$30.00 Withdrawal']`,
    testingInstructions: "Attempt negative deposits and over-withdrawals.",
    commonErrorsAndFixes: "Directly modifying balance bypassing validation.",
    possibleImprovements: "Add interest calculation method."
  },
  {
    id: "proj-15",
    number: 15,
    title: "Quiz Application with Scoreboard",
    tier: "Intermediate",
    duration: "25 min",
    objective: "Interactive multiple-choice quiz engine with score calculation.",
    requiredKnowledge: ["Lists of dictionaries", "Loop control", "Conditionals"],
    features: ["Question bank", "Instant feedback", "Final score percentage"],
    code: `quiz_questions = [
    {"q": "What is Python?", "options": ["Animal", "Language", "Car"], "ans": 1},
    {"q": "Mutable type?", "options": ["tuple", "str", "list"], "ans": 2}
]

score = 0
for q in quiz_questions:
    correct_idx = q["ans"]
    user_choice = correct_idx  # simulated correct answer
    if user_choice == correct_idx:
        score += 1

pct = (score / len(quiz_questions)) * 100
print(f"Final Score: {score}/{len(quiz_questions)} ({pct:.0f}%)")`,
    expectedOutput: `Final Score: 2/2 (100%)`,
    testingInstructions: "Simulate correct and incorrect answer selections.",
    commonErrorsAndFixes: "1-based vs 0-based option index mismatch.",
    possibleImprovements: "Add countdown timer per question."
  },
  {
    id: "proj-16",
    number: 16,
    title: "Text-Based Adventure Game",
    tier: "Intermediate",
    duration: "30 min",
    objective: "Interactive choice branching RPG using state dictionaries and functions.",
    requiredKnowledge: ["State management", "Function mapping", "While loops"],
    features: ["Branching storyline", "Health/inventory tracker", "Multiple endings"],
    code: `player = {"name": "Hero", "hp": 100, "inventory": []}

def enter_dungeon():
    print(f"{player['name']} enters the ancient chamber.")
    player["inventory"].append("Torch")
    player["hp"] -= 10
    print(f"Torch acquired! HP remaining: {player['hp']}")

enter_dungeon()`,
    expectedOutput: `Hero enters the ancient chamber.
Torch acquired! HP remaining: 90`,
    testingInstructions: "Run choice paths and verify inventory updates.",
    commonErrorsAndFixes: "Player state resets if re-initialized inside loop.",
    possibleImprovements: "Add combat system with enemy rolls."
  },
  {
    id: "proj-17",
    number: 17,
    title: "Password Generator with Custom Criteria",
    tier: "Intermediate",
    duration: "20 min",
    objective: "Generate cryptographically secure random passwords based on user rules.",
    requiredKnowledge: ["string module", "secrets / random", "List shuffling"],
    features: ["Custom length", "Toggle numbers/symbols", "Guaranteed diversity"],
    code: `import random
import string

def make_password(length=12):
    chars = string.ascii_letters + string.digits + "!@#$%^&*"
    pwd = "".join(random.choice(chars) for _ in range(length))
    return pwd

print("Generated Secure Password:", make_password(16))`,
    expectedOutput: `Generated Secure Password: [16-character complex string]`,
    testingInstructions: "Generate 5 passwords and check character mix.",
    commonErrorsAndFixes: "Using predictable seeds in security code; prefer 'secrets' module.",
    possibleImprovements: "Add copy to clipboard support."
  },
  {
    id: "proj-18",
    number: 18,
    title: "Currency Converter with Live Rates Simulation",
    tier: "Intermediate",
    duration: "25 min",
    objective: "Calculate foreign exchange rates with conversion fees and caching.",
    requiredKnowledge: ["Dictionaries", "Functions", "Error handling"],
    features: ["Multi-currency conversion", "Fee computation", "Rate matrix"],
    code: `rates = {"USD": 1.0, "EUR": 0.92, "INR": 86.5, "GBP": 0.79}

def convert(amount, from_cur, to_cur):
    usd_val = amount / rates[from_cur]
    return round(usd_val * rates[to_cur], 2)

print("100 USD to INR:", convert(100, "USD", "INR"))
print("50 EUR to USD: ", convert(50, "EUR", "USD"))`,
    expectedOutput: `100 USD to INR: 8650.0
50 EUR to USD:  54.35`,
    testingInstructions: "Convert across EUR, USD, INR, GBP.",
    commonErrorsAndFixes: "KeyError for unlisted currencies.",
    possibleImprovements: "Fetch live exchange rates from public API."
  },
  {
    id: "proj-19",
    number: 19,
    title: "Tic-Tac-Toe Game (2-Player Console)",
    tier: "Intermediate",
    duration: "35 min",
    objective: "Implement a 3x3 game board matrix, turn switching, and win condition check.",
    requiredKnowledge: ["2D Lists", "Grid coordinates", "Game logic"],
    features: ["Board display", "Win detection (rows, cols, diagonals)", "Draw detection"],
    code: `board = [[" "]*3 for _ in range(3)]
board[0][0] = "X"
board[1][1] = "O"
board[2][2] = "X"

for row in board:
    print(" | ".join(row))`,
    expectedOutput: `X |   |  
  | O |  
  |   | X`,
    testingInstructions: "Check diagonal win condition.",
    commonErrorsAndFixes: "Shallow copying nested list rows causes board state corruption.",
    possibleImprovements: "Add minimax AI bot opponent."
  },
  {
    id: "proj-20",
    number: 20,
    title: "File Organizer Script",
    tier: "Intermediate",
    duration: "30 min",
    objective: "Automate desktop file cleanup by sorting files into folders by extension.",
    requiredKnowledge: ["os / pathlib", "Dictionaries", "File moving"],
    features: ["Extension detection", "Directory creation", "Batch organization"],
    code: `files = ["resume.pdf", "photo.png", "budget.xlsx", "report.pdf"]
categories = {"pdf": "Documents", "png": "Images", "xlsx": "Spreadsheets"}

plan = {}
for f in files:
    ext = f.split(".")[-1]
    folder = categories.get(ext, "Others")
    plan.setdefault(folder, []).append(f)

for folder, items in plan.items():
    print(f"Folder [{folder}]: {items}")`,
    expectedOutput: `Folder [Documents]: ['resume.pdf', 'report.pdf']
Folder [Images]: ['photo.png']
Folder [Spreadsheets]: ['budget.xlsx']`,
    testingInstructions: "Run on mixed file names and verify folder assignments.",
    commonErrorsAndFixes: "Files without extension crash on split; check for dot in filename.",
    possibleImprovements: "Add undo organization log."
  },

  // ADVANCED TIER (21 - 30)
  {
    id: "proj-21",
    number: 21,
    title: "Web Scraper with Beautiful Soup",
    tier: "Advanced",
    duration: "40 min",
    objective: "Extract structured article headlines, links, and prices from HTML markup.",
    requiredKnowledge: ["HTML parsing", "CSS selectors", "Data extraction"],
    features: ["Tag parsing", "Attribute extraction", "Clean CSV output"],
    code: `# Web Scraping Pattern
html_snippet = """<div class='article'><h2>Python 3.14 Released</h2><span class='date'>2025</span></div>"""
title = html_snippet.split("<h2>")[1].split("</h2>")[0]
date = html_snippet.split("<span class='date'>")[1].split("</span>")[0]
print(f"Scraped Article: '{title}' ({date})")`,
    expectedOutput: `Scraped Article: 'Python 3.14 Released' (2025)`,
    testingInstructions: "Verify tag extraction logic.",
    commonErrorsAndFixes: "Website structure changes breaking brittle index lookups.",
    possibleImprovements: "Add rate-limiting and rotating user agents."
  },
  {
    id: "proj-22",
    number: 22,
    title: "FastAPI REST API Microservice",
    tier: "Advanced",
    duration: "45 min",
    objective: "Build a production-grade CRUD microservice with path parameters and JSON responses.",
    requiredKnowledge: ["REST APIs", "HTTP status codes", "FastAPI / Pydantic"],
    features: ["GET /items", "POST /items", "404 Error Handling"],
    code: `# FastAPI REST Pattern
database = [{"id": 1, "title": "Learn Python", "done": True}]

def get_item(item_id):
    for item in database:
        if item["id"] == item_id:
            return {"status": 200, "data": item}
    return {"status": 404, "error": "Item not found"}

print(get_item(1))
print(get_item(99))`,
    expectedOutput: `{'status': 200, 'data': {'id': 1, 'title': 'Learn Python', 'done': True}}
{'status': 404, 'error': 'Item not found'}`,
    testingInstructions: "Test existing and non-existing IDs.",
    commonErrorsAndFixes: "Returning 200 status on missing resources.",
    possibleImprovements: "Connect to real SQLite database."
  },
  {
    id: "proj-23",
    number: 23,
    title: "SQLite Database Manager CLI",
    tier: "Advanced",
    duration: "40 min",
    objective: "Execute parameterized SQL CRUD operations using Python's built-in sqlite3 module.",
    requiredKnowledge: ["sqlite3", "Parameterized SQL", "Transactions"],
    features: ["Table creation", "INSERT records", "SELECT with parameters", "COMMIT/ROLLBACK"],
    code: `import sqlite3

con = sqlite3.connect(":memory:")
cur = con.cursor()
cur.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)")
cur.execute("INSERT INTO users (name, email) VALUES (?, ?)", ("Sita", "sita@example.com"))
con.commit()

cur.execute("SELECT * FROM users WHERE name = ?", ("Sita",))
row = cur.fetchone()
print("Retrieved User:", row)
con.close()`,
    expectedOutput: `Retrieved User: (1, 'Sita', 'sita@example.com')`,
    testingInstructions: "Verify insertion and parameterized retrieval in memory.",
    commonErrorsAndFixes: "Using string formatting instead of parameterized queries.",
    possibleImprovements: "Add database connection pool."
  },
  {
    id: "proj-24",
    number: 24,
    title: "Weather App (API Client Simulation)",
    tier: "Advanced",
    duration: "35 min",
    objective: "Consume public REST APIs, handle HTTP headers, and format weather telemetry.",
    requiredKnowledge: ["requests / urllib", "JSON parsing", "Error codes"],
    features: ["API query", "Temperature conversion", "Forecast summary"],
    code: `mock_api_response = {
    "city": "Bengaluru",
    "temp_c": 26.5,
    "humidity": 60,
    "condition": "Partly Cloudy"
}

print(f"Weather Report: {mock_api_response['city']}")
print(f"Temperature: {mock_api_response['temp_c']}°C")
print(f"Conditions:  {mock_api_response['condition']}")`,
    expectedOutput: `Weather Report: Bengaluru
Temperature: 26.5°C
Conditions:  Partly Cloudy`,
    testingInstructions: "Verify dictionary telemetry formatting.",
    commonErrorsAndFixes: "Crashing on HTTP 500 responses without status check.",
    possibleImprovements: "Add 5-day weather forecast chart."
  },
  {
    id: "proj-25",
    number: 25,
    title: "Automated Email Sender Script",
    tier: "Advanced",
    duration: "35 min",
    objective: "Send formatted HTML notification emails using smtplib and email.message.",
    requiredKnowledge: ["smtplib", "MIME messages", "Environment variables"],
    features: ["HTML body formatting", "Attachment support", "Secure TLS"],
    code: `def build_email_payload(recipient, subject, body):
    return {
        "to": recipient,
        "subject": subject,
        "body_preview": body[:40] + "...",
        "status": "QUEUED_FOR_TLS"
    }

email = build_email_payload("student@codefromzero.com", "Course Completion Certificate", "Congratulations on finishing Python!")
print("Email Dispatch:", email)`,
    expectedOutput: `Email Dispatch: {'to': 'student@codefromzero.com', 'subject': 'Course Completion Certificate', 'body_preview': 'Congratulations on finishing Python!...', 'status': 'QUEUED_FOR_TLS'}`,
    testingInstructions: "Check email dictionary validation.",
    commonErrorsAndFixes: "Hardcoding email passwords instead of using App Passwords or ENV.",
    possibleImprovements: "Add template replacement engine."
  },
  {
    id: "proj-26",
    number: 26,
    title: "Markdown to HTML Static Site Converter",
    tier: "Advanced",
    duration: "40 min",
    objective: "Parse markdown headers, links, and bold text into valid HTML5 markup.",
    requiredKnowledge: ["String parsing", "Regular expressions", "File I/O"],
    features: ["# Heading conversion", "**bold** parsing", "[link](url) syntax"],
    code: `def md_to_html(md_line):
    if md_line.startswith("# "):
        return f"<h1>{md_line[2:]}</h1>"
    if md_line.startswith("## "):
        return f"<h2>{md_line[3:]}</h2>"
    return f"<p>{md_line}</p>"

print(md_to_html("# Code From Zero"))
print(md_to_html("## Python Masterclass"))
print(md_to_html("Learn clean code from scratch."))`,
    expectedOutput: `<h1>Code From Zero</h1>
<h2>Python Masterclass</h2>
<p>Learn clean code from scratch.</p>`,
    testingInstructions: "Test headers and standard paragraphs.",
    commonErrorsAndFixes: "Forgetting to escape malicious HTML entities.",
    possibleImprovements: "Support fenced code blocks with syntax highlighting."
  },
  {
    id: "proj-27",
    number: 27,
    title: "URL Shortener Service",
    tier: "Advanced",
    duration: "40 min",
    objective: "Generate compact base62 hash keys for long URLs with click analytics.",
    requiredKnowledge: ["Hashing", "Base62 encoding", "Dictionaries"],
    features: ["Shorten URL", "Redirect lookup", "Click counter"],
    code: `import hashlib

url_db = {}
def shorten(url):
    code = hashlib.md5(url.encode()).hexdigest()[:6]
    url_db[code] = {"url": url, "clicks": 0}
    return f"https://cfz.io/{code}"

short_link = shorten("https://codefromzero.com/tutorials/python")
print("Shortened:", short_link)
print("Store:", url_db)`,
    expectedOutput: `Shortened: https://cfz.io/852656
Store: {'852656': {'url': 'https://codefromzero.com/tutorials/python', 'clicks': 0}}`,
    testingInstructions: "Verify deterministic hash generation and redirect lookup.",
    commonErrorsAndFixes: "Hash collisions on truncated keys.",
    possibleImprovements: "Add expiration timestamp per URL."
  },
  {
    id: "proj-28",
    number: 28,
    title: "Image Processing Script (Pillow Pipeline)",
    tier: "Advanced",
    duration: "40 min",
    objective: "Batch resize, watermark, and convert image formats for web optimization.",
    requiredKnowledge: ["Image processing concepts", "Path handling", "Batch processing"],
    features: ["Dimension resizing", "Format conversion (PNG to WebP)", "Watermark stamping"],
    code: `# Image Pipeline Simulation
def process_image(filename, target_width=800):
    output_name = filename.replace(".png", ".webp")
    return {
        "original": filename,
        "processed": output_name,
        "width": target_width,
        "compression": "WebP Lossy 85%"
    }

print(process_image("banner.png", 1200))`,
    expectedOutput: `{'original': 'banner.png', 'processed': 'banner.webp', 'width': 1200, 'compression': 'WebP Lossy 85%'}`,
    testingInstructions: "Verify WebP extension conversion and width specification.",
    commonErrorsAndFixes: "Aspect ratio distortion if height is not calculated proportionally.",
    possibleImprovements: "Add EXIF metadata stripper for privacy."
  },
  {
    id: "proj-29",
    number: 29,
    title: "Data Analysis Dashboard with Pandas",
    tier: "Advanced",
    duration: "50 min",
    objective: "Analyze CSV datasets, calculate grouped statistics, and identify trends.",
    requiredKnowledge: ["Pandas / NumPy concepts", "Aggregation", "Data cleaning"],
    features: ["Missing value imputation", "Groupby aggregations", "Summary telemetry"],
    code: `# Data Analysis Pipeline
data = [
    {"dept": "Engineering", "salary": 95000},
    {"dept": "Design", "salary": 80000},
    {"dept": "Engineering", "salary": 110000},
    {"dept": "Design", "salary": 85000}
]

dept_totals = {}
dept_counts = {}
for row in data:
    d = row["dept"]
    dept_totals[d] = dept_totals.get(d, 0) + row["salary"]
    dept_counts[d] = dept_counts.get(d, 0) + 1

for d in dept_totals:
    avg = dept_totals[d] / dept_counts[d]
    print(f"Dept: {d:12s} | Average Salary: USD {avg:,.2f}")`,
    expectedOutput: `Dept: Engineering  | Average Salary: USD 102,500.00
Dept: Design       | Average Salary: USD 82,500.00`,
    testingInstructions: "Compute mean, sum, and count per department.",
    commonErrorsAndFixes: "Dividing by zero when grouping empty categories.",
    possibleImprovements: "Render output with Matplotlib or ASCII charts."
  },
  {
    id: "proj-30",
    number: 30,
    title: "AI-Powered Question & Answer Assistant",
    tier: "Advanced",
    duration: "60 min",
    objective: "Build an automated coding Q&A client connecting to Google Gemini AI API.",
    requiredKnowledge: ["REST APIs", "Environment Variables", "Async or Requests"],
    features: ["API Key configuration", "Defensive error handling", "Clean markdown output"],
    code: `# Gemini Q&A Client Pattern
def query_ai_mentor(question, api_key_configured=True):
    if not api_key_configured:
        return "Demo Mode: Set GEMINI_API_KEY in environment to activate live responses."
    return f"Code From Zero AI: Explanation for '{question}' generated successfully with full code samples."

print(query_ai_mentor("How do closures work in Python?"))`,
    expectedOutput: `Code From Zero AI: Explanation for 'How do closures work in Python?' generated successfully with full code samples.`,
    testingInstructions: "Verify fallback when key is not configured.",
    commonErrorsAndFixes: "Never hardcode API keys; load via os.environ.",
    possibleImprovements: "Stream tokens in real-time."
  }
];
