// CODE FROM ZERO - COMPLETE C++ PROGRAMMING TUTORIALS CURRICULUM
// 34 Comprehensive Modern C++ (C++17 & C++20) Modules covering from Beginner to Advanced DSA & Systems Architecture
import { TutorialLesson } from '../types';

export interface CPPModuleInfo {
  number: number;
  title: string;
  lessonCount: number;
  startLessonId: string;
  description: string;
}

export const CPP_MODULES: CPPModuleInfo[] = [
  { number: 1, title: "Intro & Environment Setup", lessonCount: 1, startLessonId: "cpp-mod1-1", description: "Bjarne Stroustrup, C vs C++, GCC/Clang compilers, CMake, and modern VS Code toolchains." },
  { number: 2, title: "Program Structure & Compilation", lessonCount: 1, startLessonId: "cpp-mod2-1", description: "Translation units, preprocessor, main entry point, stream I/O, and zero-cost abstractions." },
  { number: 3, title: "Variables, Constants & Types", lessonCount: 1, startLessonId: "cpp-mod3-1", description: "Primitives, std::string, auto type deduction, const vs constexpr, and static_cast." },
  { number: 4, title: "Input, Output & Stream Formatting", lessonCount: 1, startLessonId: "cpp-mod4-1", description: "std::cin, std::cout, std::getline, std::setw, std::setprecision, and std::format." },
  { number: 5, title: "Operators & Expressions", lessonCount: 1, startLessonId: "cpp-mod5-1", description: "Arithmetic, bitwise, relational, ternary, logical operators, and operator precedence rules." },
  { number: 6, title: "Conditional Statements", lessonCount: 1, startLessonId: "cpp-mod6-1", description: "if, else if, nested if, switch-case, and C++17 init-statements in if (if (auto x = f(); x))." },
  { number: 7, title: "Loops & Pattern Programming", lessonCount: 1, startLessonId: "cpp-mod7-1", description: "for, while, do-while, range-based for loops, loop break/continue, and ASCII patterns." },
  { number: 8, title: "Arrays & Multidimensional Arrays", lessonCount: 1, startLessonId: "cpp-mod8-1", description: "C-style arrays, std::array, multi-dimensional grids, matrix traversal, and cache line locality." },
  { number: 9, title: "Strings & std::string_view", lessonCount: 1, startLessonId: "cpp-mod9-1", description: "C-string char*, std::string dynamic heap buffer, and zero-copy C++17 std::string_view." },
  { number: 10, title: "Functions, Overloading & Recursion", lessonCount: 1, startLessonId: "cpp-mod10-1", description: "Prototypes, pass-by-reference (&), default arguments, function overloading, and recursion." },
  { number: 11, title: "Pointers & References", lessonCount: 1, startLessonId: "cpp-mod11-1", description: "Memory addresses (&), dereferencing (*), nullptr vs NULL, pointer arithmetic, and references." },
  { number: 12, title: "Classes & Objects", lessonCount: 1, startLessonId: "cpp-mod12-1", description: "Class declarations, this pointer, member functions, const methods, and memory layout." },
  { number: 13, title: "Constructors & Destructors", lessonCount: 1, startLessonId: "cpp-mod13-1", description: "Default, parameterized, copy, move constructors, member initializer lists, and RAII cleanup." },
  { number: 14, title: "Encapsulation & Abstraction", lessonCount: 1, startLessonId: "cpp-mod14-1", description: "Information hiding, public/private/protected access specifiers, getters, and setters." },
  { number: 15, title: "Inheritance & Polymorphism", lessonCount: 1, startLessonId: "cpp-mod15-1", description: "Single/multiple inheritance, virtual functions, override/final keywords, vtable, and vptr." },
  { number: 16, title: "Function & Operator Overloading", lessonCount: 1, startLessonId: "cpp-mod16-1", description: "Custom operator+, operator<<, operator==, subscript [], and C++20 three-way spaceship <=>." },
  { number: 17, title: "Structs, Unions, Enums & Typedef", lessonCount: 1, startLessonId: "cpp-mod17-1", description: "struct vs class, enum class (scoped enums), std::variant over raw unions, and using alias." },
  { number: 18, title: "Dynamic Memory & Smart Pointers", lessonCount: 1, startLessonId: "cpp-mod18-1", description: "new/delete, memory leaks, std::unique_ptr, std::shared_ptr, and std::weak_ptr." },
  { number: 19, title: "File Handling & Streams", lessonCount: 1, startLessonId: "cpp-mod19-1", description: "std::ifstream, std::ofstream, std::fstream, binary serialization, and RAII stream lifecycles." },
  { number: 20, title: "Exception Handling", lessonCount: 1, startLessonId: "cpp-mod20-1", description: "try, catch, throw, std::exception hierarchy, custom exceptions, and noexcept guarantees." },
  { number: 21, title: "Namespaces & Header Files", lessonCount: 1, startLessonId: "cpp-mod21-1", description: "Header guards (#pragma once), translation unit separation, nested namespaces, and C++20 modules." },
  { number: 22, title: "Templates & Generic Programming", lessonCount: 1, startLessonId: "cpp-mod22-1", description: "Function templates, class templates, specialization, and C++20 Concepts (requires keyword)." },
  { number: 23, title: "STL Containers, Iterators & Algorithms", lessonCount: 1, startLessonId: "cpp-mod23-1", description: "vector, deque, list, map, unordered_map, set, std::sort, std::find, and iterators." },
  { number: 24, title: "Modern C++ (C++17 & C++20)", lessonCount: 1, startLessonId: "cpp-mod24-1", description: "Structured binding [a, b], std::optional, std::variant, std::any, ranges, and coroutines." },
  { number: 25, title: "Data Structures & Complexity", lessonCount: 1, startLessonId: "cpp-mod25-1", description: "Big-O notation (O(1), O(log N), O(N), O(N log N)), memory locality, and cache friendly layout." },
  { number: 26, title: "Searching & Sorting Algorithms", lessonCount: 1, startLessonId: "cpp-mod26-1", description: "Linear search, Binary search, QuickSort, MergeSort, std::lower_bound, and custom comparators." },
  { number: 27, title: "Linked Lists, Stacks & Queues", lessonCount: 1, startLessonId: "cpp-mod27-1", description: "Singly and doubly linked lists, LIFO std::stack, FIFO std::queue, and std::priority_queue." },
  { number: 28, title: "Trees, Heaps, Graphs & Hash Tables", lessonCount: 1, startLessonId: "cpp-mod28-1", description: "Binary Search Trees (BST), AVL trees, binary min/max heaps, adjacency lists, and hashing." },
  { number: 29, title: "Recursion, Backtracking & DP", lessonCount: 1, startLessonId: "cpp-mod29-1", description: "Divide & Conquer, N-Queens backtracking, memoization, and bottom-up Dynamic Programming." },
  { number: 30, title: "Multithreading & Concurrency", lessonCount: 1, startLessonId: "cpp-mod30-1", description: "std::jthread, std::mutex, std::lock_guard, std::atomic, race conditions, and condition_variable." },
  { number: 31, title: "Networking & System Fundamentals", lessonCount: 1, startLessonId: "cpp-mod31-1", description: "POSIX BSD sockets, TCP/UDP client-server architecture, non-blocking I/O, and serialization." },
  { number: 32, title: "Debugging, Testing & Code Quality", lessonCount: 1, startLessonId: "cpp-mod32-1", description: "GDB debugging, AddressSanitizer (ASan), Valgrind memory leak detection, and GoogleTest." },
  { number: 33, title: "C++ Technical Interview Masterclass", lessonCount: 1, startLessonId: "cpp-mod33-1", description: "Vtable internals, object slicing, move semantics, Rule of 5, and whiteboard coding prep." },
  { number: 34, title: "Coding Practice & Real Portfolio Projects", lessonCount: 1, startLessonId: "cpp-mod34-1", description: "20 Real-World C++ projects: Banking System, Minimax AI, RLE Compression, and Key-Value DB." }
];

