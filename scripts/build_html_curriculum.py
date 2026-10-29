#!/usr/bin/env python3
import json
import os
import sys

# COMPLETE 20 MODULES SPECIFICATION (356 LESSONS + 22 PROJECTS = 378 TOTAL)
MODULES_SPEC = [
    (1, "HTML Fundamentals", [
        "What Is HTML?", "Full Form of HTML", "History and Evolution of HTML", "Why HTML Is Used",
        "How Websites Work", "How HTML Works in a Browser", "HTML vs CSS vs JavaScript",
        "What Is an HTML Tag?", "What Is an HTML Element?", "What Is an HTML Attribute?",
        "Opening and Closing Tags", "Paired and Void Elements", "HTML Syntax Rules",
        "Creating Your First HTML File", "Running HTML in a Browser",
        "Introduction to HTML5 and the HTML Living Standard"
    ]),
    (2, "HTML Document Structure", [
        "HTML Document Structure", "<!DOCTYPE html>", "The <html> Element", "The <head> Element",
        "The <body> Element", "The <title> Element", "Meta Charset", "Viewport Meta Tag",
        "HTML Comments", "HTML Indentation", "HTML Formatting", "HTML Nesting",
        "Parent and Child Elements", "HTML Validation", "Common HTML Errors"
    ]),
    (3, "Headings and Text", [
        "HTML Headings: <h1> to <h6>", "Paragraphs", "Line Breaks", "Horizontal Rules",
        "Bold Text with <strong> and <b>", "Emphasized Text with <em> and <i>", "Underlined Text",
        "Highlighted Text", "Small Text", "Deleted Text", "Inserted Text",
        "Subscript", "Superscript", "Inline Code", "Preformatted Text",
        "Blockquotes", "Short Quotations", "Abbreviations", "Address Element",
        "Bidirectional Text", "Text Direction", "Whitespace in HTML", "Special Text Elements"
    ]),
    (4, "HTML Links and Navigation", [
        "Anchor Element", "href Attribute", "External Links", "Internal Links",
        "Relative URLs", "Absolute URLs", "Opening Links in a New Tab", "Email Links",
        "Telephone Links", "Download Links", "Bookmark Links", "Linking to Page Sections",
        "Navigation Element", "Navigation Menus", "Images as Links", "Accessible Link Text",
        "Link Security and rel Attributes"
    ]),
    (5, "HTML Images", [
        "Image Element", "src Attribute", "alt Attribute", "Image Width and Height",
        "Image File Paths", "Relative and Absolute Image Paths", "Image Formats",
        "Responsive Images", "The <picture> Element", "The <source> Element",
        "srcset and sizes", "Figure Element", "Figure Caption", "Lazy Loading Images",
        "Image Accessibility", "Image Optimization Basics", "Common Image Loading Errors"
    ]),
    (6, "HTML Lists", [
        "Unordered Lists", "Ordered Lists", "List Items", "Nested Lists",
        "Description Lists", "Description Terms", "Description Details",
        "Ordered List Numbering Attributes", "Reversed Lists", "Creating Navigation Lists",
        "Lists in Real-World Websites"
    ]),
    (7, "HTML Tables", [
        "Table Element", "Table Rows", "Table Header Cells", "Table Data Cells",
        "Table Captions", "Table Head", "Table Body", "Table Footer",
        "colspan", "rowspan", "Column Groups", "Column Elements",
        "Table Accessibility", "Responsive Tables", "Student Marks Table Project",
        "Employee Data Table Project"
    ]),
    (8, "HTML Forms", [
        "Introduction to Forms", "Form Element", "action Attribute", "method Attribute",
        "GET vs POST", "Label Element", "Text Input", "Password Input",
        "Email Input", "Number Input", "Telephone Input", "URL Input",
        "Date Input", "Time Input", "Date and Time Input Types", "Checkbox",
        "Radio Button", "File Input", "Color Input", "Range Input",
        "Hidden Input", "Search Input", "Submit Button", "Reset Button",
        "Button Element", "Textarea", "Select Dropdown", "Option Element",
        "Option Group", "Fieldset", "Legend", "Datalist", "Output Element",
        "Required Attribute", "Placeholder Attribute", "Min and Max Attributes",
        "Minlength and Maxlength", "Step Attribute", "Pattern Attribute",
        "Readonly Attribute", "Disabled Attribute", "Multiple Attribute",
        "Accept Attribute", "Autocomplete", "Input Mode", "Form Validation",
        "Accessible Forms", "Registration Form Project", "Login Form Project",
        "Contact Form Project"
    ]),
    (9, "Semantic HTML", [
        "Meaning of Semantic HTML", "Non-Semantic vs Semantic Elements", "Header",
        "Navigation", "Main", "Section", "Article", "Aside", "Footer",
        "Address", "Time", "Figure and Figcaption", "Details and Summary",
        "Semantic Page Layout", "Choosing the Correct Heading Level",
        "Semantic HTML Accessibility", "Complete Semantic Website Project"
    ]),
    (10, "HTML Attributes", [
        "Global Attributes", "id", "class", "style", "title", "lang", "dir",
        "hidden", "tabindex", "contenteditable", "draggable", "spellcheck",
        "translate", "data-* Attributes", "Boolean Attributes",
        "Event Handler Attributes", "Form-Specific Attributes", "Image-Specific Attributes",
        "Media Attributes", "Attribute Values and Quoting", "Attribute Best Practices"
    ]),
    (11, "Div, Span, and Content Grouping", [
        "Div Element", "Span Element", "Block vs Inline Content", "Class Attribute",
        "ID Attribute", "Reusable Content Sections", "Cards Using Div",
        "Highlighting Text Using Span", "Grouping Elements for CSS",
        "Grouping Elements for JavaScript", "Div vs Semantic Elements"
    ]),
    (12, "HTML Metadata and Head", [
        "Title Element", "Meta Charset", "Viewport Metadata", "Meta Description",
        "Author Metadata", "Favicon", "External CSS", "External JavaScript",
        "Script Element", "Async vs Defer", "Base Element", "Canonical Link",
        "Robots Meta Tag", "Open Graph Metadata", "Social Media Preview Metadata",
        "Metadata Best Practices"
    ]),
    (13, "HTML Audio and Video", [
        "Audio Element", "Audio Controls", "Audio Sources", "Audio Autoplay",
        "Audio Loop", "Audio Muted", "Video Element", "Video Controls",
        "Video Sources", "Video Poster", "Video Width and Height", "Video Loop",
        "Video Muted", "Video Preload", "Track Element", "Subtitles and Captions",
        "Iframe", "Embed Element", "Object Element", "Iframe Security and Sandbox",
        "Multimedia Accessibility", "Video Learning Page Project"
    ]),
    (14, "HTML Entities and Special Characters", [
        "HTML Character References", "Less-Than Entity", "Greater-Than Entity",
        "Ampersand Entity", "Nonbreaking Space", "Copyright Symbol",
        "Registered Trademark Symbol", "Trademark Symbol", "Rupee Symbol",
        "Euro Symbol", "Numeric Character References", "Unicode and HTML",
        "Reserved Characters", "Displaying HTML Code as Text"
    ]),
    (15, "HTML Graphics and Interactive Elements", [
        "SVG Introduction", "SVG Circle", "SVG Rectangle", "SVG Line",
        "SVG Polygon", "SVG Text", "Canvas Introduction", "Canvas vs SVG",
        "Progress Element", "Meter Element", "Dialog Element", "Details and Summary",
        "Popover API", "Template Element", "Data Lists", "Interactive HTML Elements",
        "Graphics and Interaction Project"
    ]),
    (16, "HTML Accessibility", [
        "Accessibility Introduction", "Semantic HTML for Accessibility",
        "Image Alternative Text", "Accessible Links", "Accessible Forms",
        "Keyboard Navigation", "Focus Management", "Heading Hierarchy",
        "Language Attribute", "ARIA Roles", "ARIA Labels", "ARIA Live Regions",
        "Accessible Tables", "Accessible Buttons", "Color and Text Alternatives",
        "Accessibility Testing", "Accessible Webpage Project"
    ]),
    (17, "HTML SEO", [
        "Search Engine Optimization Basics", "Title Tags", "Meta Descriptions",
        "Heading Structure", "Semantic HTML and Search Engines", "Image Alt Text",
        "Descriptive URLs", "Canonical URLs", "Robots Meta Tag",
        "Open Graph Metadata", "Structured Data Introduction", "Microdata Introduction",
        "Sitemap Basics", "SEO-Friendly HTML", "SEO Audit Project"
    ]),
    (18, "Advanced HTML Concepts", [
        "HTML Parsing", "DOM Introduction", "DOM Tree Structure",
        "Parent, Child, and Sibling Nodes", "HTML Validation Tools",
        "Void Elements", "Boolean Attributes", "Optional Tags and Correct Nesting",
        "Global Attributes", "Custom Data Attributes", "Web Components Introduction",
        "Custom Elements", "Shadow DOM", "HTML Templates", "Drag and Drop APIs",
        "Microdata", "Structured Data", "Progressive Enhancement",
        "Browser Compatibility", "HTML Security Basics", "Safe External Embedding",
        "Safe Handling of User-Generated Content", "Modern HTML Best Practices"
    ]),
    (19, "HTML with CSS and JavaScript", [
        "HTML and CSS Relationship", "Inline CSS", "Internal CSS", "External CSS",
        "Connecting Stylesheets", "HTML Classes and CSS Selectors",
        "HTML IDs and CSS Selectors", "HTML and Responsive Design",
        "HTML and JavaScript", "Connecting External JavaScript", "Script Loading",
        "DOM Manipulation", "Event Listeners", "Changing Text with JavaScript",
        "Creating Elements with JavaScript", "Form Interaction",
        "Interactive Counter Project", "To-Do List Project"
    ]),
    (20, "HTML Projects", [
        "First HTML Webpage", "Personal Profile Page", "Student Timetable",
        "Student Marks Table", "Resume Website", "Student Registration Form",
        "Login Form Interface", "Contact Form", "Recipe Website", "Image Gallery",
        "FAQ Page", "Course Landing Page", "Personal Portfolio", "Blog Layout",
        "Product Listing Page", "Video Learning Page", "Accessible Contact Page",
        "Course Progress Dashboard", "Interactive To-Do List", "Student Results Dashboard",
        "Multi-Page Educational Website", "Code From Zero Homepage"
    ])
]

