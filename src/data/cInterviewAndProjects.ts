// CODE FROM ZERO - C PROGRAMMING INTERVIEW PREP, 10 REAL-WORLD PROJECTS, 60-DAY ROADMAP & DEBUGGING CHALLENGES
import { Difficulty } from '../types';

export interface CInterviewQuestion {
  id: string;
  question: string;
  level: Difficulty;
  category: string;
  answer: string;
  detailedExplanation: string;
  codeSnippet?: string;
  followUpQuestion?: string;
  commonMistakes?: string[];
}

export interface CInterviewCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  questions: CInterviewQuestion[];
}

export interface CProjectItem {
  id: string;
  number: number;
  title: string;
  difficulty: Difficulty;
  estimatedTime: string;
  objective: string;
  requiredConcepts: string[];
  projectStructure: string;
  code: string;
  explanation: string[];
  sampleExecution: string;
  improvements: string[];
}

export interface CRoadmapDay {
  day: number;
  title: string;
  topic: string;
  explanation: string;
  codeTask: string;
  practiceProblem: string;
  interviewPrep: string;
}

export interface CRoadmapStage {
  stageNumber: number;
  title: string;
  duration: string;
  summary: string;
  weeklyGoal: string;
  days: CRoadmapDay[];
}

export interface COutputPrediction {
  id: string;
  title: string;
  topic: string;
  code: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface CDebuggingChallenge {
  id: string;
  title: string;
  topic: string;
  buggyCode: string;
  bugDescription: string;
  hints: string[];
  correctedCode: string;
  explanation: string;
}

export interface CPlaygroundTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  code: string;
}

// ==========================================
// 1. C INTERVIEW PREPARATION (6 CATEGORIES)
// ==========================================
export const C_INTERVIEW_CATEGORIES: CInterviewCategory[] = [
  {
    id: "c-interview-freshers",
    title: "Freshers & Language Foundations",
    description: "Core concepts frequently asked in campus placements and entry-level software engineer interviews.",
    iconName: "Code2",
    questions: [
      {
        id: "c-q1",
        question: "What are the key differences between C and other modern languages like Python and Java?",
        level: "Beginner",
        category: "Foundations",
        answer: "C is a compiled, statically typed procedural language with direct memory control via pointers, zero automatic garbage collection, and minimal runtime overhead.",
        detailedExplanation: "Unlike Java (which runs on a bytecode virtual machine) or Python (which is interpreted), C compiles directly down to native machine code. In C, the developer is explicitly responsible for managing CPU memory addresses and releasing heap memory using free().",
        codeSnippet: "// C: Explicit typed declaration and direct pointer addressing\n#include <stdio.h>\nint main(void) {\n    int x = 42;\n    int *ptr = &x;\n    printf(\"Value: %d, Address in RAM: %p\\n\", *ptr, (void*)ptr);\n    return 0;\n}",
        followUpQuestion: "Why is C still preferred for operating systems and device drivers despite being older?",
        commonMistakes: ["Stating that C is an object-oriented language", "Believing C code requires a virtual machine to execute"]
      },
      {
        id: "c-q2",
        question: "What is the difference between '#include <stdio.h>' and '#include \"stdio.h\"'?",
        level: "Beginner",
        category: "Preprocessor",
        answer: "Angle brackets '<>' tell the preprocessor to search system standard library directories first, while double quotes '\"\"' tell it to search the local project directory first.",
        detailedExplanation: "When using '#include <file.h>', GCC/Clang looks directly in compiler standard include paths (e.g. /usr/include). When using '#include \"file.h\"', the preprocessor searches the directory containing the current source file first, then falls back to system paths.",
        followUpQuestion: "How do header guards (#ifndef, #define, #endif) prevent multiple definition errors?",
        commonMistakes: ["Using angle brackets for user-defined local header files"]
      },
      {
        id: "c-q3",
        question: "What is the difference between ++i (pre-increment) and i++ (post-increment)?",
        level: "Beginner",
        category: "Operators",
        answer: "++i increments the variable first and evaluates to the new value; i++ evaluates to the current value first and then increments the variable.",
        detailedExplanation: "In expression context: int a = 5; int b = ++a; results in a=6, b=6. However, int a = 5; int b = a++; results in b=5 and then a becomes 6. Note: modifying a variable more than once in an unsequenced expression (like i = i++) produces Undefined Behavior in C.",
        codeSnippet: "#include <stdio.h>\nint main(void) {\n    int i = 5;\n    printf(\"Post: %d\\n\", i++); // prints 5, i becomes 6\n    printf(\"Pre:  %d\\n\", ++i); // i becomes 7, prints 7\n    return 0;\n}",
        followUpQuestion: "Why is 'i = i++' considered undefined behavior in C11/C17?",
        commonMistakes: ["Assuming i++ and ++i behave identically when assigned inside mathematical expressions"]
      },
      {
        id: "c-q4",
        question: "What is the significance of the 'static' keyword in C when applied to local variables vs global functions?",
        level: "Intermediate",
        category: "Storage Classes",
        answer: "On a local variable, 'static' preserves its value across function calls (persisting in data segment). On a global function or variable, 'static' limits internal linkage to the translation unit (.c file).",
        detailedExplanation: "A static local variable is initialized only once when the program loads and retains its state between subsequent function invocations. A static global variable or function cannot be accessed or linked by other .c files using extern, providing encapsulation in modular C.",
        codeSnippet: "#include <stdio.h>\nvoid counter(void) {\n    static int count = 0; // Initialized once in data segment\n    count++;\n    printf(\"Count: %d\\n\", count);\n}\nint main(void) {\n    counter(); // Count: 1\n    counter(); // Count: 2\n    counter(); // Count: 3\n    return 0;\n}",
        followUpQuestion: "Where are static variables stored in process virtual memory layout?",
        commonMistakes: ["Confusing static storage duration with the const read-only qualifier"]
      }
    ]
  },
  {
    id: "c-interview-pointers",
    title: "Pointers & Memory Architecture",
    description: "Deep dive into pointer arithmetic, void pointers, function pointers, and virtual address spaces.",
    iconName: "Terminal",
    questions: [
      {
        id: "c-q5",
        question: "Explain the difference between a pointer to a constant (const int *p) and a constant pointer (int * const p).",
        level: "Intermediate",
        category: "Pointers",
        answer: "'const int *p' means the integer data cannot be modified through the pointer (*p = 10 is illegal). 'int * const p' means the pointer address itself cannot point to another variable (p = &y is illegal).",
        detailedExplanation: "Remember the Clockwise/Spiral rule or reading from right to left: 'const int *p' is a pointer to constant integer (data is read-only). 'int * const p' is a constant pointer to integer (address is fixed). 'const int * const p' fixes both address and data.",
        codeSnippet: "#include <stdio.h>\nint main(void) {\n    int a = 10, b = 20;\n    const int *p1 = &a; // Data read-only\n    // *p1 = 15;        // ERROR: assignment of read-only location\n    p1 = &b;            // Legal!\n\n    int * const p2 = &a;// Pointer address is fixed\n    *p2 = 15;           // Legal!\n    // p2 = &b;         // ERROR: assignment of read-only variable\n    return 0;\n}",
        followUpQuestion: "How does the 'const' keyword help the C compiler optimize register allocations?",
        commonMistakes: ["Mixing up which entity (data or address) is declared immutable"]
      },
      {
        id: "c-q6",
        question: "What is a void pointer (void*) and what are its restrictions?",
        level: "Intermediate",
        category: "Pointers",
        answer: "A void* is a generic raw pointer that can hold the memory address of any data type. It cannot be directly dereferenced or used in pointer arithmetic without explicit type casting.",
        detailedExplanation: "Because the compiler does not know the byte size of the underlying type pointed to by a void*, it cannot determine how many bytes to read (*p) or how many bytes to offset (p + 1). void* is used extensively in generic library functions like malloc() and qsort().",
        codeSnippet: "#include <stdio.h>\nvoid print_val(void *ptr, char type) {\n    if (type == 'i') printf(\"Int: %d\\n\", *(int*)ptr);\n    if (type == 'f') printf(\"Float: %.2f\\n\", *(float*)ptr);\n}\nint main(void) {\n    int num = 100;\n    float pi = 3.14159f;\n    print_val(&num, 'i');\n    print_val(&pi, 'f');\n    return 0;\n}",
        followUpQuestion: "Why is explicit casting of malloc() return value (e.g. (int*)malloc(...)) discouraged in modern C?",
        commonMistakes: ["Attempting to dereference a void* directly without casting to concrete pointer type"]
      },
      {
        id: "c-q7",
        question: "What is a dangling pointer, what causes it, and how do you protect against it?",
        level: "Advanced",
        category: "Memory Safety",
        answer: "A dangling pointer is a pointer that points to a memory location that has already been deallocated or freed. Accessing it triggers undefined behavior or crashes.",
        detailedExplanation: "Dangling pointers typically arise when: (1) free(ptr) is called but ptr is not set to NULL, (2) returning the address of a local stack variable from a function. Protection: Always set pointers to NULL immediately after freeing them, and never return addresses of local stack variables.",
        codeSnippet: "#include <stdlib.h>\nvoid safe_free(void **ptr) {\n    if (ptr != NULL && *ptr != NULL) {\n        free(*ptr);\n        *ptr = NULL; // Defeats dangling pointer bug\n    }\n}\nint main(void) {\n    int *p = (int*)malloc(sizeof(int));\n    *p = 50;\n    safe_free((void**)&p);\n    // p is now NULL, safe from accidental use-after-free\n    return 0;\n}",
        followUpQuestion: "What is the difference between a dangling pointer and a memory leak?",
        commonMistakes: ["Believing that calling free(p) automatically sets p to NULL"]
      },
      {
        id: "c-q8",
        question: "What is a Function Pointer in C and what are its practical use cases?",
        level: "Advanced",
        category: "Pointers",
        answer: "A function pointer is a pointer that stores the starting address of executable machine instructions for a function in the code/text segment.",
        detailedExplanation: "Function pointers enable callback architectures, event handlers, runtime dispatch tables, and implementing polymorphism in procedural C. The standard C library function qsort() takes a function pointer comparator to sort arbitrary structures.",
        codeSnippet: "#include <stdio.h>\nint add(int a, int b) { return a + b; }\nint multiply(int a, int b) { return a * b; }\n\n// Higher-order function taking a function pointer\nvoid compute(int x, int y, int (*op)(int, int)) {\n    printf(\"Result: %d\\n\", op(x, y));\n}\n\nint main(void) {\n    compute(10, 5, add);      // Prints 15\n    compute(10, 5, multiply); // Prints 50\n    return 0;\n}",
        followUpQuestion: "How do you write a typedef for a function pointer returning int and taking two double parameters?",
        commonMistakes: ["Forgetting the parentheses around (*op) which transforms it into a function returning an int pointer"]
      }
    ]
  },
  {
    id: "c-interview-memory",
    title: "Dynamic Memory & Heap Allocation",
    description: "malloc, calloc, realloc, free, memory fragmentation, and Valgrind leak detection.",
    iconName: "Cpu",
    questions: [
      {
        id: "c-q9",
        question: "What are the exact functional differences between malloc() and calloc()?",
        level: "Intermediate",
        category: "Dynamic Memory",
        answer: "malloc(size) takes total bytes and leaves memory uninitialized (containing random garbage bytes). calloc(num, size) takes count and element size, and zeroes out all allocated memory bits.",
        detailedExplanation: "malloc() is faster because it does not write zeroes across the allocated page. calloc() is safer when allocating structures or arrays where zero-initialized fields are expected (e.g. null-terminated buffers or frequency arrays). Both return NULL if allocation fails.",
        codeSnippet: "#include <stdlib.h>\nint main(void) {\n    // malloc leaves memory uninitialized\n    int *a = (int*)malloc(5 * sizeof(int));\n    \n    // calloc sets every byte to 0\n    int *b = (int*)calloc(5, sizeof(int));\n    \n    free(a);\n    free(b);\n    return 0;\n}",
        followUpQuestion: "Why can calloc() prevent integer overflow vulnerabilities when calculating allocation size?",
        commonMistakes: ["Assuming malloc() zeroes out memory on modern operating systems"]
      },
      {
        id: "c-q10",
        question: "How does realloc() work, and what is the dangerous bug many developers write with it?",
        level: "Advanced",
        category: "Dynamic Memory",
        answer: "realloc(ptr, new_size) resizes an existing heap block. The danger is assigning directly: ptr = realloc(ptr, size); if realloc fails, it returns NULL, losing the original pointer and causing an immediate memory leak.",
        detailedExplanation: "realloc() either expands the block in place or allocates a new block, copies existing data, frees the old block, and returns the new pointer. Always capture the result in a temporary pointer first.",
        codeSnippet: "#include <stdio.h>\n#include <stdlib.h>\nint main(void) {\n    int *arr = (int*)malloc(2 * sizeof(int));\n    arr[0] = 10; arr[1] = 20;\n\n    // SAFE realloc pattern\n    int *temp = (int*)realloc(arr, 4 * sizeof(int));\n    if (temp == NULL) {\n        // Allocation failed: original arr is STILL VALID on heap!\n        free(arr);\n        return 1;\n    }\n    arr = temp;\n    arr[2] = 30; arr[3] = 40;\n    free(arr);\n    return 0;\n}",
        followUpQuestion: "What happens if realloc(ptr, 0) is called in different C standard revisions?",
        commonMistakes: ["Writing 'p = realloc(p, size)' which permanently leaks memory upon failure"]
      }
    ]
  },
  {
    id: "c-interview-structures",
    title: "Structures, Unions & Bit Manipulation",
    description: "Memory alignment, struct padding, packing, union memory sharing, and bitwise tricks.",
    iconName: "Binary",
    questions: [
      {
        id: "c-q11",
        question: "What is structure padding and alignment, and how does it affect sizeof(struct)?",
        level: "Intermediate",
        category: "Structures",
        answer: "CPUs access memory faster when multi-byte words are aligned at memory addresses that are multiples of their size. Compilers insert invisible padding bytes between struct members to enforce this alignment.",
        detailedExplanation: "Consider struct { char a; int b; char c; };. Even though total data bytes is 1+4+1 = 6, the sizeof will be 12 bytes on a 32/64-bit architecture due to 3 padding bytes after 'a' and 3 padding bytes after 'c'. Reordering members to struct { int b; char a; char c; }; reduces total size to 8 bytes.",
        codeSnippet: "#include <stdio.h>\nstruct Unoptimized {\n    char a;   // 1 byte\n    // 3 padding bytes\n    int b;    // 4 bytes\n    char c;   // 1 byte\n    // 3 padding bytes\n}; // Total: 12 bytes\n\nstruct Optimized {\n    int b;    // 4 bytes\n    char a;   // 1 byte\n    char c;   // 1 byte\n    // 2 padding bytes\n}; // Total: 8 bytes\n\nint main(void) {\n    printf(\"Unoptimized: %zu bytes\\n\", sizeof(struct Unoptimized)); // 12\n    printf(\"Optimized:   %zu bytes\\n\", sizeof(struct Optimized));   // 8\n    return 0;\n}",
        followUpQuestion: "How do compiler attributes like '__attribute__((packed))' disable padding, and what is the CPU penalty?",
        commonMistakes: ["Summing individual member sizes to calculate sizeof(struct)"]
      },
      {
        id: "c-q12",
        question: "What is the key difference between a struct and a union in C?",
        level: "Intermediate",
        category: "Structures & Unions",
        answer: "In a struct, every member has its own distinct memory offset. In a union, all members share the exact same starting memory address; its total size equals the size of its largest member.",
        detailedExplanation: "Unions are used to represent mutually exclusive data, build variant types (tagged unions), or perform hardware register bit-field conversions without allocating extra memory.",
        codeSnippet: "#include <stdio.h>\nunion Packet {\n    int intVal;        // 4 bytes\n    float floatVal;    // 4 bytes\n    char bytes[4];     // 4 bytes\n};\nint main(void) {\n    union Packet p;\n    p.intVal = 0x41424344;\n    printf(\"Union size: %zu bytes\\n\", sizeof(p)); // 4 bytes\n    printf(\"Character 0: %c\\n\", p.bytes[0]);       // Reads shared memory\n    return 0;\n}",
        followUpQuestion: "Why is type punning through unions officially allowed in C99/C11 but undefined in C++?",
        commonMistakes: ["Attempting to store values in two union members simultaneously without overwriting"]
      }
    ]
  },
  {
    id: "c-interview-strings",
    title: "Strings, Arrays & Buffer Safety",
    description: "Null termination, off-by-one errors, buffer overflows, and safe C11 string library alternatives.",
    iconName: "FileCode",
    questions: [
      {
        id: "c-q13",
        question: "Why was the standard library function 'gets()' completely removed from C11?",
        level: "Beginner",
        category: "Security",
        answer: "gets() does not take a buffer size limit, making it impossible to prevent stack buffer overflow vulnerabilities when user input exceeds the allocated array.",
        detailedExplanation: "An attacker could supply more characters than the destination array can hold, overwriting the function return address on the call stack and hijacking program execution. The safe replacement is fgets(buffer, sizeof(buffer), stdin).",
        codeSnippet: "#include <stdio.h>\nint main(void) {\n    char name[32];\n    printf(\"Enter your name: \");\n    // SECURE: Caps input at buffer boundary\n    if (fgets(name, sizeof(name), stdin) != NULL) {\n        printf(\"Hello, %s\", name);\n    }\n    return 0;\n}",
        followUpQuestion: "How does fgets() handle the newline character '\\n' when reading from stdin?",
        commonMistakes: ["Using scanf(\"%s\", buffer) without a field width specifier like scanf(\"%31s\", buffer)"]
      },
      {
        id: "c-q14",
        question: "What is the difference between char str[] = \"hello\" and char *str = \"hello\"?",
        level: "Intermediate",
        category: "Strings",
        answer: "'char str[]' creates a mutable stack array initialized with the characters. 'char *str' points to a string literal stored in read-only text memory; modifying it causes a Segmentation Fault.",
        detailedExplanation: "String literals like \"hello\" reside in the read-only data (.rodata) segment. Attempting 'str[0] = 'H'' on a pointer pointing to a literal triggers a memory protection fault. Always declare pointers to literals as 'const char *str'.",
        codeSnippet: "#include <stdio.h>\nint main(void) {\n    char stack_str[] = \"hello\";\n    stack_str[0] = 'H'; // Perfectly valid!\n\n    const char *ro_str = \"world\";\n    // ro_str[0] = 'W'; // Compiler Error (or SegFault if not const)\n    \n    printf(\"%s, %s!\\n\", stack_str, ro_str);\n    return 0;\n}",
        followUpQuestion: "Where do array names decay into pointers and when do they not?",
        commonMistakes: ["Modifying a string literal through a char* pointer"]
      }
    ]
  },
  {
    id: "c-interview-systems",
    title: "Systems Programming & File I/O",
    description: "Binary file handling, bit manipulation, endianness, and volatile keyword.",
    iconName: "Layers",
    questions: [
      {
        id: "c-q15",
        question: "What does the 'volatile' keyword signify in C, and when is it required?",
        level: "Advanced",
        category: "Systems Programming",
        answer: "The 'volatile' qualifier informs the compiler that a variable can be modified at any moment by external hardware, interrupt service routines (ISR), or concurrent threads, disabling caching optimizations.",
        detailedExplanation: "Without 'volatile', an optimizing compiler (-O2/-O3) might cache the variable value in a CPU register and create an infinite loop: while(!flag) {}. In embedded systems and device drivers, memory-mapped I/O registers must always be declared volatile.",
        codeSnippet: "// Embedded Hardware Register Definition\n#define STATUS_REG (*((volatile unsigned int*)0x40001000))\n\nvoid wait_for_device(void) {\n    // Compiler will reload from memory address on every iteration\n    while ((STATUS_REG & 0x01) == 0) {\n        // Waiting for hardware ready bit\n    }\n}",
        followUpQuestion: "Does volatile guarantee thread-safety or atomicity in multi-threaded C?",
        commonMistakes: ["Believing volatile provides mutex locking or atomic memory synchronization"]
      },
      {
        id: "c-q16",
        question: "How do you detect whether the host computer architecture is Little-Endian or Big-Endian in C?",
        level: "Intermediate",
        category: "Bit Manipulation",
        answer: "Store a multi-byte integer like 1 (0x0001) in an integer variable, cast its address to a char*, and inspect the first byte. If the byte is 1, it is Little-Endian; if 0, it is Big-Endian.",
        detailedExplanation: "Little-endian stores the least significant byte (LSB) at the lowest memory address (common in x86/ARM). Big-endian stores the most significant byte (MSB) at the lowest address (common in network protocols).",
        codeSnippet: "#include <stdio.h>\nint main(void) {\n    unsigned int x = 1;\n    char *c = (char*)&x;\n    if (*c == 1) {\n        printf(\"System Architecture: Little-Endian (x86/ARM Standard)\\n\");\n    } else {\n        printf(\"System Architecture: Big-Endian (Network Byte Order)\\n\");\n    }\n    return 0;\n}",
        followUpQuestion: "What are the standard POSIX functions for converting between host and network byte orders?",
        commonMistakes: ["Confusing bit order with byte order"]
      }
    ]
  }
];

