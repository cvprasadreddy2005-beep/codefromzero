// CODE FROM ZERO - COMPLETE C PROGRAMMING TUTORIALS MASTERCLASS
// 45 Comprehensive Curriculum Modules covering the complete C language from zero to advanced
import { TutorialLesson } from '../types';

export interface CModuleInfo {
  number: number;
  title: string;
  lessonCount: number;
  startLessonId: string;
  description: string;
}

export const C_MODULES: CModuleInfo[] = [
  { number: 1, title: "Introduction to C Programming", lessonCount: 1, startLessonId: "c-mod-1", description: "History of C, Dennis Ritchie, Bell Labs, procedural paradigm, and how C powers modern computing." },
  { number: 2, title: "Features and Applications of C", lessonCount: 1, startLessonId: "c-mod-2", description: "Portability, speed, low-level memory access, operating systems, embedded hardware, and gaming." },
  { number: 3, title: "Installing Compiler & VS Code Setup", lessonCount: 1, startLessonId: "c-mod-3", description: "Setting up GCC, Clang, MinGW, terminal build flags (-Wall, -Wextra), and debugging tools." },
  { number: 4, title: "Structure of a C Program", lessonCount: 1, startLessonId: "c-mod-4", description: "Preprocessor directives (#include), main() entry point, statements, return codes, and comments." },
  { number: 5, title: "Keywords, Identifiers & Variables", lessonCount: 1, startLessonId: "c-mod-5", description: "The 32 standard keywords, naming rules, variable memory allocation, and const declarations." },
  { number: 6, title: "Data Types & Format Specifiers", lessonCount: 1, startLessonId: "c-mod-6", description: "int, float, double, char, void, signed/unsigned modifiers, sizeof, and format specifiers (%d, %f, %s, %p)." },
  { number: 7, title: "Input & Output: printf() and scanf()", lessonCount: 1, startLessonId: "c-mod-7", description: "Standard I/O stream formatting, escape sequences, reading strings, and buffer flushing." },
  { number: 8, title: "Operators and Expressions", lessonCount: 1, startLessonId: "c-mod-8", description: "Arithmetic, relational, logical, assignment, and operator precedence and associativity rules." },
  { number: 9, title: "Type Conversion & Type Casting", lessonCount: 1, startLessonId: "c-mod-9", description: "Implicit integer promotion, floating-point coercion, and explicit (type) casting safety." },
  { number: 10, title: "Decision-Making Statements", lessonCount: 1, startLessonId: "c-mod-10", description: "Control flow architecture, conditional execution, and boolean evaluation in C." },
  { number: 11, title: "if, if-else, Nested if & switch", lessonCount: 1, startLessonId: "c-mod-11", description: "Multi-way branching, ternary operator (? :), jump tables, and switch fall-through mechanics." },
  { number: 12, title: "Loops: for, while & do-while", lessonCount: 1, startLessonId: "c-mod-12", description: "Iteration constructs, loop control variables, pre-test vs post-test, and infinite loop traps." },
  { number: 13, title: "Nested Loops & Pattern Programs", lessonCount: 1, startLessonId: "c-mod-13", description: "2D coordinate iteration, pyramids, diamonds, Pascal's triangle, and matrix coordinates." },
  { number: 14, title: "Jump Statements: break, continue, goto", lessonCount: 1, startLessonId: "c-mod-14", description: "Early loop exit, cycle skipping, clean error recovery with goto, and function return values." },
  { number: 15, title: "1D & Multidimensional Arrays", lessonCount: 1, startLessonId: "c-mod-15", description: "Contiguous memory layout, indexing, row-major order, matrix math, and boundary safety." },
  { number: 16, title: "Strings & String Manipulation", lessonCount: 1, startLessonId: "c-mod-16", description: "Character arrays, null terminator ('\\0'), ASCII values, and string length algorithms." },
  { number: 17, title: "String Library Functions (<string.h>)", lessonCount: 1, startLessonId: "c-mod-17", description: "strlen, strcpy, strncpy, strcmp, strcat, strstr, and buffer overflow prevention." },
  { number: 18, title: "Functions & Function Prototypes", lessonCount: 1, startLessonId: "c-mod-18", description: "Modular code, function declarations vs definitions, call stack frames, and header contracts." },
  { number: 19, title: "Parameters, Arguments & Return Values", lessonCount: 1, startLessonId: "c-mod-19", description: "Pass-by-value semantics, stack frame copying, returning values, and void return types." },
  { number: 20, title: "Recursion & Recursive Algorithms", lessonCount: 1, startLessonId: "c-mod-20", description: "Base cases, recursive call stack frames, stack overflow dangers, and tail recursion." },
  { number: 21, title: "Pointers & Pointer Arithmetic", lessonCount: 1, startLessonId: "c-mod-21", description: "Address-of operator (&), dereference operator (*), memory addresses, and pointer arithmetic scaling." },
  { number: 22, title: "Pointers and Arrays", lessonCount: 1, startLessonId: "c-mod-22", description: "Array name decay, pointer offsets, traversing arrays with pointers, and pointer comparison." },
  { number: 23, title: "Pointers and Strings", lessonCount: 1, startLessonId: "c-mod-23", description: "String literals in read-only memory, char* vs char[], and pointer-based string processing." },
  { number: 24, title: "Double Pointers & Function Pointers", lessonCount: 1, startLessonId: "c-mod-24", description: "Pointer to pointer (type**), modifying pointer values, callbacks, and dispatch tables." },
  { number: 25, title: "Storage Classes (auto, static, extern)", lessonCount: 1, startLessonId: "c-mod-25", description: "Lifetime and visibility, static variables in data segment, extern for multi-file linkage." },
  { number: 26, title: "Scope, Lifetime, and Linkage", lessonCount: 1, startLessonId: "c-mod-26", description: "Block scope, file scope, translation units, internal vs external linkage." },
  { number: 27, title: "Structures & Nested Structures", lessonCount: 1, startLessonId: "c-mod-27", description: "struct definition, dot (.) operator, arrow (->) operator, memory alignment, and struct padding." },
  { number: 28, title: "Unions, Enumerations & typedef", lessonCount: 1, startLessonId: "c-mod-28", description: "Shared memory locations in unions, named constants with enum, and creating type aliases with typedef." },
  { number: 29, title: "Dynamic Memory: malloc, calloc, realloc", lessonCount: 1, startLessonId: "c-mod-29", description: "Heap memory allocation, zero-initialization, resizing dynamic arrays, and checking NULL." },
  { number: 30, title: "Memory Management & Memory Leaks", lessonCount: 1, startLessonId: "c-mod-30", description: "free(), avoiding dangling pointers, use-after-free vulnerabilities, and Valgrind leak detection." },
  { number: 31, title: "File Handling: Streams & I/O", lessonCount: 1, startLessonId: "c-mod-31", description: "FILE pointers, fopen, fclose, fprintf, fscanf, fgets, and binary read/write with fread/fwrite." },
  { number: 32, title: "Preprocessor Directives & Macros", lessonCount: 1, startLessonId: "c-mod-32", description: "#define, #include, conditional compilation (#ifdef, #ifndef), macro functions, and pitfalls." },
  { number: 33, title: "Header Files & Multi-File Architecture", lessonCount: 1, startLessonId: "c-mod-33", description: "Creating custom .h files, header guards, separation of interface from implementation." },
  { number: 34, title: "Command-Line Arguments (argc, argv)", lessonCount: 1, startLessonId: "c-mod-34", description: "Handling terminal flags, string parsing, and building production CLI tools in C." },
  { number: 35, title: "Bitwise Operators & Bit Manipulation", lessonCount: 1, startLessonId: "c-mod-35", description: "&, |, ^, ~, bit shifts (<<, >>), setting/clearing/toggling bits, and bit masks." },
  { number: 36, title: "Error Handling & Debugging with GDB", lessonCount: 1, startLessonId: "c-mod-36", description: "errno, perror, strerror, GDB breakpoints, inspecting variables, and backtraces." },
  { number: 37, title: "Compilation, Assembly & Linking", lessonCount: 1, startLessonId: "c-mod-37", description: "How GCC transforms source code: Preprocessor -> Compiler -> Assembler -> Linker." },
  { number: 38, title: "Undefined Behavior & Common Pitfalls", lessonCount: 1, startLessonId: "c-mod-38", description: "Unsequenced side effects, uninitialized reads, integer overflow, and strict aliasing." },
  { number: 39, title: "The C Standard Library Overview", lessonCount: 1, startLessonId: "c-mod-39", description: "<stdio.h>, <stdlib.h>, <string.h>, <math.h>, <time.h>, <stdbool.h>, and <stdint.h>." },
  { number: 40, title: "Data Structures in C: Foundations", lessonCount: 1, startLessonId: "c-mod-40", description: "Memory layout of primitive vs composite data structures, cache locality, and algorithmic scaling." },
  { number: 41, title: "Time and Space Complexity in C", lessonCount: 1, startLessonId: "c-mod-41", description: "Big O notation (O(1), O(N), O(N log N)), stack vs heap spatial overhead, and benchmarking." },
  { number: 42, title: "Searching and Sorting Algorithms", lessonCount: 1, startLessonId: "c-mod-42", description: "Linear search, binary search, Bubble Sort, Selection Sort, QuickSort, and qsort() library." },
  { number: 43, title: "Linked Lists, Stacks, Queues & Trees", lessonCount: 1, startLessonId: "c-mod-43", description: "Building dynamic self-referential structures: Singly Linked Lists, Stacks, Queues, and BSTs." },
  { number: 44, title: "C Coding Best Practices & Security", lessonCount: 1, startLessonId: "c-mod-44", description: "MISRA C guidelines, const correctness, buffer safety, defensive programming, and code style." },
  { number: 45, title: "Real-World Projects & Systems Engineering", lessonCount: 1, startLessonId: "c-mod-45", description: "Architecting end-to-end C systems, portfolio building, and transitioning to systems development." }
];