def make_lesson(global_id, mod_num, mod_title, title, is_proj=False):
    # Determine difficulty
    if mod_num <= 4 or "First" in title or "Introduction" in title:
        diff = "Beginner"
    elif mod_num in [5, 6, 7, 8, 9, 10, 11, 14]:
        diff = "Beginner" if "Introduction" in title or "Basic" in title else "Intermediate"
    elif mod_num in [12, 13, 15, 16, 17]:
        diff = "Intermediate"
    else:
        diff = "Advanced" if mod_num in [18, 19] else "Intermediate"

    clean_tag = title.lower().replace(" ", "-").replace("<", "").replace(">", "").replace("/", "")

    # Tailored Code Snippets and Syntax Blueprints
    if "Headings" in title:
        code_snip = "<h1>Main Page Title (h1)</h1>\n<h2>Primary Section Heading (h2)</h2>\n<h3>Sub-section Heading (h3)</h3>\n<h4>Detail Subsection (h4)</h4>\n<h5>Minor Component Header (h5)</h5>\n<h6>Annotation Header (h6)</h6>\n<p>Headings communicate document hierarchy to users, screen readers, and search engines.</p>"
        syntax_snip = "<h1>Heading 1 (Main Title)</h1>\n<h2>Heading 2 (Section)</h2>\n<h3>Heading 3 (Sub-section)</h3>"
    elif "Paragraph" in title:
        code_snip = "<p>This is the first paragraph. Browsers automatically add vertical margins to separate text blocks.</p>\n<p>This is the second paragraph. Paragraphs hold body text and flow responsively across screen sizes.</p>"
        syntax_snip = "<p>Paragraph content goes here...</p>"
    elif "Bold Text" in title:
        code_snip = "<p>Please note: <strong>All submitted code is verified automatically</strong> (strong importance).</p>\n<p>Search keyword: <b>JavaScript</b> (stylistic bold without extra urgency).</p>"
        syntax_snip = "<strong>Important text with semantic urgency</strong>\n<b>Visually bold keyword</b>"
    elif "Emphasized Text" in title:
        code_snip = "<p>You must <em>always</em> validate user input on the server (semantic stress).</p>\n<p>Scientific nomenclature: <i>Tyrannosaurus rex</i> (stylistic italic).</p>"
        syntax_snip = "<em>Emphasized spoken stress</em>\n<i>Alternative voice / italic text</i>"
    elif "Underlined" in title:
        code_snip = "<p>Spelling check: The student wrote <u style=\"text-decoration-color: #ef4444;\">seperate</u> instead of separate.</p>"
        syntax_snip = "<u>Unarticulated text annotation</u>"
    elif "Highlighted" in title:
        code_snip = "<p>Search query results for 'HTML': Found in <mark>HTML5 Masterclass</mark> and <mark>HTML Practice</mark>.</p>"
        syntax_snip = "<mark>Highlighted relevant text</mark>"
    elif "Small Text" in title:
        code_snip = "<p>Full Stack Software Engineer Certificate.</p>\n<p><small>&copy; 2026 Code From Zero. All rights reserved. Terms of service apply.</small></p>"
        syntax_snip = "<small>Side comments, copyright notices, or legal disclaimers</small>"
    elif "Deleted Text" in title:
        code_snip = "<p>Pro Membership: <del>$199 / year</del> <ins>$0 / Forever (Open Access)</ins></p>"
        syntax_snip = "<del>Deleted / superseded text</del>"
    elif "Inserted Text" in title:
        code_snip = "<p>Curriculum update: Now includes <ins>300+ Practice Coding Questions</ins> per language track.</p>"
        syntax_snip = "<ins>Inserted / newly added text</ins>"
    elif "Subscript" in title:
        code_snip = "<p>Chemical formula of Water: H<sub>2</sub>O</p>\n<p>Glucose formula: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></p>"
        syntax_snip = "<sub>Subscript text lower than baseline</sub>"
    elif "Superscript" in title:
        code_snip = "<p>Albert Einstein: E = mc<sup>2</sup></p>\n<p>Pythagorean theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>\n<p>Today is the 19<sup>th</sup> of October, 2026.</p>"
        syntax_snip = "<sup>Superscript text higher than baseline</sup>"
    elif "Inline Code" in title:
        code_snip = "<p>In JavaScript, use <code>console.log('Code From Zero')</code> to print output to the developer console.</p>\n<p>Use the <code>npm install</code> command to set up project dependencies.</p>"
        syntax_snip = "<code>code_snippet_or_function_name()</code>"
    elif "Preformatted" in title:
        code_snip = "<pre>\n  // Preserved whitespace, indents, and newlines\n  function calculateSuitrate(solved, total) {\n    return Math.round((solved / total) * 100);\n  }\n</pre>"
        syntax_snip = "<pre>Preserved text with exact spaces and lines</pre>"
    elif "Blockquote" in title:
        code_snip = "<blockquote cite=\"https://en.wikipedia.org/wiki/Tim_Berners-Lee\">\n  <p>\"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.\"</p>\n  <footer>— <cite>Sir Tim Berners-Lee, Inventor of the World Wide Web</cite></footer>\n</blockquote>"
        syntax_snip = "<blockquote cite=\"source-url\">\n  <p>Quoted excerpt text...</p>\n</blockquote>"
    elif "Short Quotation" in title:
        code_snip = "<p>Linus Torvalds once famously stated, <q>Talk is cheap. Show me the code.</q></p>"
        syntax_snip = "<p>Inline text containing <q>short quotation</q>.</p>"
    elif "Abbreviation" in title:
        code_snip = "<p>Welcome to <abbr title=\"Code From Zero\">CFZ</abbr>, mastering <abbr title=\"HyperText Markup Language\">HTML</abbr> and <abbr title=\"Cascading Style Sheets\">CSS</abbr>.</p>"
        syntax_snip = "<abbr title=\"Full Expanded Meaning\">ACRONYM</abbr>"
    elif "Address Element" in title:
        code_snip = "<address>\n  <strong>Code From Zero Learning Labs</strong><br>\n  Inquiries: <a href=\"mailto:team@codefromzero.dev\">team@codefromzero.dev</a><br>\n  Platform: <a href=\"https://codefromzero.dev\">codefromzero.dev</a>\n</address>"
        syntax_snip = "<address>Author or organization contact information</address>"
    elif "Bidirectional" in title or "Text Direction" in title:
        code_snip = "<p>Standard Left-to-Right: Hello Developers!</p>\n<p>Bidirectional Override (RTL): <bdo dir=\"rtl\">Hello Developers!</bdo></p>\n<p dir=\"rtl\">مرحبا بكم في كود فروم زيرو (Native Right-to-Left Arabic text)</p>"
        syntax_snip = "<bdo dir=\"rtl\">Text with explicit bidirectional override</bdo>"
    elif "Whitespace" in title:
        code_snip = "<p>HTML automatically collapses multiple     spaces     into     one.</p>\n<p>Use non-breaking spaces like this:&nbsp;&nbsp;&nbsp;&nbsp;to enforce separation.</p>\n<pre>Or use preformatted text for verbatim indentation.</pre>"
        syntax_snip = "<p>Text with&nbsp;non-breaking&nbsp;spaces</p>"
    elif "Line Break" in title:
        code_snip = "<p>Line one of an address block<br>Line two with suite or apartment<br>City, State and Zip Code</p>"
        syntax_snip = "First line of text<br>Second line directly underneath"
    elif "Horizontal Rule" in title:
        code_snip = "<h2>Chapter 1: The Foundations</h2>\n<p>Understanding tags and elements...</p>\n<hr>\n<h2>Chapter 2: Semantic Architecture</h2>\n<p>Structuring real-world layouts...</p>"
        syntax_snip = "<!-- Theatrical or thematic thematic break -->\n<hr>"
    elif "Special Text" in title:
        code_snip = "<p>Press <kbd>Ctrl</kbd> + <kbd>K</kbd> to open the quick navigation palette.</p>\n<p>Terminal output: <samp>Compilation succeeded (0 errors, 2480 questions indexed)</samp></p>\n<p>Algebra: <var>y</var> = 2<var>x</var> + 5</p>"
        syntax_snip = "<kbd>Key</kbd> | <samp>Output</samp> | <var>x</var>"
    elif "Anchor" in title or "Link" in title or "href" in title:
        code_snip = "<p>Visit our platform: <a href=\"https://codefromzero.dev\" target=\"_blank\" rel=\"noopener noreferrer\">Code From Zero</a></p>\n<p><a href=\"#syllabus\">Jump to Course Syllabus</a></p>"
        syntax_snip = "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener\">Link Text</a>"
    elif "Image" in title or "src" in title or "alt" in title:
        code_snip = "<img src=\"https://picsum.photos/400/250\" alt=\"Modern workspace laptop with clean code editor\" width=\"400\" height=\"250\">\n<p>Always include descriptive alternative text for screen readers and SEO.</p>"
        syntax_snip = "<img src=\"url-to-image.jpg\" alt=\"Clear description\" width=\"400\" height=\"300\">"
    elif "Table" in title or "colspan" in title or "rowspan" in title:
        code_snip = "<table border=\"1\" cellpadding=\"8\">\n  <thead>\n    <tr>\n      <th>Student Name</th>\n      <th>Course Track</th>\n      <th>Questions Solved</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alex Rivera</td>\n      <td>HTML5 & Web Architecture</td>\n      <td>310 / 310</td>\n    </tr>\n    <tr>\n      <td>Sarah Chen</td>\n      <td>Frontend Development</td>\n      <td>310 / 310</td>\n    </tr>\n  </tbody>\n</table>"
        syntax_snip = "<table>\n  <thead><tr><th>Header</th></tr></thead>\n  <tbody><tr><td>Data</td></tr></tbody>\n</table>"
    elif "Form" in title or "Input" in title or "Button" in title or "Textarea" in title or "Select" in title:
        code_snip = "<form action=\"/api/submit\" method=\"POST\">\n  <div>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Enter your name\" required>\n  </div>\n  <br>\n  <div>\n    <label for=\"email\">Email Address:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"student@example.com\" required>\n  </div>\n  <br>\n  <button type=\"submit\">Submit Form</button>\n</form>"
        syntax_snip = "<form action=\"/submit\" method=\"POST\">\n  <label for=\"field\">Label</label>\n  <input type=\"text\" id=\"field\" name=\"field\" required>\n  <button type=\"submit\">Submit</button>\n</form>"
    elif "List" in title:
        code_snip = "<h3>Essential Frontend Skills:</h3>\n<ul>\n  <li>Semantic HTML5</li>\n  <li>Modern Responsive CSS</li>\n  <li>JavaScript & DOM Manipulation</li>\n</ul>"
        syntax_snip = "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n</ul>"
    elif "Semantic" in title or "Header" in title or "Footer" in title or "Nav" in title or "Article" in title:
        code_snip = "<header>\n  <h2>Developer Journal</h2>\n  <nav>\n    <a href=\"#home\">Home</a> · <a href=\"#archive\">Archive</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h3>Mastering HTML Semantics</h3>\n    <p>Semantic tags describe their meaning to browsers and assistive technologies.</p>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 Code From Zero. All rights reserved.</p>\n</footer>"
        syntax_snip = "<header>...</header>\n<main><article>...</article></main>\n<footer>...</footer>"
    elif is_proj:
        code_snip = f"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>{title} - Code From Zero Project</title>\n  <style>\n    body {{ font-family: system-ui, sans-serif; max-width: 650px; margin: 40px auto; line-height: 1.6; padding: 0 16px; color: #1e293b; }}\n    h1 {{ color: #4338ca; }}\n    .card {{ background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-top: 16px; }}\n    button {{ background: #4f46e5; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-weight: bold; }}\n  </style>\n</head>\n<body>\n  <h1>Project: {title}</h1>\n  <p>Welcome to this complete, hands-on HTML project from Code From Zero.</p>\n  <div class=\"card\">\n    <h3>Interactive Component</h3>\n    <p>Demonstrating full real-world semantic structure, accessible form fields, and clean presentation.</p>\n    <button onclick=\"alert('Project verified successfully!')\">Run Test Action</button>\n  </div>\n</body>\n</html>"
        syntax_snip = "<!DOCTYPE html>\n<html>...</html>"
    else:
        code_snip = f"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>{title} - Code From Zero</title>\n</head>\n<body>\n  <h2>Topic: {title}</h2>\n  <p>This is a complete, working HTML demonstration of <strong>{title}</strong>.</p>\n  <section>\n    <p>Always ensure tags are properly nested, closed, and written in clean semantic format.</p>\n  </section>\n</body>\n</html>"
        syntax_snip = f"<!-- Syntax for {title} -->\n<{clean_tag.split('-')[0]}>Content</{clean_tag.split('-')[0]}>"

    meaning_text = f"{title} refers to the foundational web concept that enables developers to define, format, or organize content within an HTML document so browsers can render it correctly."
    definition_text = f"In web development, {title} is an official HTML standard feature defined by the W3C and WHATWG HTML Living Standard used to structure hypermedia and user interfaces."
    why_text = f"We use {title} because it provides clear structural semantics, assists browser rendering engines in building the DOM tree, improves accessibility for assistive technologies, and enhances search engine indexing."
    
    explanation_text = f"""### Understanding {title} Step by Step

1. **The Core Concept**: In web architecture, content must have structural meaning. {title} provides the precise syntax and attributes necessary to represent this concept accurately.
2. **Browser Processing**: When a web browser parses this code, it converts the tags into Document Object Model (DOM) nodes, calculating layout positions and rendering the visual display.
3. **Accessibility & Semantics**: By using standard {title} conventions, screen readers, search engine spiders, and browser extensions can parse your document with 100% fidelity.
4. **Integration**: {title} seamlessly pairs with CSS for visual typography and styling, and JavaScript for interactive logic and state updates."""

    expected_output_text = f"The browser displays a clearly structured document where {title} is rendered according to official HTML standards, providing readable typography, clean layout bounds, and responsive styling."

    common_mistakes = [
        f"Omitting closing tags or misplacing brackets when declaring {title}.",
        f"Using non-semantic generic containers instead of dedicated HTML elements for {title}.",
        f"Forgetting mandatory accessibility attributes like alt or descriptive labels."
    ]

    best_practices = [
        f"Always validate your markup against the W3C HTML validator.",
        f"Use lowercase element and attribute names in compliance with modern HTML5 conventions.",
        f"Keep presentation in CSS while using {title} strictly for structural markup."
    ]

    real_world_apps = [
        f"Used on production e-commerce and SaaS platforms to display high-conversion content.",
        f"Essential for building responsive developer portals, documentation pages, and personal portfolios.",
        f"Standard industry practice implemented across Google, Wikipedia, GitHub, and top tech companies."
    ]

    code_explanation = [
        f"<!DOCTYPE html>: Informs modern browsers to render in strict HTML5 standards mode.",
        f"<{clean_tag.split('-')[0]}>: Declares the primary element handling {title}.",
        f"Attributes: Provide metadata and configuration parameters to customize browser behavior."
    ]

    exercises = [
        {
            "title": f"Exercise 1: Basic Understanding of {title}",
            "difficulty": diff,
            "task": f"Explain in your own words the primary purpose of {title} and write a 2-line code snippet.",
            "instructions": f"Open your editor, create the basic tag for {title}, and add relevant text content.",
            "hint": f"Review the syntax section above; ensure opening and closing tags match.",
            "solution": code_snip[:150] + "...",
            "explanation": f"{title} defines structural meaning and ensures predictable browser rendering."
        },
        {
            "title": f"Exercise 2: Write Working Code for {title}",
            "difficulty": diff,
            "task": f"Create an accessible HTML block using {title} with appropriate attributes.",
            "instructions": f"Include proper attributes and inspect the live preview output.",
            "hint": f"Check for any unclosed tags or missing quotation marks on attribute values.",
            "solution": code_snip,
            "explanation": f"Properly structured HTML tags pass validation and render cleanly."
        },
        {
            "title": f"Exercise 3: Real-World Application Challenge",
            "difficulty": diff,
            "task": f"Integrate {title} into a mini webpage layout featuring a header, main section, and footer.",
            "instructions": f"Combine {title} with semantic HTML elements for an industry-grade portfolio component.",
            "hint": f"Organize your code logically from top to bottom.",
            "solution": code_snip,
            "explanation": f"Real-world web development combines multiple semantic building blocks into cohesive pages."
        }
    ]

    quiz = [
        {
            "question": f"What is the primary role of {title} in modern HTML development?",
            "options": [
                f"To provide structural meaning and standard browser representation",
                f"To compile binary machine code for the operating system",
                f"To directly style pixel colors without using CSS",
                f"To replace database storage on backend servers"
            ],
            "correctAnswer": 0,
            "explanation": f"{title} is part of the HTML standard that defines document structure, allowing browsers to render content accurately."
        },
        {
            "question": f"Which of the following statements about {title} is correct?",
            "options": [
                f"It is officially specified in the HTML5 / HTML Living Standard",
                f"It requires a paid license from browser vendors",
                f"It can only be viewed in Google Chrome",
                f"It was completely deprecated in 1999"
            ],
            "correctAnswer": 0,
            "explanation": f"Modern web technologies adhere to the WHATWG HTML Living Standard and W3C specifications."
        },
        {
            "question": f"When implementing {title}, what is considered the best practice?",
            "options": [
                f"Ensure correct semantic nesting, valid syntax, and clear accessibility attributes",
                f"Nest it inside a dozen unclosed <div> tags without closing brackets",
                f"Write inline font colors in hex for every character",
                f"Avoid using modern browsers altogether"
            ],
            "correctAnswer": 0,
            "explanation": f"Clean syntax, valid markup nesting, and accessible labels guarantee consistent cross-browser rendering."
        },
        {
            "question": f"How do web browsers interpret {title} during parsing?",
            "options": [
                f"By building corresponding DOM nodes into the document tree",
                f"By converting it into a PDF file",
                f"By formatting the physical hard drive",
                f"By ignoring all characters between brackets"
            ],
            "correctAnswer": 0,
            "explanation": f"Browsers tokenize HTML tags into DOM element nodes which form the rendered tree."
        },
        {
            "question": f"Why is {title} preferred over non-standard or generic markup?",
            "options": [
                f"It provides native accessibility, SEO indexing, and predictable styling",
                f"It uses proprietary binary encryption",
                f"It bypasses all CSS layout rules",
                f"It works without an internet browser"
            ],
            "correctAnswer": 0,
            "explanation": f"Semantic web standards ensure compatibility with assistive devices, search robots, and mobile browsers."
        }
    ]

    lesson = {
        "id": f"html-proj-{global_id}" if is_proj else f"html-{global_id}",
        "title": title,
        "section": f"Module {mod_num}: {mod_title}",
        "moduleNumber": mod_num,
        "moduleTitle": mod_title,
        "difficulty": diff,
        "duration": "8 min" if diff == "Beginner" else ("12 min" if diff == "Intermediate" else "15 min"),
        "keyConcepts": [title, f"Module {mod_num}", "HTML5", "Web Standards", diff],
        "meaning": meaning_text,
        "definition": definition_text,
        "introduction": f"Welcome to this lesson on {title}. This comprehensive tutorial teaches you everything you need to know from first principles.",
        "simpleExplanation": explanation_text,
        "whyUseIt": why_text,
        "syntax": syntax_snip,
        "codeExample": code_snip,
        "codeExplanation": code_explanation,
        "expectedOutput": expected_output_text,
        "commonMistakes": common_mistakes,
        "bestPractices": best_practices,
        "realWorldApplications": real_world_apps,
        "practiceExercises": exercises,
        "quiz": quiz,
        "summary": f"{title} is an essential component of HTML5. Mastering its syntax and semantics empowers you to build robust, accessible, and high-performance websites."
    }

    return lesson

