import { TutorialLesson } from '../types';

export const PYTHON_MODULES_15_TO_24_LESSONS: TutorialLesson[] = [
  // MODULE 15: Advanced Python
  {
    id: "py-mod15-1",
    title: "15. Advanced Python: Iterators, Generators, Decorators & Type Hints",
    section: "Module 15: Advanced Python",
    moduleNumber: 15,
    moduleTitle: "Advanced Python",
    difficulty: "Advanced",
    duration: "16 min",
    keyConcepts: ["Generators", "yield", "Iterators", "Decorators", "Context Managers", "Type Hints", "typing", "GIL"],
    meaning: "Advanced Python covers metaprogramming, lazy evaluation, custom execution hooks, and type systems that transform scripts into scalable production software.",
    definition: "Generators use `yield` to implement the iterator protocol lazily without consuming memory. Decorators wrap and modify functions dynamically at runtime using closures. Type hints enable static analysis and IDE autocompletion via PEP 484.",
    whyUseIt: "Generators process multi-gigabyte data files on laptops without out-of-memory crashes. Decorators eliminate repetitive logging, timing, and authentication logic. Type hints reduce production bugs by 30%.",
    introduction: "In this lesson, you will master custom iterators, generator functions with yield, writing and stacking function decorators, custom context managers, and type annotations with the typing module.",
    simpleExplanation: "A regular function is like buying an entire 50-pound sack of flour at once (heavy in memory). A generator function is like an automatic dispenser that pours one scoop of flour only when you hold your bowl under it (conserves memory).",
    syntax: "# Generator Function with yield:\ndef countdown(n: int):\n    while n > 0:\n        yield n\n        n -= 1\n\n# Custom Decorator:\ndef timer_decorator(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__} took {time.perf_counter() - start:.4f}s\")\n        return result\n    return wrapper",
    codeExample: `# Advanced Python: Generators, Decorators, and Type Hints
from typing import List, Dict, Generator
import time

# 1. Timing Decorator
def benchmark(func):
    def wrapper(*args, **kwargs):
        t0 = time.perf_counter()
        res = func(*args, **kwargs)
        duration = time.perf_counter() - t0
        print(f"[BENCHMARK] {func.__name__} executed in {duration:.6f}s")
        return res
    return wrapper

# 2. Lazy Generator Pipeline
def stream_large_dataset(limit: int) -> Generator[int, None, None]:
    for i in range(1, limit + 1):
        if i % 3 == 0:
            yield i * 10

# 3. Decorated Function with Type Hints
@benchmark
def process_data(limit: int) -> List[int]:
    # Consume generator lazily
    return list(stream_large_dataset(limit))

result = process_data(15)
print("Processed Stream Output:", result)`,
    codeExplanation: [
      "@benchmark: Syntactic sugar for process_data = benchmark(process_data).",
      "wrapper(*args, **kwargs): Closure that wraps execution and measures elapsed time.",
      "yield i * 10: Pauses the generator function and emits a value; execution resumes on next().",
      "Generator[int, None, None]: PEP 484 type annotation for generator return types.",
      "list(stream_large_dataset(limit)): Consumes the generator iterator into a Python list."
    ],
    expectedOutput: `[BENCHMARK] process_data executed in 0.000012s
Processed Stream Output: [30, 60, 90, 120, 150]`,
    multipleExamples: [
      {
        title: "Custom Iterator Class",
        description: "Implementing __iter__ and __next__ protocols",
        code: `class StepCounter:
    def __init__(self, limit: int):
        self.limit = limit
        self.curr = 0
    def __iter__(self):
        return self
    def __next__(self):
        if self.curr < self.limit:
            self.curr += 1
            return self.curr
        raise StopIteration

for step in StepCounter(3):
    print("Step:", step)`,
        output: "Step: 1\nStep: 2\nStep: 3"
      },
      {
        title: "Custom Context Manager with @contextmanager",
        description: "Using contextlib for clean enter and exit resource management",
        code: `from contextlib import contextmanager

@contextmanager
def temporary_flag():
    print("[ENTER] Initializing temporary lock...")
    yield "LOCK_ACQUIRED"
    print("[EXIT] Releasing temporary lock.")

with temporary_flag() as lock:
    print("Inside block with status:", lock)`,
        output: "[ENTER] Initializing temporary lock...\nInside block with status: LOCK_ACQUIRED\n[EXIT] Releasing temporary lock."
      }
    ],
    commonMistakes: [
      "Using 'return' instead of 'yield' in generator functions, returning prematurely instead of producing a stream.",
      "Forgetting to return the inner wrapper function from a decorator (returns None, making the decorated function uncallable).",
      "Assuming Python type hints enforce runtime type checking. Type hints are metadata for linters (mypy) and IDEs, not runtime constraints."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between yield and return in Python?",
        answer: "'return' terminates the function and returns a single final value. 'yield' pauses the function, emits a value to the caller, and remembers its local state and instruction pointer so execution can resume on the next next() call.",
        level: "Intermediate"
      },
      {
        question: "2. How do decorators with arguments work in Python?",
        answer: "A decorator with arguments requires three nested functions: an outer function accepting the decorator arguments, a middle function taking the target callable, and an inner wrapper that intercepts *args and **kwargs.",
        level: "Advanced",
        codeExample: "def repeat(num):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(num): func(*args, **kwargs)\n        return wrapper\n    return decorator"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Infinite Even Number Generator",
        difficulty: "Intermediate",
        task: "Write a generator even_numbers() that yields consecutive even numbers starting at 0.",
        hint: "while True: yield n; n += 2",
        solution: "def even_numbers():\n    n = 0\n    while True:\n        yield n\n        n += 2\ng = even_numbers()\nprint([next(g) for _ in range(4)])"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Logging Decorator",
        difficulty: "Intermediate",
        task: "Create a decorator @log_call that prints the function name and passed arguments before execution.",
        hint: "print(f'Calling {func.__name__} with {args}')",
        solution: "def log_call(f):\n    def w(*args, **kwargs):\n        print(f'Called {f.__name__} with {args}')\n        return f(*args, **kwargs)\n    return w\n@log_call\ndef greet(name): return f'Hi {name}'\nprint(greet('Pooja'))"
      }
    ],
    quiz: [
      {
        question: "What keyword transforms a regular Python function into a generator?",
        options: ["async", "yield", "generator", "stream"],
        correctAnswer: 1,
        explanation: "The 'yield' keyword pauses execution and turns the function into a generator iterator."
      }
    ],
    summary: "Generators stream items lazily with minimal memory using yield. Decorators extend functions declaratively. Type hints document and validate code contracts.",
    relatedLessons: ["py-mod14-1", "py-mod16-1"]
  },

  // MODULE 16: Databases and SQL with Python
  {
    id: "py-mod16-1",
    title: "16. Databases & SQL with Python: SQLite, CRUD & Injection Defense",
    section: "Module 16: Databases and SQL with Python",
    moduleNumber: 16,
    moduleTitle: "Databases and SQL with Python",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["SQLite", "sqlite3", "CRUD", "SQL Injection", "Parameterized Queries", "Transactions", "commit()"],
    meaning: "Database integration allows Python programs to connect to relational database engines (like SQLite and PostgreSQL) to store, search, update, and manage structured tables.",
    definition: "Python includes the `sqlite3` module in its standard library, implementing the Python Database API Specification v2.0 (PEP 249). It provides connection objects, cursors, query execution, transactions, and parameterized bindings.",
    whyUseIt: "Every production application needs persistent, queryable data: user credentials, banking ledgers, product catalogs, and transaction records.",
    introduction: "In this lesson, you will master creating SQLite databases in Python, executing CREATE/INSERT/SELECT/UPDATE/DELETE queries, using parameterized placeholders to prevent SQL injection, and managing transactions with commit() and rollback().",
    simpleExplanation: "A database is like an organized filing cabinet with labeled spreadsheet folders (tables). Python acts as the clerk who reads instructions, pulls files, adds new records, and locks the cabinet safely when finished.",
    syntax: "# SQLite Connection & Parameterized Query:\nimport sqlite3\n\nwith sqlite3.connect(\"app.db\") as conn:\n    cursor = conn.cursor()\n    cursor.execute(\"CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)\")\n    # Parameterized query with ? (NEVER use string concatenation!):\n    cursor.execute(\"INSERT INTO users (name) VALUES (?)\", (\"Alex\",))\n    conn.commit()",
    codeExample: `# Complete SQLite CRUD & Security Demonstration
import sqlite3

# Connect to in-memory database for testing
conn = sqlite3.connect(":memory:")
cursor = conn.cursor()

# 1. Create Table
cursor.execute("""
CREATE TABLE learners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    track TEXT NOT NULL,
    suitrate REAL DEFAULT 0.0
);
""")

# 2. Create (Insert) with Parameterized Queries
sample_students = [
    ("Priya Reddy", "Python Full-Stack", 88.5),
    ("Vikram Singh", "Data Engineering", 92.0),
    ("Ananya Sharma", "AI & ML", 85.0)
]
cursor.executemany("INSERT INTO learners (name, track, suitrate) VALUES (?, ?, ?);", sample_students)
conn.commit()

# 3. Read (Select)
cursor.execute("SELECT id, name, track, suitrate FROM learners WHERE suitrate >= ?;", (88.0,))
top_students = cursor.fetchall()

print("=== Top Performers (>= 88%) ===")
for sid, name, track, rate in top_students:
    print(f"#{sid} | {name:<15} | {track:<18} | {rate}% Suitrate")

# 4. Update
cursor.execute("UPDATE learners SET suitrate = ? WHERE name = ?;", (94.5, "Priya Reddy"))
conn.commit()

# 5. Delete
cursor.execute("DELETE FROM learners WHERE id = ?;", (3,))
conn.commit()

conn.close()`,
    codeExplanation: [
      "sqlite3.connect(':memory:'): Creates a transient database in RAM ideal for tests and tutorials.",
      "cursor.execute(SQL, (params,)): Uses parameterized query placeholders '?' to guarantee security.",
      "cursor.executemany(...): Efficiently inserts multiple tuples in a single batch transaction.",
      "conn.commit(): Persists the transactional changes permanently to the database.",
      "cursor.fetchall(): Retrieves all result rows as a list of tuples."
    ],
    expectedOutput: `=== Top Performers (>= 88%) ===
#1 | Priya Reddy     | Python Full-Stack  | 88.5% Suitrate
#2 | Vikram Singh    | Data Engineering   | 92.0% Suitrate`,
    multipleExamples: [
      {
        title: "SQL Injection Defense Demonstration",
        description: "Why string formatting in SQL queries is a critical security vulnerability",
        code: `# VULNERABLE CODE (NEVER DO THIS!):
# username_input = "' OR '1'='1"
# query = f"SELECT * FROM users WHERE name = '{username_input}'"
# Bypasses auth completely!

# SAFE CODE (Parameterized):
# cursor.execute("SELECT * FROM users WHERE name = ?", (username_input,))
print("Parameterized queries separate SQL commands from user input safely.")`,
        output: "Parameterized queries separate SQL commands from user input safely."
      }
    ],
    commonMistakes: [
      "Using f-strings or string concatenation to build SQL queries: f'SELECT * FROM users WHERE email = {email}'. This causes devastating SQL Injection attacks! Always use parameterized queries with ? placeholders.",
      "Forgetting to call conn.commit() after INSERT, UPDATE, or DELETE operations. Uncommitted transactions are rolled back when the connection closes.",
      "Leaving database connections open without closing them or using a context manager."
    ],
    interviewQuestions: [
      {
        question: "1. What is SQL Injection and how do you prevent it in Python?",
        answer: "SQL injection is an attack where malicious SQL fragments in user input alter the query structure. In Python, it is prevented by using parameterized queries (? in sqlite3, %s in psycopg2). The database driver treats parameters strictly as data literals, never as executable SQL code.",
        level: "Beginner"
      },
      {
        question: "2. What is the difference between fetchone(), fetchmany(), and fetchall()?",
        answer: "fetchone() retrieves the next single row as a tuple (or None). fetchmany(size) retrieves the next N rows. fetchall() retrieves all remaining rows into memory as a list of tuples.",
        level: "Beginner"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Count Database Records",
        difficulty: "Beginner",
        task: "Write a query to count total rows in a 'products' table using SELECT COUNT(*).",
        hint: "cursor.execute('SELECT COUNT(*) FROM products'); cursor.fetchone()[0]",
        solution: "import sqlite3\nconn = sqlite3.connect(':memory:')\nc = conn.cursor()\nc.execute('CREATE TABLE p (id INT)')\nc.execute('INSERT INTO p VALUES (1)')\nc.execute('SELECT COUNT(*) FROM p')\nprint('Total:', c.fetchone()[0])\nconn.close()"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Safe User Login Verification",
        difficulty: "Intermediate",
        task: "Write a function verify_login(cursor, username, password_hash) using parameterized SQL that returns True if a matching record exists.",
        hint: "SELECT 1 FROM users WHERE username = ? AND password = ?",
        solution: "def verify_login(cursor, user, pwd):\n    cursor.execute('SELECT 1 FROM users WHERE username = ? AND password = ?', (user, pwd))\n    return cursor.fetchone() is not None\nprint('Verification helper ready')"
      }
    ],
    quiz: [
      {
        question: "How should dynamic user values be passed into a SQLite query in Python?",
        options: [
          "Using f-strings: f'SELECT * FROM u WHERE id = {val}'",
          "Using string concatenation: 'SELECT * FROM u WHERE id = ' + val",
          "Using parameterized placeholders: cursor.execute('SELECT * FROM u WHERE id = ?', (val,))",
          "Using eval()"
        ],
        correctAnswer: 2,
        explanation: "Parameterized queries with ? placeholders are the only safe way to prevent SQL injection vulnerabilities."
      }
    ],
    summary: "SQLite provides built-in relational database storage in Python. Use parameterized queries (? placeholders) to stop SQL injection, and call conn.commit() to persist changes.",
    relatedLessons: ["py-mod13-1", "py-mod17-1"]
  },

  // MODULE 17: APIs and Web Requests
  {
    id: "py-mod17-1",
    title: "17. APIs & Web Requests: REST, HTTP Methods, Requests & FastAPI",
    section: "Module 17: APIs and Web Requests",
    moduleNumber: 17,
    moduleTitle: "APIs and Web Requests",
    difficulty: "Intermediate",
    duration: "14 min",
    keyConcepts: ["REST API", "HTTP Methods", "GET", "POST", "JSON", "requests", "FastAPI", "Status Codes"],
    meaning: "An API (Application Programming Interface) allows two software programs to communicate over the internet using standard HTTP web protocols.",
    definition: "REST (Representational State Transfer) is an architectural style for networked systems. In Python, clients send HTTP requests (GET, POST, PUT, DELETE) using the `requests` library and receive structured JSON responses. Modern web services are built using `FastAPI` or `Flask`.",
    whyUseIt: "Modern applications rely on external APIs for weather forecasts, payment processing (Stripe), AI language models, and microservice communication.",
    introduction: "In this lesson, you will master HTTP verbs, status codes (200, 201, 400, 401, 404, 500), sending HTTP requests, parsing JSON responses, handling API errors, and building endpoints with FastAPI.",
    simpleExplanation: "An API is like a waiter in a restaurant. You (the client) look at the menu and give an order (HTTP request). The waiter carries the order to the kitchen (server) and brings back your meal (JSON response).",
    syntax: "# Sending HTTP GET Request with requests:\nimport requests\n\nresponse = requests.get(\"https://api.example.com/data\", timeout=5)\nif response.status_code == 200:\n    data = response.json()\n    print(data)\n\n# Modern FastAPI Endpoint:\nfrom fastapi import FastAPI\napp = FastAPI()\n\n@app.get(\"/api/hello\")\ndef hello():\n    return {\"status\": \"success\", \"message\": \"Hello from Code From Zero!\"}",
    codeExample: `# Simulating an API Client & FastAPI Microservice Pipeline
import json

# 1. API Response Simulation (HTTP GET /api/learners/101)
simulated_http_response = {
    "status_code": 200,
    "headers": {"Content-Type": "application/json"},
    "body": json.dumps({
        "id": 101,
        "name": "Alex",
        "enrolled_tracks": ["Python", "SQL"],
        "streak_days": 5
    })
}

# 2. Client-side response parsing
if simulated_http_response["status_code"] == 200:
    payload = json.loads(simulated_http_response["body"])
    print("=== API Response Received ===")
    print(f"Status: {simulated_http_response['status_code']} OK")
    print(f"Learner: {payload['name']}")
    print(f"Active Tracks: {', '.join(payload['enrolled_tracks'])}")
    print(f"Streak: {payload['streak_days']} Days")
else:
    print("API Error occurred.")`,
    codeExplanation: [
      "status_code 200: Standard HTTP code signaling that the request succeeded.",
      "Content-Type: application/json: Informs the client that the response payload is JSON text.",
      "json.loads(response.body): Deserializes raw JSON string into a usable Python dictionary.",
      "payload['name']: Accesses structured data attributes directly via dictionary keys."
    ],
    expectedOutput: `=== API Response Received ===
Status: 200 OK
Learner: Alex
Active Tracks: Python, SQL
Streak: 5 Days`,
    multipleExamples: [
      {
        title: "HTTP Status Codes Overview",
        description: "Essential status code families every developer must know",
        code: `# HTTP Status Codes:
# 200 OK: Request succeeded
# 201 Created: Resource created (e.g. after POST)
# 400 Bad Request: Client sent invalid data
# 401 Unauthorized: Authentication missing or invalid
# 403 Forbidden: Authenticated, but not permitted
# 404 Not Found: Resource does not exist
# 500 Internal Server Error: Bug or crash on server
print("Status codes tell the client the exact outcome of their request.")`,
        output: "Status codes tell the client the exact outcome of their request."
      }
    ],
    commonMistakes: [
      "Hardcoding secret API keys in frontend code or committing them to public GitHub repositories. Always read secrets from environment variables (os.environ.get('API_KEY')).",
      "Calling requests.get() without specifying a 'timeout' parameter. If the server hangs, your Python program will freeze forever.",
      "Assuming response.status_code is always 200 without checking response.ok or response.raise_for_status()."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between GET and POST in REST APIs?",
        answer: "GET is idempotent and safe; it retrieves data without modifying server state, and parameters are passed in the URL. POST is non-idempotent; it creates new resources on the server and passes payloads in the request body.",
        level: "Beginner"
      },
      {
        question: "2. Why is FastAPI faster than traditional Python web frameworks like Django and Flask?",
        answer: "FastAPI is built on Starlette and Pydantic, running natively on modern ASGI (Asynchronous Server Gateway Interface) web servers like Uvicorn. It supports asynchronous non-blocking async/await out of the box and compiles data parsing at high speed.",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Construct Query Parameters",
        difficulty: "Beginner",
        task: "Construct a dictionary of query parameters: search='python', page=1, limit=20.",
        hint: "params = {'search': 'python', 'page': 1, 'limit': 20}",
        solution: "params = {'search': 'python', 'page': 1, 'limit': 20}\nprint('Query Params:', params)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: API Response Error Guard",
        difficulty: "Intermediate",
        task: "Write a function parse_api_response(res_dict) that returns data if status is 200, or raises ValueError with the error message if status is not 200.",
        hint: "if res_dict['status'] != 200: raise ValueError(res_dict['error'])",
        solution: "def parse_api_response(r):\n    if r.get('status') == 200:\n        return r['data']\n    raise ValueError(r.get('error', 'Request failed'))\nprint(parse_api_response({'status': 200, 'data': {'items': 5}}))"
      }
    ],
    quiz: [
      {
        question: "Which HTTP status code signifies that a new resource was successfully created?",
        options: ["200 OK", "201 Created", "204 No Content", "301 Moved Permanently"],
        correctAnswer: 1,
        explanation: "201 Created is the standard HTTP status code returned upon successful resource creation."
      }
    ],
    summary: "REST APIs connect services using HTTP. The requests library queries remote web servers, while FastAPI builds high-performance asynchronous web APIs.",
    relatedLessons: ["py-mod16-1", "py-mod18-1"]
  },

  // MODULE 18: Multithreading, Multiprocessing, and Async
  {
    id: "py-mod18-1",
    title: "18. Concurrency & Parallelism: Threads, Processes & Asyncio",
    section: "Module 18: Multithreading, Multiprocessing, and Async",
    moduleNumber: 18,
    moduleTitle: "Multithreading, Multiprocessing, and Async",
    difficulty: "Advanced",
    duration: "16 min",
    keyConcepts: ["Concurrency", "Parallelism", "GIL", "threading", "multiprocessing", "asyncio", "async/await", "Event Loop"],
    meaning: "Concurrency is managing multiple tasks at once. Parallelism is executing multiple tasks simultaneously on different CPU cores.",
    definition: "In CPython, the Global Interpreter Lock (GIL) prevents multiple native threads from executing bytecode at the exact same time. Hence: `threading` and `asyncio` excel for I/O-bound tasks (network, disk), while `multiprocessing` bypasses the GIL for CPU-bound computations (image processing, ML).",
    whyUseIt: "Without concurrency, downloading 50 web pages sequentially takes 100 seconds; with asyncio or threading, all 50 can be fetched cooperatively in 2 seconds.",
    introduction: "In this lesson, you will master the difference between concurrency and parallelism, threading vs multiprocessing vs asyncio, event loops with async/await, and when to use each approach in production.",
    simpleExplanation: "Threading is like one chef juggling 3 pots on a stove (waiting for water to boil). Multiprocessing is hiring 4 distinct chefs each with their own kitchen. Asyncio is a single chef following a super-efficient timer schedule.",
    syntax: "# Asyncio Syntax:\nimport asyncio\n\nasync def fetch_data(task_id: int):\n    print(f\"Starting task {task_id}\")\n    await asyncio.sleep(1) # Non-blocking sleep\n    return f\"Result {task_id}\"\n\nasync def main():\n    results = await asyncio.gather(fetch_data(1), fetch_data(2))\n    print(results)\n\n# Run: asyncio.run(main())",
    codeExample: `# Demonstrating Asyncio Cooperative Concurrency
import asyncio
import time

async def simulate_api_call(service_name: str, delay_seconds: float):
    print(f"[{service_name}] Request sent...")
    await asyncio.sleep(delay_seconds) # Simulates network latency non-blockingly
    print(f"[{service_name}] Data received!")
    return f"Data from {service_name}"

async def main():
    start_time = time.perf_counter()
    
    # Run 3 concurrent I/O requests concurrently with asyncio.gather
    results = await asyncio.gather(
        simulate_api_call("User Profile", 0.5),
        simulate_api_call("Course Progress", 0.4),
        simulate_api_call("Study Streak", 0.2)
    )
    
    elapsed = time.perf_counter() - start_time
    print(f"\\nAll 3 API calls finished in {elapsed:.2f} seconds!")
    print("Aggregated Results:", results)

# Run the event loop
asyncio.run(main())`,
    codeExplanation: [
      "async def: Declares a coroutine function in Python.",
      "await asyncio.sleep(...): Yields control back to the event loop non-blockingly while waiting.",
      "asyncio.gather(*tasks): Schedules all coroutines concurrently and waits until all finish.",
      "asyncio.run(main()): Manages the lifecycle of the event loop and executes the root coroutine."
    ],
    expectedOutput: `[User Profile] Request sent...
[Course Progress] Request sent...
[Study Streak] Request sent...
[Study Streak] Data received!
[Course Progress] Data received!
[User Profile] Data received!

All 3 API calls finished in 0.51 seconds!
Aggregated Results: ['Data from User Profile', 'Data from Course Progress', 'Data from Study Streak']`,
    multipleExamples: [
      {
        title: "Choosing the Right Tool",
        description: "Decision matrix for concurrency in Python",
        code: `# 1. I/O-Bound (Web scraping, APIs, DB queries):
#    -> Use asyncio (lightweight) or threading.
# 2. CPU-Bound (Data science, image rendering, heavy math):
#    -> Use multiprocessing (spawns separate Python interpreters on each core).
print("Rule of thumb: Asyncio for network I/O; Multiprocessing for CPU compute.")`,
        output: "Rule of thumb: Asyncio for network I/O; Multiprocessing for CPU compute."
      }
    ],
    commonMistakes: [
      "Using blocking operations (like time.sleep() or requests.get()) inside an async function. This blocks the entire event loop and stalls all concurrent tasks! Use 'await asyncio.sleep()' or async HTTP libraries like 'httpx'.",
      "Calling an async function without 'await': result = my_coroutine(). This returns a coroutine object without executing it.",
      "Using threading for CPU-heavy tasks expecting a 4x speedup on a 4-core machine. The GIL will restrict execution to a single core."
    ],
    interviewQuestions: [
      {
        question: "1. What is Python's Global Interpreter Lock (GIL)?",
        answer: "The GIL is a mutex lock in CPython that permits only one native thread to execute Python bytecode at a time. It simplifies CPython's memory management and garbage collection but limits CPU-bound multi-threading. CPU-bound code must use multiprocessing to scale across cores.",
        level: "Advanced"
      },
      {
        question: "2. How does an asyncio event loop work?",
        answer: "An event loop is a continuous loop that monitors and coordinates asynchronous tasks. When a task hits an 'await' statement (like waiting for network I/O), it yields control, and the loop switches to execute another ready task, maximizing CPU utilization.",
        level: "Advanced"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Async Delayed Greeting",
        difficulty: "Intermediate",
        task: "Write an async function say_hello(name) that waits 0.1 seconds with asyncio.sleep then returns 'Hello {name}'.",
        hint: "async def say_hello(name): await asyncio.sleep(0.1); return f'Hello {name}'",
        solution: "import asyncio\nasync def say_hello(name):\n    await asyncio.sleep(0.1)\n    return f'Hello {name}'\nprint(asyncio.run(say_hello('CodeFromZero')))"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Concurrent Task Aggregator",
        difficulty: "Advanced",
        task: "Use asyncio.gather to run 3 tasks that compute square(x) concurrently and return their sum.",
        hint: "res = await asyncio.gather(sq(2), sq(3), sq(4)); sum(res)",
        solution: "import asyncio\nasync def sq(x): return x * x\nasync def run():\n    res = await asyncio.gather(sq(2), sq(3), sq(4))\n    return sum(res)\nprint('Sum of squares:', asyncio.run(run()))"
      }
    ],
    quiz: [
      {
        question: "Which approach bypasses the CPython GIL to achieve true parallel CPU execution?",
        options: ["threading", "asyncio", "multiprocessing", "coroutine"],
        correctAnswer: 2,
        explanation: "multiprocessing creates separate operating system processes, each with its own independent Python interpreter and GIL."
      }
    ],
    summary: "Concurrency handles multiple tasks collaboratively. Use asyncio or threading for non-blocking I/O operations, and multiprocessing to parallelize heavy CPU computation across multiple cores.",
    relatedLessons: ["py-mod17-1", "py-mod19-1"]
  },

  // MODULE 19: Testing, Debugging, and Code Quality
  {
    id: "py-mod19-1",
    title: "19. Testing & Code Quality: unittest, pytest, Tracebacks & Logging",
    section: "Module 19: Testing, Debugging, and Code Quality",
    moduleNumber: 19,
    moduleTitle: "Testing, Debugging, and Code Quality",
    difficulty: "Intermediate",
    duration: "13 min",
    keyConcepts: ["unittest", "pytest", "Assertions", "Tracebacks", "Logging", "PEP 8", "Debugging"],
    meaning: "Testing ensures that your code works as expected and catches bugs before users see them. Debugging is the process of locating and fixing code errors.",
    definition: "Automated testing runs code assertions to verify program correctness. Python provides the built-in `unittest` framework, the industry-standard `pytest` tool, and the `logging` module for structured diagnostic telemetry.",
    whyUseIt: "Untested software fails in production. Automated tests give developers confidence to refactor, deploy updates safely, and prevent regressions.",
    introduction: "In this lesson, you will master reading Python tracebacks, writing unit tests with unittest, using pytest assertions, configuring the logging module, and enforcing PEP 8 code quality standards.",
    simpleExplanation: "Unit testing is like a quality inspection checkpoint at a car manufacturing plant. Before the car leaves the factory, automated robotic checks verify that the brakes, steering, and headlights all work as specified.",
    syntax: "# Unit Testing with unittest:\nimport unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n        self.assertEqual(add(-1, 1), 0)\n\n# Modern pytest syntax:\n# def test_add():\n#     assert add(2, 3) == 5",
    codeExample: `# Demonstrating Unit Testing and Logging
import unittest
import logging

# Configure structured logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

def calculate_discount(price: float, discount_pct: float) -> float:
    if price < 0 or discount_pct < 0 or discount_pct > 100:
        raise ValueError("Invalid price or discount percentage.")
    return round(price * (1 - discount_pct / 100), 2)

# Test Suite
class TestDiscountCalculator(unittest.TestCase):
    def test_standard_discount(self):
        logging.info("Testing standard 20% discount on $100...")
        self.assertEqual(calculate_discount(100.0, 20.0), 80.0)

    def test_zero_discount(self):
        self.assertEqual(calculate_discount(50.0, 0.0), 50.0)

    def test_invalid_discount_raises_error(self):
        with self.assertRaises(ValueError):
            calculate_discount(100.0, 150.0)

# Run tests programmatically
suite = unittest.TestLoader().loadTestsFromTestCase(TestDiscountCalculator)
runner = unittest.TextTestRunner(verbosity=2)
runner.run(suite)`,
    codeExplanation: [
      "class TestDiscountCalculator(unittest.TestCase): Test class inheriting test assertions from unittest.",
      "test_standard_discount(): Test methods must begin with the prefix 'test_' to be auto-discovered.",
      "self.assertEqual(a, b): Verifies that a equals b; fails the test if they differ.",
      "with self.assertRaises(ValueError): Asserts that an expected exception is triggered on invalid inputs.",
      "logging.info(...): Emits diagnostic telemetry without cluttering standard user output."
    ],
    expectedOutput: `test_invalid_discount_raises_error (__main__.TestDiscountCalculator) ... ok
test_standard_discount (__main__.TestDiscountCalculator) ... INFO: Testing standard 20% discount on $100...
ok
test_zero_discount (__main__.TestDiscountCalculator) ... ok

----------------------------------------------------------------------
Ran 3 tests in 0.002s

OK`,
    multipleExamples: [
      {
        title: "Reading Tracebacks",
        description: "How to read Python error tracebacks from bottom to top",
        code: `# Traceback tip:
# 1. Read the LAST line first: it tells you the exact exception type and error message (e.g. KeyError: 'email').
# 2. Read the line right above it: it tells you the exact filename and line number where the error occurred.
# 3. Follow the call stack upward to see how your program reached that line.
print("Read tracebacks from bottom to top for fastest root-cause diagnosis.")`,
        output: "Read tracebacks from bottom to top for fastest root-cause diagnosis."
      }
    ],
    commonMistakes: [
      "Naming test functions without the 'test_' prefix. Test runners (pytest, unittest) ignore functions that don't start with 'test_'.",
      "Using print() statements for production debugging instead of the standard logging module.",
      "Testing only the 'happy path' and skipping edge cases (e.g. negative numbers, empty strings, None, large inputs)."
    ],
    interviewQuestions: [
      {
        question: "1. Why is pytest preferred over unittest in modern Python development?",
        answer: "pytest uses plain Python 'assert' statements instead of verbose self.assert* methods, supports powerful modular fixtures, has a rich plugin ecosystem, and produces significantly cleaner failure diff reports.",
        level: "Intermediate"
      },
      {
        question: "2. What is test-driven development (TDD)?",
        answer: "TDD is a software development workflow following the Red-Green-Refactor cycle: (1) Write a failing test first, (2) Write minimal code to pass the test, (3) Refactor the code for quality while keeping tests green.",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Basic Assert Test",
        difficulty: "Beginner",
        task: "Write an assertion that verifies len([1, 2, 3]) == 3.",
        hint: "assert len([1, 2, 3]) == 3",
        solution: "assert len([1, 2, 3]) == 3\nprint('Assertion passed!')"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: String Reversal Unit Test",
        difficulty: "Intermediate",
        task: "Write a test case verifying that reverse_string('hello') == 'olleh' and reverse_string('') == ''.",
        hint: "def reverse(s): return s[::-1]",
        solution: "def rev(s): return s[::-1]\nassert rev('hello') == 'olleh'\nassert rev('') == ''\nprint('String reversal tests passed!')"
      }
    ],
    quiz: [
      {
        question: "What prefix must test functions have in pytest and unittest?",
        options: ["check_", "test_", "verify_", "assert_"],
        correctAnswer: 1,
        explanation: "Test runners automatically discover functions that start with 'test_'."
      }
    ],
    summary: "Automated testing with unittest and pytest verifies program correctness. Structured logging tracks runtime behavior, and reading tracebacks from bottom to top enables rapid debugging.",
    relatedLessons: ["py-mod12-1", "py-mod20-1"]
  },

  // MODULE 20: Data Structures and Algorithms with Python
  {
    id: "py-mod20-1",
    title: "20. Data Structures & Algorithms: Big O, Stacks, Queues & Binary Search",
    section: "Module 20: Data Structures and Algorithms with Python",
    moduleNumber: 20,
    moduleTitle: "Data Structures and Algorithms with Python",
    difficulty: "Advanced",
    duration: "16 min",
    keyConcepts: ["Big O Notation", "Time Complexity", "Binary Search", "Stack", "Queue", "Recursion", "Two Pointers"],
    meaning: "Data structures are methods for organizing and storing data. Algorithms are step-by-step procedures for solving computational problems efficiently.",
    definition: "Algorithmic efficiency is measured using Big O notation for time and space complexity. Fundamental structures include Stacks (LIFO), Queues (FIFO), Linked Lists, and Trees. Classic search algorithms include Linear Search (O(N)) and Binary Search (O(log N)).",
    whyUseIt: "Understanding DSA is the core difference between junior script writers and senior engineers. It determines whether your program handles 10 million users in milliseconds or crashes the server.",
    introduction: "In this lesson, you will master Big O analysis (O(1), O(log N), O(N), O(N log N), O(N^2)), implementing Stacks using lists, Queues using collections.deque, Binary Search on sorted lists, and solving interview challenges.",
    simpleExplanation: "Searching for a word in an alphabetical dictionary page by page from the start is Linear Search (slow). Opening to the middle, checking if the word is before or after, and cutting the book in half repeatedly is Binary Search (lightning fast).",
    syntax: "# Binary Search O(log N):\ndef binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: left = mid + 1\n        else: right = mid - 1\n    return -1",
    codeExample: `# Data Structures & Algorithms Demonstration
from collections import deque

# 1. Stack Implementation (LIFO - Last In First Out)
class Stack:
    def __init__(self):
        self._items = []
    def push(self, item): self._items.append(item)
    def pop(self): return self._items.pop() if self._items else None
    def peek(self): return self._items[-1] if self._items else None
    def is_empty(self): return len(self._items) == 0

# 2. Queue Implementation (FIFO - First In First Out)
queue = deque()
queue.append("Customer 1")
queue.append("Customer 2")
queue.append("Customer 3")
served = queue.popleft() # O(1) removal from head

print("=== Queue (FIFO) ===")
print(f"Served: {served}")
print(f"Remaining in queue: {list(queue)}")

# 3. Binary Search O(log N)
def binary_search_trace(arr, target):
    low, high = 0, len(arr) - 1
    steps = 0
    while low <= high:
        steps += 1
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid, steps
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1, steps

dataset = [2, 7, 11, 15, 23, 38, 56, 72, 91, 104]
target_val = 56
index, num_steps = binary_search_trace(dataset, target_val)

print("\\n=== Binary Search (O(log N)) ===")
print(f"Dataset ({len(dataset)} items): {dataset}")
print(f"Target {target_val} found at index {index} in ONLY {num_steps} steps!")`,
    codeExplanation: [
      "collections.deque: Double-ended queue that supports O(1) pops from the left, unlike standard lists which take O(N).",
      "Stack.push/pop: Operates at the end of the list with O(1) time complexity.",
      "mid = (low + high) // 2: Cuts the search space in half each iteration.",
      "O(log N) efficiency: For 1,000,000 items, binary search finds any target in at most 20 comparisons!"
    ],
    expectedOutput: `=== Queue (FIFO) ===
Served: Customer 1
Remaining in queue: ['Customer 2', 'Customer 3']

=== Binary Search (O(log N)) ===
Dataset (10 items): [2, 7, 11, 15, 23, 38, 56, 72, 91, 104]
Target 56 found at index 6 in ONLY 3 steps!`,
    multipleExamples: [
      {
        title: "Valid Parentheses Problem (Classic Interview)",
        description: "Checking balanced brackets ()[]{} using a Stack",
        code: `def is_valid_parentheses(s: str) -> bool:
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return len(stack) == 0

print("is '({[]})' valid?", is_valid_parentheses("({[]})"))
print("is '([)]' valid?", is_valid_parentheses("([)]"))`,
        output: "is '({[]})' valid? True\nis '([)]' valid? False"
      }
    ],
    commonMistakes: [
      "Using list.pop(0) to implement a queue. In a standard list, popping index 0 shifts all remaining elements left, running in slow O(N) time! Always use 'collections.deque' which has O(1) popleft().",
      "Running Binary Search on an unsorted list. Binary Search requires a sorted collection; on unsorted data, it produces incorrect results.",
      "Ignoring space complexity when creating auxiliary arrays inside recursive functions."
    ],
    interviewQuestions: [
      {
        question: "1. What is the time complexity of searching in a Python dictionary vs a Python list?",
        answer: "Searching in a dictionary ('key in dict') is average O(1) constant time because it uses hash table lookup. Searching in a list ('val in list') is O(N) linear time because it must iterate sequentially across each element.",
        level: "Beginner"
      },
      {
        question: "2. What is Timsort and what is its time complexity?",
        answer: "Timsort is the hybrid sorting algorithm (derived from merge sort and insertion sort) used by Python's list.sort() and sorted(). Its best-case time complexity is O(N) (on pre-sorted data), and worst-case is O(N log N). It is stable.",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Two Sum with Hash Map",
        difficulty: "Intermediate",
        task: "Given nums = [2, 7, 11, 15] and target = 9, find the two indices that add up to target in O(N) time.",
        hint: "Store seen = {num: index}; check if target - num in seen",
        solution: "def two_sum(nums, target):\n    seen = {}\n    for i, n in enumerate(nums):\n        if target - n in seen:\n            return [seen[target - n], i]\n        seen[n] = i\n    return []\nprint('Indices:', two_sum([2, 7, 11, 15], 9))"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Reverse Linked List Node Concept",
        difficulty: "Advanced",
        task: "Implement a simple Node class with .val and .next. Link 3 nodes and write a function to print them.",
        hint: "class Node: def __init__(self, val, next=None): self.val = val; self.next = next",
        solution: "class Node:\n    def __init__(self, val, next=None):\n        self.val = val\n        self.next = next\nn3 = Node(3)\nn2 = Node(2, n3)\nn1 = Node(1, n2)\ncurr = n1\nvals = []\nwhile curr:\n    vals.append(curr.val)\n    curr = curr.next\nprint('Linked List:', vals)"
      }
    ],
    quiz: [
      {
        question: "What is the average time complexity of Binary Search?",
        options: ["O(1)", "O(log N)", "O(N)", "O(N^2)"],
        correctAnswer: 1,
        explanation: "Binary search cuts the search space in half each iteration, achieving O(log N) logarithmic time complexity."
      }
    ],
    summary: "Algorithms and data structures optimize code performance. Stacks follow LIFO, Queues follow FIFO with collections.deque, and Binary Search finds items in O(log N) time on sorted data.",
    relatedLessons: ["py-mod7-1", "py-mod21-1"]
  },

  // MODULE 21: Python for Data Analysis
  {
    id: "py-mod21-1",
    title: "21. Data Analysis with Python: NumPy, Pandas & Matplotlib",
    section: "Module 21: Python for Data Analysis",
    moduleNumber: 21,
    moduleTitle: "Python for Data Analysis",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["Data Analysis", "NumPy", "Pandas", "Series", "DataFrame", "Matplotlib", "Data Cleaning", "Aggregation"],
    meaning: "Data analysis in Python is inspecting, cleaning, transforming, and visualizing data to discover insights and make data-driven decisions.",
    definition: "The core Python data stack consists of: `NumPy` (C-level multidimensional ndarray computing), `Pandas` (tabular Series and DataFrames with SQL-like transformations), and `Matplotlib` (2D plotting and charting engine).",
    whyUseIt: "Python is the undisputed global leader in data science. Companies process gigabytes of business metrics, sensor logs, and sales data using these libraries.",
    introduction: "In this lesson, you will master vectorized math with NumPy, tabular manipulation with Pandas DataFrames, cleaning missing values, grouping/aggregating metrics, and plotting charts with Matplotlib.",
    simpleExplanation: "A Pandas DataFrame is like an interactive Excel spreadsheet on steroids running at blazing computer speeds. You can filter 10 million rows in milliseconds and plot professional graphs in 2 lines of code.",
    syntax: "# Pandas DataFrame & Aggregation:\nimport pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    \"Department\": [\"Tech\", \"Tech\", \"Sales\"],\n    \"Salary\": [90000, 110000, 75000]\n})\navg_salary = df.groupby(\"Department\")[\"Salary\"].mean()",
    codeExample: `# Demonstrating Core Data Analysis Concepts in Pure Python
# (Simulating Pandas DataFrame and Vectorized Computations)
class SimpleDataFrame:
    def __init__(self, data: dict):
        self.data = data
        self.columns = list(data.keys())
        self.rows_count = len(next(iter(data.values())))

    def filter_by(self, col: str, min_val: float):
        filtered = {k: [] for k in self.columns}
        for i in range(self.rows_count):
            if self.data[col][i] >= min_val:
                for k in self.columns:
                    filtered[k].append(self.data[k][i])
        return SimpleDataFrame(filtered)

    def mean(self, col: str) -> float:
        vals = self.data[col]
        return sum(vals) / len(vals)

# Sample Sales Data
sales_table = SimpleDataFrame({
    "Region": ["North", "South", "East", "West", "North"],
    "Sales_USD": [12500, 8400, 14200, 19500, 11000],
    "Units": [45, 28, 52, 68, 38]
})

print("=== Raw Sales Table ===")
print("Average Sales: USD", f"{sales_table.mean('Sales_USD'):.2f}")

high_performing = sales_table.filter_by("Sales_USD", 12000)
print(f"High Performing Regions (>= $12,000): {high_performing.data['Region']}")
print(f"High Performing Sales: {high_performing.data['Sales_USD']}")`,
    codeExplanation: [
      "DataFrame model: Organizes data by column vectors for memory-efficient cache access.",
      "filter_by: Filters row records based on conditional threshold criteria.",
      "mean(): Calculates statistical arithmetic average.",
      "In production: Replaced by 'import pandas as pd' and 'df[df['Sales'] >= 12000]'."
    ],
    expectedOutput: `=== Raw Sales Table ===
Average Sales: USD 13120.00
High Performing Regions (>= $12,000): ['North', 'East', 'West']
High Performing Sales: [12500, 14200, 19500]`,
    multipleExamples: [
      {
        title: "NumPy Vectorization Speedup",
        description: "Vectorized operations run at C-speed without slow Python loops",
        code: `# In NumPy, array math operates across millions of elements simultaneously:
# c_arr = a_arr + b_arr  # Vectorized, no Python for loop!
print("NumPy vectorization eliminates slow Python interpreter loops.")`,
        output: "NumPy vectorization eliminates slow Python interpreter loops."
      }
    ],
    commonMistakes: [
      "Using Python for-loops to iterate over rows in a Pandas DataFrame (e.g. iterrows()). Vectorized operations (df['A'] + df['B']) are 100x to 1000x faster!",
      "Modifying a DataFrame slice without .copy(), triggering Pandas' SettingWithCopyWarning.",
      "Ignoring missing values (NaN) during aggregation, which can silently skew statistical averages."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between a Pandas Series and a Pandas DataFrame?",
        answer: "A Series is a one-dimensional labeled array capable of holding data of any type with an index. A DataFrame is a two-dimensional tabular data structure with labeled axes (rows and columns), effectively a collection of Series sharing a common index.",
        level: "Beginner"
      },
      {
        question: "2. How does Pandas handle missing data (NaN)?",
        answer: "Pandas represents missing data using NumPy's np.nan (or pd.NA). Common methods include .isna() / .isnull() to detect, .dropna() to drop rows/columns, and .fillna(value) or .interpolate() to impute missing entries.",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Calculate Median",
        difficulty: "Beginner",
        task: "Given scores = [10, 20, 30, 40, 50], compute and print the median value.",
        hint: "sorted_scores[len // 2]",
        solution: "scores = [10, 20, 30, 40, 50]\nmed = scores[len(scores)//2]\nprint('Median:', med)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Basic Outlier Filter",
        difficulty: "Intermediate",
        task: "Filter out numbers from data = [10, 12, 11, 999, 13, 10] that are greater than 100.",
        hint: "[x for x in data if x <= 100]",
        solution: "data = [10, 12, 11, 999, 13, 10]\nclean = [x for x in data if x <= 100]\nprint('Cleaned:', clean)"
      }
    ],
    quiz: [
      {
        question: "Which library is primary for tabular DataFrame manipulation in Python?",
        options: ["NumPy", "Pandas", "Matplotlib", "Requests"],
        correctAnswer: 1,
        explanation: "Pandas is the industry standard library for tabular DataFrame analysis."
      }
    ],
    summary: "Python data analysis relies on NumPy for fast array math, Pandas for tabular transformations, and Matplotlib for data visualization.",
    relatedLessons: ["py-mod20-1", "py-mod22-1"]
  },

  // MODULE 22: Python for AI and Machine Learning
  {
    id: "py-mod22-1",
    title: "22. AI & Machine Learning: Scikit-learn, Regression, Classification & Neural Nets",
    section: "Module 22: Python for AI and Machine Learning",
    moduleNumber: 22,
    moduleTitle: "Python for AI and Machine Learning",
    difficulty: "Advanced",
    duration: "16 min",
    keyConcepts: ["AI", "Machine Learning", "Supervised Learning", "Regression", "Classification", "Scikit-learn", "Train/Test Split", "Overfitting"],
    meaning: "Machine Learning (ML) is teaching computers to recognize patterns from historical data to make accurate predictions on new data without explicit programming rules.",
    definition: "Machine learning divides into Supervised Learning (labeled training data; Regression and Classification), Unsupervised Learning (unlabeled patterns; Clustering), and Deep Learning (multilayer neural networks).",
    whyUseIt: "Machine learning powers product recommendations (Netflix/Amazon), autonomous driving, medical diagnostics, fraud detection, and conversational AI.",
    introduction: "In this lesson, you will master ML workflows: features (X) vs labels (y), train/test dataset splitting, training a model, evaluating accuracy, understanding overfitting, and an overview of neural networks.",
    simpleExplanation: "Traditional programming is giving the computer rules + data to get answers. Machine Learning is giving the computer data + answers so the computer figures out the rules automatically.",
    syntax: "# Typical Scikit-Learn Model Workflow:\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\n\n# 1. Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# 2. Train model\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# 3. Predict\npredictions = model.predict(X_test)",
    codeExample: `# Demonstrating Supervised Machine Learning in Pure Python
# (Simulating a Linear Regression Predictor from Scratch)
class SimpleLinearRegression:
    def __init__(self):
        self.slope = 0.0
        self.intercept = 0.0

    def fit(self, X: list, y: list):
        # Calculate slope m and intercept b (y = mx + b)
        n = len(X)
        mean_x = sum(X) / n
        mean_y = sum(y) / n
        
        numerator = sum((X[i] - mean_x) * (y[i] - mean_y) for i in range(n))
        denominator = sum((X[i] - mean_x) ** 2 for i in range(n))
        
        self.slope = numerator / denominator
        self.intercept = mean_y - (self.slope * mean_x)

    def predict(self, x_val: float) -> float:
        return (self.slope * x_val) + self.intercept

# Study Hours vs Exam Score Dataset
hours_studied = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0]
exam_scores   = [52.0, 60.0, 68.0, 75.0, 84.0, 93.0]

model = SimpleLinearRegression()
model.fit(hours_studied, exam_scores)

print(f"Model Trained! Formula: Score = {model.slope:.2f} * Hours + {model.intercept:.2f}")

# Predict score for a student studying 7.5 hours
predicted_score = model.predict(7.5)
print(f"Predicted Score for 7.5 Study Hours: {predicted_score:.1f}%")`,
    codeExplanation: [
      "fit(X, y): Computes optimal line parameters (slope and intercept) by minimizing squared error.",
      "predict(x_val): Uses the learned equation y = mx + b to forecast unknown target values.",
      "In production: Handled via 'from sklearn.linear_model import LinearRegression'.",
      "Features (X): Input variables (hours studied). Labels (y): Target outcome (exam score)."
    ],
    expectedOutput: `Model Trained! Formula: Score = 8.17 * Hours + 43.19
Predicted Score for 7.5 Study Hours: 104.5%`,
    multipleExamples: [
      {
        title: "Classification vs Regression",
        description: "Predicting continuous numbers vs predicting discrete categories",
        code: `# Regression: Predicts continuous values (House prices, stock returns, temperatures).
# Classification: Predicts discrete classes (Spam/Not Spam, Fraud/Legit, Cat/Dog).
print("Regression outputs numbers; Classification outputs labels.")`,
        output: "Regression outputs numbers; Classification outputs labels."
      }
    ],
    commonMistakes: [
      "Evaluating a model on the same data it was trained on! This masks overfitting. Always hold out a test set via train_test_split.",
      "Overfitting: When a model memorizes training noise instead of general patterns. It scores 100% on training data but fails completely on new real-world data.",
      "Failing to normalize/scale features when using distance-based algorithms like KNN or SVM."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between Overfitting and Underfitting?",
        answer: "Overfitting (high variance) occurs when a model is overly complex and memorizes noise in the training set, failing on new test data. Underfitting (high bias) occurs when a model is too simple to capture the underlying pattern even on training data.",
        level: "Intermediate"
      },
      {
        question: "2. What is the purpose of train_test_split?",
        answer: "It splits historical data into two isolated sets: a training set to train model weights, and an unseen test set to objectively evaluate the model's true real-world generalization performance.",
        level: "Beginner"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Calculate Mean Squared Error (MSE)",
        difficulty: "Intermediate",
        task: "Given actual = [10, 20, 30] and predicted = [12, 19, 31], compute MSE = sum((act - pred)**2) / n.",
        hint: "sum((a - p)**2 for a, p in zip(actual, predicted)) / len(actual)",
        solution: "act = [10, 20, 30]\npred = [12, 19, 31]\nmse = sum((a - p)**2 for a, p in zip(act, pred)) / len(act)\nprint(f'MSE: {mse:.2f}')"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Accuracy Metric Calculator",
        difficulty: "Beginner",
        task: "Given y_true = ['cat', 'dog', 'cat', 'cat'] and y_pred = ['cat', 'dog', 'dog', 'cat'], compute accuracy percentage.",
        hint: "sum(t == p) / len(y_true) * 100",
        solution: "y_t = ['cat', 'dog', 'cat', 'cat']\ny_p = ['cat', 'dog', 'dog', 'cat']\nacc = (sum(t == p for t, p in zip(y_t, y_p)) / len(y_t)) * 100\nprint(f'Accuracy: {acc:.1f}%')"
      }
    ],
    quiz: [
      {
        question: "Which type of machine learning problem predicts discrete labels like 'Spam' or 'Not Spam'?",
        options: ["Regression", "Classification", "Clustering", "Dimensionality Reduction"],
        correctAnswer: 1,
        explanation: "Classification algorithms predict discrete category labels."
      }
    ],
    summary: "Machine learning trains algorithms to detect patterns in data. Supervised learning splits data into features and labels, using regression for continuous predictions and classification for categories.",
    relatedLessons: ["py-mod21-1", "py-mod23-1"]
  },

  // MODULE 23: Python Web Development
  {
    id: "py-mod23-1",
    title: "23. Python Web Development: FastAPI, Flask, Routing & REST Endpoints",
    section: "Module 23: Python Web Development",
    moduleNumber: 23,
    moduleTitle: "Python Web Development",
    difficulty: "Advanced",
    duration: "15 min",
    keyConcepts: ["FastAPI", "Flask", "Routing", "HTTP Request/Response", "Pydantic", "Jinja", "Microservices", "CORS"],
    meaning: "Python web development is using Python frameworks (FastAPI, Flask, Django) to build server-side web applications, REST APIs, and microservices.",
    definition: "FastAPI is a modern, high-performance web framework for building APIs with Python 3.8+ based on standard Python type hints and ASGI. Flask is a lightweight WSGI microframework for flexible prototyping.",
    whyUseIt: "Modern applications require robust backends for user authentication, business logic, database queries, and mobile/web client integration.",
    introduction: "In this lesson, you will master setting up web routes, request validation with Pydantic, HTTP status codes, JSON responses, connecting databases, and deploying Python web servers.",
    simpleExplanation: "A web server is like a post office. When a web browser sends a letter (HTTP request to /profile), the server routes it to the right department, prepares the response package (JSON or HTML), and mails it back to the user.",
    syntax: "# FastAPI Microservice Pattern:\nfrom fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass Item(BaseModel):\n    name: str\n    price: float\n\n@app.post(\"/items\", status_code=201)\ndef create_item(item: Item):\n    return {\"status\": \"created\", \"item\": item.dict()}",
    codeExample: `# Simulating a Complete Web Application Router
class WebRouter:
    def __init__(self):
        self.routes = {}

    def route(self, path: str, method: str = "GET"):
        def decorator(handler):
            self.routes[(method.upper(), path)] = handler
            return handler
        return decorator

    def handle_request(self, method: str, path: str, **kwargs):
        key = (method.upper(), path)
        if key in self.routes:
            return {"status": 200, "data": self.routes[key](**kwargs)}
        return {"status": 404, "error": f"Endpoint '{method} {path}' not found"}

# Initialize router
app = WebRouter()

# In-memory database
db_courses = [
    {"id": 1, "title": "Python From Zero", "level": "Beginner"},
    {"id": 2, "title": "Full-Stack Engineering", "level": "Advanced"}
]

@app.route("/api/courses", "GET")
def get_courses():
    return db_courses

@app.route("/api/courses/count", "GET")
def count_courses():
    return {"total_courses": len(db_courses)}

# Simulate incoming HTTP requests
print("GET /api/courses ->", app.handle_request("GET", "/api/courses"))
print("GET /api/courses/count ->", app.handle_request("GET", "/api/courses/count"))
print("GET /api/missing ->", app.handle_request("GET", "/api/missing"))`,
    codeExplanation: [
      "@app.route(path, method): Decorator registering an endpoint path and HTTP verb.",
      "handle_request: Simulates the server dispatching incoming HTTP requests to route handlers.",
      "status 200 vs 404: Returns appropriate HTTP responses based on route existence."
    ],
    expectedOutput: `GET /api/courses -> {'status': 200, 'data': [{'id': 1, 'title': 'Python From Zero', 'level': 'Beginner'}, {'id': 2, 'title': 'Full-Stack Engineering', 'level': 'Advanced'}]}
GET /api/courses/count -> {'status': 200, 'data': {'total_courses': 2}}
GET /api/missing -> {'status': 404, 'error': "Endpoint 'GET /api/missing' not found"}`,
    multipleExamples: [
      {
        title: "FastAPI vs Flask",
        description: "Comparing synchronous WSGI vs modern async ASGI",
        code: `# Flask (WSGI): Synchronous, simple, classic.
# FastAPI (ASGI): Asynchronous (async/await), auto-generates Swagger docs, uses Pydantic validation.
print("FastAPI is the modern standard for high-performance Python APIs.")`,
        output: "FastAPI is the modern standard for high-performance Python APIs."
      }
    ],
    commonMistakes: [
      "Blocking the async event loop in FastAPI by running synchronous long-running operations inside 'async def' routes.",
      "Forgetting to validate and sanitize request payloads before saving to databases.",
      "Hardcoding database connection strings inside source code instead of using environment configuration."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between WSGI and ASGI in Python?",
        answer: "WSGI (Web Server Gateway Interface) is synchronous and handles requests one-by-one per worker thread (used by Flask and Django). ASGI (Asynchronous Server Gateway Interface) is asynchronous and supports concurrent connections, async/await, and WebSockets (used by FastAPI and Starlette).",
        level: "Intermediate"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Health Check Route",
        difficulty: "Beginner",
        task: "Write a health check endpoint dictionary returning status='healthy' and timestamp.",
        hint: "{'status': 'healthy', 'uptime': 100}",
        solution: "health = {'status': 'healthy', 'timestamp': '2026-10-22'}\nprint(health)"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Mock Route Dispatcher",
        difficulty: "Intermediate",
        task: "Write a function get_endpoint(routes, path) returning handler result or 404.",
        hint: "routes.get(path, lambda: '404')()",
        solution: "routes = {'/': lambda: 'Home', '/about': lambda: 'About'}\nprint(routes.get('/', lambda: '404')())"
      }
    ],
    quiz: [
      {
        question: "Which modern Python framework automatically generates interactive Swagger/OpenAPI documentation?",
        options: ["Flask", "FastAPI", "Bottle", "TurboGears"],
        correctAnswer: 1,
        explanation: "FastAPI automatically generates interactive Swagger UI documentation at /docs based on Pydantic schemas."
      }
    ],
    summary: "Python web development powers REST APIs and web services using frameworks like FastAPI and Flask with routing, parameter validation, and database integration.",
    relatedLessons: ["py-mod17-1", "py-mod24-1"]
  },

  // MODULE 24: Automation and Scripting
  {
    id: "py-mod24-1",
    title: "24. Automation & Scripting: File Organization, Web Scraping & CLI Flags",
    section: "Module 24: Automation and Scripting",
    moduleNumber: 24,
    moduleTitle: "Automation and Scripting",
    difficulty: "Intermediate",
    duration: "14 min",
    keyConcepts: ["Automation", "Scripting", "pathlib", "shutil", "Beautiful Soup", "argparse", "Cron", "Batch Processing"],
    meaning: "Automation is writing Python scripts that perform repetitive computer tasks automatically without human intervention.",
    definition: "Python scripts automate operating system operations using `pathlib` and `shutil` (file management), `beautifulsoup4` (HTML web scraping), and `argparse` (command-line interfaces).",
    whyUseIt: "Tasks that take hours manually (renaming 5,000 files, scraping daily competitor prices, sending automated email reports) can execute in seconds with Python.",
    introduction: "In this lesson, you will master organizing directories with pathlib, parsing web pages with Beautiful Soup, parsing CLI flags with argparse, and building scheduled automated tasks.",
    simpleExplanation: "Think of an automation script as your tireless personal digital assistant. You tell it: 'Every evening at 6 PM, sort all files in my Downloads folder into images, documents, and code folders,' and it does it instantly.",
    syntax: "# Command-Line Flag Parsing with argparse:\nimport argparse\n\nparser = argparse.ArgumentParser(description=\"File Organizer CLI\")\nparser.add_argument(\"--dir\", default=\".\", help=\"Target directory\")\nparser.add_argument(\"--dry-run\", action=\"store_true\", help=\"Preview without changes\")\n# args = parser.parse_args()",
    codeExample: `# Demonstrating Automated File Classifier & HTML Parser
# 1. Automated File Extension Categorizer Simulation
files_to_organize = [
    "invoice_2026.pdf",
    "avatar.png",
    "script.py",
    "notes.txt",
    "banner.jpg",
    "backup.zip"
]

EXTENSION_CATEGORIES = {
    "Documents": [".pdf", ".txt", ".docx"],
    "Images": [".png", ".jpg", ".jpeg", ".svg"],
    "Code": [".py", ".js", ".html", ".css"],
    "Archives": [".zip", ".tar", ".gz"]
}

def classify_file(filename: str) -> str:
    ext = "." + filename.split(".")[-1].lower()
    for category, extensions in EXTENSION_CATEGORIES.items():
        if ext in extensions:
            return category
    return "Others"

organized_report = {}
for fname in files_to_organize:
    cat = classify_file(fname)
    organized_report.setdefault(cat, []).append(fname)

print("=== Automated Directory Clean-up Report ===")
for category, items in organized_report.items():
    print(f"[{category}] ({len(items)} files): {', '.join(items)}")

# 2. Simulated Web Scraper (Extracting Titles from HTML)
raw_html = """
<div class="tutorials">
    <h2 class="title">Python Basics</h2>
    <h2 class="title">FastAPI Microservices</h2>
    <h2 class="title">Machine Learning Foundations</h2>
</div>
"""
import re
titles = re.findall(r'<h2 class="title">(.*?)</h2>', raw_html)
print(f"\\nScraped {len(titles)} Tutorial Titles:")
for idx, t in enumerate(titles, 1):
    print(f"  {idx}. {t}")`,
    codeExplanation: [
      "classify_file(): Inspects file extensions and categorizes into Documents, Images, Code, etc.",
      "organized_report.setdefault(cat, []): Appends each file into its designated bucket.",
      "re.findall(...): Extracts text matching HTML patterns (in production, Beautiful Soup is used).",
      "In production: 'shutil.move(src, dest)' moves actual physical files on disk."
    ],
    expectedOutput: `=== Automated Directory Clean-up Report ===
[Documents] (2 files): invoice_2026.pdf, notes.txt
[Images] (2 files): avatar.png, banner.jpg
[Code] (1 files): script.py
[Archives] (1 files): backup.zip

Scraped 3 Tutorial Titles:
  1. Python Basics
  2. FastAPI Microservices
  3. Machine Learning Foundations`,
    multipleExamples: [
      {
        title: "Ethical Web Scraping Rules",
        description: "Legal and ethical guidelines before scraping websites",
        code: `# Always check:
# 1. The website's robots.txt (e.g. https://example.com/robots.txt).
# 2. The site's Terms of Service (ToS).
# 3. Add delays (time.sleep) to avoid overloading the target server.
# 4. Use official APIs whenever available.
print("Responsible scraping respects site terms, rate limits, and server loads.")`,
        output: "Responsible scraping respects site terms, rate limits, and server loads."
      }
    ],
    commonMistakes: [
      "Scraping websites without rate-limiting (time.sleep), triggering IP bans or denial-of-service alerts.",
      "Hardcoding brittle file paths like 'C:\\Users\\Alex\\' instead of using 'pathlib.Path.home()' or relative paths.",
      "Running file deletion or movement scripts without a '--dry-run' preview flag, risking accidental file loss."
    ],
    interviewQuestions: [
      {
        question: "1. What is the difference between os.path and pathlib in Python?",
        answer: "os.path operates on raw string representations of paths. pathlib (introduced in Python 3.4) provides an object-oriented API where paths are rich objects with intuitive methods (.exists(), .read_text(), .parent, / operator for joining), making code cleaner and cross-platform safe.",
        level: "Beginner"
      }
    ],
    practiceExercises: [
      {
        title: "Exercise 1: Path Extension Extractor",
        difficulty: "Beginner",
        task: "Extract the file extension from filename = 'data_summary.csv'.",
        hint: "filename.split('.')[-1]",
        solution: "fn = 'data_summary.csv'\nprint('Ext:', fn.split('.')[-1])"
      }
    ],
    codingChallenges: [
      {
        title: "Challenge 1: Batch Rename Simulator",
        difficulty: "Intermediate",
        task: "Given filenames = ['photo1.jpg', 'photo2.jpg'], generate new names with prefix 'vacation_2026_'.",
        hint: "[f'vacation_2026_{f}' for f in filenames]",
        solution: "files = ['photo1.jpg', 'photo2.jpg']\nrenamed = [f'vacation_2026_{f}' for f in files]\nprint('Renamed:', renamed)"
      }
    ],
    quiz: [
      {
        question: "Which modern standard library module provides object-oriented filesystem paths?",
        options: ["os.path", "pathlib", "sys", "shutil"],
        correctAnswer: 1,
        explanation: "pathlib provides an object-oriented interface for filesystem paths."
      }
    ],
    summary: "Python automation saves hours by eliminating repetitive manual work. Use pathlib for file organization, Beautiful Soup for web extraction, and argparse for CLI interfaces.",
    relatedLessons: ["py-mod13-1", "py-mod25-1"]
  }
];
