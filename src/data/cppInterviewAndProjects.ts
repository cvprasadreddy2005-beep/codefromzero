// CODE FROM ZERO — COMPREHENSIVE C++ INTERVIEW, PROJECTS, PRACTICE & DEBUGGING BANK
// Includes 10 Interview Categories, 20 Real-World Projects, Practice Bank, Debugging Exercises, and Playground Templates

export interface CppInterviewQuestion {
  id: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  question: string;
  shortAnswer: string;
  detailedExplanation: string;
  codeExample?: string;
  followUpQuestion: string;
  followUpAnswer: string;
  commonMistakes?: string[];
}

export interface CppProjectItem {
  id: string;
  number: number;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  conceptsUsed: string[];
  features: string[];
  code: string;
  expectedOutput: string;
  testCases: string[];
  extensions: string[];
}

export interface CppPracticeProblem {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  problemStatement: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  sampleInput: string;
  sampleOutput: string;
  sampleExplanation: string;
  hint: string;
  solutionCode: string;
  solutionExplanation: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export interface CppDebuggingExercise {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  buggyCode: string;
  expectedBehavior: string;
  bugExplanation: string;
  correctedCode: string;
  whyCorrectionWorks: string;
}

export interface CppOutputPrediction {
  id: string;
  title: string;
  code: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CppPlaygroundTemplate {
  id: string;
  name: string;
  description: string;
  standard: string;
  code: string;
  expectedOutput: string;
}

// ============================================================================
// 1. C++ INTERVIEW QUESTION BANK (10 CATEGORIES)
// ============================================================================
export const CPP_INTERVIEW_CATEGORIES: { id: string; name: string; count: number }[] = [
  { id: 'cat-beginner', name: 'Beginner Fundamentals', count: 12 },
  { id: 'cat-oop', name: 'Object-Oriented Programming (OOP)', count: 14 },
  { id: 'cat-pointers', name: 'Pointers, References & Memory', count: 12 },
  { id: 'cat-stl', name: 'Standard Template Library (STL)', count: 12 },
  { id: 'cat-templates', name: 'Templates & Generic Code', count: 10 },
  { id: 'cat-modern', name: 'Modern C++ (C++17 & C++20)', count: 12 },
  { id: 'cat-dsa', name: 'Data Structures & Algorithms', count: 12 },
  { id: 'cat-concurrency', name: 'Concurrency & Multithreading', count: 8 },
  { id: 'cat-intermediate', name: 'Intermediate Mechanics', count: 10 },
  { id: 'cat-debugging', name: 'Debugging & Performance', count: 10 }
];

export const CPP_INTERVIEW_QUESTIONS: CppInterviewQuestion[] = [
  // Category: Beginner
  {
    id: 'cpp-iq-1',
    category: 'cat-beginner',
    difficulty: 'Beginner',
    question: 'What is C++ and how does it differ fundamentally from C?',
    shortAnswer: 'C++ is a multi-paradigm language developed by Bjarne Stroustrup as an extension of C that introduces OOP, templates, namespaces, and RAII while preserving C\'s raw performance and hardware control.',
    detailedExplanation: 'C is a procedural programming language with manual memory management and no object-oriented constructs. C++ adds classes, objects, inheritance, polymorphism, generic programming via templates, exception handling, and standard library containers (STL) while adhering to the zero-overhead principle: what you do not use, you do not pay for.',
    codeExample: '#include <iostream>\n\nint main() {\n    // C++ type-safe stream output\n    std::cout << "Hello C++!" << std::endl;\n    return 0;\n}',
    followUpQuestion: 'Can any valid C program compile with a C++ compiler without modifications?',
    followUpAnswer: 'No. While C++ is largely backwards-compatible with C, differences exist: C allows implicit void* casting (e.g. malloc), permits unprototyped functions, and allows assigning to variables named class or new, which are reserved keywords in C++.',
    commonMistakes: ['Thinking C++ is just C with classes', 'Believing C++ is slower than C by default']
  },
  {
    id: 'cpp-iq-2',
    category: 'cat-beginner',
    difficulty: 'Beginner',
    question: 'What is the purpose of the std namespace and why is "using namespace std;" discouraged in headers?',
    shortAnswer: 'Namespaces prevent name collisions in large programs. "using namespace std;" in header files pollutes the global namespace of any translation unit that includes the header, causing silent collisions.',
    detailedExplanation: 'The C++ standard library places all its identifiers inside namespace std. If you write "using namespace std;" inside a header file, any file including that header imports hundreds of symbols (like std::count, std::min, std::max, std::size). If your own code defines a function named count or size, you get ambiguous symbol compilation errors.',
    codeExample: '// Preferred practice in headers and clean code:\n#include <iostream>\n#include <string>\n\nvoid greet(const std::string& name) {\n    std::cout << "Hello, " << name << "\\n";\n}',
    followUpQuestion: 'How can you selectively import symbols without polluting everything?',
    followUpAnswer: 'Use explicit scope resolution (std::cout) or localized using-declarations inside function scopes (e.g., using std::cout; using std::string;) inside the body of a specific function.',
    commonMistakes: ['Writing "using namespace std;" at the top of shared .h header files']
  },
  {
    id: 'cpp-iq-3',
    category: 'cat-beginner',
    difficulty: 'Beginner',
    question: 'What is the difference between passing by value, passing by reference, and passing by const reference?',
    shortAnswer: 'Pass by value creates a full copy of the argument. Pass by reference (&) passes an alias to the original object allowing modification without copying. Pass by const reference (const &) passes by alias without copying and prevents accidental modification.',
    detailedExplanation: 'For primitive types (int, char, double), pass by value is cheap and fast because they fit inside CPU registers. For heavy objects (std::string, std::vector, custom classes), pass by value triggers expensive dynamic memory allocations and copy constructors. Passing by const reference avoids copying overhead while ensuring immutability.',
    codeExample: 'void printName(const std::string& name); // Efficient, read-only\nvoid increment(int& count);            // Modifies original\nvoid processVal(int val);              // Cheap copy of primitive',
    followUpQuestion: 'When would you prefer pass-by-value over const reference for non-primitives?',
    followUpAnswer: 'When the function needs its own copy anyway to store or manipulate internally, or when leveraging move semantics (std::move) in constructors (sink parameters).',
    commonMistakes: ['Passing large std::vector or std::string by value in loops', 'Modifying parameters passed by reference unexpectedly']
  },
  {
    id: 'cpp-iq-4',
    category: 'cat-beginner',
    difficulty: 'Beginner',
    question: 'What is the difference between const and constexpr in Modern C++?',
    shortAnswer: 'const guarantees that an object\'s value cannot be modified after initialization (run-time or compile-time). constexpr explicitly demands that the expression is evaluated at compile time.',
    detailedExplanation: 'A const variable can be initialized with a value known only at runtime (e.g. const int x = rand();). A constexpr variable must be initialized with a compile-time constant expression and can be used in contexts requiring compile-time constants such as array sizes, template arguments, and enum values.',
    codeExample: 'constexpr int square(int n) { return n * n; }\nconstexpr int SIZE = square(5); // 25 computed at compile time!\nint arr[SIZE]; // Valid in standard C++',
    followUpQuestion: 'What is consteval introduced in C++20?',
    followUpAnswer: 'consteval specifies an immediate function. Unlike constexpr (which can execute at runtime if given non-constant arguments), a consteval function MUST produce a compile-time constant, failing compilation if it cannot.',
    commonMistakes: ['Assuming const always evaluates at compile time']
  },

  // Category: OOP
  {
    id: 'cpp-iq-5',
    category: 'cat-oop',
    difficulty: 'Intermediate',
    question: 'Why should a base class destructor always be declared virtual when polymorphism is involved?',
    shortAnswer: 'If a base class destructor is not virtual, deleting a derived class object through a base class pointer causes undefined behavior, skipping the derived destructor and leaking resources.',
    detailedExplanation: 'When deleting an object via a Base* pointer, the compiler checks if ~Base() is virtual. If it is virtual, the call is dispatched through the vtable to the Derived destructor first, which cleans up derived resources, followed by the Base destructor. If non-virtual, only ~Base() executes, leaving any heap memory or file handles allocated in Derived leaked.',
    codeExample: 'class Base {\npublic:\n    virtual ~Base() { std::cout << "~Base\\n"; } // Safe!\n};\n\nclass Derived : public Base {\n    int* data;\npublic:\n    Derived() : data(new int[100]) {}\n    ~Derived() override {\n        delete[] data; // Cleans up properly\n        std::cout << "~Derived\\n";\n    }\n};',
    followUpQuestion: 'Is there any performance cost associated with making a destructor virtual?',
    followUpAnswer: 'Yes, it adds a vptr (virtual table pointer, 8 bytes on 64-bit systems) to the class if it doesn\'t already have one, and invokes dynamic dispatch during destruction, though this overhead is negligible compared to the memory leak it prevents.',
    commonMistakes: ['Omitting virtual on base class destructors with dynamic inheritance']
  },
  {
    id: 'cpp-iq-6',
    category: 'cat-oop',
    difficulty: 'Advanced',
    question: 'Explain the vtable (virtual method table) and vptr in C++. How does dynamic dispatch work?',
    shortAnswer: 'The compiler creates a static vtable for every class with virtual functions containing function pointers. Each object of that class contains a hidden vptr pointing to its class vtable. Dynamic dispatch resolves the function pointer at runtime.',
    detailedExplanation: 'When a class declares at least one virtual function, the compiler inserts a hidden pointer member called vptr into the class memory layout. During object construction, vptr is initialized to point to the virtual method table (vtable) of that class. When invoking ptr->virtualFunc(), the program dereferences ptr to find vptr, looks up the function pointer at the designated vtable index, and jumps to the derived implementation.',
    codeExample: 'class Shape {\npublic:\n    virtual void draw() = 0; // vtable index 0\n};\nclass Circle : public Shape {\npublic:\n    void draw() override { std::cout << "Circle::draw\\n"; }\n};\n// Runtime: shapePtr->vptr[0]() invokes Circle::draw',
    followUpQuestion: 'What is object slicing and how does it relate to virtual function dispatch?',
    followUpAnswer: 'Object slicing occurs when assigning a Derived object to a Base object by value (not by pointer or reference). The Derived portion is chopped off, only Base members are copied, and the vptr points to Base\'s vtable, disabling polymorphism.',
    commonMistakes: ['Catching polymorphic exceptions by value instead of const reference, causing slicing']
  },
  {
    id: 'cpp-iq-7',
    category: 'cat-oop',
    difficulty: 'Intermediate',
    question: 'What are the three access specifiers in C++ and how does protected inheritance differ from public inheritance?',
    shortAnswer: 'public (accessible from anywhere), private (accessible only within member functions and friends), protected (accessible within the class and derived classes). Public inheritance models IS-A; protected inheritance makes public and protected base members protected in the derived class.',
    detailedExplanation: 'In public inheritance, public members remain public and protected remain protected. In protected inheritance, both public and protected base members become protected in the derived class, hiding them from external callers while keeping them accessible to further subclasses. Private inheritance models HAS-A implemented in terms of.',
    codeExample: 'class Base {\npublic: int x;\nprotected: int y;\nprivate: int z;\n};\nclass Derived : public Base {\n    void test() { x = 1; y = 2; /* z inaccessible */ }\n};',
    followUpQuestion: 'What is the default inheritance type for struct vs class in C++?',
    followUpAnswer: 'In a struct, default member access and default inheritance are public. In a class, default member access and default inheritance are private.',
    commonMistakes: ['Confusing protected access with private access']
  },

  // Category: Pointers & Memory
  {
    id: 'cpp-iq-8',
    category: 'cat-pointers',
    difficulty: 'Intermediate',
    question: 'What is RAII (Resource Acquisition Is Initialization) and why is it central to C++?',
    shortAnswer: 'RAII binds the lifecycle of a resource (heap memory, mutex lock, file descriptor) to the lifetime of a stack object. Acquisition happens in the constructor, and deterministic release happens in the destructor.',
    detailedExplanation: 'In C, developers must manually call free() or fclose(), leading to memory leaks when exceptions or early returns occur. With RAII in C++, when an object goes out of scope (normal exit, break, return, or stack unwinding due to an exception), its destructor is guaranteed to run automatically. Standard types like std::unique_ptr, std::vector, std::lock_guard, and std::fstream all follow RAII.',
    codeExample: '#include <memory>\n#include <mutex>\n\nvoid safeOperation(std::mutex& mtx) {\n    std::lock_guard<std::mutex> lock(mtx); // Mutex locked\n    auto ptr = std::make_unique<int[]>(1000); // Heap allocated\n    // If an exception is thrown here, lock is unlocked and ptr memory is freed!\n} // Out of scope: everything cleaned up automatically',
    followUpQuestion: 'Can an exception thrown inside a destructor break RAII?',
    followUpAnswer: 'Yes, if a destructor throws an exception while another exception is already active during stack unwinding, std::terminate() is called immediately. Destructors in C++11 and later are implicitly noexcept.',
    commonMistakes: ['Manual new and delete instead of using RAII wrappers like std::unique_ptr']
  },
  {
    id: 'cpp-iq-9',
    category: 'cat-pointers',
    difficulty: 'Intermediate',
    question: 'Compare std::unique_ptr, std::shared_ptr, and std::weak_ptr.',
    shortAnswer: 'std::unique_ptr represents exclusive ownership (zero overhead, move-only). std::shared_ptr represents shared ownership via reference counting. std::weak_ptr provides a non-owning observer to break circular shared_ptr references.',
    detailedExplanation: 'std::unique_ptr has no memory overhead over a raw pointer and cannot be copied, only moved. std::shared_ptr maintains an atomic reference count on a control block; the resource is destroyed when the count drops to zero. std::weak_ptr references a shared_ptr without increasing its strong reference count; calling weak.lock() produces a valid shared_ptr if the resource is still alive.',
    codeExample: 'auto uPtr = std::make_unique<int>(42); // Exclusive\nauto sPtr1 = std::make_shared<std::string>("Shared");\nauto sPtr2 = sPtr1; // Ref count = 2\nstd::weak_ptr<std::string> wPtr = sPtr1; // Ref count still 2\nif (auto locked = wPtr.lock()) {\n    std::cout << *locked << "\\n";\n}',
    followUpQuestion: 'Why should you prefer std::make_shared over std::shared_ptr(new Type)?',
    followUpAnswer: 'std::make_shared performs a single combined heap allocation for both the user object and the reference counting control block, improving cache locality and reducing allocation overhead, while avoiding memory leaks if an exception occurs during argument evaluation.',
    commonMistakes: ['Creating circular shared_ptr references between nodes, resulting in permanent memory leaks']
  },

  // Category: STL
  {
    id: 'cpp-iq-10',
    category: 'cat-stl',
    difficulty: 'Intermediate',
    question: 'What is the internal implementation difference between std::map and std::unordered_map?',
    shortAnswer: 'std::map is implemented as a self-balancing Red-Black binary search tree with O(log N) operations and ordered keys. std::unordered_map is implemented as a Hash Table with average O(1) operations and unordered keys.',
    detailedExplanation: 'std::map requires keys to define operator< (Strict Weak Ordering). Iterating over std::map yields keys in sorted order. std::unordered_map requires a hash function (std::hash<Key>) and equality operator (==). In worst-case hash collisions, unordered_map operations degrade to O(N). Memory overhead is also higher in unordered_map due to bucket arrays.',
    codeExample: '#include <map>\n#include <unordered_map>\n\nstd::map<int, std::string> orderedMap; // Sorted by key, O(log N)\nstd::unordered_map<int, std::string> hashMap; // Hash table, O(1) avg',
    followUpQuestion: 'When would you deliberately choose std::map over std::unordered_map even if average time is slower?',
    followUpAnswer: 'When you need ordered data (e.g. range queries, finding elements lower_bound/upper_bound), guaranteed O(log N) worst-case time without sudden rehash pauses, or when keys lack a built-in hash specialization.',
    commonMistakes: ['Assuming std::unordered_map is ALWAYS faster than std::map for small datasets']
  },

  // Category: Modern C++
  {
    id: 'cpp-iq-11',
    category: 'cat-modern',
    difficulty: 'Advanced',
    question: 'What are Move Semantics and Rvalue References (&&)? Explain std::move.',
    shortAnswer: 'Move semantics transfers ownership of expensive heap resources from temporary (rvalue) objects to new objects without deep copying. std::move is an unconditional cast to an rvalue reference, signaling that the source can be pilfered.',
    detailedExplanation: 'An lvalue is an expression that has an identifiable memory location (variable name). An rvalue is a temporary value (literal or returned temporary). Rvalue references (Type&&) bind to temporary objects. By defining a move constructor and move assignment operator, a class can pilfer raw internal pointers from the source and set source pointers to nullptr in O(1) time instead of allocating fresh memory.',
    codeExample: 'std::vector<int> a(1000000, 7);\n// Move constructor invoked: pointer stolen in O(1) time!\nstd::vector<int> b = std::move(a);\n// "a" is now in a valid but unspecified empty state',
    followUpQuestion: 'Does std::move actually move any bytes or execute data transfers by itself?',
    followUpAnswer: 'No! std::move does not move anything. It is purely a compile-time static_cast to an rvalue reference (static_cast<T&&>(x)), enabling overload resolution to select move constructors instead of copy constructors.',
    commonMistakes: ['Using an object after calling std::move on it without resetting it', 'Returning std::move(localVariable) from a function, which inhibits Named Return Value Optimization (NRVO)']
  },
  {
    id: 'cpp-iq-12',
    category: 'cat-modern',
    difficulty: 'Intermediate',
    question: 'What is std::string_view introduced in C++17 and what problem does it solve?',
    shortAnswer: 'std::string_view is a non-owning read-only view of a contiguous sequence of characters (pointer + length). It enables zero-copy string slicing and argument passing without heap allocations.',
    detailedExplanation: 'Passing const std::string& requires constructing a temporary std::string heap allocation if you pass a string literal ("hello") or a substring. std::string_view stores only a pointer to character data and a size (16 bytes on 64-bit). It works seamlessly with std::string, string literals, and char arrays without copies.',
    codeExample: '#include <string_view>\n#include <iostream>\n\nvoid printPrefix(std::string_view sv) {\n    // Substring in O(1) without memory allocation\n    std::cout << sv.substr(0, 4) << "\\n";\n}',
    followUpQuestion: 'What is the biggest pitfall when using std::string_view?',
    followUpAnswer: 'Dangling pointers! Since string_view does not own the data, if the underlying string or temporary object is destroyed, the string_view points to dead memory (undefined behavior). Never return a string_view pointing to a local std::string.',
    commonMistakes: ['Returning std::string_view pointing to a local function variable']
  }
];

// ============================================================================
// 2. 20 REAL-WORLD C++ PROJECTS
// ============================================================================
export const CPP_20_PROJECTS: CppProjectItem[] = [
  {
    id: 'proj-1',
    number: 1,
    title: 'Student Report Card & GPA Calculator',
    difficulty: 'Beginner',
    description: 'Complete student academic tracking system managing courses, calculating weighted GPA, letter grades, and generating formatted grade report cards.',
    conceptsUsed: ['Structs & Classes', 'std::vector', 'std::string', 'Stream Formatting', 'Basic Algorithms'],
    features: [
      'Add student personal info and enrolled courses',
      'Calculates weighted GPA based on credit hours and numeric marks',
      'Auto-converts percentage to standard letter grades (A, B, C, D, F)',
      'Formats clean text-based report card summaries'
    ],
    code: `#include <iostream>
#include <vector>
#include <string>
#include <iomanip>

struct Course {
    std::string code;
    std::string name;
    int credits;
    double marks; // 0 - 100

    char getGrade() const {
        if (marks >= 90) return 'A';
        if (marks >= 80) return 'B';
        if (marks >= 70) return 'C';
        if (marks >= 60) return 'D';
        return 'F';
    }

    double getGradePoint() const {
        if (marks >= 90) return 4.0;
        if (marks >= 80) return 3.0;
        if (marks >= 70) return 2.0;
        if (marks >= 60) return 1.0;
        return 0.0;
    }
};

class Student {
private:
    std::string id;
    std::string name;
    std::vector<Course> courses;

public:
    Student(std::string id, std::string name) : id(std::move(id)), name(std::move(name)) {}

    void addCourse(const Course& c) {
        courses.push_back(c);
    }

    double calculateGPA() const {
        if (courses.empty()) return 0.0;
        double totalPoints = 0.0;
        int totalCredits = 0;
        for (const auto& c : courses) {
            totalPoints += c.getGradePoint() * c.credits;
            totalCredits += c.credits;
        }
        return (totalCredits > 0) ? (totalPoints / totalCredits) : 0.0;
    }

    void printReportCard() const {
        std::cout << "\\n========================================\\n";
        std::cout << "        STUDENT REPORT CARD             \\n";
        std::cout << "========================================\\n";
        std::cout << "ID: " << id << "  |  Name: " << name << "\\n";
        std::cout << "----------------------------------------\\n";
        std::cout << std::left << std::setw(10) << "Code" 
                  << std::setw(16) << "Subject" 
                  << std::setw(8) << "Credits" 
                  << std::setw(8) << "Marks" 
                  << "Grade\\n";
        std::cout << "----------------------------------------\\n";
        for (const auto& c : courses) {
            std::cout << std::left << std::setw(10) << c.code 
                      << std::setw(16) << c.name 
                      << std::setw(8) << c.credits 
                      << std::setw(8) << std::fixed << std::setprecision(1) << c.marks 
                      << c.getGrade() << "\\n";
        }
        std::cout << "----------------------------------------\\n";
        std::cout << "Cumulative GPA: " << std::fixed << std::setprecision(2) << calculateGPA() << " / 4.00\\n";
        std::cout << "Academic Standing: " << (calculateGPA() >= 3.5 ? "Dean's Honor List" : "Good Standing") << "\\n";
        std::cout << "========================================\\n";
    }
};

int main() {
    Student s1("STU-1042", "Alexander Vance");
    s1.addCourse({"CS101", "Intro to C++", 4, 94.5});
    s1.addCourse({"MA201", "Linear Algebra", 3, 88.0});
    s1.addCourse({"PH102", "Physics Mechanics", 4, 76.5});
    s1.addCourse({"DS301", "Data Structures", 4, 91.0});

    s1.printReportCard();
    return 0;
}`,
    expectedOutput: `========================================
        STUDENT REPORT CARD             
========================================
ID: STU-1042  |  Name: Alexander Vance
----------------------------------------
Code      Subject         Credits Marks   Grade
----------------------------------------
CS101     Intro to C++    4       94.5    A
MA201     Linear Algebra  3       88.0    B
PH102     Physics Mech... 4       76.5    C
DS301     Data Structures 4       91.0    A
----------------------------------------
Cumulative GPA: 3.47 / 4.00
Academic Standing: Good Standing
========================================`,
    testCases: ['Single course GPA calculation', 'All A grade student', 'Boundary 89.9 vs 90.0 grade check'],
    extensions: ['Add file persistence to save/load records', 'Add semester-wise CGPA trends']
  },

  {
    id: 'proj-2',
    number: 2,
    title: 'Bank Account Management System',
    difficulty: 'Intermediate',
    description: 'Polymorphic banking architecture featuring Savings and Current accounts, deposit/withdrawal with validation, transaction history, and interest calculation.',
    conceptsUsed: ['Inheritance & Polymorphism', 'Virtual Functions', 'Encapsulation', 'std::unique_ptr', 'std::vector'],
    features: [
      'Abstract Base Account class with virtual deposit & withdraw',
      'SavingsAccount with annual interest compounding',
      'CurrentAccount with overdraft facility protection',
      'Real-time transaction audit ledger'
    ],
    code: `#include <iostream>
#include <vector>
#include <string>
#include <memory>
#include <iomanip>

struct Transaction {
    std::string type;
    double amount;
    double balanceAfter;
};

class BankAccount {
protected:
    std::string accountNumber;
    std::string ownerName;
    double balance;
    std::vector<Transaction> history;

public:
    BankAccount(std::string accNo, std::string name, double initialBal)
        : accountNumber(std::move(accNo)), ownerName(std::move(name)), balance(initialBal) {
        history.push_back({"Initial Deposit", initialBal, initialBal});
    }

    virtual ~BankAccount() = default;

    virtual bool deposit(double amount) {
        if (amount <= 0) return false;
        balance += amount;
        history.push_back({"Deposit", amount, balance});
        return true;
    }

    virtual bool withdraw(double amount) = 0; // Pure virtual

    void printStatement() const {
        std::cout << "\\n--- Statement: " << ownerName << " (" << accountNumber << ") ---\\n";
        std::cout << "Current Balance: $" << std::fixed << std::setprecision(2) << balance << "\\n";
        std::cout << "Transaction Log:\\n";
        for (const auto& t : history) {
            std::cout << "  • [" << t.type << "] $" << t.amount 
                      << " -> Balance: $" << t.balanceAfter << "\\n";
        }
    }

    double getBalance() const { return balance; }
};

class SavingsAccount : public BankAccount {
private:
    double interestRate; // e.g. 0.04 for 4%

public:
    SavingsAccount(std::string accNo, std::string name, double bal, double rate)
        : BankAccount(std::move(accNo), std::move(name), bal), interestRate(rate) {}

    bool withdraw(double amount) override {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            history.push_back({"Withdrawal", amount, balance});
            return true;
        }
        return false;
    }

    void applyInterest() {
        double interest = balance * interestRate;
        balance += interest;
        history.push_back({"Interest Payout", interest, balance});
    }
};

class CurrentAccount : public BankAccount {
private:
    double overdraftLimit;

public:
    CurrentAccount(std::string accNo, std::string name, double bal, double overdraft)
        : BankAccount(std::move(accNo), std::move(name), bal), overdraftLimit(overdraft) {}

    bool withdraw(double amount) override {
        if (amount > 0 && (balance + overdraftLimit) >= amount) {
            balance -= amount;
            history.push_back({"Withdrawal", amount, balance});
            return true;
        }
        return false;
    }
};

int main() {
    std::vector<std::unique_ptr<BankAccount>> bank;
    bank.push_back(std::make_unique<SavingsAccount>("SAV-001", "Emma Watson", 2500.0, 0.05));
    bank.push_back(std::make_unique<CurrentAccount>("CUR-002", "Cyberdyne Corp", 1200.0, 5000.0));

    // Operate via base pointers
    bank[0]->deposit(500.0);
    bank[0]->withdraw(200.0);
    dynamic_cast<SavingsAccount*>(bank[0].get())->applyInterest();

    bank[1]->withdraw(3000.0); // Uses overdraft protection!

    for (const auto& acc : bank) {
        acc->printStatement();
    }
    return 0;
}`,
    expectedOutput: `--- Statement: Emma Watson (SAV-001) ---
Current Balance: $2940.00
Transaction Log:
  • [Initial Deposit] $2500.00 -> Balance: $2500.00
  • [Deposit] $500.00 -> Balance: $3000.00
  • [Withdrawal] $200.00 -> Balance: $2800.00
  • [Interest Payout] $140.00 -> Balance: $2940.00

--- Statement: Cyberdyne Corp (CUR-002) ---
Current Balance: $-1800.00
Transaction Log:
  • [Initial Deposit] $1200.00 -> Balance: $1200.00
  • [Withdrawal] $3000.00 -> Balance: $-1800.00`,
    testCases: ['Withdrawal within overdraft limit', 'Withdrawal exceeding overdraft', 'Interest calculation precision'],
    extensions: ['Add inter-account fund transfers', 'Encrypt transaction history with hash signatures']
  },

  {
    id: 'proj-3',
    number: 3,
    title: 'Library Management System',
    difficulty: 'Intermediate',
    description: 'Catalog management system supporting book registration, borrower membership, issue/return tracking, overdue fine calculation, and multi-criteria book search.',
    conceptsUsed: ['OOP', 'std::unordered_map', 'std::vector', 'Modern Algorithms (std::find_if)', 'Dates & Calculation'],
    features: [
      'Search books by ISBN, title, or author name',
      'Issue and return workflow with availability flags',
      'Calculates fines for books returned past 14-day borrowing window',
      'Member borrowing limit enforcement'
    ],
    code: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

struct Book {
    std::string isbn;
    std::string title;
    std::string author;
    bool isIssued{false};
    std::string borrowerId{""};
};

class Library {
private:
    std::unordered_map<std::string, Book> booksByIsbn;

public:
    void addBook(const std::string& isbn, const std::string& title, const std::string& author) {
        booksByIsbn[isbn] = {isbn, title, author, false, ""};
        std::cout << "[Catalog] Added: \\"" << title << "\\" by " << author << "\\n";
    }

    bool issueBook(const std::string& isbn, const std::string& memberId) {
        auto it = booksByIsbn.find(isbn);
        if (it == booksByIsbn.end()) {
            std::cout << "Error: Book with ISBN " << isbn << " not found.\\n";
            return false;
        }
        if (it->second.isIssued) {
            std::cout << "Unavailable: \\"" << it->second.title << "\\" is already issued to " << it->second.borrowerId << ".\\n";
            return false;
        }
        it->second.isIssued = true;
        it->second.borrowerId = memberId;
        std::cout << "Success: \\"" << it->second.title << "\\" issued to " << memberId << ".\\n";
        return true;
    }

    bool returnBook(const std::string& isbn, int daysKept) {
        auto it = booksByIsbn.find(isbn);
        if (it == booksByIsbn.end() || !it->second.isIssued) {
            std::cout << "Error: Book is not currently marked as issued.\\n";
            return false;
        }
        int overdueDays = std::max(0, daysKept - 14);
        double fine = overdueDays * 2.0; // $2.00 per day
        std::cout << "Success: \\"" << it->second.title << "\\" returned.";
        if (fine > 0) {
            std::cout << " Overdue by " << overdueDays << " days. Fine: $" << fine;
        }
        std::cout << "\\n";
        it->second.isIssued = false;
        it->second.borrowerId = "";
        return true;
    }

    void displayAvailable() const {
        std::cout << "\\n--- Available Books in Library ---\\n";
        for (const auto& [isbn, book] : booksByIsbn) {
            if (!book.isIssued) {
                std::cout << " • [" << isbn << "] " << book.title << " - " << book.author << "\\n";
            }
        }
    }
};

int main() {
    Library lib;
    lib.addBook("978-0131103627", "The C Programming Language", "Kernighan & Ritchie");
    lib.addBook("978-0321563842", "The C++ Programming Language", "Bjarne Stroustrup");
    lib.addBook("978-0201633610", "Design Patterns: Elements of Reusable Object-Oriented Software", "Gang of Four");

    lib.displayAvailable();

    std::cout << "\\n--- Transactions ---\\n";
    lib.issueBook("978-0321563842", "MEM-992");
    lib.issueBook("978-0321563842", "MEM-110"); // Fails: already issued
    lib.returnBook("978-0321563842", 18); // Late return with fine

    lib.displayAvailable();
    return 0;
}`,
    expectedOutput: `[Catalog] Added: "The C Programming Language" by Kernighan & Ritchie
[Catalog] Added: "The C++ Programming Language" by Bjarne Stroustrup
[Catalog] Added: "Design Patterns: Elements of Reusable Object-Oriented Software" by Gang of Four

--- Available Books in Library ---
 • [978-0131103627] The C Programming Language - Kernighan & Ritchie
 • [978-0321563842] The C++ Programming Language - Bjarne Stroustrup
 • [978-0201633610] Design Patterns: Elements of Reusable Object-Oriented Software - Gang of Four

--- Transactions ---
Success: "The C++ Programming Language" issued to MEM-992.
Unavailable: "The C++ Programming Language" is already issued to MEM-992.
Success: "The C++ Programming Language" returned. Overdue by 4 days. Fine: $8
--- Available Books in Library ---
 • [978-0131103627] The C Programming Language - Kernighan & Ritchie
 • [978-0321563842] The C++ Programming Language - Bjarne Stroustrup
 • [978-0201633610] Design Patterns: Elements of Reusable Object-Oriented Software - Gang of Four`,
    testCases: ['Issuing unavailable book', 'Overdue fine threshold calculation', 'Catalog lookup by ISBN'],
    extensions: ['Add file serialization with CSV', 'Reserve queue for popular titles']
  },

  {
    id: 'proj-4',
    number: 4,
    title: 'Employee Payroll Management System',
    difficulty: 'Intermediate',
    description: 'Enterprise payroll system with polymorphic employee classifications (Hourly, Salaried, Commissioned), tax brackets, allowances, and paystub generation.',
    conceptsUsed: ['Polymorphism', 'Pure Virtual Methods', 'Dynamic Dispatch', 'std::vector', 'Modern Format'],
    features: [
      'Hierarchy: Employee -> SalariedEmployee, HourlyEmployee, Manager',
      'Overtime calculation (1.5x base pay for hours over 40)',
      'Statutory tax and pension deduction algorithms',
      'Comprehensive company payroll total expense reports'
    ],
    code: `#include <iostream>
#include <vector>
#include <string>
#include <memory>
#include <iomanip>

class Employee {
protected:
    std::string empId;
    std::string name;
    std::string designation;

public:
    Employee(std::string id, std::string name, std::string desig)
        : empId(std::move(id)), name(std::move(name)), designation(std::move(desig)) {}

    virtual ~Employee() = default;

    virtual double calculateGrossSalary() const = 0;

    double calculateTax(double gross) const {
        if (gross > 6000) return gross * 0.25;
        if (gross > 3000) return gross * 0.15;
        return gross * 0.05;
    }

    void printPayStub() const {
        double gross = calculateGrossSalary();
        double tax = calculateTax(gross);
        double net = gross - tax;
        std::cout << "\\n----------------------------------------\\n";
        std::cout << "PAYSTUB: " << name << " (" << empId << ")\\n";
        std::cout << "Role: " << designation << "\\n";
        std::cout << "Gross Pay: $" << std::fixed << std::setprecision(2) << gross << "\\n";
        std::cout << "Tax Deducted: -$" << tax << "\\n";
        std::cout << "Net Take-Home: $" << net << "\\n";
        std::cout << "----------------------------------------\\n";
    }
};

class SalariedEmployee : public Employee {
private:
    double monthlySalary;

public:
    SalariedEmployee(std::string id, std::string name, std::string desig, double salary)
        : Employee(std::move(id), std::move(name), std::move(desig)), monthlySalary(salary) {}

    double calculateGrossSalary() const override {
        return monthlySalary;
    }
};

class HourlyEmployee : public Employee {
private:
    double hourlyRate;
    double hoursWorked;

public:
    HourlyEmployee(std::string id, std::string name, std::string desig, double rate, double hours)
        : Employee(std::move(id), std::move(name), std::move(desig)), hourlyRate(rate), hoursWorked(hours) {}

    double calculateGrossSalary() const override {
        if (hoursWorked <= 40.0) {
            return hourlyRate * hoursWorked;
        }
        double regular = hourlyRate * 40.0;
        double overtime = (hoursWorked - 40.0) * (hourlyRate * 1.5);
        return regular + overtime;
    }
};

int main() {
    std::vector<std::unique_ptr<Employee>> payroll;
    payroll.push_back(std::make_unique<SalariedEmployee>("EMP-101", "Marcus Reid", "Lead Architect", 7500.0));
    payroll.push_back(std::make_unique<HourlyEmployee>("EMP-102", "Sarah Connor", "DevOps Consultant", 55.0, 48.0)); // 8 hrs overtime

    double totalCompanyPayout = 0.0;
    for (const auto& emp : payroll) {
        emp->printPayStub();
        totalCompanyPayout += emp->calculateGrossSalary();
    }

    std::cout << "\\nTotal Company Monthly Payroll: $" << std::fixed << std::setprecision(2) << totalCompanyPayout << "\\n";
    return 0;
}`,
    expectedOutput: `----------------------------------------
PAYSTUB: Marcus Reid (EMP-101)
Role: Lead Architect
Gross Pay: $7500.00
Tax Deducted: -$1875.00
Net Take-Home: $5625.00
----------------------------------------

----------------------------------------
PAYSTUB: Sarah Connor (EMP-102)
Role: DevOps Consultant
Gross Pay: $2860.00
Tax Deducted: -$143.00
Net Take-Home: $2717.00
----------------------------------------

Total Company Monthly Payroll: $10360.00`,
    testCases: ['Standard 40-hour hourly worker', 'Overtime calculation rate 1.5x', 'Top tax bracket deductions'],
    extensions: ['Health insurance policy deductions', 'Direct deposit ACH formatting']
  },

  {
    id: 'proj-5',
    number: 5,
    title: 'Hospital Patient Triage & Bed Allocation',
    difficulty: 'Intermediate',
    description: 'Emergency department triage tracking patients by acuity level (Emergency, Urgent, Routine), assigning them to specialized wards, and tracking doctor schedules.',
    conceptsUsed: ['std::priority_queue', 'Custom Comparators', 'Structs', 'Enums', 'Pointers'],
    features: [
      'Triage triage system using max-heap priority queue',
      'Patient severity ranking (Acuity 1 to 5)',
      'Departmental routing (Trauma, Cardiology, General Ward)',
      'Discharge workflow and bed count tracking'
    ],
    code: `#include <iostream>
#include <queue>
#include <string>
#include <vector>

enum class Acuity {
    Routine = 1,
    Moderate = 2,
    Urgent = 3,
    Emergency = 4,
    Resuscitation = 5
};

struct Patient {
    int id;
    std::string name;
    Acuity acuity;
    int arrivalOrder;

    // Highest acuity first; tie-break with earlier arrival
    bool operator<(const Patient& other) const {
        if (static_cast<int>(acuity) != static_cast<int>(other.acuity)) {
            return static_cast<int>(acuity) < static_cast<int>(other.acuity);
        }
        return arrivalOrder > other.arrivalOrder;
    }
};

class HospitalER {
private:
    std::priority_queue<Patient> erQueue;
    int orderCounter{0};
    int availableBeds{3};

public:
    void admitPatient(int id, const std::string& name, Acuity level) {
        erQueue.push({id, name, level, ++orderCounter});
        std::cout << "[Admitted] Patient #" << id << " (" << name << ") - Priority Level " 
                  << static_cast<int>(level) << "\\n";
    }

    void treatNextPatient() {
        if (erQueue.empty()) {
            std::cout << "All patients treated. ER queue empty.\\n";
            return;
        }
        if (availableBeds <= 0) {
            std::cout << "ALERT: No open hospital beds! Diverting...\\n";
            return;
        }

        Patient p = erQueue.top();
        erQueue.pop();
        availableBeds--;
        std::cout << ">>> Calling Patient #" << p.id << " (" << p.name 
                  << ") into ER Trauma Bay! Remaining beds: " << availableBeds << "\\n";
    }
};

int main() {
    HospitalER er;
    er.admitPatient(101, "John (Mild Fever)", Acuity::Routine);
    er.admitPatient(102, "David (Severe Fracture)", Acuity::Urgent);
    er.admitPatient(103, "Alice (Cardiac Arrest)", Acuity::Resuscitation);
    er.admitPatient(104, "Bob (Asthma Attack)", Acuity::Emergency);

    std::cout << "\\n--- Processing ER Queue by Acuity Priority ---\\n";
    er.treatNextPatient(); // Alice (Resuscitation)
    er.treatNextPatient(); // Bob (Emergency)
    er.treatNextPatient(); // David (Urgent)
    er.treatNextPatient(); // Bed limit alert
    return 0;
}`,
    expectedOutput: `[Admitted] Patient #101 (John (Mild Fever)) - Priority Level 1
[Admitted] Patient #102 (David (Severe Fracture)) - Priority Level 3
[Admitted] Patient #103 (Alice (Cardiac Arrest)) - Priority Level 5
[Admitted] Patient #104 (Bob (Asthma Attack)) - Priority Level 4

--- Processing ER Queue by Acuity Priority ---
>>> Calling Patient #103 (Alice (Cardiac Arrest)) into ER Trauma Bay! Remaining beds: 2
>>> Calling Patient #104 (Bob (Asthma Attack)) into ER Trauma Bay! Remaining beds: 1
>>> Calling Patient #102 (David (Severe Fracture)) into ER Trauma Bay! Remaining beds: 0
ALERT: No open hospital beds! Diverting...`,
    testCases: ['High priority interrupts lower priority', 'Tie breaking with arrival timestamp', 'Bed capacity exhaustion'],
    extensions: ['Add doctor specialty assignment', 'Track patient vitals via background telemetry']
  },

  {
    id: 'proj-6',
    number: 6,
    title: 'Supermarket POS & Thermal Billing System',
    difficulty: 'Beginner',
    description: 'Retail point-of-sale system featuring barcode lookup, stock inventory depletion, discount coupons, sales tax calculations, and thermal invoice receipts.',
    conceptsUsed: ['std::map', 'Stream Formatting', 'Arithmetic Validation', 'Constants'],
    features: [
      'SKU-based item lookup with unit prices',
      'Discount voucher code validation (e.g. SAVE15)',
      'Subtotal, State Tax (8.25%), and Total Net calculations',
      'Formatted thermal receipt printout'
    ],
    code: `#include <iostream>
#include <vector>
#include <string>
#include <iomanip>

struct CartItem {
    std::string sku;
    std::string name;
    double unitPrice;
    int quantity;

    double getTotal() const { return unitPrice * quantity; }
};

int main() {
    std::vector<CartItem> cart = {
        {"SKU-101", "Organic Milk 1Gal", 4.49, 2},
        {"SKU-205", "Artisan Sourdough", 5.25, 1},
        {"SKU-312", "Fairtrade Coffee 12oz", 12.99, 1},
        {"SKU-488", "Almond Butter", 7.80, 2}
    };

    double subtotal = 0.0;
    for (const auto& item : cart) {
        subtotal += item.getTotal();
    }

    double discountRate = 0.10; // 10% Coupon applied
    double discountAmount = subtotal * discountRate;
    double taxableSubtotal = subtotal - discountAmount;
    double taxRate = 0.0825; // 8.25%
    double salesTax = taxableSubtotal * taxRate;
    double grandTotal = taxableSubtotal + salesTax;

    std::cout << "========================================\\n";
    std::cout << "         FRESHMARK SUPERMARKET          \\n";
    std::cout << "            RECEIPT #77291              \\n";
    std::cout << "========================================\\n";
    std::cout << std::left << std::setw(22) << "Item" 
              << std::setw(5) << "Qty" 
              << std::setw(8) << "Price" 
              << "Total\\n";
    std::cout << "----------------------------------------\\n";
    for (const auto& item : cart) {
        std::cout << std::left << std::setw(22) << item.name 
                  << std::setw(5) << item.quantity 
                  << "$" << std::setw(7) << std::fixed << std::setprecision(2) << item.unitPrice 
                  << "$" << item.getTotal() << "\\n";
    }
    std::cout << "----------------------------------------\\n";
    std::cout << std::right << std::setw(30) << "Subtotal: $" << subtotal << "\\n";
    std::cout << std::right << std::setw(30) << "Discount (10%): -$" << discountAmount << "\\n";
    std::cout << std::right << std::setw(30) << "Sales Tax (8.25%): $" << salesTax << "\\n";
    std::cout << "----------------------------------------\\n";
    std::cout << std::right << std::setw(30) << "GRAND TOTAL: $" << grandTotal << "\\n";
    std::cout << "========================================\\n";
    std::cout << "   Thank you for shopping with us!      \\n";
    return 0;
}`,
    expectedOutput: `========================================
         FRESHMARK SUPERMARKET          
            RECEIPT #77291              
========================================
Item                  Qty  Price   Total
----------------------------------------
Organic Milk 1Gal     2    $4.49   $8.98
Artisan Sourdough     1    $5.25   $5.25
Fairtrade Coffee 12oz 1    $12.99  $12.99
Almond Butter         2    $7.80   $15.60
----------------------------------------
                    Subtotal: $42.82
              Discount (10%): -$4.28
           Sales Tax (8.25%): $3.18
----------------------------------------
                 GRAND TOTAL: $41.72
========================================
   Thank you for shopping with us!`,
    testCases: ['Single item purchase', 'Large quantity order', 'Zero discount edge case'],
    extensions: ['Inventory deduction from stock files', 'Cash tender and change breakdown']
  },

  {
    id: 'proj-7',
    number: 7,
    title: 'Bus / Train Seat Reservation Visualizer',
    difficulty: 'Intermediate',
    description: 'Interactive seat booking system featuring a 2D seating matrix, aisle visualizer, booking confirmation, ticket cancellation, and revenue metrics.',
    conceptsUsed: ['2D Arrays / std::vector<vector>', 'Matrix Traversal', 'Input Validation', 'Structured Output'],
    features: [
      'Visual ASCII coach layout (Window, Middle, Aisle, Window)',
      'Real-time seat status (Available: [ ], Booked: [X])',
      'Direct seat coordinate reservation (e.g. Row 3, Seat B)',
      'Passenger name registry and ticket cancellation'
    ],
    code: `#include <iostream>
#include <vector>
#include <string>
#include <iomanip>

class TrainCoach {
private:
    static constexpr int ROWS = 8;
    static constexpr int COLS = 4; // A, B, [aisle], C, D
    std::vector<std::vector<bool>> seats; // false = free, true = booked
    std::vector<std::vector<std::string>> passengers;

public:
    TrainCoach() : seats(ROWS, std::vector<bool>(COLS, false)),
                   passengers(ROWS, std::vector<std::string>(COLS, "")) {}

    void displaySeatMap() const {
        std::cout << "\\n  === HIGH-SPEED EXPRESS COACH SEATING ===\\n";
        std::cout << "      A     B       [AISLE]      C     D\\n";
        std::cout << "    -------------------------------------\\n";
        for (int r = 0; r < ROWS; ++r) {
            std::cout << "R" << (r + 1) << "  ";
            for (int c = 0; c < COLS; ++c) {
                if (c == 2) std::cout << "   |   ";
                if (seats[r][c]) {
                    std::cout << "[ X ] ";
                } else {
                    std::cout << "[ " << static_cast<char>('A' + c) << " ] ";
                }
            }
            std::cout << "\\n";
        }
        std::cout << "    -------------------------------------\\n";
        std::cout << "Legend: [ A/B/C/D ] = Available | [ X ] = Occupied\\n";
    }

    bool bookSeat(int row, char colChar, const std::string& passengerName) {
        int r = row - 1;
        int c = colChar - 'A';
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
            std::cout << "Error: Invalid seat coordinates (" << row << colChar << ").\\n";
            return false;
        }
        if (seats[r][c]) {
            std::cout << "Error: Seat " << row << colChar << " is already occupied by " 
                      << passengers[r][c] << ".\\n";
            return false;
        }
        seats[r][c] = true;
        passengers[r][c] = passengerName;
        std::cout << "Confirmed! Seat " << row << colChar << " booked for " << passengerName << ".\\n";
        return true;
    }
};

int main() {
    TrainCoach coach;
    coach.bookSeat(1, 'A', "Dr. Bruce Banner");
    coach.bookSeat(1, 'B', "Natasha Romanoff");
    coach.bookSeat(3, 'D', "Tony Stark");
    coach.bookSeat(8, 'A', "Peter Parker");

    coach.displaySeatMap();
    return 0;
}`,
    expectedOutput: `Confirmed! Seat 1A booked for Dr. Bruce Banner.
Confirmed! Seat 1B booked for Natasha Romanoff.
Confirmed! Seat 3D booked for Tony Stark.
Confirmed! Seat 8A booked for Peter Parker.

  === HIGH-SPEED EXPRESS COACH SEATING ===
      A     B       [AISLE]      C     D
    -------------------------------------
R1  [ X ] [ X ]    |   [ C ] [ D ] 
R2  [ A ] [ B ]    |   [ C ] [ D ] 
R3  [ A ] [ B ]    |   [ C ] [ X ] 
R4  [ A ] [ B ]    |   [ C ] [ D ] 
R5  [ A ] [ B ]    |   [ C ] [ D ] 
R6  [ A ] [ B ]    |   [ C ] [ D ] 
R7  [ A ] [ B ]    |   [ C ] [ D ] 
R8  [ X ] [ B ]    |   [ C ] [ D ] 
    -------------------------------------
Legend: [ A/B/C/D ] = Available | [ X ] = Occupied`,
    testCases: ['Booking already reserved seat', 'Booking out-of-bounds row 99', 'Consecutive booking in same row'],
    extensions: ['Add sleeper coach berths', 'Fare pricing tiers based on window vs aisle']
  },

  {
    id: 'proj-8',
    number: 8,
    title: 'Phonebook & Contact Search Engine',
    difficulty: 'Intermediate',
    description: 'Fast contact directory with prefix autocomplete, group categorization (Work, Family, Friends), phone number validation, and fast hash lookups.',
    conceptsUsed: ['std::unordered_map', 'std::string', 'Regex Validation', 'Sorting Lambdas'],
    features: [
      'Contact registry with full name, phone, email, and category tag',
      'Instant O(1) phone lookup by contact name',
      'Prefix search for search-as-you-type autocomplete',
      'Alphabetical contact directory export'
    ],
    code: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

struct Contact {
    std::string name;
    std::string phone;
    std::string email;
    std::string category;
};

class Phonebook {
private:
    std::unordered_map<std::string, Contact> contacts;

public:
    void addContact(const std::string& name, const std::string& phone, const std::string& email, const std::string& cat) {
        contacts[name] = {name, phone, email, cat};
        std::cout << "[Phonebook] Added contact: " << name << " (" << phone << ")\\n";
    }

    void findByName(const std::string& name) const {
        auto it = contacts.find(name);
        if (it != contacts.end()) {
            const auto& c = it->second;
            std::cout << "\\nContact Found:\\n"
                      << "  • Name: " << c.name << "\\n"
                      << "  • Phone: " << c.phone << "\\n"
                      << "  • Email: " << c.email << "\\n"
                      << "  • Group: " << c.category << "\\n";
        } else {
            std::cout << "Contact \\"" << name << "\\" not found in directory.\\n";
        }
    }

    void searchPrefix(const std::string& prefix) const {
        std::cout << "\\n--- Autocomplete Search for Prefix \\"" << prefix << "\\" ---\\n";
        int matchCount = 0;
        for (const auto& [name, c] : contacts) {
            if (name.rfind(prefix, 0) == 0) { // Starts with
                std::cout << "  • " << c.name << " -> " << c.phone << " [" << c.category << "]\\n";
                matchCount++;
            }
        }
        if (matchCount == 0) std::cout << "  No matches found.\\n";
    }
};

int main() {
    Phonebook pb;
    pb.addContact("Alice Cooper", "+1-555-0192", "alice@music.org", "Work");
    pb.addContact("Alexander Graham", "+1-555-0144", "alex@telecom.net", "Work");
    pb.addContact("Alan Turing", "+44-20-7946", "turing@bletchley.ac.uk", "Research");
    pb.addContact("Bob Dylan", "+1-555-9832", "bob@folk.com", "Friends");

    pb.findByName("Alan Turing");
    pb.searchPrefix("Al");
    return 0;
}`,
    expectedOutput: `[Phonebook] Added contact: Alice Cooper (+1-555-0192)
[Phonebook] Added contact: Alexander Graham (+1-555-0144)
[Phonebook] Added contact: Alan Turing (+44-20-7946)
[Phonebook] Added contact: Bob Dylan (+1-555-9832)

Contact Found:
  • Name: Alan Turing
  • Phone: +44-20-7946
  • Email: turing@bletchley.ac.uk
  • Group: Research

--- Autocomplete Search for Prefix "Al" ---
  • Alice Cooper -> +1-555-0192 [Work]
  • Alexander Graham -> +1-555-0144 [Work]
  • Alan Turing -> +44-20-7946 [Research]`,
    testCases: ['Prefix with no matches', 'Case-sensitive exact match', 'Special character phone number sanitization'],
    extensions: ['Build Trie tree structure for O(M) search', 'Export to vCard / .vcf standard']
  },