def main():
    print("Building full HTML curriculum dataset...")
    all_lessons = []
    module_infos = []
    global_lesson_id = 1

    # Modules 1 through 19: 356 lessons
    for mod_num, mod_title, topics in MODULES_SPEC:
        if mod_num <= 19:
            start_id = f"html-{global_lesson_id}"
            module_infos.append({
                "number": mod_num,
                "title": mod_title,
                "lessonCount": len(topics),
                "startLessonId": start_id
            })
            for title in topics:
                lesson = make_lesson(global_lesson_id, mod_num, mod_title, title, is_proj=False)
                all_lessons.append(lesson)
                global_lesson_id += 1
        else:
            # Module 20: 22 Projects
            module_infos.append({
                "number": mod_num,
                "title": mod_title,
                "lessonCount": len(topics),
                "startLessonId": "html-proj-1"
            })
            proj_num = 1
            for title in topics:
                proj_lesson = make_lesson(proj_num, 20, "HTML Projects", title, is_proj=True)
                all_lessons.append(proj_lesson)
                proj_num += 1

    print(f"Total HTML units built: {len(all_lessons)} (356 lessons + 22 projects).")
    print(f"Modules indexed: {len(module_infos)}")

    # Construct the HTML Tutorial Object
    html_tutorial = {
        "id": "html",
        "name": "HTML5 Masterclass",
        "language": "HTML",
        "tagline": "Master modern HTML from zero to advanced with 20 modules, 356 lessons, interactive playgrounds, quizzes, and 22 guided projects.",
        "totalModules": 20,
        "totalLessons": len(all_lessons),
        "lessons": all_lessons
    }

    out_ts = """// CODE FROM ZERO - MASTER HTML CURRICULUM DATASET
// 20 Modules · 356 Interactive Lessons · 22 Real-World Projects
import { TutorialLesson } from '../types';

export interface HTMLModuleInfo {
  number: number;
  title: string;
  lessonCount: number;
  startLessonId: string;
}

export const HTML_MODULES: HTMLModuleInfo[] = """ + json.dumps(module_infos, indent=2) + """;

export const HTML_TUTORIAL_LESSONS: TutorialLesson[] = """ + json.dumps(all_lessons, indent=2) + """;

export const HTML_TUTORIAL_DATA = """ + json.dumps(html_tutorial, indent=2) + """;
"""

    with open("src/data/htmlTutorialsData.ts", "w", encoding="utf-8") as f:
        f.write(out_ts)

    print("Successfully generated src/data/htmlTutorialsData.ts with accurate startLessonIds and text lessons!")

if __name__ == "__main__":
    main()