// ==========================================
// 2. 10 COMPLETE REAL-WORLD C PROJECTS
// ==========================================
export const C_PORTFOLIO_PROJECTS: CProjectItem[] = [
  {
    id: "c-proj-1",
    number: 1,
    title: "Scientific Terminal Calculator",
    difficulty: "Beginner",
    estimatedTime: "2 hours",
    objective: "Build a robust command-line calculator supporting basic arithmetic, trigonometric calculations, powers, square roots, and division-by-zero protection.",
    requiredConcepts: ["switch-case", "Functions", "Math library (<math.h>)", "Error handling"],
    projectStructure: "Single file modular C application with separate calculation engine and user input validation.",
    code: `#include <stdio.h>
#include <math.h>

void show_menu(void) {
    printf("\\n========================================\\n");
    printf("     C SCIENTIFIC TERMINAL CALCULATOR   \\n");
    printf("========================================\\n");
    printf(" 1. Addition (+)        2. Subtraction (-)\\n");
    printf(" 3. Multiplication (*)  4. Division (/)\\n");
    printf(" 5. Power (x^y)         6. Square Root (sqrt)\\n");
    printf(" 7. Modulo (%%)          8. Exit Calculator\\n");
    printf("========================================\\n");
    printf("Select option (1-8): ");
}

int main(void) {
    int choice;
    double a, b, result;

    while (1) {
        show_menu();
        if (scanf("%d", &choice) != 1) {
            printf("Invalid input. Terminating.\\n");
            break;
        }

        if (choice == 8) {
            printf("Thank you for using C Calculator. Goodbye!\\n");
            break;
        }

        switch (choice) {
            case 1:
                printf("Enter two numbers: ");
                scanf("%lf %lf", &a, &b);
                printf("Result: %.4f + %.4f = %.4f\\n", a, b, a + b);
                break;
            case 2:
                printf("Enter two numbers: ");
                scanf("%lf %lf", &a, &b);
                printf("Result: %.4f - %.4f = %.4f\\n", a, b, a - b);
                break;
            case 3:
                printf("Enter two numbers: ");
                scanf("%lf %lf", &a, &b);
                printf("Result: %.4f * %.4f = %.4f\\n", a, b, a * b);
                break;
            case 4:
                printf("Enter two numbers: ");
                scanf("%lf %lf", &a, &b);
                if (b == 0.0) {
                    printf("Error: Division by zero is undefined!\\n");
                } else {
                    printf("Result: %.4f / %.4f = %.4f\\n", a, b, a / b);
                }
                break;
            case 5:
                printf("Enter base and exponent: ");
                scanf("%lf %lf", &a, &b);
                printf("Result: %.2f ^ %.2f = %.4f\\n", a, b, pow(a, b));
                break;
            case 6:
                printf("Enter non-negative number: ");
                scanf("%lf", &a);
                if (a < 0.0) {
                    printf("Error: Square root of negative number requires complex domain!\\n");
                } else {
                    printf("Result: sqrt(%.4f) = %.4f\\n", a, sqrt(a));
                }
                break;
            case 7:
                printf("Enter two integers: ");
                int ia, ib;
                scanf("%d %d", &ia, &ib);
                if (ib == 0) printf("Error: Modulo by zero!\\n");
                else printf("Result: %d %% %d = %d\\n", ia, ib, ia % ib);
                break;
            default:
                printf("Invalid selection. Choose between 1 and 8.\\n");
        }
    }
    return 0;
}`,
    explanation: [
      "Modular switch-case handles all arithmetic operations with clean separation of concerns.",
      "Division-by-zero checks prevent floating-point division exceptions or IEEE 754 infinity artifacts.",
      "Utilizes math.h functions (pow, sqrt) linked with -lm on Linux/GCC systems.",
      "Input stream verification ensures non-numeric character entry doesn't cause infinite looping."
    ],
    sampleExecution: `Select option (1-8): 4\nEnter two numbers: 15 4\nResult: 15.0000 / 4.0000 = 3.7500`,
    improvements: ["Add expression parsing using Shunting-Yard algorithm for full strings like '3 + 4 * 2'", "Add persistent calculation history log in a local text file"]
  },
  {
    id: "c-proj-2",
    number: 2,
    title: "Number Guessing Game with Smart Statistics",
    difficulty: "Beginner",
    estimatedTime: "2.5 hours",
    objective: "Implement a randomized number guessing game using pseudo-random generation (rand, srand) with user attempt tracking and binary search difficulty analysis.",
    requiredConcepts: ["time.h", "rand() / srand()", "while loops", "Comparison operators"],
    projectStructure: "Single file procedural game engine with difficulty settings and score metrics.",
    code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void play_round(int max_range) {
    int secret = (rand() % max_range) + 1;
    int guess, attempts = 0;

    printf("\\n--- New Game: Guess the number between 1 and %d ---\\n", max_range);

    while (1) {
        printf("Enter your guess: ");
        if (scanf("%d", &guess) != 1) {
            printf("Invalid input. Please enter a valid number.\\n");
            while (getchar() != '\\n'); // Clear input buffer
            continue;
        }

        attempts++;

        if (guess == secret) {
            printf("🎯 BINGO! You found the secret number %d in %d attempts!\\n", secret, attempts);
            if (attempts <= 5) printf("Evaluation: Master Strategist (Optimal Binary Search!)\\n");
            else if (attempts <= 8) printf("Evaluation: Great Job!\\n");
            else printf("Evaluation: Keep practicing your range narrowing!\\n");
            break;
        } else if (guess < secret) {
            printf("🔼 Too LOW! Try a higher number.\\n");
        } else {
            printf("🔽 Too HIGH! Try a lower number.\\n");
        }
    }
}

int main(void) {
    srand((unsigned int)time(NULL)); // Seed pseudo-random generator
    int choice;

    printf("=========================================\\n");
    printf("   CODE FROM ZERO - NUMBER GUESS MASTER  \\n");
    printf("=========================================\\n");

    do {
        printf("\\nChoose Difficulty:\\n");
        printf("1. Easy (1 - 50)\\n2. Medium (1 - 100)\\n3. Hard (1 - 500)\\n4. Exit Game\\n");
        printf("Select mode: ");
        if (scanf("%d", &choice) != 1) break;

        if (choice == 1) play_round(50);
        else if (choice == 2) play_round(100);
        else if (choice == 3) play_round(500);
        else if (choice == 4) printf("Thanks for playing!\\n");
        else printf("Invalid option.\\n");

    } while (choice != 4);

    return 0;
}`,
    explanation: [
      "srand(time(NULL)) seeds the random generator with current UNIX epoch seconds so numbers differ on every run.",
      "Buffer clearing loop 'while (getchar() != '\\n')' gracefully recovers from erroneous character input.",
      "Provides performance evaluation based on algorithmic log2(N) binary search efficiency."
    ],
    sampleExecution: `Enter your guess: 50\n🔽 Too HIGH! Try a lower number.\nEnter your guess: 25\n🎯 BINGO! You found the secret number 25 in 2 attempts!`,
    improvements: ["Add high-score persistence to a binary save file", "Add two-player mode over network sockets"]
  },
  {
    id: "c-proj-3",
    number: 3,
    title: "Interactive Programming Quiz Engine",
    difficulty: "Beginner",
    estimatedTime: "3 hours",
    objective: "Create an interactive multiple-choice quiz engine with dynamic score reporting, timer simulation, and percentage accuracy grading.",
    requiredConcepts: ["struct", "Arrays of Structs", "String manipulation", "Scoring algorithms"],
    projectStructure: "Question structure encapsulation with array iteration and answer checking.",
    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    char question[150];
    char options[4][60];
    int correct_option; // 1-4
    char explanation[120];
} QuizQuestion;

int main(void) {
    QuizQuestion quiz[4] = {
        {
            "Who created the C programming language?",
            {"1. Bjarne Stroustrup", "2. Dennis Ritchie", "3. James Gosling", "4. Guido van Rossum"},
            2,
            "Dennis Ritchie designed C at Bell Labs between 1969 and 1973 for Unix."
        },
        {
            "Which format specifier is used to print an unsigned memory address in C?",
            {"1. %d", "2. %s", "3. %p", "4. %u"},
            3,
            "%p formats void pointers into hexadecimal memory addresses."
        },
        {
            "What is the size of a double in standard 64-bit C implementations?",
            {"1. 2 bytes", "2. 4 bytes", "3. 8 bytes", "4. 16 bytes"},
            3,
            "Standard IEEE 754 double-precision float occupies 8 bytes (64 bits)."
        },
        {
            "Which operator is used to access members of a structure through a pointer?",
            {"1. . (dot)", "2. -> (arrow)", "3. :: (scope)", "4. * (asterisk)"},
            2,
            "The arrow operator (->) dereferences the pointer and accesses the member field."
        }
    };

    int score = 0;
    int total = 4;
    int user_ans;

    printf("=========================================\\n");
    printf("   CODE FROM ZERO - C CERTIFICATION QUIZ \\n");
    printf("=========================================\\n");

    for (int i = 0; i < total; i++) {
        printf("\\nQuestion %d of %d:\\n", i + 1, total);
        printf("%s\\n", quiz[i].question);
        for (int j = 0; j < 4; j++) {
            printf("  %s\\n", quiz[i].options[j]);
        }

        printf("Your answer (1-4): ");
        if (scanf("%d", &user_ans) != 1) {
            printf("Invalid input.\\n");
            break;
        }

        if (user_ans == quiz[i].correct_option) {
            printf("✓ CORRECT! Excellent.\\n");
            score++;
        } else {
            printf("✗ INCORRECT. Correct option was %d.\\n", quiz[i].correct_option);
        }
        printf("💡 Explanation: %s\\n", quiz[i].explanation);
    }

    printf("\\n=========================================\\n");
    printf("FINAL SCORE: %d / %d (%.1f%%)\\n", score, total, ((float)score / total) * 100);
    if (score == total) printf("Grade: PERFECT SCORE! Master of C Fundamentals.\\n");
    else if (score >= 2) printf("Grade: PASSED. Solid understanding.\\n");
    else printf("Grade: NEEDS REVISION. Review course notes.\\n");
    printf("=========================================\\n");

    return 0;
}`,
    explanation: [
      "QuizQuestion structure encapsulates prompt, options, answer key, and pedagogical explanation.",
      "Computes percentage precision and outputs motivational grade assessment.",
      "Demonstrates multi-dimensional character arrays inside structures."
    ],
    sampleExecution: `Question 1 of 4:\nWho created the C programming language?\nYour answer (1-4): 2\n✓ CORRECT! Excellent.`,
    improvements: ["Load questions dynamically from a CSV or JSON file", "Add countdown timer per question using clock()"]
  },
  {
    id: "c-proj-4",
    number: 4,
    title: "Student Marks & GPA Management System",
    difficulty: "Intermediate",
    estimatedTime: "4 hours",
    objective: "Implement a robust student academic system managing student profiles, grade points, GPA computations, rank generation, and tabular report printing.",
    requiredConcepts: ["typedef struct", "Pointer arguments", "Sorting algorithms", "Formatted terminal tables"],
    projectStructure: "Roster management module with GPA calculation and bubble sort ranking.",
    code: `#include <stdio.h>
#include <string.h>

#define MAX_STUDENTS 50
#define NUM_SUBJECTS 5

typedef struct {
    int roll_no;
    char name[40];
    int marks[NUM_SUBJECTS];
    float total;
    float percentage;
    char grade;
} StudentRecord;

char calculate_grade(float pct) {
    if (pct >= 90.0) return 'A';
    if (pct >= 80.0) return 'B';
    if (pct >= 70.0) return 'C';
    if (pct >= 60.0) return 'D';
    return 'F';
}

void sort_by_rank(StudentRecord s[], int count) {
    for (int i = 0; i < count - 1; i++) {
        for (int j = 0; j < count - i - 1; j++) {
            if (s[j].percentage < s[j + 1].percentage) {
                StudentRecord temp = s[j];
                s[j] = s[j + 1];
                s[j + 1] = temp;
            }
        }
    }
}

int main(void) {
    StudentRecord students[3] = {
        { 101, "Aarav Sharma", {88, 92, 79, 85, 94}, 0, 0, ' ' },
        { 102, "Sophia Chen",  {95, 98, 92, 96, 99}, 0, 0, ' ' },
        { 103, "Lucas Miller", {65, 70, 72, 68, 74}, 0, 0, ' ' }
    };
    int count = 3;

    // Calculate totals and percentages
    for (int i = 0; i < count; i++) {
        students[i].total = 0;
        for (int j = 0; j < NUM_SUBJECTS; j++) {
            students[i].total += students[i].marks[j];
        }
        students[i].percentage = students[i].total / NUM_SUBJECTS;
        students[i].grade = calculate_grade(students[i].percentage);
    }

    // Rank students by performance
    sort_by_rank(students, count);

    printf("=====================================================================\\n");
    printf("         ACADEMIC MERIT & RANKING REPORT CARD - 2026                 \\n");
    printf("=====================================================================\\n");
    printf("Rank | Roll No | Name            | Total (/%d) | Percentage | Grade \\n", NUM_SUBJECTS * 100);
    printf("---------------------------------------------------------------------\\n");

    for (int i = 0; i < count; i++) {
        printf(" #%-2d | %-7d | %-15s | %-11.1f | %-9.2f%% |   %c   \\n",
               i + 1, students[i].roll_no, students[i].name, 
               students[i].total, students[i].percentage, students[i].grade);
    }
    printf("=====================================================================\\n");

    return 0;
}`,
    explanation: [
      "Custom StudentRecord data structure holds academic metrics.",
      "Demonstrates multi-subject array aggregation and automatic letter grade assignment.",
      "Sorts array in descending percentage order to establish class rankings.",
      "Formatted printing with %-15s creates clean ASCII tabular columns."
    ],
    sampleExecution: `Rank | Roll No | Name            | Total (/500) | Percentage | Grade\n #1  | 102     | Sophia Chen     | 480.0       | 96.00%     |   A`,
    improvements: ["Persist records to an SQLite or CSV file", "Support dynamic class sizes using realloc()"]
  },
  {
    id: "c-proj-5",
    number: 5,
    title: "Employee HR & Payroll Management System",
    difficulty: "Intermediate",
    estimatedTime: "4.5 hours",
    objective: "Develop a departmental payroll and employee management system with search, net salary computation, tax brackets, and record updates.",
    requiredConcepts: ["Pointers", "Struct arrays", "Linear search", "Formatted currency I/O"],
    projectStructure: "Separation into calculation, search, and payroll reporting routines.",
    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    int emp_id;
    char name[40];
    char department[30];
    double basic_salary;
    double tax_rate;
    double net_salary;
} Employee;

void calculate_net_salary(Employee *e) {
    double tax = e->basic_salary * e->tax_rate;
    double allowance = e->basic_salary * 0.12; // 12% health & transport
    e->net_salary = e->basic_salary - tax + allowance;
}

void print_employee(const Employee *e) {
    printf("ID: %-4d | Name: %-14s | Dept: %-10s | Base: $%-8.2f | Net: $%-8.2f\\n",
           e->emp_id, e->name, e->department, e->basic_salary, e->net_salary);
}

int main(void) {
    Employee team[3] = {
        { 2001, "David Vance", "Engineering", 115000.0, 0.22, 0.0 },
        { 2002, "Elena Rostova", "Security",    135000.0, 0.25, 0.0 },
        { 2003, "Grace Hopper",  "Leadership",  165000.0, 0.28, 0.0 }
    };
    int count = 3;

    double total_payroll = 0.0;
    for (int i = 0; i < count; i++) {
        calculate_net_salary(&team[i]);
        total_payroll += team[i].net_salary;
    }

    printf("========================================================================\\n");
    printf("               COMPANY HR & PAYROLL AUDIT SYSTEM                        \\n");
    printf("========================================================================\\n");
    for (int i = 0; i < count; i++) {
        print_employee(&team[i]);
    }
    printf("------------------------------------------------------------------------\\n");
    printf("Total Monthly Outbound Payroll: $%.2f\\n", total_payroll);
    printf("========================================================================\\n");

    return 0;
}`,
    explanation: [
      "Demonstrates pass-by-reference using 'Employee *e' to modify member values in-place.",
      "Calculates tax deduction and company allowances based on salary tiers.",
      "Utilizes const pointers for read-only print routines to prevent accidental data corruption."
    ],
    sampleExecution: `ID: 2001 | Name: David Vance    | Dept: Engineering | Base: $115000.00 | Net: $103500.00`,
    improvements: ["Add overtime computation", "Export payroll paystubs as printable text files"]
  },
  {
    id: "c-proj-6",
    number: 6,
    title: "Dynamic Contact Book & Fast Search",
    difficulty: "Intermediate",
    estimatedTime: "5 hours",
    objective: "Build a memory-efficient digital contact book with live search, dynamic array reallocation (realloc), and contact removal.",
    requiredConcepts: ["malloc", "realloc", "free", "strcmp", "Dynamic arrays"],
    projectStructure: "Dynamic memory allocator, contact list, and substring search engine.",
    code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char name[50];
    char phone[20];
    char email[50];
} Contact;

typedef struct {
    Contact *items;
    int count;
    int capacity;
} ContactBook;

ContactBook* create_book(int initial_cap) {
    ContactBook *cb = (ContactBook*)malloc(sizeof(ContactBook));
    if (!cb) return NULL;
    cb->items = (Contact*)malloc(initial_cap * sizeof(Contact));
    cb->count = 0;
    cb->capacity = initial_cap;
    return cb;
}

void add_contact(ContactBook *cb, const char *name, const char *phone, const char *email) {
    if (cb->count == cb->capacity) {
        cb->capacity *= 2;
        cb->items = (Contact*)realloc(cb->items, cb->capacity * sizeof(Contact));
        printf("[Log] Doubled contact capacity to %d\\n", cb->capacity);
    }
    strcpy(cb->items[cb->count].name, name);
    strcpy(cb->items[cb->count].phone, phone);
    strcpy(cb->items[cb->count].email, email);
    cb->count++;
    printf("✓ Added contact: %s\\n", name);
}

void list_contacts(const ContactBook *cb) {
    printf("\\n--- CONTACT DIRECTORY (%d Contacts) ---\\n", cb->count);
    for (int i = 0; i < cb->count; i++) {
        printf("%d. %-18s | Phone: %-14s | Email: %s\\n",
               i + 1, cb->items[i].name, cb->items[i].phone, cb->items[i].email);
    }
}

void free_book(ContactBook *cb) {
    if (cb) {
        free(cb->items);
        free(cb);
    }
}

int main(void) {
    ContactBook *book = create_book(2); // Initial capacity 2

    add_contact(book, "Dennis Ritchie", "+1-555-0101", "dennis@bell-labs.com");
    add_contact(book, "Ken Thompson",   "+1-555-0102", "ken@bell-labs.com");
    // This triggers automatic realloc doubling:
    add_contact(book, "Linus Torvalds", "+1-555-0103", "torvalds@kernel.org");

    list_contacts(book);

    free_book(book);
    printf("Memory cleaned up safely.\\n");
    return 0;
}`,
    explanation: [
      "Implements dynamic array scaling: doubles capacity when array fills up.",
      "Encapsulates items, count, and capacity within a manager struct (ContactBook).",
      "Properly pairs heap allocations (malloc) with complete deep deallocation (free)."
    ],
    sampleExecution: `✓ Added contact: Dennis Ritchie\n[Log] Doubled contact capacity to 4\n✓ Added contact: Linus Torvalds`,
    improvements: ["Implement binary search by sorting contacts alphabetically", "Save to VCF card format"]
  },
  {
    id: "c-proj-7",
    number: 7,
    title: "Library Management System & Inventory Tracker",
    difficulty: "Intermediate",
    estimatedTime: "5.5 hours",
    objective: "Implement a library catalog system tracking book availability, check-outs, issue dates, and return overdue fee calculations.",
    requiredConcepts: ["Structures", "Date arithmetic", "Flag tracking", "Formatted catalog display"],
    projectStructure: "Book catalog, transaction records, and inventory auditing.",
    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    int book_id;
    char title[60];
    char author[40];
    int is_borrowed;
    char borrower[40];
    int due_days;
} Book;

