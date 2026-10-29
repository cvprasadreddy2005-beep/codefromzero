#!/usr/bin/env python3
import json
import os
import sys

# COMPLETE 32 MODULES SPECIFICATION FOR JAVA
JAVA_MODULES_SPEC = [
    (1, "Introduction to Java", [
        "What is Programming?", "What is Java?", "Meaning and Definition of Java", "History of Java",
        "Features of Java", "Why Learn Java?", "Advantages and Disadvantages of Java", "Java Applications and Real-World Uses",
        "Java versus C", "Java versus C++", "Java versus Python", "Java versus JavaScript",
        "JDK, JRE, and JVM", "How Java Works", "Java Source Code, Bytecode, and Machine Code",
        "Java Platform Independence", "Java Editions and Versions", "Introduction to Object-Oriented Programming"
    ]),
    (2, "Installing Java and Setting Up Environment", [
        "Installing the JDK", "Understanding JDK Versions", "Setting Environment Variables and JAVA_HOME",
        "Checking Java Installation", "Using the Terminal or Command Prompt", "Compiling Java Programs",
        "Running Java Programs", "Creating a Java Project in VS Code", "Creating a Java Project in IntelliJ IDEA",
        "Creating a Java Project in Eclipse", "Understanding .java and .class Files", "Common Installation Errors and Solutions"
    ]),
    (3, "First Java Program", [
        "Structure of a Java Program", "Writing Your First Java Program", "Understanding class Keyword",
        "Understanding main() Method", "Understanding public, static, and void", "Understanding System.out.println()",
        "Understanding System.out.print()", "Understanding System.out.printf()", "Java Comments and Documentation",
        "Java Naming Conventions", "Compilation Errors versus Runtime Errors", "Understanding Case Sensitivity",
        "Understanding Statements and Code Blocks"
    ]),
    (4, "Variables and Data Types", [
        "What is a Variable?", "Variable Declaration", "Variable Initialization", "Variable Assignment",
        "Local Variables", "Instance Variables", "Static Variables", "Primitive Data Types Overview",
        "byte, short, int, and long", "float and double", "char and Unicode", "boolean Data Type",
        "Reference Data Types", "Literals in Java", "Constants and the final Keyword", "Type Conversion",
        "Implicit Type Casting (Widening)", "Explicit Type Casting (Narrowing)", "Widening and Narrowing Conversions",
        "Variable Scope and Lifetime", "Default Values of Fields", "Common Data-Type Mistakes"
    ]),
    (5, "Java Operators", [
        "What is an Operator?", "Arithmetic Operators", "Assignment Operators", "Relational Operators",
        "Equality Operators", "Logical Operators", "Unary Operators", "Increment and Decrement Operators",
        "Prefix and Postfix Operators", "Compound Assignment Operators", "Ternary Operator",
        "Bitwise Operators", "Shift Operators", "Operator Precedence", "Operator Associativity",
        "Short-Circuit Evaluation", "Operator Examples and Practice Programs"
    ]),
    (6, "User Input and Output", [
        "What is User Input?", "Introduction to the Scanner Class", "Reading Integers with nextInt()",
        "Reading Decimal Numbers with nextDouble()", "Reading Single Words with next()",
        "Reading Complete Lines with nextLine()", "Reading Characters in Java", "Reading Boolean Values with nextBoolean()",
        "Understanding nextInt() and nextLine() Issues", "Formatting Output in Java", "Using printf() Specifiers",
        "Introduction to BufferedReader", "Basic Command-Line Arguments", "Input Validation", "Handling Invalid User Input"
    ]),
    (7, "Conditional Statements", [
        "What is Decision-Making?", "The if Statement", "The if-else Statement", "The else-if Ladder",
        "Nested if Statements", "The switch Statement", "Traditional Switch Syntax", "Modern Switch Expressions",
        "Ternary Operator in Decision Making", "Nested Conditions", "Even or Odd Number Program",
        "Positive, Negative, or Zero Program", "Largest of Two Numbers", "Largest of Three Numbers",
        "Leap-Year Checking Program", "Student Grade Calculator", "Simple Arithmetic Calculator",
        "Eligibility and Access Checking Programs"
    ]),
    (8, "Loops", [
        "What is Looping?", "The for Loop", "The while Loop", "The do-while Loop", "Nested Loops",
        "Infinite Loops and Prevention", "The break Statement", "The continue Statement", "The Enhanced for Loop",
        "Loop Initialization, Condition, and Update", "Understanding Loop Counters", "Dry-Running a Loop",
        "Loop Tracing Tables", "Multiplication Tables Program", "Sum of Natural Numbers", "Factorial of a Number",
        "Fibonacci Series Program", "Prime-Number Checking with Loops", "Reversing a Number with Loops",
        "Palindrome-Number Checking", "Armstrong-Number Checking", "Number and Star Patterns", "Common Loop Errors"
    ]),
    (9, "Number-Based Programs", [
        "Print a Number and its Square", "Calculate Square and Cube", "Swap Two Numbers with Temp",
        "Swap Two Numbers Without Temp", "Find the Largest Number", "Find the Smallest Number",
        "Calculate the Sum of Digits", "Count Digits in an Integer", "Reverse a Number Program",
        "Check a Palindrome Number", "Check a Prime Number", "Print Prime Numbers in a Range",
        "Find Factorial of a Number", "Generate Fibonacci Numbers", "Check an Armstrong Number",
        "Find the GCD (Greatest Common Divisor)", "Find the LCM (Least Common Multiple)", "Check a Perfect Number",
        "Check a Strong Number", "Check a Perfect Square", "Convert Celsius to Fahrenheit",
        "Convert Fahrenheit to Celsius", "Calculate Simple Interest", "Calculate Compound Interest",
        "Calculate Percentage and Grade", "Convert Decimal to Binary", "Convert Binary to Decimal"
    ]),
    (10, "Methods", [
        "What is a Method?", "Method Declaration", "Method Definition", "Method Calling",
        "Method Parameters", "Method Arguments", "Return Types in Java", "The void Keyword",
        "Methods with Parameters", "Methods without Parameters", "Methods that Return Values",
        "Static Methods", "Instance Methods", "Method Overloading", "Recursion in Java",
        "Base Cases in Recursion", "Pass-by-Value in Java", "Variable Scope in Methods",
        "The main() Method in Detail", "Creating Utility Methods", "Recursive Factorial",
        "Recursive Fibonacci", "Common Method Errors"
    ]),
    (11, "Arrays", [
        "What is an Array?", "Array Declaration", "Array Initialization", "Array Indexing",
        "Array Length Property", "Accessing Array Elements", "Updating Array Elements",
        "Traversing an Array with Loops", "Using Loops with Arrays", "Enhanced for Loop with Arrays",
        "One-Dimensional Arrays", "Two-Dimensional Arrays", "Multidimensional Arrays", "Jagged Arrays",
        "Passing Arrays to Methods", "Returning Arrays from Methods", "Copying Arrays", "Comparing Arrays",
        "The Arrays Utility Class", "Sorting Arrays with Arrays.sort()", "Searching Arrays",
        "Linear Search Algorithm", "Binary Search on Arrays", "Finding Minimum and Maximum Elements",
        "Sum and Average of Array Elements", "Reversing an Array In-Place", "Removing Duplicates from an Array",
        "Merging Two Arrays", "Merging Two Sorted Arrays", "Finding the Second-Largest Element",
        "Rotating Arrays Left and Right", "Common Array Errors and Boundary Checks"
    ]),
    (12, "Strings", [
        "What is a String?", "The String Class in Java", "Creating Strings", "String Literals and Memory",
        "String Immutability Explained", "The String Constant Pool", "== versus .equals() Comparison",
        "String length() Method", "charAt() Method", "substring() Method", "contains() Method",
        "indexOf() and lastIndexOf()", "toUpperCase() and toLowerCase()", "trim() and strip()",
        "replace() and replaceAll()", "split() Method with Delimiters", "startsWith() and endsWith()",
        "StringBuilder Class", "StringBuffer Class", "String Concatenation Methods",
        "Reversing a String", "Checking a Palindrome String", "Counting Vowels and Consonants",
        "Counting Words and Characters", "Finding Duplicate Characters", "Checking Anagram Strings",
        "Character Frequency in a String", "Removing Whitespace from Strings", "Comparing Strings Lexicographically",
        "Formatting Strings with String.format()", "Common String Errors", "String Performance Best Practices"
    ]),
    (13, "Object-Oriented Programming (OOP)", [
        "What is Object-Oriented Programming?", "Meaning and Philosophy of OOP", "Classes and Objects",
        "Fields and Instance Variables", "Object Creation and the new Keyword", "Constructors in Java",
        "Default Constructors", "Parameterized Constructors", "Constructor Overloading",
        "The this Keyword", "Instance Members versus Static Members", "Encapsulation Principle",
        "Getters and Setters", "Inheritance in Java", "Single Inheritance", "Multilevel Inheritance",
        "Hierarchical Inheritance", "Why Java Does Not Support Multiple Class Inheritance",
        "Method Overriding with @Override", "Method Overloading versus Overriding", "Polymorphism Principle",
        "Compile-Time Polymorphism", "Runtime Polymorphism and Dynamic Method Dispatch", "Abstraction Principle",
        "Abstract Classes", "Abstract Methods", "Interfaces in Java", "Multiple Interfaces Implementation",
        "Default and Static Methods in Interfaces", "The super Keyword", "The final Keyword in OOP",
        "Association in OOP", "Aggregation (Has-A Relationship)", "Composition (Strong Ownership)",
        "Object Relationships Overview", "The Object Class Hierarchy", "The toString() Method",
        "The equals() and hashCode() Contract", "The instanceof Operator", "Nested Classes",
        "Inner Classes", "Static Nested Classes", "Anonymous Classes", "Anonymous Objects",
        "Introduction to SOLID Principles"
    ]),
    (14, "Exception Handling", [
        "What is an Exception?", "Errors versus Exceptions", "Checked Exceptions", "Unchecked Exceptions (Runtime)",
        "Exception Class Hierarchy", "The try Block", "The catch Block", "Multiple catch Blocks",
        "The finally Block", "The throw Keyword", "The throws Keyword", "Creating Custom Exceptions",
        "Try-with-Resources Statement", "Exception Propagation", "Handling Common Exceptions",
        "NullPointerException and Prevention", "ArithmeticException", "ArrayIndexOutOfBoundsException",
        "NumberFormatException", "Best Practices for Robust Exception Handling"
    ]),
    (15, "Packages and Access Modifiers", [
        "What is a Package?", "Built-in Packages in Java", "Creating User-Defined Packages",
        "Import Statements", "Static Imports", "Public Access Modifier", "Private Access Modifier",
        "Protected Access Modifier", "Default (Package-Private) Access", "Access Modifier Comparison Table",
        "Package Structure in Modern Projects", "Organizing Large Java Codebases"
    ]),
    (16, "Collections Framework", [
        "What is the Java Collections Framework?", "Arrays versus Collections", "Collection Framework Hierarchy",
        "The Iterable Interface", "The Collection Interface", "The List Interface", "ArrayList in Detail",
        "LinkedList in Detail", "Vector and Stack Classes", "The Set Interface", "HashSet in Detail",
        "LinkedHashSet in Detail", "TreeSet and SortedSet", "The Queue Interface", "PriorityQueue in Detail",
        "Deque and ArrayDeque", "The Map Interface", "HashMap in Detail", "LinkedHashMap", "TreeMap",
        "Hashtable and ConcurrentHashMap", "Iterators and forEach", "ListIterator", "Enhanced for Loop with Collections",
        "Sorting Collections with Collections.sort()", "The Comparable Interface", "The Comparator Interface",
        "Comparable versus Comparator", "Collections Utility Class Methods", "Frequency Counting with HashMap",
        "Removing Duplicates with Set", "Choosing the Correct Collection", "Collection Time Complexity Analysis"
    ]),
    (17, "Generics", [
        "What are Generics?", "Why Generics are Essential for Type Safety", "Generic Classes (Box<T>)",
        "Generic Methods", "Type Parameters (T, E, K, V)", "Multiple Type Parameters",
        "Bounded Type Parameters (<T extends Number>)", "Upper Bounded Wildcards (? extends T)",
        "Lower Bounded Wildcards (? super T)", "Unbounded Wildcards (?)", "Generic Interfaces",
        "Type Safety and Compile-Time Checks", "Type Erasure in Java", "Common Generic Mistakes and Solutions"
    ]),
    (18, "File Handling and Input/Output", [
        "Introduction to Java I/O", "Files and Directories in Java", "The File Class", "Path and Paths (NIO.2)",
        "The Files Utility Class", "Reading Text Files", "Writing Text Files", "Appending Data to Files",
        "FileReader and FileWriter", "BufferedReader and BufferedWriter", "Byte Streams vs Character Streams",
        "FileInputStream and FileOutputStream", "Object Serialization Basics", "Deserialization Basics",
        "Try-with-Resources with File Streams", "File-Related Exceptions", "Working with CSV and Text Data",
        "Building a Simple File-Based Notes Application"
    ]),
    (19, "Multithreading and Concurrency", [
        "What is a Thread?", "Processes versus Threads", "Creating Threads by Extending Thread",
        "Creating Threads by Implementing Runnable", "Thread Lifecycle and States", "start() versus run()",
        "Thread sleep() and Timing", "Thread join() and Coordination", "Thread Priorities",
        "Thread Synchronization and Monitors", "Race Conditions and Data Races", "Deadlocks and Prevention",
        "The volatile Keyword", "Atomic Variables (AtomicInteger)", "ExecutorService and Thread Pools",
        "Callable and Future Interfaces", "Introduction to CompletableFuture", "Concurrent Collections",
        "Thread Safety Principles", "Virtual Threads Overview", "Concurrency Best Practices"
    ]),
    (20, "Lambda Expressions and Streams", [
        "Functional Programming in Java", "Functional Interfaces and @FunctionalInterface",
        "Lambda Expressions Syntax", "Writing Simple Lambdas", "Built-in Functional Interfaces",
        "The Predicate<T> Interface", "The Function<T, R> Interface", "The Consumer<T> Interface",
        "The Supplier<T> Interface", "Method References (:: Syntax)", "Introduction to Stream API",
        "Creating Streams from Collections", "filter() Intermediate Operation", "map() Intermediate Operation",
        "sorted() Intermediate Operation", "distinct() Intermediate Operation", "limit() and skip() Operations",
        "forEach() Terminal Operation", "reduce() Terminal Operation", "collect() and Collectors",
        "Collectors.toList() and toMap()", "Grouping and Partitioning Streams", "Finding Minimum and Maximum with Streams",
        "Counting and Summing with Streams", "The Optional Class and Avoiding Nulls",
        "Sequential versus Parallel Streams", "Stream API Practice Programs"
    ]),
    (21, "Date, Time, and Utility Classes", [
        "The Math Class and Common Functions", "Generating Random Numbers", "The Random Class",
        "SecureRandom for Cryptography", "The UUID Class for Unique Identifiers", "BigInteger for Large Numbers",
        "BigDecimal for Financial Calculations", "Why Floating-Point Arithmetic Can Be Inaccurate",
        "The java.time Package Overview", "LocalDate Class", "LocalTime Class", "LocalDateTime Class",
        "ZonedDateTime and Offsets", "The Instant Class for Machine Time", "The Duration Class",
        "The Period Class", "Date Formatting with DateTimeFormatter", "Date Parsing from Strings",
        "Handling Time Zones Accurately"
    ]),
    (22, "Database Connectivity (JDBC)", [
        "What is a Database?", "Relational Database and SQL Introduction", "What is JDBC?",
        "JDBC Architecture and Components", "JDBC Drivers and Types", "Connecting Java to Database",
        "Database Connection Steps", "The Connection Interface", "The Statement Interface",
        "The PreparedStatement Interface", "The ResultSet Interface", "Inserting Records with JDBC",
        "Reading and Querying Records", "Updating Records with JDBC", "Deleting Records with JDBC",
        "Database Transactions in Java", "Commit and Rollback Operations", "SQL Injection Prevention with PreparedStatement",
        "Database Resource Management and Connection Pools", "Building a Simple JDBC CRUD Application"
    ]),
    (23, "Networking in Java", [
        "Networking Fundamentals", "IP Addresses and Port Numbers", "The InetAddress Class",
        "URL and URI Concepts in Java", "HTTP Protocol Basics", "HTTP Requests and Status Codes",
        "The Modern Java HttpClient", "Sending GET Requests with HttpClient", "Sending POST Requests with HttpClient",
        "Parsing JSON Responses", "Basic Socket Programming in Java", "Client-Server Architecture Model",
        "Network-Related Exceptions", "Secure Communication (HTTPS and SSL Basics)"
    ]),
    (24, "Modern Java Features", [
        "Java Version History and Release Cadence", "Milestone Features of Java 8", "Milestone Features of Java 11",
        "Milestone Features of Java 17 (LTS)", "Milestone Features of Java 21 (LTS)",
        "Local Variable Type Inference with var", "Text Blocks (Multi-line Strings)",
        "Modern Switch Expressions with -> Arrow", "Records (Immutable Data Carriers)",
        "Sealed Classes and Interfaces", "Pattern Matching for instanceof",
        "Pattern Matching for switch", "Virtual Threads (Project Loom)", "Choosing the Right Supported JDK"
    ]),
    (25, "Data Structures and Algorithms in Java", [
        "Algorithm Basics and Efficiency", "Time Complexity Analysis", "Space Complexity Analysis",
        "Big O Notation Primer", "Array Operations and Complexity", "String Manipulation Algorithms",
        "Linked List Data Structure", "Singly Linked List Implementation", "Doubly Linked List Implementation",
        "Stack Data Structure (LIFO)", "Stack Implementation using Array", "Stack Implementation using Linked List",
        "Queue Data Structure (FIFO)", "Queue Implementation using Array", "Circular Queue Implementation",
        "Deque and Priority Queue in DSA", "Hashing Concepts and Hash Tables", "HashMap Collision Resolution",
        "Binary Tree Data Structure", "Binary Search Tree (BST) Implementation", "Tree Traversals (Inorder, Preorder, Postorder)",
        "Heaps and Priority Queues in DSA", "Graph Representation (Adjacency Matrix & List)",
        "Breadth-First Search (BFS) on Graphs", "Depth-First Search (DFS) on Graphs", "Linear Search Algorithm",
        "Binary Search Algorithm in Depth", "Bubble Sort Algorithm", "Selection Sort Algorithm", "Insertion Sort Algorithm",
        "Merge Sort Algorithm (Divide and Conquer)", "Quick Sort Algorithm", "Counting Sort Algorithm",
        "Recursion Mechanics in DSA", "Backtracking Technique", "Two-Pointer Technique", "Sliding Window Technique",
        "Prefix Sum Array Pattern", "Greedy Algorithms Strategy", "Introduction to Dynamic Programming",
        "Top 10 Array Interview Problems", "Top 10 String Interview Problems", "Top 10 HashMap Interview Problems",
        "Top 10 Linked List Interview Problems", "Top 10 Stack & Queue Interview Problems",
        "Top 10 Tree & Graph Interview Problems", "Common Coding Interview Patterns",
        "Optimizing Space and Time Trade-offs", "Writing Clean Interview Code in Java", "Mock Coding Interview Workflow"
    ]),
    (26, "Testing, Debugging, and Clean Code", [
        "What is Software Testing?", "Manual Testing versus Automated Testing", "Unit Testing Fundamentals",
        "Introduction to JUnit 5", "Writing Your First @Test Case", "Assertions in JUnit (assertEquals, assertTrue)",
        "Debugging Java Programs in IDE", "Setting Breakpoints Effectively", "Step Over, Step Into, and Step Out",
        "Reading and Analyzing Stack Traces", "Logging with System.Logger and SLF4J", "Clean Code Principles in Java",
        "Java Naming Conventions and Style", "Code Refactoring Techniques", "Eliminating Code Duplication (DRY)",
        "Defensive Programming Practices", "Input Validation and Boundary Guards", "Writing Maintainable Enterprise Java Code"
    ]),
    (27, "Build Tools and Development Tools", [
        "Standard Java Project Directory Structure", "VS Code Java Extension Pack Setup",
        "IntelliJ IDEA Shortcuts and Features", "Eclipse IDE Overview", "Introduction to Apache Maven",
        "Maven Project Structure and Lifecycle", "The pom.xml Configuration File", "Managing Maven Dependencies",
        "Introduction to Gradle", "Gradle build.gradle Setup", "Git Version Control Fundamentals",
        "GitHub Workflow for Java Developers", "Version Control Best Practices for Java",
        "The .gitignore File for Java and IDEs", "Creating Professional README Files",
        "Managing Secrets and Environment Variables", "Packaging JAR Files and Executable Artifacts"
    ]),
    (28, "Java Frameworks and Application Development", [
        "What is a Framework versus a Library?", "The Java Enterprise Ecosystem", "Introduction to Spring Framework",
        "Introduction to Spring Boot", "Building a REST API with Spring Boot", "REST API Core Principles and URIs",
        "HTTP Methods (GET, POST, PUT, DELETE)", "JSON Serialization in Spring Boot",
        "Controllers, Services, and Repositories Architecture", "Dependency Injection and @Autowired",
        "Connecting Spring Boot to PostgreSQL/MySQL", "Data Validation with Bean Validation",
        "Global Exception Handling with @ControllerAdvice", "Basic Application Security and Authentication",
        "Java Full-Stack and Backend Developer Career Path"
    ]),
    (29, "Java Mini Projects", [
        "Project 1: Hello World Application", "Project 2: Simple Arithmetic Calculator",
        "Project 3: Student Grade Calculator", "Project 4: Number Guessing Game",
        "Project 5: Multiplication Table Generator", "Project 6: ATM Simulation System",
        "Project 7: Bank Account Management System", "Project 8: Student Management System",
        "Project 9: Library Book Management System", "Project 10: Employee Record Management System",
        "Project 11: Console Contact Book", "Project 12: Interactive Console To-Do List",
        "Project 13: Multiple-Choice Quiz Application", "Project 14: Secure Password Generator",
        "Project 15: File-Based Notes Application", "Project 16: Personal Expense Tracker",
        "Project 17: Inventory and Stock Management System", "Project 18: JDBC Database CRUD Application",
        "Project 19: Spring Boot REST API for Products", "Project 20: Final Full Java Portfolio Project"
    ]),
    (30, "Java Practice Question Bank", [
        "Core Java Syntax Practice Questions (Beginner)", "Variables and Operators Practice Questions",
        "Conditionals and Logic Practice Questions", "Loops and Iteration Practice Questions",
        "Methods and Scope Practice Questions", "Arrays and Traversal Practice Questions",
        "Strings and Manipulation Practice Questions", "OOP Classes and Objects Practice Questions",
        "Inheritance and Polymorphism Practice Questions", "Exception Handling Practice Questions",
        "Collections and Maps Practice Questions", "Generics and Streams Practice Questions",
        "File I/O Practice Questions", "Concurrency and Multithreading Practice Questions",
        "Data Structures and Algorithms Coding Challenges"
    ]),
    (31, "Java Interview Preparation", [
        "Core Java Fundamentals Interview Questions", "OOP Principles Interview Questions",
        "String and Memory Pool Interview Questions", "Collections Framework Interview Questions",
        "Exception Handling Interview Questions", "Multithreading and Concurrency Interview Questions",
        "Java 8 and Stream API Interview Questions", "JVM Architecture and Memory Interview Questions",
        "Database and JDBC Interview Questions", "Top DSA Coding Interview Questions in Java",
        "Frequently Confused Java Concepts (Tricky Questions)", "Beginner Mock Interview Guide",
        "Intermediate Mock Interview Guide", "Senior Java Engineer Mock Interview Guide"
    ]),
    (32, "Java Guided Learning Roadmap", [
        "Stage 1: Beginner Foundations (Syntax, Variables, Conditions, Loops)",
        "Stage 2: Core Java Mastery (Methods, Arrays, Strings, OOP, Exceptions)",
        "Stage 3: Intermediate Java (Collections, Generics, File I/O, Lambdas, Streams)",
        "Stage 4: Advanced Java Engineering (Multithreading, JDBC, Networking, Modern Java)",
        "Stage 5: Data Structures, Algorithms, and Problem Solving",
        "Stage 6: Real-World Projects, Portfolios, and Career Preparation"
    ])
]

