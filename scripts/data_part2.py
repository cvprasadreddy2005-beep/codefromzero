# scripts/data_part2.py
# Categories: SQL and Databases (20), HTML (15), CSS (15), Git and GitHub (15), Cybersecurity (15) = 80 questions

items_p2 = []

# --- SQL AND DATABASES (20) ---
sql_questions = [
    ("Beginner", "SELECT", "Coding", "Write a query to retrieve all columns for employees with salary greater than 50,000.",
     ["Use `SELECT * FROM employees WHERE salary > 50000;`."],
     "SELECT * FROM employees WHERE salary > 50000;",
     "Filters rows using numeric condition in WHERE clause.",
     {"code": "SELECT * FROM employees WHERE salary > 50000;"}),

    ("Beginner", "DISTINCT", "Multiple-Choice", "Which SQL keyword eliminates duplicate rows from the query result set?",
     ["Removes repeated values."],
     "`DISTINCT`",
     "`SELECT DISTINCT column_name FROM table;` retains only unique rows.",
     {"options": ["`DISTINCT`", "`UNIQUE`", "`DIFFERENT`", "`ISOLATE`"], "correctAnswer": "`DISTINCT`"}),

    ("Beginner", "ORDER BY", "Coding", "Write a query to fetch all products ordered by price descending.",
     ["Use `ORDER BY price DESC;`."],
     "SELECT * FROM products ORDER BY price DESC;",
     "Sorts rows in descending numeric order.",
     {"code": "SELECT * FROM products ORDER BY price DESC;"}),

    ("Beginner", "Aggregation", "Coding", "Find the total number of students in the `students` table.",
     ["Use `COUNT(*)`."],
     "SELECT COUNT(*) FROM students;",
     "COUNT returns the number of rows matching the query.",
     {"code": "SELECT COUNT(*) AS total_students FROM students;"}),

    ("Beginner", "NULL Handling", "Multiple-Choice", "How do you check for missing/null values in SQL?",
     ["Comparison with = NULL is invalid."],
     "`WHERE column_name IS NULL`",
     "NULL represents unknown data, requiring `IS NULL` or `IS NOT NULL`.",
     {"options": ["`WHERE column_name IS NULL`", "`WHERE column_name = NULL`", "`WHERE column_name == NULL`", "`WHERE column_name EQUALS NULL`"], "correctAnswer": "`WHERE column_name IS NULL`"}),

    ("Beginner", "INSERT", "Coding", "Write an SQL statement to insert a new user with name 'John' and email 'john@example.com' into `users` table.",
     ["Use `INSERT INTO users (name, email) VALUES ('John', 'john@example.com');`."],
     "INSERT INTO statement.",
     "Inserts a new record into table columns.",
     {"code": "INSERT INTO users (name, email) VALUES ('John', 'john@example.com');"}),

    ("Beginner", "UPDATE", "Coding", "Update the salary of employee with `id = 10` to 65000.",
     ["Always include WHERE clause to avoid updating all rows."],
     "UPDATE employees SET salary = 65000 WHERE id = 10;",
     "Modifies existing record matching condition.",
     {"code": "UPDATE employees SET salary = 65000 WHERE id = 10;"}),

    ("Beginner", "DELETE", "Multiple-Choice", "What happens if you run `DELETE FROM customers;` without a `WHERE` clause?",
     ["No rows are filtered out."],
     "All records in the `customers` table are deleted, but table structure remains",
     "Without a WHERE predicate, DELETE removes all rows from the table.",
     {"options": ["All records in the `customers` table are deleted, but table structure remains", "The database throws a syntax error", "Only the first record is deleted", "The entire table structure is dropped"], "correctAnswer": "All records in the `customers` table are deleted, but table structure remains"}),

    ("Intermediate", "INNER JOIN", "Coding", "Write a query to fetch customer name and their order date by joining `customers` and `orders` on `customer_id`.",
     ["Use `INNER JOIN orders ON customers.id = orders.customer_id;`."],
     "INNER JOIN query.",
     "Returns matching rows between both tables.",
     {"code": "SELECT c.name, o.order_date FROM customers c INNER JOIN orders o ON c.id = o.customer_id;"}),

    ("Intermediate", "LEFT JOIN", "Multiple-Choice", "What is the key difference between INNER JOIN and LEFT JOIN?",
     ["LEFT JOIN retains unmatched rows from the left table."],
     "LEFT JOIN returns all rows from the left table and matched rows from the right table; unmatched right values become NULL",
     "Preserves left table rows regardless of right table matches.",
     {"options": ["LEFT JOIN returns all rows from the left table and matched rows from the right table; unmatched right values become NULL", "INNER JOIN returns all rows from both tables", "LEFT JOIN performs full Cartesian product", "INNER JOIN is only used for foreign keys"], "correctAnswer": "LEFT JOIN returns all rows from the left table and matched rows from the right table; unmatched right values become NULL"}),

    ("Intermediate", "GROUP BY", "Coding", "Write a query to find the average salary of employees in each department, showing department name and average salary.",
     ["Use `GROUP BY department` and `AVG(salary)`."],
     "SELECT department, AVG(salary) FROM employees GROUP BY department;",
     "Aggregates rows by distinct department values.",
     {"code": "SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department;"}),

    ("Intermediate", "HAVING", "Multiple-Choice", "When should you use `HAVING` instead of `WHERE`?",
     ["Filtering aggregate values."],
     "To filter groups based on aggregate function results (e.g. `HAVING COUNT(*) > 5`)",
     "`WHERE` filters rows before aggregation, while `HAVING` filters groups after aggregation.",
     {"options": ["To filter groups based on aggregate function results (e.g. `HAVING COUNT(*) > 5`)", "To filter indexed columns only", "To perform subqueries", "To sort descending records"], "correctAnswer": "To filter groups based on aggregate function results (e.g. `HAVING COUNT(*) > 5`)"}),

    ("Intermediate", "Subqueries", "Coding", "Find all employees whose salary is higher than the average salary of the entire company.",
     ["Use a scalar subquery `(SELECT AVG(salary) FROM employees)`."],
     "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);",
     "Subquery computes scalar company average for comparison.",
     {"code": "SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);"}),

    ("Intermediate", "Normalization", "Multiple-Choice", "Which normal form requires removing transitive dependencies (non-key attribute depending on another non-key attribute)?",
     ["1NF atomic, 2NF partial key dependencies, 3NF transitive."],
     "Third Normal Form (3NF)",
     "3NF mandates that every non-prime attribute is directly dependent solely on the primary key.",
     {"options": ["Third Normal Form (3NF)", "First Normal Form (1NF)", "Second Normal Form (2NF)", "Boyce-Codd Normal Form (BCNF)"], "correctAnswer": "Third Normal Form (3NF)"}),

    ("Intermediate", "Indexing", "Multiple-Choice", "What is the primary trade-off when adding a B-Tree index to a database table?",
     ["Speeds up reads, slows down writes."],
     "Faster `SELECT` query execution at the expense of slower `INSERT`, `UPDATE`, and `DELETE` operations and additional disk storage",
     "Indexes must be updated on every write operation.",
     {"options": ["Faster `SELECT` query execution at the expense of slower `INSERT`, `UPDATE`, and `DELETE` operations and additional disk storage", "Slower reads but faster writes", "Guarantees table encryption", "Prevents primary key collisions"], "correctAnswer": "Faster `SELECT` query execution at the expense of slower `INSERT`, `UPDATE`, and `DELETE` operations and additional disk storage"}),

    ("Advanced", "Window Functions", "Coding", "Write a query to rank employees by salary within each department using `DENSE_RANK()`.",
     ["Use `DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC)`."],
     "Window function partitioning.",
     "Calculates rankings within partitions without collapsing rows.",
     {"code": "SELECT id, name, department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) as salary_rank FROM employees;"}),

    ("Advanced", "ACID", "Multiple-Choice", "In database transactions, what does the 'I' in ACID stand for?",
     ["Atomicity, Consistency, Isolation, Durability."],
     "Isolation",
     "Isolation ensures concurrent transactions execute without interfering with one another.",
     {"options": ["Isolation", "Integrity", "Indexing", "Immutability"], "correctAnswer": "Isolation"}),

    ("Advanced", "Isolation Levels", "Multiple-Choice", "Which SQL transaction isolation level prevents Dirty Reads and Non-Repeatable Reads, but may still allow Phantom Reads?",
     ["Read Committed vs Repeatable Read."],
     "Repeatable Read",
     "Repeatable Read holds read locks on accessed rows, preventing modifications until transaction commit.",
     {"options": ["Repeatable Read", "Read Uncommitted", "Read Committed", "Serializable"], "correctAnswer": "Repeatable Read"}),

    ("Advanced", "CTEs", "Coding", "Write a query using a Common Table Expression (CTE) `WITH top_spenders AS (...)` to find users spending over $1000.",
     ["Use `WITH ... AS (SELECT ...)`."],
     "Common Table Expression structure.",
     "CTEs improve query readability and can be recursive.",
     {"code": "WITH top_spenders AS (\n  SELECT user_id, SUM(amount) as total FROM orders GROUP BY user_id HAVING SUM(amount) > 1000\n)\nSELECT u.name, t.total FROM users u JOIN top_spenders t ON u.id = t.user_id;"}),

    ("Advanced", "Query Optimization", "Multiple-Choice", "What does `EXPLAIN ANALYZE` do in PostgreSQL / MySQL?",
     ["Executes query and displays actual execution plan and timings."],
     "Executes the query and displays the execution plan along with actual runtime timings and buffer costs",
     "Shows whether index scans or sequential table scans were chosen.",
     {"options": ["Executes the query and displays the execution plan along with actual runtime timings and buffer costs", "Dry-runs syntax without executing", "Automatically rewrites queries", "Locks database tables"], "correctAnswer": "Executes the query and displays the execution plan along with actual runtime timings and buffer costs"})
]