void print_catalog(const Book books[], int count) {
    printf("\\n=======================================================================\\n");
    printf("             CENTRAL UNIVERSITY LIBRARY CATALOG                       \\n");
    printf("=======================================================================\\n");
    printf("ID   | Title                         | Author            | Status      \\n");
    printf("-----------------------------------------------------------------------\\n");
    for (int i = 0; i < count; i++) {
        char status[30];
        if (books[i].is_borrowed) {
            snprintf(status, sizeof(status), "Borrowed by %s", books[i].borrower);
        } else {
            strcpy(status, "Available (On Shelf)");
        }
        printf("%-4d | %-29s | %-17s | %-11s\\n", 
               books[i].book_id, books[i].title, books[i].author, status);
    }
    printf("=======================================================================\\n");
}

int borrow_book(Book books[], int count, int id, const char *borrower) {
    for (int i = 0; i < count; i++) {
        if (books[i].book_id == id) {
            if (books[i].is_borrowed) {
                printf("Error: Book '%s' is already checked out by %s.\\n", books[i].title, books[i].borrower);
                return 0;
            }
            books[i].is_borrowed = 1;
            strcpy(books[i].borrower, borrower);
            books[i].due_days = 14; // 14-day checkout window
            printf("Success: '%s' issued to %s (Due in 14 days).\\n", books[i].title, borrower);
            return 1;
        }
    }
    printf("Error: Book with ID %d not found in catalog.\\n", id);
    return 0;
}