  {
    id: 'proj-9',
    number: 9,
    title: 'Interactive Quiz Engine with Leaderboard',
    difficulty: 'Beginner',
    description: 'Interactive multiple choice quiz game with countdown timer simulation, randomized questions, scoring algorithm, and high-score rankings.',
    conceptsUsed: ['Structs', 'std::vector', 'Randomization', 'File I/O Simulation'],
    features: [
      'Question bank with 4 multiple choice options',
      'Instant feedback with detailed answer explanations',
      'Score multiplier for consecutive streaks',
      'Top 3 player high score leaderboard'
    ],
    code: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

struct QuizQuestion {
    std::string prompt;
    std::vector<std::string> options;
    int correctIndex; // 0-based
    std::string explanation;
};

int main() {
    std::vector<QuizQuestion> quiz = {
        {
            "Which C++ keyword prevents a member function from modifying member variables?",
            {"mutable", "const", "volatile", "static"},
            1,
            "A const member function guarantees it will not alter any non-mutable member variable."
        },
        {
            "What is the size of std::unique_ptr with a default deleter on 64-bit platforms?",
            {"8 bytes (same as raw pointer)", "16 bytes", "24 bytes", "32 bytes"},
            0,
            "Zero-cost abstraction: unique_ptr has no overhead over a raw 8-byte pointer with default deleter."
        },
        {
            "Which STL container provides fast O(1) amortized insertions at BOTH ends?",
            {"std::vector", "std::list", "std::deque", "std::stack"},
            2,
            "std::deque (double-ended queue) allocates chunked pages, allowing O(1) push_front and push_back."
        }
    };

    int score = 0;
    std::vector<int> userAnswers = {1, 0, 2}; // Simulated perfect player input

    std::cout << "=== CODE FROM ZERO: C++ MASTERY QUIZ ===\\n";
    for (size_t i = 0; i < quiz.size(); ++i) {
        std::cout << "\\nQ" << (i + 1) << ": " << quiz[i].prompt << "\\n";
        for (size_t o = 0; o < quiz[i].options.size(); ++o) {
            std::cout << "  " << static_cast<char>('A' + o) << ") " << quiz[i].options[o] << "\\n";
        }
        int ans = userAnswers[i];
        std::cout << "Player Selected: " << static_cast<char>('A' + ans) << "\\n";
        if (ans == quiz[i].correctIndex) {
            std::cout << "✔ Correct! " << quiz[i].explanation << "\\n";
            score += 100;
        } else {
            std::cout << "✘ Incorrect. Correct answer was: " 
                      << static_cast<char>('A' + quiz[i].correctIndex) << "\\n";
        }
    }

    std::cout << "\\n========================================\\n";
    std::cout << "Final Quiz Score: " << score << " / " << (quiz.size() * 100) << " points\\n";
    std::cout << "Rank: " << (score == 300 ? "Grandmaster C++ Engineer" : "Apprentice") << "\\n";
    std::cout << "========================================\\n";
    return 0;
}`,
    expectedOutput: `=== CODE FROM ZERO: C++ MASTERY QUIZ ===

Q1: Which C++ keyword prevents a member function from modifying member variables?
  A) mutable
  B) const
  C) volatile
  D) static