export const C_TUTORIAL_LESSONS: TutorialLesson[] = [
  // Module 1
  {
    id: "c-mod-1",
    title: "1. Introduction to C Programming",
    section: "Module 1: Introduction to C Programming",
    moduleNumber: 1,
    moduleTitle: "Introduction to C Programming",
    difficulty: "Beginner",
    duration: "10 min",
    keyConcepts: ["C Language", "Dennis Ritchie", "Bell Labs", "Compiled Language", "UNIX"],
    meaning: "C is a foundational general-purpose, procedural programming language that gives developers direct access to computer memory addresses and hardware execution.",
    definition: "C is a statically typed, compiled procedural language created by Dennis Ritchie between 1969 and 1973 at AT&T Bell Labs to build the UNIX operating system. It provides high execution speed, low memory overhead, and structured programming.",
    whyUseIt: "Understanding C reveals how computer hardware, operating systems, and memory actually work under the hood. It forms the core engine of Linux, Windows, macOS, Python (CPython), and game engines.",
    realWorldApplications: [
      "Operating System Kernels: The Linux kernel, Windows NT kernel, and macOS XNU kernel are written primarily in C.",
      "Embedded Microcontrollers: Automotive engine control units (ECU), medical pacemakers, avionics, and smart IoT devices.",
      "Database Engines: SQLite, PostgreSQL, and Redis core data structures."
    ],
    syntax: "#include <stdio.h>\n\nint main(void) {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}",
    codeExample: `#include <stdio.h>

int main(void) {
    // Variable declarations with explicit static types
    char student_name[] = "Alex Morgan";
    int enrolled_year = 2026;
    float current_gpa = 3.95f;

    printf("=========================================\\n");
    printf("   WELCOME TO CODE FROM ZERO - C TRACK   \\n");
    printf("=========================================\\n");
    printf("Student: %s\\n", student_name);
    printf("Class Year: %d\\n", enrolled_year);
    printf("GPA Target: %.2f / 4.00\\n", current_gpa);
    printf("System Status: C Compiler Ready!\\n");

    return 0; // Exit status code: 0 indicates success
}`,
    expectedOutput: `=========================================
   WELCOME TO CODE FROM ZERO - C TRACK   
=========================================
Student: Alex Morgan
Class Year: 2026
GPA Target: 3.95 / 4.00
System Status: C Compiler Ready!`,
    codeExplanation: [
      "#include <stdio.h>: Directs the preprocessor to include standard input/output declarations for printf.",
      "int main(void): The mandatory entry point function required by every conforming C program.",
      "char student_name[]: Declares a character array in memory storing a null-terminated string.",
      "printf(...): Standard formatted output stream printing variables with format specifiers (%s, %d, %.2f).",
      "return 0: Communicates to the operating system shell that the program terminated with exit code 0 (SUCCESS)."
    ],
    commonMistakes: [
      "Omitting the semicolon (;) at the end of statements, triggering syntax errors.",
      "Using single quotes (' ') for multi-character strings instead of double quotes (\" \")."
    ],
    bestPractices: [
      "Always use 'int main(void)' rather than 'void main()' for standard ANSI C conformance.",
      "Always return 0 from main() to indicate successful execution."
    ],
    practiceExercises: [
      {
        title: "Personal Information Banner",
        difficulty: "Beginner",
        task: "Write a complete C program that displays your name, dream tech company, and programming goal on separate lines.",
        hint: "Use printf(\"Name: %s\\n\", \"YourName\");",
        solution: "#include <stdio.h>\nint main(void) {\n    printf(\"Name: Jordan\\nCompany: Red Hat\\nGoal: Kernel Engineer\\n\");\n    return 0;\n}"
      }
    ],
    quiz: [
      {
        question: "Who developed the C programming language and where?",
        options: ["Dennis Ritchie at Bell Labs", "Bjarne Stroustrup at Bell Labs", "James Gosling at Sun Microsystems", "Guido van Rossum at CWI"],
        correctAnswer: 0,
        explanation: "Dennis Ritchie created C at Bell Labs in the early 1970s while developing the UNIX operating system."
      }
    ],
    summary: "C is a compiled, procedural language that bridges high-level logic with direct hardware control. Execution starts at the main() function.",
    relatedLessons: ["c-mod-2", "c-mod-4"]
  },

  // Module 4
  {
    id: "c-mod-4",
    title: "4. Structure of a C Program",
    section: "Module 4: Structure of a C Program",
    moduleNumber: 4,
    moduleTitle: "Structure of a C Program",
    difficulty: "Beginner",
    duration: "10 min",
    keyConcepts: ["Preprocessor Directives", "main() Function", "Statements", "Return Codes", "Comments"],
    meaning: "Every C program adheres to a strict structural blueprint consisting of preprocessor directives, global declarations, the main entry point, and function definitions.",
    definition: "A C program structure is the formal grammatical layout including header inclusion (#include), symbolic constant macros (#define), the main function entry point, local variable scopes, executable statements, and return code.",
    whyUseIt: "Understanding the program structure prevents compiler linkage errors and ensures your code conforms to standard ANSI/ISO C guidelines.",
    realWorldApplications: [
      "Microcontroller firmware bootstrapping where execution vector jumps straight to main().",
      "Modular system software where headers define contracts and .c files supply definitions."
    ],
    syntax: "// 1. Documentation & Headers\n#include <stdio.h>\n\n// 2. Constants & Prototypes\n#define PI 3.14159\n\n// 3. Entry point\nint main(void) {\n    // Statements\n    return 0;\n}",
    codeExample: `#include <stdio.h>

#define APP_NAME "Code From Zero C Engine"
#define MAX_USERS 1000

// Function prototype declaration
void print_header(void);

int main(void) {
    print_header();
    printf("Application: %s\\n", APP_NAME);
    printf("Max Concurrent Capacity: %d users\\n", MAX_USERS);
    printf("Execution completed without errors.\\n");
    return 0;
}

// Function definition
void print_header(void) {
    printf("=========================================\\n");
    printf("           SYSTEM ARCHITECTURE           \\n");
    printf("=========================================\\n");
}`,
    expectedOutput: `=========================================
           SYSTEM ARCHITECTURE           
=========================================
Application: Code From Zero C Engine
Max Concurrent Capacity: 1000 users
Execution completed without errors.`,
    codeExplanation: [
      "#define: Preprocessor macro substituting text before the compiler inspects the tokens.",
      "void print_header(void): Prototype informing compiler of function signature before its call in main().",
      "main(): The central orchestrator where program execution begins."
    ],
    commonMistakes: [
      "Defining functions below main() without providing a prototype above main(), causing implicit declaration warnings.",
      "Putting semicolons at the end of #define macros (e.g. #define MAX 100; which injects an unwanted semicolon)."
    ],
    bestPractices: [
      "Declare function prototypes before main() to establish clear contracts.",
      "Use descriptive macro names in all-uppercase."
    ],
    practiceExercises: [
      {
        title: "Custom Header Banner",
        difficulty: "Beginner",
        task: "Create a program with a prototype for void print_app_version(void) and call it from main.",
        hint: "Place void print_app_version(void); before main().",
        solution: "#include <stdio.h>\nvoid print_app_version(void);\nint main(void) {\n    print_app_version();\n    return 0;\n}\nvoid print_app_version(void) {\n    printf(\"Version 1.0.0\\n\");\n}"
      }
    ],
    quiz: [
      {
        question: "What happens if a function is used in main() before it is declared or prototyped?",
        options: ["Compiler warning or error regarding implicit declaration", "The compiler automatically downloads the function", "The CPU ignores the function call", "The program converts to Python"],
        correctAnswer: 0,
        explanation: "C requires functions to be declared or defined before invocation; otherwise, the compiler issues an implicit declaration warning or error."
      }
    ],
    summary: "A C program consists of preprocessor directives, macros, prototypes, main(), and helper functions. Prototypes ensure proper compile-time type checking.",
    relatedLessons: ["c-mod-1", "c-mod-18"]
  },

  // Module 6
  {
    id: "c-mod-6",
    title: "6. Data Types and Format Specifiers",
    section: "Module 6: Data Types and Format Specifiers",
    moduleNumber: 6,
    moduleTitle: "Data Types and Format Specifiers",
    difficulty: "Beginner",
    duration: "12 min",
    keyConcepts: ["int", "float", "double", "char", "sizeof", "Format Specifiers", "signed/unsigned"],
    meaning: "Data types define the nature of data, how many bytes of memory are allocated in RAM, and how the CPU interprets binary bit patterns.",
    definition: "Data types in C classify variables into primitive types (int, char, float, double, void), derived types (arrays, pointers, structs), and user-defined types (enums). Format specifiers tell printf and scanf how to encode and decode these types.",
    whyUseIt: "Selecting the optimal data type prevents integer overflow, minimizes memory consumption, and ensures mathematical precision.",
    realWorldApplications: [
      "Embedded microcontrollers selecting uint8_t for sensor registers to conserve tiny 2KB RAM.",
      "High-frequency trading engines selecting 64-bit double precision for currency calculations."
    ],
    syntax: "int age = 25;             // %d\nunsigned int count = 500; // %u\nfloat temp = 98.6f;       // %f\ndouble price = 149.99;    // %lf\nchar grade = 'A';         // %c",
    codeExample: `#include <stdio.h>

int main(void) {
    char letter = 'C';
    int integer_val = 42;
    float float_val = 3.14159f;
    double double_val = 123456.789012;
    unsigned int unsigned_val = 65535;

    printf("=========================================\\n");
    printf("   DATA TYPES & SIZEOF MEMORY FOOTPRINT  \\n");
    printf("=========================================\\n");
    printf("char:         '%c'  | Size: %zu byte\\n", letter, sizeof(char));
    printf("int:          %d   | Size: %zu bytes\\n", integer_val, sizeof(int));
    printf("float:        %.2f | Size: %zu bytes\\n", float_val, sizeof(float));
    printf("double:       %.4f | Size: %zu bytes\\n", double_val, sizeof(double));
    printf("unsigned int: %u   | Size: %zu bytes\\n", unsigned_val, sizeof(unsigned int));

    return 0;
}`,
    expectedOutput: `=========================================
   DATA TYPES & SIZEOF MEMORY FOOTPRINT  
=========================================
char:         'C'  | Size: 1 byte
int:          42   | Size: 4 bytes
float:        3.14 | Size: 4 bytes
double:       123456.7890 | Size: 8 bytes
unsigned int: 65535   | Size: 4 bytes`,
    codeExplanation: [
      "sizeof(type): Built-in compile-time operator returning size in bytes as size_t.",
      "%zu: The proper standard C format specifier for printing size_t values.",
      "%.2f: Formats float to exactly 2 decimal places."
    ],
    commonMistakes: [
      "Using %d to print a float or double, which prints raw corrupted binary bits.",
      "Using %d for size_t instead of %zu."
    ],
    bestPractices: [
      "Use <stdint.h> types (int32_t, uint8_t) when writing portable cross-platform systems code.",
      "Always match format specifiers precisely with argument types."
    ],
    practiceExercises: [
      {
        title: "Print Type Matrix",
        difficulty: "Beginner",
        task: "Write a program that prints the sizeof short, long, long long, and long double.",
        hint: "Use printf(\"short: %zu bytes\\n\", sizeof(short));",
        solution: "#include <stdio.h>\nint main(void) {\n    printf(\"short: %zu\\nlong: %zu\\nlong long: %zu\\n\", sizeof(short), sizeof(long), sizeof(long long));\n    return 0;\n}"
      }
    ],
    quiz: [
      {
        question: "Which format specifier is standard for printing a size_t value returned by sizeof?",
        options: ["%zu", "%d", "%f", "%s"],
        correctAnswer: 0,
        explanation: "%zu is the dedicated C99/C11 format specifier for printing unsigned size_t integers."
      }
    ],
    summary: "C provides primitive data types with fixed memory sizes. The sizeof operator measures byte footprint, and matching format specifiers is critical.",
    relatedLessons: ["c-mod-5", "c-mod-7", "c-mod-9"]
  },

  // Module 7
  {
    id: "c-mod-7",
    title: "7. Input and Output: printf() and scanf()",
    section: "Module 7: Input and Output: printf() and scanf()",
    moduleNumber: 7,
    moduleTitle: "Input and Output: printf() and scanf()",
    difficulty: "Beginner",
    duration: "12 min",
    keyConcepts: ["printf", "scanf", "Standard Streams", "Buffer Management", "Address Operator &"],
    meaning: "printf and scanf are standard library functions that manage formatted character streams between your program and terminal I/O devices.",
    definition: "printf sends formatted text to stdout (the terminal screen), and scanf parses formatted input tokens from stdin (the keyboard) and writes them into memory addresses.",
    whyUseIt: "Interactive command-line applications rely on standard input and output to communicate with users and pipelines.",
    realWorldApplications: [
      "UNIX CLI pipelines: cat input.txt | ./my_program | grep result",
      "Interactive configuration wizards in network switch consoles."
    ],
    syntax: "int x;\nscanf(\"%d\", &x); // Pass memory address with &\nprintf(\"Value: %d\\n\", x);",
    codeExample: `#include <stdio.h>

int main(void) {
    char first_name[30] = "Learner";
    int age = 20;
    double daily_hours = 2.5;

    printf("=== Interactive Profile Input ===\\n");
    printf("Default Profile Initialized:\\n");
    printf("  Name:  %s\\n", first_name);
    printf("  Age:   %d years\\n", age);
    printf("  Study: %.1f hours/day\\n", daily_hours);

    // Demonstration of simulated formatted parsing
    char buffer[] = "Dev 24 3.75";
    sscanf(buffer, "%s %d %lf", first_name, &age, &daily_hours);

    printf("\\nParsed Record from Buffer:\\n");
    printf("  Name:  %s\\n", first_name);
    printf("  Age:   %d years\\n", age);
    printf("  Study: %.2f hours/day\\n", daily_hours);

    return 0;
}`,
    expectedOutput: `=== Interactive Profile Input ===
Default Profile Initialized:
  Name:  Learner
  Age:   20 years
  Study: 2.5 hours/day

Parsed Record from Buffer:
  Name:  Dev
  Age:   24 years
  Study: 3.75 hours/day`,
    codeExplanation: [
      "sscanf parses structured tokens from an existing string buffer without blocking.",
      "&age passes the memory address of the integer variable so the parser can write directly into it.",
      "first_name does not need '&' because the array name already evaluates to the memory address of its first element."
    ],
    commonMistakes: [
      "Forgetting the '&' before primitive variables in scanf (e.g. scanf(\"%d\", age)), causing a crash (Segmentation Fault).",
      "Reading strings with scanf(\"%s\", str) without specifying field width limit, risking buffer overflow."
    ],
    bestPractices: [
      "Always check the return value of scanf/sscanf (number of items successfully matched).",
      "Use fgets() for reading full lines containing whitespace."
    ],
    practiceExercises: [
      {
        title: "Safe String Input",
        difficulty: "Beginner",
        task: "Write a program that uses scanf with field width limit (%19s) into a 20-byte array.",
        hint: "scanf(\"%19s\", buffer);",
        solution: "#include <stdio.h>\nint main(void) {\n    char buf[20];\n    printf(\"Enter word: \");\n    scanf(\"%19s\", buf);\n    printf(\"Read: %s\\n\", buf);\n    return 0;\n}"
      }
    ],
    quiz: [
      {
        question: "Why does scanf require '&' for integer variables but NOT for string arrays?",
        options: [
          "Arrays automatically decay into memory addresses pointing to their first element",
          "Integers are stored in the cloud while arrays are in RAM",
          "scanf only likes strings",
          "The '&' operator is only needed on Tuesdays"
        ],
        correctAnswer: 0,
        explanation: "In C, an array name decays into a pointer pointing to its first element (&arr[0]), so passing the array name already supplies the memory address."
      }
    ],
    summary: "printf formats and writes data to stdout, while scanf reads formatted tokens into provided memory addresses. Always verify return values.",
    relatedLessons: ["c-mod-6", "c-mod-16"]
  },

  // Module 11: Conditionals
  {
    id: "c-mod-11",
    title: "11. if, if-else, Nested if, and switch",
    section: "Module 11: if, if-else, Nested if, and switch",
    moduleNumber: 11,
    moduleTitle: "if, if-else, Nested if, and switch",
    difficulty: "Beginner",
    duration: "14 min",
    keyConcepts: ["if", "if-else", "Nested Conditionals", "switch-case", "break", "Ternary Operator"],
    meaning: "Conditional statements direct the CPU to choose between multiple execution pathways depending on logical test expressions.",
    definition: "if/else structures execute code blocks based on truthy (non-zero) or falsy (zero) conditions. switch statements generate efficient jump tables comparing integer/char values against constant case labels.",
    whyUseIt: "All interactive software, game mechanics, and input validators depend on branching decisions.",
    realWorldApplications: [
      "Access control systems checking user privileges (Admin vs Guest).",
      "Network packet routing dispatching protocols (TCP, UDP, ICMP) via switch statements."
    ],
    syntax: "if (score >= 90) {\n    grade = 'A';\n} else if (score >= 80) {\n    grade = 'B';\n} else {\n    grade = 'C';\n}",
    codeExample: `#include <stdio.h>

int main(void) {
    int test_score = 88;
    char grade;

    // Multi-way if-else ladder
    if (test_score >= 90) {
        grade = 'A';
    } else if (test_score >= 80) {
        grade = 'B';
    } else if (test_score >= 70) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    printf("Score: %d -> Grade: %c\\n", test_score, grade);

    // Switch statement evaluation
    printf("Feedback: ");
    switch (grade) {
        case 'A':
            printf("Outstanding performance!\\n");
            break;
        case 'B':
            printf("Great work! Eligible for Honors.\\n");
            break;
        case 'C':
            printf("Passed. Review foundational modules.\\n");
            break;
        default:
            printf("Retake required.\\n");
            break;
    }

    // Inline ternary operator
    const char *status = (grade != 'F') ? "ELIGIBLE FOR CERTIFICATE" : "FAILED";
    printf("Status: %s\\n", status);

    return 0;
}`,
    expectedOutput: `Score: 88 -> Grade: B
Feedback: Great work! Eligible for Honors.
Status: ELIGIBLE FOR CERTIFICATE`,
    codeExplanation: [
      "if-else ladder sequentially checks conditions until the first truthy expression matches.",
      "switch compares the integral value against case constants using jump tables.",
      "break prevents unwanted fall-through into subsequent cases.",
      "(cond) ? val1 : val2: Ternary operator returns a value based on condition inline."
    ],
    commonMistakes: [
      "Writing 'if (x = 5)' instead of 'if (x == 5)', which accidentally assigns 5 to x (always true!).",
      "Forgetting 'break' in a switch case, causing unexpected fall-through execution."
    ],
    bestPractices: [
      "Place constants on the left of comparisons in conditions (Yoda conditions: 5 == x) to catch assignment typos at compile time.",
      "Always include a default case in switch statements."
    ],
    practiceExercises: [
      {
        title: "Leap Year Checker",
        difficulty: "Beginner",
        task: "Write an if-else condition checking if a year is a leap year (divisible by 4 and not 100, or divisible by 400).",
        hint: "year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)",
        solution: "#include <stdio.h>\nint main(void) {\n    int y = 2024;\n    int leap = (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0);\n    printf(\"%d is %s leap year\\n\", y, leap ? \"a\" : \"not a\");\n    return 0;\n}"
      }
    ],
    quiz: [
      {
        question: "What happens if you omit the 'break' statement at the end of a switch case?",
        options: [
          "Execution falls through into the next case statement",
          "The compiler throws a fatal error",
          "The program immediately terminates",
          "The switch resets to case 1"
        ],
        correctAnswer: 0,
        explanation: "Without a break statement, C execution falls through directly into the next case regardless of whether its condition matches."
      }
    ],
    summary: "Use if-else for range and boolean logic, and switch-case for discrete integer/char values. Use break to prevent fall-through.",
    relatedLessons: ["c-mod-8", "c-mod-10", "c-mod-12"]
  },

  // Module 12: Loops
  {
    id: "c-mod-12",
    title: "12. Loops: for, while, and do-while",
    section: "Module 12: Loops: for, while, and do-while",
    moduleNumber: 12,
    moduleTitle: "Loops: for, while, and do-while",
    difficulty: "Beginner",
    duration: "14 min",
    keyConcepts: ["for loop", "while loop", "do-while loop", "Iterators", "Loop Invariants"],
    meaning: "Loops repeat a sequence of instructions until a specified termination condition evaluates to false.",
    definition: "C provides for loops (definite iteration with initialization, condition, step), while loops (indefinite pre-tested iteration), and do-while loops (exit-tested iteration executing at least once).",
    whyUseIt: "Loops automate repetitive calculations, traverse array elements, and sustain interactive program runtime loops.",
    realWorldApplications: [
      "Operating system event loops (e.g. while(1) polling keyboard/mouse interrupts).",
      "Data processing pipelines iterating over millions of database records."
    ],
    syntax: "// for: when count is known\nfor (int i = 0; i < 5; i++) { ... }\n\n// while: condition-dependent\nwhile (x > 0) { ... }\n\n// do-while: runs at least once\ndo { ... } while (x > 0);",
    codeExample: `#include <stdio.h>

int main(void) {
    printf("=== 1. For Loop: Multiples of 5 ===\\n");
    for (int i = 1; i <= 5; i++) {
        printf("5 * %d = %d\\n", i, 5 * i);
    }

    printf("\\n=== 2. While Loop: Sum of Digits ===\\n");
    int number = 12345;
    int original = number;
    int sum = 0;
    while (number > 0) {
        sum += number % 10; // Extract last digit
        number /= 10;       // Truncate last digit
    }
    printf("Sum of digits of %d = %d\\n", original, sum);

    printf("\\n=== 3. Do-While: Menu Prompt Guarantee ===\\n");
    int attempts = 0;
    do {
        attempts++;
        printf("Attempt #%d verified.\\n", attempts);
    } while (attempts < 2);

    return 0;
}`,
    expectedOutput: `=== 1. For Loop: Multiples of 5 ===
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25

=== 2. While Loop: Sum of Digits ===
Sum of digits of 12345 = 15

=== 3. Do-While: Menu Prompt Guarantee ===
Attempt #1 verified.
Attempt #2 verified.`,
    codeExplanation: [
      "for (int i = 1; i <= 5; i++): Initializes i, tests boundary condition, and steps iterator on each cycle.",
      "while (number > 0): Continuously extracts digits with modulo 10 and shifts right with integer division 10.",
      "do { ... } while (...): Executes the body first before evaluating the condition, guaranteeing at least one run."
    ],
    commonMistakes: [
      "Creating accidental infinite loops by forgetting to increment the loop variable inside while loops.",
      "Off-by-one errors (e.g. using '<' instead of '<=')."
    ],
    bestPractices: [
      "Use 'for' loops when the number of iterations is known in advance.",
      "Use 'do-while' loops for user confirmation prompts and interactive menus."
    ],
    practiceExercises: [
      {
        title: "Factorial Calculator",
        difficulty: "Beginner",
        task: "Compute factorial of 6 using a for loop.",
        hint: "long long fact = 1; for(int i=1; i<=n; i++) fact *= i;",
        solution: "#include <stdio.h>\nint main(void) {\n    long long f = 1;\n    for(int i = 1; i <= 6; i++) f *= i;\n    printf(\"6! = %lld\\n\", f);\n    return 0;\n}"
      }
    ],
    quiz: [
      {
        question: "Which loop construct guarantees that the loop body will execute AT LEAST once?",
        options: ["do-while loop", "for loop", "while loop", "recursive loop"],
        correctAnswer: 0,
        explanation: "The do-while loop evaluates its test condition at the exit point, guaranteeing the body executes at least once."
      }
    ],
    summary: "for loops handle fixed iterations, while loops handle dynamic conditions, and do-while loops guarantee at least one execution.",
    relatedLessons: ["c-mod-11", "c-mod-13", "c-mod-14"]
  },

  // Module 15: Arrays
  {
    id: "c-mod-15",
    title: "15. One-Dimensional and Multidimensional Arrays",
    section: "Module 15: One-Dimensional and Multidimensional Arrays",
    moduleNumber: 15,
    moduleTitle: "One-Dimensional and Multidimensional Arrays",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["1D Arrays", "2D Matrices", "Row-Major Order", "Bounds Safety", "Array Traversal"],
    meaning: "An array is a collection of elements of the same data type stored contiguously in adjacent memory locations.",
    definition: "Arrays in C have fixed sizes determined at declaration. Elements are accessed in constant O(1) time using zero-based indexing calculated from the base memory address: Address(arr[i]) = BaseAddress + (i * sizeof(type)).",
    whyUseIt: "Arrays allow storing and processing lists of numbers, matrices, images, and audio samples efficiently in contiguous CPU cache lines.",
    realWorldApplications: [
      "Computer Graphics: 4x4 transformation matrices for 3D graphics rendering.",
      "Signal Processing: Buffers storing digitized audio wave samples."
    ],
    syntax: "int scores[5] = {90, 85, 78, 92, 88};\nint matrix[2][3] = { {1, 2, 3}, {4, 5, 6} };",
    codeExample: `#include <stdio.h>

int main(void) {
    // 1. One-Dimensional Array
    int numbers[] = {12, 45, 7, 89, 34};
    int count = sizeof(numbers) / sizeof(numbers[0]);

    printf("=== 1. 1D Array Metrics ===\\n");
    int max = numbers[0];
    int sum = 0;
    for (int i = 0; i < count; i++) {
        printf("numbers[%d] = %d (address: %p)\\n", i, numbers[i], (void*)&numbers[i]);
        if (numbers[i] > max) max = numbers[i];
        sum += numbers[i];
    }
    printf("Max: %d | Average: %.1f\\n", max, (float)sum / count);

    // 2. Two-Dimensional Matrix (Row-Major)
    printf("\\n=== 2. 2D Matrix (2x3) ===\\n");
    int grid[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    for (int r = 0; r < 2; r++) {
        for (int c = 0; c < 3; c++) {
            printf("%4d", grid[r][c]);
        }
        printf("\\n");
    }

    return 0;
}`,
    expectedOutput: `=== 1. 1D Array Metrics ===
numbers[0] = 12 (address: 0x7fff5fbff800)
numbers[1] = 45 (address: 0x7fff5fbff804)
numbers[2] = 7 (address: 0x7fff5fbff808)
numbers[3] = 89 (address: 0x7fff5fbff80c)
numbers[4] = 34 (address: 0x7fff5fbff810)
Max: 89 | Average: 37.4

=== 2. 2D Matrix (2x3) ===
  10  20  30
  40  50  60`,
    codeExplanation: [
      "Notice memory addresses: Each integer element is exactly 4 bytes away from the previous element.",
      "sizeof(arr) / sizeof(arr[0]): Standard idiom for computing total elements in a stack-allocated array.",
      "2D array is laid out contiguously in row-major order: row 0 elements followed immediately by row 1."
    ],
    commonMistakes: [
      "Accessing out-of-bounds indices (e.g. arr[5] in a 5-element array), corrupting stack memory.",
      "Assuming arrays automatically resize when new elements are added."
    ],
    bestPractices: [
      "Always calculate array length using sizeof(arr) / sizeof(arr[0]) in the same scope where it is declared.",
      "Pass array lengths explicitly as parameters when passing arrays to functions."
    ],
    practiceExercises: [
      {
        title: "Array Inversion",
        difficulty: "Intermediate",
        task: "Write a function that reverses an integer array in-place without using a second array.",
        hint: "Swap arr[i] with arr[n - 1 - i] while i < n/2",
        solution: "void reverse(int a[], int n) {\n    for (int i = 0; i < n / 2; i++) {\n        int t = a[i];\n        a[i] = a[n - 1 - i];\n        a[n - 1 - i] = t;\n    }\n}"
      }
    ],
    quiz: [
      {
        question: "How are 2D arrays organized in physical computer memory in C?",
        options: ["Row-Major order (rows contiguous)", "Column-Major order", "Random scattered blocks", "Linked hash buckets"],
        correctAnswer: 0,
        explanation: "C stores multi-dimensional arrays in Row-Major order: all columns of row 0, then all columns of row 1."
      }
    ],
    summary: "Arrays are contiguous blocks of memory with fast O(1) indexed access. C does not perform bounds checking.",
    relatedLessons: ["c-mod-16", "c-mod-21", "c-mod-22"]
  },

  // Module 21: Pointers
  {
    id: "c-mod-21",
    title: "21. Pointers and Pointer Arithmetic",
    section: "Module 21: Pointers and Pointer Arithmetic",
    moduleNumber: 21,
    moduleTitle: "Pointers and Pointer Arithmetic",
    difficulty: "Intermediate",
    duration: "16 min",
    keyConcepts: ["Pointers", "Address Operator (&)", "Dereference Operator (*)", "Pointer Arithmetic", "RAM Addresses"],
    meaning: "A pointer is a variable that stores the physical memory address of another variable in RAM.",
    definition: "Pointers allow C programmers to directly observe and mutate system memory. The '&' operator retrieves an address, '*' declares a pointer and dereferences an address, and pointer arithmetic (+, -) scales automatically by the size of the referenced type.",
    whyUseIt: "Pointers enable pass-by-reference in functions, dynamic heap allocation, linked data structures, and high-performance buffer handling without copying bytes.",
    realWorldApplications: [
      "Operating System Kernels: Mapping virtual memory pages to hardware RAM addresses.",
      "High-Performance Game Engines: Avoiding copying large 3D mesh vertices by passing memory pointers."
    ],
    syntax: "int val = 42;\nint *ptr = &val;  // Store address of val\n*ptr = 99;        // Mutate val via dereferencing",
    codeExample: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void) {
    int x = 10;
    int y = 20;
    int *p = &x;

    printf("=========================================\\n");
    printf("   POINTER MECHANICS & MEMORY ADDRESSES  \\n");
    printf("=========================================\\n");
    printf("Value of x:              %d\\n", x);
    printf("Address of x (&x):       %p\\n", (void*)&x);
    printf("Value stored in p:       %p\\n", (void*)p);
    printf("Dereferencing *p:        %d\\n", *p);

    // Swap demonstration via pointers
    printf("\\nBefore Swap: x = %d, y = %d\\n", x, y);
    swap(&x, &y);
    printf("After Swap:  x = %d, y = %d\\n", x, y);

    // Pointer Arithmetic
    int arr[] = {100, 200, 300};
    int *ap = arr; // Points to arr[0]
    printf("\\narr[0]: %d (at %p)\\n", *ap, (void*)ap);
    ap++; // Increments address by sizeof(int) = 4 bytes!
    printf("arr[1]: %d (at %p)\\n", *ap, (void*)ap);

    return 0;
}`,
    expectedOutput: `=========================================
   POINTER MECHANICS & MEMORY ADDRESSES  
=========================================
Value of x:              10
Address of x (&x):       0x7fff5fbff82c
Value stored in p:       0x7fff5fbff82c
Dereferencing *p:        10

Before Swap: x = 10, y = 20
After Swap:  x = 20, y = 10

arr[0]: 100 (at 0x7fff5fbff818)
arr[1]: 200 (at 0x7fff5fbff81c)`,
    codeExplanation: [
      "&x: Retrieves the memory address where variable x is located.",
      "*p: Dereferences the pointer, travelling to that memory address and reading/modifying its content.",
      "ap++: Adds 1 * sizeof(int) (4 bytes) to the memory address, pointing directly to the next array element."
    ],
    commonMistakes: [
      "Dereferencing a NULL or uninitialized wild pointer, resulting in an immediate Segmentation Fault.",
      "Confusing the asterisk in pointer declaration (int *p) with the asterisk in dereferencing (*p = 5)."
    ],
    bestPractices: [
      "Always initialize pointers to NULL or a valid address immediately upon declaration.",
      "Verify pointers are not NULL before dereferencing."
    ],
    practiceExercises: [
      {
        title: "Increment Value Via Pointer",
        difficulty: "Intermediate",
        task: "Write a function void increment(int *ptr) that adds 1 to the value pointed to.",
        hint: "(*ptr)++;",
        solution: "void increment(int *ptr) {\n    if (ptr != NULL) {\n        (*ptr)++;\n    }\n}"
      }
    ],
    quiz: [
      {
        question: "If ptr points to an integer at address 0x1000, what is the value of (ptr + 1) on a system where sizeof(int) == 4?",
        options: ["0x1004", "0x1001", "0x1008", "0x1000"],
        correctAnswer: 0,
        explanation: "Pointer arithmetic scales by sizeof(type). Adding 1 to an int* increments the address by 4 bytes (0x1004)."
      }
    ],
    summary: "Pointers store memory addresses. Use '&' to get an address and '*' to dereference. Pointer arithmetic scales by type size.",
    relatedLessons: ["c-mod-15", "c-mod-22", "c-mod-24", "c-mod-29"]
  },

  // Module 27: Structures
  {
    id: "c-mod-27",
    title: "27. Structures and Nested Structures",
    section: "Module 27: Structures and Nested Structures",
    moduleNumber: 27,
    moduleTitle: "Structures and Nested Structures",
    difficulty: "Intermediate",
    duration: "15 min",
    keyConcepts: ["struct", "typedef", "Dot Operator .", "Arrow Operator ->", "Structure Padding", "Alignment"],
    meaning: "A structure is a user-defined composite data type that packages multiple variables of different types under a single unified name.",
    definition: "struct in C groups heterogeneous variables into contiguous memory. Members are accessed using the dot operator (.) on direct instances or the arrow operator (->) through pointers.",
    whyUseIt: "Real-world entities (employees, network packets, coordinates, database records) have multiple attributes that belong together.",
    realWorldApplications: [
      "Operating system process control blocks (task_struct in Linux kernel).",
      "Network protocol packet headers (IP headers, TCP headers)."
    ],
    syntax: "struct Point {\n    int x;\n    int y;\n};\nstruct Point p1 = {10, 20};\nstruct Point *ptr = &p1;\nprintf(\"%d\", ptr->x);",
    codeExample: `#include <stdio.h>
#include <string.h>

// User-defined composite type
typedef struct {
    int id;
    char name[40];
    float gpa;
    int completed_credits;
} Student;

// Efficient pass-by-const-pointer avoids copying large struct bytes on stack
void print_student(const Student *s) {
    if (s == NULL) return;
    printf("ID: %-4d | Name: %-15s | GPA: %-4.2f | Credits: %d\\n",
           s->id, s->name, s->gpa, s->completed_credits);
}

int main(void) {
    Student s1 = { 101, "Elena Rostova", 3.88f, 64 };
    Student s2 = { 102, "David Vance",   3.72f, 48 };

    printf("=========================================\\n");
    printf("        STUDENT DIRECTORY STRUCTURES     \\n");
    printf("=========================================\\n");
    print_student(&s1);
    print_student(&s2);

    printf("\\nStructure Size: %zu bytes\\n", sizeof(Student));
    return 0;
}`,
    expectedOutput: `=========================================
        STUDENT DIRECTORY STRUCTURES     
=========================================
ID: 101  | Name: Elena Rostova   | GPA: 3.88 | Credits: 64
ID: 102  | Name: David Vance     | GPA: 3.72 | Credits: 48

Structure Size: 52 bytes`,
    codeExplanation: [
      "typedef struct { ... } Student: Creates a clean type alias 'Student' so we don't have to type 'struct Student' repeatedly.",
      "const Student *s: Passes an 8-byte pointer instead of copying all 52 struct bytes onto the call stack.",
      "s->name: Arrow operator dereferences pointer and accesses member (*s).name."
    ],
    commonMistakes: [
      "Using '=' to assign string members (e.g. s.name = 'Alex'; which fails). Must use strcpy or snprintf.",
      "Forgetting semicolon after struct definition closing brace: struct Point { int x; };"
    ],
    bestPractices: [
      "Pass structures to functions by const pointer for optimal performance and immutability.",
      "Order struct members from largest to smallest to minimize alignment padding waste."
    ],
    practiceExercises: [
      {
        title: "Rectangle Area Struct",
        difficulty: "Intermediate",
        task: "Define a struct Rectangle with width and height, and write a function calculating its area.",
        hint: "double area(const struct Rectangle *r) { return r->w * r->h; }",
        solution: "struct Rectangle { double w, h; };\ndouble get_area(const struct Rectangle *r) {\n    return r->w * r->h;\n}"
      }
    ],
    quiz: [
      {
        question: "Which operator is used to access structure members through a pointer?",
        options: ["-> (arrow operator)", ". (dot operator)", "* (asterisk)", ":: (scope)"],
        correctAnswer: 0,
        explanation: "The arrow operator (->) is syntactic sugar that dereferences the pointer and accesses the member: ptr->field is equivalent to (*ptr).field."
      }
    ],
    summary: "Structures group heterogeneous data. Use typedef for clean aliases, arrow (->) through pointers, and const pointers for efficiency.",
    relatedLessons: ["c-mod-21", "c-mod-28", "c-mod-29"]
  },

  // Module 29: Dynamic Memory
  {
    id: "c-mod-29",
    title: "29. Dynamic Memory Allocation: malloc, calloc, realloc & free",
    section: "Module 29: Dynamic Memory Allocation",
    moduleNumber: 29,
    moduleTitle: "Dynamic Memory Allocation",
    difficulty: "Advanced",
    duration: "16 min",
    keyConcepts: ["Heap Memory", "malloc()", "calloc()", "realloc()", "free()", "Memory Leaks", "Dangling Pointers"],
    meaning: "Dynamic memory allocation enables requesting heap memory from the operating system kernel at runtime when dimensions cannot be known at compile time.",
    definition: "Functions in <stdlib.h> allocate (malloc/calloc), resize (realloc), and deallocate (free) raw memory blocks on the process heap.",
    whyUseIt: "Fixed-size stack arrays either overflow on large inputs or waste memory. Dynamic allocation scales memory dynamically to match exact user needs.",
    realWorldApplications: [
      "Browsers allocating memory dynamically for web page elements, DOM nodes, and image textures.",
      "Database systems scaling in-memory cache pools based on server RAM."
    ],
    syntax: "#include <stdlib.h>\nint *arr = (int*)malloc(n * sizeof(int));\nif (arr == NULL) { /* handle error */ }\nfree(arr);\narr = NULL;",
    codeExample: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int initial_size = 3;
    int *scores = (int*)malloc(initial_size * sizeof(int));

    if (scores == NULL) {
        printf("Heap allocation failed!\\n");
        return 1;
    }

    scores[0] = 85;
    scores[1] = 92;
    scores[2] = 78;

    printf("=== Initial Dynamic Heap Array (%d elements) ===\\n", initial_size);
    for (int i = 0; i < initial_size; i++) {
        printf("scores[%d] = %d (at %p)\\n", i, scores[i], (void*)&scores[i]);
    }

    // Expanding heap block with realloc
    int new_size = 5;
    int *temp = (int*)realloc(scores, new_size * sizeof(int));
    if (temp == NULL) {
        free(scores);
        return 1;
    }
    scores = temp;
    scores[3] = 95;
    scores[4] = 99;

    printf("\\n=== Expanded Dynamic Heap Array (%d elements) ===\\n", new_size);
    for (int i = 0; i < new_size; i++) {
        printf("scores[%d] = %d\\n", i, scores[i]);
    }

    // Critical cleanup: release memory
    free(scores);
    scores = NULL; // Defeats dangling pointer
    printf("\\nMemory freed successfully! Process clean.\\n");

    return 0;
}`,
    expectedOutput: `=== Initial Dynamic Heap Array (3 elements) ===
scores[0] = 85 (at 0x7fff5fbff900)
scores[1] = 92 (at 0x7fff5fbff904)
scores[2] = 78 (at 0x7fff5fbff908)

=== Expanded Dynamic Heap Array (5 elements) ===
scores[0] = 85
scores[1] = 92
scores[2] = 78
scores[3] = 95
scores[4] = 99

Memory freed successfully! Process clean.`,
    codeExplanation: [
      "malloc(initial_size * sizeof(int)): Requests contiguous heap bytes from OS.",
      "if (scores == NULL): Mandatory verification ensuring OS granted the memory.",
      "realloc: Dynamically resizes the heap allocation to hold more elements.",
      "free(scores): Returns heap memory back to the OS, preventing memory leaks.",
      "scores = NULL: Clears the pointer address, preventing dangling pointer use-after-free bugs."
    ],
    commonMistakes: [
      "Writing 'scores = realloc(scores, new_size)' directly: If realloc fails, it returns NULL and permanently leaks the old memory.",
      "Memory leak: Allocating memory in a loop without matching free() calls."
    ],
    bestPractices: [
      "Always capture realloc return value in a temporary pointer first.",
      "Always pair every malloc/calloc call with a corresponding free() call."
    ],
    practiceExercises: [
      {
        title: "Dynamic String Allocator",
        difficulty: "Advanced",
        task: "Write a function char* alloc_string(int len) that allocates a null-terminated buffer on heap.",
        hint: "char *s = (char*)malloc(len + 1); if(s) s[0] = '\\0'; return s;",
        solution: "char* alloc_string(int len) {\n    char *s = (char*)malloc((len + 1) * sizeof(char));\n    if (s != NULL) s[0] = '\\0';\n    return s;\n}"
      }
    ],
    quiz: [
      {
        question: "What is the difference between malloc() and calloc()?",
        options: [
          "calloc() zeroes out all allocated memory bits, while malloc() leaves random garbage bytes",
          "malloc() is for integers and calloc() is for characters",
          "calloc() allocates memory on stack and malloc() on heap",
          "There is no difference"
        ],
        correctAnswer: 0,
        explanation: "calloc(num, size) zeroes out all bytes in the allocated memory block, whereas malloc(total_bytes) leaves existing memory uninitialized."
      }
    ],
    summary: "malloc and calloc allocate heap memory. realloc resizes allocations. Always check for NULL, and always free() memory to prevent leaks.",
    relatedLessons: ["c-mod-21", "c-mod-27", "c-mod-30"]
  },

  // Module 31: File Handling
  {
    id: "c-mod-31",
    title: "31. File Handling: Streams & I/O",
    section: "Module 31: File Handling: Streams & I/O",
    moduleNumber: 31,
    moduleTitle: "File Handling: Streams & I/O",
    difficulty: "Advanced",
    duration: "15 min",
    keyConcepts: ["FILE pointer", "fopen()", "fclose()", "fprintf()", "fscanf()", "fread()", "fwrite()", "Binary Mode"],
    meaning: "File handling enables C programs to persist data across execution sessions by writing to and reading from disk files.",
    definition: "The <stdio.h> library treats files as byte streams managed by a FILE pointer. Files are opened with modes ('r', 'w', 'a', 'rb', 'wb') and closed with fclose().",
    whyUseIt: "Without file handling, all program data vanishes as soon as the program terminates. Files enable saving configurations, database records, and logs.",
    realWorldApplications: [
      "Game save states and high-score persistent files.",
      "Web server access logging (e.g. nginx/apache access.log)."
    ],
    syntax: "FILE *fp = fopen(\"data.txt\", \"w\");\nif (fp != NULL) {\n    fprintf(fp, \"Score: %d\\n\", 100);\n    fclose(fp);\n}",
    codeExample: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    const char *filename = "system_log.txt";

    // 1. Writing formatted data to file
    FILE *fp = fopen(filename, "w");
    if (fp == NULL) {
        perror("Error opening file for write");
        return 1;
    }

    fprintf(fp, "TIMESTAMP: 2026-10-27T08:00:00Z | STATUS: OK | METRIC: 99.4\\n");
    fprintf(fp, "TIMESTAMP: 2026-10-27T08:05:00Z | STATUS: OK | METRIC: 98.9\\n");
    fclose(fp);
    printf("✓ Successfully wrote 2 log entries to '%s'\\n", filename);

    // 2. Reading back from file line by line
    fp = fopen(filename, "r");
    if (fp == NULL) {
        perror("Error opening file for read");
        return 1;
    }

    printf("\\n--- Reading Log Stream From Disk ---\\n");
    char line_buffer[128];
    while (fgets(line_buffer, sizeof(line_buffer), fp) != NULL) {
        printf("Stream: %s", line_buffer);
    }
    fclose(fp);

    // Clean up temporary file
    remove(filename);
    printf("File cleaned up.\\n");

    return 0;
}`,
    expectedOutput: `✓ Successfully wrote 2 log entries to 'system_log.txt'