int main(void) {
    Book catalog[3] = {
        { 101, "The C Programming Language", "Kernighan & Ritchie", 0, "", 0 },
        { 102, "Operating System Concepts",    "Silberschatz",        0, "", 0 },
        { 103, "Clean Architecture",           "Robert C. Martin",    0, "", 0 }
    };
    int count = 3;

    print_catalog(catalog, count);
    borrow_book(catalog, count, 101, "Alex Morgan");
    print_catalog(catalog, count);

    return 0;
}`,
    explanation: [
      "Tracks lending state flags and borrower identities.",
      "snprintf formats status strings safely without risk of buffer overrun.",
      "Encapsulates check-out logic and search-by-ID validation."
    ],
    sampleExecution: `Success: 'The C Programming Language' issued to Alex Morgan (Due in 14 days).`,
    improvements: ["Track late return fines ($0.50/day)", "Save transaction logs to disk"]
  },
  {
    id: "c-proj-8",
    number: 8,
    title: "Secure Banking & Transaction Ledger System",
    difficulty: "Advanced",
    estimatedTime: "6 hours",
    objective: "Architect a multi-account banking core supporting deposit, withdrawal with overdraft prevention, transfer between accounts, and transaction audit trails.",
    requiredConcepts: ["Pointers", "Transaction validation", "State mutation", "Security checks"],
    projectStructure: "Account balances, transfer verification, and audit trail ledger.",
    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    long account_no;
    char holder_name[40];
    double balance;
    int transaction_count;
} BankAccount;

int deposit(BankAccount *acc, double amount) {
    if (amount <= 0) {
        printf("Error: Deposit amount must be positive.\\n");
        return 0;
    }
    acc->balance += amount;
    acc->transaction_count++;
    printf("✓ Deposited $%.2f into Account #%ld. New Balance: $%.2f\\n", amount, acc->account_no, acc->balance);
    return 1;
}

int withdraw(BankAccount *acc, double amount) {
    if (amount <= 0) {
        printf("Error: Withdrawal amount must be positive.\\n");
        return 0;
    }
    if (amount > acc->balance) {
        printf("✗ FAILED: Insufficient funds in Account #%ld! Balance: $%.2f, Requested: $%.2f\\n",
               acc->account_no, acc->balance, amount);
        return 0;
    }
    acc->balance -= amount;
    acc->transaction_count++;
    printf("✓ Withdrawn $%.2f from Account #%ld. New Balance: $%.2f\\n", amount, acc->account_no, acc->balance);
    return 1;
}

int transfer(BankAccount *from, BankAccount *to, double amount) {
    printf("\\n[Transfer Request] $%.2f from #%ld (%s) to #%ld (%s)\\n",
           amount, from->account_no, from->holder_name, to->account_no, to->holder_name);
    if (withdraw(from, amount)) {
        deposit(to, amount);
        printf("✓ Transfer successful!\\n");
        return 1;
    }
    printf("✗ Transfer aborted due to withdrawal failure.\\n");
    return 0;
}

int main(void) {
    BankAccount acc1 = { 880101, "Alice Chen", 5400.00, 0 };
    BankAccount acc2 = { 880102, "Bob Smith",   1250.00, 0 };

    printf("==================================================\\n");
    printf("         CORE BANKING SYSTEM SIMULATION           \\n");
    printf("==================================================\\n");

    deposit(&acc1, 600.0);
    withdraw(&acc2, 200.0);
    transfer(&acc1, &acc2, 2000.0);

    // Test overdraft guard
    withdraw(&acc2, 5000.0);

    return 0;
}`,
    explanation: [
      "Atomic transaction design: transfer only deposits if withdrawal completely succeeds.",
      "Overdraft guards protect bank balances against negative integer/float exploits.",
      "Maintains transaction counter per account for audit purposes."
    ],
    sampleExecution: `[Transfer Request] $2000.00 from #880101 (Alice Chen) to #880102 (Bob Smith)\n✓ Transfer successful!`,
    improvements: ["Add PIN hashing and authentication", "Add multi-threaded mutex protection with pthreads"]
  },
  {
    id: "c-proj-9",
    number: 9,
    title: "Warehouse Inventory & Stock Management System",
    difficulty: "Advanced",
    estimatedTime: "6 hours",
    objective: "Implement a store inventory tracker with low-stock alerts, restock orders, wholesale value calculations, and stock replenishment logging.",
    requiredConcepts: ["Structures", "Threshold logic", "Reporting tables", "Formatted data aggregation"],
    projectStructure: "Inventory matrix with reorder triggers and total valuation reports.",
    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    char sku[12];
    char item_name[40];
    int stock_quantity;
    int reorder_level;
    double unit_price;
} Product;