Player Selected: B
✔ Correct! A const member function guarantees it will not alter any non-mutable member variable.

Q2: What is the size of std::unique_ptr with a default deleter on 64-bit platforms?
  A) 8 bytes (same as raw pointer)
  B) 16 bytes
  C) 24 bytes
  D) 32 bytes
Player Selected: A
✔ Correct! Zero-cost abstraction: unique_ptr has no overhead over a raw 8-byte pointer with default deleter.

Q3: Which STL container provides fast O(1) amortized insertions at BOTH ends?
  A) std::vector
  B) std::list
  C) std::deque
  D) std::stack
Player Selected: C
✔ Correct! std::deque (double-ended queue) allocates chunked pages, allowing O(1) push_front and push_back.

========================================
Final Quiz Score: 300 / 300 points
Rank: Grandmaster C++ Engineer
========================================`,
    testCases: ['All correct answers test', 'Mixed wrong answers', 'Score calculation boundary'],
    extensions: ['Time limit per question with std::chrono', 'Randomize question order via std::shuffle']
  },

  {
    id: 'proj-10',
    number: 10,
    title: 'Text-Based Console Snake Game',
    difficulty: 'Intermediate',
    description: 'Classic arcade Snake engine running on a 2D coordinate grid with food generation, snake body segment growth, wall collision detection, and score tracking.',
    conceptsUsed: ['std::deque for Body', 'Enum Directions', 'Coordinate Structs', 'Game Loop Architecture'],
    features: [
      'Coordinate grid representation (Width: 20, Height: 10)',
      'Snake body tracked using std::deque of Points',
      'Food spawn with randomized placement',
      'Game over detection for self-collision and border impact'
    ],
    code: `#include <iostream>
