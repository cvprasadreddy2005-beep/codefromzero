import json
import os
from data_part1 import items_p1
from data_part2 import items_p2
from data_part3 import items_p3
from data_part4 import items_p4

all_raw = items_p1 + items_p2 + items_p3 + items_p4
print(f"Total raw items gathered: {len(all_raw)}")
assert len(all_raw) == 300, f"Expected 300, got {len(all_raw)}"

# Verify categories
categories = {}
questions = []

for idx, item in enumerate(all_raw, start=1):
    cat, diff, topic, qtype, text, hints, sol, expl, extra = item
    categories[cat] = categories.get(cat, 0) + 1
    q = {
        "id": idx,
        "category": cat,
        "difficulty": diff,
        "topic": topic,
        "type": qtype,
        "question": text,
        "hints": hints,
        "solution": sol,
        "explanation": expl,
        "options": extra.get("options", []),
        "correctAnswer": extra.get("correctAnswer", None),
        "code": extra.get("code", ""),
        "examples": extra.get("examples", []),
        "constraints": extra.get("constraints", ["Standard limits apply"]),
        "timeComplexity": extra.get("timeComplexity", None),
        "spaceComplexity": extra.get("spaceComplexity", None),
        "tags": extra.get("tags", [cat.lower().replace(" ", "-"), topic.lower().replace(" ", "-")])
    }
    questions.append(q)

print("\n--- CATEGORY COUNTS VERIFICATION ---")
for cat, count in categories.items():
    print(f"  {cat}: {count}")

print(f"\nTotal Categories: {len(categories)} (Expected: 19)")
assert len(categories) == 19
print(f"Total Questions: {len(questions)} (Expected: 300)")
assert len(questions) == 300

# Write to src/data/questionsData.ts
ts_content = f"""// AUTO-GENERATED CURATED 300 QUESTIONS DATASET
// Exactly 300 questions across 19 categories for Code From Zero platform
import {{ Question, CategoryInfo }} from '../types';

export const QUESTIONS_DATA: Question[] = {json.dumps(questions, indent=2)};

export const CATEGORIES_DATA: CategoryInfo[] = [
  {{ name: "JavaScript", count: 25, icon: "FileCode", description: "Variables, ES6, closures, async, event loop & DOM" }},
  {{ name: "Python", count: 25, icon: "Terminal", description: "Syntax, data structures, OOP, decorators & asyncio" }},
  {{ name: "Java", count: 25, icon: "Coffee", description: "OOP, streams, concurrency, collections & JVM" }},
  {{ name: "SQL and Databases", count: 20, icon: "Database", description: "Queries, joins, indexing, normalization & transactions" }},
  {{ name: "HTML", count: 15, icon: "Globe", description: "Semantics, accessibility, forms, meta tags & modern standards" }},
  {{ name: "CSS", count: 15, icon: "Palette", description: "Flexbox, CSS grid, responsiveness, animations & specificity" }},
  {{ name: "Git and GitHub", count: 15, icon: "GitBranch", description: "Branching, merging, rebasing, commits & team workflows" }},
  {{ name: "Cybersecurity", count: 15, icon: "Shield", description: "Web app security, OWASP top 10, auth, encryption & hardening" }},
  {{ name: "AI and Machine Learning", count: 20, icon: "Cpu", description: "Supervised/unsupervised, deep learning, NLP & transformers" }},
  {{ name: "Data Analysis", count: 15, icon: "BarChart", description: "Pandas, statistical summaries, EDA & data wrangling" }},
  {{ name: "Data Structures", count: 20, icon: "Layers", description: "Arrays, stacks, queues, trees, heaps, graphs & hash tables" }},
  {{ name: "Algorithms", count: 20, icon: "Activity", description: "Search, sorting, two pointers, sliding window & DP" }},
  {{ name: "C Programming", count: 15, icon: "Code2", description: "Pointers, dynamic memory, structs, macros & low-level memory" }},
  {{ name: "C++ Programming", count: 15, icon: "Binary", description: "OOP, STL containers, templates, RAII & modern move semantics" }},
  {{ name: "Web Development", count: 15, icon: "Server", description: "HTTP protocols, REST APIs, SPAs, WebSockets & performance" }},
  {{ name: "Computer Networks", count: 7, icon: "Wifi", description: "OSI model, TCP/IP, DNS, routing & network protocols" }},
  {{ name: "Operating Systems", count: 7, icon: "HardDrive", description: "Processes, threads, virtual memory, paging & scheduling" }},
  {{ name: "Software Engineering and Testing", count: 6, icon: "CheckCircle2", description: "SOLID principles, TDD, CI/CD, design patterns & clean code" }},
  {{ name: "Problem Solving and Aptitude", count: 5, icon: "Zap", description: "Analytical reasoning, logical aptitude & quantitative math" }}
];

// Runtime safety assertions to programmatically guarantee 300 questions & 19 categories
export function verifyQuestionBank() {{
  const count = QUESTIONS_DATA.length;
  const categoriesCount = new Set(QUESTIONS_DATA.map(q => q.category)).size;
  return {{
    totalQuestions: count,
    isValidCount: count === 300,
    totalCategories: categoriesCount,
    isValidCategories: categoriesCount === 19
  }};
}}
"""

os.makedirs("src/data", exist_ok=True)
with open("src/data/questionsData.ts", "w") as f:
    f.write(ts_content)

print("Successfully wrote src/data/questionsData.ts!")