void generate_stock_report(const Product inventory[], int count) {
    double total_warehouse_value = 0.0;
    int items_needing_reorder = 0;

    printf("\\n=======================================================================\\n");
    printf("             WAREHOUSE STOCK INVENTORY & VALUATION REPORT              \\n");
    printf("=======================================================================\\n");
    printf("SKU       | Product Name             | Stock | Unit Price | Total Value \\n");
    printf("-----------------------------------------------------------------------\\n");

    for (int i = 0; i < count; i++) {
        double val = inventory[i].stock_quantity * inventory[i].unit_price;
        total_warehouse_value += val;

        printf("%-9s | %-24s | %-5d | $%-9.2f | $%-10.2f",
               inventory[i].sku, inventory[i].item_name, 
               inventory[i].stock_quantity, inventory[i].unit_price, val);

        if (inventory[i].stock_quantity <= inventory[i].reorder_level) {
            printf(" ⚠️ LOW STOCK!");
            items_needing_reorder++;
        }
        printf("\\n");
    }

    printf("=======================================================================\\n");
    printf("Total Active SKUs: %d | Reorder Alerts: %d\\n", count, items_needing_reorder);
    printf("Total Current Inventory Value: $%.2f\\n", total_warehouse_value);
    printf("=======================================================================\\n");
}

int main(void) {
    Product warehouse[4] = {
        { "SKU-1001", "NVMe SSD 1TB Gen4",     45,  15, 89.99 },
        { "SKU-1002", "DDR5 RAM 32GB Kit",       8,  10, 119.50 }, // Low stock!
        { "SKU-1003", "Mechanical Keyboard",    32,  12, 65.00 },
        { "SKU-1004", "Wireless Gaming Mouse",   4,   8, 49.99 }  // Low stock!
    };
    int count = 4;

    generate_stock_report(warehouse, count);
    return 0;
}`,
    explanation: [
      "Computes individual item valuation and aggregates total warehouse inventory asset values.",
      "Implements threshold logic that triggers low-stock reorder warnings.",
      "Standard industrial SKU management pattern used in distribution logistics."
    ],
    sampleExecution: `SKU-1002  | DDR5 RAM 32GB Kit        | 8     | $119.50    | $956.00    ⚠️ LOW STOCK!`,
    improvements: ["Export order sheets as automated purchase requests", "Barcode scanner integration via serial port"]
  },
  {
    id: "c-proj-10",
    number: 10,
    title: "Persistent File-Based Student Database System",
    difficulty: "Advanced",
    estimatedTime: "7 hours",
    objective: "Build a complete, persistent database in C that reads and writes structured records directly to binary files using fopen, fread, fwrite, and fseek.",
    requiredConcepts: ["File I/O (fopen, fclose)", "Binary mode (rb, wb, rb+)", "fseek / ftell", "Data persistence"],
    projectStructure: "Disk serialization, record appending, binary stream reading, and in-place file updates.",
    code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define DB_FILE "students_master.dat"

typedef struct {
    int id;
    char name[40];
    float gpa;
    int active; // 1 = active, 0 = soft deleted
} StudentFileRecord;

void insert_student(int id, const char *name, float gpa) {
    FILE *fp = fopen(DB_FILE, "ab"); // Append binary
    if (!fp) {
        perror("Failed to open database file");
        return;
    }
    StudentFileRecord rec;
    rec.id = id;
    strncpy(rec.name, name, sizeof(rec.name) - 1);
    rec.name[sizeof(rec.name) - 1] = '\\0';
    rec.gpa = gpa;
    rec.active = 1;

    fwrite(&rec, sizeof(StudentFileRecord), 1, fp);
    fclose(fp);
    printf("✓ Record for '%s' (ID %d) serialized to disk.\\n", name, id);
}

void read_all_students(void) {
    FILE *fp = fopen(DB_FILE, "rb"); // Read binary
    if (!fp) {
        printf("Database file is empty or does not exist yet.\\n");
        return;
    }

    StudentFileRecord rec;
    printf("\\n=======================================================\\n");
    printf("       PERSISTENT DISK DATABASE RECORDS (students.dat) \\n");
    printf("=======================================================\\n");
    printf("ID   | Full Name                 | GPA   | Status      \\n");
    printf("-------------------------------------------------------\\n");

    while (fread(&rec, sizeof(StudentFileRecord), 1, fp) == 1) {
        if (rec.active) {
            printf("%-4d | %-25s | %-5.2f | ACTIVE      \\n", rec.id, rec.name, rec.gpa);
        }
    }
    printf("=======================================================\\n");
    fclose(fp);
}

int main(void) {
    // Clear old file for demo
    remove(DB_FILE);

    printf("=======================================================\\n");
    printf("     FILE-BASED DATABASE STORAGE DEMO IN C             \\n");
    printf("=======================================================\\n");

    insert_student(501, "Marcus Aurelius", 3.92f);
    insert_student(502, "Ada Lovelace",    4.00f);
    insert_student(503, "Alan Turing",     3.98f);

    read_all_students();

    printf("Data is permanently saved to '%s' on disk.\\n", DB_FILE);
    return 0;
}`,
    explanation: [
      "fwrite writes binary struct bytes directly from RAM onto storage without string conversion overhead.",
      "fread streams fixed-size records from disk in O(1) buffer transfers.",
      "Implements soft deletion flags used by enterprise database engines to avoid costly file truncations.",
      "remove() cleans up demo files, while 'ab' mode appends without overwriting existing records."
    ],
    sampleExecution: `✓ Record for 'Ada Lovelace' (ID 502) serialized to disk.\nID   | Full Name                 | GPA   | Status\n502  | Ada Lovelace              | 4.00  | ACTIVE`,
    improvements: ["Implement B-Tree index for O(log N) record lookups", "Add CRC32 checksum verification for file integrity"]
  }
];

