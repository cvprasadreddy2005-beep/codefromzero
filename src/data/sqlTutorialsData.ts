// CODE FROM ZERO - COMPLETE SQL & DATABASES TUTORIALS CURRICULUM
// 15 Comprehensive Modules covering RDBMS fundamentals, CRUD, Joins, Normalization, Indexes & 10 projects
import { TutorialLesson } from '../types';

export interface SQLModuleInfo {
  number: number;
  title: string;
  lessonCount: number;
  startLessonId: string;
  description: string;
}

export const SQL_MODULES: SQLModuleInfo[] = [
  { number: 1, title: "Database Fundamentals", lessonCount: 16, startLessonId: "sql-mod1-1", description: "Data, DBMS, RDBMS, tables, rows, columns, keys, and Relational vs NoSQL." },
  { number: 2, title: "Database Setup", lessonCount: 10, startLessonId: "sql-mod2-1", description: "PostgreSQL, MySQL, SQLite, clients, schemas, and connection strings." },
  { number: 3, title: "Basic SQL Commands (DDL & DML)", lessonCount: 16, startLessonId: "sql-mod3-1", description: "CREATE TABLE, INSERT, SELECT, UPDATE, DELETE, WHERE, ORDER BY, and LIMIT." },
  { number: 4, title: "Data Types & Constraints", lessonCount: 15, startLessonId: "sql-mod4-1", description: "INT, VARCHAR, TEXT, TIMESTAMP, PRIMARY KEY, FOREIGN KEY, NOT NULL, and UNIQUE." },
  { number: 5, title: "Filtering & Operators", lessonCount: 13, startLessonId: "sql-mod5-1", description: "AND, OR, NOT, BETWEEN, IN, LIKE with wildcards (%), and IS NULL." },
  { number: 6, title: "SQL Functions & Aggregation", lessonCount: 14, startLessonId: "sql-mod6-1", description: "COUNT, SUM, AVG, MIN, MAX, ROUND, COALESCE, CASE WHEN, and string functions." },
  { number: 7, title: "Grouping & Aggregation", lessonCount: 10, startLessonId: "sql-mod7-1", description: "GROUP BY, HAVING vs WHERE, multi-column grouping, and analytical reports." },
  { number: 8, title: "SQL Joins", lessonCount: 11, startLessonId: "sql-mod8-1", description: "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN, and self joins." },
  { number: 9, title: "Subqueries & Advanced Queries", lessonCount: 20, startLessonId: "sql-mod9-1", description: "Correlated subqueries, EXISTS, CTEs (WITH), UNION, and Window functions (ROW_NUMBER)." },
  { number: 10, title: "Database Design & Normalization", lessonCount: 15, startLessonId: "sql-mod10-1", description: "ER diagrams, 1:1, 1:N, M:N junction tables, 1NF, 2NF, and 3NF normalization rules." },
  { number: 11, title: "Transactions & Database Safety", lessonCount: 13, startLessonId: "sql-mod11-1", description: "ACID properties, BEGIN, COMMIT, ROLLBACK, SQL injection, and prepared statements." },
  { number: 12, title: "Indexes & Performance Optimization", lessonCount: 10, startLessonId: "sql-mod12-1", description: "B-Tree indexes, composite indexes, EXPLAIN ANALYZE, and query optimization." },
  { number: 13, title: "Database Administration Basics", lessonCount: 10, startLessonId: "sql-mod13-1", description: "Roles, permissions, GRANT/REVOKE, backups (pg_dump), and CSV imports." },
  { number: 14, title: "Connecting Databases to Apps", lessonCount: 11, startLessonId: "sql-mod14-1", description: "Python psycopg2, Node.js pg/pg-pool, connection strings, and security." },
  { number: 15, title: "SQL Practical Projects", lessonCount: 10, startLessonId: "sql-mod15-1", description: "10 Complete schemas: E-Commerce Store, Student Management, and Hospital Database." }
];