--- Reading Log Stream From Disk ---
Stream: TIMESTAMP: 2026-10-27T08:00:00Z | STATUS: OK | METRIC: 99.4
Stream: TIMESTAMP: 2026-10-27T08:05:00Z | STATUS: OK | METRIC: 98.9
File cleaned up.`,
    codeExplanation: [
      "fopen(filename, \"w\"): Opens file for writing (truncating existing content).",
      "perror: Prints a descriptive human-readable OS error message if opening fails.",
      "fgets(line_buffer, sizeof(line_buffer), fp): Safely reads lines without buffer overflow risks.",
      "fclose(fp): Flushes file buffers to disk and releases the OS file descriptor."
    ],
    commonMistakes: [
      "Forgetting to call fclose(), leading to data loss due to unflushed output buffers and file descriptor leaks.",
      "Opening in \"w\" mode instead of \"a\" (append) mode, accidentally wiping existing data."
    ],
    bestPractices: [
      "Always check if fopen() returned NULL before reading or writing.",
      "Use \"rb\" and \"wb\" for binary data to prevent newline translation on Windows."
    ],
    practiceExercises: [
      {
        title: "Line Counter Utility",
        difficulty: "Advanced",
        task: "Write a function that opens a text file and counts total newlines ('\\n').",
        hint: "while((ch = fgetc(fp)) != EOF) if(ch == '\\n') count++;",
        solution: "int count_lines(const char *path) {\n    FILE *fp = fopen(path, \"r\");\n    if (!fp) return -1;\n    int lines = 0, ch;\n    while ((ch = fgetc(fp)) != EOF) {\n        if (ch == '\\n') lines++;\n    }\n    fclose(fp);\n    return lines;\n}"
      }
    ],
    quiz: [
      {
        question: "What does fopen() return if the specified file cannot be opened?",
        options: ["NULL", "-1", "0", "EOF"],
        correctAnswer: 0,
        explanation: "fopen() returns a valid FILE pointer on success, or NULL if the file cannot be opened (e.g. file not found or permission denied)."
      }
    ],
    summary: "File handling uses FILE pointers with fopen, fclose, fprintf, and fgets to stream persistent data to and from disk.",
    relatedLessons: ["c-mod-7", "c-mod-29", "c-mod-45"]
  },

  // Module 35: Bitwise
  {
    id: "c-mod-35",
    title: "35. Bitwise Operators and Bit Manipulation",
    section: "Module 35: Bitwise Operators and Bit Manipulation",
    moduleNumber: 35,
    moduleTitle: "Bitwise Operators and Bit Manipulation",
    difficulty: "Advanced",
    duration: "15 min",
    keyConcepts: ["AND &", "OR |", "XOR ^", "NOT ~", "Left Shift <<", "Right Shift >>", "Bit Masks"],
    meaning: "Bitwise operators manipulate the raw binary bits (0s and 1s) of integer types directly in CPU registers.",
    definition: "Bitwise logic performs boolean operations bit by bit: AND (&) checks overlap, OR (|) sets bits, XOR (^) toggles bits, and shifts (<<, >>) multiply or divide by powers of two.",
    whyUseIt: "Bit manipulation provides unmatched execution speed and compact memory usage for flags, encryption, graphics, and hardware communication.",
    realWorldApplications: [
      "Hardware device drivers configuring microchip registers via bit masks.",
      "Network packet flags (e.g. TCP SYN, ACK, FIN bits packed into a single byte)."
    ],
    syntax: "unsigned char flags = 0;\nflags |= (1 << 2);  // Set bit 2\nflags &= ~(1 << 2); // Clear bit 2\nflags ^= (1 << 2);  // Toggle bit 2",
    codeExample: `#include <stdio.h>