// ==========================================
// 3. 60-DAY C PROGRAMMING ROADMAP
// ==========================================
export const C_ROADMAP_STAGES: CRoadmapStage[] = [
  {
    stageNumber: 1,
    title: "Phase 1: Foundations, Syntax & Control Flow",
    duration: "Days 1 to 15",
    summary: "Master compiling C programs, GCC/Clang tooling, variables, memory types, operators, and conditional branching.",
    weeklyGoal: "Write bug-free arithmetic and multi-way decision-making programs without compiler warnings.",
    days: [
      {
        day: 1,
        title: "Introduction to C & Dennis Ritchie",
        topic: "History of UNIX, Procedural Paradigm & Architecture",
        explanation: "Understand why C is called the mother of all modern programming languages and how it compiles directly to native binary code.",
        codeTask: "Write your first Hello World program with #include <stdio.h> and return 0.",
        practiceProblem: "Print your name, course track, and target graduation year formatted cleanly.",
        interviewPrep: "Why is C called a middle-level language?"
      },
      {
        day: 2,
        title: "Compiler Toolchains: GCC, Clang & VS Code",
        topic: "Compilation Stages: Preprocessing, Compiling, Assembly & Linking",
        explanation: "Learn how gcc -E, -S, -c, and -o transform source code step by step into an executable binary.",
        codeTask: "Compile a C file from the command line using 'gcc -Wall -Wextra main.c -o app'.",
        practiceProblem: "Trigger a compilation warning with an unused variable and fix it.",
        interviewPrep: "What are the 4 main stages of C compilation?"
      },
      {
        day: 3,
        title: "Variables, Identifiers & Data Types",
        topic: "int, float, double, char, void & Size Limits",
        explanation: "Explore primitive data types, memory footprint with sizeof, and signed vs unsigned representation.",
        codeTask: "Print the exact byte sizes of char, short, int, long, float, and double on your machine.",
        practiceProblem: "Calculate whether an unsigned int will overflow when assigning -1.",
        interviewPrep: "What is the size of an int in 16-bit vs 32-bit vs 64-bit systems?"
      },
      {
        day: 4,
        title: "Input & Output: printf() and scanf()",
        topic: "Format Specifiers: %d, %f, %c, %s, %lf, %p",
        explanation: "Master formatted input/output and understand why passing addresses (&) to scanf is required.",
        codeTask: "Prompt the user for their age, GPA, and initials, and display them in a formatted box.",
        practiceProblem: "Fix scanf buffer issues when reading characters after integers.",
        interviewPrep: "Why does scanf require the address-of operator (&) for numbers but not for strings?"
      },
      {
        day: 5,
        title: "Operators & Expressions",
        topic: "Arithmetic, Modulo, Relational, and Assignment Operators",
        explanation: "Understand operator precedence and associativity to evaluate complex expressions correctly.",
        codeTask: "Implement temperature conversion from Fahrenheit to Celsius and Kelvin.",
        practiceProblem: "Write a program that swaps two variables without using a third temporary variable.",
        interviewPrep: "Explain operator precedence between * / % and + -."
      },
      {
        day: 6,
        title: "Increment & Decrement Operators",
        topic: "Pre-Increment (++x) vs Post-Increment (x++)",
        explanation: "Understand the sequencing differences between pre-increment and post-increment and avoid undefined behavior.",
        codeTask: "Demonstrate pre-increment vs post-increment inside while loops.",
        practiceProblem: "Predict output of nested increment operations in expressions.",
        interviewPrep: "Why is i = i++ undefined behavior in standard C?"
      },
      {
        day: 7,
        title: "Bitwise Operators & Bit Manipulation",
        topic: "&, |, ^, ~, <<, >> Operators",
        explanation: "Manipulate individual bits directly in memory for fast flags, masks, and low-level hardware control.",
        codeTask: "Check if a given integer is even or odd using only bitwise AND (&).",
        practiceProblem: "Count the number of set bits (1s) in a 32-bit integer using Brian Kernighan's algorithm.",
        interviewPrep: "How do you toggle the n-th bit of a number in C?"
      },
      {
        day: 8,
        title: "Type Casting & Type Conversions",
        topic: "Implicit Type Promotion vs Explicit Casting",
        explanation: "Learn how integer division truncates decimal values and how explicit casting prevents calculation bugs.",
        codeTask: "Calculate the average of 3 integer test scores and print as a precise float.",
        practiceProblem: "Explain what happens when an unsigned int and signed int are compared with <.",
        interviewPrep: "What is integer promotion in arithmetic expressions?"
      },
      {
        day: 9,
        title: "Decision Making: if and if-else",
        topic: "Conditional Branching & Boolean Evaluation",
        explanation: "In C, 0 is false and any non-zero value is true. Master branching logic.",
        codeTask: "Determine whether a given year is a Leap Year using correct leap year rules.",
        practiceProblem: "Find the maximum of three numbers using nested if-else statements.",
        interviewPrep: "What does the expression 'if (x = 5)' do compared to 'if (x == 5)'?"
      },
      {
        day: 10,
        title: "Ternary Operator (? :)",
        topic: "Inline Conditional Expressions",
        explanation: "Write concise, readable conditional expressions for variable assignments.",
        codeTask: "Assign passing or failing status based on marks in a single line using the ternary operator.",
        practiceProblem: "Find the absolute value of a number using the conditional operator.",
        interviewPrep: "Can the ternary operator be used as an l-value in C?"
      },
      {
        day: 11,
        title: "Multi-Way Branching: switch-case",
        topic: "switch, case, break, default & Fall-Through",
        explanation: "Understand jump tables generated by switch statements and when fall-through is useful.",
        codeTask: "Build a day-of-the-week scheduler using switch-case.",
        practiceProblem: "Implement a menu-driven unit converter.",
        interviewPrep: "Why can't floats or strings be used in a switch-case statement in C?"
      },
      {
        day: 12,
        title: "While Loops & Loop Invariants",
        topic: "Pre-Condition Entry Loops",
        explanation: "Use while loops when the number of iterations depends on runtime conditions or user input.",
        codeTask: "Reverse an integer (e.g. 12345 -> 54321) using a while loop.",
        practiceProblem: "Check if a number is a Palindrome number.",
        interviewPrep: "What is the difference between an entry-controlled and exit-controlled loop?"
      },
      {
        day: 13,
        title: "Do-While Loops: Exit-Controlled Iteration",
        topic: "do { ... } while(condition);",
        explanation: "Ensure the loop body executes at least once, ideal for interactive menu prompts.",
        codeTask: "Create an interactive input menu that loops until the user enters 0 to exit.",
        practiceProblem: "Calculate the sum of user-entered numbers until a negative number is entered.",
        interviewPrep: "When should you prefer do-while over while in production C code?"
      },
      {
        day: 14,
        title: "For Loops & Nested Loop Patterns",
        topic: "Initialization, Condition, and Step Expressions",
        explanation: "Master the structure of for loops and nest them to output 2D grids and patterns.",
        codeTask: "Print an equilateral pyramid of asterisks with N rows.",
        practiceProblem: "Print Pascal's Triangle using nested for loops.",
        interviewPrep: "Is it valid to omit all three expressions in 'for(;;)'?"
      },
      {
        day: 15,
        title: "Jump Statements & Phase 1 Review",
        topic: "break, continue, goto & return",
        explanation: "Understand loop control flow and why goto is generally avoided except for kernel cleanup blocks.",
        codeTask: "Implement prime number detection up to N using break for early exit.",
        practiceProblem: "Write a program that prints numbers from 1 to 50 skipping all multiples of 3 using continue.",
        interviewPrep: "When is 'goto' considered acceptable in modern C development (e.g. Linux kernel)?"
      }
    ]
  },
  {
    stageNumber: 2,
    title: "Phase 2: Arrays, Strings, Functions & Modular C",
    duration: "Days 16 to 30",
    summary: "Move from basic control flow to memory collections: 1D and 2D arrays, null-terminated strings, function prototypes, and recursion.",
    weeklyGoal: "Build modular multi-function programs with safe buffer handling and recursive algorithms.",
    days: [
      {
        day: 16,
        title: "One-Dimensional Arrays: Memory Contiguity",
        topic: "Array Declaration, Indexing, and Out-of-Bounds Dangers",
        explanation: "Understand that arrays in C are contiguous blocks of memory with 0-indexed offsets.",
        codeTask: "Find the maximum, minimum, and average of an array of 10 integers.",
        practiceProblem: "Remove duplicate elements from an array in-place.",
        interviewPrep: "Why does C not perform runtime array boundary checks?"
      },
      {
        day: 17,
        title: "Searching in Arrays: Linear vs Binary Search",
        topic: "Sequential Search vs O(log N) Divide & Conquer",
        explanation: "Learn how sorting an array enables high-speed binary search.",
        codeTask: "Implement recursive binary search on a sorted integer array.",
        practiceProblem: "Count occurrences of an element in an array using binary search bounds.",
        interviewPrep: "What is the time complexity of binary search vs linear search?"
      },
      {
        day: 18,
        title: "Sorting Algorithms in C: Bubble & Selection Sort",
        topic: "In-Place Array Sorting Mechanics",
        explanation: "Implement classical sorting algorithms to sort data in ascending and descending order.",
        codeTask: "Implement Bubble Sort with an early-exit flag if the array is already sorted.",
        practiceProblem: "Implement Selection Sort and compare swap counts with Bubble Sort.",
        interviewPrep: "What is the best-case time complexity of an optimized Bubble Sort?"
      },
      {
        day: 19,
        title: "Two-Dimensional Arrays & Matrices",
        topic: "Row-Major Memory Order & Matrix Math",
        explanation: "Understand how 2D arrays are flattened in physical RAM into row-major order.",
        codeTask: "Compute matrix addition and matrix multiplication for two 3x3 matrices.",
        practiceProblem: "Compute the Transpose of a matrix in-place.",
        interviewPrep: "How does the compiler compute the memory address of arr[i][j]?"
      },
      {
        day: 20,
        title: "Strings in C: Null Terminator ('\\0')",
        topic: "Character Arrays vs Pointer to Literal",
        explanation: "Learn that strings in C are simply character arrays ending with the null byte '\\0'.",
        codeTask: "Write your own version of strlen() without using any library headers.",
        practiceProblem: "Reverse a string in-place without using a second buffer.",
        interviewPrep: "Why is the null character ('\\0') essential in C strings?"
      },
      {
        day: 21,
        title: "The <string.h> Standard Library",
        topic: "strlen, strcpy, strncpy, strcmp, strcat",
        explanation: "Master standard string manipulation functions and understand buffer overflow risks.",
        codeTask: "Concatenate two strings and compare them alphabetically using strcmp.",
        practiceProblem: "Safely copy user input using strncpy and manually ensure null-termination.",
        interviewPrep: "Why should you prefer strncpy over strcpy in production code?"
      },
      {
        day: 22,
        title: "String Algorithms & Palindrome Checking",
        topic: "Two-Pointer Technique on Strings",
        explanation: "Use two pointers moving inward to test palindrome properties and anagrams.",
        codeTask: "Check if a string is a palindrome ignoring case and spaces.",
        practiceProblem: "Count vowels, consonants, digits, and spaces in a given sentence.",
        interviewPrep: "How do you check if two strings are anagrams of each other in O(N) time?"
      },
      {
        day: 23,
        title: "Functions: Prototypes, Definitions & Call Stack",
        topic: "Function Signatures, Stack Frames & Scope",
        explanation: "Break programs into small, testable, modular functions with clear return values.",
        codeTask: "Create a modular math utility library with prototypes at top and definitions at bottom.",
        practiceProblem: "Pass arrays to functions and demonstrate how the array decays into a pointer.",
        interviewPrep: "What happens to local variables when a function returns?"
      },
      {
        day: 24,
        title: "Parameter Passing: Pass-by-Value",
        topic: "Call Stack Copying vs Reference Semantics",
        explanation: "Understand why C only supports pass-by-value, and how passing pointers simulates reference semantics.",
        codeTask: "Write a swap function with integers and observe why pass-by-value fails to modify caller variables.",
        practiceProblem: "Write a function that calculates both area and perimeter of a rectangle.",
        interviewPrep: "Does C support true pass-by-reference like C++ does?"
      },
      {
        day: 25,
        title: "Recursion: Base Cases & Stack Memory",
        topic: "Self-Referential Functions & Stack Overflow",
        explanation: "Learn how recursion solves divide-and-conquer problems, and why a base case is mandatory.",
        codeTask: "Calculate factorial and Fibonacci numbers recursively.",
        practiceProblem: "Solve the classic Tower of Hanoi problem for N disks.",
        interviewPrep: "What causes a Stack Overflow error during deep recursion?"
      },
      {
        day: 26,
        title: "Storage Classes: auto, register, static, extern",
        topic: "Scope, Visibility & Lifetime of Variables",
        explanation: "Understand where variables live in memory and how long they persist.",
        codeTask: "Demonstrate a static local variable retaining its value across multiple function calls.",
        practiceProblem: "Share a global variable between two .c files using the extern keyword.",
        interviewPrep: "What is the difference between declaring a variable and defining a variable?"
      },
      {
        day: 27,
        title: "Header Files & Multi-File Architecture",
        topic: ".h and .c Separation & Header Guards",
        explanation: "Structure real-world C projects into headers (.h) and implementation files (.c).",
        codeTask: "Split a project into math_utils.h, math_utils.c, and main.c, and compile them together.",
        practiceProblem: "Use #ifndef, #define, #endif header guards to prevent circular includes.",
        interviewPrep: "What is the role of the linker in multi-file compilation?"
      },
      {
        day: 28,
        title: "Command-Line Arguments: argc & argv",
        topic: "int main(int argc, char *argv[])",
        explanation: "Parse terminal arguments to create scriptable CLI tools like grep and cat.",
        codeTask: "Build a CLI tool that takes two numbers and an operator as arguments (e.g. ./calc 5 + 10).",
        practiceProblem: "Build a program that prints all environment variables or passed flags.",
        interviewPrep: "What is argv[0] guaranteed to contain?"
      },
      {
        day: 29,
        title: "Capstone Mini-Project: Terminal Calculator",
        topic: "Consolidate Syntax, Functions & Arrays",
        explanation: "Put together everything learned in Phases 1 & 2 into a complete terminal calculator.",
        codeTask: "Complete Project 1 from the projects curriculum.",
        practiceProblem: "Add memory recall (M+, M-, MR) functions to the calculator.",
        interviewPrep: "How do you handle floating-point precision comparisons in C?"
      },
      {
        day: 30,
        title: "Phase 2 Midterm Assessment & Code Review",
        topic: "Debugging, Refactoring & Performance Profiling",
        explanation: "Review common memory bugs, uninitialized variables, and compiler optimization flags.",
        codeTask: "Refactor messy procedural code into clean modular functions with const safety.",
        practiceProblem: "Take the 25-question Phase 2 milestone quiz.",
        interviewPrep: "What is the difference between undefined behavior, unspecified behavior, and implementation-defined behavior?"
      }
    ]
  },
  {
    stageNumber: 3,
    title: "Phase 3: Pointers Masterclass, Dynamic Memory & Structures",
    duration: "Days 31 to 45",
    summary: "Master the most critical topic in C: memory addresses, pointer arithmetic, heap allocation, structures, unions, and file handling.",
    weeklyGoal: "Fluently allocate, manipulate, and free dynamic memory structures without leaks or segmentation faults.",
    days: [
      {
        day: 31,
        title: "Pointers Fundamentals: & and * Operators",
        topic: "Memory Addressing, Hex Pointers & Dereferencing",
        explanation: "Understand that variables live at physical addresses in RAM and pointers store those addresses.",
        codeTask: "Print the address and value of a variable using & and * operators.",
        practiceProblem: "Swap two integer values using pointers (pass-by-reference).",
        interviewPrep: "What is the difference between the address-of operator (&) and the dereference operator (*)?"
      },
      {
        day: 32,
        title: "Pointer Arithmetic & Array Navigation",
        topic: "ptr + 1, Scaling by sizeof(type)",
        explanation: "Learn how adding 1 to an int* increments the memory address by 4 bytes, not 1 byte.",
        codeTask: "Traverse and print an array using only pointer arithmetic without [ ] brackets.",
        practiceProblem: "Implement your own custom strcpy function using pointers.",
        interviewPrep: "What happens when you subtract two pointers pointing to the same array?"
      },
      {
        day: 33,
        title: "Pointers & Arrays Equivalence",
        topic: "Array Decay: arr == &arr[0]",
        explanation: "Deep dive into how arrays decay into pointers when passed to functions.",
        codeTask: "Demonstrate that *(arr + i) is identical to arr[i] and i[arr].",
        practiceProblem: "Write a function that reverses an array in-place using two pointer iterators.",
        interviewPrep: "Why does sizeof(arr) return the full byte size on stack but 8 bytes inside a function?"
      },
      {
        day: 34,
        title: "Pointers to Pointers (Double Pointers)",
        topic: "int **ptr, Modifying Pointer Addresses",
        explanation: "Understand how double pointers allow functions to modify the caller's pointer address.",
        codeTask: "Allocate memory inside a helper function by passing a double pointer (int **p).",
        practiceProblem: "Create an array of strings (char *argv[]) using double pointers.",
        interviewPrep: "When is a pointer-to-pointer required in dynamic memory management?"
      },
      {
        day: 35,
        title: "Void Pointers & NULL Pointers",
        topic: "Generic Memory References & Safety Guards",
        explanation: "Learn how void* enables generic data handling and why NULL checks prevent crashes.",
        codeTask: "Write a generic memory print function that inspects bytes of any data type.",
        practiceProblem: "Implement a safe dereferencing wrapper macro.",
        interviewPrep: "What happens when you dereference a NULL pointer in C?"
      },
      {
        day: 36,
        title: "Dynamic Memory Allocation: malloc()",
        topic: "Heap vs Stack Memory & Allocation Verification",
        explanation: "Allocate memory on the heap at runtime when array dimensions are dynamic.",
        codeTask: "Allocate a dynamic integer array of size N entered by user and calculate sum.",
        practiceProblem: "Verify heap allocation failure by handling NULL returns.",
        interviewPrep: "Where does malloc allocate memory and how is it different from stack memory?"
      },
      {
        day: 37,
        title: "calloc(), realloc() & free()",
        topic: "Zero-Initialization, Heap Expansion & Deallocation",
        explanation: "Master calloc for zeroed memory and realloc for dynamically growing arrays.",
        codeTask: "Build a dynamically resizing array that doubles capacity when full.",
        practiceProblem: "Avoid the dangerous realloc bug by using a temporary pointer.",
        interviewPrep: "What is the danger of writing 'ptr = realloc(ptr, new_size)'?"
      },
      {
        day: 38,
        title: "Memory Leaks, Dangling Pointers & Valgrind",
        topic: "Valgrind Tooling, Use-After-Free & Double Free",
        explanation: "Learn how to use Valgrind to detect memory leaks and invalid reads/writes.",
        codeTask: "Write a function with a memory leak, profile it, and fix it cleanly.",
        practiceProblem: "Implement safe_free(&ptr) that frees memory and sets pointer to NULL.",
        interviewPrep: "What is the difference between a memory leak and a dangling pointer?"
      },
      {
        day: 39,
        title: "Structures in C: struct & typedef",
        topic: "User-Defined Heterogeneous Types",
        explanation: "Group related variables of different types into a cohesive structure.",
        codeTask: "Create a Student struct with id, name, and gpa, and print its details.",
        practiceProblem: "Pass structures to functions by const pointer for optimal speed.",
        interviewPrep: "Why is passing structures by pointer more efficient than passing by value?"
      },
      {
        day: 40,
        title: "Structure Padding, Alignment & Packing",
        topic: "Memory Alignment & __attribute__((packed))",
        explanation: "Understand why sizeof(struct) is often larger than the sum of its members.",
        codeTask: "Demonstrate struct padding by reordering fields to save 4 to 8 bytes per instance.",
        practiceProblem: "Use GCC __attribute__((packed)) and observe byte size changes.",
        interviewPrep: "Why do compilers add padding bytes inside structures?"
      },
      {
        day: 41,
        title: "Unions & Bit-Fields",
        topic: "Shared Memory Allocations & Hardware Flags",
        explanation: "Use unions to store mutually exclusive data types in the exact same memory space.",
        codeTask: "Create a union to inspect individual bytes of a 32-bit integer.",
        practiceProblem: "Define a packed bit-field for hardware register flags.",
        interviewPrep: "What is the difference between a struct and a union in memory layout?"
      },
      {
        day: 42,
        title: "Enumerations (enum) & typedef Best Practices",
        topic: "Named Integer Constants & Code Readability",
        explanation: "Use enums to replace magic numbers with clean, self-documenting code.",
        codeTask: "Define an enum for HTTP status codes (200, 404, 500) and handle them in a switch statement.",
        practiceProblem: "Create a state machine using enums and function pointers.",
        interviewPrep: "What are the advantages of using enum over #define constants?"
      },
      {
        day: 43,
        title: "File Handling: Text Files (fopen, fclose)",
        topic: "File Streams, Modes ('r', 'w', 'a'), fprintf & fscanf",
        explanation: "Persist program data to external text files on disk.",
        codeTask: "Read a text file line-by-line using fgets() and count word occurrences.",
        practiceProblem: "Write user log messages with timestamps into an append-only file ('a').",
        interviewPrep: "Why is it critical to check if fopen() returns NULL?"
      },
      {
        day: 44,
        title: "File Handling: Binary Files (fread, fwrite)",
        topic: "Binary Serialization & fseek / ftell Navigation",
        explanation: "Directly serialize structures to disk in high-speed binary mode.",
        codeTask: "Write an array of structures to a binary file and read them back.",
        practiceProblem: "Seek to the 5th record in a binary file using fseek(fp, 5 * sizeof(struct), SEEK_SET).",
        interviewPrep: "What are the advantages of binary file I/O over text file I/O?"
      },
      {
        day: 45,
        title: "Phase 3 Capstone: File-Based Student Database",
        topic: "Consolidate Pointers, Structs, Dynamic Memory & Files",
        explanation: "Build a complete persistent database application storing records in binary format.",
        codeTask: "Complete Project 10 from the practical projects curriculum.",
        practiceProblem: "Implement a search-by-ID feature reading directly from binary file.",
        interviewPrep: "How do relational databases store records on disk using pages and structs?"
      }
    ]
  },
  {
    stageNumber: 4,
    title: "Phase 4: Data Structures, Algorithms & Systems Programming",
    duration: "Days 46 to 60",
    summary: "Implement fundamental data structures from scratch in C: Linked Lists, Stacks, Queues, Trees, and prepare for top-tier technical interviews.",
    weeklyGoal: "Master pointer-based data structures, solve complex algorithmic challenges, and complete a final capstone.",
    days: [
      {
        day: 46,
        title: "Singly Linked Lists: Node Creation & Traversal",
        topic: "Dynamic Node Chaining with Pointers",
        explanation: "Build the foundational dynamic data structure using self-referential structs.",
        codeTask: "Implement insert_at_head and traverse_list for a singly linked list.",
        practiceProblem: "Implement insert_at_tail and count total nodes in O(N).",
        interviewPrep: "What are the trade-offs between arrays and linked lists?"
      },
      {
        day: 47,
        title: "Linked Lists: Deletion, Search & Inversion",
        topic: "Pointer Rewiring & Memory Deallocation",
        explanation: "Safely delete nodes from a linked list without leaking memory or losing references.",
        codeTask: "Reverse a singly linked list iteratively in O(N) time and O(1) space.",
        practiceProblem: "Detect if a linked list contains a cycle using Floyd's Tortoise and Hare algorithm.",
        interviewPrep: "How do you reverse a linked list using 3 pointers (prev, curr, next)?"
      },
      {
        day: 48,
        title: "Doubly Linked Lists & Circular Lists",
        topic: "Bidirectional Pointers (prev, next)",
        explanation: "Implement doubly linked lists for fast O(1) predecessor lookups.",
        codeTask: "Implement a doubly linked list with forward and backward traversal.",
        practiceProblem: "Implement a circular buffer queue using circular linked lists.",
        interviewPrep: "When is a doubly linked list preferred over a singly linked list?"
      },
      {
        day: 49,
        title: "Stack Data Structure (LIFO) in C",
        topic: "Push, Pop, Peek using Arrays & Linked Lists",
        explanation: "Implement Last-In First-Out stacks for expression evaluation and undo buffers.",
        codeTask: "Implement a dynamic stack with push, pop, and isEmpty operations.",
        practiceProblem: "Validate balanced parentheses in a string (e.g. '{[()]}') using a stack.",
        interviewPrep: "How does the OS call stack resemble the Stack data structure?"
      },
      {
        day: 50,
        title: "Queue Data Structure (FIFO) in C",
        topic: "Enqueue, Dequeue & Circular Queues",
        explanation: "Implement First-In First-Out queues for task scheduling and packet buffering.",
        codeTask: "Implement a circular queue using an array with front and rear pointers.",
        practiceProblem: "Implement a priority queue using an array of linked lists.",
        interviewPrep: "Why does a linear queue suffer from false overflow, and how does a circular queue fix it?"
      },
      {
        day: 51,
        title: "Binary Search Trees (BST): Insertion & Search",
        topic: "Hierarchical Tree Structures with Left & Right Pointers",
        explanation: "Build a Binary Search Tree where left child < root < right child.",
        codeTask: "Implement insert_node and search_node in a BST recursively.",
        practiceProblem: "Find the minimum and maximum value in a Binary Search Tree.",
        interviewPrep: "What is the worst-case time complexity of a BST search, and how do AVL/Red-Black trees fix it?"
      },
      {
        day: 52,
        title: "Tree Traversals: In-Order, Pre-Order, Post-Order",
        topic: "Depth-First Search (DFS) on Trees",
        explanation: "Traverse tree nodes systematically; notice in-order traversal produces sorted output.",
        codeTask: "Implement recursive In-Order, Pre-Order, and Post-Order traversals.",
        practiceProblem: "Calculate the height and total node count of a binary tree.",
        interviewPrep: "Why does in-order traversal of a BST yield elements in ascending order?"
      },
      {
        day: 53,
        title: "Advanced Sorting: QuickSort & MergeSort in C",
        topic: "O(N log N) Divide and Conquer",
        explanation: "Implement high-performance recursive sorting algorithms.",
        codeTask: "Implement QuickSort with Lomuto or Hoare partitioning.",
        practiceProblem: "Use standard C qsort() with a custom struct comparator function.",
        interviewPrep: "Why is QuickSort preferred over MergeSort for arrays in C?"
      },
      {
        day: 54,
        title: "Preprocessor Macros & Directives",
        topic: "#define, #ifdef, #ifndef, ##, #",
        explanation: "Master compile-time metaprogramming, stringification (#), and token pasting (##).",
        codeTask: "Write safe macros for MIN, MAX, and DEBUG_PRINT with file/line telemetry.",
        practiceProblem: "Demonstrate why parentheses are mandatory in '#define SQUARE(x) ((x) * (x))'.",
        interviewPrep: "What are the pitfalls of using macros compared to inline functions?"
      },
      {
        day: 55,
        title: "Debugging with GDB & Memory Sanitizers",
        topic: "GDB Breakpoints, Backtraces & AddressSanitizer (-fsanitize=address)",
        explanation: "Learn how professional engineers track down segmentation faults and memory corruption.",
        codeTask: "Compile with -g and step through a program in GDB to inspect variable state.",
        practiceProblem: "Compile with -fsanitize=address and detect an off-by-one array buffer overflow.",
        interviewPrep: "How do you inspect the call stack when a program crashes with SIGSEGV in GDB?"
      },
      {
        day: 56,
        title: "Signal Handling & POSIX System Calls",
        topic: "signal(SIGINT, handler), fork(), and IPC Foundations",
        explanation: "Handle operating system interrupts like Ctrl+C and understand process spawning.",
        codeTask: "Write a program that handles SIGINT cleanly, saving progress before exiting.",
        practiceProblem: "Demonstrate fork() and waitpid() in a Linux/POSIX environment.",
        interviewPrep: "What is the purpose of signal handlers in systems programming?"
      },
      {
        day: 57,
        title: "Technical Interview Deep Dive: Pointer Puzzles",
        topic: "Complex Pointer Declarations & Array Decays",
        explanation: "Solve tricky pointer puzzles commonly asked by Google, Microsoft, and embedded firms.",
        codeTask: "Deconstruct complex pointer declarations like 'int (*(*foo)(void))[3]'.",
        practiceProblem: "Solve 5 top pointer output prediction challenges.",
        interviewPrep: "How do you parse complex C declarations using the clockwise/spiral rule?"
      },
      {
        day: 58,
        title: "Technical Interview Deep Dive: Memory & Algorithmic Challenges",
        topic: "Bit Hacks, Endianness & Memory Alignment",
        explanation: "Practice live coding interview problems with strict time and space complexity constraints.",
        codeTask: "Implement memmove() handling overlapping source and destination memory regions.",
        practiceProblem: "Implement a circular buffer ring without memory locks.",
        interviewPrep: "What is the difference between memcpy() and memmove()?"
      },
      {
        day: 59,
        title: "Final Capstone Project: Secure Banking Core",
        topic: "Full-Stack Procedural Architecture",
        explanation: "Complete Project 8: Secure Banking Core with transaction ledgers and audit records.",
        codeTask: "Complete full implementation with input validation and ledger file exports.",
        practiceProblem: "Add account search by name using binary search.",
        interviewPrep: "How do financial systems prevent race conditions during concurrent account debits?"
      },
      {
        day: 60,
        title: "Course Graduation & Certification Exam",
        topic: "Mastery Assessment & Career Portfolio",
        explanation: "Take the 50-question comprehensive certification exam covering all 45 topics.",
        codeTask: "Review all 10 completed projects and prepare your GitHub C portfolio.",
        practiceProblem: "Complete the final assessment and claim your Code From Zero C Certificate.",
        interviewPrep: "Congratulations! You are now prepared for junior systems, embedded, and C engineering roles."
      }
    ]
  }
];