#include <vector>
#include <deque>
#include <string>

struct Point {
    int x;
    int y;
    bool operator==(const Point& o) const { return x == o.x && y == o.y; }
};

enum class Direction { UP, DOWN, LEFT, RIGHT };

class SnakeGame {
private:
    static constexpr int WIDTH = 16;
    static constexpr int HEIGHT = 8;
    std::deque<Point> snake;
    Point food;
    Direction dir{Direction::RIGHT};
    int score{0};
    bool gameOver{false};

public:
    SnakeGame() {
        // Initial snake body of 3 segments
        snake.push_front({4, 3});
        snake.push_back({3, 3});
        snake.push_back({2, 3});
        food = {8, 3}; // Initial food
    }

    void move() {
        if (gameOver) return;
        Point head = snake.front();
        switch (dir) {
            case Direction::UP: head.y--; break;
            case Direction::DOWN: head.y++; break;
            case Direction::LEFT: head.x--; break;
            case Direction::RIGHT: head.x++; break;
        }

        // Boundary collision check
        if (head.x <= 0 || head.x >= WIDTH - 1 || head.y <= 0 || head.y >= HEIGHT - 1) {
            gameOver = true;
            std::cout << "[COLLISION] Snake hit perimeter wall! Game Over.\\n";
            return;
        }

        snake.push_front(head);
        if (head == food) {
            score += 10;
            std::cout << ">> Yum! Ate food at (" << food.x << ", " << food.y << ")! Score: " << score << "\\n";
            food = {12, 5}; // Next spawn point
        } else {
            snake.pop_back(); // Move forward without growing
        }
    }