export const SQL_TUTORIAL_LESSONS: TutorialLesson[] = [
  // Module 1: Fundamentals
  {
    id: "sql-mod1-1",
    title: "Database Fundamentals: What is SQL, DBMS & Relational Tables?",
    section: "Module 1: Database Fundamentals",
    moduleNumber: 1,
    moduleTitle: "Database Fundamentals",
    difficulty: "Beginner",
    duration: "8 min",
    keyConcepts: ["Data", "DBMS", "RDBMS", "SQL", "Tables & Keys"],
    meaning: "A database is an organized, persistent electronic collection of data stored and accessed electronically from a computer system. SQL (Structured Query Language) is the universal language used to communicate with relational databases.",
    definition: "SQL is an ANSI/ISO standard declarative language for storing, manipulating, and retrieving data in Relational Database Management Systems (RDBMS) such as PostgreSQL, MySQL, and SQLite.",
    whyUseIt: "Flat files (like text files or Excel spreadsheets) corrupt easily under concurrent access, cannot enforce foreign key integrity, and slow down when millions of rows are queried. Relational databases solve all of these problems.",
    introduction: "Every tech platform—from Instagram and Amazon to your bank and Code From Zero—stores critical user records, payments, and progress in relational databases. Learning SQL allows you to command this data.",
    simpleExplanation: "A relational database is like a collection of spreadsheets with superpowers: you can link sheets together using IDs (keys), and query billions of rows in milliseconds using simple declarative English-like statements.",
    syntax: "-- Basic SQL Query Structure\nSELECT column1, column2 \nFROM table_name \nWHERE condition \nORDER BY column1 ASC;",
    codeExample: "-- Initializing our practice learners database\nCREATE TABLE learners (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(150) UNIQUE NOT NULL,\n    track VARCHAR(50) DEFAULT 'Full-Stack',\n    suitrate_score NUMERIC(4, 1) DEFAULT 0.0,\n    joined_at DATE DEFAULT CURRENT_DATE\n);\n\n-- Insert sample verified learners\nINSERT INTO learners (name, email, track, suitrate_score) VALUES\n('Sarah Connor', 'sarah@example.com', 'Python & AI', 94.5),\n('James Holden', 'james@example.com', 'Java Masterclass', 88.0),\n('Maya Lin', 'maya@example.com', 'Full-Stack Web', 96.2);\n\n-- Retrieve top learners\nSELECT id, name, track, suitrate_score \nFROM learners \nWHERE suitrate_score >= 90.0\nORDER BY suitrate_score DESC;",
    codeExplanation: [
      "CREATE TABLE learners: Creates a new relational table named 'learners'.",
      "id SERIAL PRIMARY KEY: Auto-incrementing unique integer identifier for each row.",
      "VARCHAR(100) NOT NULL: Text column that forbids null or empty values.",
      "INSERT INTO ... VALUES: Adds new record rows into the table.",
      "SELECT ... FROM ... WHERE ...: Declarative query that filters and sorts rows matching our criteria."
    ],
    expectedOutput: "+----+--------------+----------------+----------------+\n| id | name         | track          | suitrate_score |\n+----+--------------+----------------+----------------+\n| 3  | Maya Lin     | Full-Stack Web | 96.2           |\n| 1  | Sarah Connor | Python & AI    | 94.5           |\n+----+--------------+----------------+----------------+\n(2 rows returned in 1.4ms)",
    realWorldApplications: [
      "Storing user authentication credentials, profiles, and order histories.",
      "Financial ledgers where double-entry bookkeeping requires strict relational constraints."
    ],
    commonMistakes: [
      "Pronouncing SQL as individual letters only: both 'S-Q-L' and 'Sequel' are industry-standard pronunciations.",
      "Forgetting that SQL statements conventionally terminate with a semicolon (;)."
    ],
    practiceExercises: [
      {
        title: "Query Filter Practice",
        difficulty: "Beginner",
        task: "Write a SQL query that selects only the 'name' and 'email' of learners studying 'Python & AI'.",
        hint: "SELECT name, email FROM learners WHERE track = 'Python & AI';",
        solution: "SELECT name, email \nFROM learners \nWHERE track = 'Python & AI';"
      }
    ],
    quiz: [
      {
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Standard Question Language",
          "Sequential Query Logic",
          "Simple Quality Loop"
        ],
        correctAnswer: 0,
        explanation: "SQL stands for Structured Query Language, the standardized domain-specific language for managing data in relational databases."
      }
    ],
    summary: "SQL is the declarative standard for relational databases. Data is structured into tables with typed columns, primary keys, and relations.",
    relatedLessons: ["sql-mod1-2", "sql-mod3-1"]
  },

  // Module 3: Basic SQL Commands
  {
    id: "sql-mod3-1",
    title: "CRUD Operations: SELECT, INSERT, UPDATE, DELETE & WHERE Filters",
    section: "Module 3: Basic SQL Commands (DDL & DML)",
    moduleNumber: 3,
    moduleTitle: "Basic SQL Commands (DDL & DML)",
    difficulty: "Beginner",
    duration: "10 min",
    keyConcepts: ["CRUD", "SELECT", "INSERT", "UPDATE", "DELETE", "WHERE clause"],
    meaning: "CRUD stands for Create, Read, Update, and Delete—the four foundational operations performed on persistent data.",
    definition: "In SQL, CRUD is mapped to: INSERT (Create), SELECT (Read), UPDATE (Update), and DELETE (Delete), governed by WHERE clauses.",
    whyUseIt: "Every software feature from signing up, reading a feed, changing your password, to deleting a post relies on CRUD SQL queries.",
    introduction: "In this lesson, you will master writing bulletproof CRUD queries and learn the #1 rule of database administration: NEVER run UPDATE or DELETE without a WHERE clause!",
    simpleExplanation: "Think of a filing cabinet: INSERT puts a new file in a drawer; SELECT reads a file; UPDATE writes corrections on a file; DELETE shreds a file.",
    syntax: "-- The CRUD Commands\nINSERT INTO table (cols) VALUES (vals);\nSELECT cols FROM table WHERE filter;\nUPDATE table SET col = val WHERE filter;\nDELETE FROM table WHERE filter;",
    codeExample: "-- Demonstrating Safe CRUD Lifecycle\n-- 1. READ: Inspect existing products\nSELECT id, product_name, price, stock_quantity \nFROM products\nWHERE stock_quantity < 10;\n\n-- 2. UPDATE: Restock item and discount price\nUPDATE products\nSET price = price * 0.90, stock_quantity = stock_quantity + 25\nWHERE id = 104;\n\n-- 3. DELETE: Remove discontinued products (safely filtered!)\nDELETE FROM products\nWHERE is_discontinued = TRUE AND stock_quantity = 0;\n\n-- Verify final inventory\nSELECT id, product_name, price, stock_quantity \nFROM products \nORDER BY stock_quantity ASC;",
    codeExplanation: [
      "WHERE stock_quantity < 10: Filters rows before returning them.",
      "UPDATE products SET price = ... WHERE id = 104: Targets specifically the item with primary key 104.",
      "DELETE FROM ... WHERE ...: Ensures only discontinued items with 0 stock are removed.",
      "ORDER BY stock_quantity ASC: Sorts the resulting rows from lowest stock to highest."
    ],
    expectedOutput: "[Query Results: UPDATE 1 row affected]\n+-----+-----------------------+--------+----------------+\n| id  | product_name          | price  | stock_quantity |\n+-----+-----------------------+--------+----------------+\n| 104 | Mechanical Keyboard   | 89.99  | 32             |\n| 101 | Wireless Ergonomic... | 49.50  | 50             |\n+-----+-----------------------+--------+----------------+\n(2 rows in set)",
    realWorldApplications: [
      "Processing e-commerce purchases (INSERT order, UPDATE product stock, SELECT confirmation).",
      "Social media feeds updating like counts and deleting comments."
    ],
    commonMistakes: [
      "Running UPDATE or DELETE without a WHERE clause, which updates or wipes EVERY single row in the entire table!",
      "Confusing single quotes for text values ('text') with backticks or double quotes for column identifiers."
    ],
    practiceExercises: [
      {
        title: "Safe Update Exercise",
        difficulty: "Beginner",
        task: "Write an UPDATE query that increases the suitrate_score by 5.0 for the learner with email 'sarah@example.com'.",
        hint: "UPDATE learners SET suitrate_score = suitrate_score + 5.0 WHERE email = '...';",
        solution: "UPDATE learners \nSET suitrate_score = suitrate_score + 5.0 \nWHERE email = 'sarah@example.com';"
      }
    ],
    quiz: [
      {
        question: "What happens if you execute 'DELETE FROM learners;' without a WHERE clause?",
        options: [
          "It deletes all rows in the learners table",
          "It throws a syntax error",
          "It only deletes the first row",
          "It drops the table definition from the schema"
        ],
        correctAnswer: 0,
        explanation: "A DELETE statement without a WHERE clause targets all rows in the table and deletes every record, while leaving the empty table structure intact."
      }
    ],
    summary: "Master CRUD operations with SELECT, INSERT, UPDATE, and DELETE. Always double-check your WHERE conditions before executing state-changing queries.",
    relatedLessons: ["sql-mod1-1", "sql-mod6-1", "sql-mod8-1"]
  },

  // Module 8: Joins
  {
    id: "sql-mod8-1",
    title: "SQL Joins: INNER JOIN, LEFT JOIN & Multi-Table Relationships",
    section: "Module 8: SQL Joins",
    moduleNumber: 8,
    moduleTitle: "SQL Joins",
    difficulty: "Intermediate",
    duration: "12 min",
    keyConcepts: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "Foreign Keys", "ON clause"],
    meaning: "A JOIN clause combines rows from two or more tables based on a related column between them (typically primary key to foreign key).",
    definition: "Relational joins reassemble normalized data across tables: INNER JOIN returns rows matching in both tables; LEFT JOIN returns all rows from the left table and matched rows from the right table (filling with NULL if unmatched).",
    whyUseIt: "In well-designed databases, customer information is stored in one table and their orders in another. Joins let you view full customer order reports in one query without data duplication.",
    introduction: "In this lesson, you will master the most important query technique in relational databases: joining tables together using foreign keys.",
    simpleExplanation: "Think of two spreadsheets: one has Student Names with their Student IDs. The second has Course Grades with Student IDs. A JOIN matches the IDs so you see the Student Name right next to their Grade.",
    syntax: "SELECT a.col1, b.col2\nFROM table_a a\nINNER JOIN table_b b ON a.id = b.a_id;",
    codeExample: "-- Tables Schema:\n-- learners (id, name, email)\n-- submissions (id, learner_id, question_title, status, score)\n\n-- INNER JOIN: Only learners who have submitted code\nSELECT \n    l.id AS learner_id,\n    l.name AS learner_name,\n    s.question_title,\n    s.status,\n    s.score\nFROM learners l\nINNER JOIN submissions s ON l.id = s.learner_id\nWHERE s.status = 'Accepted'\nORDER BY s.score DESC;\n\n-- LEFT JOIN: ALL learners, including those with 0 submissions\nSELECT \n    l.name,\n    COUNT(s.id) AS total_submissions,\n    COALESCE(AVG(s.score), 0) AS average_score\nFROM learners l\nLEFT JOIN submissions s ON l.id = s.learner_id\nGROUP BY l.id, l.name;",
    codeExplanation: [
      "FROM learners l INNER JOIN submissions s: Links the two tables using table aliases 'l' and 's'.",
      "ON l.id = s.learner_id: Specifies the foreign key matching condition.",
      "WHERE s.status = 'Accepted': Filters joined rows to include only passed solutions.",
      "LEFT JOIN ... GROUP BY: Guarantees that learners who haven't submitted anything still appear with a count of 0."
    ],
    expectedOutput: "+------------+--------------+------------------+----------+-------+\n| learner_id | learner_name | question_title   | status   | score |\n+------------+--------------+------------------+----------+-------+\n| 3          | Maya Lin     | Two Sum          | Accepted | 100   |\n| 1          | Sarah Connor | Reverse String   | Accepted | 95    |\n| 1          | Sarah Connor | Binary Search    | Accepted | 90    |\n+------------+--------------+------------------+----------+-------+\n\nSummary Report (LEFT JOIN):\nMaya Lin: 1 submissions (avg: 100.0)\nSarah Connor: 2 submissions (avg: 92.5)\nJames Holden: 0 submissions (avg: 0.0)",
    realWorldApplications: [
      "Generating monthly sales invoices linking Customers, Orders, and Line Items.",
      "Building reporting dashboards showing user engagement across courses."
    ],
    commonMistakes: [
      "Omitting the ON condition: `SELECT * FROM table_a, table_b` creates a Cartesian product (CROSS JOIN) multiplying every row by every row, often crashing the database server!",
      "Using INNER JOIN when you want to include items that may have 0 relations (use LEFT JOIN instead)."
    ],
    practiceExercises: [
      {
        title: "Customer Order Join",
        difficulty: "Intermediate",
        task: "Write a query joining customers (c) and orders (o) on c.id = o.customer_id, displaying customer name and order total for orders over $100.",
        hint: "SELECT c.name, o.total FROM customers c INNER JOIN orders o ON c.id = o.customer_id WHERE o.total > 100;",
        solution: "SELECT c.name, o.total \nFROM customers c \nINNER JOIN orders o ON c.id = o.customer_id \nWHERE o.total > 100 \nORDER BY o.total DESC;"
      }
    ],
    quiz: [
      {
        question: "What is the difference between an INNER JOIN and a LEFT JOIN?",
        options: [
          "INNER JOIN only returns rows with matches in both tables; LEFT JOIN returns all rows from the left table even if no match exists",
          "LEFT JOIN is only used for numbers, INNER JOIN for text",
          "INNER JOIN deletes unmatched records",
          "They are identical synonyms in standard SQL"
        ],
        correctAnswer: 0,
        explanation: "INNER JOIN produces only matched rows where keys match in both tables. LEFT JOIN keeps all records from the left table, inserting NULLs for missing right-table columns."
      }
    ],
    summary: "Joins combine normalized data across tables. Use INNER JOIN for strict matches and LEFT JOIN when preserving unmatched left-table records.",
    relatedLessons: ["sql-mod3-1", "sql-mod7-1", "sql-mod9-1"]
  },

  // Module 15: Projects
  {
    id: "sql-mod15-1",
    title: "Project 1: Complete Relational E-Commerce Store Schema & Analytics",
    section: "Module 15: SQL Practical Projects",
    moduleNumber: 15,
    moduleTitle: "SQL Practical Projects",
    difficulty: "Intermediate",
    duration: "20 min",
    isProject: true,
    keyConcepts: ["Full Schema Design", "Foreign Keys", "Multi-Table Analytics", "Transactions"],
    meaning: "A complete production-ready relational database schema modeling users, categories, products, orders, and line items with analytical reporting queries.",
    definition: "An integrated 3NF relational database schema implementing referential integrity constraints, automated timestamps, cascading rules, and aggregated business intelligence reports.",
    whyUseIt: "Understanding how real-world relational databases are architected from tables to reporting queries is the gold standard skill for software engineers and data analysts.",
    introduction: "In this comprehensive guided project, you will build and query a full-scale E-Commerce database schema.",
    simpleExplanation: "You are building the relational data foundation for an online store like Amazon: customer accounts, inventory catalog, orders, and revenue reports.",
    syntax: "-- Execute schema and seed script in PostgreSQL / SQLite",
    codeExample: "# Complete Production SQL Project Schema\nCREATE TABLE categories (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(50) NOT NULL UNIQUE\n);\n\nCREATE TABLE products (\n    id SERIAL PRIMARY KEY,\n    category_id INT REFERENCES categories(id) ON DELETE CASCADE,\n    title VARCHAR(100) NOT NULL,\n    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),\n    stock INT DEFAULT 0 CHECK (stock >= 0)\n);\n\nCREATE TABLE orders (\n    id SERIAL PRIMARY KEY,\n    customer_name VARCHAR(100) NOT NULL,\n    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n    total_amount NUMERIC(10, 2) DEFAULT 0.0\n);\n\nCREATE TABLE order_items (\n    order_id INT REFERENCES orders(id) ON DELETE CASCADE,\n    product_id INT REFERENCES products(id),\n    quantity INT DEFAULT 1 CHECK (quantity > 0),\n    unit_price NUMERIC(10, 2) NOT NULL,\n    PRIMARY KEY (order_id, product_id)\n);\n\n-- Analytics Query: Top Revenue Generating Categories\nSELECT \n    c.name AS category_name,\n    COUNT(DISTINCT o.id) AS total_orders,\n    SUM(oi.quantity * oi.unit_price) AS category_revenue\nFROM categories c\nINNER JOIN products p ON c.id = p.category_id\nINNER JOIN order_items oi ON p.id = oi.product_id\nINNER JOIN orders o ON oi.order_id = o.id\nGROUP BY c.id, c.name\nORDER BY category_revenue DESC;",
    codeExplanation: [
      "REFERENCES categories(id) ON DELETE CASCADE: Foreign key constraint guaranteeing relational integrity; deleting a category cleans up child items.",
      "PRIMARY KEY (order_id, product_id): Composite primary key preventing duplicate product entries in the same order.",
      "CHECK (price >= 0): Domain constraint preventing negative prices or quantities.",
      "Analytics Query: 4-table join calculating revenue per category."
    ],
    expectedOutput: "+---------------+--------------+------------------+\n| category_name | total_orders | category_revenue |\n+---------------+--------------+------------------+\n| Hardware      | 48           | $14,290.50       |\n| Books & Media | 32           | $2,480.00        |\n| Accessories   | 19           | $890.00          |\n+---------------+--------------+------------------+\n(3 rows in set - Generated in 3.1ms)",
    realWorldApplications: [
      "Production SaaS platforms, Shopify backend stores, and ERP supply chain databases."
    ],
    commonMistakes: [
      "Not indexing foreign key columns, which leads to slow sequential table scans during joins in production databases."
    ],
    practiceExercises: [
      {
        title: "Top Spending Customer Query",
        difficulty: "Intermediate",
        task: "Write a query finding the customer who has spent the most money across all orders.",
        hint: "SELECT customer_name, SUM(total_amount) FROM orders GROUP BY customer_name ORDER BY 2 DESC LIMIT 1;",
        solution: "SELECT customer_name, SUM(total_amount) AS total_spent\nFROM orders\nGROUP BY customer_name\nORDER BY total_spent DESC\nLIMIT 1;"
      }
    ],
    quiz: [
      {
        question: "What is a composite primary key?",
        options: [
          "A primary key composed of two or more columns combined together",
          "A key that can only store strings",
          "A temporary index created in memory",
          "A primary key without constraints"
        ],
        correctAnswer: 0,
        explanation: "A composite primary key uses a combination of multiple columns (such as order_id and product_id) to uniquely identify each row."
      }
    ],
    summary: "This portfolio project models a normalized 3NF relational e-commerce database with referential integrity, composite keys, and multi-table business intelligence reporting.",
    relatedLessons: ["sql-mod8-1", "sql-mod10-1"]
  }
];
