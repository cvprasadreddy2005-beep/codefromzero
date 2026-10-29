# scripts/data_part4.py
# Categories:
# C Programming (15), C++ Programming (15), Web Development (15),
# Computer Networks (7), Operating Systems (7), Software Engineering and Testing (6), Problem Solving and Aptitude (5)
# Total = 70 questions

items_p4 = []

# --- C PROGRAMMING (15) ---
c_questions = [
    ("Beginner", "Hello World", "Coding", "Write a complete C program to print 'Hello, Code From Zero!' including `#include <stdio.h>` and returning 0 from `main`.",
     ["Include `<stdio.h>`.", "Return 0 indicating successful termination."],
     "Standard C program structure.",
     "Standard C entry point returning status code.",
     {"code": "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, Code From Zero!\\n\");\n    return 0;\n}"}),

    ("Beginner", "Format Specifiers", "Multiple-Choice", "Which `printf` format specifier is used to print an integer and a double float in C?",
     ["%d or %i for integer, %f for float/double."],
     "`%d` for integer and `%f` (or `%lf`) for double",
     "Format specifiers instruct printf how to interpret memory bytes.",
     {"options": ["`%d` for integer and `%f` (or `%lf`) for double", "`%s` and `%c`", "`%p` and `%x`", "`%i` and `%d`"], "correctAnswer": "`%d` for integer and `%f` (or `%lf`) for double"}),

    ("Beginner", "Scanf", "Coding", "Write C code to read an integer from user input and print its square.",
     ["Pass address `&num` to `scanf`."],
     "scanf with address-of operator.",
     "Requires memory address pointer to mutate variable.",
     {"code": "int num;\nprintf(\"Enter a number: \");\nscanf(\"%d\", &num);\nprintf(\"Square: %d\\n\", num * num);"}),

    ("Beginner", "Conditionals", "Coding", "Write a C function to check if a number is positive, negative, or zero.",
     ["Use `if (n > 0)`, `else if (n < 0)`, `else`."],
     "Conditionals in C.",
     "Basic control flow logic.",
     {"code": "void check(int n) {\n    if (n > 0) printf(\"Positive\\n\");\n    else if (n < 0) printf(\"Negative\\n\");\n    else printf(\"Zero\\n\");\n}"}),

    ("Beginner", "Loops", "Coding", "Write a C `for` loop to compute the sum of numbers from 1 to 100.",
     ["Initialize accumulator `sum = 0`."],
     "For loop accumulator.",
     "Computes summation iteratively.",
     {"code": "int sum = 0;\nfor (int i = 1; i <= 100; i++) {\n    sum += i;\n}\nprintf(\"Sum: %d\\n\", sum);"}),

    ("Intermediate", "Pointers", "Coding", "Write a function `void swap(int *a, int *b)` that swaps two integers using pointers.",
     ["Dereference pointers using `*a` and `*b`."],
     "Pass-by-reference using pointers.",
     "Manipulates memory directly across function stack frames.",
     {"code": "void swap(int *a, int *b) {\n    int temp = *a;\n    *a = *b;\n    *b = temp;\n}"}),

    ("Intermediate", "Pointers vs Arrays", "Multiple-Choice", "What does the array variable name decay to when passed as an argument to a function in C?",
     ["Decays into a pointer to its first element."],
     "A pointer to its first element (`&arr[0]`)",
     "Arrays decay to raw pointers losing sizeof array information.",
     {"options": ["A pointer to its first element (`&arr[0]`)", "A deep copy of the whole array", "A struct container", "An integer length counter"], "correctAnswer": "A pointer to its first element (`&arr[0]`)", "tags": ["c", "pointers"]}),

    ("Intermediate", "Dynamic Memory", "Coding", "Allocate an integer array of size `n` dynamically using `malloc`, check for NULL, and free it.",
     ["Use `malloc(n * sizeof(int))` and `free(ptr)`."],
     "Dynamic memory allocation with malloc and free.",
     "Allocates heap memory and prevents memory leaks by freeing.",
     {"code": "int *arr = (int *)malloc(n * sizeof(int));\nif (arr == NULL) {\n    fprintf(stderr, \"Allocation failed\\n\");\n    return 1;\n}\n// Use array\nfree(arr);"}),

    ("Intermediate", "Strings in C", "Coding", "Implement `int my_strlen(const char *s)` without using `string.h`.",
     ["Iterate until finding null terminator `'\\0'`."],
     "String length calculator.",
     "Traverses contiguous characters until null terminator byte.",
     {"code": "int my_strlen(const char *s) {\n    int len = 0;\n    while (s[len] != '\\0') len++;\n    return len;\n}"}),

    ("Intermediate", "Structs", "Coding", "Define a `struct Point` with coordinates `x` and `y`, and write a function to compute distance from origin.",
     ["Use `sqrt(p.x * p.x + p.y * p.y)`."],
     "Struct declaration and usage.",
     "Groups composite data members into a custom type.",
     {"code": "#include <math.h>\nstruct Point {\n    double x;\n    double y;\n};\ndouble distFromOrigin(struct Point p) {\n    return sqrt(p.x * p.x + p.y * p.y);\n}"}),

    ("Intermediate", "File I/O", "Coding", "Write code to open a file `'data.txt'` for writing, write 'Hello File' to it, and close it.",
     ["Use `fopen`, `fprintf`, and `fclose`."],
     "File writing in C.",
     "Manages file streams reliably.",
     {"code": "FILE *fp = fopen(\"data.txt\", \"w\");\nif (fp != NULL) {\n    fprintf(fp, \"Hello File\\n\");\n    fclose(fp);\n}"}),

    ("Advanced", "Memory Leak / Valgrind", "Multiple-Choice", "What error occurs if heap memory allocated via `malloc` is never released with `free`?",
     ["Memory leak."],
     "Memory Leak",
     "Unreleased memory remains allocated until the process terminates, exhausting system RAM over time.",
     {"options": ["Memory Leak", "Buffer Overflow", "Segmentation Fault", "Deadlock"], "correctAnswer": "Memory Leak"}),

    ("Advanced", "Function Pointers", "Coding", "Declare a function pointer type that takes two ints and returns an int, and use it to call an `add` function.",
     ["Declaration syntax: `int (*op)(int, int) = add;`."],
     "Function pointer invocation.",
     "Enables callback mechanisms and strategy patterns in C.",
     {"code": "int add(int a, int b) { return a + b; }\nint (*op)(int, int) = add;\nint result = op(5, 7);"}),

    ("Advanced", "Preprocessor Macros", "Coding", "Write a safe preprocessor macro `#define MAX(a, b)` that avoids operator precedence bugs.",
     ["Wrap all variables and the whole expression in parentheses."],
     "Safe macro definition.",
     "Parenthesizing prevents precedence errors during text substitution.",
     {"code": "#define MAX(a, b) (((a) > (b)) ? (a) : (b))"}),

    ("Advanced", "Segmentation Fault", "Multiple-Choice", "What commonly causes a 'Segmentation Fault (SIGSEGV)' in a C program?",
     ["Dereferencing NULL, wild, or out-of-bounds memory pointers."],
     "Attempting to access unauthorized memory addresses (e.g. dereferencing a NULL or dangling pointer)",
     "Hardware MMU triggers an OS signal when illegal memory pages are accessed.",
     {"options": ["Attempting to access unauthorized memory addresses (e.g. dereferencing a NULL or dangling pointer)", "A syntax typo in variable name", "Dividing by zero", "Missing `#include <stdio.h>`"], "correctAnswer": "Attempting to access unauthorized memory addresses (e.g. dereferencing a NULL or dangling pointer)"})
]