void print_binary8(unsigned char n) {
    for (int i = 7; i >= 0; i--) {
        printf("%d", (n >> i) & 1);
    }
}

int main(void) {
    unsigned char reg = 0b00000000; // 0

    printf("=== HARDWARE REGISTER BIT MANIPULATION ===\\n");
    printf("Initial Register:   "); print_binary8(reg); printf(" (0x%02X)\\n", reg);

    // 1. Set bit 3 (Network Enabled)
    reg |= (1 << 3);
    printf("Set Bit 3:          "); print_binary8(reg); printf(" (0x%02X)\\n", reg);

    // 2. Set bit 0 (Power On)
    reg |= (1 << 0);
    printf("Set Bit 0:          "); print_binary8(reg); printf(" (0x%02X)\\n", reg);

    // 3. Check if bit 3 is active
    int is_net_active = (reg & (1 << 3)) != 0;
    printf("Is Network Active?  %s\\n", is_net_active ? "YES" : "NO");

    // 4. Clear bit 0 (Power Off)
    reg &= ~(1 << 0);
    printf("Clear Bit 0:        "); print_binary8(reg); printf(" (0x%02X)\\n", reg);

    return 0;
}`,
    expectedOutput: `=== HARDWARE REGISTER BIT MANIPULATION ===