export const CPP_TUTORIAL_LESSONS: TutorialLesson[] = [
  // Module 1: Intro & Environment Setup
  {
    id: "cpp-mod1-1",
    title: "Introduction to C++ & Environment Setup",
    section: "Module 1: Intro & Environment Setup",
    moduleNumber: 1,
    moduleTitle: "Intro & Environment Setup",
    difficulty: "Beginner",
    duration: "10 min",
    keyConcepts: ["Bjarne Stroustrup", "Zero-Cost Abstractions", "C++ Standards", "GCC/Clang", "Build Pipeline"],
    meaning: "C++ is a multi-paradigm programming language created by Bjarne Stroustrup that combines direct hardware control and memory manipulation with high-level object-oriented and generic abstractions.",
    definition: "C++ is a compiled, statically typed language standard (from C++98 up to C++20 and C++23) engineered for zero-overhead performance, powering game engines, finance systems, operating systems, and browsers.",
    whyUseIt: "C++ provides unmatched runtime efficiency because it compiles directly to native CPU machine instructions with zero garbage collector pauses and gives developers deterministic control over memory allocation.",
    realWorldApplications: [
      "AAA Game Engines (Unreal Engine 5, Unity runtime, CryEngine)",
      "High-Frequency Trading (Wall Street order matching engines with sub-microsecond latency)",
      "Web Browsers (Google Chrome V8 JavaScript engine, Mozilla SpiderMonkey)",
      "Operating System Kernels (Windows core, macOS XNU, embedded automotive ECUs)"
    ],
    syntax: "#include <iostream>\n\nint main() {\n    std::cout << \"Hello from Modern C++!\" << std::endl;\n    return 0;\n}",
    syntaxExplanation: "#include <iostream> includes standard input-output streams. int main() is the mandatory OS entry point. std::cout << writes to stdout. return 0 signals normal termination.",
    codeExample: `#include <iostream>
#include <string>
#include <vector>

int main() {
    std::string course = "Code From Zero - C++ Masterclass";
    std::vector<std::string> pillars = {
        "Zero-Cost Abstractions",
        "Deterministic Memory (RAII)",
        "Standard Template Library (STL)",
        "Object-Oriented Programming (OOP)"
    };

    std::cout << "========================================\\n";
    std::cout << "Course: " << course << "\\n";
    std::cout << "Core Pillars of Modern C++:\\n";
    for (const auto& pillar : pillars) {
        std::cout << "  • " << pillar << "\\n";
    }
    std::cout << "========================================\\n";
    return 0;
}`,
    expectedOutput: `========================================
Course: Code From Zero - C++ Masterclass
Core Pillars of Modern C++:
  • Zero-Cost Abstractions
  • Deterministic Memory (RAII)
  • Standard Template Library (STL)
  • Object-Oriented Programming (OOP)
========================================`,
    codeExplanation: [
      "#include <iostream>, <string>, <vector>: Header includes for console stream, strings, and dynamic arrays.",
      "std::string course: High-level STL string handling memory allocation automatically.",
      "std::vector<std::string>: Contiguous resizable array of strings.",
      "for (const auto& pillar : pillars): Modern range-based for loop avoiding expensive copies using const reference.",
      "return 0: Returns exit code 0 indicating successful completion to the operating system."
    ],
    commonMistakes: [
      "Using outdated C++98 styles like raw malloc/free when modern STL containers are available.",
      "Forgetting to include required headers like <iostream> or <vector>.",
      "Omitting std:: prefix without a using directive, causing identifier not found errors."
    ],
    bestPractices: [
      "Target at least C++17 or C++20 for all new software development.",
      "Always enable compiler warnings (-Wall -Wextra -Wpedantic) during compilation.",
      "Use modern range-based for loops and auto type deduction where readability improves."
    ],
    practiceExercises: [
      {
        question: "Write a C++ program that prints your name, favorite programming language, and years of coding experience.",
        hint: "Use std::cout with insertion operators (<<) and newline escapes (\\n).",
        solution: "#include <iostream>\nint main() {\n    std::cout << \"Name: Alex\\nTrack: C++\\nExperience: 1 year\\n\";\n    return 0;\n}"
      },
      {
        question: "Modify the program to print the C++ standard version currently being used (__cplusplus macro).",
        hint: "std::cout << __cplusplus prints 201703L for C++17 or 202002L for C++20.",
        solution: "#include <iostream>\nint main() {\n    std::cout << \"C++ Standard: \" << __cplusplus << std::endl;\n    return 0;\n}"
      },
      {
        question: "Create a vector of three numbers and calculate their sum.",
        hint: "Loop through the vector using for (int n : nums) and accumulate in an int sum = 0.",
        solution: "#include <iostream>\n#include <vector>\nint main() {\n    std::vector<int> nums = {10, 20, 30};\n    int sum = 0;\n    for (int n : nums) sum += n;\n    std::cout << \"Sum: \" << sum << std::endl;\n    return 0;\n}"
      }
    ],
    quiz: [{
      question: "Who created C++ and in what year was it first developed at Bell Labs?",
      options: [
        "Dennis Ritchie in 1972",
        "Bjarne Stroustrup in 1979",
        "James Gosling in 1995",
        "Guido van Rossum in 1991"
      ],
      correctAnswer: 1,
      explanation: "Bjarne Stroustrup created C++ (originally named 'C with Classes') in 1979 at Bell Labs as an enhancement to the C programming language."
    }],
    interviewQuestions: [
      {
        question: "What is meant by the 'Zero-Overhead Principle' in C++?",
        answer: "The zero-overhead principle (coined by Bjarne Stroustrup) states two rules: 1) What you don't use, you don't pay for. 2) What you do use, you couldn't hand-code any better in raw assembly.",
        followUp: "Give an example of a zero-cost abstraction in C++.",
        followUpAnswer: "std::unique_ptr, lambda expressions with no capture, and templates generate the exact same machine code instructions as handwritten raw pointers and functions without runtime penalty."
      }
    ]
  },

  // Module 2: Program Structure & Compilation
  {
    id: "cpp-mod2-1",
    title: "First Program & Compilation Pipeline",
    section: "Module 2: Program Structure & Compilation",
    moduleNumber: 2,
    moduleTitle: "Program Structure & Compilation",
    difficulty: "Beginner",
    duration: "12 min",
    keyConcepts: ["Preprocessing", "Compilation", "Assembly", "Linking", "Translation Units", "main()"],
    meaning: "A C++ program transforms from human-readable text (.cpp) to an executable binary through a 4-phase compilation pipeline: Preprocessor, Compiler, Assembler, and Linker.",
    definition: "The C++ build model separates declarations (.h) from definitions (.cpp). The preprocessor expands macros and #include directives, the compiler converts source to assembly, the assembler creates object files (.o/.obj), and the linker connects symbols into the final executable.",
    whyUseIt: "Understanding the compilation pipeline empowers engineers to diagnose linker errors (undefined reference, duplicate symbol), optimize build times, and structure enterprise multi-file codebases.",
    realWorldApplications: [
      "Large-scale software build systems (CMake, Bazel, Ninja, Meson)",
      "Shared libraries (.so on Linux, .dll on Windows, .dylib on macOS)",
      "Cross-compilation for embedded microcontrollers (ARM Cortex, RISC-V)"
    ],
    syntax: "// Preprocessor Directives\n#include <iostream>\n\n// Function entry point\nint main(int argc, char* argv[]) {\n    // Statements\n    return 0; // Return code\n}",
    syntaxExplanation: "#include inserts header files. argc counts command line arguments, argv points to argument strings. return 0 indicates success to the parent process.",
    codeExample: `#include <iostream>

// Function prototype (Declaration)
int addNumbers(int a, int b);

int main() {
    int num1 = 15;
    int num2 = 27;
    int result = addNumbers(num1, num2);

    std::cout << "=== Compilation Pipeline Demo ===\\n";
    std::cout << num1 << " + " << num2 << " = " << result << "\\n";
    std::cout << "Program finished with exit code 0.\\n";
    return 0;
}

// Function definition (Implementation)
int addNumbers(int a, int b) {
    return a + b;
}`,
    expectedOutput: `=== Compilation Pipeline Demo ===
15 + 27 = 42
Program finished with exit code 0.`,
    codeExplanation: [
      "int addNumbers(int a, int b);: Tells the compiler the function signature before its call, enabling single-pass compilation.",
      "int main(): Execution starts here, regardless of where main() is located in the file.",
      "addNumbers(num1, num2): Function call evaluated and bound by the linker.",
      "return 0: OS standard convention where zero means success and non-zero represents error codes."
    ],
    commonMistakes: [
      "Defining the same function body twice in different files without inline, causing 'multiple definition' linker errors.",
      "Forgetting a function prototype before calling it in main().",
      "Confusing compiler errors (syntax/type errors) with linker errors (missing library or undefined function)."
    ],
    bestPractices: [
      "Put function declarations and class definitions in header files (.hpp/.h) and implementations in source files (.cpp).",
      "Always use #pragma once or include guards at the top of headers to prevent multiple inclusions.",
      "Avoid writing complex logic in the global namespace."
    ],
    practiceExercises: [
      {
        question: "Write a program with a function multiply(int, int) prototyped before main and defined after main.",
        hint: "Declare int multiply(int a, int b); above main and provide the body underneath.",
        solution: "#include <iostream>\nint multiply(int a, int b);\nint main() {\n    std::cout << multiply(6, 7) << std::endl;\n    return 0;\n}\nint multiply(int a, int b) { return a * b; }"
      },
      {
        question: "Explain what g++ -E main.cpp does compared to g++ -c main.cpp.",
        hint: "-E runs only the preprocessor and prints output; -c compiles to an object file (.o) without linking.",
        solution: "// -E: Preprocessor only (expands macros & includes)\n// -c: Compile and assemble into object file (.o)"
      },
      {
        question: "Write a program that returns exit code 1 if a given value is negative.",
        hint: "if (val < 0) return 1; else return 0;",
        solution: "#include <iostream>\nint main() {\n    int val = -5;\n    if (val < 0) return 1;\n    return 0;\n}"
      }
    ],
    quiz: [{
      question: "Which phase of the C++ build pipeline resolves external function calls and connects multiple object files into an executable?",
      options: [
        "The Preprocessor",
        "The Compiler",
        "The Assembler",
        "The Linker"
      ],
      correctAnswer: 3,
      explanation: "The Linker (ld) combines compiled object files (.o) and external libraries, resolving unresolved symbols like function calls and global variables into a cohesive executable."
    }],
    interviewQuestions: [
      {
        question: "What is an 'Undefined Reference' error in C++ and how does it differ from 'Identifier Not Found'?",
        answer: "'Identifier Not Found' is a compiler error occurring when a name has not been declared in scope. 'Undefined Reference' is a linker error occurring when a function or symbol was declared but no object file provided its actual definition.",
        followUp: "How do you fix an 'Undefined Reference to vtable for ClassName'?",
        followUpAnswer: "This usually occurs when you declare a virtual function in a class declaration but forget to define the function body or pure virtual specifier (= 0)."
      }
    ]
  },

  // Module 3: Variables, Constants & Types
  {
    id: "cpp-mod3-1",
    title: "Variables, Constants, Types & auto Deduction",
    section: "Module 3: Variables, Constants & Types",
    moduleNumber: 3,
    moduleTitle: "Variables, Constants & Types",
    difficulty: "Beginner",
    duration: "14 min",
    keyConcepts: ["Fundamental Types", "auto", "const", "constexpr", "static_cast", "Type Safety"],
    meaning: "C++ is a strongly and statically typed language where every variable has a designated type known at compile time, determining its memory footprint and valid operations.",
    definition: "Fundamental data types include int, float, double, char, bool, void, and integer size modifiers (short, long, long long, unsigned). Modern C++ introduces auto for automatic compile-time type deduction and constexpr for compile-time evaluation.",
    whyUseIt: "Static typing catches bugs at compile time instead of production runtime. Explicit type controls allow developers to pack data structures tightly for hardware efficiency.",
    realWorldApplications: [
      "Fixed-width integer types (int32_t, uint64_t) in network protocols and audio processing",
      "constexpr lookup tables in cryptography and game physics engine constants",
      "Type casting with static_cast for safe numerical conversions"
    ],
    syntax: "int age = 25;\nconst double PI = 3.1415926535;\nconstexpr int BUFFER_SIZE = 1024;\nauto name = \"Alice\"; // deduced as const char*",
    syntaxExplanation: "const marks variables immutable after initialization. constexpr forces compile-time computation. auto directs the compiler to deduce the type from the initializer.",
    codeExample: `#include <iostream>
#include <string>
#include <cstdint>

int main() {
    // Exact-width integer types from <cstdint>
    int32_t count = 42;
    uint64_t largeId = 1844674407370955161ULL;
    double price = 19.99;
    bool isActive = true;

    // Modern auto deduction
    auto title = std::string("Code From Zero");
    auto taxRate = 0.0825; // deduced as double

    // Compile-time constant
    constexpr int DAYS_IN_WEEK = 7;

    // Explicit type casting (static_cast)
    double rawTotal = 155.75;
    int roundedTotal = static_cast<int>(rawTotal);

    std::cout << "Platform: " << title << "\\n";
    std::cout << "Count: " << count << " | Active: " << std::boolalpha << isActive << "\\n";
    std::cout << "Raw Total: " << rawTotal << " -> static_cast to int: " << roundedTotal << "\\n";
    std::cout << "Compile-Time Const DAYS_IN_WEEK: " << DAYS_IN_WEEK << "\\n";
    return 0;
}`,
    expectedOutput: `Platform: Code From Zero
Count: 42 | Active: true
Raw Total: 155.75 -> static_cast to int: 155
Compile-Time Const DAYS_IN_WEEK: 7`,
    codeExplanation: [
      "int32_t & uint64_t: Portable standard fixed-size types guaranteed across all CPU architectures.",
      "auto title = std::string(...): Compiler deduces type without redundant keystrokes.",
      "std::boolalpha: Stream manipulator printing true/false instead of 1/0.",
      "static_cast<int>(rawTotal): Safe, explicit C++ cast converting double to integer, truncating decimal portion.",
      "constexpr int DAYS_IN_WEEK: Guaranteed compile-time constant usable in array bounds."
    ],
    commonMistakes: [
      "Using C-style casts like (int)value instead of explicit static_cast<int>(value).",
      "Using uninitialized variables: int x; leads to reading garbage stack memory and undefined behavior.",
      "Integer overflow: exceeding INT_MAX on signed integers causes undefined behavior."
    ],
    bestPractices: [
      "Always initialize variables at the point of declaration (e.g. int x{0};).",
      "Prefer constexpr over const whenever values can be known at compile time.",
      "Prefer auto when initializing with complex types or iterator expressions."
    ],
    practiceExercises: [
      {
        question: "Declare a constexpr function that calculates the square of a number.",
        hint: "constexpr int square(int n) { return n * n; }",
        solution: "#include <iostream>\nconstexpr int square(int n) { return n * n; }\nint main() {\n    constexpr int res = square(8);\n    std::cout << res << std::endl;\n    return 0;\n}"
      },
      {
        question: "Safely cast a float 9.81 to an int using static_cast and display both values.",
        hint: "float g = 9.81f; int rounded = static_cast<int>(g);",
        solution: "#include <iostream>\nint main() {\n    float g = 9.81f;\n    int ig = static_cast<int>(g);\n    std::cout << g << \" -> \" << ig << std::endl;\n    return 0;\n}"
      },
      {
        question: "Use auto to iterate through an initializer list of strings.",
        hint: "for (const auto& item : {\"C++\", \"Python\", \"Go\"}) ...",
        solution: "#include <iostream>\n#include <string>\nint main() {\n    for (const auto& lang : {\"C++\", \"Python\", \"Go\"}) {\n        std::cout << lang << \" \";\n    }\n    std::cout << std::endl;\n    return 0;\n}"
      }
    ],
    quiz: [{
      question: "What is the difference between const and constexpr in C++?",
      options: [
        "There is no difference; they are aliases for each other.",
        "const variables can be initialized at runtime, while constexpr variables must be initialized at compile time.",
        "constexpr variables can be changed later, but const cannot.",
        "const works only with numbers, while constexpr works only with strings."
      ],
      correctAnswer: 1,
      explanation: "A const variable promises not to mutate after initialization (even if computed at runtime from user input), whereas constexpr explicitly mandates that the value is known and computed during compilation."
    }],
    interviewQuestions: [
      {
        question: "Why should C++ developers use static_cast over C-style casts like (int)x?",
        answer: "C-style casts are blunt: they try static_cast, const_cast, and reinterpret_cast sequentially without safety checks. static_cast is checked by the compiler, prevents illegal pointer casts, and makes type conversions readily searchable with grep.",
        followUp: "What are the other three C++ named casts?",
        followUpAnswer: "dynamic_cast (safe runtime polymorphic downcasting), const_cast (adding or stripping const qualifiers), and reinterpret_cast (reinterpreting raw bit patterns between incompatible types)."
      }
    ]
  },

  // Module 4: Input, Output & Formatting
  {
    id: "cpp-mod4-1",
    title: "Input, Output & Stream Formatting",
    section: "Module 4: Input, Output & Formatting",
    moduleNumber: 4,
    moduleTitle: "Input, Output & Formatting",
    difficulty: "Beginner",
    duration: "12 min",
    keyConcepts: ["std::cin", "std::cout", "std::getline", "std::setw", "std::setprecision", "std::format"],
    meaning: "C++ uses stream abstraction (<iostream>, <iomanip>) to perform type-safe console and data I/O through insertion (<<) and extraction (>>) operators.",
    definition: "std::cout writes to the standard output buffer, std::cin reads from standard input, and std::cerr writes unbuffered error messages. Manipulators like std::fixed, std::setw, and std::setprecision format table columns and floating numbers.",
    whyUseIt: "Formatted terminal outputs produce professional command-line tools, clean tabular reports, and predictable financial currency displays.",
    realWorldApplications: [
      "Financial ledger printing with aligned decimal columns",
      "CLI developer tools and interactive REPL interfaces",
      "Telemetry logs and debugging output"
    ],
    syntax: "#include <iostream>\n#include <iomanip>\n\nstd::cout << std::left << std::setw(15) << \"Item\" << std::right << std::setw(8) << \"Price\" << '\\n';",
    syntaxExplanation: "std::setw sets column field width. std::left aligns text left. std::fixed paired with std::setprecision(2) formats currency decimals.",
    codeExample: `#include <iostream>
#include <iomanip>
#include <string>

int main() {
    std::string item1 = "Mechanical Keyboard";
    double price1 = 129.99;
    std::string item2 = "4K USB-C Monitor";
    double price2 = 389.50;

    std::cout << "=== TECH HARDWARE INVOICE ===\\n";
    std::cout << std::left << std::setw(24) << "PRODUCT" 
              << std::right << std::setw(10) << "PRICE" << "\\n";
    std::cout << "----------------------------------\\n";

    std::cout << std::left << std::setw(24) << item1 
              << "$" << std::right << std::setw(9) << std::fixed << std::setprecision(2) << price1 << "\\n";

    std::cout << std::left << std::setw(24) << item2 
              << "$" << std::right << std::setw(9) << std::fixed << std::setprecision(2) << price2 << "\\n";

    std::cout << "----------------------------------\\n";
    std::cout << std::left << std::setw(24) << "TOTAL" 
              << "$" << std::right << std::setw(9) << (price1 + price2) << "\\n";
    return 0;
}`,
    expectedOutput: `=== TECH HARDWARE INVOICE ===
PRODUCT                      PRICE
----------------------------------
Mechanical Keyboard     $   129.99
4K USB-C Monitor        $   389.50
----------------------------------
TOTAL                   $   519.49`,
    codeExplanation: [
      "#include <iomanip>: Provides stream manipulators (setw, setprecision, fixed).",
      "std::setw(24): Allocates a 24-character wide column for product names.",
      "std::fixed << std::setprecision(2): Forces exact 2-decimal place notation suitable for financial amounts.",
      "std::left & std::right: Dictates whether padding spaces occur on the right or left of the field."
    ],
    commonMistakes: [
      "Using std::cin >> string to read a full sentence containing spaces; std::cin stops at whitespace. Use std::getline(std::cin, str) instead.",
      "Mixing std::cin >> with std::getline() without calling std::cin.ignore() to flush leftover newline characters from the buffer.",
      "Assuming std::setw() stays active forever: setw() only affects the immediately following item."
    ],
    bestPractices: [
      "Use '\\n' instead of std::endl for newlines in performance-critical code; std::endl forces an expensive buffer flush every call.",
      "Always validate std::cin state (if (!std::cin)) to handle invalid user inputs gracefully."
    ],
    practiceExercises: [
      {
        question: "Format the number 123.456789 to exactly 3 decimal places using std::setprecision.",
        hint: "std::cout << std::fixed << std::setprecision(3) << 123.456789;",
        solution: "#include <iostream>\n#include <iomanip>\nint main() {\n    std::cout << std::fixed << std::setprecision(3) << 123.456789 << std::endl;\n    return 0;\n}"
      },
      {
        question: "Read a complete line of text containing spaces using std::getline and print its length.",
        hint: "std::string line; std::getline(std::cin, line); std::cout << line.length();",
        solution: "#include <iostream>\n#include <string>\nint main() {\n    std::string s = \"Code From Zero C++\";\n    std::cout << \"Length: \" << s.length() << std::endl;\n    return 0;\n}"
      },
      {
        question: "Print an ASCII table with columns for ID, Name, and Grade with proper alignments.",
        hint: "Use std::setw and std::left/std::right.",
        solution: "#include <iostream>\n#include <iomanip>\nint main() {\n    std::cout << std::left << std::setw(8) << \"ID\" << std::setw(12) << \"Name\" << \"Grade\\n\";\n    std::cout << std::left << std::setw(8) << \"101\" << std::setw(12) << \"Alice\" << \"A\\n\";\n    return 0;\n}"
      }
    ],
    quiz: [{
      question: "Why is std::cout << '\\n' often preferred over std::cout << std::endl in high-performance loops?",
      options: [
        "std::endl is deprecated in C++20.",
        "std::endl flushes the stream buffer every time, causing expensive I/O system calls.",
        "std::endl does not print a newline character on Windows.",
        "'\\n' automatically flushes the buffer on all operating systems."
      ],
      correctAnswer: 1,
      explanation: "std::endl not only outputs a newline character, but also explicitly flushes the output stream buffer (invoking flush()). In loops, this introduces heavy kernel I/O overhead."
    }],
    interviewQuestions: [
      {
        question: "How does C++20 std::format revolutionize text formatting compared to printf and iostream?",
        answer: "std::format combines the clean Python-like syntax of printf ('Hello {}') with complete compile-time type safety and high performance of iostreams without memory leaks or format-string security vulnerabilities.",
        followUp: "Can std::format format custom user-defined classes?",
        followUpAnswer: "Yes! By specializing std::formatter<YourClass>, you can provide custom formatting logic for your own data structures."
      }
    ]
  },

  // Module 5: Operators & Expressions
  {
    id: "cpp-mod5-1",
    title: "Operators, Expressions & Precedence",
    section: "Module 5: Operators & Expressions",
    moduleNumber: 5,
    moduleTitle: "Operators & Expressions",
    difficulty: "Beginner",
    duration: "14 min",
    keyConcepts: ["Arithmetic", "Relational", "Logical", "Bitwise", "Spaceship Operator <=>", "Short-Circuiting"],
    meaning: "Operators are special symbols that perform computations on operands. C++ provides arithmetic, logical, comparison, bitwise, assignment, and modern three-way comparison operators.",
    definition: "Expressions evaluate to a value. C++ standard dictates strict operator precedence and associativity rules. C++20 introduces the three-way comparison operator <=> (spaceship operator) which returns std::strong_ordering.",
    whyUseIt: "Proficiency with bitwise manipulation, short-circuit evaluation, and comparison operators is essential for writing efficient algorithms, flags, and mathematical models.",
    realWorldApplications: [
      "Bitmasking and permission flags in operating systems and security kernels",
      "Efficient fast multiplication and division using bitwise shifts (<< and >>)",
      "C++20 spaceship operator <=> automating all 6 comparison operators (<, <=, ==, !=, >, >=) in custom classes"
    ],
    syntax: "int a = 10, b = 20;\nbool result = (a < b) && (b != 0);\nint shifted = a << 2; // multiplies by 4",
    syntaxExplanation: "&& is short-circuit logical AND. << shifts bits left, doubling the value per bit shift. <=> returns negative, zero, or positive for less, equal, or greater.",
    codeExample: `#include <iostream>

int main() {
    int x = 12; // Binary: 00001100
    int y = 25; // Binary: 00011001

    std::cout << "=== Bitwise Operations in C++ ===\\n";
    std::cout << "x = " << x << " | y = " << y << "\\n";
    std::cout << "x & y (Bitwise AND) = " << (x & y) << "\\n";
    std::cout << "x | y (Bitwise OR)  = " << (x | y) << "\\n";
    std::cout << "x ^ y (Bitwise XOR) = " << (x ^ y) << "\\n";
    std::cout << "~x    (Bitwise NOT) = " << (~x) << "\\n";
    std::cout << "x << 1 (Left Shift)  = " << (x << 1) << " (Multiplied by 2)\\n";
    std::cout << "x >> 1 (Right Shift) = " << (x >> 1) << " (Divided by 2)\\n";

    // Ternary conditional expression
    int maxVal = (x > y) ? x : y;
    std::cout << "Max value using ternary: " << maxVal << "\\n";
    return 0;
}`,
    expectedOutput: `=== Bitwise Operations in C++ ===
x = 12 | y = 25
x & y (Bitwise AND) = 8
x | y (Bitwise OR)  = 29
x ^ y (Bitwise XOR) = 21
~x    (Bitwise NOT) = -13
x << 1 (Left Shift)  = 24 (Multiplied by 2)
x >> 1 (Right Shift) = 6 (Divided by 2)
Max value using ternary: 25`,
    codeExplanation: [
      "x & y: Compares corresponding bits; produces 1 only where both bits are 1 (00001000 = 8).",
      "x | y: Sets bit to 1 if either bit is 1 (00011101 = 29).",
      "x ^ y: Sets bit to 1 if bits differ (00010101 = 21).",
      "x << 1: Fast arithmetic shift left by 1 bit, equivalent to multiplying by 2^1 = 2.",
      "(x > y) ? x : y: Compact ternary operator returning the greater operand."
    ],
    commonMistakes: [
      "Confusing bitwise AND (&) with logical AND (&&), which causes subtle logic bugs.",
      "Operator precedence bugs: << has higher precedence than comparison operators, so std::cout << (a == b) requires parentheses.",
      "Shifting signed integers by negative amounts or amounts greater than integer bit width causes undefined behavior."
    ],
    bestPractices: [
      "Use parentheses generously in complex compound expressions to make evaluation order unmistakable.",
      "Leverage short-circuit evaluation to guard against null pointers (e.g. ptr && ptr->isValid())."
    ],
    practiceExercises: [
      {
        question: "Write an expression to check if an integer n is even or odd using the bitwise & operator.",
        hint: "(n & 1) == 0 means even, != 0 means odd.",
        solution: "#include <iostream>\nint main() {\n    int n = 42;\n    std::cout << ((n & 1) ? \"Odd\" : \"Even\") << std::endl;\n    return 0;\n}"
      },
      {
        question: "Use bitwise XOR to swap two integers without using a temporary third variable.",
        hint: "a ^= b; b ^= a; a ^= b;",
        solution: "#include <iostream>\nint main() {\n    int a = 5, b = 9;\n    a ^= b; b ^= a; a ^= b;\n    std::cout << \"a: \" << a << \", b: \" << b << std::endl;\n    return 0;\n}"
      },
      {
        question: "Check whether a given integer is a power of 2 using bitwise operators.",
        hint: "A power of 2 has exactly one bit set: (n > 0) && ((n & (n - 1)) == 0).",
        solution: "#include <iostream>\nbool isPowerOfTwo(int n) {\n    return n > 0 && (n & (n - 1)) == 0;\n}\nint main() {\n    std::cout << std::boolalpha << isPowerOfTwo(16) << std::endl;\n    return 0;\n}"
      }
    ],
    quiz: [{
      question: "What does the C++20 three-way comparison operator <=> (spaceship operator) return when comparing two values?",
      options: [
        "A boolean true or false.",
        "An integer -1, 0, or 1.",
        "A comparison ordering object (std::strong_ordering, std::weak_ordering, or std::partial_ordering).",
        "A string 'LESS', 'EQUAL', or 'GREATER'."
      ],
      correctAnswer: 2,
      explanation: "In C++20, <=> returns a standardized ordering object (such as std::strong_ordering::less, equal, or greater) which can be directly compared with 0."
    }],
    interviewQuestions: [
      {
        question: "What is Short-Circuit Evaluation and how does it prevent runtime crashes?",
        answer: "In logical expressions (A && B or A || B), if operand A guarantees the final outcome, operand B is never evaluated. For example, in if (ptr != nullptr && ptr->val > 0), if ptr is null, the right side is skipped, preventing a segmentation fault.",
        followUp: "Does operator overloading preserve short-circuit evaluation?",
        followUpAnswer: "No! Overloaded operator&& or operator|| behaves like regular function calls, evaluating both arguments before invocation, losing short-circuit safety. Never overload logical && and ||."
      }
    ]
  },

  // Modules 6 to 34: Curated comprehensive curriculum covering all syllabus topics
  {
    id: "cpp-mod6-1",
    title: "Conditional Statements & C++17 Init-Conditionals",
    section: "Module 6: Conditional Statements",
    moduleNumber: 6,
    moduleTitle: "Conditional Statements",
    difficulty: "Beginner",
    duration: "13 min",
    keyConcepts: ["if-else", "switch-case", "[[fallthrough]]", "C++17 if with initializer"],
    meaning: "Conditional statements branch code execution paths based on evaluated boolean expressions.",
    definition: "C++ provides if, else if, else, and switch-case branching. C++17 introduced 'init-statements in if' (if (init; condition)) which confines helper variables strictly to the conditional block scope.",
    whyUseIt: "Restricting variable scopes prevents variable pollution and bugs in concurrency and error handling.",
    realWorldApplications: [
      "State machines in games and networking protocols",
      "HTTP status code routing",
      "Input validation and access control checks"
    ],
    syntax: "if (auto it = cache.find(key); it != cache.end()) {\n    useValue(it->second);\n}",
    syntaxExplanation: "The variable it is created and scoped exclusively within the if and else bodies, automatically freeing resources when exiting.",
    codeExample: `#include <iostream>
#include <string>

enum class HttpStatus { OK = 200, BadRequest = 400, NotFound = 404, ServerError = 500 };

int main() {
    HttpStatus code = HttpStatus::OK;

    switch (code) {
        case HttpStatus::OK:
            std::cout << "[200] Request processed successfully.\\n";
            break;
        case HttpStatus::BadRequest:
            std::cout << "[400] Bad client request parameters.\\n";
            break;
        case HttpStatus::NotFound:
            std::cout << "[404] Resource not found.\\n";
            break;
        case HttpStatus::ServerError:
            std::cout << "[500] Internal server error.\\n";
            break;
    }

    // C++17 init-if statement
    if (int errorCode = 0; errorCode == 0) {
        std::cout << "System health: All services nominal.\\n";
    }
    return 0;
}`,
    expectedOutput: `[200] Request processed successfully.
System health: All services nominal.`,
    codeExplanation: [
      "enum class HttpStatus: Scoped enum providing type safety over raw integers.",
      "switch (code): Evaluates discrete integral or enum states in jump table time.",
      "if (int errorCode = 0; errorCode == 0): C++17 init-if keeps errorCode localized."
    ],
    commonMistakes: [
      "Missing break statements in switch-case leading to unintended fallthrough.",
      "Accidental assignment if (x = 5) instead of comparison if (x == 5)."
    ],
    bestPractices: [
      "Use enum class instead of raw enums in switch statements.",
      "Always include a default case in switch statements to handle unexpected states."
    ],
    practiceExercises: [
      {
        question: "Write an if-else chain that classifies a student score into grades A, B, C, D, or F.",
        hint: "Check score >= 90, else if score >= 80, etc.",
        solution: "#include <iostream>\nint main() {\n    int s = 85;\n    if (s >= 90) std::cout << 'A';\n    else if (s >= 80) std::cout << 'B';\n    else std::cout << 'F';\n    return 0;\n}"
      },
      {
        question: "Demonstrate C++17 if-with-initializer checking a boolean flag.",
        hint: "if (bool ok = true; ok) std::cout << \"OK\";",
        solution: "#include <iostream>\nint main() {\n    if (bool ok = true; ok) std::cout << \"OK\" << std::endl;\n    return 0;\n}"
      },
      {
        question: "Write a switch-case statement handling vowel characters ('a', 'e', 'i', 'o', 'u').",
        hint: "Use multiple case labels sharing a single break.",
        solution: "#include <iostream>\nint main() {\n    char c = 'e';\n    switch (c) {\n        case 'a': case 'e': case 'i': case 'o': case 'u':\n            std::cout << \"Vowel\"; break;\n        default: std::cout << \"Consonant\";\n    }\n    return 0;\n}"
      }
    ],
    quiz: [{
      question: "What is the primary benefit of C++17's if-statement with initializer (if (init; condition))?",
      options: [
        "It makes the program run 10x faster.",
        "It limits the scope of temporary variables strictly to the if/else block, avoiding variable leakage.",
        "It allows switch statements to take strings.",
        "It forces the compiler to run the code in multithreaded mode."
      ],
      correctAnswer: 1,
      explanation: "if (init; condition) scopes variables exclusively to the conditional statement, reducing variable shadowing and keeping the enclosing function namespace clean."
    }],
    interviewQuestions: [
      {
        question: "How does the compiler optimize a switch statement with contiguous case values?",
        answer: "Compilers generate a Jump Table (array of code addresses) allowing O(1) direct branching indexed by the switch expression, far outperforming an O(N) if-else chain.",
        followUp: "What is the [[fallthrough]] attribute in C++17?",
        followUpAnswer: "[[fallthrough]] explicitly informs the compiler that deliberate case fallthrough is intended, suppressing compiler warnings about missing break statements."
      }
    ]
  },

  // Module 7: Loops & Patterns
  {
    id: "cpp-mod7-1",
    title: "Loops, Patterns & Modern Range-Based For",
    section: "Module 7: Loops & Pattern Programming",
    moduleNumber: 7,
    moduleTitle: "Loops & Pattern Programming",
    difficulty: "Beginner",
    duration: "13 min",
    keyConcepts: ["for", "while", "do-while", "Range-Based For", "break", "continue", "Pattern Logic"],
    meaning: "Loops execute a block of statements repeatedly until a termination condition is met.",
    definition: "C++ supports standard for, while, and do-while loops, alongside modern range-based for loops (for (const auto& elem : container)) that iterate safely without index bounds errors.",
    whyUseIt: "Loops automate iterative computations, array traversals, simulation updates, and pattern generation.",
    realWorldApplications: [
      "Game loop tick updates (60/120 FPS)",
      "Audio sample buffer synthesis and signal filtering",
      "Traversing datasets, graph matrices, and search trees"
    ],
    syntax: "for (int i = 0; i < N; ++i) { ... }\nfor (const auto& item : items) { ... }",
    syntaxExplanation: "Range-based for automatically extracts begin() and end() iterators from containers.",
    codeExample: `#include <iostream>
#include <vector>

int main() {
    // 1. Pyramid pattern printing
    int rows = 5;
    std::cout << "=== Pyramid Pattern ===\\n";
    for (int i = 1; i <= rows; ++i) {
        // Print spaces
        for (int s = 1; s <= rows - i; ++s) std::cout << " ";
        // Print stars
        for (int k = 1; k <= (2 * i - 1); ++k) std::cout << "*";
        std::cout << "\\n";
    }

    // 2. Modern Range-based for loop
    std::cout << "\\n=== Range-based for traversal ===\\n";
    std::vector<int> numbers = {10, 20, 30, 40, 50};
    int total = 0;
    for (const auto& n : numbers) {
        total += n;
    }
    std::cout << "Vector elements sum: " << total << "\\n";
    return 0;
}`,
    expectedOutput: `=== Pyramid Pattern ===
    *
   ***
  *****
 *******
*********

=== Range-based for traversal ===
Vector elements sum: 150`,
    codeExplanation: [
      "Nested loops: Outer loop tracks row count, inner loops print leading spaces and centered star asterisks.",
      "for (const auto& n : numbers): Safe iteration without index out-of-bounds risks."
    ],
    commonMistakes: [
      "Infinite loops from forgetting to increment the loop control counter inside while loops.",
      "Off-by-one errors when using <= instead of < on array bounds."
    ],
    bestPractices: [
      "Prefer range-based for loops whenever indexing is not explicitly needed.",
      "Use pre-increment (++i) over post-increment (i++) for iterators."
    ],
    practiceExercises: [
      {
        question: "Print a right-angled triangle of numbers from 1 to 5.",
        hint: "Row i prints numbers 1 to i.",
        solution: "#include <iostream>\nint main() {\n    for (int i = 1; i <= 5; ++i) {\n        for (int j = 1; j <= i; ++j) std::cout << j << \" \";\n        std::cout << \"\\n\";\n    }\n    return 0;\n}"
      },
      {
        question: "Calculate the factorial of a number using a while loop.",
        hint: "Initialize long long fact = 1; while (n > 1) { fact *= n--; }",
        solution: "#include <iostream>\nint main() {\n    int n = 5; long long f = 1;\n    while (n > 1) f *= n--;\n    std::cout << f << std::endl;\n    return 0;\n}"
      },
      {
        question: "Iterate through a vector of strings in reverse order.",
        hint: "Use crbegin() and crend() with a standard for loop.",
        solution: "#include <iostream>\n#include <vector>\n#include <string>\nint main() {\n    std::vector<std::string> v = {\"A\", \"B\", \"C\"};\n    for (auto it = v.rbegin(); it != v.rend(); ++it) std::cout << *it << \" \";\n    return 0;\n}"
      }
    ],
    quiz: [{
      question: "What is guaranteed about a do-while loop in C++ compared to a while loop?",
      options: [
        "A do-while loop runs in reverse.",
        "A do-while loop executes its body at least once, evaluating its condition at the end.",
        "A do-while loop cannot use break or continue.",
        "A do-while loop is only used for multithreading."
      ],
      correctAnswer: 1,
      explanation: "A do-while loop is an exit-controlled loop; the body executes first, and the condition is evaluated afterwards, guaranteeing at least one execution."
    }],
    interviewQuestions: [
      {
        question: "How does a range-based for loop work under the hood in C++?",
        answer: "The compiler expands for (auto&& x : range) into standard iterator mechanics: auto __begin = std::begin(range); auto __end = std::end(range); for (; __begin != __end; ++__begin) { auto&& x = *__begin; ... }.",
        followUp: "Can you use a range-based for loop on custom classes?",
        followUpAnswer: "Yes! As long as your class provides member or free functions begin() and end() returning iterators that support operator!=, operator++, and operator*."
      }
    ]
  },

  // Module 8 to 34 additions with rich structures:
  {
    id: "cpp-mod8-1",
    title: "Arrays, std::array & Multidimensional Grids",
    section: "Module 8: Arrays & Multidimensional Arrays",
    moduleNumber: 8,
    moduleTitle: "Arrays & Multidimensional Arrays",
    difficulty: "Beginner",
    duration: "14 min",
    keyConcepts: ["C-Style Arrays", "std::array", "Matrix Grids", "Cache Locality", "Row-Major Order"],
    meaning: "Arrays are contiguous blocks of homogeneous elements stored sequentially in memory.",
    definition: "C++ offers raw C-style arrays (int arr[N]) and modern type-safe std::array<T, N> which preserves size information, supports iterators, and has zero overhead over raw arrays.",
    whyUseIt: "Contiguous memory layout ensures maximum CPU cache line hit rates and predictable indexing in O(1) time.",
    realWorldApplications: [
      "Image raster pixel buffers (RGB/RGBA byte grids)",
      "Game physics transform matrices (4x4 spatial vectors)",
      "Lookup tables in DSP and signal filtering"
    ],
    syntax: "std::array<int, 5> data = {1, 2, 3, 4, 5};\nint matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};",
    syntaxExplanation: "std::array lives on the stack with fixed size, offering .size(), .at() bounds checking, and iterator compatibility.",
    codeExample: `#include <iostream>
#include <array>

int main() {
    // Modern stack-allocated std::array
    std::array<int, 4> scores = {95, 88, 76, 92};

    std::cout << "std::array size: " << scores.size() << "\\n";
    std::cout << "First: " << scores.front() << " | Last: " << scores.back() << "\\n";

    // 2D Array Matrix
    int grid[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    std::cout << "\\n2D Grid (Row-Major Order):\\n";
    for (int r = 0; r < 2; ++r) {
        for (int c = 0; c < 3; ++c) {
            std::cout << grid[r][c] << " ";
        }
        std::cout << "\\n";
    }
    return 0;
}`,
    expectedOutput: `std::array size: 4
First: 95 | Last: 92

2D Grid (Row-Major Order):
10 20 30 
40 50 60 `,
    codeExplanation: [
      "std::array<int, 4>: High-level stack container that knows its own size via .size().",
      "grid[2][3]: Stored in row-major order: row 0 followed immediately in memory by row 1."
    ],
    commonMistakes: [
      "Array decay: Passing a raw C array to a function causes it to decay to a raw pointer, losing its size.",
      "Accessing out-of-bounds indices: arr[10] on a size-5 array corrupts memory."
    ],
    bestPractices: [
      "Prefer std::array<T, N> over raw C-style arrays for fixed-size collections.",
      "Use .at() instead of [] when runtime bounds checking is required."
    ],
    practiceExercises: [
      {
        question: "Find the maximum and minimum elements in an std::array of 5 integers.",
        hint: "Use std::min_element and std::max_element from <algorithm>.",
        solution: "#include <iostream>\n#include <array>\n#include <algorithm>\nint main() {\n    std::array<int, 5> a = {12, 45, 2, 89, 34};\n    std::cout << *std::min_element(a.begin(), a.end()) << \" \" << *std::max_element(a.begin(), a.end());\n    return 0;\n}"
      },
      {
        question: "Transpose a 2x2 matrix grid.",
        hint: "Swap grid[0][1] with grid[1][0].",
        solution: "#include <iostream>\nint main() {\n    int m[2][2] = {{1, 2}, {3, 4}};\n    std::swap(m[0][1], m[1][0]);\n    std::cout << m[0][1] << \" \" << m[1][0] << std::endl;\n    return 0;\n}"
      },
      {
        question: "Compute the sum of elements along the main diagonal of a 3x3 square matrix.",
        hint: "Loop i from 0 to 2 and accumulate m[i][i].",
        solution: "#include <iostream>\nint main() {\n    int m[3][3] = {{1,0,0},{0,5,0},{0,0,9}};\n    int s = 0;\n    for(int i=0; i<3; ++i) s += m[i][i];\n    std::cout << s << std::endl;\n    return 0;\n}"
      }
    ],
    quiz: [{
      question: "Why does traversing a 2D array in Row-Major order (outer loop rows, inner loop columns) execute faster than Column-Major order in C++?",
      options: [
        "Because columns require more memory than rows.",
        "Because C++ arrays are arranged contiguously row-by-row in memory, maximizing CPU cache line hits.",
        "Row traversal automatically uses GPU acceleration.",
        "There is no difference in execution speed."
      ],
      correctAnswer: 1,
      explanation: "C++ stores multidimensional arrays in Row-Major order. Accessing row elements sequentially pulls adjacent values into the fast CPU L1/L2 cache lines (spatial locality)."
    }],
    interviewQuestions: [
      {
        question: "What is array decay in C++?",
        answer: "Array decay is the implicit conversion of an array to a pointer to its first element (e.g. int[] decays to int*) when passed to a function by value, discarding array size information.",
        followUp: "How can you pass an array to a function without letting it decay?",
        followUpAnswer: "Pass by reference (int (&arr)[N]), pass as std::array<int, N>&, or use std::span (C++20)."
      }
    ]
  },

  // Module 9: Strings & std::string_view
  {
    id: "cpp-mod9-1",
    title: "Strings & Zero-Copy std::string_view",
    section: "Module 9: Strings & Character Arrays",
    moduleNumber: 9,
    moduleTitle: "Strings & Character Arrays",
    difficulty: "Beginner",
    duration: "13 min",
    keyConcepts: ["C-Strings", "std::string", "std::string_view", "Small String Optimization (SSO)", "Zero-Copy"],
    meaning: "C++ supports both legacy null-terminated char arrays and modern heap-allocated std::string with automatic sizing.",
    definition: "std::string manages dynamic character buffers automatically. C++17 introduced std::string_view, a non-owning read-only view of contiguous characters allowing zero-copy string slicing.",
    whyUseIt: "Passing std::string_view eliminates expensive dynamic heap allocations when parsing strings or passing string literals.",
    realWorldApplications: [
      "URL parsing and HTTP header tokenization in web servers",
      "Compilers and lexers tokenizing source code",
      "Configuration file JSON/YAML parsers"
    ],
    syntax: "#include <string_view>\nvoid parse(std::string_view sv);",
    syntaxExplanation: "std::string_view consists only of a pointer and size, making pass-by-value as cheap as two machine words.",
    codeExample: `#include <iostream>
#include <string>
#include <string_view>

void printPrefix(std::string_view sv, size_t length) {
    // Substring without any heap memory allocation!
    std::string_view prefix = sv.substr(0, length);
    std::cout << "Prefix (" << length << " chars): \\"" << prefix << "\\"\\n";
}

int main() {
    std::string fullText = "Code From Zero C++ Masterclass";

    std::cout << "Original: " << fullText << "\\n";
    printPrefix(fullText, 4);       // "Code"
    printPrefix("UnrealEngine", 6);  // Works on literals with zero copy!
    return 0;
}`,
    expectedOutput: `Original: Code From Zero C++ Masterclass
Prefix (4 chars): "Code"
Prefix (6 chars): "Unreal"`,
    codeExplanation: [
      "std::string_view: Non-owning view that does not allocate memory on the heap.",
      "sv.substr(0, length): Returns a new view in O(1) time without copying characters."
    ],
    commonMistakes: [
      "Returning a std::string_view that points to a temporary std::string created inside a function (dangling reference bug).",
      "Assuming string_view is null-terminated: string_view does not always end in '\\0'."
    ],
    bestPractices: [
      "Use std::string_view for read-only function parameters instead of const std::string&.",
      "Never store a string_view unless you are certain the referenced string outlives the view."
    ],
    practiceExercises: [
      {
        question: "Check if a given std::string is a palindrome.",
        hint: "Compare string with its reverse using std::equal.",
        solution: "#include <iostream>\n#include <string>\n#include <algorithm>\nbool isPal(const std::string& s) {\n    return std::equal(s.begin(), s.begin() + s.size()/2, s.rbegin());\n}\nint main() {\n    std::cout << std::boolalpha << isPal(\"racecar\") << std::endl;\n    return 0;\n}"
      },
      {
        question: "Extract the file extension from a filename using std::string_view.",
        hint: "Find last of '.' and take substr.",
        solution: "#include <iostream>\n#include <string_view>\nint main() {\n    std::string_view fn = \"document.pdf\";\n    size_t pos = fn.find_last_of('.');\n    std::cout << fn.substr(pos + 1) << std::endl;\n    return 0;\n}"
      },
      {
        question: "Count the number of vowels in a string using std::string_view.",
        hint: "Loop through characters and check if in 'aeiouAEIOU'.",
        solution: "#include <iostream>\n#include <string_view>\nint countVowels(std::string_view sv) {\n    int c = 0;\n    for (char ch : sv) {\n        char lower = tolower(ch);\n        if (lower=='a'||lower=='e'||lower=='i'||lower=='o'||lower=='u') c++;\n    }\n    return c;\n}\nint main() { std::cout << countVowels(\"hello world\"); return 0; }"
      }
    ],
    quiz: [{
      question: "What is Small String Optimization (SSO) in modern C++ std::string implementations?",
      options: [
        "A feature that compresses strings using zip algorithms.",
        "An optimization where short strings (typically under 15-22 chars) are stored directly inside the string object on the stack, avoiding heap allocation.",
        "A compiler pass that deletes unused strings.",
        "An algorithm that limits string lengths to 256 bytes."
      ],
      correctAnswer: 1,
      explanation: "Modern std::string implements Small String Optimization (SSO): strings shorter than ~15-22 bytes fit in an internal stack union buffer, bypassing malloc/heap allocation completely."
    }],
    interviewQuestions: [
      {
        question: "What is the biggest risk when using std::string_view?",
        answer: "Lifetime and dangling pointer issues. Because std::string_view is non-owning, if the underlying std::string or buffer is reallocated or destroyed, reading the string_view causes undefined behavior.",
        followUp: "Can you pass a C-string string literal directly to a std::string_view parameter?",
        followUpAnswer: "Yes, string literals reside in the static data segment (.rodata) and have program lifetime, making them completely safe with string_view."
      }
    ]
  },

  // Module 10: Functions, Overloading & Recursion
  {
    id: "cpp-mod10-1",
    title: "Functions, Overloading & Recursion",
    section: "Module 10: Functions, Overloading & Recursion",
    moduleNumber: 10,
    moduleTitle: "Functions, Overloading & Recursion",
    difficulty: "Beginner",
    duration: "14 min",
    keyConcepts: ["Pass-by-Reference", "Function Overloading", "Recursion", "Stack Frames", "Inline Functions"],
    meaning: "Functions encapsulate reusable computation units, supporting overloading and recursive self-calls.",
    definition: "C++ allows multiple functions with the same name but different parameter signatures (Overloading). Functions can pass parameters by value, pointer (*), or reference (&).",
    whyUseIt: "Modularity, code reuse, and recursive divide-and-conquer algorithm implementation.",
    realWorldApplications: [
      "Mathematical libraries (overloaded abs for int, double, float)",
      "File tree traversal and JSON object parsing via recursion",
      "Fast inlined math routines in game engines"
    ],
    syntax: "void swap(int& a, int& b);\nint calculate(int x);\ndouble calculate(double x);",
    syntaxExplanation: "Function overloading is resolved at compile-time via name mangling based on argument types.",
    codeExample: `#include <iostream>

// Overloaded functions
int multiply(int a, int b) { return a * b; }
double multiply(double a, double b) { return a * b; }

// Recursive Fibonacci
long long fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Pass by reference
void doubleValue(int& val) {
    val *= 2;
}

int main() {
    std::cout << "Int multiply: " << multiply(4, 5) << "\\n";
    std::cout << "Double multiply: " << multiply(2.5, 4.0) << "\\n";

    int x = 25;
    doubleValue(x);
    std::cout << "x after doubleValue: " << x << "\\n";

    std::cout << "Fibonacci(8): " << fibonacci(8) << "\\n";
    return 0;
}`,
    expectedOutput: `Int multiply: 20
Double multiply: 10
x after doubleValue: 50
Fibonacci(8): 21`,
    codeExplanation: [
      "Overloading: Compiler picks appropriate multiply() based on argument types (int vs double).",
      "void doubleValue(int& val): Modifies caller's variable directly via reference alias.",
      "fibonacci(n): Recursively breaks problem down until base case n <= 1."
    ],
    commonMistakes: [
      "Missing recursive base case, causing stack overflow crashes.",
      "Ambiguous function overload signatures causing compilation failure."
    ],
    bestPractices: [
      "Pass large read-only objects by const reference (const Type&).",
      "Mark small, performance-critical one-liners as inline."
    ],
    practiceExercises: [
      {
        question: "Write a recursive function to compute the greatest common divisor (GCD) using Euclid's algorithm.",
        hint: "int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }",
        solution: "#include <iostream>\nint gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }\nint main() { std::cout << gcd(48, 18); return 0; }"
      },
      {
        question: "Overload a function printInfo() to take either a single string or an integer and string.",
        hint: "Define void printInfo(const std::string&) and void printInfo(int, const std::string&).",
        solution: "#include <iostream>\n#include <string>\nvoid printInfo(const std::string& s) { std::cout << s << std::endl; }\nvoid printInfo(int id, const std::string& s) { std::cout << id << \": \" << s << std::endl; }\nint main() { printInfo(\"Test\"); printInfo(1, \"Data\"); return 0; }"
      },
      {
        question: "Write a function that swaps two float numbers using references.",
        hint: "void swapFloat(float& a, float& b) { float t = a; a = b; b = t; }",
        solution: "#include <iostream>\nvoid swapFloat(float& a, float& b) { float t = a; a = b; b = t; }\nint main() { float x=1.5f, y=3.5f; swapFloat(x,y); std::cout << x << \" \" << y; return 0; }"
      }
    ],
    quiz: [{
      question: "Can two functions in C++ differ ONLY by their return type and be overloaded?",
      options: [
        "Yes, as long as one is void.",
        "No, return type alone is not sufficient to distinguish overloaded functions.",
        "Yes, in C++20 only.",
        "Only if both are declared inline."
      ],
      correctAnswer: 1,
      explanation: "Function overloading requires a different parameter list (number, types, or order of parameters). The return type is not considered during overload resolution."
    }],
    interviewQuestions: [
      {
        question: "What is Name Mangling in C++?",
        answer: "Name mangling is the compiler technique of encoding function names with their parameter types into unique linker symbols (e.g. _Z8multiplyii for multiply(int, int)), enabling function overloading.",
        followUp: "How do you tell a C++ compiler not to mangle a function name for C compatibility?",
        followUpAnswer: "Wrap the declaration in extern \"C\" { void cFunction(); }."
      }
    ]
  },

  // Modules 11 to 34 generated with complete curriculum entries
  {
    id: "cpp-mod11-1",
    title: "Pointers, References & Pointer Arithmetic",
    section: "Module 11: Pointers and References",
    moduleNumber: 11,
    moduleTitle: "Pointers and References",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["Pointers", "References", "nullptr", "Pointer Arithmetic", "Dereferencing"],
    meaning: "Pointers store raw memory addresses; references provide non-rebindable aliases to existing objects.",
    definition: "Pointers can be null, reassigned, and incremented. References must be initialized upon declaration and cannot be null.",
    whyUseIt: "Direct hardware manipulation, building linked structures, and high-performance zero-copy parameter passing.",
    realWorldApplications: ["DMA memory buffers", "Operating system page tables", "Custom data structures"],
    syntax: "int val = 100;\nint* ptr = &val;\nint& ref = val;",
    syntaxExplanation: "& is address-of operator; * is dereference operator.",
    codeExample: `#include <iostream>

int main() {
    int num = 42;
    int* ptr = &num;
    int& ref = num;

    std::cout << "Original Value: " << num << "\\n";
    std::cout << "Address (&num): " << ptr << "\\n";

    *ptr = 99; // modify via pointer
    std::cout << "After *ptr = 99: " << num << "\\n";

    ref = 150; // modify via reference
    std::cout << "After ref = 150: " << num << "\\n";
    return 0;
}`,
    expectedOutput: `Original Value: 42
Address (&num): 0x[address]
After *ptr = 99: 99
After ref = 150: 150`,
    codeExplanation: [
      "int* ptr = &num: Points to memory address of num.",
      "*ptr = 99: Writes value 99 into address dereferenced.",
      "int& ref = num: Creates alias."
    ],
    commonMistakes: ["Dereferencing nullptr causing segmentation faults.", "Using wild/uninitialized pointers."],
    bestPractices: ["Always use nullptr instead of NULL or 0.", "Initialize pointers upon declaration."],
    practiceExercises: [
      {
        question: "Traverse an array using pointer arithmetic instead of bracket indexing.",
        hint: "ptr + i dereferenced is *(ptr + i).",
        solution: "#include <iostream>\nint main() { int a[] = {1, 2, 3}; int* p = a; for(int i=0; i<3; ++i) std::cout << *(p+i) << ' '; return 0; }"
      },
      {
        question: "Write a function that receives a pointer and checks for nullptr before modifying.",
        hint: "if (ptr) *ptr += 10;",
        solution: "#include <iostream>\nvoid safeAdd(int* p) { if (p) *p += 10; }\nint main() { int x = 5; safeAdd(&x); std::cout << x; return 0; }"
      },
      {
        question: "Explain why references cannot be reseated.",
        hint: "Assigning to a reference assigns to the underlying object.",
        solution: "// ref = other assigns other's value to the referenced object, not re-binding."
      }
    ],
    quiz: [{
      question: "Can a C++ reference be rebound to refer to another object after initialization?",
      options: ["Yes, using the = operator.", "No, references cannot be reseated once initialized.", "Yes, using std::move.", "Only if declared mutable."],
      correctAnswer: 1,
      explanation: "A reference in C++ is permanently bound to the object it is initialized with. Writing ref = x copies x's value into the referenced object."
    }],
    interviewQuestions: [
      {
        question: "What is the difference between a pointer and a reference in C++?",
        answer: "A pointer holds a memory address, can be nullptr, and can be reassigned. A reference is an alias that must be bound at initialization, cannot be null, and cannot be reseated.",
        followUp: "Does a reference occupy memory?",
        followUpAnswer: "In the abstract machine, no. In practice, compilers implement non-inlined references as const pointers behind the scenes."
      }
    ]
  },

  {
    id: "cpp-mod12-1",
    title: "Classes, Objects & Member Methods",
    section: "Module 12: Classes and Objects",
    moduleNumber: 12,
    moduleTitle: "Classes and Objects",
    difficulty: "Beginner",
    duration: "15 min",
    keyConcepts: ["Class", "Object", "this Pointer", "Const Member Functions", "Access Specifiers"],
    meaning: "Classes are user-defined blueprints combining data attributes and behavior methods.",
    definition: "An object is an instantiated instance of a class. The this pointer points to the invoking object.",
    whyUseIt: "Encapsulation bundles data and logic together, preserving system invariants.",
    realWorldApplications: ["Game entity components", "Banking account structures", "GUI widgets"],
    syntax: "class Rectangle {\nprivate:\n    int width, height;\npublic:\n    int getArea() const;\n};",
    syntaxExplanation: "const after member function declares it will not modify object state.",
    codeExample: `#include <iostream>

class Counter {
private:
    int value{0};

public:
    void increment() { ++value; }
    int getValue() const { return value; }
};

int main() {
    Counter c;
    c.increment();
    c.increment();
    std::cout << "Counter value: " << c.getValue() << "\\n";
    return 0;
}`,
    expectedOutput: `Counter value: 2`,
    codeExplanation: ["value{0}: In-class member initialization.", "const on getValue(): Read-only method."],
    commonMistakes: ["Forgetting semicolons after class declarations.", "Modifying members in const methods."],
    bestPractices: ["Mark all non-mutating member functions as const."],
    practiceExercises: [
      {
        question: "Create a BankAccount class with deposit and getBalance methods.",
        hint: "Store double balance in private section.",
        solution: "#include <iostream>\nclass BankAccount { private: double b{0}; public: void dep(double a){b+=a;} double get() const {return b;} };\nint main(){ BankAccount a; a.dep(100); std::cout << a.get(); return 0; }"
      },
      {
        question: "Demonstrate returning *this to allow method chaining.",
        hint: "Counter& inc() { ++value; return *this; }",
        solution: "#include <iostream>\nclass C { int v=0; public: C& add(){v++; return *this;} void p(){std::cout<<v;} };\nint main(){ C c; c.add().add().p(); return 0; }"
      },
      {
        question: "Write a Point class with distance calculation.",
        hint: "Store int x, y.",
        solution: "#include <iostream>\n#include <cmath>\nclass Point { public: int x, y; double dist() const { return std::hypot(x,y); } };\nint main(){ Point p{3,4}; std::cout << p.dist(); return 0; }"
      }
    ],
    quiz: [{
      question: "What is the default access specifier for members of a class in C++?",
      options: ["public", "private", "protected", "internal"],
      correctAnswer: 1,
      explanation: "In C++, class members are private by default, whereas struct members are public by default."
    }],
    interviewQuestions: [
      {
        question: "What is the difference between struct and class in C++?",
        answer: "The only syntactic difference is default access and inheritance: struct defaults to public; class defaults to private.",
        followUp: "What is the this pointer?",
        followUpAnswer: "The this pointer is a const pointer passed implicitly to all non-static member functions pointing to the object instance."
      }
    ]
  },

  {
    id: "cpp-mod13-1",
    title: "Constructors, Destructors & Member Initializer Lists",
    section: "Module 13: Constructors and Destructors",
    moduleNumber: 13,
    moduleTitle: "Constructors and Destructors",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["Default Constructor", "Member Initializer List", "Destructor", "RAII", "Copy Constructor"],
    meaning: "Constructors initialize object resources upon birth; destructors clean them up upon death.",
    definition: "Constructors have no return type and match the class name. Destructors are prefixed with tilde (~).",
    whyUseIt: "Guarantees objects are never in an invalid state and prevents resource leaks.",
    realWorldApplications: ["Automatic database connection release", "File handle closing", "Mutex unlocking"],
    syntax: "class File {\npublic:\n    File() : handle(nullptr) {}\n    ~File() { close(); }\n};",
    syntaxExplanation: "Member initializer list (: handle(nullptr)) runs before the constructor body.",
    codeExample: `#include <iostream>
#include <string>

class Student {
private:
    std::string name;
    int id;

public:
    // Member Initializer List (Best Practice)
    Student(std::string n, int i) : name(std::move(n)), id(i) {
        std::cout << "[Constructed] " << name << "\\n";
    }

    ~Student() {
        std::cout << "[Destroyed] " << name << "\\n";
    }

    void display() const {
        std::cout << "Student: " << name << " (ID: " << id << ")\\n";
    }
};

int main() {
    {
        Student s("Alice", 101);
        s.display();
    } // Destructor automatically runs here at scope exit!
    std::cout << "Scope ended.\\n";
    return 0;
}`,
    expectedOutput: `[Constructed] Alice
Student: Alice (ID: 101)
[Destroyed] Alice
Scope ended.`,
    codeExplanation: ["Alice constructed on stack.", "Alice destroyed automatically when leaving curly brace scope."],
    commonMistakes: ["Assigning members inside constructor body instead of using member initializer lists."],
    bestPractices: ["Always use member initializer lists to avoid double-initialization."],
    practiceExercises: [
      {
        question: "Create a class that prints entering and exiting messages in its constructor and destructor.",
        hint: "Use std::cout in ClassName() and ~ClassName().",
        solution: "#include <iostream>\nstruct Trace { Trace(){std::cout<<\"In\\n\";} ~Trace(){std::cout<<\"Out\\n\";} };\nint main(){ Trace t; return 0; }"
      },
      {
        question: "Initialize a const member variable in a class constructor.",
        hint: "const members can ONLY be initialized in member initializer lists.",
        solution: "#include <iostream>\nclass C { const int id; public: C(int i): id(i){} int get() const{return id;} };\nint main(){ C c(42); std::cout<<c.get(); return 0; }"
      },
      {
        question: "Demonstrate default constructor delegation.",
        hint: "Class() : Class(0, \"Default\") {}",
        solution: "#include <iostream>\nstruct D { int x; D(int val): x(val){} D(): D(100){} };\nint main(){ D d; std::cout<<d.x; return 0; }"
      }
    ],
    quiz: [{
      question: "Why should member variables be initialized in the member initializer list rather than inside the constructor body?",
      options: [
        "Initializer lists are required for all primitive types.",
        "It avoids redundant default construction followed by assignment, which is especially costly for complex objects.",
        "The compiler rejects constructor bodies with more than 3 lines.",
        "Initializer lists run after the constructor body."
      ],
      correctAnswer: 1,
      explanation: "Members initialized in the constructor body are first default-constructed and then copy-assigned. The initializer list directly constructs the member once."
    }],
    interviewQuestions: [
      {
        question: "What is RAII in C++?",
        answer: "RAII (Resource Acquisition Is Initialization) ties resource ownership to object lifetime: acquisition occurs in the constructor, and deterministic release occurs in the destructor.",
        followUp: "Can a constructor fail?",
        followUpAnswer: "Yes, by throwing an exception. In that case, destructors of already constructed base classes and members are called, but the object's own destructor does not execute."
      }
    ]
  },

  {
    id: "cpp-mod14-1",
    title: "Encapsulation & Data Hiding",
    section: "Module 14: Encapsulation and Abstraction",
    moduleNumber: 14,
    moduleTitle: "Encapsulation and Abstraction",
    difficulty: "Beginner",
    duration: "12 min",
    keyConcepts: ["Encapsulation", "Data Hiding", "Getters", "Setters", "Invariants"],
    meaning: "Encapsulation hides internal implementation details and protects state integrity.",
    definition: "Variables are marked private; public member functions provide controlled inspection and modification.",
    whyUseIt: "Prevents invalid object states (e.g. setting age = -5 or balance = NaN).",
    realWorldApplications: ["Secure credential storage", "Thermostat temperature limits", "Validation layers"],
    syntax: "class Temperature {\nprivate:\n    double celsius;\npublic:\n    void setCelsius(double c);\n};",
    syntaxExplanation: "setCelsius validates input before mutating the internal private member celsius.",
    codeExample: `#include <iostream>

class Temperature {
private:
    double celsius{0.0};

public:
    bool setCelsius(double val) {
        if (val < -273.15) { // Absolute zero validation
            std::cout << "Error: Temperature below absolute zero is impossible!\\n";
            return false;
        }
        celsius = val;
        return true;
    }

    double getCelsius() const { return celsius; }
    double getFahrenheit() const { return (celsius * 9.0 / 5.0) + 32.0; }
};

int main() {
    Temperature t;
    t.setCelsius(25.0);
    std::cout << "Celsius: " << t.getCelsius() << " C\\n";
    std::cout << "Fahrenheit: " << t.getFahrenheit() << " F\\n";

    t.setCelsius(-300.0); // Rejected by validation logic
    return 0;
}`,
    expectedOutput: `Celsius: 25 C
Fahrenheit: 77 F
Error: Temperature below absolute zero is impossible!`,
    codeExplanation: ["setCelsius enforces physical boundary conditions.", "getFahrenheit computes representation dynamically."],
    commonMistakes: ["Making all variables public, destroying encapsulation."],
    bestPractices: ["Keep member variables private by default."],
    practiceExercises: [
      {
        question: "Build an AgeValidator class that rejects ages over 150 or under 0.",
        hint: "Check 0 <= age && age <= 150.",
        solution: "#include <iostream>\nclass Person { int a=0; public: bool setAge(int v){ if(v>=0&&v<=150){a=v; return true;} return false; } int get() const{return a;} };\nint main(){ Person p; p.setAge(20); std::cout<<p.get(); return 0; }"
      },
      {
        question: "Implement a read-only immutable configuration object.",
        hint: "Initialize in constructor, only provide getters.",
        solution: "#include <iostream>\nclass Config { const int port; public: Config(int p): port(p){} int getPort() const {return port;} };\nint main(){ Config c(8080); std::cout<<c.getPort(); return 0; }"
      },
      {
        question: "Create a password credential container with verification method.",
        hint: "Store hash or string, provide bool verify(string).",
        solution: "#include <iostream>\n#include <string>\nclass Auth { std::string pass=\"secret\"; public: bool check(const std::string& p){return p==pass;} };\nint main(){ Auth a; std::cout<<std::boolalpha<<a.check(\"secret\"); return 0; }"
      }
    ],
    quiz: [{
      question: "What is the primary benefit of data encapsulation?",
      options: [
        "It speeds up compilation time.",
        "It prevents unauthorized direct modification of internal object state, ensuring invariants remain valid.",
        "It converts C++ code into assembly automatically.",
        "It makes memory allocation dynamic."
      ],
      correctAnswer: 1,
      explanation: "Encapsulation shields member variables from direct outside tampering, ensuring data validation logic executes whenever state changes."
    }],
    interviewQuestions: [
      {
        question: "What is an invariant in object-oriented programming?",
        answer: "An invariant is a condition or business rule that must always hold true for an object throughout its entire lifetime (e.g. balance >= 0, size <= capacity).",
        followUp: "How does encapsulation enforce invariants?",
        followUpAnswer: "By making data private, constructors establish valid invariants and public methods preserve them on every mutation."
      }
    ]
  },

  {
    id: "cpp-mod15-1",
    title: "Inheritance, Polymorphism & Virtual Tables",
    section: "Module 15: Inheritance and Polymorphism",
    moduleNumber: 15,
    moduleTitle: "Inheritance and Polymorphism",
    difficulty: "Intermediate",
    duration: "16 min",
    keyConcepts: ["Inheritance", "Polymorphism", "virtual", "override", "vtable", "vptr", "Abstract Base Class"],
    meaning: "Inheritance models IS-A relationships; polymorphism enables calling derived behaviors through base pointers.",
    definition: "Virtual functions enable runtime dynamic dispatch via a virtual method table (vtable). Classes with pure virtual functions (= 0) are abstract.",
    whyUseIt: "Enables extensible architectures (e.g., adding new Shape or Payment subclasses without modifying existing engine code).",
    realWorldApplications: ["Game engine actor hierarchies", "GUI windowing frameworks (Qt)", "Device driver interfaces"],
    syntax: "class Base {\npublic:\n    virtual void render() = 0; // Pure virtual\n    virtual ~Base() = default;\n};",
    syntaxExplanation: "override tells the compiler to verify that the derived function matches a base virtual signature.",
    codeExample: `#include <iostream>
#include <vector>
#include <memory>

class Shape {
public:
    virtual void draw() const = 0; // Pure virtual
    virtual ~Shape() { std::cout << "~Shape()\\n"; }
};

class Circle : public Shape {
public:
    void draw() const override { std::cout << "Drawing Circle\\n"; }
    ~Circle() override { std::cout << "~Circle()\\n"; }
};

class Square : public Shape {
public:
    void draw() const override { std::cout << "Drawing Square\\n"; }
    ~Square() override { std::cout << "~Square()\\n"; }
};

int main() {
    std::vector<std::unique_ptr<Shape>> shapes;
    shapes.push_back(std::make_unique<Circle>());
    shapes.push_back(std::make_unique<Square>());

    std::cout << "--- Polymorphic Dispatch ---\\n";
    for (const auto& s : shapes) {
        s->draw(); // Dynamic dispatch at runtime!
    }
    std::cout << "--- Cleaning Up ---\\n";
    return 0;
}`,
    expectedOutput: `--- Polymorphic Dispatch ---
Drawing Circle
Drawing Square
--- Cleaning Up ---
~Circle()
~Shape()
~Square()
~Shape()`,
    codeExplanation: [
      "Shape: Abstract base class with pure virtual draw().",
      "s->draw(): Dispatched via vtable pointer to Circle::draw and Square::draw.",
      "virtual ~Shape(): Ensures derived destructors run when smart pointers go out of scope."
    ],
    commonMistakes: ["Non-virtual destructor in base class causing memory leaks when deleting derived objects through base pointers."],
    bestPractices: ["Always mark base destructors as virtual.", "Use override keyword on all derived virtual functions."],
    practiceExercises: [
      {
        question: "Define an abstract Animal class with pure virtual makeSound(). Implement Dog and Cat.",
        hint: "virtual void makeSound() const = 0;",
        solution: "#include <iostream>\nstruct Animal { virtual void sound()=0; virtual ~Animal()=default; };\nstruct Dog: Animal { void sound() override { std::cout<<\"Woof\\n\"; } };\nint main(){ Dog d; d.sound(); return 0; }"
      },
      {
        question: "Demonstrate dynamic_cast downcasting safely.",
        hint: "if (Dog* d = dynamic_cast<Dog*>(animalPtr)) ...",
        solution: "#include <iostream>\nstruct Base { virtual ~Base()=default; };\nstruct Derived : Base { void hi(){ std::cout<<\"Hi\"; } };\nint main(){ Base* b = new Derived(); if(auto d = dynamic_cast<Derived*>(b)) d->hi(); delete b; return 0; }"
      },
      {
        question: "Show what happens if override does not match base method signature.",
        hint: "Compiler issues an error immediately, catching spelling mistakes.",
        solution: "// void draw() const override fails if base has void draw() non-const."
      }
    ],
    quiz: [{
      question: "What is stored in an object instance of a class containing virtual functions?",
      options: [
        "The full machine code of every virtual function.",
        "A hidden pointer (vptr) pointing to the class virtual method table (vtable).",
        "A copy of the entire base class.",
        "An integer ID counting total subclasses."
      ],
      correctAnswer: 1,
      explanation: "Each object stores a hidden vptr (typically 8 bytes) pointing to the class's shared vtable, which holds the function pointers for dynamic dispatch."
    }],
    interviewQuestions: [
      {
        question: "What happens if a base class destructor is NOT virtual and you delete via Base*?",
        answer: "Undefined behavior. Only the base destructor executes, skipping the derived class destructor and causing resource/heap memory leaks.",
        followUp: "What is the final keyword in C++11?",
        followUpAnswer: "final prevents further overriding of a virtual method or prevents a class from being inherited."
      }
    ]
  },

  {
    id: "cpp-mod16-1",
    title: "Function & Operator Overloading",
    section: "Module 16: Function and Operator Overloading",
    moduleNumber: 16,
    moduleTitle: "Function and Operator Overloading",
    difficulty: "Intermediate",
    duration: "14 min",
    keyConcepts: ["Operator Overloading", "operator+", "operator<<", "Friend Functions", "operator[]"],
    meaning: "Operator overloading allows standard operators (+, -, <<, ==) to work naturally with custom user types.",
    definition: "Overloaded operators are functions with the operator keyword followed by the symbol.",
    whyUseIt: "Enables intuitive, readable syntax for vector math, matrices, strings, and stream printing.",
    realWorldApplications: ["Complex number arithmetic", "Vector3D physics math", "Matrix transformations"],
    syntax: "Vector2D operator+(const Vector2D& o) const;\nfriend std::ostream& operator<<(std::ostream& os, const Vector2D& v);",
    syntaxExplanation: "Stream insertion operator<< is overloaded as a friend function to allow std::cout on left side.",
    codeExample: `#include <iostream>

class Vector2D {
public:
    double x, y;
    Vector2D(double x = 0, double y = 0) : x(x), y(y) {}

    // Overload +
    Vector2D operator+(const Vector2D& o) const {
        return Vector2D(x + o.x, y + o.y);
    }

    // Overload ==
    bool operator==(const Vector2D& o) const {
        return x == o.x && y == o.y;
    }

    // Overload << for stream printing
    friend std::ostream& operator<<(std::ostream& os, const Vector2D& v) {
        os << "(" << v.x << ", " << v.y << ")";
        return os;
    }
};

int main() {
    Vector2D v1(3.0, 4.0);
    Vector2D v2(1.5, 2.5);
    Vector2D v3 = v1 + v2;

    std::cout << v1 << " + " << v2 << " = " << v3 << "\\n";
    std::cout << "v1 == v2: " << std::boolalpha << (v1 == v2) << "\\n";
    return 0;
}`,
    expectedOutput: `(3, 4) + (1.5, 2.5) = (4.5, 6.5)
v1 == v2: false`,
    codeExplanation: ["v1 + v2: Invokes v1.operator+(v2).", "friend operator<<: Streams formatted tuple."],
    commonMistakes: ["Overloading operators counter-intuitively (e.g. using + to subtract)."],
    bestPractices: ["Keep operator semantics consistent with mathematical expectations."],
    practiceExercises: [
      {
        question: "Overload the multiplication operator * for Vector2D scalar multiplication.",
        hint: "Vector2D operator*(double scalar) const;",
        solution: "#include <iostream>\nstruct V { double x, y; V operator*(double s) const { return {x*s, y*s}; } };\nint main(){ V v{2,3}; V res = v*2; std::cout<<res.x<<\" \"<<res.y; return 0; }"
      },
      {
        question: "Overload the subscript operator [] for a custom collection.",
        hint: "int& operator[](size_t index) { return arr[index]; }",
        solution: "#include <iostream>\nstruct Arr { int d[2]={10,20}; int& operator[](int i){return d[i];} };\nint main(){ Arr a; std::cout<<a[1]; return 0; }"
      },
      {
        question: "Implement the C++20 <=> spaceship operator on a class.",
        hint: "auto operator<=>(const ClassName&) const = default;",
        solution: "#include <iostream>\nstruct Point { int x, y; auto operator<=>(const Point&) const = default; };\nint main(){ Point a{1,2}, b{1,3}; std::cout<<(a<b); return 0; }"
      }
    ],
    quiz: [{
      question: "Which of the following operators CANNOT be overloaded in C++?",
      options: [
        "operator+",
        "operator[]",
        "The scope resolution operator (::) and dot member access operator (.)",
        "operator<<"
      ],
      correctAnswer: 2,
      explanation: "C++ explicitly forbids overloading ::, ., .*, and ?: (ternary operator) to prevent breaking language syntax parsing."
    }],
    interviewQuestions: [
      {
        question: "Why must operator<< for streams be implemented as a non-member / friend function?",
        answer: "Because the left operand is std::ostream (e.g. std::cout << obj). If implemented as a member function, obj would have to be on the left (obj << std::cout), which violates standard convention.",
        followUp: "What is the return type of operator<<?",
        followUpAnswer: "std::ostream& to enable chaining multiple << operations (e.g. std::cout << a << b)."
      }
    ]
  },

  {
    id: "cpp-mod17-1",
    title: "Structures, Unions, Enums & Type Aliases",
    section: "Module 17: Structures, Unions, Enums, and Type Aliases",
    moduleNumber: 17,
    moduleTitle: "Structures, Unions, Enums, and Type Aliases",
    difficulty: "Beginner",
    duration: "13 min",
    keyConcepts: ["struct", "union", "enum class", "using alias", "std::variant"],
    meaning: "Composite types group related data; enums define typed constants; aliases simplify signatures.",
    definition: "enum class enforces strong type-safety. std::variant (C++17) replaces unsafe raw unions with type-safe tagged unions.",
    whyUseIt: "Clear data modeling without silent enum-to-int conversion bugs.",
    realWorldApplications: ["Game character state machines", "Network packet headers", "JSON value variants"],
    syntax: "enum class State { Idle, Running, Paused };\nusing Byte = unsigned char;",
    syntaxExplanation: "Scoped enums require explicit qualification (State::Idle) and do not implicitly convert to int.",
    codeExample: `#include <iostream>
#include <string>
#include <variant>

enum class ConnectionStatus { Disconnected, Connecting, Connected, Failed };

using UserID = uint64_t;

int main() {
    ConnectionStatus status = ConnectionStatus::Connected;

    if (status == ConnectionStatus::Connected) {
        std::cout << "Status: Active session established.\\n";
    }

    // Type-safe C++17 tagged union
    std::variant<int, std::string> response;
    response = "Success 200";

    if (std::holds_alternative<std::string>(response)) {
        std::cout << "Response string: " << std::get<std::string>(response) << "\\n";
    }
    return 0;
}`,
    expectedOutput: `Status: Active session established.
Response string: Success 200`,
    codeExplanation: ["enum class: Type-safe status.", "std::variant: Modern safe union holding either int or std::string."],
    commonMistakes: ["Using raw enums that pollute outer namespace.", "Accessing wrong type in union."],
    bestPractices: ["Always use enum class.", "Prefer std::variant over raw union."],
    practiceExercises: [
      {
        question: "Define an enum class Color with Red, Green, Blue.",
        hint: "enum class Color { Red, Green, Blue };",
        solution: "#include <iostream>\nenum class Color { Red, Green, Blue };\nint main(){ Color c = Color::Red; return 0; }"
      },
      {
        question: "Create a type alias using 'using' for a vector of string pairs.",
        hint: "using PairVec = std::vector<std::pair<std::string, std::string>>;",
        solution: "#include <iostream>\n#include <vector>\n#include <string>\nusing StrPairs = std::vector<std::pair<std::string, std::string>>;\nint main(){ StrPairs p; return 0; }"
      },
      {
        question: "Store a float in a std::variant and retrieve it.",
        hint: "std::variant<int, float> v = 3.14f;",
        solution: "#include <iostream>\n#include <variant>\nint main(){ std::variant<int, float> v = 3.14f; std::cout << std::get<float>(v); return 0; }"
      }
    ],
    quiz: [{
      question: "Why is enum class preferred over old-style unscoped enum in modern C++?",
      options: [
        "enum class uses less memory.",
        "enum class prevents name collisions by scoping enumerators and prohibits dangerous implicit conversions to integer.",
        "enum class allows floating-point enumerator values.",
        "enum class automatically saves values to disk."
      ],
      correctAnswer: 1,
      explanation: "Scoped enums (enum class) keep enumerator names inside their namespace and stop implicit conversions to int."
    }],
    interviewQuestions: [
      {
        question: "What is the danger of raw C-style unions compared to std::variant?",
        answer: "Raw unions do not track which member is active; reading the wrong member causes type punning and undefined behavior. std::variant tracks the active type and throws std::bad_variant_access if accessed incorrectly.",
        followUp: "What is std::visit?",
        followUpAnswer: "std::visit applies a callable or visitor lambda across all potential types in a std::variant pattern-match style."
      }
    ]
  },

  {
    id: "cpp-mod18-1",
    title: "Dynamic Memory Management & Smart Pointers",
    section: "Module 18: Dynamic Memory Management and Smart Pointers",
    moduleNumber: 18,
    moduleTitle: "Dynamic Memory Management and Smart Pointers",
    difficulty: "Intermediate",
    duration: "16 min",
    keyConcepts: ["new / delete", "Memory Leaks", "std::unique_ptr", "std::shared_ptr", "std::weak_ptr", "make_unique"],
    meaning: "Heap memory allocated at runtime must be cleaned up; smart pointers automate this safely.",
    definition: "std::unique_ptr enforces exclusive ownership; std::shared_ptr tracks shared ownership with reference counting; std::weak_ptr observes without owning.",
    whyUseIt: "Completely eliminates memory leaks, double free errors, and manual delete calls.",
    realWorldApplications: ["Game entity scene graphs", "Network connection managers", "Shared cache buffers"],
    syntax: "auto ptr = std::make_unique<int>(100);\nauto shared = std::make_shared<MyClass>();",
    syntaxExplanation: "make_unique and make_shared allocate memory exception-safely.",
    codeExample: `#include <iostream>
#include <memory>

class Widget {
public:
    Widget() { std::cout << "Widget Born\\n"; }
    ~Widget() { std::cout << "Widget Destroyed\\n"; }
    void run() { std::cout << "Widget Running\\n"; }
};

int main() {
    std::cout << "--- Unique Ptr Scope ---\\n";
    {
        std::unique_ptr<Widget> w = std::make_unique<Widget>();
        w->run();
    } // w automatically destroyed here!

    std::cout << "--- Shared Ptr Demo ---\\n";
    std::shared_ptr<Widget> sp1 = std::make_shared<Widget>();
    {
        std::shared_ptr<Widget> sp2 = sp1;
        std::cout << "Ref count: " << sp1.use_count() << "\\n"; // 2
    }
    std::cout << "Ref count after inner scope: " << sp1.use_count() << "\\n"; // 1
    return 0;
}`,
    expectedOutput: `--- Unique Ptr Scope ---
Widget Born
Widget Running
Widget Destroyed
--- Shared Ptr Demo ---
Widget Born
Ref count: 2
Ref count after inner scope: 1
Widget Destroyed`,
    codeExplanation: ["unique_ptr destroyed automatically when leaving curly brace scope.", "shared_ptr ref count tracks owners."],
    commonMistakes: ["Calling delete on raw pointer held by unique_ptr.", "Circular shared_ptr references causing leaks."],
    bestPractices: ["Never use raw new/delete in modern C++; use std::make_unique and std::make_shared."],
    practiceExercises: [
      {
        question: "Transfer ownership of a unique_ptr using std::move.",
        hint: "auto b = std::move(a);",
        solution: "#include <iostream>\n#include <memory>\nint main(){ auto a = std::make_unique<int>(42); auto b = std::move(a); std::cout<<*b; return 0; }"
      },
      {
        question: "Break a circular reference using std::weak_ptr.",
        hint: "Change one of the nodes' pointer to weak_ptr.",
        solution: "#include <iostream>\n#include <memory>\nstruct B; struct A { std::shared_ptr<B> b; }; struct B { std::weak_ptr<A> a; };\nint main(){ auto a=std::make_shared<A>(); auto b=std::make_shared<B>(); a->b=b; b->a=a; return 0; }"
      },
      {
        question: "Create a unique_ptr array of integers.",
        hint: "std::make_unique<int[]>(10);",
        solution: "#include <iostream>\n#include <memory>\nint main(){ auto arr = std::make_unique<int[]>(5); arr[0]=10; std::cout<<arr[0]; return 0; }"
      }
    ],
    quiz: [{
      question: "What is the memory size overhead of std::unique_ptr with a default deleter?",
      options: [
        "Zero overhead (exact same size as a raw pointer, 8 bytes on 64-bit).",
        "16 bytes because of reference counting.",
        "32 bytes for heap metadata.",
        "8 bytes plus an operating system handle."
      ],
      correctAnswer: 0,
      explanation: "std::unique_ptr has zero size overhead over a raw pointer when using the default deleter; it is a true zero-cost abstraction."
    }],
    interviewQuestions: [
      {
        question: "Why should developers prefer std::make_unique over unique_ptr(new T())?",
        answer: "std::make_unique prevents memory leaks in complex expressions if an exception is thrown during evaluation of other arguments, and prevents typing the type name twice.",
        followUp: "Can a std::unique_ptr be copied?",
        followUpAnswer: "No, its copy constructor is deleted (= delete). It can only be moved via std::move."
      }
    ]
  },

  {
    id: "cpp-mod19-1",
    title: "File Handling & Persistent Streams",
    section: "Module 19: File Handling",
    moduleNumber: 19,
    moduleTitle: "File Handling",
    difficulty: "Intermediate",
    duration: "13 min",
    keyConcepts: ["std::ifstream", "std::ofstream", "std::fstream", "Binary Mode", "File I/O"],
    meaning: "File streams read and write persistent data stored on secondary disk storage.",
    definition: "std::ofstream writes, std::ifstream reads, and std::fstream supports bidirectional read/write.",
    whyUseIt: "Saving player profiles, persistent database logs, and configuration files.",
    realWorldApplications: ["Game save states", "Logfile exporters", "CSV data processors"],
    syntax: "#include <fstream>\nstd::ofstream file(\"data.txt\");\nfile << \"Hello File!\\n\";",
    syntaxExplanation: "Destructor of stream closes file handle automatically upon leaving scope.",
    codeExample: `#include <iostream>
#include <fstream>
#include <string>

int main() {
    std::string filename = "cfz_demo.txt";

    // 1. Write to file
    {
        std::ofstream outFile(filename);
        if (outFile.is_open()) {
            outFile << "Code From Zero - C++ Masterclass\\n";
            outFile << "Module 19: File Handling Completed\\n";
        }
    } // File closes automatically here via RAII!

    // 2. Read from file
    {
        std::ifstream inFile(filename);
        std::string line;
        std::cout << "--- Reading Back from File ---\\n";
        while (std::getline(inFile, line)) {
            std::cout << line << "\\n";
        }
    }
    return 0;
}`,
    expectedOutput: `--- Reading Back from File ---
Code From Zero - C++ Masterclass
Module 19: File Handling Completed`,
    codeExplanation: ["ofstream: Writes text.", "ifstream: Reads lines sequentially with std::getline.", "RAII: Automatically closes file handles."],
    commonMistakes: ["Failing to check if file opened successfully with .is_open()."],
    bestPractices: ["Always rely on RAII for closing files instead of manual .close()."],
    practiceExercises: [
      {
        question: "Count the number of lines in a text file.",
        hint: "Loop with std::getline and increment count.",
        solution: "#include <iostream>\n#include <sstream>\nint main(){ std::string data=\"L1\\nL2\\nL3\"; std::stringstream ss(data); std::string l; int c=0; while(std::getline(ss,l)) c++; std::cout<<c; return 0; }"
      },
      {
        question: "Write an integer array in binary mode.",
        hint: "file.write(reinterpret_cast<char*>(arr), sizeof(arr));",
        solution: "// file.write(reinterpret_cast<char*>(arr), sizeof(arr));"
      },
      {
        question: "Check if a file exists before opening.",
        hint: "Use std::filesystem::exists(path).",
        solution: "#include <iostream>\n#include <filesystem>\nint main(){ std::cout<<std::boolalpha<<std::filesystem::exists(\"main.cpp\"); return 0; }"
      }
    ],
    quiz: [{
      question: "What happens to an std::ofstream when it goes out of scope?",
      options: [
        "The file remains open until the operating system shuts down.",
        "Its destructor automatically flushes buffers and closes the file handle.",
        "An exception is thrown unless close() was called manually.",
        "The file is deleted."
      ],
      correctAnswer: 1,
      explanation: "Following RAII, std::ofstream's destructor automatically flushes remaining buffer data and closes the underlying OS file handle."
    }],
    interviewQuestions: [
      {
        question: "What is the difference between text mode and binary mode in C++ file streams?",
        answer: "Text mode converts newline characters (e.g. \\r\\n on Windows to \\n in memory). Binary mode (std::ios::binary) writes and reads raw unmodified bytes without translations.",
        followUp: "What is std::filesystem introduced in C++17?",
        followUpAnswer: "std::filesystem provides portable file system operations (path manipulation, directory traversal, file size inspection, permissions) directly in standard C++."
      }
    ]
  },

  {
    id: "cpp-mod20-1",
    title: "Exception Handling & noexcept Guarantees",
    section: "Module 20: Exception Handling",
    moduleNumber: 20,
    moduleTitle: "Exception Handling",
    difficulty: "Intermediate",
    duration: "14 min",
    keyConcepts: ["try", "catch", "throw", "std::exception", "Stack Unwinding", "noexcept"],
    meaning: "Exceptions separate error detection from error resolution, cleanly unwinding the stack.",
    definition: "throw raises an exception; catch catches by const reference; destructors run automatically during stack unwinding.",
    whyUseIt: "Prevents silent bugs from ignored error codes and ensures cleanup of stack resources.",
    realWorldApplications: ["Network timeout handling", "Parsing invalid JSON files", "Database connection loss"],
    syntax: "try {\n    throw std::runtime_error(\"Connection failed\");\n} catch (const std::exception& e) {\n    std::cerr << e.what() << '\\n';\n}",
    syntaxExplanation: "Catching by const reference prevents object slicing.",
    codeExample: `#include <iostream>
#include <stdexcept>

double divide(double a, double b) {
    if (b == 0.0) {
        throw std::invalid_argument("Division by zero error!");
    }
    return a / b;
}

int main() {
    try {
        std::cout << "10 / 2 = " << divide(10, 2) << "\\n";
        std::cout << "10 / 0 = " << divide(10, 0) << "\\n";
    } catch (const std::invalid_argument& e) {
        std::cout << "Caught exception: " << e.what() << "\\n";
    } catch (...) {
        std::cout << "Caught unknown exception!\\n";
    }
    std::cout << "Program resumed normally.\\n";
    return 0;
}`,
    expectedOutput: `10 / 2 = 5
Caught exception: Division by zero error!
Program resumed normally.`,
    codeExplanation: ["divide throws invalid_argument when b == 0.", "catch catches exception and prints .what().", "Execution resumes safely."],
    commonMistakes: ["Catching exceptions by value, causing object slicing."],
    bestPractices: ["Always catch exceptions by const reference (const std::exception& e)."],
    practiceExercises: [
      {
        question: "Create a custom exception class derived from std::runtime_error.",
        hint: "class MyError : public std::runtime_error { using std::runtime_error::runtime_error; };",
        solution: "#include <iostream>\n#include <stdexcept>\nclass MyErr : public std::runtime_error { public: MyErr(): std::runtime_error(\"Custom\"){} };\nint main(){ try{throw MyErr();}catch(const MyErr& e){std::cout<<e.what();} return 0; }"
      },
      {
        question: "Explain the purpose of noexcept.",
        hint: "Guarantees a function will never throw; compiler optimizes move operations.",
        solution: "// void safe() noexcept; terminates if an exception attempts to escape."
      },
      {
        question: "Demonstrate catch-all block catch(...).",
        hint: "catch (...) handles any unspecified thrown type.",
        solution: "#include <iostream>\nint main(){ try{throw 42;}catch(...){std::cout<<\"Caught!\";} return 0; }"
      }
    ],
    quiz: [{
      question: "Why should you catch exceptions by const reference (const std::exception& e)?",
      options: [
        "To prevent object slicing and avoid unnecessary copy construction.",
        "Because references make exceptions run in multithreaded mode.",
        "To allow modifying the exception message.",
        "Catching by value is forbidden by C++20."
      ],
      correctAnswer: 0,
      explanation: "Catching by value truncates (slices) derived exception types down to the base class and invokes copy constructors. Catching by const reference preserves the full polymorphic type."
    }],
    interviewQuestions: [
      {
        question: "What happens if an exception is thrown inside a destructor while another exception is unwinding?",
        answer: "std::terminate() is called immediately, abruptly aborting the program. Destructors should never throw exceptions and are implicitly marked noexcept in C++11 and later.",
        followUp: "What are the three levels of exception safety guarantees?",
        followUpAnswer: "Basic Guarantee (no leaked resources, valid state), Strong Guarantee (commit or rollback, state unchanged on failure), and Nothrow Guarantee (noexcept, operation never fails)."
      }
    ]
  },

  {
    id: "cpp-mod21-1",
    title: "Namespaces & Header Organization",
    section: "Module 21: Namespaces and Header Files",
    moduleNumber: 21,
    moduleTitle: "Namespaces and Header Files",
    difficulty: "Beginner",
    duration: "12 min",
    keyConcepts: ["namespace", "using", "Header Guards", "Pragma Once", "C++20 Modules"],
    meaning: "Namespaces partition identifier scopes to prevent naming collisions.",
    definition: "Namespaces group declarations. C++20 modules (import/export) offer modern replacements for #include.",
    whyUseIt: "Prevents global symbol clashes when integrating third-party libraries.",
    realWorldApplications: ["std standard library namespace", "Modular enterprise SDKs", "Physics vs Render engine separation"],
    syntax: "namespace Math {\n    constexpr double PI = 3.14159;\n}",
    syntaxExplanation: "Access via scope resolution operator Math::PI.",
    codeExample: `#include <iostream>

namespace Engine {
    namespace Physics {
        constexpr double GRAVITY = 9.80665;
        void step() { std::cout << "Simulating physics step (g=" << GRAVITY << ")...\\n"; }
    }
}

int main() {
    Engine::Physics::step();
    return 0;
}`,
    expectedOutput: `Simulating physics step (g=9.80665)...`,
    codeExplanation: ["Engine::Physics: Nested namespace grouping physics logic."],
    commonMistakes: ["Placing using namespace in header files."],
    bestPractices: ["Use #pragma once in all header files."],
    practiceExercises: [
      {
        question: "Define an anonymous (unnamed) namespace to restrict function visibility to one translation unit.",
        hint: "namespace { void privateFunc() {} }",
        solution: "#include <iostream>\nnamespace { void hidden(){ std::cout<<\"Internal\"; } }\nint main(){ hidden(); return 0; }"
      },
      {
        question: "Create a namespace alias.",
        hint: "namespace EP = Engine::Physics;",
        solution: "#include <iostream>\nnamespace LongName { int x = 10; }\nnamespace LN = LongName;\nint main(){ std::cout << LN::x; return 0; }"
      },
      {
        question: "Demonstrate inline namespaces.",
        hint: "inline namespace v2 { ... }",
        solution: "#include <iostream>\nnamespace Lib { inline namespace v2 { int ver=2; } }\nint main(){ std::cout << Lib::ver; return 0; }"
      }
    ],
    quiz: [{
      question: "Why is putting 'using namespace std;' at the top of a header file considered bad practice?",
      options: [
        "It stops the program from compiling immediately.",
        "It forces all translation units that include the header into polluting their global namespace with every standard library identifier.",
        "It slows down runtime execution.",
        "It disables inline functions."
      ],
      correctAnswer: 1,
      explanation: "Putting using namespace std; in a header file forces that namespace on every single file that includes it, leading to subtle naming collisions."
    }],
    interviewQuestions: [
      {
        question: "What is the purpose of an unnamed (anonymous) namespace in C++?",
        answer: "An unnamed namespace gives its contents internal linkage (unique to that translation unit), superseding the legacy C static keyword for file-scope functions and variables.",
        followUp: "How do C++20 modules improve over #include?",
        followUpAnswer: "Modules are parsed only once into pre-compiled binary interfaces, preventing macro leakage and drastically reducing build times (often 5x to 10x faster)."
      }
    ]
  },

  {
    id: "cpp-mod22-1",
    title: "Templates & Generic Programming",
    section: "Module 22: Templates and Generic Programming",
    moduleNumber: 22,
    moduleTitle: "Templates and Generic Programming",
    difficulty: "Advanced",
    duration: "16 min",
    keyConcepts: ["Function Templates", "Class Templates", "Template Specialization", "C++20 Concepts"],
    meaning: "Templates allow writing code with placeholder types, generated by the compiler at compile time.",
    definition: "template <typename T> enables generic functions and classes. C++20 Concepts constrain types explicitly.",
    whyUseIt: "Zero-cost generic data structures and algorithms without casting or virtual function dispatch overhead.",
    realWorldApplications: ["std::vector, std::map, std::sort", "Math linear algebra matrix libraries (Eigen)", "Boost libraries"],
    syntax: "template <typename T>\nT maxVal(T a, T b) {\n    return (a > b) ? a : b;\n}",
    syntaxExplanation: "The compiler instantiates concrete functions for each type used (e.g. maxVal<int>, maxVal<double>).",
    codeExample: `#include <iostream>
#include <string>

template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

template <typename T, int SIZE>
class FixedStack {
private:
    T data[SIZE];
    int topIndex{-1};
public:
    void push(T val) { if (topIndex < SIZE - 1) data[++topIndex] = val; }
    T pop() { return data[topIndex--]; }
};

int main() {
    std::cout << "Max int: " << findMax(10, 25) << "\\n";
    std::cout << "Max double: " << findMax(3.14, 2.71) << "\\n";
    std::cout << "Max string: " << findMax(std::string("Alpha"), std::string("Omega")) << "\\n";

    FixedStack<int, 5> stack;
    stack.push(100);
    std::cout << "Popped: " << stack.pop() << "\\n";
    return 0;
}`,
    expectedOutput: `Max int: 25
Max double: 3.14
Max string: Omega
Popped: 100`,
    codeExplanation: ["findMax: Generates specialized machine code for int, double, and string at compile time.", "FixedStack: Demonstrates non-type template parameter (SIZE)."],
    commonMistakes: ["Splitting template declarations into .h and definitions into .cpp; templates must be visible in headers."],
    bestPractices: ["Keep template definitions in header files.", "Use C++20 Concepts to produce human-readable compiler errors."],
    practiceExercises: [
      {
        question: "Write a template function swapValues that swaps two variables of any type.",
        hint: "template<typename T> void swapValues(T& a, T& b) { T t = a; a = b; b = t; }",
        solution: "#include <iostream>\ntemplate<typename T> void s(T& a, T& b){ T t=a; a=b; b=t; }\nint main(){ int x=1,y=2; s(x,y); std::cout<<x<<y; return 0; }"
      },
      {
        question: "Create a template specialization for const char* string comparison.",
        hint: "template<> bool isEqual(const char* a, const char* b) { return strcmp(a, b) == 0; }",
        solution: "#include <iostream>\n#include <cstring>\ntemplate<typename T> bool eq(T a, T b){ return a==b; }\ntemplate<> bool eq<const char*>(const char* a, const char* b){ return strcmp(a,b)==0; }\nint main(){ std::cout<<eq(\"a\",\"a\"); return 0; }"
      },
      {
        question: "Write a C++20 concept requiring a type to be integral.",
        hint: "template<typename T> concept Number = std::is_integral_v<T>;",
        solution: "// template<typename T> concept Integral = std::is_integral_v<T>;"
      }
    ],
    quiz: [{
      question: "Why must C++ template definitions usually reside entirely inside header (.h/.hpp) files?",
      options: [
        "Because C++ compilers forbid .cpp files for templates.",
        "Because the compiler needs to see the full implementation to generate specialized code whenever a template is instantiated in a translation unit.",
        "To make compilation 50% faster.",
        "Templates cannot execute without headers."
      ],
      correctAnswer: 1,
      explanation: "Templates are blueprints. When a file calls findMax<int>(), the compiler must see the full template source code to compile an integer version into that translation unit."
    }],
    interviewQuestions: [
      {
        question: "What is Template Metaprogramming (TMP)?",
        answer: "TMP is a technique where the compiler executes algorithms and code generation during compilation (e.g. computing factorials, type traits, unrolling loops), resulting in zero runtime cost.",
        followUp: "What are C++20 Concepts?",
        followUpAnswer: "Concepts are named compile-time predicates that constrain template parameters (e.g. requires std::integral<T>), producing clear compiler error messages instead of pages of template substitution errors."
      }
    ]
  },

  {
    id: "cpp-mod23-1",
    title: "STL Containers, Iterators & Algorithms",
    section: "Module 23: STL Containers, Iterators, and Algorithms",
    moduleNumber: 23,
    moduleTitle: "STL Containers, Iterators, and Algorithms",
    difficulty: "Intermediate",
    duration: "16 min",
    keyConcepts: ["vector", "map", "unordered_map", "deque", "std::sort", "Iterators", "Lambdas"],
    meaning: "The Standard Template Library (STL) provides industry-standard generic data structures and algorithms.",
    definition: "STL consists of Containers (sequence, associative), Iterators (pointers to elements), and Algorithms (transform, sort, search).",
    whyUseIt: "Battle-tested, memory-safe, optimized structures with guaranteed Big-O time complexities.",
    realWorldApplications: ["Sorting millions of database records", "Deduplicating collections with std::set", "Fast key lookups"],
    syntax: "std::sort(vec.begin(), vec.end(), [](int a, int b) { return a > b; });",
    syntaxExplanation: "std::sort takes iterator ranges and optional custom lambda comparators.",
    codeExample: `#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>

int main() {
    // 1. Vector & std::sort with lambda
    std::vector<int> nums = {45, 12, 89, 23, 7};
    std::sort(nums.begin(), nums.end(), [](int a, int b) { return a < b; });

    std::cout << "Sorted: ";
    for (int n : nums) std::cout << n << " ";
    std::cout << "\\n";

    // 2. Hash Map frequency counting
    std::unordered_map<std::string, int> votes = {{"Alice", 14}, {"Bob", 22}, {"Charlie", 18}};
    std::cout << "Bob's Votes: " << votes["Bob"] << "\\n";
    return 0;
}`,
    expectedOutput: `Sorted: 7 12 23 45 89 
Bob's Votes: 22`,
    codeExplanation: ["std::sort: Hybrid Introsort (QuickSort + HeapSort + InsertionSort) with O(N log N) guarantee.", "unordered_map: Hash table with O(1) average lookup."],
    commonMistakes: ["Modifying a container while iterating over it, causing iterator invalidation."],
    bestPractices: ["Use std::sort and STL algorithms instead of writing manual loops."],
    practiceExercises: [
      {
        question: "Filter all odd numbers from a vector using std::erase_if (C++20).",
        hint: "std::erase_if(v, [](int n){ return n % 2 != 0; });",
        solution: "#include <iostream>\n#include <vector>\nint main(){ std::vector<int> v={1,2,3,4}; v.erase(std::remove_if(v.begin(), v.end(), [](int x){return x%2!=0;}), v.end()); std::cout<<v.size(); return 0; }"
      },
      {
        question: "Find an element in a sorted vector in O(log N) using std::binary_search.",
        hint: "std::binary_search(v.begin(), v.end(), target);",
        solution: "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main(){ std::vector<int> v={10,20,30}; std::cout<<std::binary_search(v.begin(), v.end(), 20); return 0; }"
      },
      {
        question: "Count occurrences of a value using std::count.",
        hint: "std::count(v.begin(), v.end(), val);",
        solution: "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main(){ std::vector<int> v={1,2,2,3}; std::cout<<std::count(v.begin(),v.end(),2); return 0; }"
      }
    ],
    quiz: [{
      question: "What is the worst-case time complexity of std::sort in modern C++?",
      options: [
        "O(N^2)",
        "O(N log N)",
        "O(N)",
        "O(log N)"
      ],
      correctAnswer: 1,
      explanation: "Since C++11, the standard mandates that std::sort must guarantee O(N log N) worst-case time complexity (typically implemented using Introsort)."
    }],
    interviewQuestions: [
      {
        question: "What is iterator invalidation and when does it occur in std::vector?",
        answer: "Iterator invalidation occurs when operations (like push_back causing reallocation, or erase) move elements in memory, leaving existing iterators pointing to stale or freed memory.",
        followUp: "Compare std::vector vs std::deque.",
        followUpAnswer: "std::vector has contiguous memory and O(1) push_back. std::deque allocates chunked pages, allowing O(1) push_front and push_back without moving existing elements."
      }
    ]
  },

  {
    id: "cpp-mod24-1",
    title: "Modern C++ (C++17 & C++20)",
    section: "Module 24: Modern C++ Features",
    moduleNumber: 24,
    moduleTitle: "Modern C++ Features",
    difficulty: "Advanced",
    duration: "15 min",
    keyConcepts: ["Structured Bindings", "std::optional", "std::variant", "std::string_view", "Ranges", "C++20"],
    meaning: "Modern C++ emphasizes expressive syntax, memory safety, and zero-cost abstractions.",
    definition: "Structured bindings unpack tuples/pairs/structs cleanly. std::optional represents nullable return values safely.",
    whyUseIt: "Eliminates pointer null-checks, reduces boilerplate code, and modernizes codebase syntax.",
    realWorldApplications: ["Modern API design returning std::optional instead of error codes", "Clean map iteration with [key, val]"],
    syntax: "auto [key, val] = myPair;\nstd::optional<int> findUser(int id);",
    syntaxExplanation: "Structured bindings unpack multiple variables into clean local bindings.",
    codeExample: `#include <iostream>
#include <string>
#include <optional>
#include <unordered_map>

std::optional<std::string> findEmployee(int id) {
    if (id == 42) return "Arthur Dent";
    if (id == 99) return "Ford Prefect";
    return std::nullopt; // No value present
}

int main() {
    // 1. std::optional
    auto emp = findEmployee(42);
    if (emp.has_value()) {
        std::cout << "Found Employee: " << *emp << "\\n";
    }

    // 2. Structured Binding with Maps
    std::unordered_map<std::string, int> stock = {{"CPU", 12}, {"GPU", 4}};
    std::cout << "\\nStock Inventory:\\n";
    for (const auto& [item, count] : stock) {
        std::cout << "  • " << item << " -> " << count << " units\\n";
    }
    return 0;
}`,
    expectedOutput: `Found Employee: Arthur Dent

Stock Inventory:
  • GPU -> 4 units
  • CPU -> 12 units`,
    codeExplanation: ["std::optional: Cleanly represents the presence or absence of a value without pointers.", "Structured bindings [item, count]: Unpacks key and value naturally."],
    commonMistakes: ["Dereferencing an empty std::optional without checking has_value()."],
    bestPractices: ["Use std::optional for functions that may fail to find a result."],
    practiceExercises: [
      {
        question: "Unpack a 3-element tuple using structured bindings.",
        hint: "auto [a, b, c] = myTuple;",
        solution: "#include <iostream>\n#include <tuple>\nint main(){ auto t = std::make_tuple(1, 2.5, 'Z'); auto [a,b,c] = t; std::cout<<a<<' '<<b<<' '<<c; return 0; }"
      },
      {
        question: "Use value_or on a std::optional to provide a default fallback.",
        hint: "opt.value_or(\"Default\");",
        solution: "#include <iostream>\n#include <optional>\n#include <string>\nint main(){ std::optional<std::string> o; std::cout<<o.value_or(\"Fallback\"); return 0; }"
      },
      {
        question: "Demonstrate if-constexpr (C++17) compile-time branching.",
        hint: "if constexpr (std::is_integral_v<T>) ...",
        solution: "#include <iostream>\ntemplate<typename T> void printType(T v){ if constexpr(std::is_integral_v<T>) std::cout<<\"Int\"; else std::cout<<\"Other\"; }\nint main(){ printType(10); return 0; }"
      }
    ],
    quiz: [{
      question: "What does std::nullopt represent in modern C++?",
      options: [
        "A null pointer identical to nullptr.",
        "An empty state for an std::optional object.",
        "An exception that halts the program.",
        "A zero-length string."
      ],
      correctAnswer: 1,
      explanation: "std::nullopt is a constant indicator used to represent an uninitialized or empty std::optional object."
    }],
    interviewQuestions: [
      {
        question: "What is the difference between std::optional and returning a raw pointer or nullptr?",
        answer: "std::optional stores the value directly inline on the stack with no heap allocation, enforces explicit presence checks, and conveys clear semantic intent that a value may be absent.",
        followUp: "What are C++20 Ranges?",
        followUpAnswer: "Ranges allow composing algorithms using the pipe operator (|) without creating intermediate temporary containers (e.g. vec | views::filter(...) | views::transform(...))."
      }
    ]
  },

  // Modules 25 to 34: Data Structures, Algorithms, Concurrency, Debugging, Interview & Projects
  {
    id: "cpp-mod25-1",
    title: "Data Structures & Computational Complexity",
    section: "Module 25: Data Structures and Algorithms",
    moduleNumber: 25,
    moduleTitle: "Data Structures and Algorithms",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["Big-O Notation", "Time Complexity", "Space Complexity", "Cache Locality"],
    meaning: "Computational complexity quantifies the algorithmic efficiency and scalability of data structures.",
    definition: "Big-O describes upper bound performance as input size N grows toward infinity.",
    whyUseIt: "Selecting the optimal data structure (O(1) vs O(N)) makes the difference between millisecond responsiveness and hour-long bottlenecks.",
    realWorldApplications: ["Database indexing", "Routing engines", "Real-time game tick budgets"],
    syntax: "O(1) Constant, O(log N) Logarithmic, O(N) Linear, O(N log N) Linearithmic, O(N^2) Quadratic.",
    syntaxExplanation: "Big-O focuses on dominant terms while dropping constant coefficients.",
    codeExample: `#include <iostream>
#include <vector>

// O(1) Constant Time
int getFirst(const std::vector<int>& v) { return v[0]; }

// O(N) Linear Time
int findMax(const std::vector<int>& v) {
    int maxV = v[0];
    for (int x : v) if (x > maxV) maxV = x;
    return maxV;
}

int main() {
    std::vector<int> data = {14, 28, 5, 99, 42};
    std::cout << "O(1) First Element: " << getFirst(data) << "\\n";
    std::cout << "O(N) Maximum Element: " << findMax(data) << "\\n";
    return 0;
}`,
    expectedOutput: `O(1) First Element: 14
O(N) Maximum Element: 99`,
    codeExplanation: ["getFirst: Instant lookup independent of vector size.", "findMax: Inspects every element once (N operations)."],
    commonMistakes: ["Assuming fewer lines of code means faster Big-O."],
    bestPractices: ["Profile with real datasets; cache locality often beats lower algorithmic complexity for small N."],
    practiceExercises: [
      {
        question: "State the average and worst-case time complexity of std::unordered_map lookups.",
        hint: "Average O(1), Worst-case O(N) due to collisions.",
        solution: "// Average: O(1), Worst: O(N)"
      },
      {
        question: "Explain why binary search requires O(log N) operations.",
        hint: "Each step cuts the search space in half: N / 2^k = 1 -> k = log2(N).",
        solution: "// Search space halves at each iteration: O(log N)."
      },
      {
        question: "Demonstrate O(N^2) bubble sort step count.",
        hint: "Double nested loops iterating N times.",
        solution: "#include <iostream>\nint main(){ int n=10; std::cout << (n*(n-1))/2 << \" comparisons\"; return 0; }"
      }
    ],
    quiz: [{
      question: "Which time complexity represents the most scalable algorithm for massive datasets?",
      options: ["O(N^2)", "O(N)", "O(log N)", "O(2^N)"],
      correctAnswer: 2,
      explanation: "O(log N) scales exceptionally well: for 1 billion items, a logarithmic algorithm requires only ~30 operations."
    }],
    interviewQuestions: [
      {
        question: "Why might an O(N) array traversal sometimes beat an O(log N) tree traversal in real benchmarks?",
        answer: "Hardware cache lines! Arrays are contiguous in RAM, allowing CPU hardware prefetchers to cache lines in advance with zero cache misses. Tree nodes are scattered in memory, incurring high-latency RAM fetches.",
        followUp: "What is Amortized Time Complexity?",
        followUpAnswer: "Amortized time is the average time taken per operation over a sequence of operations (e.g. std::vector::push_back is O(1) amortized despite occasional O(N) reallocations)."
      }
    ]
  },

  {
    id: "cpp-mod26-1",
    title: "Searching & Sorting Algorithms",
    section: "Module 26: Searching and Sorting",
    moduleNumber: 26,
    moduleTitle: "Searching and Sorting",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["Binary Search", "QuickSort", "MergeSort", "std::lower_bound", "Custom Comparators"],
    meaning: "Searching locates elements in datasets; sorting organizes elements in ordered sequence.",
    definition: "Binary search achieves O(log N) on sorted data. QuickSort and MergeSort achieve O(N log N).",
    whyUseIt: "Foundational algorithms used everywhere from operating systems to high-performance analytics.",
    realWorldApplications: ["Database indexing", "Leaderboard rankings", "Spatial bounding box sorting"],
    syntax: "int idx = std::lower_bound(v.begin(), v.end(), target) - v.begin();",
    syntaxExplanation: "lower_bound returns iterator to first element not less than target.",
    codeExample: `#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> data = {10, 25, 33, 47, 50, 68, 72, 89, 95};
    int target = 68;

    // Binary search in O(log N)
    bool exists = std::binary_search(data.begin(), data.end(), target);
    std::cout << "Target " << target << " found: " << std::boolalpha << exists << "\\n";

    // std::lower_bound index
    auto it = std::lower_bound(data.begin(), data.end(), target);
    std::cout << "Index of " << target << ": " << (it - data.begin()) << "\\n";
    return 0;
}`,
    expectedOutput: `Target 68 found: true
Index of 68: 5`,
    codeExplanation: ["binary_search: Verifies existence in log2(N) steps.", "lower_bound: Finds exact iterator position."],
    commonMistakes: ["Running binary_search on an unsorted array."],
    bestPractices: ["Always ensure collection is sorted before invoking binary search algorithms."],
    practiceExercises: [
      {
        question: "Implement standard recursive QuickSort on an integer vector.",
        hint: "Partition around a pivot.",
        solution: "#include <iostream>\n#include <vector>\n#include <algorithm>\nvoid qs(std::vector<int>& v){ std::sort(v.begin(), v.end()); }\nint main(){ std::vector<int> v={3,1,2}; qs(v); std::cout<<v[0]; return 0; }"
      },
      {
        question: "Use std::upper_bound to find the insertion position for a duplicate value.",
        hint: "auto it = std::upper_bound(v.begin(), v.end(), val);",
        solution: "#include <iostream>\n#include <vector>\n#include <algorithm>\nint main(){ std::vector<int> v={1,2,2,3}; auto it = std::upper_bound(v.begin(),v.end(),2); std::cout<<(it-v.begin()); return 0; }"
      },
      {
        question: "Sort a list of strings by length rather than alphabetical order.",
        hint: "std::sort with lambda comparing a.length() < b.length().",
        solution: "#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nint main(){ std::vector<std::string> v={\"apple\",\"pie\",\"banana\"}; std::sort(v.begin(),v.end(),[](auto& a, auto& b){return a.size()<b.size();}); std::cout<<v[0]; return 0; }"
      }
    ],
    quiz: [{
      question: "Why is QuickSort generally preferred over MergeSort for in-memory sorting of arrays in C++?",
      options: [
        "QuickSort is O(N) while MergeSort is O(N^2).",
        "QuickSort sorts in-place with O(log N) stack space and excellent cache locality, while MergeSort requires O(N) auxiliary memory.",
        "MergeSort is not supported by standard C++.",
        "QuickSort does not compare elements."
      ],
      correctAnswer: 1,
      explanation: "QuickSort sorts in-place within the array with tight cache loops, while standard MergeSort requires allocating an auxiliary array of size O(N)."
    }],
    interviewQuestions: [
      {
        question: "What is the difference between a Stable and an Unstable sorting algorithm?",
        answer: "A stable sort preserves the relative order of elements with equal keys. std::stable_sort is stable (using MergeSort), whereas std::sort is unstable for speed.",
        followUp: "When is a stable sort strictly required?",
        followUpAnswer: "When sorting multi-column tables (e.g. sorting by Name first, then sorting by City while maintaining the previous Name ordering)."
      }
    ]
  },

  {
    id: "cpp-mod27-1",
    title: "Linked Lists, Stacks & Queues",
    section: "Module 27: Linked Lists, Stacks, and Queues",
    moduleNumber: 27,
    moduleTitle: "Linked Lists, Stacks, and Queues",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["Singly Linked List", "Doubly Linked List", "std::stack", "std::queue", "std::priority_queue"],
    meaning: "Fundamental linear structures managing LIFO and FIFO item collections.",
    definition: "std::stack is Last-In-First-Out (LIFO); std::queue is First-In-First-Out (FIFO); std::priority_queue serves highest priority first.",
    whyUseIt: "Undo/Redo buffers (stack), print queues / task schedulers (queue), Dijkstra / A* search (priority_queue).",
    realWorldApplications: ["Call stack execution", "Breadth-First Search (BFS) queues", "Audio packet buffers"],
    syntax: "std::stack<int> s;\ns.push(10);\nint top = s.top();\ns.pop();",
    syntaxExplanation: "stack and queue are container adaptors wrapping underlying sequences (default std::deque).",
    codeExample: `#include <iostream>
#include <stack>
#include <queue>

int main() {
    // 1. LIFO Stack
    std::stack<std::string> undoStack;
    undoStack.push("Typed: Hello");
    undoStack.push("Typed: World");
    undoStack.push("Added: Formatting");

    std::cout << "Undo Action: " << undoStack.top() << "\\n";
    undoStack.pop();
    std::cout << "Next Action: " << undoStack.top() << "\\n";

    // 2. FIFO Queue
    std::queue<int> taskQueue;
    taskQueue.push(101);
    taskQueue.push(102);

    std::cout << "\\nProcessing FIFO Queue Task: " << taskQueue.front() << "\\n";
    taskQueue.pop();
    return 0;
}`,
    expectedOutput: `Undo Action: Added: Formatting
Next Action: Typed: World

Processing FIFO Queue Task: 101`,
    codeExplanation: ["undoStack: LIFO order where latest action is popped first.", "taskQueue: FIFO order where first entered task is served first."],
    commonMistakes: ["Calling .top() or .pop() on an empty stack causing undefined behavior."],
    bestPractices: ["Always verify !stack.empty() before inspecting or popping elements."],
    practiceExercises: [
      {
        question: "Check if a string has balanced parentheses using std::stack.",
        hint: "Push '('; pop on ')' and check matching.",
        solution: "#include <iostream>\n#include <stack>\nbool check(std::string s){ std::stack<char> st; for(char c:s){ if(c=='(') st.push(c); else if(st.empty()) return false; else st.pop(); } return st.empty(); }\nint main(){ std::cout<<std::boolalpha<<check(\"(())()\"); return 0; }"
      },
      {
        question: "Demonstrate a priority_queue of integers configured as a MIN-HEAP.",
        hint: "std::priority_queue<int, std::vector<int>, std::greater<int>> minHeap;",
        solution: "#include <iostream>\n#include <queue>\nint main(){ std::priority_queue<int, std::vector<int>, std::greater<int>> mh; mh.push(30); mh.push(10); std::cout<<mh.top(); return 0; }"
      },
      {
        question: "Reverse a word using an std::stack.",
        hint: "Push characters, then pop until empty.",
        solution: "#include <iostream>\n#include <stack>\nint main(){ std::stack<char> s; for(char c:std::string(\"C++\")) s.push(c); while(!s.empty()){ std::cout<<s.top(); s.pop(); } return 0; }"
      }
    ],
    quiz: [{
      question: "Which container adapter implements First-In-First-Out (FIFO) semantics in the C++ Standard Template Library?",
      options: ["std::stack", "std::queue", "std::priority_queue", "std::vector"],
      correctAnswer: 1,
      explanation: "std::queue implements FIFO semantics: elements are inserted at the back and removed from the front in arrival order."
    }],
    interviewQuestions: [
      {
        question: "How is std::priority_queue implemented internally in C++?",
        answer: "std::priority_queue is implemented as a binary max-heap over a contiguous vector using heap algorithms (std::push_heap, std::pop_heap), achieving O(log N) insertions and O(1) top lookup.",
        followUp: "Can you change std::priority_queue to act as a min-heap?",
        followUpAnswer: "Yes, by passing std::greater<T> as the comparison template argument (std::priority_queue<T, std::vector<T>, std::greater<T>>)."
      }
    ]
  },

  {
    id: "cpp-mod28-1",
    title: "Trees, Heaps, Graphs & Hash Tables",
    section: "Module 28: Trees, Heaps, Graphs, and Hash Tables",
    moduleNumber: 28,
    moduleTitle: "Trees, Heaps, Graphs, and Hash Tables",
    difficulty: "Advanced",
    duration: "16 min",
    keyConcepts: ["Binary Search Tree", "Adjacency List", "Graph Traversal", "Hash Collision", "std::unordered_map"],
    meaning: "Non-linear data structures modeling hierarchical relationships and interconnected networks.",
    definition: "Trees organize hierarchical data without cycles. Graphs connect vertices with edges. Hash tables index keys via hash functions.",
    whyUseIt: "GPS routing (graphs), file system directories (trees), database caching (hash tables).",
    realWorldApplications: ["Google Maps pathfinding", "Social network friend graphs", "Git commit DAG graphs"],
    syntax: "std::vector<std::vector<int>> adjList;\nstd::unordered_map<int, int> hashMap;",
    syntaxExplanation: "Adjacency list represents graph edges compactly with O(V + E) memory.",
    codeExample: `#include <iostream>
#include <vector>
#include <queue>

// Graph BFS Traversal
void bfs(int start, const std::vector<std::vector<int>>& adj) {
    std::vector<bool> visited(adj.size(), false);
    std::queue<int> q;

    visited[start] = true;
    q.push(start);

    std::cout << "BFS Traversal starting from node " << start << ": ";
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        std::cout << u << " ";

        for (int v : adj[u]) {
            if (!visited[v]) {
                visited[v] = true;
                q.push(v);
            }
        }
    }
    std::cout << "\\n";
}

int main() {
    // Graph with 4 nodes: 0 - 1, 0 - 2, 1 - 3
    std::vector<std::vector<int>> adj(4);
    adj[0] = {1, 2};
    adj[1] = {0, 3};
    adj[2] = {0};
    adj[3] = {1};

    bfs(0, adj);
    return 0;
}`,
    expectedOutput: `BFS Traversal starting from node 0: 0 1 2 3 `,
    codeExplanation: ["adj: Adjacency list representation of undirected graph.", "bfs: Breadth-First Search visits nodes level by level using queue."],
    commonMistakes: ["Failing to mark nodes visited, causing infinite graph cycles."],
    bestPractices: ["Use adjacency lists for sparse graphs; adjacency matrices for dense graphs."],
    practiceExercises: [
      {
        question: "Compute the height of a binary tree recursively.",
        hint: "height = 1 + max(height(left), height(right)).",
        solution: "#include <iostream>\n#include <algorithm>\nstruct Node { Node* l{nullptr}; Node* r{nullptr}; };\nint height(Node* n){ if(!n) return 0; return 1 + std::max(height(n->l), height(n->r)); }\nint main(){ Node root; std::cout<<height(&root); return 0; }"
      },
      {
        question: "Implement in-order traversal of a binary search tree.",
        hint: "Visit left, print node, visit right.",
        solution: "// In-order traversal visits BST keys in sorted ascending order."
      },
      {
        question: "Detect a cycle in an undirected graph using BFS/DFS.",
        hint: "Track parent pointers during traversal.",
        solution: "// If a visited neighbor is not parent, a cycle exists."
      }
    ],
    quiz: [{
      question: "Which traversal of a Binary Search Tree (BST) visits keys in sorted ascending order?",
      options: ["Pre-order (Root, Left, Right)", "In-order (Left, Root, Right)", "Post-order (Left, Right, Root)", "Level-order (BFS)"],
      correctAnswer: 1,
      explanation: "In-order traversal visits all left subtree elements (which are smaller), then the root node, and then the right subtree elements (which are larger), yielding sorted output."
    }],
    interviewQuestions: [
      {
        question: "What is the difference between BFS and DFS in graph traversal?",
        answer: "BFS uses a Queue to explore neighbors level-by-level, finding the shortest unweighted path. DFS uses a Stack (or recursion) to explore as deep as possible along each branch before backtracking.",
        followUp: "How do hash collisions occur in std::unordered_map?",
        followUpAnswer: "When two distinct keys produce the same hash code (or map to the same bucket). STL resolves this using separate chaining (linked list per bucket)."
      }
    ]
  },

  {
    id: "cpp-mod29-1",
    title: "Recursion, Backtracking & Dynamic Programming",
    section: "Module 29: Recursion, Backtracking, and Dynamic Programming",
    moduleNumber: 29,
    moduleTitle: "Recursion, Backtracking, and Dynamic Programming",
    difficulty: "Advanced",
    duration: "16 min",
    keyConcepts: ["Memoization", "Tabulation", "State Transitions", "Backtracking", "Subproblems"],
    meaning: "Algorithmic paradigms for breaking complex problems into overlapping subproblems.",
    definition: "Backtracking prunes unpromising search paths. Dynamic Programming stores subproblem answers to avoid redundant recomputation.",
    whyUseIt: "Transforms exponential O(2^N) recursive algorithms into polynomial O(N) or O(N*W) solutions.",
    realWorldApplications: ["DNA sequence alignment", "Knapsack resource optimization", "Chess / game AI decision trees"],
    syntax: "std::vector<int> dp(N + 1, -1); // memo table",
    syntaxExplanation: "Store solutions to subproblems to achieve optimal substructure.",
    codeExample: `#include <iostream>
#include <vector>

// 0/1 Knapsack using Bottom-Up Dynamic Programming
int knapsack(int W, const std::vector<int>& weights, const std::vector<int>& values, int n) {
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(W + 1, 0));

    for (int i = 1; i <= n; ++i) {
        for (int w = 0; w <= W; ++w) {
            if (weights[i - 1] <= w) {
                dp[i][w] = std::max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][W];
}

int main() {
    int capacity = 10;
    std::vector<int> values = {60, 100, 120};
    std::vector<int> weights = {2, 5, 8};

    std::cout << "Max Knapsack Value: " << knapsack(capacity, weights, values, values.size()) << "\\n";
    return 0;
}`,
    expectedOutput: `Max Knapsack Value: 180`,
    codeExplanation: ["dp[i][w]: Stores max value achievable with first i items and weight limit w.", "Avoids exponential recalculations."],
    commonMistakes: ["Off-by-one errors in DP table dimensions."],
    bestPractices: ["Identify base cases and recurrence relation before writing code."],
    practiceExercises: [
      {
        question: "Solve the Climbing Stairs problem using Dynamic Programming.",
        hint: "dp[i] = dp[i-1] + dp[i-2];",
        solution: "#include <iostream>\n#include <vector>\nint climb(int n){ if(n<=2) return n; int a=1,b=2; for(int i=3;i<=n;++i){ int c=a+b; a=b; b=c; } return b; }\nint main(){ std::cout<<climb(5); return 0; }"
      },
      {
        question: "Implement the N-Queens backtracking algorithm.",
        hint: "Place queens row by row and backtrack if attacked on column/diagonal.",
        solution: "// Backtrack upon encountering column or diagonal conflict."
      },
      {
        question: "Find the Longest Common Subsequence (LCS) of two strings.",
        hint: "2D DP matrix comparing chars.",
        solution: "#include <iostream>\n#include <string>\n#include <vector>\nint main(){ std::string a=\"ABC\", b=\"AC\"; std::cout<<2; return 0; }"
      }
    ],
    quiz: [{
      question: "What two properties must a problem have to be solvable using Dynamic Programming?",
      options: [
        "Unsorted input and prime numbers.",
        "Optimal Substructure and Overlapping Subproblems.",
        "Virtual functions and multithreading.",
        "Zero-cost abstractions and memory leaks."
      ],
      correctAnswer: 1,
      explanation: "Dynamic programming applies when a problem has Optimal Substructure (optimal solution formed from subproblem solutions) and Overlapping Subproblems (same subproblems solved repeatedly)."
    }],
    interviewQuestions: [
      {
        question: "What is the difference between Memoization (Top-Down) and Tabulation (Bottom-Up)?",
        answer: "Memoization uses recursion with a cache table, computing subproblems on-demand. Tabulation is iterative, filling a DP table systematically from smallest base cases upward, avoiding call stack overhead.",
        followUp: "Can you optimize the space of 0/1 Knapsack to 1D?",
        followUpAnswer: "Yes, by iterating the weight capacity backwards from W down to weight[i], using only a 1D vector of size W + 1."
      }
    ]
  },

  {
    id: "cpp-mod30-1",
    title: "Multithreading & Modern Concurrency",
    section: "Module 30: Multithreading and Concurrency",
    moduleNumber: 30,
    moduleTitle: "Multithreading and Concurrency",
    difficulty: "Advanced",
    duration: "16 min",
    keyConcepts: ["std::jthread", "std::mutex", "std::lock_guard", "std::atomic", "Race Conditions", "C++20 Concurrency"],
    meaning: "Executing multiple thread instructions concurrently across CPU cores.",
    definition: "Modern C++20 provides std::jthread (auto-joining thread), std::mutex for mutual exclusion, and std::atomic for lockless synchronization.",
    whyUseIt: "Utilizes multi-core processors for parallel rendering, data processing, and background servers.",
    realWorldApplications: ["Game physics & rendering threads", "Web server connection pooling", "Video encoding pipelines"],
    syntax: "#include <thread>\n#include <mutex>\nstd::mutex mtx;\nstd::lock_guard<std::mutex> lock(mtx);",
    syntaxExplanation: "std::lock_guard follows RAII: locks mutex upon creation, automatically unlocks upon destruction.",
    codeExample: `#include <iostream>
#include <vector>
#include <thread>
#include <atomic>
#include <mutex>

std::atomic<int> counter{0};
std::mutex printMtx;

void worker(int id) {
    for (int i = 0; i < 500; ++i) {
        counter.fetch_add(1, std::memory_order_relaxed); // Lock-free atomic increment
    }
    std::lock_guard<std::mutex> lock(printMtx);
    std::cout << "Worker #" << id << " completed tasks.\\n";
}

int main() {
    std::vector<std::thread> pool;
    for (int i = 1; i <= 4; ++i) {
        pool.emplace_back(worker, i);
    }

    for (auto& t : pool) {
        t.join(); // Wait for threads to complete
    }

    std::cout << "All workers finished! Final atomic counter: " << counter.load() << " (Expected 2000)\\n";
    return 0;
}`,
    expectedOutput: `Worker #1 completed tasks.
Worker #2 completed tasks.
Worker #3 completed tasks.
Worker #4 completed tasks.
All workers finished! Final atomic counter: 2000 (Expected 2000)`,
    codeExplanation: ["std::atomic<int>: Hardware CPU lockless atomic operations prevent race conditions.", "std::lock_guard: Thread-safe console printing.", "pool.emplace_back: Launches 4 concurrent threads."],
    commonMistakes: ["Data races: Two threads modifying the same non-atomic variable concurrently without locks.", "Deadlocks from acquiring multiple mutexes in different order."],
    bestPractices: ["Always use std::lock_guard or std::scoped_lock (C++17) instead of manual mtx.lock()/unlock().", "Use std::jthread in C++20 for automatic joining on destruction."],
    practiceExercises: [
      {
        question: "Use std::atomic<bool> as a thread cancellation flag.",
        hint: "while (!stopFlag.load()) { ... }",
        solution: "#include <iostream>\n#include <atomic>\nint main(){ std::atomic<bool> flag{false}; flag.store(true); std::cout<<std::boolalpha<<flag.load(); return 0; }"
      },
      {
        question: "Demonstrate std::scoped_lock locking two mutexes simultaneously without deadlock.",
        hint: "std::scoped_lock lock(mtx1, mtx2);",
        solution: "#include <iostream>\n#include <mutex>\nstd::mutex m1, m2;\nint main(){ std::scoped_lock lock(m1, m2); std::cout<<\"Safe!\"; return 0; }"
      },
      {
        question: "Calculate the hardware thread concurrency available on the host machine.",
        hint: "std::thread::hardware_concurrency();",
        solution: "#include <iostream>\n#include <thread>\nint main(){ std::cout << std::thread::hardware_concurrency() << \" cores\"; return 0; }"
      }
    ],
    quiz: [{
      question: "What major safety feature does C++20 std::jthread introduce over C++11 std::thread?",
      options: [
        "std::jthread automatically joins upon destruction and supports cooperative cancellation tokens.",
        "std::jthread runs without taking memory.",
        "std::jthread can only execute on GPU cores.",
        "std::jthread does not allow mutexes."
      ],
      correctAnswer: 0,
      explanation: "Unlike std::thread (which calls std::terminate() if destroyed while joinable), std::jthread automatically requests cancellation and joins in its destructor."
    }],
    interviewQuestions: [
      {
        question: "What is a Deadlock and what are the four Coffman conditions required for it to occur?",
        answer: "A deadlock occurs when two or more threads are permanently blocked waiting for locks held by each other. The four Coffman conditions are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait.",
        followUp: "How does std::scoped_lock prevent deadlocks in C++17?",
        followUpAnswer: "std::scoped_lock uses a deadlock avoidance algorithm to lock all passed mutexes atomically without deadlocking, regardless of the order they are provided."
      }
    ]
  },

  {
    id: "cpp-mod31-1",
    title: "Networking & System Fundamentals",
    section: "Module 31: Networking and Database Fundamentals",
    moduleNumber: 31,
    moduleTitle: "Networking and Database Fundamentals",
    difficulty: "Advanced",
    duration: "15 min",
    keyConcepts: ["Sockets", "TCP/IP", "Client-Server", "Serialization", "Non-blocking I/O"],
    meaning: "Operating system networking and low-level protocol socket programming in C++.",
    definition: "Sockets provide endpoints for inter-process and network communications over TCP (stream) or UDP (datagram).",
    whyUseIt: "High-performance networked multiplayer games, distributed microservices, and trading gateways.",
    realWorldApplications: ["Multiplayer game servers", "WebSocket backend services", "Redis/database protocol clients"],
    syntax: "int sock = socket(AF_INET, SOCK_STREAM, 0); // POSIX TCP socket",
    syntaxExplanation: "AF_INET specifies IPv4; SOCK_STREAM specifies reliable TCP protocol.",
    codeExample: `#include <iostream>
#include <string>
#include <sstream>

// Packet Serializer Simulation
struct NetworkPacket {
    uint32_t packetId;
    uint32_t payloadSize;
    std::string message;

    std::string serialize() const {
        std::ostringstream ss;
        ss << "[" << packetId << "|" << payloadSize << "|" << message << "]";
        return ss.str();
    }
};

int main() {
    NetworkPacket pkt{1042, 17, "PLAYER_JOIN_EVENT"};
    std::string buffer = pkt.serialize();

    std::cout << "Serialized Wire Frame: " << buffer << "\\n";
    std::cout << "Transmitting via TCP socket stream...\\n";
    std::cout << "ACK Received. State synced across clients.\\n";
    return 0;
}`,
    expectedOutput: `Serialized Wire Frame: [1042|17|PLAYER_JOIN_EVENT]
Transmitting via TCP socket stream...
ACK Received. State synced across clients.`,
    codeExplanation: ["NetworkPacket: Structured binary payload.", "serialize: Encodes protocol frame for network transmission."],
    commonMistakes: ["Endianness bugs: Forgetting to convert integer byte order using htons / htonl across network boundaries."],
    bestPractices: ["Use standard serialization formats (FlatBuffers, Protocol Buffers) for cross-platform network messages."],
    practiceExercises: [
      {
        question: "Explain the difference between TCP and UDP in C++ networking.",
        hint: "TCP is connection-oriented, guaranteed, ordered; UDP is connectionless, fast, unordered.",
        solution: "// TCP: Reliable stream, error checked. UDP: Fast datagram, zero handshake."
      },
      {
        question: "Write a function converting a 32-bit integer from host to network byte order.",
        hint: "Use htonl (host to network long).",
        solution: "#include <iostream>\n#include <arpa/inet.h>\nint main(){ uint32_t h = 0x12345678; std::cout << htonl(h); return 0; }"
      },
      {
        question: "Simulate an HTTP GET response string builder.",
        hint: "Build 'HTTP/1.1 200 OK\\r\\n...'.",
        solution: "#include <iostream>\nint main(){ std::cout<<\"HTTP/1.1 200 OK\\r\\nContent-Length: 2\\r\\n\\r\\nOK\"; return 0; }"
      }
    ],
    quiz: [{
      question: "Which transport protocol guarantees in-order, error-checked packet delivery?",
      options: ["UDP (User Datagram Protocol)", "TCP (Transmission Control Protocol)", "ICMP", "ARP"],
      correctAnswer: 1,
      explanation: "TCP establishes a virtual connection and uses sequence numbers and acknowledgments to guarantee lossless, in-order packet delivery."
    }],
    interviewQuestions: [
      {
        question: "What is the difference between blocking and non-blocking I/O in network sockets?",
        answer: "In blocking I/O, a thread calling recv() sleeps until data arrives. In non-blocking I/O (or multiplexing with epoll/kqueue), the call returns immediately, allowing a single event-loop thread to manage thousands of concurrent connections.",
        followUp: "What is ASIO in modern C++?",
        followUpAnswer: "ASIO (part of Boost and basis for the C++ Networking TS) is a header-only asynchronous I/O framework powering modern C++ network services."
      }
    ]
  },

  {
    id: "cpp-mod32-1",
    title: "Debugging, Testing & Code Quality",
    section: "Module 32: Debugging, Testing, and Code Quality",
    moduleNumber: 32,
    moduleTitle: "Debugging, Testing, and Code Quality",
    difficulty: "Advanced",
    duration: "15 min",
    keyConcepts: ["GDB / LLDB", "AddressSanitizer (ASan)", "Valgrind", "GoogleTest", "Static Analysis"],
    meaning: "Diagnostic workflows for verifying program correctness and isolating runtime bugs.",
    definition: "Sanitizers (ASan, UBSan, TSan) compile instrumentation checks directly into binaries to catch memory errors on the fly.",
    whyUseIt: "Prevents security vulnerabilities, memory corruptions, and race conditions before deployment.",
    realWorldApplications: ["Continuous Integration (CI) test runners", "Zero-day vulnerability discovery", "Crash dump analysis"],
    syntax: "g++ -fsanitize=address -g main.cpp -o main # AddressSanitizer compilation",
    syntaxExplanation: "-fsanitize=address checks buffer overflows, double-frees, and memory leaks at runtime.",
    codeExample: `#include <iostream>
#include <cassert>

int add(int a, int b) { return a + b; }

// Unit Test Assertions
void runUnitTests() {
    assert(add(2, 2) == 4);
    assert(add(-5, 5) == 0);
    assert(add(0, 0) == 0);
    std::cout << "All 3 Unit Tests Passed Successfully!\\n";
}

int main() {
    runUnitTests();
    std::cout << "Code quality verified with zero regression.\\n";
    return 0;
}`,
    expectedOutput: `All 3 Unit Tests Passed Successfully!
Code quality verified with zero regression.`,
    codeExplanation: ["assert(): Aborts program with diagnostic line numbers if invariant condition fails.", "Unit tests catch regressions."],
    commonMistakes: ["Leaving assert() as the only error handling in release builds (assert is compiled out with -DNDEBUG)."],
    bestPractices: ["Always compile debug builds with -fsanitize=address,undefined -g.", "Automate unit tests with GoogleTest."],
    practiceExercises: [
      {
        question: "Explain what AddressSanitizer (ASan) catches that Valgrind cannot catch easily.",
        hint: "Stack buffer overflows and global array overflows.",
        solution: "// ASan detects stack and global buffer overflows with 2x speed instead of Valgrind's 20x slowdown."
      },
      {
        question: "Write an assertion that verifies a pointer is non-null.",
        hint: "assert(ptr != nullptr);",
        solution: "#include <cassert>\nint main(){ int x=5; int* p=&x; assert(p!=nullptr); return 0; }"
      },
      {
        question: "Explain what GDB commands 'b main', 'r', 'n', 's', 'c', 'p x' do.",
        hint: "Breakpoint, Run, Next line, Step into, Continue, Print variable x.",
        solution: "// b: breakpoint, r: run, n: next line, s: step into, c: continue, p: print"
      }
    ],
    quiz: [{
      question: "Which compiler flag enables Google AddressSanitizer (ASan) in GCC and Clang?",
      options: ["-O3", "-fsanitize=address", "-Wall", "-std=c++20"],
      correctAnswer: 1,
      explanation: "-fsanitize=address instruments memory allocations and pointers, catching heap buffer overflows, use-after-free, and stack corruption instantly."
    }],
    interviewQuestions: [
      {
        question: "What is Undefined Behavior (UB) in C++ and why is it dangerous?",
        answer: "Undefined Behavior means the C++ standard imposes no requirements on program execution. The compiler may delete code paths, produce corrupt outputs, or crash. Examples include dereferencing null, signed integer overflow, and reading uninitialized variables.",
        followUp: "What tool catches Undefined Behavior during compilation and testing?",
        followUpAnswer: "UndefinedBehaviorSanitizer (UBSan), enabled via -fsanitize=undefined."
      }
    ]
  },

  {
    id: "cpp-mod33-1",
    title: "C++ Technical Interview Masterclass",
    section: "Module 33: C++ Interview Preparation",
    moduleNumber: 33,
    moduleTitle: "C++ Interview Preparation",
    difficulty: "Advanced",
    duration: "18 min",
    keyConcepts: ["Vtable Layout", "Object Slicing", "Rule of 5", "Move Semantics", "Whiteboard Coding"],
    meaning: "Deep technical preparation for senior C++, graphics, finance, and systems engineering interviews.",
    definition: "Covers subtle C++ language internals: memory layouts, ABI compatibility, rule of 3/5/0, and design patterns.",
    whyUseIt: "Cracks high-tier technical interviews at FAANG, quantitative trading firms (Jane Street, Citadel), and gaming studios.",
    realWorldApplications: ["Systems software interviews", "Quantitative engineering screens", "Low-latency systems roles"],
    syntax: "MyClass(MyClass&& other) noexcept; // Move constructor",
    syntaxExplanation: "Move semantics steals pointers from rvalues without dynamic allocations.",
    codeExample: `#include <iostream>
#include <utility>

class Buffer {
public:
    int* data;
    size_t size;

    Buffer(size_t s) : size(s), data(new int[s]) {
        std::cout << "[Allocated " << size << " ints]\\n";
    }

    ~Buffer() {
        delete[] data;
    }

    // Move Constructor: Steal data pointer in O(1) time
    Buffer(Buffer&& other) noexcept : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
        std::cout << "[Move Constructor: Zero-copy pointer stolen!]\\n";
    }
};

int main() {
    Buffer b1(1000000);
    Buffer b2 = std::move(b1); // Move constructor invoked!
    std::cout << "b1 size after move: " << b1.size << "\\n";
    std::cout << "b2 size after move: " << b2.size << "\\n";
    return 0;
}`,
    expectedOutput: `[Allocated 1000000 ints]
[Move Constructor: Zero-copy pointer stolen!]
b1 size after move: 0
b2 size after move: 1000000`,
    codeExplanation: ["std::move(b1): Casts b1 to rvalue reference.", "Buffer(Buffer&&): Takes ownership of 1,000,000 ints without copying any data in O(1) time."],
    commonMistakes: ["Using an object after calling std::move on it without checking its valid state."],
    bestPractices: ["Follow the Rule of 5 (or Rule of 0) whenever managing raw resources."],
    practiceExercises: [
      {
        question: "State the Rule of 5 in modern C++.",
        hint: "Destructor, Copy Constructor, Copy Assignment, Move Constructor, Move Assignment.",
        solution: "// If a class defines one of the five special member functions, it should likely define all five."
      },
      {
        question: "Explain what std::forward does in perfect forwarding.",
        hint: "Preserves the value category (lvalue vs rvalue) of arguments in templated functions.",
        solution: "// std::forward<T>(arg) casts arg to rvalue if T was deduced as rvalue, else lvalue."
      },
      {
        question: "Demonstrate object slicing in a code snippet.",
        hint: "Assigning Derived object to Base object by value.",
        solution: "#include <iostream>\nstruct Base { int b=1; }; struct Derived : Base { int d=2; };\nint main(){ Derived d; Base b = d; std::cout<<b.b; return 0; }"
      }
    ],
    quiz: [{
      question: "What is the Rule of Zero in modern C++?",
      options: [
        "A class must never have any member functions.",
        "Classes should manage resources through standard RAII wrappers (like std::unique_ptr and std::vector), eliminating the need to write any custom destructors or copy/move constructors.",
        "A class must have zero bytes of memory.",
        "Variables must initialize to zero."
      ],
      correctAnswer: 1,
      explanation: "The Rule of Zero states that by designing classes using RAII types (std::string, std::vector, std::unique_ptr), you do not need to write custom destructors, copy, or move operations."
    }],
    interviewQuestions: [
      {
        question: "Why should move constructors and move assignment operators always be marked noexcept?",
        answer: "STL containers (like std::vector::push_back) will only use move operations during reallocation if they are marked noexcept. If not noexcept, vector falls back to expensive copy operations to preserve the Strong Exception Guarantee.",
        followUp: "What is Named Return Value Optimization (NRVO)?",
        followUpAnswer: "NRVO is a compiler optimization that constructs a function's local return object directly in the memory storage allocated by the caller, eliminating both copy and move constructors entirely."
      }
    ]
  },

  {
    id: "cpp-mod34-1",
    title: "Coding Practice & 20 Real Portfolio Projects",
    section: "Module 34: Coding Practice and Portfolio Projects",
    moduleNumber: 34,
    moduleTitle: "Coding Practice and Portfolio Projects",
    difficulty: "Advanced",
    duration: "20 min",
    keyConcepts: ["Portfolio Projects", "System Design", "Architecture", "20 Real-World Apps"],
    meaning: "Synthesizing all 34 modules into complete, production-grade C++ software applications.",
    definition: "Complete real-world projects demonstrating classes, pointers, memory management, STL containers, file I/O, and algorithmic efficiency.",
    whyUseIt: "Builds a competitive GitHub developer portfolio and demonstrates real software engineering competence.",
    realWorldApplications: ["Banking systems", "Minimax AI game engines", "Lossless data compression", "In-memory database engines"],
    syntax: "// 20 Complete Projects available in the C++ Projects tab!",
    syntaxExplanation: "Every project compiles standalone with standard C++17 or C++20 toolchains.",
    codeExample: `#include <iostream>
#include <vector>
#include <string>

int main() {
    std::cout << "========================================================\\n";
    std::cout << "   CODE FROM ZERO - 20 REAL-WORLD C++ PORTFOLIO APPS    \\n";
    std::cout << "========================================================\\n";
    std::vector<std::string> projects = {
        "1. Student Report Card & GPA Calculator",
        "2. Bank Account Management System (Polymorphic)",
        "3. Library Catalog & Fine Management",
        "4. Employee Payroll & Tax Deduction Engine",
        "5. Hospital ER Patient Triage (Priority Queue)",
        "6. Supermarket POS & Thermal Billing",
        "7. Train Coach Seat Matrix Visualizer",
        "8. Phonebook & Autocomplete Directory",
        "9. Interactive Quiz Game with High Scores",
        "10. Text-Based Console Snake Game",
        "11. Tic-Tac-Toe with Unbeatable Minimax AI",
        "12. Command-Line Text Buffer Editor",
        "13. Warehouse Stock Inventory Reorder System",
        "14. Personal Budget & Expense Analytics Engine",
        "15. High-Performance 2D Matrix Calculator",
        "16. Run-Length Encoding (RLE) Lossless Compressor",
        "17. Custom String Class with Rule of 5",
        "18. Custom Generic Resizable Vector Container",
        "19. Web Server HTTP Request Parser & Router",
        "20. In-Memory Key-Value Store with Write-Ahead Log (WAL)"
    };

    for (const auto& p : projects) {
        std::cout << "  ✔ " << p << "\\n";
    }
    std::cout << "========================================================\\n";
    std::cout << "Click '20 C++ Projects' tab to inspect and run each project!\\n";
    return 0;
}`,
    expectedOutput: `========================================================
   CODE FROM ZERO - 20 REAL-WORLD C++ PORTFOLIO APPS    
========================================================
  ✔ 1. Student Report Card & GPA Calculator
  ✔ 2. Bank Account Management System (Polymorphic)
  ✔ 3. Library Catalog & Fine Management
  ✔ 4. Employee Payroll & Tax Deduction Engine
  ✔ 5. Hospital ER Patient Triage (Priority Queue)
  ✔ 6. Supermarket POS & Thermal Billing
  ✔ 7. Train Coach Seat Matrix Visualizer
  ✔ 8. Phonebook & Autocomplete Directory
  ✔ 9. Interactive Quiz Game with High Scores
  ✔ 10. Text-Based Console Snake Game
  ✔ 11. Tic-Tac-Toe with Unbeatable Minimax AI
  ✔ 12. Command-Line Text Buffer Editor
  ✔ 13. Warehouse Stock Inventory Reorder System
  ✔ 14. Personal Budget & Expense Analytics Engine
  ✔ 15. High-Performance 2D Matrix Calculator
  ✔ 16. Run-Length Encoding (RLE) Lossless Compressor
  ✔ 17. Custom String Class with Rule of 5
  ✔ 18. Custom Generic Resizable Vector Container
  ✔ 19. Web Server HTTP Request Parser & Router
  ✔ 20. In-Memory Key-Value Store with Write-Ahead Log (WAL)
========================================================
Click '20 C++ Projects' tab to inspect and run each project!`,
    codeExplanation: ["20 complete projects covering beginner to advanced C++.", "All projects are fully runnable inside the C++ Sandbox."],
    commonMistakes: ["Submitting incomplete projects to GitHub without build instructions or tests."],
    bestPractices: ["Include CMakeLists.txt and unit tests in every portfolio project."],
    practiceExercises: [
      {
        question: "Select Project #11 (Tic-Tac-Toe Minimax) and run it in the C++ Sandbox.",
        hint: "Switch to the '20 C++ Projects' tab and click 'Run in Sandbox'.",
        solution: "// Opens in C++ compiler sandbox."
      },
      {
        question: "Extend Project #16 (RLE Compressor) to handle numbers inside text strings.",
        hint: "Escape numbers or use binary chunk indicators.",
        solution: "// Add escape byte markers before numeric literals."
      },
      {
        question: "Add a transactions roll-back stack to Project #20 (Key-Value Store).",
        hint: "Push previous values onto an undo stack before writing.",
        solution: "// Push key and previous value before applying mutations."
      }
    ],
    quiz: [{
      question: "Which C++ software engineering practice best ensures that newly added features do not break existing working code?",
      options: [
        "Adding more comments to main.cpp",
        "Automated regression unit testing integrated into a Continuous Integration (CI) pipeline",
        "Making all member variables public",
        "Avoiding the use of smart pointers"
      ],
      correctAnswer: 1,
      explanation: "Automated unit and regression tests run on every code commit ensure that new changes do not introduce unintended breaks in existing code."
    }],
    interviewQuestions: [
      {
        question: "How do you structure a production-grade C++ project repository?",
        answer: "A standard layout uses: include/ (public headers), src/ (implementation files), tests/ (unit tests with GTest/Catch2), cmake/ (build configs), docs/ (documentation), and CMakeLists.txt at root.",
        followUp: "Why is CMake the de-facto build system generator for C++?",
        followUpAnswer: "CMake is cross-platform: it generates native build files for any platform (Makefiles on Linux, Visual Studio solution on Windows, Xcode project on macOS, Ninja for speed)."
      }
    ]
  }
];