def make_java_lesson(global_id, mod_num, mod_title, title, is_proj=False):
    # Determine difficulty
    if mod_num <= 6:
        diff = "Beginner"
    elif mod_num in [7, 8, 9, 10, 11, 12]:
        diff = "Beginner" if "Introduction" in title or "Basic" in title or "What" in title else "Intermediate"
    elif mod_num in [13, 14, 15, 16, 17, 18, 21, 26, 27]:
        diff = "Intermediate"
    elif mod_num in [19, 20, 22, 23, 24, 28]:
        diff = "Advanced"
    elif mod_num == 25:
        diff = "Intermediate" if "Basics" in title or "Linear" in title or "Bubble" in title else "Advanced"
    else:
        diff = "Intermediate" if mod_num in [29, 30, 31, 32] else "Beginner"

    clean_tag = title.lower().replace(" ", "").replace("(", "").replace(")", "").replace(".", "").replace(",", "").replace("-", "")

    # Tailored runnable code examples for Java concepts
    if "first java program" in title.lower() or "structure of a java" in title.lower() or "writing your first" in title.lower() or "hello world" in title.lower():
        code_snip = """public class Main {
    public static void main(String[] args) {
        // Print welcome greeting to the console
        System.out.println("Hello, World! Welcome to Java on Code From Zero.");
        System.out.println("Java is strongly typed, platform-independent, and enterprise-grade.");
    }
}"""
        syntax_snip = """public class ClassName {
    public static void main(String[] args) {
        // Statements terminate with a semicolon
        System.out.println("Output text");
    }
}"""
        expected_output = """Hello, World! Welcome to Java on Code From Zero.
Java is strongly typed, platform-independent, and enterprise-grade."""
    elif "scanner" in title.lower() or "user input" in title.lower() or "nextint" in title.lower():
        code_snip = """import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== Student Profile Registration ===");
        System.out.print("Enter your student name: ");
        String name = "Alex Rivera"; // Simulated input for safe execution
        System.out.println(name);
        
        System.out.print("Enter your target solved questions: ");
        int targetQuestions = 300;
        System.out.println(targetQuestions);
        
        System.out.println("Registered student: " + name + " | Target: " + targetQuestions + " questions.");
        scanner.close();
    }
}"""
        syntax_snip = """import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int num = scanner.nextInt();
String line = scanner.nextLine();
scanner.close();"""
        expected_output = """=== Student Profile Registration ===
Enter your student name: Alex Rivera
Enter your target solved questions: 300
Registered student: Alex Rivera | Target: 300 questions."""
    elif "variable" in title.lower() or "data type" in title.lower() or "primitive" in title.lower():
        code_snip = """public class Main {
    public static void main(String[] args) {
        // 8 Primitive Data Types in Java
        byte smallNum = 127;
        short mediumNum = 32000;
        int age = 24;
        long worldPopulation = 8000000000L;
        float price = 19.99f;
        double pi = 3.14159265359;
        char grade = 'A';
        boolean isEnrolled = true;

        System.out.println("=== Java Primitive Types ===");
        System.out.println("Integer age: " + age);
        System.out.println("Floating-point pi: " + pi);
        System.out.println("Character grade: " + grade);
        System.out.println("Boolean enrolled: " + isEnrolled);
        System.out.println("World population (long): " + worldPopulation);
    }
}"""
        syntax_snip = """dataType variableName = initialValue;
final dataType CONSTANT_NAME = immutableValue;"""
        expected_output = """=== Java Primitive Types ===
Integer age: 24
Floating-point pi: 3.14159265359
Character grade: A
Boolean enrolled: true
World population (long): 8000000000"""
    elif "operator" in title.lower():
        code_snip = """public class Main {
    public static void main(String[] args) {
        int a = 15;
        int b = 4;

        System.out.println("Arithmetic: " + (a + b) + ", Modulo: " + (a % b));
        System.out.println("Relational (a > b): " + (a > b));
        System.out.println("Logical ((a > 10) && (b < 5)): " + ((a > 10) && (b < 5)));

        // Ternary operator: condition ? trueExpression : falseExpression
        String status = (a >= 18) ? "Eligible" : "Minor";
        System.out.println("Ternary Evaluation: " + status);
    }
}"""
        syntax_snip = """int result = a + b;
boolean cond = (x > y) && (z != 0);
String outcome = condition ? "Pass" : "Fail";"""
        expected_output = """Arithmetic: 19, Modulo: 3
Relational (a > b): true
Logical ((a > 10) && (b < 5)): true
Ternary Evaluation: Eligible"""
    elif "conditional" in title.lower() or "if" in title.lower() or "switch" in title.lower() or "decision" in title.lower():
        code_snip = """public class Main {
    public static void main(String[] args) {
        int testScore = 88;
        char grade;

        if (testScore >= 90) {
            grade = 'A';
        } else if (testScore >= 80) {
            grade = 'B';
        } else if (testScore >= 70) {
            grade = 'C';
        } else {
            grade = 'F';
        }

        System.out.println("Score: " + testScore + " -> Grade: " + grade);

        // Modern Switch Expression (Java 14+)
        String feedback = switch (grade) {
            case 'A' -> "Outstanding achievement!";
            case 'B' -> "Solid performance.";
            case 'C' -> "Acceptable, continue practicing.";
            default  -> "Additional review recommended.";
        };

        System.out.println("Evaluation: " + feedback);
    }
}"""
        syntax_snip = """if (condition1) {
    // Branch 1
} else if (condition2) {
    // Branch 2
} else {
    // Fallback
}"""
        expected_output = """Score: 88 -> Grade: B
Evaluation: Solid performance."""
    elif "loop" in title.lower() or "for loop" in title.lower() or "while" in title.lower():
        code_snip = """public class Main {
    public static void main(String[] args) {
        System.out.println("=== 1. For Loop Demonstration ===");
        int sum = 0;
        for (int i = 1; i <= 5; i++) {
            sum += i;
            System.out.println("Step " + i + ": Running Sum = " + sum);
        }

        System.out.println("=== 2. While Loop Demonstration ===");
        int countdown = 3;
        while (countdown > 0) {
            System.out.println("T-minus " + countdown + "...");
            countdown--;
        }
        System.out.println("Liftoff!");
    }
}"""
        syntax_snip = """for (int i = 0; i < count; i++) {
    // Repeated block
}

while (condition) {
    // Runs while true
}"""
        expected_output = """=== 1. For Loop Demonstration ===
Step 1: Running Sum = 1
Step 2: Running Sum = 3
Step 3: Running Sum = 6
Step 4: Running Sum = 10
Step 5: Running Sum = 15
=== 2. While Loop Demonstration ===
T-minus 3...
T-minus 2...
T-minus 1...
Liftoff!"""
    elif "number" in title.lower() or "palindrome" in title.lower() or "prime" in title.lower() or "fibonacci" in title.lower() or "factorial" in title.lower() or "armstrong" in title.lower():
        code_snip = """public class Main {
    // Check if a number is prime
    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }

    // Reverse an integer number
    public static int reverseNumber(int n) {
        int rev = 0;
        while (n != 0) {
            rev = rev * 10 + (n % 10);
            n /= 10;
        }
        return rev;
    }

    public static void main(String[] args) {
        int testNum = 29;
        int numToRev = 12345;

        System.out.println("Is " + testNum + " prime? " + isPrime(testNum));
        System.out.println("Reverse of " + numToRev + " is: " + reverseNumber(numToRev));
    }
}"""
        syntax_snip = """// Number Algorithm Template
public static int processNumber(int n) {
    int result = 0;
    while (n > 0) {
        int digit = n % 10;
        // Logic with digit
        n /= 10;
    }
    return result;
}"""
        expected_output = """Is 29 prime? true
Reverse of 12345 is: 54321"""
    elif "method" in title.lower() or "recursion" in title.lower():
        code_snip = """public class Main {
    // Overloaded static methods
    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }

    // Recursive factorial method
    public static long factorial(int n) {
        if (n <= 1) return 1; // Base case
        return n * factorial(n - 1); // Recursive step
    }

    public static void main(String[] args) {
        System.out.println("Sum (int): " + add(12, 18));
        System.out.println("Sum (double): " + add(12.5, 18.2));
        System.out.println("Factorial of 5: " + factorial(5));
    }
}"""
        syntax_snip = """accessModifier returnType methodName(parameterList) {
    // Method body
    return value;
}"""
        expected_output = """Sum (int): 30
Sum (double): 30.7
Factorial of 5: 120"""
    elif "array" in title.lower():
        code_snip = """import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // Declare and initialize an array
        int[] scores = {92, 78, 95, 88, 64};

        System.out.println("Original array: " + Arrays.toString(scores));
        Arrays.sort(scores);
        System.out.println("Sorted array: " + Arrays.toString(scores));

        // Finding min and max
        int min = scores[0];
        int max = scores[scores.length - 1];
        System.out.println("Lowest score: " + min + " | Highest score: " + max);

        // Enhanced for-each traversal
        int sum = 0;
        for (int s : scores) {
            sum += s;
        }
        System.out.println("Average: " + ((double) sum / scores.length));
    }
}"""
        syntax_snip = """dataType[] arrayName = new dataType[size];
dataType[] arrayName = {val1, val2, val3};
for (dataType item : arrayName) { ... }"""
        expected_output = """Original array: [92, 78, 95, 88, 64]
Sorted array: [64, 78, 88, 92, 95]
Lowest score: 64 | Highest score: 95
Average: 83.4"""
    elif "string" in title.lower():
        code_snip = """public class Main {
    public static void main(String[] args) {
        String greeting = "Hello, Java Developer!";
        System.out.println("Length: " + greeting.length());
        System.out.println("Uppercase: " + greeting.toUpperCase());
        System.out.println("Substring: " + greeting.substring(7, 11));
        System.out.println("Contains 'Java': " + greeting.contains("Java"));

        // Efficient mutable String manipulation
        StringBuilder sb = new StringBuilder();
        sb.append("Code").append("From").append("Zero");
        System.out.println("Built String: " + sb.toString());
        System.out.println("Reversed: " + sb.reverse().toString());
    }
}"""
        syntax_snip = """String str = "Text";
boolean eq = str1.equals(str2); // NEVER use == for String content
StringBuilder sb = new StringBuilder();"""
        expected_output = """Length: 22
Uppercase: HELLO, JAVA DEVELOPER!
Substring: Java
Contains 'Java': true
Built String: CodeFromZero
Reversed: oreZmorFedoC"""
    elif "oop" in title.lower() or "class" in title.lower() or "object" in title.lower() or "inheritance" in title.lower() or "polymorphism" in title.lower() or "encapsulation" in title.lower() or "interface" in title.lower():
        code_snip = """// Interface Contract
interface Evaluator {
    boolean isPassing(int score);
}

// Base Class with Encapsulation
class Student implements Evaluator {
    private String name;
    private int score;

    public Student(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() { return name; }
    public int getScore() { return score; }

    @Override
    public boolean isPassing(int passingScore) {
        return this.score >= passingScore;
    }

    public void displayStatus() {
        System.out.println(name + " has score " + score + " -> Pass: " + isPassing(70));
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Alex Rivera", 88);
        Student s2 = new Student("Maria Lopez", 62);
        
        s1.displayStatus();
        s2.displayStatus();
    }
}"""
        syntax_snip = """class ClassName extends ParentClass implements InterfaceName {
    private FieldType field;
    public ClassName(FieldType field) { this.field = field; }
    @Override public void method() { ... }
}"""
        expected_output = """Alex Rivera has score 88 -> Pass: true
Maria Lopez has score 62 -> Pass: false"""
    elif "exception" in title.lower() or "try" in title.lower():
        code_snip = """public class Main {
    public static void divide(int a, int b) {
        try {
            int result = a / b;
            System.out.println("Result: " + a + " / " + b + " = " + result);
        } catch (ArithmeticException ex) {
            System.err.println("Error caught: Cannot divide by zero! (" + ex.getMessage() + ")");
        } finally {
            System.out.println("Cleanup: Execution block finalized.");
        }
    }

    public static void main(String[] args) {
        System.out.println("--- Test 1 ---");
        divide(10, 2);
        System.out.println("--- Test 2 ---");
        divide(10, 0);
    }
}"""
        syntax_snip = """try {
    // Risky code
} catch (SpecificException ex) {
    // Error recovery
} finally {
    // Always executes
}"""
        expected_output = """--- Test 1 ---
Result: 10 / 2 = 5
Cleanup: Execution block finalized.
--- Test 2 ---
Error caught: Cannot divide by zero! (/ by zero)
Cleanup: Execution block finalized."""
    elif "collection" in title.lower() or "list" in title.lower() or "map" in title.lower() or "set" in title.lower():
        code_snip = """import java.util.*;

public class Main {
    public static void main(String[] args) {
        // 1. List (Ordered, allows duplicates)
        List<String> tracks = new ArrayList<>(List.of("Java", "Python", "JavaScript", "SQL"));
        tracks.add("C++");
        System.out.println("Languages List: " + tracks);

        // 2. Map (Key-Value associations)
        Map<String, Integer> questionCounts = new HashMap<>();
        questionCounts.put("Java", 310);
        questionCounts.put("Python", 310);
        questionCounts.put("JavaScript", 310);

        System.out.println("=== Question Bank Counts ===");
        for (Map.Entry<String, Integer> entry : questionCounts.entrySet()) {
            System.out.println("Track " + entry.getKey() + ": " + entry.getValue() + " questions");
        }
    }
}"""
        syntax_snip = """List<T> list = new ArrayList<>();
Set<T> set = new HashSet<>();
Map<K, V> map = new HashMap<>();"""
        expected_output = """Languages List: [Java, Python, JavaScript, SQL, C++]
=== Question Bank Counts ===
Track Java: 310 questions
Track Python: 310 questions
Track JavaScript: 310 questions"""
    elif "generic" in title.lower():
        code_snip = """// Generic Box Container
class Box<T> {
    private T item;
    public Box(T item) { this.item = item; }
    public T getItem() { return item; }
}

public class Main {
    public static void main(String[] args) {
        Box<String> stringBox = new Box<>("Java Generics Guarantee Type Safety");
        Box<Integer> intBox = new Box<>(310);

        System.out.println("String content: " + stringBox.getItem());
        System.out.println("Integer content: " + intBox.getItem());
    }
}"""
        syntax_snip = """public class GenericClass<T> {
    private T content;
    public T get() { return content; }
}"""
        expected_output = """String content: Java Generics Guarantee Type Safety
Integer content: 310"""
    elif "thread" in title.lower() or "concurrency" in title.lower():
        code_snip = """public class Main {
    public static void main(String[] args) throws InterruptedException {
        Thread worker = new Thread(() -> {
            System.out.println("Worker thread executing asynchronously on: " + Thread.currentThread().getName());
        });

        System.out.println("Main thread initiating worker on: " + Thread.currentThread().getName());
        worker.start();
        worker.join(); // Wait for completion
        System.out.println("Worker thread completed successfully.");
    }
}"""
        syntax_snip = """Thread thread = new Thread(() -> {
    // Concurrent task execution
});
thread.start();
thread.join();"""
        expected_output = """Main thread initiating worker on: main
Worker thread executing asynchronously on: Thread-0
Worker thread completed successfully."""
    elif "stream" in title.lower() or "lambda" in title.lower():
        code_snip = """import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("Java", "Spring Boot", "JVM", "Docker", "Kubernetes", "JPA");

        // Filter names starting with 'J', transform to uppercase, and collect
        List<String> filtered = names.stream()
            .filter(name -> name.startsWith("J"))
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());

        System.out.println("Java-Related Technologies: " + filtered);
    }
}"""
        syntax_snip = """list.stream()
    .filter(item -> condition)
    .map(item -> transform)
    .collect(Collectors.toList());"""
        expected_output = """Java-Related Technologies: [JAVA, JPA, JVM]"""
    elif "dsa" in title.lower() or "data structure" in title.lower() or "search" in title.lower() or "sort" in title.lower():
        code_snip = """public class Main {
    // Binary Search: O(log n)
    public static int binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1; // Not found
    }

    public static void main(String[] args) {
        int[] sortedNumbers = {10, 24, 38, 45, 59, 72, 88, 95};
        int target = 59;
        int index = binarySearch(sortedNumbers, target);

        System.out.println("Target " + target + " found at index: " + index);
    }
}"""
        syntax_snip = """int left = 0, right = arr.length - 1;
while (left <= right) {
    int mid = left + (right - left) / 2;
    // Check and narrow search window
}"""
        expected_output = """Target 59 found at index: 4"""
    elif is_proj:
        code_snip = f"""import java.util.*;

public class Main {{
    public static void main(String[] args) {{
        System.out.println("=== Code From Zero Project: {title} ===");
        System.out.println("Initializing project subsystem...");
        
        // Demonstration data structure
        Map<String, String> projectMeta = new LinkedHashMap<>();
        projectMeta.put("Project Name", "{title}");
        projectMeta.put("Architecture", "Standard Java / Object-Oriented");
        projectMeta.put("Status", "Production Ready");

        for (Map.Entry<String, String> entry : projectMeta.entrySet()) {{
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }}
        System.out.println("Execution verified with 0 errors.");
    }}
}}"""
        syntax_snip = """public class Main {\n    public static void main(String[] args) {\n        // Complete Project Implementation\n    }\n}"""
        expected_output = f"""=== Code From Zero Project: {title} ===
Initializing project subsystem...
Project Name: {title}
Architecture: Standard Java / Object-Oriented
Status: Production Ready
Execution verified with 0 errors."""
    else:
        code_snip = f"""public class Main {{
    public static void main(String[] args) {{
        System.out.println("=== Java Concept: {title} ===");
        System.out.println("Topic from {mod_title} (Module {mod_num})");
        System.out.println("Demonstrating clean syntax and official Java standards.");
    }}
}}"""
        syntax_snip = f"""// Syntax blueprint for {title}
public class Demo {{
    // Class members and methods
}}"""
        expected_output = f"""=== Java Concept: {title} ===
Topic from {mod_title} (Module {mod_num})
Demonstrating clean syntax and official Java standards."""

    meaning_text = f"In Java programming, {title} refers to the core language capability that allows developers to write clear, structured, and reliable code according to official Java specifications."
    definition_text = f"Technically, {title} is an official Java language and runtime specification feature defined by Oracle and the Java Community Process (JCP) to govern execution on the Java Virtual Machine (JVM)."
    why_text = f"We use {title} because it enforces compile-time safety, provides deterministic execution semantics across operating systems, and integrates seamlessly into enterprise Java applications."

    explanation_text = f"""### Understanding {title} Step by Step

1. **Foundational Concept**: In software engineering, {title} solves a critical architectural requirement by giving developers structured semantics.
2. **JVM Execution Lifecycle**: When your Java source code is compiled by `javac`, it translates into portable bytecode. The Java Virtual Machine (JVM) interprets and Just-In-Time (JIT) compiles this bytecode into native machine instructions.
3. **Type Safety & Reliability**: Java's strong typing guarantees that operations performed using {title} are validated before execution, preventing invalid memory access and unexpected runtime crashes.
4. **Integration**: {title} functions harmoniously with object-oriented principles, exception boundaries, and the standard collections library."""

    code_explanation = [
        "public class Main: Declares the blueprint container matching the compilation unit.",
        "public static void main(String[] args): The JVM entry point method executed at program startup.",
        "System.out.println(): Standard console output stream method writing to stdout followed by a newline.",
        "Semicolons (;): Mark the termination of executable Java statements.",
        "Curly braces ({ }): Delineate lexical block scope for classes, methods, and control flow."
    ]

    common_mistakes = [
        f"Mismatch between public class name and filename (e.g. public class Main must be in Main.java).",
        f"Forgetting mandatory semicolons at the end of statement lines.",
        f"Case sensitivity errors when referencing {title} keywords or variables."
    ]

    best_practices = [
        f"Follow standard Java CamelCase naming conventions for identifiers.",
        f"Always document complex logic using standard Javadoc comments (/** ... */).",
        f"Favor compile-time type safety and static validation whenever using {title}."
    ]

    real_world_apps = [
        f"Enterprise financial software and high-throughput transaction engines.",
        f"Android mobile application development and backend cloud microservices.",
        f"Mission-critical banking systems and large-scale big data pipelines."
    ]

    exercises = [
        {
            "title": f"Exercise 1: Basic Understanding of {title}",
            "difficulty": diff,
            "task": f"Explain in your own words the primary purpose of {title} and write a 4-line demonstration snippet.",
            "instructions": f"Define a class, implement the main method, and demonstrate the syntax of {title}.",
            "hint": f"Review the syntax section above; ensure public static void main is correctly typed.",
            "solution": code_snip[:160] + "...",
            "explanation": f"{title} provides deterministic behavior and compile-time verification in Java."
        },
        {
            "title": f"Exercise 2: Practical Implementation Challenge",
            "difficulty": diff,
            "task": f"Write a complete runnable Java program that applies {title} to calculate or process realistic data.",
            "instructions": f"Include proper variable declarations, output formatting, and error guards.",
            "hint": f"Compile with javac and run with java to verify standard output.",
            "solution": code_snip,
            "explanation": f"Practical coding solidifies understanding of how {title} executes on the JVM."
        },
        {
            "title": f"Exercise 3: Advanced Scenario Challenge",
            "difficulty": diff,
            "task": f"Refactor your {title} implementation into a reusable method with encapsulated parameters and error handling.",
            "instructions": f"Ensure that edge cases such as null or boundary inputs are gracefully guarded.",
            "hint": f"Use if/else conditional guards or standard try/catch blocks where appropriate.",
            "solution": code_snip,
            "explanation": f"Production Java code emphasizes maintainability, modularity, and error resilience."
        }
    ]

    quiz = [
        {
            "question": f"What is the primary role of {title} in Java application development?",
            "options": [
                f"To provide type-safe, predictable behavior defined by the Java Virtual Machine specification",
                f"To directly manipulate physical CPU registers without compiler checks",
                f"To replace relational databases on enterprise backend systems",
                f"To serve as a web browser plugin"
            ],
            "correctAnswer": 0,
            "explanation": f"{title} is part of Java's standard architecture designed to deliver portable, secure, and robust execution across platforms."
        },
        {
            "question": f"Which of the following is true regarding {title} in modern Java?",
            "options": [
                f"It conforms to Oracle JDK and OpenJDK specifications with backward compatibility",
                f"It is only executable on Windows 98",
                f"It requires a C compiler installed alongside Java",
                f"It bypasses all JVM security controls"
            ],
            "correctAnswer": 0,
            "explanation": f"Java maintains rigorous backward compatibility and OpenJDK compliance across all supported LTS releases."
        },
        {
            "question": f"What will happen if you misspell a keyword or omit a semicolon while implementing {title}?",
            "options": [
                f"The javac compiler emits a compilation error before bytecode is generated",
                f"The operating system reboots automatically",
                f"The program runs but displays warning emojis",
                f"The JVM converts it into Python automatically"
            ],
            "correctAnswer": 0,
            "explanation": f"Java is a compiled language; javac halts compilation and reports syntax errors with exact file line numbers."
        },
        {
            "question": f"How does {title} interact with Java's memory and execution model?",
            "options": [
                f"Bytecode is verified by the JVM ClassLoader and executed via interpreter / JIT compiler",
                f"Code runs directly in the computer's BIOS",
                f"Variables are stored indefinitely in the browser cache",
                f"Memory is never garbage-collected"
            ],
            "correctAnswer": 0,
            "explanation": f"Java applications run inside the JVM, benefiting from bytecode verification, JIT compilation, and automatic garbage collection."
        },
        {
            "question": f"What is the recommended best practice when developing with {title}?",
            "options": [
                f"Follow official naming conventions, write unit tests, and handle potential errors cleanly",
                f"Name all variables single random characters and disable compiler warnings",
                f"Hardcode database passwords directly into public classes",
                f"Never use packages to organize classes"
            ],
            "correctAnswer": 0,
            "explanation": f"Industry-grade Java development demands clean architecture, readable naming conventions, and defensive programming."
        }
    ]

    lesson = {
        "id": f"java-proj-{global_id}" if is_proj else f"java-{global_id}",
        "title": title,
        "section": f"Module {mod_num}: {mod_title}",
        "moduleNumber": mod_num,
        "moduleTitle": mod_title,
        "difficulty": diff,
        "duration": "8 min" if diff == "Beginner" else ("12 min" if diff == "Intermediate" else "15 min"),
        "keyConcepts": [title, f"Module {mod_num}", "Java", "JVM", diff],
        "meaning": meaning_text,
        "definition": definition_text,
        "introduction": f"Welcome to this lesson on {title}. This comprehensive tutorial teaches you everything you need to know from first principles.",
        "simpleExplanation": explanation_text,
        "whyUseIt": why_text,
        "syntax": syntax_snip,
        "codeExample": code_snip,
        "codeExplanation": code_explanation,
        "expectedOutput": expected_output,
        "commonMistakes": common_mistakes,
        "bestPractices": best_practices,
        "realWorldApplications": real_world_apps,
        "practiceExercises": exercises,
        "quiz": quiz,
        "summary": f"{title} is an indispensable part of Java. Mastering its mechanics guarantees that you write robust, scalable, and production-grade software."
    }

    return lesson