Initial Register:   00000000 (0x00)
Set Bit 3:          00001000 (0x08)
Set Bit 0:          00001001 (0x09)
Is Network Active?  YES
Clear Bit 0:        00001000 (0x08)`,
    codeExplanation: [
      "(1 << n): Creates a bit mask with only the n-th bit set to 1.",
      "reg |= (1 << n): Sets bit n to 1 without altering any other bits.",
      "reg &= ~(1 << n): Clears bit n to 0 using the bitwise NOT inversion.",
      "(reg & (1 << n)) != 0: Tests if bit n is currently 1."
    ],
    commonMistakes: [
      "Confusing logical operators (&&, ||) with bitwise operators (&, |).",
      "Shifting by a negative count or shifting by greater than the type width, causing undefined behavior."
    ],
    bestPractices: [
      "Always use unsigned integer types for bit manipulation to avoid implementation-defined sign extension.",
      "Use parentheses around bitwise operations due to low operator precedence."
    ],
    practiceExercises: [
      {
        title: "Power of Two Check",
        difficulty: "Advanced",
        task: "Check if an integer N is a power of 2 using a single bitwise expression.",
        hint: "(n > 0) && ((n & (n - 1)) == 0)",
        solution: "int is_power_of_two(int n) {\n    return (n > 0) && ((n & (n - 1)) == 0);\n}"
      }
    ],
    quiz: [
      {
        question: "Which operation will TOGGLE the n-th bit of a variable 'x'?",
        options: ["x ^= (1 << n)", "x |= (1 << n)", "x &= (1 << n)", "x ~= (1 << n)"],
        correctAnswer: 0,
        explanation: "The XOR operator (^) flips a bit: 0 ^ 1 = 1, and 1 ^ 1 = 0, effectively toggling the target bit."
      }
    ],
    summary: "Bitwise operators (&, |, ^, ~, <<, >>) manipulate individual bits. Use masks for setting, clearing, and testing flags.",
    relatedLessons: ["c-mod-8", "c-mod-28", "c-mod-36"]
  },

  // Module 43: Data Structures
  {
    id: "c-mod-43",
    title: "43. Linked Lists, Stacks, Queues, Trees, and Graphs",
    section: "Module 43: Linked Lists, Stacks, Queues, Trees, and Graphs",
    moduleNumber: 43,
    moduleTitle: "Linked Lists, Stacks, Queues, Trees, and Graphs",
    difficulty: "Advanced",
    duration: "20 min",
    keyConcepts: ["Linked List", "Stack (LIFO)", "Queue (FIFO)", "Binary Search Tree", "Self-Referential Structs"],
    meaning: "Data structures are specialized organizational formats for organizing, storing, and manipulating data efficiently in computer memory.",
    definition: "Using self-referential structures containing pointers to their own type, C developers construct dynamic non-contiguous structures: singly/doubly linked lists, stacks, queues, and binary search trees.",
    whyUseIt: "Fixed arrays cannot grow easily and insert in O(N) time. Linked structures provide flexible O(1) insertions, deletions, and hierarchical tree modeling.",
    realWorldApplications: [
      "Operating System Process Schedulers: Circular ready queues managing CPU time slices.",
      "Database Indexing: B-Trees and Binary Search Trees providing fast O(log N) record searches."
    ],
    syntax: "struct Node {\n    int data;\n    struct Node *next;\n};",
    codeExample: `#include <stdio.h>