for q in c_questions: items_p4.append(("C Programming", *q))
assert len(c_questions) == 15

# --- C++ PROGRAMMING (15) ---
cpp_questions = [
    ("Beginner", "I/O", "Coding", "Write a C++ program using `std::cin` and `std::cout` to read user's name and print a greeting.",
     ["Include `<iostream>` and `<string>`."],
     "C++ stream I/O.",
     "Type-safe stream I/O in C++.",
     {"code": "#include <iostream>\n#include <string>\n\nint main() {\n    std::string name;\n    std::cout << \"Enter your name: \";\n    std::cin >> name;\n    std::cout << \"Welcome, \" << name << \"!\\n\";\n    return 0;\n}"}),

    ("Beginner", "References vs Pointers", "Multiple-Choice", "What is the primary difference between a C++ reference (`int &ref = x;`) and a C pointer (`int *ptr = &x;`)?",
     ["References cannot be null and cannot be reseated to another variable once bound."],
     "References must be initialized upon declaration, cannot be reseated, and cannot be null",
     "References act as permanent syntactical aliases for existing objects.",
     {"options": ["References must be initialized upon declaration, cannot be reseated, and cannot be null", "References are stored on the GPU", "Pointers cannot access memory", "References take 16 bytes"], "correctAnswer": "References must be initialized upon declaration, cannot be reseated, and cannot be null"}),

    ("Beginner", "Vectors", "Coding", "Create a `std::vector<int>`, add numbers 10, 20, 30 using `push_back`, and print them using a range-based for loop.",
     ["Include `<vector>`.", "Use `for (int x : vec)`."],
     "C++ std::vector usage.",
     "Dynamic contiguous array managing heap memory automatically.",
     {"code": "#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> v = {10, 20, 30};\n    for (int num : v) std::cout << num << \" \";\n    std::cout << \"\\n\";\n}"}),

    ("Beginner", "Classes", "Coding", "Create a C++ class `Student` with private `name` and public constructor and getter.",
     ["Use `class Student { private: ... public: ... };`."],
     "C++ class encapsulation.",
     "Class definition with access specifiers.",
     {"code": "#include <string>\nclass Student {\nprivate:\n    std::string name;\npublic:\n    Student(std::string n) : name(n) {}\n    std::string getName() const { return name; }\n};"}),

    ("Beginner", "Namespaces", "Multiple-Choice", "Why is `using namespace std;` often considered bad practice in large header files?",
     ["Pollutes the global namespace and causes name collision conflicts."],
     "It introduces hundreds of identifiers into the global namespace, causing potential naming collisions",
     "Best practice is qualifying identifiers (`std::string`, `std::cout`) or scoping inside functions.",
     {"options": ["It introduces hundreds of identifiers into the global namespace, causing potential naming collisions", "It slows down program execution runtime", "It increases compiled binary size by 10x", "It disables compiler optimizations"], "correctAnswer": "It introduces hundreds of identifiers into the global namespace, causing potential naming collisions"}),

    ("Intermediate", "Constructors & Destructors", "Coding", "Write a class `Resource` that prints 'Acquired' in its constructor and 'Released' in its destructor (RAII pattern).",
     ["Destructor syntax is `~Resource()`."],
     "RAII resource lifetime pattern.",
     "Ties resource acquisition and release to stack lifetime.",
     {"code": "#include <iostream>\nclass Resource {\npublic:\n    Resource() { std::cout << \"Acquired\\n\"; }\n    ~Resource() { std::cout << \"Released\\n\"; }\n};"}),

    ("Intermediate", "Operator Overloading", "Coding", "Overload the `+` operator for a `Vector2D` struct containing `float x, y`.",
     ["Signature: `Vector2D operator+(const Vector2D &other) const`."],
     "Operator overloading in C++.",
     "Allows natural mathematical syntax for custom types.",
     {"code": "struct Vector2D {\n    float x, y;\n    Vector2D operator+(const Vector2D &o) const {\n        return { x + o.x, y + o.y };\n    }\n};"}),

    ("Intermediate", "Templates", "Coding", "Write a template function `template <typename T> T getMax(T a, T b)`.",
     ["Use `template <typename T>`."],
     "Function template.",
     "Enables generic programming evaluated at compile time.",
     {"code": "template <typename T>\nT getMax(T a, T b) {\n    return (a > b) ? a : b;\n}"}),

    ("Intermediate", "Polymorphism / Virtual", "Coding", "Create a base class `Shape` with a `virtual void draw() const` and a derived class `Circle` overriding it.",
     ["Use `virtual` in base and `override` in derived class."],
     "Virtual methods and dynamic dispatch.",
     "Enables runtime polymorphism via vtable dispatch.",
     {"code": "#include <iostream>\nclass Shape {\npublic:\n    virtual void draw() const { std::cout << \"Shape\\n\"; }\n    virtual ~Shape() = default;\n};\nclass Circle : public Shape {\npublic:\n    void draw() const override { std::cout << \"Circle\\n\"; }\n};"}),

    ("Intermediate", "Virtual Destructor", "Multiple-Choice", "Why should base classes with virtual methods always declare a `virtual ~Base() = default;` destructor?",
     ["Ensures derived class destructor is invoked when deleting via a base pointer."],
     "To ensure the derived class destructor is called when an object is deleted through a base class pointer, preventing resource leaks",
     "Without virtual destructor, only base destructor runs on `delete basePtr`.",
     {"options": ["To ensure the derived class destructor is called when an object is deleted through a base class pointer, preventing resource leaks", "To allow base class to be copied", "Required for template compilation", "Enables multithreading"], "correctAnswer": "To ensure the derived class destructor is called when an object is deleted through a base class pointer, preventing resource leaks"}),

    ("Intermediate", "STL Maps", "Coding", "Count word frequencies in a vector of strings using `std::unordered_map<std::string, int>`.",
     ["Use `map[word]++`."],
     "std::unordered_map tallying.",
     "Hash table key-value mapping with average O(1) complexity.",
     {"code": "#include <unordered_map>\n#include <string>\n#include <vector>\n\nstd::unordered_map<std::string, int> countWords(const std::vector<std::string> &words) {\n    std::unordered_map<std::string, int> counts;\n    for (const auto &w : words) counts[w]++;\n    return counts;\n}"}),

    ("Advanced", "Smart Pointers (unique_ptr)", "Coding", "Demonstrate `std::unique_ptr` creating an object dynamically with `std::make_unique` that automatically cleans up memory.",
     ["Include `<memory>` and use `std::make_unique<T>()`."],
     "std::unique_ptr exclusive ownership.",
     "Enforces zero-overhead single ownership without manual delete.",
     {"code": "#include <memory>\n#include <iostream>\n\nvoid demo() {\n    std::unique_ptr<int> ptr = std::make_unique<int>(42);\n    std::cout << *ptr << \"\\n\";\n    // Automatically deleted when exiting scope\n}"}),

    ("Advanced", "Move Semantics", "Multiple-Choice", "What does `std::move(x)` do in modern C++ (C++11 and beyond)?",
     ["Casts an lvalue to an rvalue reference, enabling resource theft instead of deep copying."],
     "It performs an unconditional static_cast to an rvalue reference (`T&&`), enabling move constructors to steal resources without deep copying",
     "Zero runtime execution cost; enables efficient resource transfers.",
     {"options": ["It performs an unconditional static_cast to an rvalue reference (`T&&`), enabling move constructors to steal resources without deep copying", "Physically relocates memory to another CPU core", "Deletes variable immediately", "Flushes CPU caches"], "correctAnswer": "It performs an unconditional static_cast to an rvalue reference (`T&&`), enabling move constructors to steal resources without deep copying"}),

    ("Advanced", "Lambdas", "Coding", "Sort a vector of pairs by second element in ascending order using `std::sort` and a C++ lambda expression.",
     ["Use `[](const auto &a, const auto &b) { return a.second < b.second; }`."],
     "C++ lambda comparator.",
     "Inlined compile-time predicate.",
     {"code": "#include <vector>\n#include <algorithm>\n\nvoid sortPairs(std::vector<std::pair<int, int>> &pairs) {\n    std::sort(pairs.begin(), pairs.end(), [](const auto &a, const auto &b) {\n        return a.second < b.second;\n    });\n}"}),

    ("Advanced", "Rule of 5", "Conceptual", "What are the five special member functions comprising the C++ 'Rule of Five'?",
     ["Destructor, Copy Constructor, Copy Assignment, Move Constructor, Move Assignment."],
     "Destructor, Copy Constructor, Copy Assignment Operator, Move Constructor, and Move Assignment Operator.",
     "If a class manages raw resources requiring custom cleanup or copying, it should explicitly define all five to ensure safe lifecycle semantics.",
     {})
]