    void render() const {
        std::cout << "\\n--- Snake Arena (Score: " << score << ") ---\\n";
        for (int y = 0; y < HEIGHT; ++y) {
            for (int x = 0; x < WIDTH; ++x) {
                if (x == 0 || x == WIDTH - 1 || y == 0 || y == HEIGHT - 1) {
                    std::cout << "#"; // Wall
                } else if (snake.front().x == x && snake.front().y == y) {
                    std::cout << "O"; // Head
                } else if (food.x == x && food.y == y) {
                    std::cout << "*"; // Food
                } else {
                    bool isBody = false;
                    for (size_t i = 1; i < snake.size(); ++i) {
                        if (snake[i].x == x && snake[i].y == y) {
                            isBody = true;
                            break;
                        }
                    }
                    std::cout << (isBody ? "o" : " ");
                }
            }
            std::cout << "\\n";
        }
    }
};

int main() {
    SnakeGame game;
    game.render();
    
    // Simulate game steps
    std::cout << "\\nMoving Right 4 steps towards food...\\n";
    for (int i = 0; i < 4; ++i) {
        game.move();
    }
    game.render();
    return 0;
}`,
    expectedOutput: `--- Snake Arena (Score: 0) ---
################
#              #
#              #
#  ooO *       #
#              #
#              #
#              #
################

Moving Right 4 steps towards food...
>> Yum! Ate food at (8, 3)! Score: 10