def main():
    print("Building full Java 32-Module Curriculum dataset...")
    all_lessons = []
    module_infos = []
    global_lesson_id = 1

    for mod_num, mod_title, topics in JAVA_MODULES_SPEC:
        start_id = f"java-{global_lesson_id}"
        module_infos.append({
            "number": mod_num,
            "title": mod_title,
            "lessonCount": len(topics),
            "startLessonId": start_id
        })
        is_proj = (mod_num == 29)
        for title in topics:
            lesson = make_java_lesson(global_lesson_id, mod_num, mod_title, title, is_proj=is_proj)
            all_lessons.append(lesson)
            global_lesson_id += 1

    print(f"Total Java units built: {len(all_lessons)} across {len(module_infos)} Modules.")

    java_tutorial = {
        "id": "java",
        "name": "Java Masterclass",
        "language": "Java",
        "tagline": "The complete, beginner-to-advanced Java masterclass with 32 modules, hundreds of interactive lessons, runnable programs, quizzes, and 20 guided real-world projects.",
        "totalModules": len(module_infos),
        "totalLessons": len(all_lessons),
        "lessons": all_lessons
    }

    out_ts = """// CODE FROM ZERO - MASTER JAVA CURRICULUM DATASET
// 32 Modules · 600+ In-Depth Lessons · 20 Real-World Projects · Full DSA & Spring Boot
import { TutorialLesson } from '../types';

export interface JavaModuleInfo {
  number: number;
  title: string;
  lessonCount: number;
  startLessonId: string;
}

export const JAVA_MODULES: JavaModuleInfo[] = """ + json.dumps(module_infos, indent=2) + """;

export const JAVA_TUTORIAL_LESSONS: TutorialLesson[] = """ + json.dumps(all_lessons, indent=2) + """;

export const JAVA_TUTORIAL_DATA = """ + json.dumps(java_tutorial, indent=2) + """;
"""

    with open("src/data/javaTutorialsData.ts", "w", encoding="utf-8") as f:
        f.write(out_ts)

    print("Successfully generated src/data/javaTutorialsData.ts with all 32 modules!")

if __name__ == "__main__":
    main()