for q in cpp_questions: items_p4.append(("C++ Programming", *q))
assert len(cpp_questions) == 15

# --- WEB DEVELOPMENT (15) ---
web_questions = [
    ("Beginner", "Client-Server", "Multiple-Choice", "What is the primary architectural role of the client in a web application?",
     ["Renders user interface and sends requests to server."],
     "Renders the user interface, handles user interactions, and sends HTTP requests to the backend server",
     "Client handles presentation and user events; server handles business logic, security, and persistence.",
     {"options": ["Renders the user interface, handles user interactions, and sends HTTP requests to the backend server", "Stores the database master files", "Executes background cron tasks", "Issues SSL certificates"], "correctAnswer": "Renders the user interface, handles user interactions, and sends HTTP requests to the backend server"}),

    ("Beginner", "HTTP Methods", "Multiple-Choice", "Which HTTP method is specifically intended for retrieving data from a server without side effects (safe and idempotent)?",
     ["GET request."],
     "`GET`",
     "GET requests fetch resources without modifying server state.",
     {"options": ["`GET`", "`POST`", "`PUT`", "`DELETE`"], "correctAnswer": "`GET`"}),

    ("Beginner", "HTTP Status Codes", "Multiple-Choice", "What does an HTTP `404 Not Found` response code signify?",
     ["The requested URL/resource could not be found on server."],
     "The requested resource could not be found on the server",
     "4xx indicates client error; 404 indicates missing endpoint.",
     {"options": ["The requested resource could not be found on the server", "Server internal error", "Unauthorized access", "Successful redirection"], "correctAnswer": "The requested resource could not be found on the server"}),

    ("Beginner", "JSON", "Coding", "Parse a JSON string `const data = '{\"name\":\"CodeFromZero\",\"active\":true}'` in JavaScript and log the name.",
     ["Use `JSON.parse()`."],
     "JSON parsing.",
     "Converts JSON string into a native JavaScript object.",
     {"code": "const raw = '{\"name\":\"CodeFromZero\",\"active\":true}';\nconst obj = JSON.parse(raw);\nconsole.log(obj.name);"}),

    ("Beginner", "Fetch API", "Coding", "Write a JavaScript `fetch` call to retrieve data from `https://api.example.com/users` and log the JSON response.",
     ["Use `fetch(url).then(r => r.json()).then(data => console.log(data))`."],
     "Asynchronous fetch call.",
     "Standard modern browser networking API.",
     {"code": "fetch('https://api.example.com/users')\n  .then(res => res.json())\n  .then(data => console.log(data))\n  .catch(err => console.error(err));"}),

    ("Intermediate", "RESTful Principles", "Multiple-Choice", "In a RESTful API design, what endpoint and HTTP method should be used to update an existing user with ID 42 completely?",
     ["PUT /api/users/42."],
     "`PUT /api/users/42` (or `PATCH` for partial update)",
     "REST maps resources to plural nouns and actions to HTTP verbs.",
     {"options": ["`PUT /api/users/42` (or `PATCH` for partial update)", "`POST /api/updateUser?id=42`", "`GET /api/users/42/update`", "`DELETE /api/users/42`"], "correctAnswer": "`PUT /api/users/42` (or `PATCH` for partial update)"}),

    ("Intermediate", "Local Storage", "Coding", "Write functions to save an object `themeSettings` to `localStorage` and retrieve it safely with JSON parsing.",
     ["Use `localStorage.setItem` with `JSON.stringify` and `JSON.parse`."],
     "Local storage serialization and deserialization.",
     "Persists client settings across page reloads.",
     {"code": "function saveTheme(theme) {\n  localStorage.setItem('cfz_theme', JSON.stringify(theme));\n}\nfunction getTheme() {\n  try {\n    return JSON.parse(localStorage.getItem('cfz_theme')) || {};\n  } catch (e) {\n    return {};\n  }\n}"}),

    ("Intermediate", "SPA vs SSR", "Multiple-Choice", "What is the primary SEO benefit of Server-Side Rendering (SSR) over traditional Single Page Applications (SPAs)?",
     ["Server renders complete HTML before sending, allowing search engine crawlers to index content immediately."],
     "The server delivers pre-rendered HTML content on initial request, allowing search bots to index content immediately without executing client JavaScript",
     "Improves first contentful paint and search engine indexing reliability.",
     {"options": ["The server delivers pre-rendered HTML content on initial request, allowing search bots to index content immediately without executing client JavaScript", "SSR uses zero bandwidth", "SSR removes need for databases", "SSR runs without Node.js"], "correctAnswer": "The server delivers pre-rendered HTML content on initial request, allowing search bots to index content immediately without executing client JavaScript"}),

    ("Intermediate", "WebSockets", "Multiple-Choice", "How does a WebSocket connection differ from standard HTTP request-response cycles?",
     ["Full-duplex bidirectional persistent connection over a single TCP socket."],
     "WebSockets provide full-duplex, bidirectional, low-latency persistent communication over a single open TCP connection",
     "Allows server to push real-time updates directly to clients without polling.",
     {"options": ["WebSockets provide full-duplex, bidirectional, low-latency persistent communication over a single open TCP connection", "WebSockets only send binary audio", "They do not use TCP", "They expire after 10 seconds"], "correctAnswer": "WebSockets provide full-duplex, bidirectional, low-latency persistent communication over a single open TCP connection"}),

    ("Intermediate", "Express Routing", "Coding", "Write a basic Express.js router endpoint for `GET /api/items` returning a JSON array of items.",
     ["Use `router.get('/items', (req, res) => res.json(items))`."],
     "Express GET route.",
     "Standard REST endpoint declaration.",
     {"code": "import express from 'express';\nconst router = express.Router();\n\nrouter.get('/items', (req, res) => {\n  res.json([\n    { id: 1, name: 'Roadmap' },\n    { id: 2, name: 'Practice' }\n  ]);\n});\nexport default router;"}),

    ("Advanced", "JWT Authentication", "Multiple-Choice", "What are the three dot-separated components of a JSON Web Token (JWT)?",
     ["Header.Payload.Signature."],
     "Header, Payload, Signature",
     "Header specifies algorithm, Payload holds claims/identity data, Signature verifies integrity.",
     {"options": ["Header, Payload, Signature", "Username, Password, Salt", "Domain, Path, Expiration", "PublicKey, PrivateKey, Hash"], "correctAnswer": "Header, Payload, Signature"}),

    ("Advanced", "Web Performance / Core Web Vitals", "Multiple-Choice", "What does Largest Contentful Paint (LCP) measure in Google Core Web Vitals?",
     ["Render time of the largest image or text block visible within viewport."],
     "The time it takes for the largest visual content element (hero image or main heading) to become visible in the viewport",
     "Good user experience targets LCP under 2.5 seconds.",
     {"options": ["The time it takes for the largest visual content element (hero image or main heading) to become visible in the viewport", "The time to execute all JavaScript files", "The database query latency", "Total network payload size in megabytes"], "correctAnswer": "The time it takes for the largest visual content element (hero image or main heading) to become visible in the viewport"}),

    ("Advanced", "Service Workers / PWA", "Conceptual", "What is the role of a Service Worker in a Progressive Web Application (PWA)?",
     ["Background script intercepting network requests for offline caching and push notifications."],
     "A service worker runs in the background independent of web pages, intercepting network requests to serve cached assets offline and enabling push notifications and background synchronization.",
     "The backbone of offline resilience.",
     {}),

    ("Advanced", "HTTP/2 and HTTP/3", "Multiple-Choice", "What fundamental transport layer protocol does HTTP/3 utilize instead of TCP to eliminate Head-of-Line blocking?",
     ["QUIC protocol over UDP."],
     "QUIC over UDP",
     "Eliminates TCP head-of-line blocking by multiplexing independent streams over UDP.",
     {"options": ["QUIC over UDP", "SCTP over IP", "Raw ICMP", "WebSocket TCP"], "correctAnswer": "QUIC over UDP"}),

    ("Advanced", "Microfrontends", "Multiple-Choice", "What architectural goal do Microfrontends aim to achieve in large engineering organizations?",
     ["Decomposing a large frontend into independently developed, tested, and deployed sub-applications."],
     "Decomposing monolithic frontends into independently deployable, autonomous sub-applications owned by cross-functional teams",
     "Scales team velocity in large codebases.",
     {"options": ["Decomposing monolithic frontends into independently deployable, autonomous sub-applications owned by cross-functional teams", "Shrinking JavaScript bundles below 10kb", "Replacing CSS with web assembly", "Enforcing single framework usage"], "correctAnswer": "Decomposing monolithic frontends into independently deployable, autonomous sub-applications owned by cross-functional teams"})
]