--- Snake Arena (Score: 10) ---
################
#              #
#              #
#      oooO    #
#              #
#            * #
#              #
################`,
    testCases: ['Food ingestion and body growth', 'Perimeter wall collision detection', 'Self-intersection detection'],
    extensions: ['Add non-blocking keyboard input via termios/conio', 'Add speed increase with each level']
  },

  {
    id: 'proj-11',
    number: 11,
    title: 'Tic-Tac-Toe Game with Minimax AI',
    difficulty: 'Advanced',
    description: 'Unbeatable Tic-Tac-Toe artificial intelligence using recursive Minimax game-tree search algorithm with alpha-beta pruning concepts.',
    conceptsUsed: ['Minimax Algorithm', 'Recursion', 'Game Theory', '2D Board Representation'],
    features: [
      'Unbeatable AI decision tree calculating optimal moves',
      'Human vs Computer or AI vs AI demonstration',
      'Terminal state evaluation (Win, Loss, Draw)',
      'Clean board visualization'
    ],
    code: `#include <iostream>
#include <vector>
#include <algorithm>

class TicTacToeAI {
private:
    char board[3][3];
    const char HUMAN = 'X';
    const char AI = 'O';

public:
    TicTacToeAI() {
        for (int i = 0; i < 3; ++i)
            for (int j = 0; j < 3; ++j)
                board[i][j] = ' ';
    }

    void printBoard() const {
        std::cout << "\\n  0   1   2\\n";
        for (int i = 0; i < 3; ++i) {
            std::cout << i << " " << board[i][0] << " | " << board[i][1] << " | " << board[i][2] << "\\n";
            if (i < 2) std::cout << "  ---+---+---\\n";
        }
        std::cout << "\\n";
    }

    bool isMovesLeft() const {
        for (int i = 0; i < 3; ++i)
            for (int j = 0; j < 3; ++j)
                if (board[i][j] == ' ') return true;
        return false;
    }

    int evaluate() const {
        // Rows & Columns
        for (int i = 0; i < 3; ++i) {
            if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' ') {
                return (board[i][0] == AI) ? +10 : -10;
            }
            if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' ') {
                return (board[0][i] == AI) ? +10 : -10;
            }
        }
        // Diagonals
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ')
            return (board[0][0] == AI) ? +10 : -10;
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ')
            return (board[0][2] == AI) ? +10 : -10;

        return 0;
    }

    int minimax(int depth, bool isMax) {
        int score = evaluate();
        if (score == 10 || score == -10) return score - depth; // Prefer quicker wins
        if (!isMovesLeft()) return 0;

        if (isMax) {
            int best = -1000;
            for (int i = 0; i < 3; ++i) {
                for (int j = 0; j < 3; ++j) {
                    if (board[i][j] == ' ') {
                        board[i][j] = AI;
                        best = std::max(best, minimax(depth + 1, false));
                        board[i][j] = ' ';
                    }
                }
            }
            return best;
        } else {
            int best = 1000;
            for (int i = 0; i < 3; ++i) {
                for (int j = 0; j < 3; ++j) {
                    if (board[i][j] == ' ') {
                        board[i][j] = HUMAN;
                        best = std::min(best, minimax(depth + 1, true));
                        board[i][j] = ' ';
                    }
                }
            }
            return best;
        }
    }

    void makeBestMove() {
        int bestVal = -1000;
        int bestRow = -1, bestCol = -1;

        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                if (board[i][j] == ' ') {
                    board[i][j] = AI;
                    int moveVal = minimax(0, false);
                    board[i][j] = ' ';
                    if (moveVal > bestVal) {
                        bestVal = moveVal;
                        bestRow = i;
                        bestCol = j;
                    }
                }
            }
        }
        if (bestRow != -1) {
            board[bestRow][bestCol] = AI;
            std::cout << ">>> AI plays O at (" << bestRow << ", " << bestCol << ")\\n";
        }
    }

    void setHumanMove(int r, int c) {
        board[r][c] = HUMAN;
    }
};

int main() {
    TicTacToeAI game;
    std::cout << "Human (X) vs Unbeatable Minimax AI (O)\\n";

    // Simulate scenario: Human plays center (1,1)
    game.setHumanMove(1, 1);
    game.printBoard();

    // AI responds with optimal corner (0,0)
    game.makeBestMove();
    game.printBoard();

    // Human plays (0,1)
    game.setHumanMove(0, 1);
    game.printBoard();

    // AI blocks and sets trap
    game.makeBestMove();
    game.printBoard();
    return 0;
}`,
    expectedOutput: `Human (X) vs Unbeatable Minimax AI (O)

  0   1   2
0   |   |  
  ---+---+---
1   | X |  
  ---+---+---
2   |   |  

>>> AI plays O at (0, 0)

  0   1   2
0 O |   |  
  ---+---+---
1   | X |  
  ---+---+---
2   |   |  

  0   1   2
0 O | X |  
  ---+---+---
1   | X |  
  ---+---+---
2   |   |  

>>> AI plays O at (2, 1)

  0   1   2
0 O | X |  
  ---+---+---
1   | X |  
  ---+---+---
2   | O |  `,
    testCases: ['Immediate winning move selection', 'Blocking opponent win on row', 'Fork avoidance'],
    extensions: ['Expand to 4x4 or 5x5 board with depth cutoff', 'Add GUI with SFML']
  },

  {
    id: 'proj-12',
    number: 12,
    title: 'Command-Line Text Buffer Editor',
    difficulty: 'Intermediate',
    description: 'Line-oriented text editor inspired by Unix ed featuring insertion, line deletion, find and replace, buffer statistics, and file write actions.',
    conceptsUsed: ['std::vector<std::string>', 'String Tokenization', 'File I/O Simulation', 'Command Pattern'],
    features: [
      'Line-addressed buffer manipulation (Insert at line N, Delete line N)',
      'Substring search and replace across entire document',
      'Word, character, and line count statistics',
      'Formatted document display with line numbers'
    ],
    code: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

class TextBuffer {
private:
    std::vector<std::string> lines;

public:
    void insertLine(int lineNum, const std::string& text) {
        if (lineNum <= 0 || lineNum > static_cast<int>(lines.size()) + 1) {
            lines.push_back(text);
        } else {
            lines.insert(lines.begin() + (lineNum - 1), text);
        }
    }

    void deleteLine(int lineNum) {
        if (lineNum >= 1 && lineNum <= static_cast<int>(lines.size())) {
            lines.erase(lines.begin() + (lineNum - 1));
        }
    }

    void replaceAll(const std::string& target, const std::string& replacement) {
        int count = 0;
        for (auto& line : lines) {
            size_t pos = 0;
            while ((pos = line.find(target, pos)) != std::string::npos) {
                line.replace(pos, target.length(), replacement);
                pos += replacement.length();
                count++;
            }
        }
        std::cout << "Replaced " << count << " occurrences of \\"" << target << "\\".\\n";
    }

    void print() const {
        std::cout << "\\n--- Buffer (" << lines.size() << " lines) ---\\n";
        for (size_t i = 0; i < lines.size(); ++i) {
            std::cout << (i + 1) << " | " << lines[i] << "\\n";
        }
        std::cout << "-----------------------\\n";
    }
};

int main() {
    TextBuffer editor;
    editor.insertLine(1, "#include <iostream>");
    editor.insertLine(2, "int main() {");
    editor.insertLine(3, "    std::cout << \\"Hello World!\\" << std::endl;");
    editor.insertLine(4, "    return 0;");
    editor.insertLine(5, "}");

    editor.print();

    // Replace Hello World with Code From Zero
    editor.replaceAll("Hello World!", "Welcome to Code From Zero C++!");
    editor.print();
    return 0;
}`,
    expectedOutput: `--- Buffer (5 lines) ---
1 | #include <iostream>
2 | int main() {
3 |     std::cout << "Hello World!" << std::endl;
4 |     return 0;
5 | }
-----------------------
Replaced 1 occurrences of "Hello World!".

--- Buffer (5 lines) ---
1 | #include <iostream>
2 | int main() {
3 |     std::cout << "Welcome to Code From Zero C++!" << std::endl;
4 |     return 0;
5 | }
-----------------------`,
    testCases: ['Out-of-range line deletion', 'Empty line insertion', 'Global find-and-replace multiple occurrences'],
    extensions: ['Add undo/redo stack using Memento pattern', 'Regular expression pattern search via std::regex']
  },

  {
    id: 'proj-13',
    number: 13,
    title: 'Warehouse Inventory & Stock Reorder System',
    difficulty: 'Intermediate',
    description: 'Warehouse tracking system alerting on stock depletion below reorder thresholds, calculating inventory valuation, and generating supplier purchase orders.',
    conceptsUsed: ['std::map', 'Structs', 'Stream Formatting', 'Threshold Alerts'],
    features: [
      'Item inventory tracking with minimum reorder levels',
      'Valuation reports calculating total capital tied up in stock',
      'Automated purchase order generation for depleted items',
      'Categorized item query'
    ],
    code: `#include <iostream>
#include <map>
#include <string>
#include <iomanip>

struct InventoryItem {
    std::string name;
    std::string category;
    int stockQty;
    int minThreshold;
    double unitCost;
};

int main() {
    std::map<std::string, InventoryItem> inventory = {
        {"RAM-16G", {"Corsair DDR5 16GB", "Hardware", 14, 20, 65.00}},
        {"SSD-1TB", {"Samsung 990 Pro 1TB", "Storage", 8, 15, 95.00}},
        {"CPU-I7",  {"Intel Core i7-14700K", "Processor", 22, 10, 380.00}},
        {"GPU-4070", {"RTX 4070 Super", "Graphics", 4, 10, 599.00}}
    };

    double totalValuation = 0.0;
    std::cout << "=== WAREHOUSE STOCK AUDIT & REORDER REPORT ===\\n";
    std::cout << std::left << std::setw(10) << "SKU"
              << std::setw(24) << "Name"
              << std::setw(8) << "Stock"
              << std::setw(10) << "Threshold"
              << "Status\\n";
    std::cout << "------------------------------------------------------------\\n";

    for (const auto& [sku, item] : inventory) {
        totalValuation += item.stockQty * item.unitCost;
        bool needsReorder = item.stockQty < item.minThreshold;
        std::cout << std::left << std::setw(10) << sku
                  << std::setw(24) << item.name
                  << std::setw(8) << item.stockQty
                  << std::setw(10) << item.minThreshold
                  << (needsReorder ? "⚠ REORDER NEEDED" : "✔ Healthy") << "\\n";
    }

    std::cout << "------------------------------------------------------------\\n";
    std::cout << "Total Warehouse Assets: $" << std::fixed << std::setprecision(2) << totalValuation << "\\n";
    return 0;
}`,
    expectedOutput: `=== WAREHOUSE STOCK AUDIT & REORDER REPORT ===
SKU       Name                    Stock   Threshold Status
------------------------------------------------------------
CPU-I7    Intel Core i7-14700K    22      10        ✔ Healthy
GPU-4070  RTX 4070 Super          4       10        ⚠ REORDER NEEDED
RAM-16G   Corsair DDR5 16GB       14      20        ⚠ REORDER NEEDED
SSD-1TB   Samsung 990 Pro 1TB     8       15        ⚠ REORDER NEEDED
------------------------------------------------------------
Total Warehouse Assets: $18485.00`,
    testCases: ['Stock level exactly at threshold', 'Zero stock level emergency', 'Asset valuation precision'],
    extensions: ['Connect to supplier API simulator', 'Add barcode scanner serial port simulator']
  },

  {
    id: 'proj-14',
    number: 14,
    title: 'Personal Budget & Expense Analytics Engine',
    difficulty: 'Beginner',
    description: 'Personal finance analytics tool tracking categorized expenses, monthly budget caps, percentage breakdowns, and CSV data exports.',
    conceptsUsed: ['std::map', 'Floating Point Math', 'Percentage Analysis', 'Formatting'],
    features: [
      'Category expense tracking (Rent, Food, Utilities, Fun, Tech)',
      'Budget cap variance alerts',
      'Visual ASCII bar chart of monthly expenditures',
      'CSV output generation'
    ],
    code: `#include <iostream>
#include <map>
#include <string>
#include <iomanip>

int main() {
    std::map<std::string, double> expenses = {
        {"Housing / Rent", 1450.00},
        {"Groceries & Food", 520.00},
        {"Cloud & Tech", 185.00},
        {"Transport", 140.00},
        {"Entertainment", 210.00}
    };

    double total = 0.0;
    for (const auto& [cat, amt] : expenses) total += amt;

    std::cout << "=== MONTHLY EXPENSE ANALYTICS ===\\n";
    std::cout << "Total Expenditure: $" << std::fixed << std::setprecision(2) << total << "\\n\\n";
    std::cout << std::left << std::setw(20) << "Category" 
              << std::setw(12) << "Amount" 
              << "Percentage Bar\\n";
    std::cout << "--------------------------------------------------------\\n";

    for (const auto& [cat, amt] : expenses) {
        double pct = (amt / total) * 100.0;
        int bars = static_cast<int>(pct / 3.0); // 1 bar per 3%
        std::cout << std::left << std::setw(20) << cat 
                  << "$" << std::setw(10) << amt 
                  << std::string(bars, '#') << " " << std::fixed << std::setprecision(1) << pct << "%\\n";
    }
    return 0;
}`,
    expectedOutput: `=== MONTHLY EXPENSE ANALYTICS ===
Total Expenditure: $2505.00

Category            Amount      Percentage Bar
--------------------------------------------------------
Cloud & Tech        $185.00     ## 7.4%
Entertainment       $210.00     ## 8.4%
Groceries & Food    $520.00     ###### 20.8%
Housing / Rent      $1450.00    ################### 57.9%
Transport           $140.00     # 5.6%`,
    testCases: ['Zero expenditure categories', 'Single category 100% distribution', 'Bar scaling limits'],
    extensions: ['Month-over-month trend predictions', 'Export to Excel compatible format']
  },

  {
    id: 'proj-15',
    number: 15,
    title: 'High-Performance Matrix Calculator',
    difficulty: 'Intermediate',
    description: 'Mathematical matrix engine executing matrix addition, multiplication, transpositions, determinants (for 2x2 and 3x3), and scalar operations.',
    conceptsUsed: ['Operator Overloading', '2D Vector Manipulation', 'Linear Algebra', 'Exception Throwing'],
    features: [
      'Overloaded operators: +, -, *, ==, <<',
      'Dimension mismatch exception safety',
      'Determinant calculation for 2x2 and 3x3 matrices',
      'Identity matrix factory generation'
    ],
    code: `#include <iostream>
#include <vector>
#include <stdexcept>
#include <iomanip>

class Matrix {
private:
    int rows;
    int cols;
    std::vector<std::vector<double>> data;

public:
    Matrix(int r, int c, double init = 0.0)
        : rows(r), cols(c), data(r, std::vector<double>(c, init)) {}

    static Matrix identity(int n) {
        Matrix m(n, n, 0.0);
        for (int i = 0; i < n; ++i) m.data[i][i] = 1.0;
        return m;
    }

    void set(int r, int c, double val) { data[r][c] = val; }
    double get(int r, int c) const { return data[r][c]; }

    Matrix operator*(const Matrix& other) const {
        if (cols != other.rows) {
            throw std::invalid_argument("Matrix dimension mismatch for multiplication.");
        }
        Matrix res(rows, other.cols, 0.0);
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < other.cols; ++j) {
                for (int k = 0; k < cols; ++k) {
                    res.data[i][j] += data[i][k] * other.data[k][j];
                }
            }
        }
        return res;
    }

    void print() const {
        for (int i = 0; i < rows; ++i) {
            std::cout << "[ ";
            for (int j = 0; j < cols; ++j) {
                std::cout << std::setw(6) << std::fixed << std::setprecision(1) << data[i][j] << " ";
            }
            std::cout << "]\\n";
        }
    }
};

int main() {
    Matrix A(2, 3);
    A.set(0, 0, 1); A.set(0, 1, 2); A.set(0, 2, 3);
    A.set(1, 0, 4); A.set(1, 1, 5); A.set(1, 2, 6);

    Matrix B(3, 2);
    B.set(0, 0, 7); B.set(0, 1, 8);
    B.set(1, 0, 9); B.set(1, 1, 1);
    B.set(2, 0, 2); B.set(2, 1, 3);

    std::cout << "Matrix A (2x3):\\n";
    A.print();
    std::cout << "\\nMatrix B (3x2):\\n";
    B.print();

    Matrix C = A * B;
    std::cout << "\\nResult Matrix C = A * B (2x2):\\n";
    C.print();
    return 0;
}`,
    expectedOutput: `Matrix A (2x3):
[    1.0    2.0    3.0 ]
[    4.0    5.0    6.0 ]

Matrix B (3x2):
[    7.0    8.0 ]
[    9.0    1.0 ]
[    2.0    3.0 ]

Result Matrix C = A * B (2x2):
[   31.0   19.0 ]
[   85.0   55.0 ]`,
    testCases: ['Multiplication dimension validation', 'Identity matrix multiplication equality', 'Scalar multiplication'],
    extensions: ['Gaussian elimination for inverse', 'Eigenvalue approximation algorithm']
  },

  {
    id: 'proj-16',
    number: 16,
    title: 'Run-Length Encoding (RLE) Compression Utility',
    difficulty: 'Beginner',
    description: 'Lossless data compression tool implementing Run-Length Encoding and Decoding with compression ratio analysis and ASCII statistics.',
    conceptsUsed: ['std::string', 'String Streams', 'Algorithm Efficiency', 'Compression Metrics'],
    features: [
      'Compresses repeated sequences (e.g. AAAAABBBCC -> A5B3C2)',
      'Lossless decompressor reconstructing exact original byte string',
      'Calculates space savings percentage and compression ratio',
      'Edge case handling for single non-repeating characters'
    ],
    code: `#include <iostream>
#include <string>
#include <sstream>

std::string compressRLE(const std::string& input) {
    if (input.empty()) return "";
    std::ostringstream oss;
    int count = 1;
    for (size_t i = 1; i <= input.size(); ++i) {
        if (i < input.size() && input[i] == input[i - 1]) {
            count++;
        } else {
            oss << input[i - 1] << count;
            count = 1;
        }
    }
    return oss.str();
}

std::string decompressRLE(const std::string& compressed) {
    std::ostringstream oss;
    for (size_t i = 0; i < compressed.size(); i += 2) {
        char ch = compressed[i];
        int count = compressed[i + 1] - '0';
        oss << std::string(count, ch);
    }
    return oss.str();
}

int main() {
    std::string original = "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWW";
    std::string encoded = compressRLE(original);
    std::string restored = decompressRLE(encoded);

    double savings = (1.0 - (static_cast<double>(encoded.size()) / original.size())) * 100.0;

    std::cout << "=== RUN-LENGTH ENCODING COMPRESSION ===\\n";
    std::cout << "Original Text (" << original.size() << " bytes):\\n" << original << "\\n\\n";
    std::cout << "Compressed Text (" << encoded.size() << " bytes):\\n" << encoded << "\\n\\n";
    std::cout << "Decompressed Verified: " << (restored == original ? "PASS (100% Lossless)" : "FAIL") << "\\n";
    std::cout << "Space Savings: " << savings << "% reduced!\\n";
    return 0;
}`,
    expectedOutput: `=== RUN-LENGTH ENCODING COMPRESSION ===
Original Text (40 bytes):
WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWW

Compressed Text (8 bytes):
W12B1W12B3W12

Decompressed Verified: PASS (100% Lossless)
Space Savings: 80% reduced!`,
    testCases: ['Empty string compression', 'All unique characters without repetitions', 'Single repeated character'],
    extensions: ['Add Huffman coding frequency tree', 'Support binary file stream compression']
  },

  {
    id: 'proj-17',
    number: 17,
    title: 'Custom String Class (Rule of 5 Deep Copy)',
    difficulty: 'Advanced',
    description: 'Production-grade string library clone implementing dynamic char array allocation, deep copying, move semantics, concatenation, and indexing operators.',
    conceptsUsed: ['Rule of 5', 'Move Constructor & Assignment', 'Operator Overloading', 'Memory Management'],
    features: [
      'Custom dynamic memory buffer with null-terminator management',
      'Copy constructor and copy assignment operator (Deep copy)',
      'Move constructor and move assignment operator (O(1) pointer theft)',
      'Overloaded +, +=, [], ==, and stream << operators'
    ],
    code: `#include <iostream>
#include <cstring>
#include <utility>

class MyString {
private:
    char* data;
    size_t length;

public:
    // 1. Default constructor
    MyString() : data(new char[1]{'\\0'}), length(0) {}

    // 2. C-string constructor
    MyString(const char* str) {
        if (str) {
            length = std::strlen(str);
            data = new char[length + 1];
            std::strcpy(data, str);
        } else {
            length = 0;
            data = new char[1]{'\\0'};
        }
    }

    // 3. Destructor
    ~MyString() {
        delete[] data;
    }

    // 4. Copy constructor (Deep Copy)
    MyString(const MyString& other) : length(other.length) {
        data = new char[length + 1];
        std::strcpy(data, other.data);
    }

    // 5. Copy assignment operator
    MyString& operator=(const MyString& other) {
        if (this != &other) {
            char* newData = new char[other.length + 1];
            std::strcpy(newData, other.data);
            delete[] data;
            data = newData;
            length = other.length;
        }
        return *this;
    }

    // 6. Move constructor
    MyString(MyString&& other) noexcept : data(other.data), length(other.length) {
        other.data = nullptr;
        other.length = 0;
    }

    // 7. Move assignment operator
    MyString& operator=(MyString&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            length = other.length;
            other.data = nullptr;
            other.length = 0;
        }
        return *this;
    }

    const char* c_str() const { return data ? data : ""; }
    size_t size() const { return length; }

    friend std::ostream& operator<<(std::ostream& os, const MyString& s) {
        if (s.data) os << s.data;
        return os;
    }
};

int main() {
    MyString s1("Hello");
    MyString s2(" from Code From Zero!");
    MyString s3 = s1; // Copy constructor

    std::cout << "s1: " << s1 << "\\n";
    std::cout << "s3 (copied): " << s3 << "\\n";

    MyString s4 = std::move(s1); // Move constructor
    std::cout << "s4 (moved from s1): " << s4 << "\\n";
    std::cout << "s1 size after move: " << s1.size() << "\\n";
    return 0;
}`,
    expectedOutput: `s1: Hello
s3 (copied): Hello
s4 (moved from s1): Hello
s1 size after move: 0`,
    testCases: ['Self-assignment s = s', 'Move assignment', 'Empty string creation'],
    extensions: ['Add Small String Optimization (SSO)', 'Add thread-safe ref-counting (COW)']
  },

  {
    id: 'proj-18',
    number: 18,
    title: 'Custom Generic Dynamic Array (std::vector Clone)',
    difficulty: 'Advanced',
    description: 'Generic templated resizable array container featuring dynamic exponential growth (capacity doubling), push_back, pop_back, and bounds-checked indexing.',
    conceptsUsed: ['Template Metaprogramming', 'Dynamic Memory', 'Placement New', 'Exception Safety'],
    features: [
      'Template class MyVector<T> supporting any data type',
      'Dynamic growth algorithm (doubles capacity upon filling)',
      'Subscript operator [] with bounds validation at()',
      'Iterators support (begin and end for range-based for loops)'
    ],
    code: `#include <iostream>
#include <string>
#include <stdexcept>

template <typename T>
class MyVector {
private:
    T* elements;
    size_t m_size;
    size_t m_capacity;

    void reallocate(size_t newCapacity) {
        T* newBlock = new T[newCapacity];
        for (size_t i = 0; i < m_size; ++i) {
            newBlock[i] = std::move(elements[i]);
        }
        delete[] elements;
        elements = newBlock;
        m_capacity = newCapacity;
    }

public:
    MyVector() : elements(nullptr), m_size(0), m_capacity(0) {
        reallocate(2);
    }

    ~MyVector() {
        delete[] elements;
    }

    void push_back(const T& value) {
        if (m_size >= m_capacity) {
            reallocate(m_capacity * 2);
        }
        elements[m_size++] = value;
    }

    void pop_back() {
        if (m_size > 0) m_size--;
    }

    size_t size() const { return m_size; }
    size_t capacity() const { return m_capacity; }

    T& operator[](size_t index) { return elements[index]; }
    const T& operator[](size_t index) const { return elements[index]; }

    T* begin() { return elements; }
    T* end() { return elements + m_size; }
};

int main() {
    MyVector<std::string> vec;
    vec.push_back("C++20");
    vec.push_back("Standard Library");
    vec.push_back("Generic Templates");
    vec.push_back("Zero Overhead");

    std::cout << "Vector Size: " << vec.size() << " | Capacity: " << vec.capacity() << "\\n";
    std::cout << "Elements:\\n";
    for (const auto& item : vec) {
        std::cout << "  • " << item << "\\n";
    }
    return 0;
}`,
    expectedOutput: `Vector Size: 4 | Capacity: 4
Elements:
  • C++20
  • Standard Library
  • Generic Templates
  • Zero Overhead`,
    testCases: ['Continuous push_back growth from 2 to 64', 'Empty vector destruction', 'Range-based for traversal'],
    extensions: ['Add allocator parameter support', 'Add shrink_to_fit']
  },

  {
    id: 'proj-19',
    number: 19,
    title: 'HTTP Request Parser & REST Router Simulator',
    difficulty: 'Intermediate',
    description: 'Web backend network simulation parsing raw HTTP/1.1 request strings, extracting method/path/headers, routing to registered handler callbacks, and generating HTTP responses.',
    conceptsUsed: ['std::stringstream', 'Lambdas', 'std::function', 'std::unordered_map', 'Networking Protocols'],
    features: [
      'Parses HTTP request line: METHOD /path HTTP/1.1',
      'Header dictionary parser (Host, Content-Type, User-Agent)',
      'Router registry mapping (GET/POST, route) -> callback',
      'Standardized HTTP 200, 404, and 500 response builder'
    ],
    code: `#include <iostream>
#include <string>
#include <sstream>
#include <unordered_map>
#include <functional>

struct HttpRequest {
    std::string method;
    std::string path;
    std::unordered_map<std::string, std::string> headers;
    std::string body;
};

struct HttpResponse {
    int statusCode;
    std::string statusText;
    std::unordered_map<std::string, std::string> headers;
    std::string body;

    std::string serialize() const {
        std::ostringstream ss;
        ss << "HTTP/1.1 " << statusCode << " " << statusText << "\\r\\n";
        for (const auto& [k, v] : headers) {
            ss << k << ": " << v << "\\r\\n";
        }
        ss << "Content-Length: " << body.length() << "\\r\\n\\r\\n";
        ss << body;
        return ss.str();
    }
};

class HttpRouter {
private:
    std::unordered_map<std::string, std::function<HttpResponse(const HttpRequest&)>> routes;

public:
    void registerRoute(const std::string& method, const std::string& path, 
                       std::function<HttpResponse(const HttpRequest&)> handler) {
        routes[method + " " + path] = handler;
    }

    HttpResponse dispatch(const HttpRequest& req) {
        std::string key = req.method + " " + req.path;
        if (routes.find(key) != routes.end()) {
            return routes[key](req);
        }
        return {404, "Not Found", {{"Content-Type", "application/json"}}, "{\\"error\\": \\"Route Not Found\\"}"};
    }
};

int main() {
    HttpRouter router;
    router.registerRoute("GET", "/api/v1/status", [](const HttpRequest&) -> HttpResponse {
        return {200, "OK", {{"Content-Type", "application/json"}}, "{\\"status\\": \\"healthy\\", \\"runtime\\": \\"C++20\\"}"};
    });

    HttpRequest req{"GET", "/api/v1/status", {{"Host", "api.codefromzero.com"}}, ""};
    HttpResponse res = router.dispatch(req);

    std::cout << "=== HTTP SERVER RESPONSE ===\\n" << res.serialize() << "\\n";
    return 0;
}`,
    expectedOutput: `=== HTTP SERVER RESPONSE ===
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 42

{"status": "healthy", "runtime": "C++20"}`,
    testCases: ['Unknown path returns 404', 'POST request with body length', 'Header parsing case sensitivity'],
    extensions: ['Add middleware chain support', 'Add URL parameter extraction e.g. /users/:id']
  },

  {
    id: 'proj-20',
    number: 20,
    title: 'In-Memory Key-Value Store with Write-Ahead Log (WAL)',
    difficulty: 'Advanced',
    description: 'Embedded key-value database engine featuring fast hash indexing, atomic transactions, time-to-live (TTL) expiration simulation, and Write-Ahead Logging (WAL) for durability.',
    conceptsUsed: ['std::unordered_map', 'WAL Logging Architecture', 'Transactions', 'Data Persistence'],
    features: [
      'Core commands: SET key value, GET key, DEL key',
      'Append-only Write-Ahead Log recording every mutation',
      'Recovery engine reconstructing database state upon reboot from log',
      'Transaction BEGIN, COMMIT, and ROLLBACK support'
    ],
    code: `#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
#include <sstream>

class KeyValueDB {
private:
    std::unordered_map<std::string, std::string> store;
    std::vector<std::string> walLog; // Write-Ahead Log buffer

public:
    void set(const std::string& key, const std::string& value) {
        // 1. Write to WAL first for durability
        walLog.push_back("SET " + key + " " + value);
        // 2. Apply to in-memory store
        store[key] = value;
    }

    std::string get(const std::string& key) const {
        auto it = store.find(key);
        if (it != store.end()) return it->second;
        return "(nil)";
    }

    void del(const std::string& key) {
        walLog.push_back("DEL " + key);
        store.erase(key);
    }

    void replayWAL() {
        std::cout << "\\n[System Reboot] Replaying Write-Ahead Log (" << walLog.size() << " records)...\\n";
        store.clear();
        for (const auto& entry : walLog) {
            std::stringstream ss(entry);
            std::string cmd, k, v;
            ss >> cmd >> k >> v;
            if (cmd == "SET") store[k] = v;
            else if (cmd == "DEL") store.erase(k);
        }
        std::cout << "[System Reboot] State restored! Key count: " << store.size() << "\\n";
    }

    void dumpWAL() const {
        std::cout << "\\n--- Write-Ahead Log (WAL) Journal ---\\n";
        for (size_t i = 0; i < walLog.size(); ++i) {
            std::cout << "Seq #" << (i + 1) << " | " << walLog[i] << "\\n";
        }
    }
};

int main() {
    KeyValueDB db;
    db.set("user:101", "Alice");
    db.set("user:102", "Bob");
    db.set("session:token", "xyz_8829");
    db.del("user:102");

    std::cout << "GET user:101 -> " << db.get("user:101") << "\\n";
    std::cout << "GET user:102 -> " << db.get("user:102") << "\\n";

    db.dumpWAL();
    db.replayWAL();
    std::cout << "Restored GET user:101 -> " << db.get("user:101") << "\\n";
    return 0;
}`,
    expectedOutput: `GET user:101 -> Alice
GET user:102 -> (nil)

--- Write-Ahead Log (WAL) Journal ---
Seq #1 | SET user:101 Alice
Seq #2 | SET user:102 Bob
Seq #3 | SET session:token xyz_8829
Seq #4 | DEL user:102

[System Reboot] Replaying Write-Ahead Log (4 records)...
[System Reboot] State restored! Key count: 2
Restored GET user:101 -> Alice`,
    testCases: ['Overwriting existing key in WAL', 'Deleting non-existent key', 'Full replay restores exact state'],
    extensions: ['LSM-Tree compaction simulation', 'B-Tree disk page indexer']
  }
];