for q in sql_questions: items_p2.append(("SQL and Databases", *q))
assert len(sql_questions) == 20

# --- HTML (15) ---
html_questions = [
    ("Beginner", "Structure", "Coding", "Write the boilerplate HTML5 document structure with DOCTYPE, html, head, title, and body tags.",
     ["Include `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`."],
     "Standard HTML5 template.",
     "The foundational markup for all web pages.",
     {"code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Document</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>"}),

    ("Beginner", "Semantics", "Multiple-Choice", "Which HTML element is the most semantically appropriate for the main navigation links of a website?",
     ["Semantic navigation container."],
     "`<nav>`",
     "`<nav>` signals to assistive tech and search engines that enclosed links form site navigation.",
     {"options": ["`<nav>`", "`<menu>`", "`<div>`", "`<header>`"], "correctAnswer": "`<nav>`"}),

    ("Beginner", "Links", "Coding", "Create an anchor link opening 'https://codefromzero.dev' in a new tab securely.",
     ["Use `target=\"_blank\"` and `rel=\"noopener noreferrer\"`."],
     "Secure anchor tag.",
     "`rel=\"noopener noreferrer\"` prevents tab-napping security vulnerabilities.",
     {"code": "<a href=\"https://codefromzero.dev\" target=\"_blank\" rel=\"noopener noreferrer\">Code From Zero</a>"}),

    ("Beginner", "Images", "Multiple-Choice", "What is the primary accessibility purpose of the `alt` attribute on an `<img>` tag?",
     ["Screen readers read it for visually impaired users."],
     "Provides alternative text description for screen readers and when images fail to load",
     "Critical for WCAG accessibility compliance.",
     {"options": ["Provides alternative text description for screen readers and when images fail to load", "Displays a tooltip on hover", "Resizes image dimensions", "Sets image caching headers"], "correctAnswer": "Provides alternative text description for screen readers and when images fail to load"}),

    ("Beginner", "Lists", "Coding", "Create an unordered list of three programming languages.",
     ["Use `<ul>` and `<li>`."],
     "HTML unordered list.",
     "Standard list formatting.",
     {"code": "<ul>\n  <li>JavaScript</li>\n  <li>Python</li>\n  <li>Java</li>\n</ul>"}),

    ("Beginner", "Forms", "Coding", "Create a form input field for email that is required and validates email format.",
     ["Use `type=\"email\"` and `required` attribute."],
     "Semantic email input.",
     "Browser automatically validates email syntax on form submission.",
     {"code": "<input type=\"email\" name=\"user_email\" required placeholder=\"you@example.com\">"}),

    ("Beginner", "Headings", "Multiple-Choice", "Why should a web page ideally have only one `<h1>` tag?",
     ["Semantic hierarchy and SEO document outline."],
     "It establishes the single main topic/title of the page for SEO and screen reader navigation",
     "Headings form an outline where `<h1>` represents top-level topic.",
     {"options": ["It establishes the single main topic/title of the page for SEO and screen reader navigation", "Browsers crash with multiple h1 tags", "CSS cannot style more than one h1", "It reduces HTTP payload size"], "correctAnswer": "It establishes the single main topic/title of the page for SEO and screen reader navigation"}),

    ("Beginner", "Tables", "Coding", "Create a simple table with a header row (Name, Role) and one data row.",
     ["Use `<table>`, `<thead>`, `<tr>`, `<th>`, and `<td>`."],
     "Semantic HTML table.",
     "Presents tabular data cleanly.",
     {"code": "<table>\n  <thead>\n    <tr><th>Name</th><th>Role</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Alex</td><td>Developer</td></tr>\n  </tbody>\n</table>"}),

    ("Intermediate", "Media", "Coding", "Embed an audio file with controls enabled and a fallback message for unsupported browsers.",
     ["Use `<audio controls>` with `<source>` tag."],
     "HTML5 audio element.",
     "Provides native playback without plugins.",
     {"code": "<audio controls>\n  <source src=\"podcast.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>"}),

    ("Intermediate", "Metadata", "Multiple-Choice", "What does `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">` accomplish?",
     ["Responsive mobile rendering."],
     "Sets viewport width to match device screen width and establishes 1:1 initial zoom scale",
     "Ensures web page adapts properly to mobile device displays.",
     {"options": ["Sets viewport width to match device screen width and establishes 1:1 initial zoom scale", "Enables dark mode", "Preloads web fonts", "Disables browser caching"], "correctAnswer": "Sets viewport width to match device screen width and establishes 1:1 initial zoom scale"}),

    ("Intermediate", "Form Attributes", "Coding", "Create a dropdown `<select>` element with an option selected by default and a disabled placeholder.",
     ["Use `<option value=\"\" disabled selected>Choose a topic</option>`."],
     "Semantic select dropdown with placeholder.",
     "Encourages explicit user selection.",
     {"code": "<select name=\"topic\" required>\n  <option value=\"\" disabled selected>Choose a roadmap</option>\n  <option value=\"frontend\">Frontend</option>\n  <option value=\"backend\">Backend</option>\n</select>"}),

    ("Intermediate", "Buttons vs Links", "Multiple-Choice", "When should you use a `<button>` instead of an `<a>` element?",
     ["Buttons trigger actions; links navigate to URLs."],
     "Use `<button>` for in-page actions or form submits; use `<a>` for navigating to a new destination or URL",
     "Semantic and accessibility principle.",
     {"options": ["Use `<button>` for in-page actions or form submits; use `<a>` for navigating to a new destination or URL", "Buttons look better with CSS", "Links cannot be styled", "Buttons only work with JavaScript"], "correctAnswer": "Use `<button>` for in-page actions or form submits; use `<a>` for navigating to a new destination or URL"}),

    ("Advanced", "SEO / Social", "Coding", "Write the OpenGraph meta tags for title, description, and preview image.",
     ["Use `<meta property=\"og:...\" content=\"...\">`."],
     "OpenGraph social share metadata.",
     "Enables rich social card previews on social platforms.",
     {"code": "<meta property=\"og:title\" content=\"Code From Zero\">\n<meta property=\"og:description\" content=\"Learn to code step by step.\">\n<meta property=\"og:image\" content=\"https://example.com/preview.jpg\">"}),

    ("Advanced", "Performance", "Multiple-Choice", "What is the difference between `<script defer>` and `<script async>`?",
     ["`defer` preserves document execution order after parsing; `async` executes as soon as downloaded."],
     "`defer` executes in order after HTML parsing finishes; `async` executes immediately once downloaded, pausing parsing",
     "`defer` is ideal for scripts that depend on DOM or other scripts.",
     {"options": ["`defer` executes in order after HTML parsing finishes; `async` executes immediately once downloaded, pausing parsing", "`async` executes only on mobile", "`defer` is deprecated in HTML5", "There is no difference"], "correctAnswer": "`defer` executes in order after HTML parsing finishes; `async` executes immediately once downloaded, pausing parsing"}),

    ("Advanced", "Accessibility", "Multiple-Choice", "What does the `aria-live=\"polite\"` attribute do on a dynamic container?",
     ["Screen reader announcement cadence."],
     "Notifies screen readers to announce dynamic content updates when the user is idle without interrupting them",
     "Essential for notifications, alerts, and live UI updates.",
     {"options": ["Notifies screen readers to announce dynamic content updates when the user is idle without interrupting them", "Mutes background audio", "Validates text fields politely", "Automatically translates content"], "correctAnswer": "Notifies screen readers to announce dynamic content updates when the user is idle without interrupting them"})
]