for q in web_questions: items_p4.append(("Web Development", *q))
assert len(web_questions) == 15

# --- COMPUTER NETWORKS (7) ---
net_questions = [
    ("Beginner", "OSI Model", "Multiple-Choice", "How many layers are in the OSI reference model, and what is Layer 7?",
     ["7 layers; Layer 7 is Application."],
     "7 layers; Layer 7 is the Application Layer",
     "Physical, Data Link, Network, Transport, Session, Presentation, Application.",
     {"options": ["7 layers; Layer 7 is the Application Layer", "4 layers; Layer 4 is Network", "5 layers; Layer 5 is Transport", "7 layers; Layer 7 is Physical"], "correctAnswer": "7 layers; Layer 7 is the Application Layer"}),

    ("Beginner", "TCP vs UDP", "Multiple-Choice", "Why is UDP preferred over TCP for live video streaming and multiplayer online gaming?",
     ["Low latency without retransmission overhead."],
     "UDP is connectionless and does not wait for retransmissions or packet ordering, reducing latency",
     "Losing an occasional packet is preferable to stuttering delay.",
     {"options": ["UDP is connectionless and does not wait for retransmissions or packet ordering, reducing latency", "UDP is more secure than TCP", "UDP encrypts packets natively", "UDP has higher bandwidth"], "correctAnswer": "UDP is connectionless and does not wait for retransmissions or packet ordering, reducing latency"}),

    ("Beginner", "DNS", "Multiple-Choice", "What is the primary function of the Domain Name System (DNS)?",
     ["Translates human-readable domain names to machine IP addresses."],
     "Translates human-readable domain names (e.g. google.com) into numerical IP addresses (e.g. 142.250.190.46)",
     "The phonebook of the internet.",
     {"options": ["Translates human-readable domain names (e.g. google.com) into numerical IP addresses (e.g. 142.250.190.46)", "Encrypts user passwords", "Serves web pages", "Allocates MAC addresses"], "correctAnswer": "Translates human-readable domain names (e.g. google.com) into numerical IP addresses (e.g. 142.250.190.46)"}),

    ("Intermediate", "TCP 3-Way Handshake", "Multiple-Choice", "What is the sequence of packets exchanged to establish a TCP connection?",
     ["SYN -> SYN-ACK -> ACK."],
     "SYN -> SYN-ACK -> ACK",
     "Synchronizes sequence numbers and acknowledges readiness to transfer data.",
     {"options": ["SYN -> SYN-ACK -> ACK", "ACK -> SYN -> SYN-ACK", "HELLO -> ACK -> CONNECT", "FIN -> ACK -> FIN-ACK"], "correctAnswer": "SYN -> SYN-ACK -> ACK"}),

    ("Intermediate", "Subnetting", "Multiple-Choice", "How many usable host IP addresses are available in a `/24` IPv4 subnet (e.g., 192.168.1.0/24)?",
     ["Total 256 minus network and broadcast addresses."],
     "254 (256 total minus network address .0 and broadcast address .255)",
     "2^(32-24) - 2 = 254.",
     {"options": ["254", "256", "128", "512"], "correctAnswer": "254"}),

    ("Advanced", "BGP", "Multiple-Choice", "What is the role of the Border Gateway Protocol (BGP) on the global internet?",
     ["Routing traffic between Autonomous Systems (AS)."],
     "It routes traffic across the internet by exchanging reachability information between distinct Autonomous Systems (AS)",
     "The postal routing system of the global internet.",
     {"options": ["It routes traffic across the internet by exchanging reachability information between distinct Autonomous Systems (AS)", "Assigns Wi-Fi passwords", "Translates IPv4 to IPv6 inside routers", "Encrypts fiber optic cables"], "correctAnswer": "It routes traffic across the internet by exchanging reachability information between distinct Autonomous Systems (AS)"}),

    ("Advanced", "TLS Handshake", "Conceptual", "Explain the key steps in a modern TLS 1.3 Handshake that establish an encrypted connection.",
     ["ClientHello with key share, ServerHello with server key share and certificate, session keys derived."],
     "In TLS 1.3, the client sends ClientHello with supported ciphers and an ephemeral Diffie-Hellman key share. The server replies with ServerHello, its key share, and encrypted certificate. Both compute shared symmetric session keys in a single round-trip (1-RTT).",
     "Enables fast and secure forward secrecy.",
     {})
]