// ==========================================
// 4. OUTPUT PREDICTION QUESTIONS
// ==========================================
export const C_OUTPUT_PREDICTIONS: COutputPrediction[] = [
  {
    id: "pred-1",
    title: "Pointer Arithmetic & Array Offsets",
    topic: "Pointers & Arrays",
    code: `#include <stdio.h>
int main(void) {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    printf("%d, ", *ptr++);
    printf("%d, ", *++ptr);
    printf("%d\\n", ++*ptr);
    return 0;
}`,
    options: [
      "A. 10, 20, 30",
      "B. 10, 30, 31",
      "C. 10, 20, 21",
      "D. 20, 30, 31"
    ],
    correctAnswer: 1, // B
    explanation: "*ptr++ evaluates *ptr (10), then increments pointer to point at arr[1] (20). *++ptr increments pointer first to point at arr[2] (30), then dereferences (30). ++*ptr dereferences current pointer (arr[2] which is 30) and increments the value to 31. Result is 10, 30, 31."
  },
  {
    id: "pred-2",
    title: "Static Local Variable Persistence",
    topic: "Storage Classes",
    code: `#include <stdio.h>
int func(void) {
    static int x = 5;
    x += 3;
    return x;
}
int main(void) {
    printf("%d, ", func());
    printf("%d\\n", func());
    return 0;
}`,
    options: [
      "A. 8, 8",
      "B. 8, 11",
      "C. 5, 8",
      "D. 5, 5"
    ],
    correctAnswer: 1, // B
    explanation: "Static variables are initialized once at program startup. In call 1, x becomes 5 + 3 = 8. In call 2, x retains 8, and becomes 8 + 3 = 11. Output is 8, 11."
  },
  {
    id: "pred-3",
    title: "Integer Division & Promotion",
    topic: "Types & Operators",
    code: `#include <stdio.h>
int main(void) {
    int a = 5, b = 2;
    float res = a / b;
    printf("%.2f\\n", res);
    return 0;
}`,
    options: [
      "A. 2.50",
      "B. 2.00",
      "C. 2",
      "D. 0.00"
    ],
    correctAnswer: 1, // B
    explanation: "Both a and b are integers, so integer division a / b evaluates to 2 (truncating decimals) before being promoted and assigned to the float 'res'. Thus res is 2.00. To get 2.50, at least one operand must be cast: (float)a / b."
  },
  {
    id: "pred-4",
    title: "Character Pointer vs Array String Mutation",
    topic: "Strings & Memory",
    code: `#include <stdio.h>
int main(void) {
    char s[] = "code";
    s[0] = 'm';
    printf("%s\\n", s);
    return 0;
}`,
    options: [
      "A. Segmentation Fault",
      "B. mode",
      "C. code",
      "D. Compiler Error"
    ],
    correctAnswer: 1, // B
    explanation: "'char s[]' creates a mutable array on the stack initialized with the letters 'c', 'o', 'd', 'e', '\\0'. Changing s[0] to 'm' is valid and prints 'mode'. (Note: if it were char *s = \"code\", it would cause a Segmentation Fault)."
  }
];