for q in html_questions: items_p2.append(("HTML", *q))
assert len(html_questions) == 15

# --- CSS (15) ---
css_questions = [
    ("Beginner", "Box Model", "Multiple-Choice", "What are the four components of the standard CSS Box Model from inside out?",
     ["Content -> Padding -> Border -> Margin."],
     "Content, Padding, Border, Margin",
     "Content holds text/media, padding adds inner space, border outlines, margin separates elements.",
     {"options": ["Content, Padding, Border, Margin", "Margin, Border, Padding, Content", "Content, Margin, Border, Padding", "Padding, Content, Margin, Border"], "correctAnswer": "Content, Padding, Border, Margin"}),

    ("Beginner", "Box Sizing", "Coding", "Set `box-sizing: border-box` globally across all elements so padding does not expand total element width.",
     ["Use universal selector `*, *::before, *::after`."],
     "Universal border-box reset.",
     "Makes layout calculations predictable.",
     {"code": "*, *::before, *::after {\n  box-sizing: border-box;\n}"}),

    ("Beginner", "Flexbox Centering", "Coding", "Center a child element both horizontally and vertically inside a parent container using Flexbox.",
     ["Set `display: flex`, `justify-content: center`, and `align-items: center`."],
     "Flexbox two-axis centering.",
     "Clean, modern alignment technique.",
     {"code": ".parent {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"}),

    ("Beginner", "Colors", "Coding", "Define CSS variables for `--primary-color: #4f46e5` and use it on `.btn` background.",
     ["Declare in `:root` and use `var(--primary-color)`."],
     "CSS custom properties.",
     "Enables maintainable design systems.",
     {"code": ":root {\n  --primary-color: #4f46e5;\n}\n.btn {\n  background-color: var(--primary-color);\n}"}),

    ("Beginner", "Typography", "Coding", "Style a paragraph with font size 16px, line height 1.6, and dark slate color.",
     ["Set font-size, line-height, and color properties."],
     "Readable typographic styling.",
     "Optimal reading comfort.",
     {"code": "p {\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #334155;\n}"}),

    ("Beginner", "Specificity", "Multiple-Choice", "Which CSS selector has the highest specificity?",
     ["Inline style > ID (#) > Class (.) > Element (tag)."],
     "`#header-nav` (ID selector)",
     "ID selectors carry a specificity weight of (0, 1, 0, 0), beating classes and element tags.",
     {"options": ["`#header-nav` (ID selector)", "`.nav-item.active` (Two classes)", "`header nav ul li` (Four element tags)", "`*` (Universal selector)"], "correctAnswer": "`#header-nav` (ID selector)"}),

    ("Intermediate", "Flexbox Layout", "Coding", "Create a responsive navigation bar with logo on the far left and links on the far right using Flexbox.",
     ["Use `justify-content: space-between`."],
     "Space-between flex layout.",
     "Distributes items across available width.",
     {"code": ".navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}"}),

    ("Intermediate", "CSS Grid", "Coding", "Create an auto-fitting responsive card grid where columns are at least 280px wide and fill available space.",
     ["Use `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))`."],
     "Auto-fit responsive grid.",
     "Adapts column counts smoothly without explicit media queries.",
     {"code": ".card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.5rem;\n}"}),

    ("Intermediate", "Media Queries", "Coding", "Write a media query to stack elements vertically on screens narrower than 768px.",
     ["Use `@media (max-width: 767px)`."],
     "Responsive mobile media query.",
     "Switches flex direction on smaller screens.",
     {"code": "@media (max-width: 767px) {\n  .container {\n    flex-direction: column;\n  }\n}"}),

    ("Intermediate", "Positioning", "Multiple-Choice", "What element does `position: absolute` position itself relative to?",
     ["Nearest positioned ancestor."],
     "Its nearest ancestor that has a `position` other than `static` (e.g. `relative`, `absolute`, `fixed`)",
     "Defaults to the initial containing block (viewport) if no positioned ancestor exists.",
     {"options": ["Its nearest ancestor that has a `position` other than `static` (e.g. `relative`, `absolute`, `fixed`)", "Always the `<body>` element", "Its nearest sibling element", "The browser window exclusively"], "correctAnswer": "Its nearest ancestor that has a `position` other than `static` (e.g. `relative`, `absolute`, `fixed`)"}),

    ("Intermediate", "Pseudo-Classes", "Coding", "Create an attractive hover effect on `.card` that shifts it upwards 4px with a smooth shadow transition.",
     ["Use `transform: translateY(-4px)`, `box-shadow`, and `transition`."],
     "Interactive card hover state.",
     "Provides tactile micro-interaction.",
     {"code": ".card {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);\n}"}),

    ("Intermediate", "Sticky Header", "Coding", "Make a top navigation bar stick to the top of the viewport when scrolling.",
     ["Use `position: sticky`, `top: 0`, and `z-index`."],
     "Sticky header positioning.",
     "Retains navigation access during long page scrolling.",
     {"code": ".header {\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  background: white;\n}"}),

    ("Advanced", "Container Queries", "Multiple-Choice", "What advantage do CSS Container Queries (`@container`) offer over standard `@media` queries?",
     ["Components adapt to their parent container size rather than the global viewport width."],
     "Styles adapt to the specific parent container's dimensions rather than the entire browser viewport width",
     "Allows truly modular components that look great in sidebars or main content areas alike.",
     {"options": ["Styles adapt to the specific parent container's dimensions rather than the entire browser viewport width", "They run on the GPU", "They support IE11", "They replace all JavaScript logic"], "correctAnswer": "Styles adapt to the specific parent container's dimensions rather than the entire browser viewport width"}),

    ("Advanced", "Hardware Acceleration", "Multiple-Choice", "Which CSS properties are the most performant to animate because they avoid triggering layout or repaint?",
     ["GPU composited properties."],
     "`transform` and `opacity`",
     "Handled directly by the GPU compositor without triggering reflow or repaint phases.",
     {"options": ["`transform` and `opacity`", "`width` and `height`", "`margin` and `padding`", "`top` and `left`"], "correctAnswer": "`transform` and `opacity`"}),

    ("Advanced", "Clamp()", "Coding", "Use CSS `clamp()` to set fluid typography that scales between 1rem on mobile and 2.5rem on desktop based on viewport width.",
     ["Use `clamp(minimum, preferred, maximum)`."],
     "Fluid responsive typography.",
     "Smoothly scales without stepping through media queries.",
     {"code": "h1 {\n  font-size: clamp(1.25rem, 4vw + 0.5rem, 2.5rem);\n}"})
]