// ============================================================================
// 3. C++ PRACTICE QUESTION BANK
// ============================================================================
export const CPP_PRACTICE_PROBLEMS: CppPracticeProblem[] = [
  {
    id: 'cpp-prob-1',
    title: 'Two Sum Problem (Optimized Hash Map)',
    difficulty: 'Beginner',
    category: 'Arrays & Hash Tables',
    problemStatement: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume each input has exactly one solution and you may not use the same element twice.',
    inputFormat: 'Line 1: Target integer. Line 2: Space-separated integers representing array.',
    outputFormat: 'Two space-separated indices [i, j].',
    constraints: '2 <= nums.length <= 10^5, -10^9 <= nums[i] <= 10^9',
    sampleInput: 'Target: 9\nNums: 2 7 11 15',
    sampleOutput: '0 1',
    sampleExplanation: 'nums[0] + nums[1] = 2 + 7 = 9. Output indices are 0 and 1.',
    hint: 'Use std::unordered_map to store numbers and their indices. For each number x, check if (target - x) is already present in the map.',
    solutionCode: `#include <iostream>
#include <vector>
#include <unordered_map>

std::pair<int, int> twoSum(const std::vector<int>& nums, int target) {
    std::unordered_map<int, int> seen;
    for (int i = 0; i < static_cast<int>(nums.size()); ++i) {
        int complement = target - nums[i];
        if (seen.find(complement) != seen.end()) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {-1, -1};
}

int main() {
    std::vector<int> nums = {2, 7, 11, 15};
    int target = 9;
    auto [i, j] = twoSum(nums, target);
    std::cout << i << " " << j << "\\n";
    return 0;
}`,
    solutionExplanation: 'A single pass through the array with std::unordered_map achieves O(N) time complexity and O(N) space complexity.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)'
  },
  {
    id: 'cpp-prob-2',
    title: 'Reverse a Singly Linked List In-Place',
    difficulty: 'Intermediate',
    category: 'Linked Lists',
    problemStatement: 'Given the head of a singly linked list, reverse the list in-place and return the reversed list head.',
    inputFormat: 'A linked list 1 -> 2 -> 3 -> 4 -> 5 -> nullptr',
    outputFormat: 'Reversed list 5 -> 4 -> 3 -> 2 -> 1 -> nullptr',
    constraints: 'Number of nodes between 0 and 5000',
    sampleInput: '1 -> 2 -> 3 -> 4 -> 5',
    sampleOutput: '5 -> 4 -> 3 -> 2 -> 1',
    sampleExplanation: 'The pointers are redirected backward iteratively.',
    hint: 'Maintain three pointers: prev, curr, and next. Loop while curr != nullptr.',
    solutionCode: `#include <iostream>

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
        ListNode* nextNode = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
}

int main() {
    ListNode* head = new ListNode(1);
    head->next = new ListNode(2);
    head->next->next = new ListNode(3);

    head = reverseList(head);
    for (ListNode* p = head; p; p = p->next) {
        std::cout << p->val << (p->next ? " -> " : "\\n");
    }
    return 0;
}`,
    solutionExplanation: 'Iterative 3-pointer reversal takes O(N) time and O(1) auxiliary space without recursion stack overhead.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(1)'
  },
  {
    id: 'cpp-prob-3',
    title: 'Valid Parentheses Checker using std::stack',
    difficulty: 'Beginner',
    category: 'Stacks & Queues',
    problemStatement: 'Given a string containing only characters (, ), {, }, [, ], determine if the input string is valid (brackets must close in correct order and type).',
    inputFormat: 'String of bracket characters.',
    outputFormat: 'Boolean true or false.',
    constraints: '1 <= s.length <= 10^4',
    sampleInput: '{[()]}',
    sampleOutput: 'true',
    sampleExplanation: 'Every open bracket matches its corresponding close bracket properly.',
    hint: 'Push opening brackets onto std::stack. For closing brackets, check if top matches, then pop.',
    solutionCode: `#include <iostream>
#include <string>
#include <stack>

bool isValid(const std::string& s) {
    std::stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else {
            if (st.empty()) return false;
            char top = st.top();
            st.pop();
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) {
                return false;
            }
        }
    }
    return st.empty();
}

int main() {
    std::cout << std::boolalpha << isValid("{[()]}") << "\\n"; // true
    std::cout << std::boolalpha << isValid("([)]") << "\\n";   // false
    return 0;
}`,
    solutionExplanation: 'Using a LIFO stack processes each bracket in O(1) step, yielding total O(N) runtime.',
    timeComplexity: 'O(N)',
    spaceComplexity: 'O(N)'
  }
];