for q in net_questions: items_p4.append(("Computer Networks", *q))
assert len(net_questions) == 7

# --- OPERATING SYSTEMS (7) ---
os_questions = [
    ("Beginner", "Process vs Thread", "Multiple-Choice", "What is a key difference between a process and a thread?",
     ["Processes have isolated address spaces; threads within a process share the same memory space."],
     "A process has its own dedicated memory space; threads within the same process share memory space",
     "Thread creation is lightweight because memory is shared.",
     {"options": ["A process has its own dedicated memory space; threads within the same process share memory space", "Threads run on disk while processes run in RAM", "Processes cannot execute code", "A thread cannot share data with another thread"], "correctAnswer": "A process has its own dedicated memory space; threads within the same process share memory space"}),

    ("Beginner", "CPU Scheduling", "Multiple-Choice", "Which CPU scheduling algorithm gives each process a fixed time slice (quantum) in circular order?",
     ["Round Robin scheduling."],
     "Round Robin (RR)",
     "Preemptive scheduling algorithm designed for time-sharing systems.",
     {"options": ["Round Robin (RR)", "First-Come, First-Served (FCFS)", "Shortest Job First (SJF)", "Priority Scheduling"], "correctAnswer": "Round Robin (RR)"}),

    ("Beginner", "Virtual Memory", "Multiple-Choice", "What is the primary purpose of Virtual Memory in modern operating systems?",
     ["Gives each process the illusion of a large, contiguous, isolated address space and enables paging to disk."],
     "Provides memory protection and gives processes the illusion of large, isolated contiguous memory by mapping virtual pages to physical frames",
     "Protects processes from accessing each other's memory.",
     {"options": ["Provides memory protection and gives processes the illusion of large, isolated contiguous memory by mapping virtual pages to physical frames", "Speeds up CPU clock frequency", "Compresses hard drive files", "Overclocks GPU memory"], "correctAnswer": "Provides memory protection and gives processes the illusion of large, isolated contiguous memory by mapping virtual pages to physical frames"}),

    ("Intermediate", "Paging and Page Faults", "Multiple-Choice", "What triggers a 'Page Fault' interrupt in an operating system?",
     ["When a program attempts to access a virtual memory page that is currently not loaded into physical RAM."],
     "When an accessed virtual memory page is not currently resident in physical RAM and must be fetched from secondary storage",
     "The OS suspends the process, loads the page from swap/disk, updates the page table, and resumes execution.",
     {"options": ["When an accessed virtual memory page is not currently resident in physical RAM and must be fetched from secondary storage", "When the CPU overheats", "When a file has bad permissions", "When RAM is unplugged"], "correctAnswer": "When an accessed virtual memory page is not currently resident in physical RAM and must be fetched from secondary storage"}),

    ("Intermediate", "Mutex vs Semaphore", "Multiple-Choice", "What is the difference between a Mutex and a Counting Semaphore?",
     ["Mutex is binary with ownership; Semaphore has a counter for resource pooling."],
     "A Mutex is a locking mechanism with ownership (only the lock holder can unlock); a Semaphore is a signaling mechanism with an integer counter",
     "Semaphores can allow N concurrent threads; Mutex restricts access strictly to 1.",
     {"options": ["A Mutex is a locking mechanism with ownership (only the lock holder can unlock); a Semaphore is a signaling mechanism with an integer counter", "Mutex is for disk; Semaphore is for network", "Semaphores cannot be shared", "Mutex is deprecated in modern OS"], "correctAnswer": "A Mutex is a locking mechanism with ownership (only the lock holder can unlock); a Semaphore is a signaling mechanism with an integer counter"}),

    ("Advanced", "Thrashing", "Multiple-Choice", "What causes 'Thrashing' in an operating system?",
     ["Excessive paging where the OS spends more time swapping pages in/out of disk than executing instructions."],
     "When a system spends more time swapping pages between RAM and disk than executing actual instructions due to insufficient memory",
     "CPU utilization plummets because processes are constantly waiting on I/O.",
     {"options": ["When a system spends more time swapping pages between RAM and disk than executing actual instructions due to insufficient memory", "When two processes deadlock", "When a fan fails", "When cache memory is corrupted"], "correctAnswer": "When a system spends more time swapping pages between RAM and disk than executing actual instructions due to insufficient memory"}),

    ("Advanced", "Context Switching Overhead", "Conceptual", "What actions does the OS kernel perform during a CPU context switch, and why does it incur performance overhead?",
     ["Saving program counter, registers, stack pointer; flushing translation lookaside buffer (TLB)."],
     "The kernel saves the execution state (program counter, registers, stack pointer) of the current process into its PCB, flushes or invalidates CPU caches and Translation Lookaside Buffers (TLB), and restores the saved state of the next process.",
     "The cache invalidation and register swapping consume valuable CPU cycles without performing application work.",
     {})
]