// ==========================================
// 5. DEBUGGING EXERCISES
// ==========================================
export const C_DEBUGGING_CHALLENGES: CDebuggingChallenge[] = [
  {
    id: "debug-1",
    title: "Fix the Dangling Pointer Bug",
    topic: "Memory Management",
    buggyCode: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *ptr = (int*)malloc(sizeof(int));
    *ptr = 100;
    printf("Value: %d\\n", *ptr);

    free(ptr);
    // BUG: Accessing memory after free (use-after-free)
    printf("Re-accessing value: %d\\n", *ptr);
    return 0;
}`,
    bugDescription: "The program reads *ptr after calling free(ptr). This is a classic Use-After-Free bug leading to undefined behavior or security vulnerabilities.",
    hints: [
      "Never read or write to a pointer after calling free().",
      "Set ptr = NULL immediately after freeing it to prevent accidental reads."
    ],
    correctedCode: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int *ptr = (int*)malloc(sizeof(int));
    if (ptr == NULL) return 1;
    *ptr = 100;
    printf("Value: %d\\n", *ptr);

    // Properly deallocate and nullify
    free(ptr);
    ptr = NULL;

    if (ptr != NULL) {
        printf("Value: %d\\n", *ptr);
    } else {
        printf("Pointer safely released and verified NULL.\\n");
    }
    return 0;
}`,
    explanation: "After calling free(ptr), the memory block is returned to the OS heap manager. Setting ptr to NULL prevents accidental dangling pointer dereferencing."
  },
  {
    id: "debug-2",
    title: "Fix the Buffer Overflow & Missing Null Terminator",
    topic: "Strings & Arrays",
    buggyCode: `#include <stdio.h>
#include <string.h>

int main(void) {
    char greeting[5];
    // BUG: "Hello" requires 6 bytes (5 chars + '\\0' terminator)
    strcpy(greeting, "Hello");
    printf("%s\\n", greeting);
    return 0;
}`,
    bugDescription: "The string \"Hello\" contains 5 characters plus 1 mandatory '\\0' terminator (6 bytes total). Storing it in char greeting[5] overflows the stack array boundary.",
    hints: [
      "Remember that every C string needs 1 extra byte for the null terminator '\\0'.",
      "Increase greeting array size to at least 6 bytes."
    ],
    correctedCode: `#include <stdio.h>
#include <string.h>

int main(void) {
    // Correct size: at least 6 bytes for "Hello\\0"
    char greeting[6];
    strncpy(greeting, "Hello", sizeof(greeting));
    greeting[sizeof(greeting) - 1] = '\\0'; // Ensure termination
    printf("%s\\n", greeting);
    return 0;
}`,
    explanation: "In C, string storage must always account for the terminating null byte ('\\0'). Off-by-one string buffer overflows are one of the most common causes of crashes and security exploits."
  },
  {
    id: "debug-3",
    title: "Fix the Scanf Missing Address Operator Bug",
    topic: "Input & Memory",
    buggyCode: `#include <stdio.h>

int main(void) {
    int age;
    printf("Enter your age: ");
    // BUG: Missing & before age
    scanf("%d", age);
    printf("You are %d years old.\\n", age);
    return 0;
}`,
    bugDescription: "scanf expects a memory address to write data into. Passing 'age' passes the uninitialized value of age (garbage) as a pointer address, causing a Segmentation Fault.",
    hints: [
      "scanf needs to know WHERE to store the value in memory.",
      "Use the address-of operator '&'."
    ],
    correctedCode: `#include <stdio.h>

int main(void) {
    int age = 0;
    printf("Enter your age: ");
    if (scanf("%d", &age) == 1) {
        printf("You are %d years old.\\n", age);
    } else {
        printf("Invalid input entered.\\n");
    }
    return 0;
}`,
    explanation: "Passing '&age' provides the memory location of the integer variable so scanf can write the scanned input directly into it."
  }
];

// ==========================================
// 6. C PLAYGROUND TEMPLATES
// ==========================================
export const C_PLAYGROUND_TEMPLATES: CPlaygroundTemplate[] = [
  {
    id: "c-tmpl-hello",
    name: "1. Hello World & System Info",
    category: "Basics",
    description: "Standard ANSI C program with data types and formatted terminal output.",
    code: `#include <stdio.h>

int main(void) {
    printf("=========================================\\n");
    printf("   HELLO FROM C ON CODE FROM ZERO!       \\n");
    printf("=========================================\\n");
    
    int age = 22;
    double gpa = 3.94;
    char grade = 'A';
    
    printf("Student Info:\\n");
    printf("  Age:   %d years\\n", age);
    printf("  GPA:   %.2f / 4.00\\n", gpa);
    printf("  Grade: %c (Honors)\\n", grade);
    
    return 0;
}`
  },
  {
    id: "c-tmpl-pointers",
    name: "2. Pointer Arithmetic & Memory",
    category: "Pointers",
    description: "Inspecting hexadecimal RAM addresses and swapping values with pointers.",
    code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main(void) {
    int x = 100, y = 500;
    
    printf("Before Swap: x = %d, y = %d\\n", x, y);
    printf("Address of x: %p\\n", (void*)&x);
    printf("Address of y: %p\\n", (void*)&y);
    
    swap(&x, &y);
    printf("After Swap:  x = %d, y = %d\\n", x, y);
    
    return 0;
}`
  },
  {
    id: "c-tmpl-malloc",
    name: "3. Dynamic Heap Allocation",
    category: "Memory",
    description: "Allocating and freeing dynamic memory arrays with malloc and free.",
    code: `#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 5;
    int *arr = (int*)malloc(n * sizeof(int));
    
    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return 1;
    }
    
    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }
    
    printf("Dynamic Heap Array Elements:\\n");
    for (int i = 0; i < n; i++) {
        printf("  arr[%d] = %d (address: %p)\\n", i, arr[i], (void*)&arr[i]);
    }
    
    free(arr);
    arr = NULL;
    printf("Memory freed successfully!\\n");
    
    return 0;
}`
  },
  {
    id: "c-tmpl-struct",
    name: "4. Structures & Typedef",
    category: "Structures",
    description: "Defining custom data types and working with pointer access (->).",
    code: `#include <stdio.h>

typedef struct {
    int id;
    char title[40];
    double price;
} Book;

void print_book(const Book *b) {
    printf("Book #%d: '%s' - $%.2f\\n", b->id, b->title, b->price);
}

int main(void) {
    Book b1 = { 101, "The C Programming Language", 49.99 };
    Book b2 = { 102, "Operating Systems Concepts", 79.50 };
    
    print_book(&b1);
    print_book(&b2);
    
    return 0;
}`
  },
  {
    id: "c-tmpl-bits",
    name: "5. Bitwise Operations & Flags",
    category: "Systems",
    description: "Bit masks, shifts, and testing binary representation.",
    code: `#include <stdio.h>

void print_binary(unsigned int n) {
    printf("Binary for %u: ", n);
    for (int i = 7; i >= 0; i--) {
        printf("%d", (n >> i) & 1);
    }
    printf("\\n");
}

int main(void) {
    unsigned int a = 12; // 00001100
    unsigned int b = 10; // 00001010
    
    print_binary(a);
    print_binary(b);
    
    printf("a & b (AND): %u\\n", a & b);
    printf("a | b (OR):  %u\\n", a | b);
    printf("a ^ b (XOR): %u\\n", a ^ b);
    printf("a << 1:      %u\\n", a << 1);
    
    return 0;
}`
  }
];