// ============================================================================
// 4. C++ DEBUGGING EXERCISES
// ============================================================================
export const CPP_DEBUGGING_EXERCISES: CppDebuggingExercise[] = [
  {
    id: 'cpp-dbg-1',
    title: 'Iterator Invalidation during std::vector Loop Erase',
    difficulty: 'Intermediate',
    buggyCode: `// BUGGY CODE: Iterator invalidation
#include <iostream>
#include <vector>

void removeEvens(std::vector<int>& v) {
    for (auto it = v.begin(); it != v.end(); ++it) {
        if (*it % 2 == 0) {
            v.erase(it); // BUG: "it" is now invalidated!
        }
    }
}`,
    expectedBehavior: 'Remove all even numbers from vector without crashing or skipping adjacent elements.',
    bugExplanation: 'Calling v.erase(it) invalidates the iterator it and all subsequent iterators. Doing ++it on an invalidated iterator causes Undefined Behavior or skips elements.',
    correctedCode: `// CORRECTED: Use return value of erase() or std::erase_if (C++20)
#include <iostream>
#include <vector>

void removeEvens(std::vector<int>& v) {
    for (auto it = v.begin(); it != v.end(); /* no increment here */) {
        if (*it % 2 == 0) {
            it = v.erase(it); // Returns valid iterator to next element!
        } else {
            ++it;
        }
    }
    // Alternatively in modern C++20:
    // std::erase_if(v, [](int x) { return x % 2 == 0; });
}`,
    whyCorrectionWorks: 'v.erase() returns an iterator pointing to the new location of the element that followed the erased element. Updating it ensures validity.'
  },
  {
    id: 'cpp-dbg-2',
    title: 'Dangling Reference from Returning Local Variable',
    difficulty: 'Beginner',
    buggyCode: `// BUGGY CODE: Returning reference to stack local
#include <iostream>
#include <string>

const std::string& getGreeting(const std::string& name) {
    std::string msg = "Hello, " + name;
    return msg; // BUG: msg destroyed when function exits!
}

int main() {
    const std::string& greeting = getGreeting("World");
    std::cout << greeting << std::endl; // Undefined Behavior: reads garbage!
}`,
    expectedBehavior: 'Return a greeting string safely to caller.',
    bugExplanation: 'msg is allocated on the function call stack frame. When getGreeting() returns, its stack frame is popped and msg is deallocated. Returning a reference binds caller to dead memory.',
    correctedCode: `// CORRECTED: Return by value (relies on Move Semantics & NRVO)
#include <iostream>
#include <string>

std::string getGreeting(const std::string& name) {
    return "Hello, " + name; // Return by value is fast and zero-leak!
}

int main() {
    std::string greeting = getGreeting("World");
    std::cout << greeting << std::endl;
}`,
    whyCorrectionWorks: 'Returning by value creates or moves the object into caller scope with no dangling pointers, heavily optimized by C++ return value optimization (RVO).'
  },
  {
    id: 'cpp-dbg-3',
    title: 'Missing Virtual Destructor Causing Derived Leak',
    difficulty: 'Intermediate',
    buggyCode: `// BUGGY CODE: Missing virtual destructor
#include <iostream>

class Base {
public:
    ~Base() { std::cout << "~Base()\\n"; } // BUG: Not virtual!
};

class Derived : public Base {
    int* buffer;
public:
    Derived() : buffer(new int[1000]) {}
    ~Derived() {
        delete[] buffer;
        std::cout << "~Derived()\\n";
    }
};

int main() {
    Base* ptr = new Derived();
    delete ptr; // LEAK! Only ~Base() runs, ~Derived() never called!
}`,
    expectedBehavior: 'Both ~Derived() and ~Base() should execute to free dynamically allocated heap buffer.',
    bugExplanation: 'Deleting a derived instance through a base class pointer with a non-virtual destructor results in undefined behavior and skips the derived destructor.',
    correctedCode: `// CORRECTED: Declare base destructor virtual
#include <iostream>

class Base {
public:
    virtual ~Base() { std::cout << "~Base()\\n"; } // Safe!
};

class Derived : public Base {
    int* buffer;
public:
    Derived() : buffer(new int[1000]) {}
    ~Derived() override {
        delete[] buffer;
        std::cout << "~Derived()\\n";
    }
};

int main() {
    Base* ptr = new Derived();
    delete ptr; // Both ~Derived() and ~Base() execute cleanly!
}`,
    whyCorrectionWorks: 'Declaring virtual ~Base() registers the destructor in the vtable, dispatching destruction to the Derived class first.'
  }
];

// ============================================================================
// 5. C++ OUTPUT PREDICTION QUESTIONS
// ============================================================================
export const CPP_OUTPUT_PREDICTIONS: CppOutputPrediction[] = [
  {
    id: 'cpp-out-1',
    title: 'Prefix vs Postfix Increment in Expressions',
    code: `#include <iostream>

int main() {
    int a = 5;
    int b = ++a + a++;
    std::cout << a << " " << b << std::endl;
    return 0;
}`,
    options: ['7 12', '7 13', '6 11', 'Undefined Behavior prior to C++17'],
    correctIndex: 1,
    explanation: 'First, ++a increments a from 5 to 6 and evaluates to 6. Then 6 + 6 evaluates to 12 or 13 depending on sequencing. Note: In C++17 and later, evaluation order of addition operands remains unsequenced, making modifying the same scalar without sequencing dangerous. On standard GCC/Clang with standard evaluation, a becomes 7 and b evaluates to 13.'
  },
  {
    id: 'cpp-out-2',
    title: 'Polymorphic Method Call through Reference',
    code: `#include <iostream>

class Base {
public:
    void print() { std::cout << "Base "; }
    virtual void show() { std::cout << "BaseShow "; }
};

class Derived : public Base {
public:
    void print() { std::cout << "Derived "; }
    void show() override { std::cout << "DerivedShow "; }
};

int main() {
    Derived d;
    Base& ref = d;
    ref.print();
    ref.show();
    return 0;
}`,
    options: ['Base BaseShow ', 'Base DerivedShow ', 'Derived DerivedShow ', 'Derived BaseShow '],
    correctIndex: 1,
    explanation: 'print() is non-virtual, so it is resolved at compile time based on the reference type (Base -> "Base "). show() is virtual, so dynamic dispatch resolves it through the vtable to Derived::show -> "DerivedShow ". Output is "Base DerivedShow ".'
  },
  {
    id: 'cpp-out-3',
    title: 'Auto Type Deduction and References',
    code: `#include <iostream>

int main() {
    int x = 10;
    int& ref = x;
    auto copy = ref; // Auto drops reference!
    copy = 20;
    std::cout << x << " " << copy << std::endl;
    return 0;
}`,
    options: ['20 20', '10 20', '10 10', 'Compilation Error'],
    correctIndex: 1,
    explanation: 'By default, auto strips reference (&) and top-level const qualifiers. Therefore, auto copy = ref creates a fresh copy of int with value 10. Modifying copy to 20 leaves x untouched at 10. (To retain the reference, one would write auto& copy = ref).'
  }
];

// ============================================================================
// 6. C++ PLAYGROUND TEMPLATES
// ============================================================================
export const CPP_PLAYGROUND_TEMPLATES: CppPlaygroundTemplate[] = [
  {
    id: 'tmpl-modern-cpp',
    name: 'Modern C++20 Core Features',
    description: 'Range-based for loops, structured bindings, auto deduction, and standard algorithms.',
    standard: 'C++20',
    code: `#include <iostream>
#include <vector>
#include <string>
#include <numeric>
#include <algorithm>

int main() {
    std::cout << "=== Modern C++20 Playground ===\\n";

    // 1. Vector of pairs with auto
    std::vector<std::pair<std::string, int>> scores = {
        {"Alice", 95},
        {"Bob", 88},
        {"Charlie", 92},
        {"Diana", 99}
    };

    // 2. Structured bindings (C++17/20)
    std::cout << "Student Leaderboard:\\n";
    for (const auto& [name, score] : scores) {
        std::cout << "  • " << name << ": " << score << " pts\\n";
    }

    // 3. Lambda and algorithms
    auto highest = std::max_element(scores.begin(), scores.end(), 
        [](const auto& a, const auto& b) { return a.second < b.second; });

    if (highest != scores.end()) {
        std::cout << "Top Performer: " << highest->first 
                  << " with " << highest->second << " pts!\\n";
    }

    return 0;
}`,
    expectedOutput: `=== Modern C++20 Playground ===
Student Leaderboard:
  • Alice: 95 pts
  • Bob: 88 pts
  • Charlie: 92 pts
  • Diana: 99 pts
Top Performer: Diana with 99 pts!`
  },
  {
    id: 'tmpl-stl-map',
    name: 'STL Vector, Map & Frequency Counter',
    description: 'Demonstrates std::unordered_map, word tokenization, and sorting by frequency.',
    standard: 'C++17',
    code: `#include <iostream>
#include <string>
#include <sstream>
#include <unordered_map>
#include <vector>
#include <algorithm>

int main() {
    std::string text = "code from zero learn modern cpp from beginner to advanced code from zero";
    std::stringstream ss(text);
    std::string word;
    std::unordered_map<std::string, int> freq;

    while (ss >> word) {
        freq[word]++;
    }

    std::vector<std::pair<std::string, int>> sortedWords(freq.begin(), freq.end());
    std::sort(sortedWords.begin(), sortedWords.end(), [](const auto& a, const auto& b) {
        return a.second > b.second; // descending
    });

    std::cout << "=== Word Frequency Counter (STL) ===\\n";
    for (const auto& [w, count] : sortedWords) {
        std::cout << "  • " << w << ": " << count << " times\\n";
    }
    return 0;
}`,
    expectedOutput: `=== Word Frequency Counter (STL) ===
  • from: 3 times
  • zero: 2 times
  • code: 2 times
  • modern: 1 times
  • to: 1 times
  • beginner: 1 times
  • learn: 1 times
  • advanced: 1 times
  • cpp: 1 times`
  },
  {
    id: 'tmpl-smart-pointers',
    name: 'Smart Pointers & RAII Memory Safety',
    description: 'Demonstrating std::unique_ptr, std::shared_ptr, and custom automatic destruction.',
    standard: 'C++17',
    code: `#include <iostream>
#include <memory>
#include <string>

class Resource {
private:
    std::string name;
public:
    Resource(std::string n) : name(std::move(n)) {
        std::cout << "[Resource Acquired] " << name << "\\n";
    }
    ~Resource() {
        std::cout << "[Resource Released] " << name << "\\n";
    }
    void use() const {
        std::cout << "  -> Using " << name << " safely\\n";
    }
};

int main() {
    std::cout << "--- Scope Start ---\\n";
    {
        // Unique ownership: automatically destroyed at end of scope
        auto res1 = std::make_unique<Resource>("DatabaseConnectionPool");
        res1->use();

        // Shared ownership: ref count tracked
        auto res2 = std::make_shared<Resource>("SharedTextureCache");
        {
            auto res3 = res2; // Ref count = 2
            std::cout << "Shared count: " << res2.use_count() << "\\n";
        } // res3 destroyed, count becomes 1
        std::cout << "Shared count after inner scope: " << res2.use_count() << "\\n";
    } // res1 and res2 destructors called automatically!

    std::cout << "--- Scope End: All memory freed cleanly without manual delete! ---\\n";
    return 0;
}`,
    expectedOutput: `--- Scope Start ---
[Resource Acquired] DatabaseConnectionPool
  -> Using DatabaseConnectionPool safely
[Resource Acquired] SharedTextureCache
Shared count: 2
Shared count after inner scope: 1
[Resource Released] SharedTextureCache
[Resource Released] DatabaseConnectionPool
--- Scope End: All memory freed cleanly without manual delete! ---`
  },
  {
    id: 'tmpl-templates',
    name: 'Generic Templates & Compile-time Metaprogramming',
    description: 'Generic class template for a Stack container and templated utility functions.',
    standard: 'C++20',
    code: `#include <iostream>
#include <vector>
#include <string>
#include <stdexcept>

template <typename T>
class SafeStack {
private:
    std::vector<T> elements;

public:
    void push(const T& item) {
        elements.push_back(item);
    }

    T pop() {
        if (elements.empty()) {
            throw std::out_of_range("Stack underflow: empty stack.");
        }
        T topItem = elements.back();
        elements.pop_back();
        return topItem;
    }

    bool empty() const { return elements.empty(); }
    size_t size() const { return elements.size(); }
};

int main() {
    std::cout << "=== Generic Stack Template Demo ===\\n";

    SafeStack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);

    std::cout << "Popping from intStack: " << intStack.pop() << "\\n";

    SafeStack<std::string> strStack;
    strStack.push("Code");
    strStack.push("From");
    strStack.push("Zero");

    std::cout << "Popping from strStack: " << strStack.pop() << "\\n";
    return 0;
}`,
    expectedOutput: `=== Generic Stack Template Demo ===
Popping from intStack: 30
Popping from strStack: Zero`
  }
];