for q in css_questions: items_p2.append(("CSS", *q))
assert len(css_questions) == 15

# --- GIT AND GITHUB (15) ---
git_questions = [
    ("Beginner", "Initialization", "Coding", "What command initializes a new local Git repository in the current folder?",
     ["Use `git init`."],
     "git init",
     "Creates a hidden `.git` directory containing version database.",
     {"code": "git init"}),

    ("Beginner", "Staging", "Coding", "Stage all modified files for commit.",
     ["Use `git add .` or `git add -A`."],
     "git add .",
     "Stages all working tree changes into the index.",
     {"code": "git add ."}),

    ("Beginner", "Committing", "Coding", "Create a commit with the message 'Initial commit'.",
     ["Use `git commit -m \"...\"`."],
     "git commit -m \"Initial commit\"",
     "Records staged snapshot with descriptive message.",
     {"code": "git commit -m \"Initial commit\""}),

    ("Beginner", "Status", "Multiple-Choice", "Which command displays which files are untracked, modified, or staged?",
     ["Shows repository working tree status."],
     "`git status`",
     "Provides full working tree and staging area report.",
     {"options": ["`git status`", "`git check`", "`git info`", "`git log`"], "correctAnswer": "`git status`"}),

    ("Beginner", "Branches", "Coding", "Create and switch to a new branch called `feature-login` in one command.",
     ["Use `git checkout -b` or `git switch -c`."],
     "git checkout -b feature-login (or git switch -c feature-login)",
     "Creates new branch pointer and updates HEAD.",
     {"code": "git checkout -b feature-login"}),

    ("Beginner", "Remotes", "Coding", "Add a remote repository named `origin` pointing to `https://github.com/user/repo.git`.",
     ["Use `git remote add <name> <url>`."],
     "git remote add origin ...",
     "Links local repository with remote hosting server.",
     {"code": "git remote add origin https://github.com/user/repo.git"}),

    ("Beginner", "Pushing", "Coding", "Push the `main` branch to the remote repository `origin` and set upstream tracking.",
     ["Use `git push -u origin main`."],
     "git push -u origin main",
     "`-u` configures default tracking relationship for future git push/pull.",
     {"code": "git push -u origin main"}),

    ("Beginner", "Ignoring", "Multiple-Choice", "What is the purpose of the `.gitignore` file?",
     ["Prevents unwanted files like `node_modules` or `.env` from being tracked."],
     "Specifies intentionally untracked files and patterns that Git should ignore",
     "Keeps secrets, build outputs, and dependencies out of version control.",
     {"options": ["Specifies intentionally untracked files and patterns that Git should ignore", "Deletes files permanently from disk", "Encrypts sensitive data", "Speeds up compile times"], "correctAnswer": "Specifies intentionally untracked files and patterns that Git should ignore"}),

    ("Intermediate", "Merging", "Coding", "Merge the `feature-login` branch into `main`.",
     ["Switch to main first with `git switch main`, then merge."],
     "git checkout main && git merge feature-login",
     "Integrates history from feature branch into target branch.",
     {"code": "git switch main\ngit merge feature-login"}),

    ("Intermediate", "Conflicts", "Multiple-Choice", "What causes a Git merge conflict?",
     ["Competing changes on the exact same lines of code in different branches."],
     "When two branches modify the same line of a file differently and Git cannot automatically reconcile them",
     "Requires developer manual inspection to choose correct lines.",
     {"options": ["When two branches modify the same line of a file differently and Git cannot automatically reconcile them", "When a file is larger than 100MB", "When two developers commit at the exact same millisecond", "When pushing without SSH keys"], "correctAnswer": "When two branches modify the same line of a file differently and Git cannot automatically reconcile them"}),

    ("Intermediate", "Stashing", "Coding", "Temporarily shelve uncommitted working directory changes so you can pull latest updates cleanly.",
     ["Use `git stash`."],
     "git stash (and git stash pop to restore)",
     "Saves working directory and index state on a stack for later retrieval.",
     {"code": "git stash\ngit pull\ngit stash pop"}),

    ("Intermediate", "History", "Coding", "View a condensed, one-line graphical commit history.",
     ["Use `git log --oneline --graph --all`."],
     "git log with graph formatting.",
     "Visualizes branching and commit progression.",
     {"code": "git log --oneline --graph --all"}),

    ("Advanced", "Rebase vs Merge", "Multiple-Choice", "What is the primary difference between `git rebase` and `git merge`?",
     ["Rebase rewrites commit history linearly; merge creates a merge commit preserving exact history."],
     "`git rebase` re-applies commits onto the tip of another branch creating a linear history; `git merge` preserves branch topology with a merge commit",
     "Rebase provides cleaner linear logs but rewrites SHA hashes.",
     {"options": ["`git rebase` re-applies commits onto the tip of another branch creating a linear history; `git merge` preserves branch topology with a merge commit", "`git rebase` deletes remote branches", "`git merge` deletes commits", "`git rebase` is faster"], "correctAnswer": "`git rebase` re-applies commits onto the tip of another branch creating a linear history; `git merge` preserves branch topology with a merge commit"}),

    ("Advanced", "Cherry Pick", "Coding", "Apply an isolated commit with hash `abc1234` from another branch into your current branch.",
     ["Use `git cherry-pick <commit-hash>`."],
     "git cherry-pick abc1234",
     "Applies the changes introduced by a specific commit to current HEAD.",
     {"code": "git cherry-pick abc1234"}),

    ("Advanced", "Reflog", "Multiple-Choice", "How does `git reflog` help recover accidentally deleted branches or lost commits?",
     ["Records every update to HEAD."],
     "It records every movement of HEAD, allowing you to check out or recover commits even if they are detached from any branch",
     "Git's ultimate safety net before garbage collection occurs.",
     {"options": ["It records every movement of HEAD, allowing you to check out or recover commits even if they are detached from any branch", "It rolls back GitHub servers", "It decompresses git packfiles", "It renames git authors"], "correctAnswer": "It records every movement of HEAD, allowing you to check out or recover commits even if they are detached from any branch"})
]

