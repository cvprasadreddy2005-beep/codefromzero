import json
import os
import sys

def build_questions():
    questions = []
    qid = 1

    # Helpers
    def add_q(category, difficulty, topic, qtype, question_text, hints, solution, explanation, **kwargs):
        nonlocal qid
        item = {
            "id": qid,
            "category": category,
            "difficulty": difficulty,
            "topic": topic,
            "type": qtype,
            "question": question_text,
            "hints": hints,
            "solution": solution,
            "explanation": explanation,
            "options": kwargs.get("options", []),
            "correctAnswer": kwargs.get("correctAnswer", None),
            "code": kwargs.get("code", ""),
            "examples": kwargs.get("examples", []),
            "constraints": kwargs.get("constraints", ["Input values within standard bounds"]),
            "timeComplexity": kwargs.get("timeComplexity", None),
            "spaceComplexity": kwargs.get("spaceComplexity", None),
            "tags": kwargs.get("tags", [category.lower().replace(" ", "-"), topic.lower().replace(" ", "-")])
        }
        questions.append(item)
        qid += 1
        return item

    # =========================================================================
    # 1. JAVASCRIPT (310 Questions)
    # =========================================================================
    js_topics = [
        ("Variables & Hoisting", 15),
        ("Primitives & Type Coercion", 15),
        ("Operators & Expressions", 15),
        ("Conditionals & Flow", 15),
        ("Loops & Iteration", 15),
        ("Functions & Scope", 20),
        ("Closures & Lexical Scope", 20),
        ("Arrays & Array Methods", 30),
        ("Objects & Prototypes", 20),
        ("Destructuring & Spread", 15),
        ("Classes & Inheritance", 20),
        ("Promises & Async/Await", 25),
        ("Event Loop & Microtasks", 15),
        ("DOM & Event Handling", 20),
        ("Error Handling", 15),
        ("Storage & Web APIs", 15),
        ("Regular Expressions", 15),
        ("Performance & Optimization", 15),
        ("TypeScript in JS", 10),
    ]
    assert sum(count for _, count in js_topics) == 310, f"JS count is {sum(count for _, count in js_topics)}"

    # =========================================================================
    # 2. PYTHON (310 Questions)
    # =========================================================================
    py_topics = [
        ("Variables & Primitive Types", 15),
        ("Strings & Formatting", 20),
        ("Lists & Comprehensions", 25),
        ("Tuples & Immutability", 15),
        ("Dictionaries & Dict Ops", 25),
        ("Sets & Set Operations", 15),
        ("Conditionals & Match-Case", 15),
        ("Loops & Iterators", 15),
        ("Functions & Args (*args, **kwargs)", 20),
        ("Lambdas & Map/Filter/Zip", 20),
        ("Scopes & Namespaces", 10),
        ("OOP: Classes & Instances", 25),
        ("Dunder Methods & Data Model", 15),
        ("OOP: Inheritance & Polymorphism", 15),
        ("File I/O & Context Managers", 20),
        ("Exception Handling", 15),
        ("Generators & Yield", 15),
        ("Decorators & Metaprogramming", 15),
        ("Standard Library & Modules", 20),
        ("Asyncio & Concurrency", 10),
    ]
    assert sum(count for _, count in py_topics) == 310, f"PY count is {sum(count for _, count in py_topics)}"

    # =========================================================================
    # 3. JAVA (310 Questions)
    # =========================================================================
    java_topics = [
        ("Java Basics & Primitive Types", 15),
        ("Operators & Expressions", 15),
        ("Control Flow & Switch", 15),
        ("Loops & Loop Control", 15),
        ("Methods & Overloading", 15),
        ("Recursion in Java", 15),
        ("Arrays (1D & 2D)", 20),
        ("String & StringBuilder", 20),
        ("Classes, Objects & Constructors", 20),
        ("Encapsulation & Access Modifiers", 15),
        ("Inheritance & super Keyword", 15),
        ("Polymorphism & Overriding", 15),
        ("Abstract Classes & Interfaces", 15),
        ("Collections: List & ArrayList", 20),
        ("Collections: Set & HashSet", 15),
        ("Collections: Map & HashMap", 20),
        ("Generics & Type Parameters", 15),
        ("Exceptions & Try-With-Resources", 15),
        ("Streams & Lambda Expressions", 25),
        ("Multithreading & Synchronization", 15),
        ("Memory Model & JVM Garbage Collection", 10),
    ]
    assert sum(count for _, count in java_topics) == 310, f"Java count is {sum(count for _, count in java_topics)}"

    # =========================================================================
    # 4. C++ PROGRAMMING (310 Questions)
    # =========================================================================
    cpp_topics = [
        ("C++ Basics & I/O Streams", 15),
        ("Data Types, Modifiers & Limits", 10),
        ("Operators & Control Structures", 15),
        ("Functions, Inlining & References", 15),
        ("Pointers & Pointer Arithmetic", 20),
        ("Dynamic Memory: new & delete", 15),
        ("Structs, Enums & Type Aliases", 15),
        ("Classes & Member Functions", 20),
        ("Constructors & Destructors", 15),
        ("Operator Overloading", 15),
        ("Inheritance & Access Control", 15),
        ("Polymorphism & Virtual Functions", 20),
        ("Abstract Classes & Interfaces", 15),
        ("Templates & Generic Programming", 15),
        ("STL Sequence Containers: vector & list", 25),
        ("STL Associative Containers: map & set", 20),
        ("STL Adapters: stack, queue & priority_queue", 15),
        ("STL Algorithms: sort, search & transform", 15),
        ("Smart Pointers: unique_ptr & shared_ptr", 15),
        ("RAII & Resource Management", 15),
        ("Move Semantics & Rvalue References", 10),
    ]
    assert sum(count for _, count in cpp_topics) == 310, f"CPP count is {sum(count for _, count in cpp_topics)}"

    # =========================================================================
    # 5. C PROGRAMMING (310 Questions)
    # =========================================================================
    c_topics = [
        ("C Syntax & Basic Types", 15),
        ("Format Specifiers & I/O", 15),
        ("Operators & Precedence", 15),
        ("Control Flow: if, switch, ternary", 15),
        ("Loops: for, while, do-while", 15),
        ("Functions & Parameter Passing", 20),
        ("Recursion & Call Stack", 15),
        ("Arrays & Multidimensional Arrays", 20),
        ("Pointers & Address Arithmetic", 25),
        ("Pointers with Arrays & Functions", 15),
        ("Dynamic Memory: malloc, calloc, realloc, free", 25),
        ("Strings in C & string.h", 20),
        ("Structures & Nested Structs", 20),
        ("Unions & Memory Overlap", 10),
        ("Typedef, Enums & Constants", 10),
        ("File Operations: fopen, fread, fwrite", 20),
        ("Bitwise Operators & Bit Manipulation", 15),
        ("Preprocessor Directives & Macros", 15),
        ("Function Pointers & Callbacks", 15),
        ("Memory Safety & Common C Pitfalls", 15),
    ]
    assert sum(count for _, count in c_topics) == 310, f"C count is {sum(count for _, count in c_topics)}"

    # =========================================================================
    # 6. SQL AND DATABASES (310 Questions)
    # =========================================================================
    sql_topics = [
        ("Relational Concepts & RDBMS", 15),
        ("SELECT, Aliasing & DISTINCT", 15),
        ("WHERE Clause & Filtering Operators", 15),
        ("ORDER BY, LIMIT & Pagination", 15),
        ("Aggregate Functions: COUNT, SUM, AVG", 20),
        ("GROUP BY & HAVING Clauses", 20),
        ("String & Mathematical Functions", 15),
        ("Date & Time Functions in SQL", 15),
        ("INNER JOIN & Multiple Joins", 20),
        ("LEFT JOIN, RIGHT JOIN & NULL Handling", 20),
        ("FULL OUTER JOIN & CROSS JOIN", 15),
        ("Self Joins & Complex Hierarchies", 15),
        ("Subqueries: Scalar, In, Exists", 25),
        ("Common Table Expressions (CTEs)", 15),
        ("Window Functions: ROW_NUMBER & RANK", 20),
        ("Window Functions: LAG, LEAD, FIRST_VALUE", 15),
        ("DDL: CREATE, ALTER, DROP, TRUNCATE", 15),
        ("Constraints: PK, FK, UNIQUE, CHECK", 15),
        ("DML: INSERT, UPDATE, DELETE", 15),
        ("Indexing & Query Performance", 15),
        ("Transactions, ACID & Concurrency", 15),
        ("Database Normalization (1NF, 2NF, 3NF, BCNF)", 10),
    ]
    assert sum(count for _, count in sql_topics) == 310, f"SQL count is {sum(count for _, count in sql_topics)}"

    # =========================================================================
    # 7. HTML & CSS (310 Questions)
    # =========================================================================
    html_css_topics = [
        ("HTML5 Document Structure & Doctype", 10),
        ("Semantic Elements: header, nav, main, section", 20),
        ("Text Elements, Headings & Quotes", 15),
        ("Links, Anchors & Navigation", 15),
        ("Images, Media & Picture Elements", 15),
        ("Forms: Inputs, Textareas & Buttons", 25),
        ("Form Validation & Accessibility", 15),
        ("HTML Tables & Tabular Data", 15),
        ("ARIA Roles & Web Accessibility", 15),
        ("Meta Tags, Viewport & Head Settings", 15),
        ("CSS Syntax, Cascading & Inheritance", 15),
        ("CSS Selectors: Class, ID, Attributes", 25),
        ("CSS Specificity & !important", 15),
        ("CSS Box Model & box-sizing", 20),
        ("Display Properties & Flow", 15),
        ("CSS Positioning: relative, absolute, sticky", 20),
        ("Flexbox: Container Layout", 25),
        ("Flexbox: Item Alignment & Sizing", 15),
        ("CSS Grid: Columns, Rows & Fr Units", 25),
        ("CSS Grid: Alignment & Template Areas", 15),
        ("Responsive Design & Media Queries", 20),
        ("CSS Transitions & Transforms", 20),
        ("CSS Animations & Custom Properties", 15),
    ]
    assert sum(count for _, count in html_css_topics) == 310, f"HTML/CSS count is {sum(count for _, count in html_css_topics)}"

    # =========================================================================
    # 8. DATA STRUCTURES & ALGORITHMS (310 Questions)
    # =========================================================================
    dsa_topics = [
        ("Big-O Notation & Complexity Analysis", 15),
        ("Array Manipulation & Prefix Sums", 20),
        ("Two Pointers Technique", 20),
        ("Sliding Window Technique", 20),
        ("String Algorithms & Anagrams", 20),
        ("Singly Linked Lists: Traversal & Reverse", 20),
        ("Linked Lists: Cycle Detection & Fast-Slow", 15),
        ("Doubly Linked Lists & Deque", 15),
        ("Stack: Monotonic & Expression Parsing", 20),
        ("Queue: Circular & Monotonic Queues", 15),
        ("Binary Trees: DFS & BFS Traversals", 20),
        ("Binary Trees: Depth, Diameter & Symmetry", 20),
        ("Binary Search Trees: Search, Insert & Validate", 20),
        ("Heaps & Priority Queues", 15),
        ("Hash Maps & Hash Sets", 20),
        ("Binary Search & Variants", 15),
        ("Sorting: Merge, Quick, Insertion", 20),
        ("Graph Representation & BFS/DFS", 20),
        ("Graph: Shortest Path & Topological Sort", 15),
        ("Backtracking: Subsets & Permutations", 15),
        ("Dynamic Programming: 1D & 2D Memoization", 25),
    ]
    assert sum(count for _, count in dsa_topics) == 310, f"DSA count is {sum(count for _, count in dsa_topics)}"

    print("All 8 language topic definitions verified with 310 questions each = 2,480 questions!")

build_questions()