for q in os_questions: items_p4.append(("Operating Systems", *q))
assert len(os_questions) == 7

# --- SOFTWARE ENGINEERING AND TESTING (6) ---
se_questions = [
    ("Beginner", "SOLID Principles", "Multiple-Choice", "In the SOLID design principles, what does the 'S' stand for?",
     ["Single Responsibility Principle."],
     "Single Responsibility Principle (SRP): A class should have one, and only one, reason to change",
     "Encourages high cohesion and clean modularity.",
     {"options": ["Single Responsibility Principle", "System Scalability Principle", "Sequential Execution Principle", "Synchronous Processing Principle"], "correctAnswer": "Single Responsibility Principle"}),

    ("Beginner", "Testing Pyramid", "Multiple-Choice", "According to the Testing Pyramid, which type of tests should form the largest foundation of your test suite?",
     ["Fast, isolated Unit Tests."],
     "Unit Tests",
     "Unit tests are fast, deterministic, inexpensive to run, and isolate logic bugs.",
     {"options": ["Unit Tests", "Manual Tests", "End-to-End (E2E) Tests", "Load Tests"], "correctAnswer": "Unit Tests"}),

    ("Intermediate", "TDD Cycle", "Multiple-Choice", "What are the three stages of the Test-Driven Development (TDD) cycle?",
     ["Red -> Green -> Refactor."],
     "Red (write failing test) -> Green (write minimal code to pass) -> Refactor (clean up code)",
     "Guides design through executable specifications.",
     {"options": ["Red -> Green -> Refactor", "Design -> Code -> Test", "Plan -> Build -> Ship", "Verify -> Validate -> Release"], "correctAnswer": "Red -> Green -> Refactor"}),

    ("Intermediate", "CI/CD", "Multiple-Choice", "What is the primary objective of Continuous Integration (CI)?",
     ["Automatically build and test code on every commit to catch bugs early."],
     "Automatically build and run test suites on code commits to detect integration issues and bugs as early as possible",
     "Prevents 'integration hell' at release time.",
     {"options": ["Automatically build and run test suites on code commits to detect integration issues and bugs as early as possible", "Automatically fire employees on test failure", "Encrypt repositories", "Deploy servers without testing"], "correctAnswer": "Automatically build and run test suites on code commits to detect integration issues and bugs as early as possible"}),

    ("Advanced", "Design Patterns", "Multiple-Choice", "Which design pattern is best suited for notifying multiple dependent objects automatically when an object changes state?",
     ["Observer Pattern."],
     "Observer Pattern",
     "Defines a one-to-many dependency where subjects notify registered observers of state changes.",
     {"options": ["Observer Pattern", "Factory Pattern", "Singleton Pattern", "Adapter Pattern"], "correctAnswer": "Observer Pattern"}),

    ("Advanced", "Code Smells / Refactoring", "Conceptual", "Give three classic examples of 'Code Smells' and how to refactor them.",
     ["Long method, God object, Duplicated code."],
     "1. Long Method: refactor using Extract Method. 2. Large Class (God Object): refactor using Extract Class to isolate responsibilities. 3. Duplicated Code (DRY violation): refactor by pulling shared logic into reusable utility functions or superclass template methods.",
     "Systematic refactoring maintains velocity and readability.",
     {})
]