for q in git_questions: items_p2.append(("Git and GitHub", *q))
assert len(git_questions) == 15

# --- CYBERSECURITY (15) ---
cyber_questions = [
    ("Beginner", "Passwords", "Multiple-Choice", "Why should user passwords never be stored using simple hashing algorithms like MD5 or SHA-256 without salts?",
     ["Vulnerable to rainbow table attacks and high-speed GPU cracking."],
     "They are vulnerable to precomputed rainbow table attacks and high-speed GPU dictionary cracking",
     "Slow, salted algorithms like bcrypt or argon2 are required to prevent brute-force attacks.",
     {"options": ["They are vulnerable to precomputed rainbow table attacks and high-speed GPU dictionary cracking", "They compress passwords too small", "Browsers refuse to send MD5", "They only support 8 characters"], "correctAnswer": "They are vulnerable to precomputed rainbow table attacks and high-speed GPU dictionary cracking"}),

    ("Beginner", "HTTPS", "Multiple-Choice", "What does HTTPS provide that plain HTTP lacks?",
     ["Encryption, integrity, and server authentication."],
     "End-to-end encryption, data integrity, and server identity authentication via TLS/SSL",
     "Prevents eavesdropping and man-in-the-middle tampering over networks.",
     {"options": ["End-to-end encryption, data integrity, and server identity authentication via TLS/SSL", "Faster page download speeds", "Automatic cloud backups", "Bypasses firewalls"], "correctAnswer": "End-to-end encryption, data integrity, and server identity authentication via TLS/SSL"}),

    ("Beginner", "Social Engineering", "Multiple-Choice", "What type of attack deceives users into revealing sensitive credentials via fraudulent emails or spoofed login pages?",
     ["Phishing attack."],
     "Phishing",
     "Phishing relies on social deception to harvest credentials or install malware.",
     {"options": ["Phishing", "SQL Injection", "Buffer Overflow", "Port Scanning"], "correctAnswer": "Phishing"}),

    ("Beginner", "Hashing", "Coding", "Write pseudo-code for how a backend securely registers a password and validates it on login.",
     ["Use a work-factor algorithm like bcrypt with random salt."],
     "Hash with bcrypt on registration; verify using `bcrypt.compare` on login.",
     "Passwords must never be stored in plaintext.",
     {"code": "// Registration\nconst hash = await bcrypt.hash(password, 12);\nawait db.users.create({ email, passwordHash: hash });\n\n// Login\nconst isValid = await bcrypt.compare(providedPassword, user.passwordHash);"}),

    ("Beginner", "MFA", "Multiple-Choice", "What are the three canonical authentication factors in Multi-Factor Authentication (MFA)?",
     ["Knowledge, possession, inherence."],
     "Something you know (password), something you have (phone/token), something you are (biometrics)",
     "Combining multiple distinct categories provides defense in depth.",
     {"options": ["Something you know (password), something you have (phone/token), something you are (biometrics)", "Username, password, and pin", "Email, phone number, and address", "IP address, MAC address, and DNS"], "correctAnswer": "Something you know (password), something you have (phone/token), something you are (biometrics)"}),

    ("Intermediate", "SQL Injection", "Multiple-Choice", "What is the most effective defense against SQL Injection vulnerabilities?",
     ["Parameterized queries / Prepared statements."],
     "Parameterized queries (Prepared Statements) that separate query code from user input data",
     "Ensures user input is treated strictly as data literals, never executable SQL commands.",
     {"options": ["Parameterized queries (Prepared Statements) that separate query code from user input data", "Escaping single quotes with regex", "Using client-side JavaScript validation", "Hiding table column names"], "correctAnswer": "Parameterized queries (Prepared Statements) that separate query code from user input data"}),

    ("Intermediate", "XSS", "Multiple-Choice", "What happens during a Stored Cross-Site Scripting (XSS) attack?",
     ["Malicious script is persisted in database and executed in victims' browsers."],
     "An attacker injects malicious JavaScript into a database that is later rendered and executed in unsuspecting users' browsers",
     "Can steal cookies, session tokens, and hijack accounts.",
     {"options": ["An attacker injects malicious JavaScript into a database that is later rendered and executed in unsuspecting users' browsers", "The attacker crashes the database server", "The attacker decrypts the server hard drive", "The attacker floods network bandwidth"], "correctAnswer": "An attacker injects malicious JavaScript into a database that is later rendered and executed in unsuspecting users' browsers"}),

    ("Intermediate", "CSRF", "Multiple-Choice", "How does a CSRF token protect a web application?",
     ["Ensures form submissions originate from the legitimate site."],
     "It requires a unique, secret, unpredictable token with state-changing requests that unauthorized third-party sites cannot forge",
     "Mitigates Cross-Site Request Forgery attacks.",
     {"options": ["It requires a unique, secret, unpredictable token with state-changing requests that unauthorized third-party sites cannot forge", "It encrypts database passwords", "It blocks DDoS traffic", "It speeds up API responses"], "correctAnswer": "It requires a unique, secret, unpredictable token with state-changing requests that unauthorized third-party sites cannot forge"}),

    ("Intermediate", "Cookies", "Multiple-Choice", "Why should session cookies be flagged with `HttpOnly` and `SameSite=Lax/Strict`?",
     ["`HttpOnly` blocks JavaScript document.cookie access; `SameSite` prevents cross-site request sending."],
     "`HttpOnly` protects against XSS cookie theft; `SameSite` defends against CSRF attacks",
     "Essential browser defense-in-depth cookie headers.",
     {"options": ["`HttpOnly` protects against XSS cookie theft; `SameSite` defends against CSRF attacks", "It compresses cookie payload", "It forces cookie caching on disk", "It allows cross-domain tracking"], "correctAnswer": "`HttpOnly` protects against XSS cookie theft; `SameSite` defends against CSRF attacks"}),

    ("Intermediate", "Least Privilege", "Conceptual", "Explain the Principle of Least Privilege (PoLP) and give a practical backend example.",
     ["Grant only minimum necessary permissions."],
     "Every user, process, and application should possess only the bare minimum permissions required to perform its specific task.",
     "For example, a web app connecting to a database should not connect as root or superuser, but with a restricted role that can only SELECT/INSERT on specific tables.",
     {}),

    ("Advanced", "CORS", "Multiple-Choice", "What is Cross-Origin Resource Sharing (CORS) fundamentally designed to do?",
     ["Allow servers to specify which external origins can read their responses."],
     "It is a browser security mechanism that allows servers to declare which cross-origin domains are permitted to access their resources",
     "CORS relaxes the Same-Origin Policy for trusted origins using HTTP headers like `Access-Control-Allow-Origin`.",
     {"options": ["It is a browser security mechanism that allows servers to declare which cross-origin domains are permitted to access their resources", "It encrypts cross-origin requests", "It prevents network packet sniffing", "It is a firewall protocol"], "correctAnswer": "It is a browser security mechanism that allows servers to declare which cross-origin domains are permitted to access their resources"}),

    ("Advanced", "CSP", "Coding", "Write an HTTP Content Security Policy (CSP) header that restricts script execution to self and disables inline scripts (`unsafe-inline`).",
     ["Set `Content-Security-Policy: default-src 'self'; script-src 'self';`."],
     "Content Security Policy header definition.",
     "CSP dramatically restricts vector surface for XSS attacks.",
     {"code": "Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none';"}),

    ("Advanced", "Zero Trust", "Conceptual", "What is the core philosophy of a Zero Trust Architecture in enterprise cybersecurity?",
     ["'Never trust, always verify'."],
     "'Never trust, always verify': assume breach and authenticate every request regardless of network boundary.",
     "Eliminates implicit trust based on network perimeter; requires micro-segmentation, continuous identity verification, and least privilege access.",
     {}),

    ("Advanced", "JWT Security", "Multiple-Choice", "What critical security pitfall occurs if a backend does not verify the JWT `alg` header properly?",
     ["Algorithm confusion / 'none' algorithm bypass."],
     "Attackers can set `alg: 'none'` to bypass signature verification, forging administrative identity tokens",
     "Server implementations must explicitly whitelist and enforce expected HMAC or RSA algorithms.",
     {"options": ["Attackers can set `alg: 'none'` to bypass signature verification, forging administrative identity tokens", "Tokens expire immediately", "Token size exceeds HTTP header limits", "Database crashes"], "correctAnswer": "Attackers can set `alg: 'none'` to bypass signature verification, forging administrative identity tokens"}),

    ("Advanced", "Rate Limiting", "Coding", "Write an Express middleware to implement in-memory IP rate limiting restricting clients to 100 requests per 15-minute window.",
     ["Track request timestamps per IP in a Map."],
     "Sliding window or fixed window rate limiter.",
     "Prevents brute force credential stuffing and DoS abuse.",
     {"code": "const requests = new Map();\nconst rateLimit = (req, res, next) => {\n  const ip = req.ip;\n  const now = Date.now();\n  const windowMs = 15 * 60 * 1000;\n  const timestamps = (requests.get(ip) || []).filter(t => now - t < windowMs);\n  if (timestamps.length >= 100) return res.status(429).json({ error: 'Too many requests' });\n  timestamps.push(now);\n  requests.set(ip, timestamps);\n  next();\n};"})
]

for q in cyber_questions: items_p2.append(("Cybersecurity", *q))
assert len(cyber_questions) == 15
assert len(items_p2) == 80
print("Part 2 complete: 80 questions.")