#include <stdlib.h>

// Singly Linked List Node
typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Push to head in O(1) time
void push_front(Node **head, int val) {
    Node *new_node = (Node*)malloc(sizeof(Node));
    if (!new_node) return;
    new_node->data = val;
    new_node->next = *head;
    *head = new_node;
}

void print_list(const Node *head) {
    printf("List: ");
    const Node *curr = head;
    while (curr != NULL) {
        printf("[%d] -> ", curr->data);
        curr = curr->next;
    }
    printf("NULL\\n");
}

void free_list(Node *head) {
    Node *curr = head;
    while (curr != NULL) {
        Node *temp = curr->next;
        free(curr);
        curr = temp;
    }
}

int main(void) {
    Node *head = NULL;

    printf("=== DYNAMIC LINKED LIST IN C ===\\n");
    push_front(&head, 30);
    push_front(&head, 20);
    push_front(&head, 10);

    print_list(head);

    free_list(head);
    head = NULL;
    printf("Linked list deallocated cleanly!\\n");

    return 0;
}`,
    expectedOutput: `=== DYNAMIC LINKED LIST IN C ===
List: [10] -> [20] -> [30] -> NULL
Linked list deallocated cleanly!`,
    codeExplanation: [
      "struct Node *next: Self-referential pointer storing the memory address of the next node.",
      "Node **head: Double pointer allows push_front to modify the caller's head pointer address.",
      "free_list: Safely preserves the next pointer before freeing current node, avoiding dangling pointer reads."
    ],
    commonMistakes: [
      "Freeing a node and then attempting to access curr->next (use-after-free bug).",
      "Losing the head pointer, causing an entire linked list memory leak."
    ],
    bestPractices: [
      "Always save curr->next in a temporary pointer before calling free(curr).",
      "Check for NULL allocation on every new node creation."
    ],
    practiceExercises: [
      {
        title: "Count Linked List Nodes",
        difficulty: "Advanced",
        task: "Write a function int count_nodes(const Node *head) that counts total elements.",
        hint: "Traverse with a while loop and increment counter.",
        solution: "int count_nodes(const Node *head) {\n    int c = 0;\n    while (head) { c++; head = head->next; }\n    return c;\n}"
      }
    ],
    quiz: [
      {
        question: "What is the time complexity to insert a new node at the HEAD of a singly linked list?",
        options: ["O(1) constant time", "O(N) linear time", "O(log N)", "O(N^2)"],
        correctAnswer: 0,
        explanation: "Inserting at the head only requires updating two pointers, taking O(1) constant time regardless of list size."
      }
    ],
    summary: "Self-referential structures and dynamic pointers form Linked Lists, Stacks, Queues, and Trees with efficient insertion and dynamic sizing.",
    relatedLessons: ["c-mod-21", "c-mod-27", "c-mod-29", "c-mod-45"]
  },

  // Module 45: Projects
  {
    id: "c-mod-45",
    title: "45. Real-World Projects & Systems Engineering",
    section: "Module 45: Real-World Projects & Systems Engineering",
    moduleNumber: 45,
    moduleTitle: "Real-World Projects & Systems Engineering",
    difficulty: "Advanced",
    duration: "25 min",
    isProject: true,
    keyConcepts: ["Portfolio Projects", "Systems Architecture", "Makefile", "Modular C", "Production Testing"],
    meaning: "Consolidates all 44 modules into production-grade systems applications, portfolio engineering, and real-world deployment.",
    definition: "Systems engineering in C integrates modular code organization, dynamic heap allocation, file persistence, defensiveness, and clean API boundaries into standalone executables.",
    whyUseIt: "Employers and technical interviewers assess your practical ability to design, build, and debug complete compilable applications.",
    realWorldApplications: [
      "Commercial point-of-sale terminals, banking core processors, and embedded device control systems."
    ],
    syntax: "// Complete project suite available in Projects tab",
    codeExample: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    int id;
    char name[40];
    double balance;
} Account;

void display_summary(const Account *acc, int count) {
    printf("====================================================\\n");
    printf("         ENTERPRISE PORTFOLIO SYSTEM DEMO           \\n");
    printf("====================================================\\n");
    printf("ID   | Account Holder        | Current Balance      \\n");
    printf("----------------------------------------------------\\n");
    double total = 0.0;
    for (int i = 0; i < count; i++) {
        printf("%-4d | %-21s | $%-19.2f\\n", acc[i].id, acc[i].name, acc[i].balance);
        total += acc[i].balance;
    }
    printf("----------------------------------------------------\\n");
    printf("Total Managed Assets: $%.2f\\n", total);
    printf("====================================================\\n");
}

int main(void) {
    Account clients[3] = {
        { 1001, "Acme Robotics", 1450000.00 },
        { 1002, "Quantum AI Labs", 2890000.50 },
        { 1003, "Nordic Cloud AG", 820000.00 }
    };
    display_summary(clients, 3);
    printf("C Masterclass Curriculum completed successfully! ✓\\n");
    return 0;
}`,
    expectedOutput: `====================================================
         ENTERPRISE PORTFOLIO SYSTEM DEMO           
====================================================
ID   | Account Holder        | Current Balance      
----------------------------------------------------
1001 | Acme Robotics         | $1450000.00         
1002 | Quantum AI Labs       | $2890000.50         
1003 | Nordic Cloud AG       | $820000.00          
----------------------------------------------------
Total Managed Assets: $5160000.50
====================================================
C Masterclass Curriculum completed successfully! ✓`,
    codeExplanation: [
      "Demonstrates modular data aggregation across enterprise customer records.",
      "Prepares the developer for building the 10 portfolio projects included in the Projects tab."
    ],
    commonMistakes: [
      "Writing monolithic 1000-line main() functions instead of decomposing into testable modular routines."
    ],
    bestPractices: [
      "Always write modular C code split across header files and implementation files.",
      "Profile your projects with AddressSanitizer and Valgrind."
    ],
    practiceExercises: [
      {
        title: "Build the 10 Projects",
        difficulty: "Advanced",
        task: "Navigate to the Projects tab and build the Calculator, Banking System, and Database projects.",
        hint: "Review projects 1 through 10 in the C Projects tab.",
        solution: "// Explore projects 1-10 in the C Projects section."
      }
    ],
    quiz: [
      {
        question: "Which compiler flag enables all recommended warnings in GCC/Clang?",
        options: ["-Wall -Wextra", "-O3", "-c", "-g"],
        correctAnswer: 0,
        explanation: "-Wall and -Wextra enable all core compiler diagnostics and warnings, catching common bugs at build time."
      }
    ],
    summary: "Congratulations! You have covered the full C programming spectrum from variables and pointers to dynamic memory and data structures.",
    relatedLessons: ["c-mod-1", "c-mod-21", "c-mod-29", "c-mod-43"]
  }
];