for q in se_questions: items_p4.append(("Software Engineering and Testing", *q))
assert len(se_questions) == 6

# --- PROBLEM SOLVING AND APTITUDE (5) ---
ps_questions = [
    ("Beginner", "Speed Time Distance", "Coding", "If a car travels at 60 km/h for 2.5 hours, write a small function to calculate total distance.",
     ["Distance = Speed * Time."],
     "distance = speed * time = 150 km",
     "Basic rate calculation.",
     {"code": "def calculate_distance(speed_kmh, time_hours):\n    return speed_kmh * time_hours\n# calculate_distance(60, 2.5) -> 150.0"}),

    ("Beginner", "Percentage", "Multiple-Choice", "An item originally priced at $80 is on sale with a 25% discount. What is the sale price?",
     ["25% of 80 is 20, 80 - 20 = 60."],
     "$60",
     "$80 - (0.25 * $80) = $80 - $20 = $60.",
     {"options": ["$60", "$65", "$70", "$55"], "correctAnswer": "$60"}),

    ("Intermediate", "Pointers / Logic", "Multiple-Choice", "A clock shows 3:15. What is the angle between the hour hand and the minute hand in degrees?",
     ["At 15 minutes, the minute hand is at 90 deg. The hour hand has moved 15 * 0.5 = 7.5 deg past 90 deg."],
     "7.5 degrees",
     "Each minute, the minute hand moves 6 degrees and the hour hand moves 0.5 degrees. At 3:15, hour hand is at 90 + 7.5 = 97.5 degrees, minute hand is at 90 degrees.",
     {"options": ["7.5 degrees", "0 degrees", "15 degrees", "12.5 degrees"], "correctAnswer": "7.5 degrees"}),

    ("Intermediate", "Work and Time", "Coding", "Person A finishes a project in 10 days and Person B finishes in 15 days. Calculate how many days they take working together.",
     ["Together rate is 1/10 + 1/15 = 5/30 = 1/6 project per day."],
     "Combined work rate: 6 days.",
     "Harmonic rate computation: (A * B) / (A + B).",
     {"code": "def combined_days(a_days, b_days):\n    return (a_days * b_days) / (a_days + b_days)\n# combined_days(10, 15) -> 6.0"}),

    ("Advanced", "Probability / Logic", "Multiple-Choice", "In the famous Monty Hall problem with 3 doors (1 car, 2 goats), should the contestant switch doors after the host reveals a goat?",
     ["Switching gives a 2/3 probability of winning."],
     "Yes, switching doubles the probability of winning the car from 1/3 to 2/3",
     "The initial choice had a 1/3 probability of being correct; the remaining unopened door absorbs the remaining 2/3 probability after the host reveals a goat.",
     {"options": ["Yes, switching doubles the probability of winning the car from 1/3 to 2/3", "No, it makes no difference (50/50)", "Staying gives a 2/3 probability", "Switching guarantees 100% win"], "correctAnswer": "Yes, switching doubles the probability of winning the car from 1/3 to 2/3"})
]

for q in ps_questions: items_p4.append(("Problem Solving and Aptitude", *q))
assert len(ps_questions) == 5

assert len(items_p4) == 70
print("Part 4 complete: 70 questions.")
